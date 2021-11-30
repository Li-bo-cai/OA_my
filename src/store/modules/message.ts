import { Module } from "vuex";

interface ICountState {
    [key: string]: any
}
interface IRootState {
    [key: string]: any
}

const messageModule: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
            system: ''
        }
    },
    mutations: {
        SOCKET_USER_INFO(state, payload) {
            state.system = payload;
        }
    },
    actions: {

    }
}

export default messageModule