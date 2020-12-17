import { mount } from '@vue/test-utils'
import EditButton from '@rita/components/EditButton'
import Button from 'ant-design-vue/lib/button'

test('EditButton renders successfully', () => {

  const wrapper = mount(EditButton, {
    props: {
      label: 'Edit',
    },
    global: {
      components: {
        'a-button': Button,
      },
    },
    shallow: true,
  })

  expect(wrapper.html()).toContain('<a-button-stub></a-button-stub>')
})

test('EditButton emits event click when Ant Button clicked', async () => {
  const wrapper = mount(EditButton, {
    props: {
      label: 'Edit',
    },
    global: {
      components: {
        'a-button': Button,
      },
    },
  })

  await wrapper.find('button').trigger('click')
  expect(wrapper.emitted()).toHaveProperty('click')
})

