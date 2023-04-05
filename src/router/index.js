import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListView
    },
    {
      path: '/productform',
      name: 'productform',
      component: () => import('../views/FormView.vue')
    }
  ]
})

export default router
