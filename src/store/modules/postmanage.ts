import { Module } from "vuex";
import {post_show} from '@/api/postmanage/postmanage.api'
interface ICountState {
    [key: string]: any
}
interface IRootState {
    [key: string]: any
}
const posrmanageModule :Module<ICountState,IRootState>={
    namespaced:true,
    state(){
        return{

        }
    },
    getters:{},
    mutations:{},
    actions:{}
}
export default posrmanageModule