import { RouteRecordRaw } from 'vue-router'
const Layout = import('@/views/Layout/Layout.vue')

export const organizat_manage: Array<RouteRecordRaw> = [
    // 集团组织架构管理
    {
        path: '/organizat_manage',
        name: 'organizat_manage',
        component: () => Layout,
        redirect: '/home',
        meta: { title: '集团组织架构管理', icon: 'icon-tubiao_jituanzuzhijiagouguanli', hasChild: true, breadCrub: true },
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