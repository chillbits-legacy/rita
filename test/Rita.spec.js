import { mount } from '@vue/test-utils'
import Rita from '../src/Rita.vue'

describe('Rita.spec.js', () => {
    it('renders successfully', async () => {
        const div = document.createElement('div')

        div.setAttribute('data-media-id', 2)
        document.body.appendChild(div)

        const wrapper = mount(Rita, {
            attachTo: div,
            propsData: { ...div.dataset }
        })
        expect(wrapper.html()).to.contain('Rita - 2')
    })
})