import { createApp } from 'vue'
import Rita from './Rita.vue'
import './index.css'

const mount = document.querySelector('#rita')

createApp(Rita, {
    ...mount.dataset
}).mount('#rita')
