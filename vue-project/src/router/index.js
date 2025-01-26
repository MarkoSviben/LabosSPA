import { createRouter, createWebHistory } from 'vue-router'

const AboutPage = () => import('../pages/AboutPage.vue')

const NotFoundPage = () => import('../pages/NotFoundPage.vue')

import ToDoPage from '../pages/ToDoPage.vue'

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
