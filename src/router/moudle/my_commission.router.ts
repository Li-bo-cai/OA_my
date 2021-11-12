import { RouteRecordRaw } from 'vue-router'
const Layout = import('@/views/Layout/Layout.vue')

export const my_commission: Array<RouteRecordRaw> = [
    // 我的代办
    {
        path: '/my_commission',
        name: 'my_commission',
        component: () => Layout,
        redirect: '/home',
        meta: { title: '我的代办', icon: 'icon-tubiao_daiban', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'home',
                component: () => import('@/views/work_bench/Home/Home.vue'),
                name: 'home',
                meta: { title: '首页' }
            }
        ]
    },
]