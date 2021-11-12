import { RouteRecordRaw } from 'vue-router'

export const asyncRoutes: Array<RouteRecordRaw> = [
    {
        // 首页
        path: '/',
        name: 'workbench',
        component: () => import('@/views/Layout/Layout.vue'),
        redirect: '/home',
        meta: { title: '工作台', icon: 'sell-a-01', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'home',
                component: () => import('@/views/work_bench/Home/Home.vue'),
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
                meta: { title: '待处理工作', breadCrub: true },
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
        // 集团组织架构管理
        path: '/organization',
        component: () => import('@/views/Layout/Layout.vue'),
        redirect: '/organization/organization',
        meta: { title: '集团组织架构管理', icon: 'sell-a-02', hasChild: true, breadCrub: false },
        children: [
            {
                path: 'organization',
                component: () => import('@/views/Groups/Organization/Organization.vue'),
                name: 'organization',
                meta: { title: '组织架构管理' }
            },
            {
                path: 'post-manage',
                component: () => import('@/views/Groups/PostManage/PostManage.vue'),
                name: 'post-manage',
                meta: { title: '岗位管理' }
            },
            {
                path: 'public-power',
                component: () => import('@/views/Groups/PostManage/PostManage.vue'),
                name: 'public-power',
                meta: { title: '公共权限管理' }
            },
        ]
    },
    {
        // 人事管理
        path: '/personnelMatters',
        component: () => import('@/views/Layout/Layout.vue'),
        redirect: '/personnelMatters/employee-manage',
        meta: { title: '人事管理', icon: 'sell-a-03', hasChild: true, breadCrub: true },
        children: [
            {
                path: 'employee-manage',
                component: () => import('@/views/PersonnelMatters/EmployeeManage/EmployeeManage.vue'),
                name: 'employee-manage',
                meta: { title: '员工管理' }
            },
            {
                path: 'attendance-manage',
                component: () => import('@/views/PersonnelMatters/AttendanceManage/AttendanceManage.vue'),
                name: 'attendance-manage',
                meta: { title: '考勤管理' }
            },
            {
                path: 'holiday-manage',
                component: () => import('@/views/PersonnelMatters/HolidayManage/HolidayManage.vue'),
                name: 'holiday-manage',
                meta: { title: '休假管理' }
            }
        ]
    },
    {
        //外部资源管理
        path: '/external',
        component: () => import('@/views/Layout/Layout.vue'),
        redirect: '/external/external-manage',
        meta: { title: '外部资源管理', icon: 'sell-a-04', hasChild: false, breadCrub: false },
        children: [
            {
                path: 'external-manage',
                component: () => import('@/views/External/ExternalManage.vue'),
                name: 'external-manage',
                meta: { title: '外部资源管理', icon: 'sell-a-04' }
            }
        ]
    },
    {
        // 公司公告
        path: '/companyAnnounce',
        component: () => import('@/views/Layout/Layout.vue'),
        redirect: '/companyAnnounce/company-list',
        meta: { title: '公司公告', icon: 'sell-a-05', hasChild: false, breadCrub: false },
        children: [
            {
                path: 'company-list',
                component: () => import('@/views/CompanyAnnounce/CompanyList.vue'),
                name: 'company-announce',
                meta: { title: '公司公告', icon: 'sell-a-05' }
            }
        ]
    },
    {
        // 集团动态
        path: '/groupDynamics',
        component: () => import('@/views/Layout/Layout.vue'),
        redirect: '/groupDynamics/dynamics-list',
        meta: { title: '集团动态', icon: 'sell-a-06', hasChild: false, breadCrub: false },
        children: [
            {
                path: 'dynamics-list',
                component: () => import('@/views/GroupDynamics/DynamicList.vue'),
                name: 'group-dynamics',
                meta: { title: '集团动态', icon: 'sell-a-06' }
            }
        ]
    },
    {
        // 文档中心
        path: '/document',
        component: () => import('@/views/Layout/Layout.vue'),
        redirect: '/document/document-list',
        meta: { title: '文档中心', icon: 'sell-a-07', hasChild: false, breadCrub: false },
        children: [
            {
                path: 'document-list',
                component: () => import('@/views/DocumentCenter/DocumentList.vue'),
                name: 'document',
                meta: { title: '文档中心', icon: 'sell-a-07' }
            }
        ]
    },
    {
        // 消息中心
        path: '/message',
        component: () => import('@/views/Layout/Layout.vue'),
        redirect: '/message/message-center',
        meta: { title: '消息中心', icon: 'sell-a-08', hasChild: false, breadCrub: false },
        children: [
            {
                path: 'message-center',
                component: () => import('@/views/MessageCenter/MessageCenter.vue'),
                name: 'message',
                meta: { title: '消息中心', icon: 'sell-a-08' }
            }
        ]
    },]