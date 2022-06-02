import '@testing-library/jest-dom'
import { mount, createLocalVue } from '@vue/test-utils'
import vueCompositionApi, { reactive, ref } from '@vue/composition-api'
import MemoComposer from '../composer/index.vue'
import userEvent from '@testing-library/user-event'

describe('Composer inserts', () => {
  const localVue = createLocalVue()
  localVue.use(vueCompositionApi)
  const user = userEvent.setup()

  it('should insert text', async () => {
    const state = reactive({
      bullets: ref([])
    })
    const wrapper = mount(MemoComposer, {
      propsData: {
        value: state.bullets
      },
      localVue
    })

    await user.click(wrapper.find('.composer-item div.ql-editor').element)
    await wrapper.vm.insertText('Hello World')
    expect(wrapper.text()).toContain('Hello World')
  })
  it('should insert image', async () => {
    const state = reactive({
      bullets: ref([])
    })
    const wrapper = mount(MemoComposer, {
      propsData: {
        value: state.bullets
      },
      localVue
    })

    const file = {
      id: 11934,
      url: 'https://memod-public.s3.us-east-1.amazonaws.com/images/bFhsnH.jpg',
      attributes: {
        width: '611',
        height: '611',
        unique_name: 'images/BUUwIk.jpg',
        orientation: 'landscape'
      }
    }
    await user.click(wrapper.find('.composer-item div.ql-editor').element)
    wrapper.vm.insertImages([file])
    expect(wrapper.contains('img')).toBeTruthy()
  })
})
