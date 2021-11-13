import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const client_manage: Array<RouteRecordRaw> = [
    // 客户管理
    {
        path: '/client_manage',
        name: 'client_manage',
        component: Layout,
        redirect: '/clientent',
        meta: { title: '运营管理', icon: 'icon-tubiao_yunyingguanli', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'clientent',
                component: () => import('@/views/Client_manage/clientent/index.vue'),
                name: 'clientent',
                meta: { title: '首页' }
            }
        ]
    },
]