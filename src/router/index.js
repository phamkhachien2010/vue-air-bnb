import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import BlogView from '../views/BlogView.vue'
import RoomView from '../views/RoomsView.vue'
import RoomDetail from '../views/RoomDetail.vue';
import ContactView from '../views/ContactView.vue'
import AuthView from '../views/AuthView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/blog',
        name: 'blog',
        component: BlogView
    },
    {
        path: '/rooms',
        name: 'rooms',
        component: RoomView
    },
    {
        path: '/room-detail',
        name: 'RoomDetail',
        component: RoomDetail
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    },
    {
        path: '/auth',
        name: 'Auth',
        component: AuthView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'current'
})

export default router