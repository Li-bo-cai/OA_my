import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const oa_approve: Array<RouteRecordRaw> = [
    // OA审批
    {
        path: '/oa_approve',
        name: 'oa_approve',
        component: Layout,
        redirect: '/oa_approve/all',
        meta: { title: 'OA审批', icon: 'icon-tubiao_OAshenpi', hasChild: true, breadCrub: true },
        children: [
            {
                path: '/oa_approve/all',
                component: () => import('@/views/Oa_approve/All/index.vue'),
                name: 'all',
                meta: { title: '全部' }
            },
            {
                path: '/oa_approve/work_flow',
                component: () => import('@/views/Oa_approve/WorkFlow/index.vue'),
                name: 'work_flow',
                meta: { title: '流程配置' }
            },
            {
                path: '/oa_approve/form_designer',
                component: () => import('@/views/Oa_approve/Supervisor/index.vue'),
                name: 'form_designer',
                meta: { title: '表单配置' }
            },
        ]
    },
]