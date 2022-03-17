import { Module } from "vuex";

interface ICountState {
    // ItemPanelDialogVisible: boolean
    [key: string]: any
}
interface IRootState {
    [key: string]: any
}

const oa_approveModule: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
            // ItemPanelDialogVisible: false,
        }
    },
    getters: {

    },
    mutations: {
        // 设计弹窗开关
        SET_ITEMPANEL(state, payload) {
            state.ItemPanelDialogVisible = payload
        },
    },
    actions: {

    }
}
export default oa_approveModule