import Quill from 'quill'

const BubbleTheme = Quill.import('themes/bubble')

class ExtendBubbleTheme extends BubbleTheme {
  constructor(quill, options) {
    super(quill, options)

    quill.root.addEventListener('click', (e) => {
      this.setAnchorIcon()
      // quill.theme.tooltip.show()
    })
  }

  setAnchorIcon() {
    const mention = this.quill.theme.tooltip.root.querySelector('.ql-mention')
    mention.innerHTML = '@'
  }
}

Quill.register('themes/bubble', ExtendBubbleTheme)
