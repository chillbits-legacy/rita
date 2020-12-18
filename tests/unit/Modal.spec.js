import { mount } from '@vue/test-utils'
import Modal from '@rita/components/Modal'
import Button from 'ant-design-vue/lib/button'

test('Modal renders successfully', async () => {

  const AntModal = jest.fn()

  const wrapper = mount(Modal, {
    global: {
      components: {
        'a-button': Button,
        'a-modal': AntModal,
      },
    },
  })

  expect(wrapper.html()).toContain('<div class="modal"><!----></div>')
  await wrapper.setProps({ visible: true })
  expect(AntModal).toHaveBeenLastCalledWith(
    {
      'onOk': expect.any(Function),
      'onUpdate:visible': expect.any(Function),
      'title': 'Title',
      'visible': true,
    },
    null,
  )
})