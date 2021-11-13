import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const system_manage: Array<RouteRecordRaw> = [


    // 系统管理
    {
        path: '/system_manage',
        name: 'system_manage',
        component: Layout,
        redirect: '/system',
        meta: { title: '运营管理', icon: 'icon-tubiao_shezhi', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'system',
                component: () => import('@/views/System_manage/System/index.vue'),
                name: 'system',
                meta: { title: '首页' }
            }
        ]
    },
]