import { mount } from '@vue/test-utils'
import Modal from '@rita/components/Modal'
import Button from 'ant-design-vue/lib/button'
import AntModal from 'ant-design-vue/lib/modal'

test('Modal renders successfully', async () => {
  const wrapper = mount(Modal, {
    global: {
      components: {
        'a-button': Button,
        'a-modal': AntModal
      }
    }
  })

  expect(wrapper.html()).toContain('<div class="modal"><!----></div>')
})