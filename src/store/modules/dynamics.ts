import { Module } from "vuex";
import {  } from '@/api/post/post.api'
interface ICountState {
    [key: string]: any
}
interface IRootState {
    [key: string]: any
}
const dynamicsModule: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
        }
    },
    getters: {},
    mutations: {

    },
    actions: {

    }
}
export default dynamicsModule