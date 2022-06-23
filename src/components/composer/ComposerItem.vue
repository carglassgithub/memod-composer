<template>
  <li
    :id="`editor_${bullet.id}`"
    class="relative composer-item"
    data-testid="composer-item"
    :new-content="bullet.id ? 'true' : 'false'">
    <div class="bullet" :is-active-bullet="isFocused ? 'true' : 'false'">
      <div class="bullet-container">
        <div class="bullet-order">
          <div class="indicator-container">
            <span
              v-if="isDisplayBullet"
              class="inline-block bullet-indicator indicator"
              :data-active="isFocused ? 'true' : 'false'" />
            <span
              v-else
              class="bullet-indicator indicator-number"
              :data-active="isFocused ? 'true' : 'false'"
              >
              {{ index + 1 }}
            </span>
          </div>
          <IconOrder class="bullet-order-img" />
        </div>
        <div ref="editorRef" :class="`li-input editor_${bullet.id}`" />
        <div class="bullet-char-counter">
          {{ charCount }} / {{ CHAR_LIMIT }}
        </div>
      </div>
    </div>
    <div
      v-if="isFocused && showRemove"
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
  computed,
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
  },
  index: {
    type: Number,
    default: 0
  },
  isFocused: {
    type: Boolean,
    default: false
  }
})

const editorRef = ref()

const suggestionQuerySearch = inject('suggestionQuerySearch', async () => {})

const state = reactive({
  CHAR_LIMIT,
  editor: null,
  currentSelection: null
})

const eventHub = inject('eventHub', { on: () => {}, emit: () => {} })

const isDisplayBullet = computed(() => {
  return props.displayType === BULLET_DISPLAY_TYPES?.bullet
})

onMounted(() => {
  state.editor = new Quill(editorRef.value, {
    modules: {
      toolbar: ['bold', 'italic', 'underline', 'blockquote', 'link', 'mention'],
      mention: {
        mentionDenotationChars: ['@'],
        async source(searchTerm, renderList, mentionChar) {
          const matchedResults = await suggestionQuerySearch(searchTerm, mentionChar)
          renderList(matchedResults, searchTerm)
        },
        renderItem(item) {
          return `<div class="inner-item">
            <div class="avatar">
              <img src="/assets/img/icons/avatar.svg" alt="user" />
            </div>
            <span>
              ${item.value}
            </span>
          </div>`;
        },
        keyboard: {
          bindings: {
            'list autofill': {
              prefix: /^\s*()$/
            }
          }
        }
      },
      autoformat: {
          link: {
            trigger: /\s|\n|\t/,
            find: COMPOSER_URL_REGEX,
            transform: function (value, protocol) { // value == match[0], noProtocol == match[1]
              const urlValue = value.includes('http') ? value : `https://${value}`;
              return urlValue;
            },
            insert: 'custom-hyperlink'
          }
      },
      keyboard: {
        bindings: {
          'list autofill': {
            prefix: /^\s*()$/
          }
        }
      }
    },
    theme: 'bubble',
    placeholder: props.placeholder
  })

  state.editor.on(Quill.events.SELECTION_CHANGE, (range) => {
    if (range) {
      setTimeout(() => {
        emit('focus', props.bullet.id, range)
      }, 200)
    }
  })
  state.editor.on(Quill.events.TEXT_CHANGE, (delta) => {

    if (state.editor.getLength() > CHAR_LIMIT) {
      state.editor.deleteText(CHAR_LIMIT, state.editor.getLength());
    }
    
    const char = getLastInsertedChar(delta)
    if ([' ', '\n'].includes(char)) {
      setTimeout(() => {
          state.editor.setSelection(delta.ops[0].retain + 1, 0, 'silent');
      });
    }
    emitTextChanges()
    nextTick(() => {
      state.currentSelection = state.editor.getSelection()
      emitCurrentSelectionAndFormat(state.currentSelection)
    })
  })

  state.editor.root.addEventListener('blur', () => {
    state.editor.disable()
    checkLinkText(state.editor, state.editor.getContents(), true)
  })

  if (props.bullet.prettyText) {
    state.editor.root.innerHTML = props.bullet.prettyText.trim()
  }
  
  let Delta = Quill.import('delta');
  state.editor.clipboard.addMatcher(Node.ELEMENT_NODE, (node, delta) => {
      return delta.compose(new Delta().retain(delta.length()));
  })

  state.editor.root.addEventListener('paste', (evt) => {
    const { clipboardData: cData, target } = evt;
    const clipboardData = cData || window.clipboardData;
    const pastedText = clipboardData.getData('text') || '';
    const match = pastedText.match(COMPOSER_URL_REGEX);

    if (!target.dataset.link) {
      if (match) {
      if (match && pastedText.length == match[0].length) {
        const urls = [... new Set(match)];
        urls.forEach((url, i) => {
          let { index, length } = state.editor.getSelection(true) || { index: 0 };
          state.editor.deleteText(index - url.length, url.length + i)
          state.editor.setSelection(state.editor.getLength(), 0, 'user')
          setTimeout(() => {
            state.editor.setSelection(index - url.length, url.length, 'user')
            actions.insertLink(url);
            state.editor.setSelection(index, 0, 'user')
          }, 100);
        });
      }
      setTimeout(() => {
        state.editor.setSelection(state.editor.getLength() + 1, 0, 'user')
      })
    }
    }
  })
  eventHub.on(`bullet:${props.bullet.id}`, (actionName, params) => {
    execAction(actionName, params)
  })
})

const emitTextChanges = () => {
  try {
    state.text = state.editor.getText()
    state.html = state.editor.root.innerHTML
  
    emit('text-changed', {
      text: state.text,
      html: state.html,
      id: props.bullet.id
    })
  } catch(e) {
    console.log(e)
  }
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

const charCount = computed(() => {
  return props.bullet?.rawText?.length ?? 0
})

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
    state.editor.insertText(state.editor.getLength(), ' ')
    state.editor.insertEmbed(
      state.currentSelection || 0,
      'memo-card-link',
      memoMetadata
    )
    state.editor.insertText(state.editor.getLength(), ' ')
  },
  insertLink(url) {
    state.editor.insertEmbed(state.currentSelection || 0, 'memod-link', {value: url, callback: emitTextChanges } )
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

.memod-composer .main-list .ql-mention-list-container {
  background: #1a1a1c;
  opacity: 1;
  z-index: 100;
  .ql-mention-list {
    background: #1a1a1c;
    border: 1px solid rgba(84, 84, 88, 0.65);
    border-radius: 8px;
    bottom: 0;
    max-height: 200px;
    overflow-y: scroll;
    padding: 2px 5px;
    width: 200px;

    &::-webkit-scrollbar {
      width: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: #2c2c2e;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: #05a88f;
    }
  }

  .ql-mention-list-item {
    padding: 4px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 0;

    .inner-item {
      display: flex;
      align-items: center;
    }

    .avatar {
      background-color: #e4e5e7;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      margin-right: 10px;
      color: #373739;
      font-weight: 600;
    }
  }
}

</style>
