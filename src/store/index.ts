import { useStore as baseUseStore, createStore } from 'vuex'
import loginMoudle from './modules/login'
import homeMoudle from './modules/home'
import organzationMoudle from './modules/organization'

export const store = createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loginMoudle,//登录模块
    homeMoudle, //首页模块
    organzationMoudle,//集团组织架构
  }
})

export default store
