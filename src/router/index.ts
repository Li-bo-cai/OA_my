import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import { constantRoutes } from './constantRoutes'
import { asyncRoutes } from './asyncRoutes'

export function createNewRouter(routes: Array<RouteRecordRaw>): Router {
  return createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
  })
}



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
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
