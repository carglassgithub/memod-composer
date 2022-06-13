/* eslint-disable no-debugger */
<template>
  <li
    :id="`editor_${bullet.id}`"
    class="relative composer-item"
    data-testid="composer-item"
    :new-content="bullet.id ? 'true' : 'false'">
    <div class="bullet" :is-active-bullet="bullet.focus ? 'true' : 'false'">
      <div class="bullet-container">
        <div class="bullet-order">
          <div class="indicator-container">
            <span
              class="inline-block bullet-indicator indicator"
              :data-active="bullet.focus ? 'true' : 'false'" />
            <span
              class="bullet-indicator indicator-number"
              :data-active="bullet.focus ? 'true' : 'false'" />
          </div>
          <IconOrder class="bullet-order-img" />
        </div>
        <div ref="editorRef" :class="`li-input editor_${bullet.id}`" />
        <div class="bullet-char-counter">
          {{ chartCount(bullet.rawText) }}/ {{ CHAR_LIMIT }}
        </div>
      </div>
    </div>
    <div
      v-if="bullet.focus && showRemove"
      class="remove-bullet"
      data-testid="btn-remove-bullet"
      @click.prevent.stop="$emit('removed', bullet.id)">
      <IconClose />
    </div>
  </li>
</template>

<script setup>
import Quill from '../../utils/base'
import {
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRaw
} from '@vue/composition-api'
import { getLastInsertedChar } from '../../utils/index'
import IconClose from '../icons/IconClose.vue'
import IconOrder from '../icons/IconOrder.vue'
import { emitCurrentSelectionAndFormat } from '../../utils/emitters'
import { resizerConfig } from '../../config/index'
import { BULLET_DISPLAY_TYPES, composerConstants } from "../../utils/constants"

let EVENT_WORD_INDEX = 0
// eslint-disable-next-line no-unused-vars
let EVENT_WORD_LENGTH = 0
const { CHAR_LIMIT, COMPOSER_URL_REGEX, COMPOSER_HTML_REGEX } =
  composerConstants

const emit = defineEmits([
  'blur',
  'focus',
  'selection-updated',
  'suggestion-query',
  'text-changed',
  'removed',
  'selection-format'
])

const props = defineProps({
  bullet: {
    type: Object,
    default() {
      return {}
    }
  },
  showRemove: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: 'Add Memo bullet here'
  },
  suggestions: {
    type: Array,
    default() {
      return []
    }
  },
  displayType: {
    type: String,
    default: BULLET_DISPLAY_TYPES.bullet
  }
})

const editorRef = ref()

const suggestionQuerySearch = inject('suggestionQuerySearch', () => {})

const state = reactive({
  CHAR_LIMIT,
  editor: null,
  currentSelection: null
})

const eventHub = inject('eventHub', { on: () => {}, emit: () => {} })

// Temporaly
const atValues = [
  { id: 1, value: 'Fredrik Sundqvist' },
  { id: 2, value: 'Patrik Sjölin' }
]

onMounted(() => {
  state.editor = new Quill(editorRef.value, {
    modules: {
      toolbar: ['bold', 'italic', 'underline', 'blockquote', 'link', 'mention'],
      mention: {
        mentionDenotationChars: ['@'],
        source(searchTerm, renderList, mentionChar) {
          let values

          if (mentionChar === '@') {
            values = atValues
          }

          renderList(values, searchTerm)
        },
        keyboard: {
          bindings: {
            'list autofill': {
              prefix: /^\s*()$/
            }
          }
        }
      }
    },
    theme: 'bubble',
    placeholder: props.placeholder
  })

  state.editor.on(Quill.events.SELECTION_CHANGE, (range) => {
    if (range) {
      emit('focus', props.bullet.id)
    }
  })

  state.editor.on(Quill.events.TEXT_CHANGE, (delta) => {
    const char = getLastInsertedChar(delta)
    if ([' ', '\n'].includes(char)) {
      checkLinkText(state.editor, delta)
    }
    emitTextChanges()
    nextTick(() => {
      state.currentSelection = state.editor.getSelection()
      emitCurrentSelectionAndFormat(state.currentSelection)
    })
  })

  state.editor.root.addEventListener('blur', () => {
    state.editor.disable()
    checkLinkText(state.editor, state.editor.getLength(), true)
  })

  if (props.bullet.prettyText) {
    state.editor.root.innerHTML = props.bullet.prettyText
  }
  // eslint-disable-next-line vue/no-mutating-props
  props.bullet.editor = state.editor

  eventHub.on(`bullet:${props.bullet.id}`, (actionName, params) => {
    execAction(actionName, params)
  })
})

const emitTextChanges = () => {
  state.text = state.editor.getText()
  state.html = state.editor.root.innerHTML

  emit('text-changed', {
    text: state.text,
    html: state.html,
    id: props.bullet.id
  })
}

onBeforeUnmount(() => {
  toRaw(state.editor).off('text-change')
  toRaw(state.editor).off('selection-change')
})

/*** Custom link management
 *
 *
 * ***/
function getEventTriggerWord(editor, delta, sliceStart = 1) {
  let length = 0
  const [obj] = delta.ops
  if (obj.retain) {
    length = obj.retain
  }

  EVENT_WORD_LENGTH = length
  return state.editor.getText(EVENT_WORD_INDEX + sliceStart, length).trim()
}

// function insertLink(url) {
//   insertEmbed("memod-link", url);
// }
function checkLinkText(currentEditor, delta) {
  let triggeredWord
  let wordIndex
  let isClickOutside = false
  if (typeof delta == 'number') {
    triggeredWord = getLastWord(currentEditor, delta, 0)
    wordIndex = delta
    isClickOutside = true
  } else {
    triggeredWord = getEventTriggerWord(currentEditor, delta, 0)
    const [obj] = delta.ops
    wordIndex = obj.retain
  }

  if (triggeredWord.match(COMPOSER_URL_REGEX)) {
    const matches = triggeredWord.match(COMPOSER_URL_REGEX)
    const lastMatch = matches[matches.length - 1]
    const word = triggeredWord.slice(-lastMatch.length)
    handleMatchedLinks(word, wordIndex, isClickOutside, currentEditor)
  } else {
    setTimeout(() => {
      state.editor.enable()
    }, 0)
  }
}

function getLastWord(editor, length, sliceStart = 1) {
  EVENT_WORD_LENGTH = length
  return editor.getText(EVENT_WORD_INDEX + sliceStart, length).trim()
}

function chartCount(bulletRawText) {
  // eslint-disable-next-line no-debugger
  return bulletRawText
    ? bulletRawText.replace(COMPOSER_HTML_REGEX, '').length
    : 0
}

function handleMatchedLinks(word, delta, isClickOutside) {
  const editor = toRaw(state.editor)
  const length = word.length
  let index = isClickOutside
    ? editor.getLength() - (delta - 2)
    : editor.getLength() - (length + 2)
  if (length > 0) {
    if (isClickOutside) {
      const content = editor.getContents()
      let lastDelta = content.ops[content.ops.length - 1]
      const lastSentence = lastDelta.insert.replace(COMPOSER_URL_REGEX, '')
      // eslint-disable-next-line no-constant-condition
      if (lastSentence.length == 0) {
        content.ops.pop()
      } else {
        content.ops[content.ops.length - 1].insert = lastSentence.replace(
          '\n',
          ''
        )
      }

      editor.setContents(content)
      editor.insertText(editor.getLength() - 1, ' ')
      index = editor.getLength() - 1
      updateLink(editor, index, word)
      setTimeout(() => {
        editor.insertText(editor.getLength() - 1, ' ')
        editor.enable()
      }, 200)
    } else {
      editor.setSelection(index)
      editor.deleteText(index, length, 'api')
      updateLink(editor, index, word)
      editor.setSelection(editor.getLength())
    }
  }
}

function updateLink(editor, index, value) {
  const urlValue = value.includes('http') ? value : `https://${value}`
  editor.insertEmbed(index, 'custom-hyperlink', urlValue, 'silent')
}


function getCurrentSelectionFormats() {
  return state.editor.getFormat()
}

function formatText(format) {
  const formats = getCurrentSelectionFormats()
  const value = formats[format];
  state.editor.format(format, !value);
  emit('selection-format', getCurrentSelectionFormats())
}

function quoteBullet() {
    const element = editorRef.value.$el.querySelector('.ql-editor');
    const style = 'code';
    
    state.editor.setSelection(0, state.editor.getLength(), 'silent')
    if (Array.from(element.classList).includes('quoted-bullet')) {
      element.classList.remove('quoted-bullet');
      formatText(style, false);
    } else {
      element.classList.add('quoted-bullet');
      formatText(style)
    }
  state.editor.setSelection(state.editor.getLength())
}

const actions = {
  insertText(text) {
    state.editor.insertText(state.currentSelection || 0, text)
  },
  insertImages(images) {
    if (Array.isArray(images)) {
      const { endpoint, fit, height, width } = resizerConfig
      images.forEach((image) => {
        const { url, attributes } = image
        const currentSelectionIndex = state.currentSelection
          ? state.currentSelection.index
          : 0
        const imageWidth = attributes.width || width
        const imageHeight = attributes.height || height
        const orientation = attributes.orientation || 'portrait'
        const cleanUrl = url.replace('//app', '/app').replace('//tmp', '/tmp')
        const rootUrl = url.includes('https://') ? endpoint + '/' : ''
        const resizeUrl = `${rootUrl}/${cleanUrl}?w=${imageWidth}&h=${imageHeight}&fit=${fit}&orientation=${orientation}`
        state.editor.insertEmbed(
          currentSelectionIndex,
          'memod-image',
          resizeUrl
        )
        state.editor.setSelection(state.editor.getLength(), 'user')
      })
    }
  },
  insertMemoLink(memoMetadata) {
    state.editor.insertEmbed(
      state.currentSelection || 0,
      'memo-card-link',
      memoMetadata
    )
  },
  insertLink(url) {
    state.editor.insertEmbed(state.currentSelection || 0, 'memod-link', url)
  },
  insertMention(user) {
    state.editor.insertEmbed(state.currentSelection, 'mention', user)
  },
  formatSelection(format) {
    if (format === 'code') { 
      quoteBullet() // crear esto
    } else {
      formatText(format)
    }
  },
  blur() {
    editorRef.value?.blur()
  },
}

const execAction = ({ name: actionName, params }) => {
  const action = actions[actionName]
  if (action) {
    action(params)
  }
}

defineExpose({
  ...actions
})
</script>

<style lang="scss">
.ql-editor.ql-blank::before {
  color: rgba(235, 235, 245, 0.3) !important;

  &::placeholder {
    color: rgba(235, 235, 245, 0.3) !important;
  }
}
</style>
