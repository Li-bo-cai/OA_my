import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const project_manage: Array<RouteRecordRaw> = [
    // 项目管理
    {
        path: '/project_manage',
        name: 'project_manage',
        component: Layout,
        redirect: '/project',
        meta: { title: '运营管理', icon: 'icon-tubiao_xiangmuguanli', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'project',
                component: () => import('@/views/Project_manage/Project/index.vue'),
                name: 'project',
                meta: { title: '首页' }
            }
        ]
    },
]