import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const organizat_manage: Array<RouteRecordRaw> = [
    // 集团组织架构管理
    {
        path: '/organizat_manage',
        name: 'organizat_manage',
        component: Layout,
        redirect: '/organization',
        meta: { title: '集团组织架构管理', icon: 'icon-tubiao_jituanzuzhijiagouguanli', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'organization',
                component: () => import('@/views/Organizat_manage/Organization/index.vue'),
                name: 'organization',
                meta: { title: '首页' }
            }
        ]
    },
]