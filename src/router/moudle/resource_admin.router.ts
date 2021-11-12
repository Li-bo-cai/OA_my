import { RouteRecordRaw } from 'vue-router'
const Layout = import('@/views/Layout/Layout.vue')

export const resource_admin: Array<RouteRecordRaw> = [
    // 资源管理（CMS）
    {
        path: '/resource_admin',
        name: 'resource_admin',
        component: () => Layout,
        redirect: '/home',
        meta: { title: '资源管理（CMS）', icon: 'icon-tubiao_ziyuanguanli', hasChild: true, breadCrub: true },
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