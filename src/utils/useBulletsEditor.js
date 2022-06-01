export const useBulletsEditor = (bullets, setEditorFocus) => {
    const focusLastBullet = () => {
        const lastFocusTime = Math.max.apply(Math, bullets.value.map((bullet) => bullet.last_focus));
        const lastFocusedBullet = bullets.value.find((item) => item.last_focus === lastFocusTime);
        
        if( lastFocusedBullet) {
            lastFocusedBullet.editor.blur()
            setEditorFocus(lastFocusedBullet.id)
        } else {
            const [firstBullet] = bullets.value
            firstBullet.editor.blur();
            setEditorFocus(firstBullet.id);
        }

        return lastFocusedBullet;
    }

    return {
        focusLastBullet,
    }

}