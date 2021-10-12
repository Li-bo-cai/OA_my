import { Module } from "vuex";
import {department_com_show2, staff_check2,insideCheck} from '@/api/organization/organization.api'

interface ICountState {
    tree: any,
    staff:any
}
interface IRootState {
    [key: string]: any
}
const organzationMoudle: Module<ICountState, IRootState>={
    namespaced:true,
    state(){
        return{
            tree:[],  //集团树
            staff:[], //部门员工树
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
            state.staff = [...payload]
        }
    },
    actions:{
        // 获取集团组织架构
        GET_TREE({commit}){
            department_com_show2().then((res:any)=>{
                if(res.code == 1){
                    commit('SET_TREE',res.data)
                }
            })
        },
        // 获取部门下面的所有员工
        GEt_STAFF({commit},staffInfo:insideCheck){
            staff_check2(staffInfo).then((res:any)=>{
                console.log(res);              
            })
        }
    }
}
export default organzationMoudle