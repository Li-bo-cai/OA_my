import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const personnel_manage: Array<RouteRecordRaw> = [
    // 人事管理
    {
        path: '/personnel_manage',
        name: 'personnel_manage',
        component: Layout,
        redirect: '/employeeManage',
        meta: { title: '人事管理', icon: 'icon-tubiao_renshiguanli', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'employeeManage',
                component: () => import('@/views/Personnel_manage/EmployeeManage/index.vue'),
                name: 'employeeManage',
                meta: { title: '人事管理' }
            }
        ]
    },
]