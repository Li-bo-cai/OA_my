import { Module } from "vuex";
import {polymerization,message_todo} from '@/api/home/home.api'
interface ICountState {
    self_message:any,
    dynamic:any,
    notice:any,
    word_file:any,
    work_todo:any,
}
interface IRootState {
    [key: string]: any
}
const homeMoudle :Module<ICountState,IRootState>={
    namespaced:true,
    state(){
        return{
            self_message:'', //个人信息
            dynamic:[],  //集团动态
            notice:'', //公司公告
            word_file:'',  //文件资源中心
            work_todo:'',  //待处理事件
        }
    },
    getters:{

    },
    mutations:{
        // 设置个人信息
        SET_SELF_MESSAGE(state,payload){
            state.self_message = payload
        },
        // 设置集团动态
        SET_DYNAMIC(state,payload){
            state.dynamic = [...payload]
        },
        // 设置公司公告
        SET_NOTICE(state,payload){
            state.notice = payload
        },
        // 设置文件资源中心
        SET_WORK_FILE(state,payload){
            state.word_file = payload
        },
        // 设置待处理事件
        SET_WORK_TODO(state,payload){
            state.work_todo = payload
        }
    },
    actions:{
        // 获取首页信息
        GET_USER_INFO({commit}){
            polymerization().then((res:any)=>{
                if(res.data.code==1){
                    commit('SET_SELF_MESSAGE',res.data.data.self_message)
                    commit('SET_DYNAMIC',res.data.data.dynamic)
                    commit('SET_NOTICE',res.data.data.notice)
                    commit('SET_WORK_FILE',res.data.data.work_file)
                    console.log(res);
                }
            })
        },
        // 获取待处理
        GET_WORK_TODO({commit}){
            message_todo().then((res:any)=>{
                console.log(res);
                if(res.data.code == 1){
                    commit('SET_WORK_TODO',res.data)
                }
            })
        }
    }
}
export default homeMoudle