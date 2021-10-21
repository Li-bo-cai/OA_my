import { Module } from "vuex";
import { att_table_headers, insiseAttTableLog, att_table_log } from '@/api/attendance/attendance.api'
interface ICountState {
    tableHeaders: any[],
    att_tableData: any[],
    attList: insiseAttTableLog,
    list_total:number,
    attfixData:any[]
}
interface IRootState {
    [key: string]: any
}
let a: number
const attendceModule: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
            tableHeaders: [], //考勤管理列表头部
            att_tableData: [],//考勤管理列表信息
            attList: {
                search_key:"",  //员工工号或姓名
                department_id: a, //部门ID
                position_id: a, //岗位ID
                start_time: "", //开始时间 时间戳
                end_time: "",//结束时间 时间戳
                page: 1, //页码
                page_size: 15, //页面数量
            },
            list_total:1, //总条数
            attfixData:[],//考勤列表
        }
    },
    getters: {},
    mutations: {
        // 设置tableHeaders
        SET_TABLE_HEADERS(state, payload) {
            state.tableHeaders = [...payload]
        },
        //设置att_tableData
        SET_ATT_TABLEDATA(state, payload) {
            state.att_tableData = [...payload]
        },
        // 设置total
        SET_TOTAL(state,payload){
            state.list_total = payload
        }
    },
    actions: {
        // 获取考勤表头
        GET_TABLE_HEADERS({ commit }) {
            att_table_headers().then((res: any) => {
                if (res.data.code == 1) {
                    commit('SET_TABLE_HEADERS', res.data.data)
                }
            })
        },
        // 获取考勤列表
        GET_ATT_TABLEDATA({ state, commit }) {
            att_table_log(state.attList).then((res: any) => {
                if (res.data.code == 1) {
                    commit('SET_TABLE_HEADERS', res.data.data.headers)
                    commit('SET_ATT_TABLEDATA', res.data.data.logs.data)
                    commit('SET_TOTAL',res.data.data.logs.total)
                    console.log(res.data.data.logs.total);
                    
                }
            })
        }
    }
}
export default attendceModule