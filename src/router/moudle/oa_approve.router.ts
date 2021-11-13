import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const oa_approve: Array<RouteRecordRaw> = [
    // OA审批
    {
        path: '/oa_approve',
        name: 'oa_approve',
        component: Layout,
        redirect: '/all',
        meta: { title: 'OA审批', icon: 'icon-tubiao_OAshenpi', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'all',
                component: () => import('@/views/Oa_approve/All/index.vue'),
                name: 'all',
                meta: { title: '首页' }
            }
        ]
    },
]