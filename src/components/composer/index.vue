<template>
  <div>
    <div class="title-input-container">
      <span class="active-part"></span>
      <input
        v-model="state.title"
        class="text-box title"
        type="text"
        placeholder="Your amazing title"
        maxlength="100" />
    </div>
    <div ref="mainList" class="space-y-8 main-list">
      <composer-item
        v-for="bullet in state.bullets"
        :key="bullet.id"
        :bullet="bullet"
        :show-remove="Boolean(state.bullets.length > 1)"
        :suggestions="state.suggestions"
        @text-changed="onTextChanged"
        @suggestion-query="handleSuggestionQuery"
        @removed="handleRemove"
        @selection-updated="handleSelectionUpdated"
        @blur="handleBlur"
        @focus="focusBullet(bullet.id)" />
    </div>
    <button
      class="mt-3 add-bullet-btn"
      type="button"
      @click="addBullet({}, true)">
      <IconPlus alt="Add new bullet" />
      Add New Bullet
    </button>
    <p>{{ state.bullets.length }}</p>
  </div>
</template>

<script setup>
import Mitt from 'mitt'
import {
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  toRaw,
  watch
} from '@vue/composition-api'
import ComposerItem from './ComposerItem.vue'
import Sortable from 'sortablejs'

import {
  emitBulletOnBlur,
  emitBulletOnFocus,
  emitCurrentSelectionAndFormat
} from '../../utils/emitters'
import IconPlus from '../icons/IconPlus.vue'
import { useBulletsEditor } from '../../utils/useBulletsEditor'
import { toRefs } from '@vue/composition-api'

const MAX_BULLET_LENGTH = 10

const props = defineProps({
  value: {
    type: Array,
    required: true
  },
  suggestionQuerySearch: {
    type: Function,
    default: () => {}
  }
})

provide('suggestionQuerySearch', props.suggestionQuerySearch)
const emit = defineEmits([
  'input',
  'blur',
  'focus',
  'selection-updated',
  'suggestion-query'
])

const state = reactive({
  title: '',
  currentElement: null,
  currentSelection: null,
  suggestions: [''],
  bullets: ref(props.value)
})

const eventHub = Mitt()
provide('eventHub', eventHub)

watch(
  () => state.bullets,
  (newValue) => {
    emit('input', newValue)
  },
  { deep: true }
)

const onTextChanged = (bullet) => {
  const { id } = bullet
  const index = state.bullets.findIndex(({ id: bulletId }) => bulletId === id)
  state.bullets[index].prettyText = bullet.text
  state.bullets[index].rawText = bullet.html
}
const setEditorFocus = (editorId) => {
  const bulletIndex = state.bullets.findIndex(
    (item) => item.editorId === editorId
  )
  if (bulletIndex !== -1) {
    state.bullets[bulletIndex].focus = true
  }
}

const removeOtherFocused = (bulletId) => {
  state.bullets.forEach((item) => {
    if (item.focus && item.id !== bulletId) {
      item.focus = false
      handleBlur(item.id)
    }
  })
}

const addBullet = (bullet, focus = true) => {
  if (state.bullets.length < MAX_BULLET_LENGTH) {
    const { id: bulletId, prettyText: text } = bullet
    const id = bulletId || Date.now().toString()
    const prettyText = text || ''
    const editorId = `editor_${id}`
    state.bullets = [
      ...state.bullets,
      {
        ...bullet,
        id,
        editorId,
        editor: null,
        prettyText,
        focus: false,
        last_focus: 0
      }
    ]

    removeOtherFocused(editorId)

    state.currentElement = document.querySelector(`.${editorId}`)
    nextTick(() => {
      if (focus) {
        focusBullet(id)
      }
    })
    // const $target = $('li:last');
    // $target.animate({scrollTop: $target.height()}, 400);
  }
}

const mainList = ref(null)
const loadSortable = () => {
  const list = document.querySelector('.main-list')
  if (list) {
    Sortable.create(list, {
      axis: 'y',
      handle: '.bullet-order',
      onStart: () => {
        const lastFocusTime = Math.max.apply(
          Math,
          state.bullets.map((i) => i.last_focus)
        )
        const lastFocusedBullet = this.bullets.find(
          (item) => item.last_focus === lastFocusTime
        )
        if (lastFocusedBullet) {
          lastFocusedBullet.editor.blur()
          state.currentElement = null
        }
      },
      onEnd: () => {
        // refreshIndicatorNumbers();
      }
    })
  }
}

const formatText = (format) => {}

//

function formatCurrentSelection(format) {
  formatText(format)
}

onMounted(() => {
  addBullet({ prettyText: '', rawText: '' }, true)
  setTimeout(() => {
    loadSortable()
    document.querySelector('.title')?.focus()
  })
})

// handle events items

const handleBlur = (bulletId) => {
  const bullet = state.bullets.find((item) => item.id === bulletId)
  if (bullet) {
    bullet.focus = false
    state.currentElement = null
    emitBulletOnBlur()
  }
}

const handleRemove = (bulletId) => {
  state.bullets = state.bullets.filter((b) => b.id !== bulletId)
}

const handleSelectionUpdated = (selection) => {
  state.currentSelection = selection
}

const handleSuggestionQuery = () => {
  // emitOnSuggestionQuery(query);
}

const { bullets } = toRefs(state)
const { focusLastBullet } = useBulletsEditor(bullets, setEditorFocus)
const bulletAction = (bulletId, actionName, params) => {
  eventHub.emit(`bullet:${bulletId}`, { name: actionName, params })
}

// ACTIONS::Exposed Actions

const insertText = (text) => {
  const lastBullet = focusLastBullet()
  bulletAction(lastBullet?.id, 'insertText', text)
}

// execAction('insertText', param)

const formatSelection = (format) => {
  if (args.format === 'code') {
    quoteBullet()
  } else {
    formatCurrentSelection(args.format)
  }
}

const setBulletDisplayType = (type) => {
  // changeBulletDisplayType(args);
}

const insertImages = (images) => {
  const lastBullet = focusLastBullet()
  bulletAction(lastBullet?.id, 'insertImages', images)
}

const insertLink = (url) => {
  const lastBullet = focusLastBullet()
  bulletAction(lastBullet?.id, 'insertLink', url)
}

const insertMemoLink = (memoMetadata) => {
  const lastBullet = focusLastBullet()
  bulletAction(lastBullet?.id, 'insertMemoLink', memoMetadata)
}

const insertMention = (user) => {
  const lastBullet = focusLastBullet()
  bulletAction(lastBullet?.id, 'insertMention', user)

}

const insertHashtag = (tag) => {
  // @handle insert hashtag
  // this.insertMentionOrHashtag(args, 'hashtag');
}

const insertMentionText = () => {
  // this.insertMentionText();
}

const insertHashtagText = () => {
  //   this.insertHashTagText(args);
}

const setEditorColor = (color) => {
  //   this.setEditorColor(args);
}

const addNewBullet = () => {
  addBullet({ prettyText: '', rawText: '' }, true)
}

const setTitleContent = (title) => {
  // emitOnTitleChange(state.title)
}

const blurBullet = () => {
  // blurEditor();
}

const focusBullet = (bulletId, selection) => {
  const bullet = state.bullets.find((item) => item.id === bulletId)
  if (bullet) {
    removeOtherFocused(bulletId)
    bullet.focus = true
    bullet.last_focus = Date.now()
    state.currentElement = bullet.editor
    emitBulletOnFocus(bullet.editorId)
    emitCurrentSelectionAndFormat(selection)
  }
}

const clearBullet = () => {
  //   this.clearEditor();
  //   this.addNewBullet();
}

defineExpose({
  addNewBullet, // Done
  insertText, // Done
  insertImages, // Done
  insertMemoLink, // Done
  insertLink, // Done
  insertHashtag,
  insertHashtagText,
  insertMention,
  insertMentionText,
  formatSelection,
  setEditorColor,
  setBulletDisplayType,
  setTitleContent,
  blurBullet, 
  focusBullet, // Done
  clearBullet
})
</script>
