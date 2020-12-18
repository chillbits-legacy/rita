import { mount } from '@vue/test-utils'
import Rita from '@rita/Rita.vue'

test('Rita renders successfully', () => {

  const wrapper = mount(Rita, {
    props: {
      mediaJson: '{"bree_item_id":"23","media":{"session_id":55,"photos":[{"file_id":89,"thumbnail_url":"https:\\/\\/va-photomart-upload.s3.ap-southeast-1.amazonaws.com\\/1476089252-0770723001607931186\\/stock-photo-nautilus-cropped-thumbnail.png","quantity":1}]}}',
    },
    shallow: true,
  })

  expect(wrapper.html()).toContain('<edit-button-stub></edit-button-stub>')
  expect(wrapper.html()).toContain('<modal-stub></modal-stub>')

})

test('Rita does not render if media data is string', () => {
  const wrapper = mount(Rita, {
    props: {
      mediaJson: 'random string',
    },
    shallow: true,
  })

  expect(wrapper.text()).toContain('Could not run the app at the moment.')
})

test('Rita does not render if media data is not validate', () => {
  const wrapper = mount(Rita, {
    props: {
      mediaJson: '{"bree_item_id":"23","media":{"session_id":55,"photos":[{"file_id":89,"thumbnail_url":"https:\\/\\/va-photomart-upload.s3.ap-southeast-1.amazonaws.com\\/1476089252-0770723001607931186\\/stock-photo-nautilus-cropped-thumbnail.png"}]}}',
    },
    shallow: true,
  })

  expect(wrapper.text()).toContain('Could not run the app at the moment.')
})