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
                path: '/oa_approve/pending',
                component: () => import('@/views/Oa_approve/Pending/index.vue'),
                name: 'pending',
                meta: { title: '待处理' }
            },
            {
                path: '/oa_approve/processed',
                component: () => import('@/views/Oa_approve/Processed/index.vue'),
                name: 'processed',
                meta: { title: '已处理' }
            },
            {
                path: '/oa_approve/send',
                component: () => import('@/views/Oa_approve/Send/index.vue'),
                name: 'send',
                meta: { title: '已发起' }
            },
            {
                path: '/oa_approve/received',
                component: () => import('@/views/Oa_approve/Received/index.vue'),
                name: 'received',
                meta: { title: '我收到的' }
            },
            {
                path: '/oa_approve/work_flow',
                component: () => import('@/views/Oa_approve/WorkFlow/index.vue'),
                name: 'work_flow',
                meta: { title: '流程配置' }
            }
        ]
    },
]