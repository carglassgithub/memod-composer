import Quill from 'quill'
const Embed = Quill.import('blots/embed')
class Hyperlink extends Embed {
  static create(value) {
    const node = super.create(value)
    node.setAttribute('title', value.trim())
    node.setAttribute('href', value)
    node.setAttribute('target', '_blank')
    let textContent = ''
    try {
      textContent = new URL(value).hostname
    } catch (e) {
      textContent = value
    }
    node.textContent = textContent
    return node
  }

  static value(domNode) {
    return domNode.textContent
  }
}

Hyperlink.blotName = 'custom-hyperlink'
Hyperlink.className = 'ql-hyperlink'
Hyperlink.tagName = 'A'

Quill.register(Hyperlink)
