import { Module } from "vuex";

interface ICountState {
    socketToken: string
    [key: string]: any
}
interface IRootState {
    [key: string]: any
}

const socketModule: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
            socketToken: '',
        }
    },
    mutations: {
        SET_SOCKET_TOKEN(state, payload) {
            state.socketToken = payload
            sessionStorage.setItem('socketToken', payload)
        }
    },
    actions: {

    }
}
export default socketModule