import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
    {
        path: '/:id',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/home/HomePage.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
