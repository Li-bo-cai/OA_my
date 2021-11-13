import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const administrat_manage: Array<RouteRecordRaw> = [
    // 行政管理
    {
        path: '/administrat_manage',
        name: 'administrat_manage',
        component: Layout,
        redirect: '/administration',
        meta: { title: '行政管理', icon: 'icon-tubiao_hangzhengguanli', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'administration',
                component: () => import('@/views/Administrat_manage/administration/index.vue'),
                name: 'administration',
                meta: { title: '首页' }
            }
        ]
    },
]