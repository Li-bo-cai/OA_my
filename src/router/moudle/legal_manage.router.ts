import { RouteRecordRaw } from 'vue-router'
const Layout = import('@/views/Layout/Layout.vue')

export const legal_manage: Array<RouteRecordRaw> = [
    // 法务管理
    {
        path: '/legal_manage',
        name: 'legal_manage',
        component: () => Layout,
        redirect: '/home',
        meta: { title: '法务管理', icon: 'icon-tubiao_fawuguanli', hasChild: true, breadCrub: true },
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