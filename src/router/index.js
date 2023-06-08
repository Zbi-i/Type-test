import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
    {
      path: '/',
      name: 'HomePage',
      component: () => import(/* webpackChunkName: "HomePage" */ '../views/home/HomePage.vue'),
    },
    {
      path: '/typing/chinese/:id',
      name: 'TypeChinese',
      component: () => import(/* webpackChunkName: "TypeMoudle" */ '../views/typeing/TypeChinese.vue'),
    },
    {
      path: '/typing/letter/:category',
      name: 'TypeLetter',
      component: () => import(/* webpackChunkName: "TypeMoudle" */ '../views/typeing/TypeLetter.vue'),
    },
    {
      path: '/map',
      name: 'MapPage',
      component: () => import(/* webpackChunkName: "MapPage" */ '../views/map/MapPage.vue'),
    },
    {
      path: '/course',
      name: 'CoursePage',
      component: () => import(/* webpackChunkName: "CoursePage" */ '../views/course/CoursePage.vue'),
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
