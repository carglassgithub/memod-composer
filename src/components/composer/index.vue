<template>
  <div v-if="state" class="memod-composer">
    <div class="title-input-container">
      <span class="active-part"></span>
      <input
        ref="editorTitle"
        v-model="state.title"
        class="text-box title"
        type="text"
        placeholder="Your amazing title"
        maxlength="100" />
    </div>
    <div ref="mainList" class="space-y-8 main-list">
      <draggable
        v-model="state.bullets"
        group="bullets"
        handle=".bullet-order"
        @start="drag = true"
        @end="drag = false">
        <composer-item
          v-for="(bullet, index) in state.bullets"
          :key="`${bullet.id}-${index}`"
          :index="index"
          :bullet="bullet"
          :show-remove="Boolean(state.bullets.length > 1)"
          :suggestions="state.suggestions"
          :display-type="bulletDisplayType"
          :is-focused="bullet.focus"
          @text-changed="onTextChanged"
          @suggestion-query="handleSuggestionQuery"
          @removed="handleRemove"
          @selection-updated="handleSelectionUpdated"
          @blur="handleBlur"
          @focus="focusBullet(bullet.id)" />
      </draggable>
    </div>
    <button
      v-if="canAddBullets"
      class="mt-4 add-bullet-btn flex items-center"
      type="button"
      @click="addBullet({}, true)">
      <IconPlus alt="Add new bullet" />
      <span class="ml-3 block"> Add New Bullet </span>
    </button>
  </div>
</template>

<script setup>
import Mitt from 'mitt'
import {
  computed,
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  watch
} from '@vue/composition-api'
import ComposerItem from './ComposerItem.vue'
import Sortable from 'sortablejs'

import {
  emitBulletOnBlur,
  emitCurrentSelectionAndFormat
} from '../../utils/emitters'
import IconPlus from '../icons/IconPlus.vue'
import { useBulletsEditor } from '../../utils/useBulletsEditor'
import { toRefs } from '@vue/composition-api'
import { MAX_BULLET_LENGTH, BULLET_DISPLAY_TYPES } from '../../utils/constants'
import draggable from 'vuedraggable'
import { v4 } from 'uuid'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  value: {
    type: Array,
    required: true
  },
  suggestionQuerySearch: {
    type: Function,
    default: () => {}
  },
  bulletDisplayType: {
    type: String,
    validator: (value) => Object.values(BULLET_DISPLAY_TYPES).includes(value),
    default: BULLET_DISPLAY_TYPES.bullet
  }
})

provide('suggestionQuerySearch', props.suggestionQuerySearch)
const emit = defineEmits([
  'input',
  'blur',
  'focus',
  'selection-updated',
  'suggestion-query',
  'title-updated'
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

const canAddBullets = computed(() => state.bullets.length < MAX_BULLET_LENGTH)

const setContent = (bullets) => {
  const localbullets = JSON.parse(JSON.stringify(bullets))
  state.bullets = ref(
    localbullets.map((item) => {
      item.id = item.id || 'new_' + v4()
      return item
    })
  )
}

watch(
  () => props.title,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      state.title = newValue
    }
  },
  { immediate: true }
)

watch(
  () => state.title,
  (newValue, oldValue) => {
    emit('title-updated', state.title)
  },
  { immediate: true }
)

watch(
  () => [...props.value],
  (newValue, oldValue) => {
    if (
      newValue.length !== oldValue.length ||
      newValue.some(
        (bullet, index) => bullet.prettyText !== oldValue[index].prettyText
      )
    ) {
      setContent(newValue)
    }
  },
  { immediate: true, deep: true }
)

watch(
  () => [...state.bullets],
  (newValue) => {
    emit('input', newValue)
  },
  { deep: true }
)

const onTextChanged = (bullet) => {
  const { id } = bullet
  const index = state.bullets.findIndex(({ id: bulletId }) => bulletId === id)
  state.bullets[index].rawText = bullet.text
  state.bullets[index].prettyText = bullet.html
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
  state.bullets.forEach((item, index) => {
    if (item.focus && item.id !== bulletId) {
      state.bullets[index].focus = false
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
        prettyText,
        focus: false,
        last_focus: 0,
        rawText: ''
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
const loadSortable = () => {}

const formatText = (format) => {}

//

function formatCurrentSelection(format) {
  formatText(format)
}

onMounted(() => {
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

const formatSelection = (format) => {
  const lastBullet = focusLastBullet()
  bulletAction(lastBullet?.id, 'formatSelection', format)
}

const insertImages = (images) => {
  const lastBullet = focusLastBullet(state.bullets)
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

const setEditorColor = (color) => {
  //   this.setEditorColor(args);
}

const addNewBullet = () => {
  addBullet({ prettyText: '', rawText: '' }, true)
}

const setTitleContent = (title) => {
  state.title = title
}

const editorTitle = ref()
const blurBullet = () => {
  const lastBullet = focusLastBullet()
  editorTitle.value?.blur()
  bulletAction(lastBullet?.id, 'blur')
}

const focusBullet = (bulletId, selection) => {
  const bulletIndex = state.bullets.findIndex((item) => item.id === bulletId)
  if (bulletIndex !== -1) {
    state.bullets = state.bullets.map((bullet) => {
      if (bullet.id == bulletId) {
        bullet.focus = true
        bullet.last_focus = Date.now()
        state.currentElement = document.querySelector(`.editor_${bullet.id}`)
        emit('focus', bullet, selection)
        emitCurrentSelectionAndFormat(selection)
      } else {
        bullet.focus = false
      }
      return bullet
    })
  }
}

const clearBullet = () => {
  state.bullets.splice(0, state.bullets.length)
  state.title = ''
  state.bulletDisplayType = BULLET_DISPLAY_TYPES.bullet
  addNewBullet()
}

defineExpose({
  addNewBullet,
  insertText,
  insertImages,
  insertMemoLink,
  insertLink,
  insertMention,
  formatSelection,
  setTitleContent,
  blurBullet,
  focusBullet,
  clearBullet,
  setContent
})
</script>
