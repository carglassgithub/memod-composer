// EMITTERS
import {
  emitMessage,
  createBulletObject,
  composerConstants,
  getContent,
} from "./index";
const { MESSAGES, EVENT_TO_TRIGGER, MENTION, HASHTAG } = composerConstants;

export function buildBulletMessage(id, messageType) {
  const item = document.querySelector(`#${id}`);
  const bullet = createBulletObject(item);
  const message = {
    message: messageType,
    args: {
      ...bullet,
    },
  };
  return message;
}

export function emitCurrentSelectionAndFormat(selection) {
  const message = {
    message: MESSAGES.ON_SELECTION_CHANGE,
    args: {
      selection,
      formats: "", //getCurrentSelectionFormats()
    },
  };
  emitMessage(message);
}

export function emitBulletOnFocus(bullet_node) {
  const message = buildBulletMessage(bullet_node, MESSAGES.ON_BULLET_FOCUS);
  emitMessage(message);
}

export function emitBulletOnChange(bullet_node) {
  const message = buildBulletMessage(bullet_node, MESSAGES.ON_BULLET_CHANGE);
  emitMessage(message);
}

export function emitOnContentChange() {
  getContent((bullets) => {
    const message = {
      message: MESSAGES.ON_CONTENT_CHANGE,
      args: {
        bullets,
      },
    };
    emitMessage(message);
  });
}

export function emitOnTitleChange(value) {
  const message = {
    message: MESSAGES.ON_TITLE_CHANGE,
    args: value,
  };
  emitMessage(message);
}

export function emitOnHashTag(value) {
  const message = {
    message: MESSAGES.ON_HASHTAG,
    args: value,
  };
  emitMessage(message);
}

export function emitOnMention(value) {
  const message = {
    message: MESSAGES.ON_MENTION,
    args: value,
  };
  emitMessage(message);
}

export function emitOnMentionEnd() {
  const message = {
    message: MESSAGES.ON_MENTION_END,
    args: undefined,
  };
  emitMessage(message);
}

export function emitOnHashTagEnd() {
  const message = {
    message: MESSAGES.ON_HASHTAG_END,
    args: undefined,
  };
  emitMessage(message);
}

export function emitEventToTrigger(value) {
  if (EVENT_TO_TRIGGER === MENTION) {
    emitOnMention(value);
  } else if (EVENT_TO_TRIGGER === HASHTAG) {
    emitOnHashTag(value);
  }
}

export function emitEndEventToTrigger() {
  if (EVENT_TO_TRIGGER === MENTION) {
    emitOnMentionEnd();
  } else if (EVENT_TO_TRIGGER === HASHTAG) {
    emitOnHashTagEnd();
  }
}

export function emitBulletOnBlur() {
  const message = {
    message: MESSAGES.ON_BULLET_BLUR,
    args: undefined,
  };
  emitMessage(message);
}

export function emitEditorLoaded() {
  const message = {
    message: MESSAGES.EDITOR_LOADED,
    args: undefined,
  };
  emitMessage(message);
}

export function emitOnTitleFocus() {
  const message = {
    message: MESSAGES.ON_TITLE_FOCUS,
    args: undefined,
  };
  emitMessage(message);
}

export function emitOnSuggestionQuery(query) {
  const message = {
    message: MESSAGES.ON_SUGGESTION_QUERY,
    args: query,
  };
  emitMessage(message);
}

export function emitOnTitleBlur() {
  const message = {
    message: MESSAGES.ON_TITLE_BLUR,
    args: undefined,
  };
  emitMessage(message);
}

export function emitBulletsPositionUpdate() {
  getContent((bullets) => {
    const message = {
      message: MESSAGES.ON_BULLET_REORDER,
      args: {
        bullets,
      },
    };
    emitMessage(message);
  });
}
