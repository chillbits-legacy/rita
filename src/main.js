import { createApp } from 'vue'
import Rita from './Rita.vue'
import './index.css'
import Button from 'ant-design-vue/lib/button'
import 'ant-design-vue/lib/button/style/css'

const mount = document.querySelector('#rita')

const App = createApp(Rita, {
    ...mount.dataset
})

App.use(Button)
App.mount('#rita')
