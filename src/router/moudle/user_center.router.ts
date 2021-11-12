import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const user_center: Array<RouteRecordRaw> = [
    // 用户中心
    {
        path: '/user_center',
        name: 'user_center',
        component: Layout,
        redirect: '/home',
        meta: { title: '用户中心', icon: 'icon-tubiao_yonghuzhongxin', hasChild: true, breadCrub: true },
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