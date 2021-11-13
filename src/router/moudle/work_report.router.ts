import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const work_report: Array<RouteRecordRaw> = [
    // 工作汇报
    {
        path: '/work_report',
        name: 'work_report',
        component: Layout,
        redirect: '/report',
        meta: { title: '工作汇报', icon: 'icon-tubiao_gongzuohuibao', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'report',
                component: () => import('@/views/Work_report/Report/index.vue'),
                name: 'report',
                meta: { title: '首页' }
            }
        ]
    },
]