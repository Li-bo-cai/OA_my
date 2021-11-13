import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const schedule: Array<RouteRecordRaw> = [
    // 日程
    {
        path: '/schedule',
        name: 'schedule',
        component: Layout,
        redirect: '/day',
        meta: { title: '日程', icon: 'icon-tubiao_richeng', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'day',
                component: () => import('@/views/Schedule/Day/index.vue'),
                name: 'day',
                meta: { title: '首页' }
            }
        ]
    },
]