import { Module } from "vuex";
import { post_show } from '@/api/post/post.api'
interface ICountState {
    [key: string]: any
}
interface IRootState {
    [key: string]: any
}
const postModule: Module<ICountState, IRootState> = {
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
export default postModule