import { mount } from '@vue/test-utils'
import Rita from '../../src/Rita.vue'
import Button from 'ant-design-vue/lib/button'

test('Rita renders', () => {

  const wrapper = mount(Rita, {
    props: {
      mediaId: '2'
    }
  })

  expect(wrapper.text()).toContain('Update your photo quantity')
})