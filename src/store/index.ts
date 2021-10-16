import { useStore as baseUseStore, createStore } from 'vuex'
import loginModule from './modules/login'
import homeModule from './modules/home'
import organzationModule from './modules/organization'

export const store = createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loginModule,//登录模块
    homeModule, //首页模块
    organzationModule,//集团组织架构
  }
})

export default store
