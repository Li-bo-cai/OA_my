import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const operations_manage: Array<RouteRecordRaw> = [
    // 运营管理
    {
        path: '/operations_manage',
        name: 'operations_manage',
        component: Layout,
        redirect: '/home',
        meta: { title: '运营管理', icon: 'icon-tubiao_yunyingguanli', hasChild: true, breadCrub: true },
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