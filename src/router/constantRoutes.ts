import { RouteRecordRaw } from 'vue-router'

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        // 首页
        path: '/',
        name: 'Home',
        component: ()=>import('@/views/Layout/Layout.vue'),
        redirect: '/home',
        meta: { title: '首页', icon: 'sell-a-01', hasChild: false },
        children: [
            {
                path: 'home',
                component: () => import('../views/Home/Home.vue'),
                name: 'home',
                meta: { title: '首页' }
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
    },
]