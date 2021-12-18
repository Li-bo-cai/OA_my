import { Module } from "vuex";

interface ICountState {
    ItemPanelDialogVisible: boolean
    gView:insiseGview
    [key: string]: any
}
interface IRootState {
    [key: string]: any
}

interface insiseGview{
    gWidth:number,
    gHeight:number
}

let a!:number

const oa_approveModule: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
            ItemPanelDialogVisible: false,
            gView:{
                gWidth:a,
                gHeight:a
            }
        }
    },
    getters: {

    },
    mutations: {
        // 设计弹窗开关
        SET_ITEMPANEL(state, payload) {
            state.ItemPanelDialogVisible = payload
        },
        SET_GVIEW(state,payload){
            state.gView = payload
        }
    },
    actions: {

    }
}
export default oa_approveModule