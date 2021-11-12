import { RouteRecordRaw } from 'vue-router'
const Layout = import('@/views/Layout/Layout.vue')

export const system_manage: Array<RouteRecordRaw> = [


    // 系统管理
    {
        path: '/system_manage',
        name: 'system_manage',
        component: () => Layout,
        redirect: '/home',
        meta: { title: '运营管理', icon: 'icon-tubiao_shezhi', hasChild: true, breadCrub: true },
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