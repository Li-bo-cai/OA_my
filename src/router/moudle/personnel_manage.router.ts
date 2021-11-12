import { RouteRecordRaw } from 'vue-router'
const Layout = import('@/views/Layout/Layout.vue')

export const personnel_manage: Array<RouteRecordRaw> = [
    // 人事管理
    {
        path: '/personnel_manage',
        name: 'personnel_manage',
        component: () => Layout,
        redirect: '/home',
        meta: { title: '人事管理', icon: 'icon-tubiao_renshiguanli', hasChild: true, breadCrub: true },
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