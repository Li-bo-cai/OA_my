import { createStore } from 'vuex'
import loginModule from './modules/login'
import homeModule from './modules/home'
import organzationModule from './modules/organization'
import postModule from './modules/post'
import attendceModule from './modules/attendce'
import companyModule from './modules/company'
import documentModule from './modules/document'
import dynamicsModule from './modules/dynamics'
import employeeModule from './modules/employee'
import externalModule from './modules/external'
import holidayModule from './modules/holiday'
/* ------------------------------------------------------- */
import routesMoudle from './modules/routes'
import shortCutModule from './modules/shortCut'
import oa_approveModule from './modules/oa_approve'
import messageModule from './modules/message'
import socketModule from './modules/socket'
import graphModule from './modules/graph'


export const store = createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    routesMoudle,  //路由模块
    loginModule,//登录模块
    shortCutModule,//快捷信息模块
    oa_approveModule,//oa模块
    messageModule,//消息模块
    socketModule, //socket 消息传递模块
    graphModule, //流程传递模块

    homeModule, //首页模块
    organzationModule,//集团组织架构
    postModule,//岗位管理
    employeeModule,//员工管理模块
    attendceModule, //考勤管理模块
    holidayModule,//休假管理模块
    externalModule,//外部资源管理模块
    companyModule,//公司公告模块
    dynamicsModule,//集团动态模块
    documentModule,//文档中心模块
  }
})

export default store
