import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import ('../views/Profile.vue')
    },
    {
        path: '/mur',
        name: 'Mur',
        component: () =>
            import ('../views/Mur.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router