import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const legal_manage: Array<RouteRecordRaw> = [
    // 法务管理
    {
        path: '/legal_manage',
        name: 'legal_manage',
        component: Layout,
        redirect: '/leagal',
        meta: { title: '法务管理', icon: 'icon-tubiao_fawuguanli', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'leagal',
                component: () => import('@/views/Legal_manage/Leagal/index.vue'),
                name: 'leagal',
                meta: { title: '首页' }
            }
        ]
    },
]