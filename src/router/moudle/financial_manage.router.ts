import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const financial_manage: Array<RouteRecordRaw> = [
    // 财务管理
    {
        path: '/financial_manage',
        name: 'financial_manage',
        component: Layout,
        redirect: '/home',
        meta: { title: '财务管理', icon: 'icon-tubiao_caiwu', hasChild: true, breadCrub: true },
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