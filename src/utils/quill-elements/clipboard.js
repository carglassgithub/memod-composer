/* eslint-disable no-debugger */
import Quill from 'quill'
import docsSoap from 'docs-soap';


const cleanGoogleDocsFuss = (html) => {
  return html.replace(/(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/g, '')
  .replace('<br class="Apple-interchange-newline">', '').replace('<p>', '').replace('</p>', '')
}
var Clipboard = Quill.import('modules/clipboard')
class Clipboard2 extends Clipboard {
  onCapturePaste(e) {
    if (e.defaultPrevented || !this.quill.isEnabled()) return
    e.preventDefault()
    const range = this.quill.getSelection(true)
    if (range == null) return
    let html = e.clipboardData.getData('text/html')
    html = !html
      ? html
      : docsSoap.docsSoap(cleanGoogleDocsFuss(html).trim())
          .replace('<strong>', '<b>')
          .replace('</strong>', '</b>')
    debugger
    const text = e.clipboardData.getData('text/plain')
    const files = Array.from(e.clipboardData.files || [])
    if (!html && files.length > 0) {
      this.quill.uploader.upload(range, files)
    } else {
      this.onPaste(range, { html, text })
    }
  }
}
Quill.register({ 'modules/clipboard': Clipboard2 }, true)
