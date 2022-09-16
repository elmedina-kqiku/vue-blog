import { createApp } from 'vue'

import './index.css'

import router from './router.js'
import App from './App.vue'
import store from './store/store'

const token = localStorage.getItem('token')

if(token) {
    store.dispatch('attempt', token)
}

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
