import { Module } from "vuex";
import { staff_check2, insideCheck2 } from '@/api/employee/employee.api'
interface ICountState {
    employee_tableData: any[],
    staffInfo: insideCheck2,
    total: number
}
interface IRootState {
    [key: string]: any
}
let a!: number
const employeeModule: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
            employee_tableData: [],
            staffInfo: {
                content: '',
                depart_id: a,
                post: '',
                state: a,
                page: 1,
                per_page: 10
            },
            total: 0
        }
    },
    getters: {},
    mutations: {
        // 设置employee_tableData
        SET_EMPLOYEE_TABLEDATA(state, payload) {
            state.employee_tableData = [...payload]
        },
        //设置page
        SET_PAGE(state, payload) {
            state.staffInfo.page = payload
        },
        //设置per_page
        SET_PER_PAGE(state, payload) {
            state.staffInfo.per_page = payload
        },
        //per_page
        SET_TOTAL(state, payload) {
            state.total = payload
        },
    },
    actions: {
        // 获取staff_check
        GET_STAFF_CHECK({ state, commit }) {
            staff_check2(state.staffInfo).then((res: any) => {
                if (res.data.code == 1) {
                    commit('SET_EMPLOYEE_TABLEDATA', res.data.data.data)
                    commit('SET_TOTAL', res.data.data.total)
                }
            })
        }
    }
}
export default employeeModule