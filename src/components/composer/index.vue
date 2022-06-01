<template>
  <div>
    <div class="title-input-container">
      <span class="active-part"></span>
      <input
        class="text-box title"
        type="text"
        v-model="state.title"
        placeholder="Your amazing title"
        maxlength="100"
      />
    </div>
    <div class="space-y-8 main-list" ref="mainList">
      <composer-item
        v-for="bullet in bullets"
        :key="bullet.id"
        :bullet="bullet"
        :showRemove="Boolean(bullets.length > 1)"
        :suggestions="state.suggestions"
        @text-changed="onTextChanged"
        @suggestion-query="handleSuggestionQuery"
        @removed="handleRemove"
        @selection-updated="handleSelectionUpdated"
        @blur="handleBlur"
        @focus="handleFocus"
      />
    </div>
    <button class="mt-3 add-bullet-btn" type="button" @click="addBullet({}, true)">
      <IconPlus alt="Add new bullet" />
      Add New Bullet
    </button>
  </div>
</template>

<script setup>
import Mitt from "mitt"
import { nextTick, onMounted, provide, reactive, ref, toRaw, watch } from "@vue/composition-api";
import ComposerItem from "./ComposerItem.vue";
import Sortable from "sortablejs";
import "quill/dist/quill.bubble.css";
import {
  emitBulletOnBlur,
  emitBulletOnFocus,
  emitCurrentSelectionAndFormat,
} from "../../utils/emitters";
import IconPlus from "../icons/IconPlus.vue";
import { useBulletsEditor } from "../../utils/useBulletsEditor";

const MAX_BULLET_LENGTH = 10;

const props = defineProps({
  value: {
    type: Array,
    required: true
  },
});

const emit = defineEmits([
  "input",
  "blur",
  "focus",
  "selection-updated",
  "suggestion-query",
]);

const bullets = ref(props.value);
const state = reactive({
  title: "",
  currentElement: null,
  currentSelection: null,
  suggestions: [""],
});

const eventHub = Mitt()
provide('eventHub', eventHub)

watch(() => bullets.value, (newValue) => {
  emit('input', newValue);
}, { deep: true });

const onTextChanged = (bullet) => {
  const { id } = bullet;
  const index = bullets.value.findIndex(({ id: bulletId }) => bulletId === id);
  bullets.value[index].prettyText = bullet.text;
  bullets.value[index].rawText = bullet.html;

};
const setEditorFocus = (editorId) => {
  const bulletIndex = bullets.value.findIndex(
    (item) => item.editorId === editorId
  );
  if (bulletIndex !== -1) {
    bullets.value[bulletIndex].focus = true;
  }
};

const removeOtherFocused = (bulletId) => {
  bullets.value.forEach((item) => {
    if (item.focus && item.id !== bulletId) {
      item.focus = false;
      handleBlur(item.id);
    }
  });
};

const addBullet = (bullet, focus = true) => {
  if (bullets.value.length < MAX_BULLET_LENGTH) {
    const { id: bulletId, prettyText: text } = bullet;
    const id = bulletId || Date.now().toString();
    const prettyText = text || "";
    const editorId = `editor_${id}`;
    bullets.value = [
      ...bullets.value,
      {
        ...bullet,
        id,
        editorId,
        editor: null,
        prettyText,
        focus: false,
        last_focus: 0,
      },
    ];

    removeOtherFocused(editorId);

    state.currentElement = document.querySelector(`.${editorId}`);
    nextTick(() => {
      if (focus) {
        focusBullet(id)
      }
    });
    // const $target = $('li:last');
    // $target.animate({scrollTop: $target.height()}, 400);
  }
};

const mainList = ref(null)
const loadSortable = () => {
  const list = document.querySelector(mainList.value);
  if (list) {
    Sortable.create(list, {
      axis: "y",
      handle: ".bullet-order",
      onStart: () => {
        console.log("moving");
        const lastFocusTime = Math.max.apply(
          Math,
          bullets.value.map((i) => i.last_focus)
        );
        const lastFocusedBullet = this.bullets.find(
          (item) => item.last_focus === lastFocusTime
        );
        if (lastFocusedBullet) {
          lastFocusedBullet.editor.blur();
          state.currentElement = null;
        }
      },
      onEnd: () => {
        // refreshIndicatorNumbers();
      },
    });
  }
};

const formatText = (format) => {
  const bullet = bullets.value.find((item) => item.focus === true);
  if (bullet) {
    const editor = toRaw(bullet.editor);
    editor.chain().focus().toggleMark(format).run();
    emitCurrentSelectionAndFormat(state.currentSelection);
  }
};

const quoteBullet = () => {
  const bullet = bullets.value.find((item) => item.focus === true);
  if (bullet) {
    const editor = toRaw(bullet.editor);
    editor.chain().focus().toggleBlockquote().run();
  }
};

//

function formatCurrentSelection(format) {
  formatText(format);
}

onMounted(() => {
  addBullet({ prettyText: "", rawText: "" }, false);
  setTimeout(() => {
    loadSortable();
    document.querySelector(".title").focus();
  });
});

// handle events items

const handleBlur = (bulletId) => {
  const bullet = bullets.value.find((item) => item.id === bulletId);
  if (bullet) {
    bullet.focus = false;
    state.currentElement = null;
    emitBulletOnBlur();
  }
};

const handleFocus = (bulletId) => {
  const bullet = bullets.value.find((item) => item.id === bulletId);
  if (bullet) {
    removeOtherFocused(bulletId);
    bullet.focus = true;
    state.currentElement = bullet.editor;
    emitBulletOnFocus(bullet.editorId);
  }
};

const handleRemove = (bulletId) => {
  bullets.value = bullets.value.filter((b) => b.id !== bulletId);
};

const handleSelectionUpdated = (selection) => {
  state.currentSelection = selection;
};

const handleSuggestionQuery = () => {
  // emitOnSuggestionQuery(query);
};

const { focusLastBullet } = useBulletsEditor(bullets, setEditorFocus)
const bulletAction = (bulletId, actionName, params) => {
  eventHub.emit(`bullet:${bulletId}`, { name: actionName, params });
}

// ACTIONS::Exposed Actions

const insertText = (text) =>  {
  const lastBullet = focusLastBullet();
  bulletAction(lastBullet.id, 'insertText', text);
};

// execAction('insertText', param)

const formatSelection = (format) => {
  if (args.format === "code") {
    quoteBullet();
  } else {
    formatCurrentSelection(args.format);
  }
}

const setBulletDisplayType = (type) => {
   // changeBulletDisplayType(args);
}

const insertImages = (images) => {
  const lastBullet = focusLastBullet();
  bulletAction(lastBullet.id, 'insertImages', images);
};

const insertLink = (url) => {
  // @todo: handle insert link
  // this.insertLink(args);
};

const insertMention = (username) => {
  // @handle insert mention
  // this.insertMentionOrHashtag(args, 'mention');
}

const insertHashtag = (tag) => {
  // @handle insert hashtag
  // this.insertMentionOrHashtag(args, 'hashtag');
};

const insertMentionText = () => {
   // this.insertMentionText();
};

const insertLinkMemo = (memo) => {
   this.insertMemoLink(args);
};

const insertHashtagText = () => {
  //   this.insertHashTagText(args);
};

const setEditorColor = (color) => {
    //   this.setEditorColor(args);
};

const getContent = () => {
      
};

const setContent = (storm) =>{
  //setEditorContent(args.storm);
};

const addNewBullet = () => {
  addBullet({ prettyText: "", rawText: "" }, true);
};

const setTitleContent = (title) => {
  // emitOnTitleChange(state.title)
}

const blurBullet = () => {
 // blurEditor();
}

const focusBullet = (bulletId, selection) => {
  const bullet = bullets.value.find((item) => item.id === bulletId);
  if (bullet) {
    removeOtherFocused(bulletId);
    bullet.focus = true;
    bullet.last_focus = Date.now();
    state.currentElement = bullet.editor;
    emitBulletOnFocus(bullet.editorId);
    emitCurrentSelectionAndFormat(selection);
  }
}

const clearBullet = () => {
    //   this.clearEditor();
    //   this.addNewBullet();
}


defineExpose({
  addNewBullet,
  formatSelection,
  insertText,
  insertHashtag,
  insertHashtagText,
  insertMention,
  insertMentionText,
  insertImages,
  insertLink,
  insertLinkMemo,
  setEditorColor,
  getContent,
  setContent,
  setBulletDisplayType,
  setTitleContent,
  blurBullet,
  focusBullet,
  clearBullet
})
</script>
