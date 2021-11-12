import { RouteRecordRaw } from 'vue-router'
const Layout = import('@/views/Layout/Layout.vue')

export const oa_approve: Array<RouteRecordRaw> = [
    // OA审批
    {
        path: '/oa_approve',
        name: 'oa_approve',
        component: () => Layout,
        redirect: '/home',
        meta: { title: 'OA审批', icon: 'icon-tubiao_OAshenpi', hasChild: true, breadCrub: true },
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