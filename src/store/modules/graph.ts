import { Module } from "vuex";

interface ICountState {
    gForm: insiseGraphForm
    disabled: boolean
    [key: string]: any
}

interface userInfo {
    type:number,//用户类型  即当前节点类型
    peoples:Array<any> //选择人员存放位置
    departs:Array<any> //选择部门存放位置
    otherInfo:any   //其他储存位置
}

export interface insiseGraphForm {
    id: string,  //节点id
    type: number, //节点类型 1 2 3 发起人 审批人 抄送人
    changeOptType?: number  //人员选择方式
    limit_timeType?: number  //审批期限 天/小时
    limit_time?: number //审批具体时长 
    more?: number   //审批人自选单人或多人 1 2
    examineModel?: number //多人审批时的签订条件 1 顺序签 2 会签 3 或签
    terminus?: number //审批终点 1最上层主管  2 发起人的第n层级
    terminus_plies?: number //发起人的第n层级
    approverisNull?: number//审批人为空时
    user?:userInfo //用户信息
    hasBeen:boolean //用户是否操作改属性
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
                type: 1,
                changeOptType: 1,
                limit_timeType: 1,
                limit_time: 0,
                more: 1,
                examineModel: 1,
                terminus: 1,
                terminus_plies: 1,
                approverisNull: 1,
                hasBeen:false,
                user:{
                    type:1,
                    peoples:[],
                    departs:[],
                    otherInfo:''
                }
            }
        }
    },
    mutations: {
        // 设置节点信息
        SET_GFORM(state, payload) {
            state.gForm = JSON.parse(JSON.stringify(payload))
        },
        // 设置禁用状态
        SET_DISABLED(state, payload) {
            state.disabled = payload
        },
        // 设置全局清空
        SET_ALL_DATA_CLEAR(state, payload) {
            state.gForm.id = ''
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