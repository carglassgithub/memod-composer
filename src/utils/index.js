export function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
}

export function createBulletObject(item) {
  const newContent = Boolean(item.getAttribute('new-content'))
  const bullet = {
    ...(!newContent ? { id: parseInt(item.getAttribute('id')) } : {}),
    prettyText: item.querySelector('.li-input .ql-editor').innerHTML,
    rawText: item.querySelector('.li-input').textContent
  }

  return bullet
}

export function getContent(callback) {
  const bullets = []

  document
    .querySelectorAll('.main-list .composer-item')
    .forEach((currentNode) => {
      bullets.push(createBulletObject(currentNode))
    })

  new Promise((resolve) => resolve(callback(bullets)))
}

export const BULLET_DISPLAY_TYPES = {
  bullet: 'bullet',
  numeric: 'numeric'
}

export const composerConstants = {
  COMPOSER_URL_REGEX:
    /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/g,

  COMPOSER_HTML_REGEX: /(<([^>]+)>)/g,

  MESSAGES: {
    ADD_NEW_BULLET: 'ADD_NEW_BULLET',
    FORMAT_TEXT: 'FORMAT_TEXT',
    REMOVE_BULLET: 'REMOVE_BULLET',
    ON_BULLET_REORDER: 'ON_BULLET_REORDER',
    ON_BULLET_CHANGE: 'ON_BULLET_CHANGE',
    ON_BULLET_FOCUS: 'ON_BULLET_FOCUS',
    ON_BULLET_BLUR: 'ON_BULLET_BLUR',
    ON_SELECTION_CHANGE: 'ON_SELECTION_CHANGE',
    ON_CONTENT_CHANGE: 'ON_CONTENT_CHANGE',
    ON_TITLE_CHANGE: 'ON_TITLE_CHANGE',
    SET_CONTENT: 'SET_CONTENT',
    SET_TITLE_CONTENT: 'SET_TITLE_CONTENT',
    GET_CONTENT: 'GET_CONTENT',
    GET_TITLE_CONTENT: 'GET_TITLE_CONTENT',
    INSERT_IMAGE: 'INSERT_IMAGE',
    SET_BULLET_DISPLAY_TYPE: 'SET_BULLET_DISPLAY_TYPE',
    INSERT_LINK: 'INSERT_LINK',
    ON_MENTION: 'ON_MENTION',
    ON_HASHTAG: 'ON_HASHTAG',
    ON_MENTION_END: 'ON_MENTION_END',
    ON_HASHTAG_END: 'ON_HASHTAG_END',
    INSERT_MENTION: 'INSERT_MENTION',
    INSERT_HASHTAG: 'INSERT_HASHTAG',
    INSERT_TEXT: 'INSERT_TEXT',
    INSERT_MENTION_TEXT: 'INSERT_MENTION_TEXT',
    INSERT_HASHTAG_TEXT: 'INSERT_HASHTAG_TEXT',
    SET_EDITOR_COLOR: 'SET_EDITOR_COLOR',
    EDITOR_LOADED: 'EDITOR_LOADED',
    ON_TITLE_FOCUS: 'ON_TITLE_FOCUS',
    ON_TITLE_BLUR: 'ON_TITLE_BLUR',
    BLUR_EDITOR: 'BLUR_EDITOR',
    FOCUS_EDITOR: 'FOCUS_EDITOR',
    CLEAR_EDITOR: 'CLEAR_EDITOR',
    INSERT_MEMO_LINK: 'INSERT_MEMO_LINK'
  },

  SITE_INFO: 'https://resizer.memodapp.com/v1/preview',
  IMAGE_RESIZER: 'https://resizer.memodapp.com/v1/image',
  RESIZE_WIDTH: 667,
  RESIZE_HEIGHT: 500,
  RESIZE_FIT: 'cover',

  BULLETS: [],
  TITLE: '.text-box.title',
  MAIN_LIST: '.main-list',
  MENTION: 'MENTION',
  HASHTAG: 'HASHTAG',
  URL_REGEX:
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g,
  CHAR_LIMIT: 280,
  BULLET_LIMIT: 10,
  EVENT_TO_TRIGGER: '',
  EVENT_WORD_INDEX: 0,
  EVENT_WORD_LENGTH: 0,
  ACTIVE_PART: '',

  current_selection: null,
  currentBulletDisplayType: BULLET_DISPLAY_TYPES.bullet
}

export const getLastInsertedChar = (delta) => {
  let ops = delta.ops
  if (!ops || ops.length < 1) {
    return
  }

  // Check last insert
  let lastOpIndex = ops.length - 1
  let lastOp = ops[lastOpIndex]

  while (!lastOp.insert && lastOpIndex > 0) {
    lastOpIndex--
    lastOp = ops[lastOpIndex]
  }
  return lastOp.insert && lastOp.insert.slice && lastOp.insert.slice(-1)
}
