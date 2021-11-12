import { RouteRecordRaw } from 'vue-router'
const Layout = import('@/views/Layout/Layout.vue')

export const bi_board: Array<RouteRecordRaw> = [
    // BI数据看板
    {
        path: '/bi_board',
        name: 'bi_board',
        component: () => Layout,
        redirect: '/home',
        meta: { title: 'BI数据看板', icon: 'icon-tubiao_shujukanban', hasChild: true, breadCrub: true },
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