import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const resource_admin: Array<RouteRecordRaw> = [
    // 资源管理（CMS）
    {
        path: '/resource_admin',
        name: 'resource_admin',
        component: Layout,
        redirect: '/resource',
        meta: { title: '资源管理（CMS）', icon: 'icon-tubiao_ziyuanguanli', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'resource',
                component: () => import('@/views/Resource_admin/Resource/index.vue'),
                name: 'resource',
                meta: { title: '首页' }
            }
        ]
    },
]