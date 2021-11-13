import { RouteRecordRaw } from 'vue-router'
const Layout = (): unknown => import('@/views/Layout/Layout.vue')
export const user_center: Array<RouteRecordRaw> = [
    // 用户中心
    {
        path: '/user_center',
        name: 'user_center',
        component: Layout,
        redirect: '/userInfo',
        meta: { title: '用户中心', icon: 'icon-tubiao_yonghuzhongxin', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'userInfo',
                component: () => import('@/views/User_center/UserInfo/index.vue'),
                name: 'userInfo',
                meta: { title: '首页' }
            }
        ]
    },
]