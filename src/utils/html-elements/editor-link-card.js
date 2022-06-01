class EditorLinkCard extends HTMLElement {
  constructor() {
    super()
    const wrapper = document.createElement('a')
    const cardImageContainer = document.createElement('div')
    const mainImage = document.createElement('img')
    const cardContainer = document.createElement('div')
    const faviconAndNameContainer = document.createElement('div')
    const faviconImage = document.createElement('img')
    const sitenameHolder = document.createElement('span')
    const cardDescription = document.createElement('span')
    const webLinkContainer = document.createElement('div')
    const webLink = document.createElement('span')
    const linkIcon = document.createElement('div')
    const removeImage = document.createElement('a')
    const style = document.createElement('style')

    const shadow = this.attachShadow({ mode: 'open' })

    let imageUrl = ''
    let description = ''
    let mainUrl = ''
    let favicon = ''
    let sitename = ''

    if (this.hasAttribute('img')) {
      imageUrl = this.sanitizeAttributes('img')
    }

    if (this.hasAttribute('description')) {
      description = this.sanitizeAttributes('description')
    }
    if (this.hasAttribute('url')) {
      mainUrl = this.sanitizeAttributes('url')
    }
    if (this.hasAttribute('favicon')) {
      favicon = this.sanitizeAttributes('favicon')
    }
    if (this.hasAttribute('sitename')) {
      sitename = this.sanitizeAttributes('sitename')
    }

    style.textContent = EDITOR_LINK_STYLES

    wrapper.setAttribute(
      'class',
      `editor-link-card ${imageUrl ? '' : 'no-image'}`
    )
    cardImageContainer.setAttribute('class', `card-image`)
    cardContainer.setAttribute('class', 'card-container')
    faviconAndNameContainer.setAttribute('class', 'favicon-and-name-container')
    faviconImage.setAttribute('class', 'favicon')
    sitenameHolder.setAttribute('class', 'sitename')
    cardDescription.setAttribute('class', 'card-description')
    webLinkContainer.setAttribute('class', 'web-link')
    linkIcon.setAttribute('class', 'link-icon')
    removeImage.setAttribute('class', 'link-card-remove')
    removeImage.onclick = (e) => {
      this._onRemove(e)
    }

    wrapper.href = mainUrl
    mainImage.src = imageUrl
    mainImage.setAttribute('referrerpolicy', 'origin-when-cross-origin')
    mainImage.onerror = function (err) {
      mainImage.remove()
      wrapper.classList.add('no-image')
    }
    faviconImage.src = favicon
    sitenameHolder.innerText = sitename
    cardDescription.innerText = description
    webLink.innerText = mainUrl
    webLinkContainer.appendChild(linkIcon)
    webLinkContainer.appendChild(webLink)

    cardImageContainer.appendChild(mainImage)

    if (imageUrl) {
      wrapper.appendChild(cardImageContainer)
    }

    if (favicon) {
      faviconAndNameContainer.appendChild(faviconImage)
    }

    if (sitename) {
      faviconAndNameContainer.appendChild(sitenameHolder)
    }

    if (favicon || sitename) {
      cardContainer.appendChild(faviconAndNameContainer)
    }

    cardContainer.appendChild(cardDescription)
    cardContainer.appendChild(webLinkContainer)

    shadow.appendChild(wrapper)
    shadow.appendChild(style)

    wrapper.appendChild(cardImageContainer)
    wrapper.appendChild(cardContainer)
    wrapper.appendChild(removeImage)

    this._onRemove = (e) => {
      const cardContainer = this.parentNode
      const parentNode = this.parentNode.parentNode
      parentNode.removeChild(cardContainer)
      e.preventDefault()
    }
  }

  sanitizeAttributes(name) {
    return this.getAttribute(name) === 'undefined'
      ? undefined
      : this.getAttribute(name)
  }
}

customElements.define('editor-link-card', EditorLinkCard)
