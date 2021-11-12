import { RouteRecordRaw } from 'vue-router'
const Layout = import('@/views/Layout/Layout.vue')

export const administrat_manage: Array<RouteRecordRaw> = [
    // 行政管理
    {
        path: '/administrat_manage',
        name: 'administrat_manage',
        component: () => Layout,
        redirect: '/home',
        meta: { title: '行政管理', icon: 'icon-tubiao_hangzhengguanli', hasChild: true, breadCrub: true },
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