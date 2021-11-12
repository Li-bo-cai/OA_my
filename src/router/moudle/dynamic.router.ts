import { RouteRecordRaw } from 'vue-router'
const Layout = import('@/views/Layout/Layout.vue')

export const dynamic: Array<RouteRecordRaw> = [
    // 动态
    {
        path: '/dynamic',
        name: 'dynamic',
        component: () => Layout,
        redirect: '/home',
        meta: { title: '动态', icon: 'icon-tubiao_dongtai', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'home',
                component: () => import('@/views/Home/Home.vue'),
                name: 'home',
                meta: { title: '首页' }
            }
        ]
    },
]