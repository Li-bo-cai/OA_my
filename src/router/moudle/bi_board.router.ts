import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const bi_board: Array<RouteRecordRaw> = [
    // BI数据看板
    {
        path: '/bi_board',
        name: 'bi_board',
        component: Layout,
        redirect: '/board',
        meta: { title: 'BI数据看板', icon: 'icon-tubiao_shujukanban', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'board',
                component: () => import('@/views/Bi_board/board/index.vue'),
                name: 'board',
                meta: { title: '首页' }
            }
        ]
    },
]