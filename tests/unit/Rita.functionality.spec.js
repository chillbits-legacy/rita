import { mount } from '@vue/test-utils'
import Rita from '@rita/Rita.vue'
import Button from 'ant-design-vue/lib/button'

test('Rita can open modal when click button', async () => {

  const wrapper = mount(Rita, {
    props: {
      mediaJson: '{"bree_item_id":"23","media":{"session_id":55,"photos":[{"file_id":89,"thumbnail_url":"https:\\/\\/va-photomart-upload.s3.ap-southeast-1.amazonaws.com\\/1476089252-0770723001607931186\\/stock-photo-nautilus-cropped-thumbnail.png","quantity":1}]}}',
    },
    global: {
      components: {
        'a-button': Button
      },
      stubs: {
        'a-modal': true
      }
    },
  })

  const buttonComponent = wrapper.findComponent({ name: 'edit-button' })
  const modalComponent = wrapper.findComponent({ name: 'modal' })

  expect(modalComponent.props('visible')).toBe(false)
  await buttonComponent.trigger('click')
  expect(modalComponent.props('visible')).toBe(true)
})