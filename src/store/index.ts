import { useStore as baseUseStore, createStore } from 'vuex'
import loginMoudle from './modules/login'
import homeMoudle from './modules/home'


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
  }
})

export default store
