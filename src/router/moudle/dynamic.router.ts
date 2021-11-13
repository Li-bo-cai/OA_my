import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const dynamic: Array<RouteRecordRaw> = [
    // 动态
    {
        path: '/dynamic',
        name: 'dynamic',
        component: Layout,
        redirect: '/group_dynamic',
        meta: { title: '动态', icon: 'icon-tubiao_dongtai', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'group_dynamic',
                component: () => import('@/views/Dynamic/GroupDynamics/index.vue'),
                name: 'group_dynamic',
                meta: { title: '首页' }
            }
        ]
    },
]