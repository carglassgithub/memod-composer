import Quill from 'quill'
import { previewerConfig } from "../../config/index"
let Inline = Quill.import('blots/inline')
let Block = Quill.import('blots/block')
let Image = Quill.import('formats/image')
let BlockEmbed = Quill.import('blots/block/embed')
let Embed = Quill.import('blots/embed')

Image.className = 'bullet-image'

class CustomImage extends BlockEmbed {
  static create(value) {
    const node = super.create()
    const aspectRatio = getAspectRatio(value)
    node.classList.add('image-container')
    node.innerHTML = `<img alt='' src=${value} class='bullet-image' style="aspect-ratio:${aspectRatio}" />`
    return node
  }
}

function getAspectRatio(value) {
  try {
    const url = new URL(value)
    const width = url.searchParams.get('w')
    const height = url.searchParams.get('h')
    if (width > height) {
      return '16/9'
    } else if (width < height) {
      return '4/5'
    } else {
      return '1/1'
    }
  } catch (err) {
    return '1/1'
  }
}

class CustomLink extends BlockEmbed {
  static create({ value, callback }) {
    const node = super.create()
    node.setAttribute('contenteditable', 'false')
    node.classList.add('editor-link', 'loading')
    node.innerHTML = '<green-loader class="green-loader">'

    function onRemove() {
      node.remove()
    }

    function getFavicon(origin, faviconUrl) {
      try {
        const originURL = new URL(origin).origin
        return faviconUrl && faviconUrl !== 'http://favicon.ico/'
          ? faviconUrl
          : `https://www.google.com/s2/favicons?domain=${originURL}&size=196`
      } catch (e) {
        return ''
      }
    }

    fetch(`${previewerConfig.endpoint}?url=${value}`).then(res => res.json()).then(response => {
      const {
        image = { url: '' },
        title,
        description,
        favicon,
        siteName,
        hostname,
        originalUrl
      } = response

      const message = description || title

      const html = `
        <editor-link-card
          img="${image.url}"
          description="${message}"
          url="${value}"
          favicon="${getFavicon(originalUrl, '')}"
          sitename="${siteName}"
          hostname="${hostname}"
        />
      `
      node.querySelector('.green-loader').remove()
      node.classList.remove('loading')
      node.innerHTML += html
      callback()
    })
    return node
  }
}

class MemoLink extends BlockEmbed {
  static create(value) {
    const node = super.create()
    node.setAttribute('contenteditable', 'false')
    node.classList.add('memo-link-card')

    function onRemove() {
      current.remove()
    }

    const { id, displayname, title, slug, coverImage, coverOrientation } = value
    const html = `
        <memo-link-card
          memoId="${id}"
          displayname='${displayname}'
          title="${title}"
          slug="${slug}"
          data-cover-image="${coverImage}"
          data-cover-orientation="${coverOrientation}"
          coverimage="${coverImage}"
          coverorientation="${coverOrientation}"
        />
      `.trim()

    node.innerHTML = html
    return node
  }
}

CustomLink.blotName = 'memod-link'
CustomLink.tagName = 'div'

CustomImage.blotName = 'memod-image'
CustomImage.tagName = 'div'

MemoLink.blotName = 'memo-card-link'
MemoLink.tagName = 'div'

Quill.register(CustomLink)
Quill.register(MemoLink)
Quill.register(Image)
Quill.register(CustomImage)
