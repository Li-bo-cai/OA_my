import { Module } from "vuex";
import { } from '@/api/post/post.api'
interface ICountState {
    [key: string]: any
}
interface IRootState {
    [key: string]: any
}
const shortCutModule: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
            MessagedialogVisible: false,
            PendingdialogVisible: false,
            ChatdialogVisible: false
        }
    },
    getters: {},
    mutations: {
        // 设置弹窗位置属性
        SET_STYLE(state, payload) {
            state.style = Object.assign({}, payload)
            console.log(state.style);
        },
        // 设置message弹窗
        SET_MESSAGE_DIALOG(state, payload) {
            state.MessagedialogVisible = payload
        },
        // 设置Pending弹窗
        SET_PENDING_DIALOG(state, payload) {
            state.PendingdialogVisible = payload
        },
        // 设置Chat弹窗
        SET_CHAT_DIALOG(state, payload) {
            state.ChatdialogVisible = payload
        },

    },
    actions: {

    }
}
export default shortCutModule