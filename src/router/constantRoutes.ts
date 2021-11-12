import { RouteRecordRaw } from 'vue-router'
import { work_bench } from './moudle/work_bench.router'

const otherRoutes: Array<RouteRecordRaw> = [
    {
        // 404
        path: '/404',
        component: () => import('@/views/404/404.vue'),
        name: '404',
    },
    {
        // 登录
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login/Login.vue')
    },
]

export const constantRoutes: Array<RouteRecordRaw> = [...otherRoutes, ...work_bench]