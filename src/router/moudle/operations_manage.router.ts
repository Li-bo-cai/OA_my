import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const operations_manage: Array<RouteRecordRaw> = [
    // 运营管理
    {
        path: '/operations_manage',
        name: 'operations_manage',
        component: Layout,
        redirect: '/operations',
        meta: { title: '运营管理', icon: 'icon-tubiao_yunyingguanli', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'operations',
                component: () => import('@/views/Operations_manage/Operations/index.vue'),
                name: 'operations',
                meta: { title: '首页' }
            }
        ]
    },
]