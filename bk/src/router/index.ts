import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/search',
      name: 'TheSearch',
      component: () => import('@/views/SearchView.vue')
    },
    {
      path: '/about',
      name: 'TheAbout',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/setting',
      name: 'TheSetting',
      component: () => import('@/views/SettingView.vue')
    }
  ]
})

export default router
