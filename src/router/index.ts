import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import { constantRoutes } from './constantRoutes'
import { asyncRoutes } from './asyncRoutes'
import {useStore} from 'vuex'
const store = useStore()

// const routes = [...constantRoutes, ...asyncRoutes]

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

// router.beforeEach((to, from, next) => {
//   const token = store.state.loginMoudle.token
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
