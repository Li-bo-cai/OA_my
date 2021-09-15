import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { constantRoutes } from './constantRoutes'
import { asyncRoutes } from './asyncRoutes'

// const routes = [...constantRoutes, ...asyncRoutes]

export function createNewRouter(routes: Array<RouteRecordRaw>) {
  return createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
  })
}



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...constantRoutes, ...asyncRoutes]
})

// router.beforeEach((to, from, next) => {
//   let token = storage.token
//   if (token) {
//     next()
//   } else {
//     if (to.path === '/login') {
//       next()
//     } else {
//       router.replace('/login')
//     }
//   }
// })

export default router
