import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import './index.css'

import Login from './Pages/Auth/Login.vue'
import Register from './Pages/Auth/Register.vue'
import ForgotPassword from './Pages/Auth/ForgotPassword.vue'
import HomePage from './Pages/HomePage.vue'
import PostsShow from './Pages/Posts/PostsShow.vue'
import ProfileDashboard from './Pages/Profile/Dashboard/Index.vue'


const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/forgotpassword', component: ForgotPassword },
    { path: '/posts/:id', component: PostsShow },
    { path: '/profile/dashboard', component: ProfileDashboard }

]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
