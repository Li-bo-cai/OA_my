import { RouteRecordRaw } from 'vue-router'
import Layout from '../views/Layout/Layout.vue'

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        // 首页
        path: '/',
        name: 'Home',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: () => import('../views/Home/Home.vue'),
                name: 'home',
                meta: { title: '首页', icon: 'el-icon-house' }
            }
        ]
    },
    {
        // 404
        path: '/404',
        component: () => import('../views/404/404.vue'),
        name: '404',
    },
    {
        // 登录
        path: '/login',
        name: '登录',
        component: () => import('../views/Login/Login.vue')
    }
]