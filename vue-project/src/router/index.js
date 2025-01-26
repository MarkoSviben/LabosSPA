import { createRouter, createWebHistory } from 'vue-router'

const AboutPage = () => import('../pages/aboutpage.vue')

const NotFoundPage = () => import('../pages/notfoundpage.vue')

import ToDoPage from '../pages/todopage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ToDoPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
