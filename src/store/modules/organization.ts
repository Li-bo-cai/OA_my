import { Module } from "vuex";
import { department_com_show2, staff_check2, insideCheck } from '@/api/organization/organization.api'

interface ICountState {
    tree: any[],
    staff_data: any[],
    principal: string,
    staffInfo: insideCheck,
    depart_name: string,
    total: number
}
interface IRootState {
    [key: string]: any
}
let a: number
const organzationModule: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
            tree: [],  //集团树
            staff_data: [], //部门员工
            principal: "",//负责人
            staffInfo: {
                content: '',
                depart_id: a,//部门ID
                post: '',  //职务
                state: a,//状态
                page: 1,
                per_page: 10,
            },
            depart_name: '',//部门名称
            total: 0,
        }
    },
    getters: {},
    mutations: {
        // 设置tree
        SET_TREE(state, payload) {
            state.tree = [...payload]
        },
        // 设置staff
        SET_STAFF_DATA(state, payload) {
            state.staff_data = payload
        },
        // 设置负者人principal
        SET_PRINCIPAL(state, payload) {
            state.principal = payload
        },
        // 设置部门名称
        SET_DEPART_NAME(state, payload) {
            state.depart_name = payload
        },
        // 设置部门ID
        SET_DEPART_ID(state, payload) {
            state.staffInfo.depart_id = payload
        },
        // 设置页面显示数量
        SET_PER_PAGE(state, payload) {
            state.staffInfo.page_size = payload
        },
        // 设置页数
        SET_PAGE(state, payload) {
            state.staffInfo.page = payload
        },
        // 设置页数
        SET_TOTAL(state, payload) {
            state.total = payload
        }
    },
    actions: {
        // 获取集团组织架构
        GET_TREE({ commit }) {
            department_com_show2().then((res: any) => {
                if (res.data.code == 1) {
                    commit('SET_TREE', res.data.data)
                }
            })
        },
        // 获取部门下面的所有员工
        GET_STAFF({ state, commit }) {
            staff_check2(state.staffInfo).then((res: any) => {
                if (res.data.code == 1) {
                    commit('SET_STAFF_DATA', res.data.data.data)
                    commit('SET_TOTAL', res.data.data.total)
                }
            })
        }
    }
}
export default organzationModule