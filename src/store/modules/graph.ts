import { Module } from "vuex";

interface ICountState {
    gForm: insiseGraphForm
    disabled:boolean
    [key: string]: any
}

export interface insiseGraphForm {
    id:string,
    name: string,
    type:number
}
interface IRootState {
    [key: string]: any
}
const graphModule: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
            disabled:true,
            gForm: {
                id: '',
                name: '',
                type: 1
            }
        }
    },
    mutations: {
        // 设置节点信息
        SET_GFORM(state, payload) {
            state.gForm = payload
        },
        SET_DISABLED(state,payload){
            state.disabled = payload
        }
    },
    actions: {}
}

export default graphModule