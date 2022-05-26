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
    <div class="space-y-8 main-list">
      <composer-item
        v-for="bullet in state.bullets"
        :key="bullet.id"
        :bullet="bullet"
        :showRemove="Boolean(state.bullets.length > 1)"
        :suggestions="state.suggestions"
        @suggestion-query="handleSuggestionQuery"
        @removed="handleRemove"
        @selection-updated="handleSelectionUpdated"
        @blur="handleBlur"
        @focus="handleFocus"
      />
    </div>
    <button
      class="mt-3 add-bullet-btn"
      type="button"
      @click="addNewBullet({}, true)"
    >
      <IconPlus  alt="Add new bullet" />
      Add New Bullet
    </button>
  </div>
</template>

<script setup>
import { nextTick, onMounted, reactive, toRaw } from "@vue/composition-api";
import ComposerItem from "./ComposerItem.vue";
import Sortable from "sortablejs";
import { composerConstants, getContent } from "../../utils/index";
import "quill/dist/quill.bubble.css";
import {
  emitBulletOnBlur,
  emitBulletOnFocus,
  emitCurrentSelectionAndFormat,
  emitOnContentChange,
} from "../../utils/emitters";
import IconPlus from "../icons/IconPlus.vue";

const MAX_BULLET_LENGTH = 10;
const { MESSAGES } = composerConstants;

const props = defineProps({
  bulletData: {
    type: Array,
    default() {
      return [];
    },
  },
});

const state = reactive({
  title: "",
  bullets: props.bulletData,
  currentElement: null,
  currentSelection: null,
  suggestions: ["jesus", "jesus", "jesus", "jesus", "jesus"],
});

const setEditorFocus = (editorId) => {
  const bulletIndex = state.bullets.findIndex(
    (item) => item.editorId === editorId
  );
  if (bulletIndex !== -1) {
    state.bullets[bulletIndex].focus = true;
  }
};

const removeOtherFocused = (bulletId) => {
  state.bullets.forEach((item) => {
    if (item.focus && item.id !== bulletId) {
      item.focus = false;
      handleBlur(item.id);
    }
  });
};

const addNewBullet = (bullet, focus = true) => {
  if (state.bullets.length < MAX_BULLET_LENGTH) {
    const { id: bulletId, prettyText: text } = bullet;
    const id = bulletId || Date.now().toString();
    const prettyText = text || "";
    const editorId = `editor_${id}`;
    state.bullets = [
      ...state.bullets,
      {
        ...bullet,
        id,
        editorId,
        editor: null,
        prettyText,
        focus: false,
      },
    ];

    removeOtherFocused(editorId);

    state.currentElement = document.querySelector(`.${editorId}`);
    nextTick(() => {
      if (focus) {
        setEditorFocus(editorId);
      }
    });
    // emitOnContentChange();
    // const $target = $('li:last');
    // $target.animate({scrollTop: $target.height()}, 400);
  }
};

const loadSortable = () => {
  const list = document.querySelector(".main-list");
  Sortable.create(list, {
    axis: "y",
    handle: ".bullet-order",
    onStart: () => {
      console.log("moving");
      const lastFocusTime = Math.max.apply(
        Math,
        state.bullets.map((i) => i.last_focus)
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
      // emitOnContentChange();
      // refreshIndicatorNumbers();
    },
  });
};

const formatText = (format) => {
  const bullet = state.bullets.find((item) => item.focus === true);
  if (bullet) {
    const editor = toRaw(bullet.editor);
    editor.chain().focus().toggleMark(format).run();
    emitCurrentSelectionAndFormat(state.currentSelection);
  }
};

const quoteBullet = () => {
  const bullet = state.bullets.find((item) => item.focus === true);
  if (bullet) {
    const editor = toRaw(bullet.editor);
    editor.chain().focus().toggleBlockquote().run();
  }
};

//

function formatCurrentSelection(format) {
  formatText(format);
}

// ---LISTENER---
const receiveMessage = (event) => {
  if (event.data && typeof event.data === "string") {
    const data = JSON.parse(event.data);
    const { message, args } = data;
    switch (message) {
      case MESSAGES.ADD_NEW_BULLET:
        addNewBullet({ prettyText: "", rawText: "" }, true);
        break;
      case MESSAGES.FORMAT_TEXT: {
        if (args.format === "code") {
          quoteBullet();
        } else {
          formatCurrentSelection(args.format);
        }
        break;
      }
      // case MESSAGES.SET_CONTENT: {
      //   setEditorContent(args.storm);
      //   break;
      // }
      // case MESSAGES.SET_TITLE_CONTENT: {
      //   emitOnTitleChange(state.title)
      //   break;
      // }
      case MESSAGES.GET_CONTENT: {
        getContent((bullets) => {
          this.emitOnContentChange(bullets);
        });
        break;
      }

      // case MESSAGES.INSERT_IMAGE: {
      //   insertImage(args.images);
      //   break;
      // }
      // case MESSAGES.SET_BULLET_DISPLAY_TYPE: {
      //   changeBulletDisplayType(args);
      //   break;
      // }
      // case MESSAGES.INSERT_LINK: {
      //   this.insertLink(args);
      //   break;
      // }
      // case MESSAGES.INSERT_MENTION: {
      //   this.insertMentionOrHashtag(args, 'mention');
      //   break;
      // }
      // case MESSAGES.INSERT_HASHTAG: {
      //   this.insertMentionOrHashtag(args, 'hashtag');
      //   break;
      // }
      // case MESSAGES.INSERT_TEXT: {
      //   this.insertText(args);
      //   break;
      // }
      // case MESSAGES.INSERT_MENTION_TEXT: {
      //   this.insertMentionText();
      //   break;
      // }
      // case MESSAGES.INSERT_HASHTAG_TEXT: {
      //   this.insertHashTagText(args);
      //   break;
      // }
      // case MESSAGES.SET_EDITOR_COLOR: {
      //   this.setEditorColor(args);
      //   break;
      // }
      // case MESSAGES.BLUR_EDITOR: {
      //   this.blurEditor();
      //   break;
      // }
      // case MESSAGES.FOCUS_EDITOR: {
      //   this.focusEditor();
      //   break;
      // }
      // case MESSAGES.CLEAR_EDITOR: {
      //   this.clearEditor();
      //   this.addNewBullet();
      //   break;
      // }
      // case MESSAGES.INSERT_MEMO_LINK: {
      //   this.insertMemoLink(args);
      //   break;
      // }
    }
  }
};

onMounted(() => {
  addNewBullet({ prettyText: "", rawText: "" }, false);
  setTimeout(() => {
    loadSortable();
    document.querySelector(".title").focus();
  });

  window.addEventListener("message", receiveMessage, false);
});

// handle events

const handleBlur = (bulletId) => {
  const bullet = state.bullets.find((item) => item.id === bulletId);
  if (bullet) {
    bullet.focus = false;
    state.currentElement = null;
    emitBulletOnBlur();
  }
};

const handleFocus = (bulletId) => {
  const bullet = state.bullets.find((item) => item.id === bulletId);
  if (bullet) {
    removeOtherFocused(bulletId);
    bullet.focus = true;
    state.currentElement = bullet.editor;
    emitBulletOnFocus(bullet.editorId);
  }
};

const handleRemove = (bulletId) => {
  state.bullets = state.bullets.filter((b) => b.id !== bulletId);
  emitOnContentChange();
};

const handleSelectionUpdated = (selection) => {
  state.currentSelection = selection;
};

const handleSuggestionQuery = () => {
  // emitOnSuggestionQuery(query);
};
</script>
