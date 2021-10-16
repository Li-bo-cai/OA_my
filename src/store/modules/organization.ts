import { Module } from "vuex";
import {department_com_show2, staff_check2,insideCheck} from '@/api/organization/organization.api'

interface ICountState {
    tree: any[],
    staff:string,
    principal:string,
    depart_id:number,
    depart_name:string,
    page:number,
    per_page:number
}
interface IRootState {
    [key: string]: any
}
const organzationModule: Module<ICountState, IRootState>={
    namespaced:true,
    state(){
        return{
            tree:[],  //集团树
            staff:"", //部门员工
            principal:"",//负责人
            depart_id:1,//部门ID
            depart_name:'',//部门名称
            page:1, //页面
            per_page:10 //页面数量
        }
    },
    getters:{

    },
    mutations:{
        // 设置tree
        SET_TREE(state,payload){
            state.tree = [...payload]
        },
        // 设置staff
        SET_STAFF(state,payload){
            state.staff = payload
        },
        // 设置负者人principal
        SET_PRINCIPAL(state,payload){
            state.principal = payload
        },
        // 设置部门ID
        SET_DEPART_ID(state,payload){
            state.depart_id = payload
        },
        // 设置部门名称
        SET_DEPART_name(state,payload){
            state.depart_name = payload
        },
        // 设置页面显示数量
        SET_PER_PAGE(state,payload){
            state.per_page = payload
        },
        // 设置页数
        SET_PAGE(state,payload){
            state.page = payload
        }
    },
    actions:{
        // 获取集团组织架构
        GET_TREE({commit}){
            department_com_show2().then((res:any)=>{
                if(res.data.code == 1){
                    commit('SET_TREE',res.data.data)
                }
            })
        },
        // 获取部门下面的所有员工
        GET_STAFF({commit},staffInfo:insideCheck){
            staff_check2(staffInfo).then((res:any)=>{
                if(res.data.code == 1){
                    commit('SET_STAFF',res.data.data)
                }             
            })
        }
    }
}
export default organzationModule