import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const financial_manage: Array<RouteRecordRaw> = [
    // 财务管理
    {
        path: '/financial_manage',
        name: 'financial_manage',
        component: Layout,
        redirect: '/financial',
        meta: { title: '财务管理', icon: 'icon-tubiao_caiwu', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'financial',
                component: () => import('@/views/Financial_manage/Financial/index.vue'),
                name: 'financial',
                meta: { title: '首页' }
            }
        ]
    },
]