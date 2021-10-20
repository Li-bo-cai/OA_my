import { RouteRecordRaw } from 'vue-router'

export const asyncRoutes: Array<RouteRecordRaw> = [{
    // 集团组织架构管理
    path: '/organization',
    component: ()=>import('@/views/Layout/Layout.vue'),
    redirect: '/organization/organization',
    meta: {
        title: '集团组织架构管理',
        icon: 'sell-a-02',
        hasChild: false,
        breadCrub: false
    },
    children: [
        {
            path: 'organization',
            component: () => import('@/views/Organization/Organization.vue'),
            name: 'organization',
            meta: { title: '集团组织架构管理' }
        }
    ]
},
{
    // 人事管理
    path: '/personnelMatters',
    component: ()=>import('@/views/Layout/Layout.vue'),
    redirect: '/personnelMatters/post-manage',
    meta: { title: '人事管理', icon: 'sell-a-03', hasChild: true, breadCrub: true },
    children: [
        {
            path: 'post-manage',
            component: () => import('@/views/PersonnelMatters/PostManage/PostManage.vue'),
            name: 'post-manage',
            meta: { title: '岗位管理' }
        },
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
            meta: { title: '休假管理' }
        }
    ]
},
{
    //外部资源管理
    path: '/external',
    component: ()=>import('@/views/Layout/Layout.vue'),
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
    component: ()=>import('@/views/Layout/Layout.vue'),
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
    component: ()=>import('@/views/Layout/Layout.vue'),
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
    component: ()=>import('@/views/Layout/Layout.vue'),
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
    component: ()=>import('@/views/Layout/Layout.vue'),
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