import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const my_commission: Array<RouteRecordRaw> = [
    // 我的代办
    {
        path: '/my_commission',
        name: 'my_commission',
        component: Layout,
        redirect: '/pending',
        meta: { title: '我的代办', icon: 'icon-tubiao_daiban', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'pending',
                component: () => import('@/views/My_commission/Pending/index.vue'),
                name: 'pending',
                meta: { title: '首页' }
            }
        ]
    },
]