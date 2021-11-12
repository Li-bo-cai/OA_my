import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const work_report: Array<RouteRecordRaw> = [
    // 工作汇报
    {
        path: '/work_report',
        name: 'work_report',
        component: Layout,
        redirect: '/home',
        meta: { title: '工作汇报', icon: 'icon-tubiao_gongzuohuibao', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'home',
                component: () => import('@/views/work_bench/Home/Home.vue'),
                name: 'home',
                meta: { title: '首页' }
            }
        ]
    },
]