import { RouteRecordRaw } from 'vue-router'
const Layout = import('@/views/Layout/Layout.vue')

export const client_manage: Array<RouteRecordRaw> = [
    // 客户管理
    {
        path: '/client_manage',
        name: 'client_manage',
        component: () => Layout,
        redirect: '/home',
        meta: { title: '运营管理', icon: 'icon-tubiao_yunyingguanli', hasChild: true, breadCrub: true },
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