import Quill from 'quill'

// let Text = Quill.import('blots/text');
let Cursor = Quill.import('blots/cursor')
const Embed = Quill.import('blots/embed')
const Inline = Quill.import('blots/inline')

const getTagUrl = (value) => `/tags/${value}/trending`

class Hashtag extends Embed {
  static create(value) {
    let node = super.create(value)
    node.setAttribute('href', getTagUrl(value))
    node.setAttribute('spellcheck', false)
    node.textContent = `#${value} `
    return node
  }

  static formats(domNode) {
    return domNode.getAttribute('href').substr(this.BASE_URL.length)
  }

  format(name, value) {
    this.domNode.setAttribute('href', getTagUrl(value))
  }

  static value(domNode) {
    return domNode.textContent.substr(1)
  }
}
Hashtag.blotName = 'hashtag'
Hashtag.className = 'ql-hashtag'
Hashtag.tagName = 'A'
Hashtag.BASE_URL = '#'

class HashtagInline extends Inline {
  static create(value) {
    let node = super.create(value)
    node.setAttribute('href', getTagUrl(value))
    node.setAttribute('spellcheck', false)
    return node
  }

  static formats(domNode) {
    return domNode.getAttribute('href').substr(this.BASE_URL.length)
  }

  format(name, value) {
    this.domNode.setAttribute('href', getTagUrl(value))
  }
}
HashtagInline.blotName = 'hashtag'
HashtagInline.className = 'ql-hashtag'
HashtagInline.tagName = 'A'
HashtagInline.allowedChildren = [Text, Cursor]
HashtagInline.BASE_URL = '#'

Quill.register(HashtagInline)
Quill.register(Hashtag)
