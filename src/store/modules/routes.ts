import { Module } from "vuex";

interface ICountState {
    [key: string]: any
}
interface IRootState {
    [key: string]: any
}
const routesMoudle: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
            ItemRoutes: {},  //存放模块下的路由
        }
    },
    mutations: {
        // 设置routers
        SET_ITEM_ROUTES: (state, payload) => {
            state.ItemRoutes = payload
        }
    }
}
export default routesMoudle