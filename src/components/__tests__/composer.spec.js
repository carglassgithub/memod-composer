import { test, describe } from 'vitest';
import { render, screen } from '@testing-library/vue';
import MemoComposer from "../composer/index.vue";
describe('Composer inserts', () => {
    it('should insert text', () => {
        const bullets = []
        const wrapper = render(MemoComposer, {
            propsData: {
                value: bullets
            }
        })

        wrapper.insertText('Hello World')
        expect(screen.getByText('Hello world')).toBeTruthy();
    })
    it('should insert image', () => {
        const bullets = []
        const wrapper = render(MemoComposer, {
            propsData: {
                value: bullets
            }
        })
        
        const file = {
            url: '',
            attributes: {
              width: '',
              height: '',
              orientation: 'portrait'
            }
        }
        
        wrapper.insertImages([file])
        expect(screen.getByRole('image')).toBeTruthy();
    })
})