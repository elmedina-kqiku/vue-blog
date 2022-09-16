import * as VueRouter from 'vue-router';
// import store from './store/store';
// import { IS_USER_AUTHENTICATE_GETTER } from './store/storeconstants';


import Login from './Pages/Auth/Login.vue'
import Register from './Pages/Auth/Register.vue'
import ForgotPassword from './Pages/Auth/ForgotPassword.vue'
import HomePage from './Pages/HomePage.vue'
import Show from './Pages/Posts/Show.vue'
import ProfileDashboard from './Pages/Profile/Dashboard/Index.vue'
import Categories from './Pages/Profile/Categories/Categories.vue'
import ProfilePosts from './Pages/Profile/Posts/ProfilePosts.vue'
import ProfileShow from './Pages/Profile/Posts/ProfileShow.vue'
import CreatePost from './Pages/Profile/Posts/CreatePost'


const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: Login, meta: { auth: false } },
    { path: '/register', component: Register, meta: { auth: false }  },
    { path: '/forgotpassword', component: ForgotPassword },
    { path: '/posts/:id', component: Show },
    { path: '/profile/dashboard', component: ProfileDashboard, meta: { auth: true } },
    { path: '/profile/categories', component: Categories },
    { path: '/profile/posts', component: ProfilePosts},
    { path: '/profile/posts/:id', component: ProfileShow},
    { path: '/profile/posts/createpost', component: CreatePost}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});



export default router;