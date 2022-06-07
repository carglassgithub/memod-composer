import { EDITOR_LINK_STYLES } from "./link-card-styles"
class MemoLinkCard extends HTMLElement {
  constructor() {
    super()
    const wrapper = document.createElement('a')
    const cardImageContainer = document.createElement('div')
    const cardContainer = document.createElement('div')
    const cardDescription = document.createElement('span')
    const webLinkContainer = document.createElement('div')
    const displayNameContainer = document.createElement('span')
    const profileIcon = document.createElement('div')
    const removeImage = document.createElement('a')
    const style = document.createElement('style')
    const coverImage = document.createElement('img')

    const shadow = this.attachShadow({ mode: 'open' })

    let displayName = ''
    let title = ''
    let imageUrl = ''
    let coverOrientation = ''

    if (this.hasAttribute('displayname')) {
      displayName = this.sanitizeAttributes('displayname')
    }

    if (this.hasAttribute('title')) {
      title = this.sanitizeAttributes('title')
    }

    if (this.hasAttribute('data-cover-image')) {
      imageUrl = this.sanitizeAttributes('data-cover-image')
    }

    if (this.hasAttribute('data-cover-orientation')) {
      coverOrientation = this.sanitizeAttributes('data-cover-orientation')
    }

    style.textContent = EDITOR_LINK_STYLES

    wrapper.setAttribute('class', 'editor-link-card memo-link-card')
    wrapper.classList.add('memo-link-card')
    cardContainer.setAttribute('class', 'card-container')
    cardDescription.setAttribute('class', 'card-description')
    webLinkContainer.setAttribute('class', 'web-link')
    cardImageContainer.setAttribute('class', `card-image ${coverOrientation}`)
    profileIcon.setAttribute('class', 'user-icon')
    removeImage.setAttribute('class', 'link-card-remove')
    removeImage.onclick = () => {
      this._onRemove()
    }

    // cover images
    coverImage.src = imageUrl
    coverImage.setAttribute('referrerpolicy', 'origin-when-cross-origin')
    coverImage.onerror = function (err) {
      coverImage.remove()
      wrapper.classList.add('no-image')
    }

    cardDescription.innerText = title
    displayNameContainer.innerText = displayName
    webLinkContainer.appendChild(profileIcon)
    webLinkContainer.appendChild(displayNameContainer)

    cardContainer.appendChild(cardDescription)
    cardContainer.appendChild(webLinkContainer)

    shadow.appendChild(wrapper)
    shadow.appendChild(style)

    cardImageContainer.appendChild(coverImage)

    if (imageUrl) {
      wrapper.appendChild(cardImageContainer)
    }
    wrapper.appendChild(cardContainer)
    wrapper.appendChild(removeImage)

    this._onRemove = () => {
      const cardContainer = this.parentNode
      const parentNode = this.parentNode.parentNode
      parentNode.removeChild(cardContainer)
    }
  }

  sanitizeAttributes(name) {
    return this.getAttribute(name) === 'undefined'
      ? undefined
      : this.getAttribute(name)
  }
}

customElements.define('memo-link-card', MemoLinkCard)
