import { Module } from "vuex";
import { post_show,insidePostShow } from '@/api/post/post.api'
interface ICountState {
    post_tableData: any[],
    page:number,
    per_page:number,
    total:number
}
interface IRootState {
    [key: string]: any
}
const postModule: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
            post_tableData:[],//岗位数据
            page:1,  //默认第一页
            per_page:10, //默认数据条数
            total:0, //默认总条数
        }
    },
    getters: {},
    mutations: {
        //设置岗位数据
        SET_POST_TABLEDATA(state,payload){
            state.post_tableData = [...payload]
        },
        //设置默认条数
        SET_TOTAL(state,payload){
            state.total = payload
        },
        //设置page数
        SET_PAGE(state,payload){
            state.page = payload
        },
        //设置per_page数
        SET_PER_PAGE(state,payload){
            state.per_page = payload
        }
    },
    actions: {
        GET_POST_SHOW({commit},showData:insidePostShow){
            post_show(showData).then((res:any)=>{
                if(res.data.code == 1){
                    commit('SET_POST_TABLEDATA',res.data.data.data)
                    commit('SET_TOTAL',res.data.data.total)
                }
            })
        }
    }
}
export default postModule