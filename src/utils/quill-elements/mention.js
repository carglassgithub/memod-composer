import Quill from 'quill'
import QuillMention from 'quill-mention'
const Embed = Quill.import('blots/embed')

class Mention extends Embed {
  static create(mention) {
    const node = super.create(mention.value)
    node.setAttribute('title', mention.value.trim())
    node.setAttribute('href', this.BASE_URL + mention.value)
    node.textContent = `@${mention.value} `
    return node
  }

  static value(domNode) {
    return domNode.textContent.substr(1)
  }
}

Mention.blotName = 'mention'
Mention.className = 'ql-mention'
Mention.tagName = 'A'
Mention.BASE_URL = '/'

Quill.register({ 'modules/mention': QuillMention })
Quill.register(Mention)
