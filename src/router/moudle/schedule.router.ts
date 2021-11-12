import { RouteRecordRaw } from 'vue-router'
const Layout = import('@/views/Layout/Layout.vue')

export const schedule: Array<RouteRecordRaw> = [
    // 日程
    {
        path: '/schedule',
        name: 'schedule',
        component: () => Layout,
        redirect: '/home',
        meta: { title: '日程', icon: 'icon-tubiao_richeng', hasChild: true, breadCrub: true },
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