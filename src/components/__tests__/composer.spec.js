import { test, describe } from 'vitest'
import { render, screen } from '@testing-library/vue'
import MemoComposer from '../composer/index.vue'
describe('Composer inserts', () => {
  it('should insert text', () => {
    const bullets = []
    const wrapper = render(MemoComposer, {
      propsData: {
        value: bullets
      }
    })

    expect(screen.getByText('Hello world')).toBeTruthy()
  })
})
