// EMITTERS
import { createBulletObject, getContent } from './index'
import { composerConstants } from "./constants"
const { MESSAGES, EVENT_TO_TRIGGER, MENTION, HASHTAG } = composerConstants

export function buildBulletMessage(id, messageType) {
  const item = document.querySelector(`#${id}`)
  const bullet = createBulletObject(item)
  const message = {
    message: messageType,
    args: {
      ...bullet
    }
  }
  return message
}

export function emitCurrentSelectionAndFormat(selection) {
  const message = {
    message: MESSAGES.ON_SELECTION_CHANGE,
    args: {
      selection,
      formats: '' //getCurrentSelectionFormats()
    }
  }
}

export function emitBulletOnFocus(bullet_node) {
  const message = buildBulletMessage(bullet_node, MESSAGES.ON_BULLET_FOCUS)
}

export function emitBulletOnChange(bullet_node) {
  const message = buildBulletMessage(bullet_node, MESSAGES.ON_BULLET_CHANGE)
}

export function emitOnContentChange() {
  getContent((bullets) => {
    const message = {
      message: MESSAGES.ON_CONTENT_CHANGE,
      args: {
        bullets
      }
    }
  })
}

export function emitOnTitleChange(value) {
  const message = {
    message: MESSAGES.ON_TITLE_CHANGE,
    args: value
  }
}

export function emitOnHashTag(value) {
  const message = {
    message: MESSAGES.ON_HASHTAG,
    args: value
  }
}

export function emitOnMention(value) {
  const message = {
    message: MESSAGES.ON_MENTION,
    args: value
  }
}

export function emitOnMentionEnd() {
  const message = {
    message: MESSAGES.ON_MENTION_END,
    args: undefined
  }
}

export function emitOnHashTagEnd() {
  const message = {
    message: MESSAGES.ON_HASHTAG_END,
    args: undefined
  }
}

export function emitEventToTrigger(value) {
  if (EVENT_TO_TRIGGER === MENTION) {
    emitOnMention(value)
  } else if (EVENT_TO_TRIGGER === HASHTAG) {
    emitOnHashTag(value)
  }
}
export function emitEndEventToTrigger() {
  if (EVENT_TO_TRIGGER === MENTION) {
    emitOnMentionEnd()
  } else if (EVENT_TO_TRIGGER === HASHTAG) {
    emitOnHashTagEnd()
  }
}

export function emitBulletOnBlur() {
  const message = {
    message: MESSAGES.ON_BULLET_BLUR,
    args: undefined
  }
}

export function emitEditorLoaded() {
  const message = {
    message: MESSAGES.EDITOR_LOADED,
    args: undefined
  }
}

export function emitOnTitleFocus() {
  const message = {
    message: MESSAGES.ON_TITLE_FOCUS,
    args: undefined
  }
}

export function emitOnSuggestionQuery(query) {
  const message = {
    message: MESSAGES.ON_SUGGESTION_QUERY,
    args: query
  }
}

export function emitOnTitleBlur() {
  const message = {
    message: MESSAGES.ON_TITLE_BLUR,
    args: undefined
  }
}

export function emitBulletsPositionUpdate() {
  getContent((bullets) => {
    const message = {
      message: MESSAGES.ON_BULLET_REORDER,
      args: {
        bullets
      }
    }
  })
}
