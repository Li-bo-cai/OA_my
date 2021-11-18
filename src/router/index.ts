import { createRouter, createWebHistory } from 'vue-router'
import { constantRoutes } from './constantRoutes'
import { asyncRoutes } from './asyncRoutes'

const router = createRouter({
  history: createWebHistory(),
  routes: [...constantRoutes, ...asyncRoutes]
})


router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('Token')
  if (token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      router.replace('/login')
    }
  }
})

export default router
