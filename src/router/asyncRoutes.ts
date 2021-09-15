import { RouteRecordRaw } from 'vue-router'
import Layout from '@/views/Layout/Layout.vue'

export const asyncRoutes: Array<RouteRecordRaw> = [{
    // 集团组织架构管理
    path: '/organization',
    component: Layout,
    redirect: '/organization',
    children: [
        {
            path: 'organization',
            component: () => import('@/views/Organization/Organization.vue'),
            name: 'organization',
            meta: { title: '集团组织架构管理', icon: 'el-icon-office-building' }
        }
    ]
},
{
    // 人事管理
    path: '/personnelMatters',
    component: Layout,
    redirect: '/personnelMatters/post-manage',
    meta: { title: '人事管理', icon: 'el-icon-collection' },
    children: [
        {
            path: 'post-manage',
            component: () => import('@/views/PersonnelMatters/PostManage/PostManage.vue'),
            name: 'post-manage',
            meta: { title: '岗位管理' }
        },
        {
            path: 'employee-manage',
            component: () => import('@/views/PersonnelMatters/employeeManage/employeeManage.vue'),
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
    component: Layout,
    redirect: '/external/external-manage',
    children: [
        {
            path: 'external-manage',
            component: () => import('@/views/External/ExternalManage.vue'),
            name: 'external-manage',
            meta: { title: '外部资源管理', icon: 'el-icon-link' }
        }
    ]
},
{
    // 公司公告
    path: '/companyAnnounce',
    component: Layout,
    redirect: '/companyAnnounce/company-list',
    children: [
        {
            path: 'companyList',
            component: () => import('@/views/CompanyAnnounce/CompanyList.vue'),
            name: 'company-announce',
            meta: { title: '公司公告', icon: 'el-icon-link' }
        }
    ]
},
{
    // 集团动态
    path: '/groupDynamics',
    component: Layout,
    redirect: '/groupDynamics/dynamics-list',
    children: [
        {
            path: 'dynamics-list',
            component: () => import('@/views/GroupDynamics/DynamicList.vue'),
            name: 'group-dynamics',
            meta: { title: '集团动态', icon: 'el-icon-link' }
        }
    ]
},
{
    // 文档中心
    path: '/document',
    component: Layout,
    redirect: '/document/document-list',
    children: [
        {
            path: 'document-list',
            component: () => import('@/views/DocumentCenter/DocumentList.vue'),
            name: 'document',
            meta: { title: '文档中心', icon: 'el-icon-link' }
        }
    ]
},
{
    // 消息中心
    path: '/message',
    component: Layout,
    redirect: 'message/message-center',
    children: [
        {
            path: 'message-center',
            component: () => import('@/views/MessageCenter/MessageCenter.vue'),
            name: 'message',
            meta: { title: '消息中心', icon: 'el-icon-link' }
        }
    ]
},]