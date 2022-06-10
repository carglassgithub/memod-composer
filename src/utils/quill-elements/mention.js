import Quill from 'quill'
import QuillMention from 'quill-mention'
const Embed = Quill.import('blots/embed')

class Mention extends Embed {
  static create(mention) {
    const user = typeof mention === 'object' ? mention.value : mention
    const node = super.create(user)
    node.setAttribute('title', user.trim())
    node.setAttribute('href', this.BASE_URL + user)
    node.textContent = `@${user} `
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
