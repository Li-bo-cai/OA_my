import { Module } from "vuex";

interface ICountState {
    gView: insiseGview
    [key: string]: any
}
export interface insiseGview {
    gWidth: number;
    gHeight: number;
}
interface IRootState {
    [key: string]: any
}
const graphModule: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
            gView: {
                gWidth: 0,
                gHeight: 0,
            }
        }
    },
    mutations: {
        // 设置宽高
        SET_GVIEW(state, payload) {
            state.gView = payload
            console.log("state.gView:", state.gView);

        },
    },
    actions: {}
}

export default graphModule