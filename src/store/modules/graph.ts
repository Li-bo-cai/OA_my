import { Module } from "vuex";

interface ICountState {
    gForm: insiseGraphForm
    disabled: boolean
    [key: string]: any
}

export interface insiseGraphForm {
    id: string,
    name: string,
    type?: number,
    changeOptType?: number
    limit_timeType?: number
    limit_time?: number
    more?: number
    examineModel?: number
    terminus?: number
    terminus_plies?: number
    approverisNull?: number
}
interface IRootState {
    [key: string]: any
}
let a!: number
const graphModule: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
            disabled: true,  //表单是否禁用
            confirmStatus: false,//用户是否点击确定按钮
            gForm: {
                id: '',
                name: '',
                type: a,
                changeOptType: a,
                limit_timeType: 1,
                limit_time: a,
                more: 1,
                examineModel: 1,
                terminus: 1,
                terminus_plies: 1,
                approverisNull: 1
            }
        }
    },
    mutations: {
        // 设置节点信息
        SET_GFORM(state, payload) {
            state.gForm = payload
        },
        // 设置禁用状态
        SET_DISABLED(state, payload) {
            state.disabled = payload
        },
        // 设置全局清空
        SET_ALL_DATA_CLEAR(state, payload) {
            state.gForm.id = ''
            state.gForm.name = ''
            state.gForm.type = a
            state.disabled = true
        },
        //设置表单确定按钮是否提交
        SET_CF_STATUS(state, payload) {
            state.confirmStatus = payload
        }
    },
    actions: {}
}

export default graphModule