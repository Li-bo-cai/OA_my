import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')

export const work_bench: Array<RouteRecordRaw> = [
    //工作台
    {
        path: '/',
        name: 'work_bench',
        component: Layout,
        redirect: '/home',
        meta: { title: '工作台', icon: 'icon-tubiao_gongzuotai', hasChild: true, breadCrub: true },
        children: [
            {
                path: '/home',
                component: () => import('@/views/work_bench/Home/Home.vue'),
                name: 'home',
                meta: { title: '首页' }
            }
        ]
    },
]