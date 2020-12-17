import { createApp } from 'vue'
import Rita from './Rita.vue'
import './index.css'
import Button from 'ant-design-vue/lib/button'
import 'ant-design-vue/lib/button/style/index.css'
import Modal from 'ant-design-vue/lib/modal'
import 'ant-design-vue/lib/modal/style/index.css'

const mount = document.querySelector('#rita')

if ('object' === typeof mount) {
  const App = createApp(Rita, {
    ...mount.dataset,
  })

  App.use(Button)
  App.use(Modal)
  App.mount('#rita')
} else {
  console.error('Could not render Rita on the expected mount.')
}

