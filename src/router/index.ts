import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../views/Layout/Layout.vue'
const routes: Array<RouteRecordRaw> = [
  {
    // 首页
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('../views/Home/Home.vue'),
        name: 'home',
        meta: { title: '首页', icon: 'el-icon-house' }
      }
    ]
  },
  {
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
        component: () => import('../views/PersonnelMatters/PostManage.vue'),
        name: 'post-manage',
        meta: { title: '岗位管理' }
      },
      {
        path: 'employee-manage',
        component: () => import('../views/PersonnelMatters/employeeManage.vue'),
        name: 'employee-manage',
        meta: { title: '员工管理' }
      },
      {
        path: 'attendance-manage',
        component: () => import('../views/PersonnelMatters/AttendanceManage.vue'),
        name: 'attendance-manage',
        meta: { title: '考勤管理' }
      },
      {
        path: 'holiday-manage',
        component: () => import('../views/PersonnelMatters/HolidayManage.vue')
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
        component: () => import('../views/External/ExternalManage.vue'),
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
        component: () => import('../views/CompanyAnnounce/CompanyList.vue')
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
        component: () => import('../views/GroupDynamics/DynamicList.vue')
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
        component: () => import('../views/DocumentCenter/DocumentList.vue')
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
        component: () => import('../views/MessageCenter/MessageCenter.vue')
      }
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
    name: '登录',
    component: () => import('../views/Login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
