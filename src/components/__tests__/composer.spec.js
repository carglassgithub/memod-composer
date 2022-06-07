import '@testing-library/jest-dom'
import { mount, createLocalVue } from '@vue/test-utils'
import vueCompositionApi, { reactive, ref } from '@vue/composition-api'
import MemoComposer from '../composer/index.vue'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/vue'

const mountComposer = () => {
  const localVue = createLocalVue()
  localVue.use(vueCompositionApi)

  const state = reactive({
    bullets: ref([])
  })
  return mount(MemoComposer, {
    propsData: {
      value: state.bullets
    },
    localVue
  })
}
describe('Composer inserts', () => {
  const user = userEvent.setup()
  
  it('should insert text', async () => {
    const wrapper = mountComposer()

    await user.click(wrapper.find('.composer-item div.ql-editor').element)
    await wrapper.vm.insertText('Hello World')
    expect(wrapper.text()).toContain('Hello World')
  })
  it('should insert image', async () => {
    const wrapper = mountComposer()

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
    expect(wrapper.find('img')).toBeTruthy()
  })

  it('should insert memo link', async () => {
    const wrapper = mountComposer()
    await user.click(wrapper.find('.composer-item div.ql-editor').element)

    const memoMetadata = {} 
    wrapper.vm.insertMemoLink(memoMetadata)

    expect(wrapper.find('.memo-link-card')).toBeTruthy()
  })

  it('should insert link', async () => {
    const wrapper = mountComposer()
    await user.click(wrapper.find('.composer-item div.ql-editor').element)

    const memoMetadata = {} 
    await waitFor(() => {
      wrapper.vm.insertLink(memoMetadata)
      expect(wrapper.find('.web-link')).toBeTruthy()
    })
  })
})
