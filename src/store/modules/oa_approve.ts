import { Module } from "vuex";

interface ICountState {
    [key: string]: any
}
interface IRootState {
    [key: string]: any
}

const oa_approveMoudle: Module<ICountState, IRootState> = {
    state() {
        return {
            ItemPanelDialogVisible: false,
        }
    },
    mutations: {
        SET_ITEMPANEL(state, payload) {
            state.ItemPanelDialogVisible = payload
        }
    },
    actions: {

    }
}
export default oa_approveMoudle