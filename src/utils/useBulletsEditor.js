export const useBulletsEditor = (bullets, setEditorFocus) => {
  const focusLastBullet = (localBullets) => {
    const bulletReference = localBullets || bullets.value 
    const lastFocusTime = Math.max.apply(Math, bulletReference.map((bullet) => bullet.last_focus))
    const lastFocusedBullet = bulletReference.find(
      (item) => item.last_focus === lastFocusTime || item.focus
    )
    if (lastFocusedBullet) {
      lastFocusedBullet.editor?.blur()
      setEditorFocus(lastFocusedBullet.id)
    } else if (bullets.length) {
      const [firstBullet] = bullets
      firstBullet?.editor?.blur()
      setEditorFocus(firstBullet.id)
    }

    if (lastFocusedBullet) {
      lastFocusedBullet.editor?.blur()
      setEditorFocus(lastFocusedBullet.id)
    } else {
      const [firstBullet] = bullets.value
      firstBullet.editor?.blur()
      setEditorFocus(firstBullet.id)
    }

    return lastFocusedBullet
  }

  return {
    focusLastBullet
  }
}
