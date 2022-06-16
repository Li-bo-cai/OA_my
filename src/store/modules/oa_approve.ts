import { Module } from "vuex";

interface ICountState {
    // itemPanelDialogVisible: boolean
    [key: string]: any
}
interface IRootState {
    [key: string]: any
}

const oa_approveModule: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
            // itemPanelDialogVisible: false,
        }
    },
    getters: {

    },
    mutations: {
        // 设计弹窗开关
        SET_ITEMPANEL(state, payload) {
            state.itemPanelDialogVisible = payload
        },
    },
    actions: {

    }
}
export default oa_approveModule