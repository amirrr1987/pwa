import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/search',
      name: 'SearchView',
      component: () => import('@/views/SearchView.vue')
    },
    {
      path: '/user',
      name: 'UsersView',
      component: () => import('@/views/UserView.vue')
    },
    {
      path: '/setting',
      name: 'SettingsView',
      component: () => import('@/views/SettingView.vue')
    }
  ]
})

export default router
