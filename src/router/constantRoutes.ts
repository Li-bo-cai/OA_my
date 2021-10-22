import { RouteRecordRaw } from 'vue-router'

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        // 首页
        path: '/',
        name: 'Home',
        component: () => import('@/views/Layout/Layout.vue'),
        redirect: '/home',
        meta: { title: '首页', icon: 'sell-a-01', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'home',
                component: () => import('../views/Home/Home.vue'),
                name: 'home',
                meta: { title: '首页' }
            },
            {
                path: 'userInfo',
                component: () => import('../views/UserInfo/UserInfo.vue'),
                name: 'userInfo',
                meta: { title: '用户信息' }
            },
            {
                path: 'my-attendance',
                component: () => import('../views/Attendance/MyAttendance.vue'),
                name: 'my-attendance',
                meta: { title: '我的考勤', breadCrub: true },
                children: [
                    {
                        path: 'attendancep-list',
                        component: () => import('../views/Attendance/AttendanceList.vue'),
                        name: 'attendancep-list',
                        meta: { title: '修正列表' }
                    },
                ]
            },
            {
                path: 'PendingWork',
                component: () => import('../views/Pending/PendingWork.vue'),
                name: 'PendingWork',
                meta: { title: '待处理的工作', breadCrub: true },
                children: [
                    {
                        path: 'ToPending',
                        component: () => import('../views/Pending/ToPending.vue'),
                        name: 'ToPending',
                        meta: { title: '去处理' }
                    },
                ]
            },
            {
                path: 'leave_request',
                component: () => import('../views/Leave/LeaveRequest.vue'),
                name: 'leave_request',
                meta: { title: '请假申请', breadCrub: true }
            },
        ]
    },
    {
        // 404
        path: '/404',
        component: () => import('../views/404/404.vue'),
        name: '404',
    },
    {
        // 登录
        path: '/login',
        name: 'login',
        component: () => import('../views/Login/Login.vue')
    },
]