import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import './index.css'

import Login from './components/Login.vue'
import Register from './components/Register.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import HomePage from './components/HomePage.vue'
import Singlepostpreview from './components/Singlepostpreview.vue'


const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/forgotpassword', component: ForgotPassword },
    { path: '/homepage', component: HomePage },
    { path: '/singlepostpreview', component: Singlepostpreview}

]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
