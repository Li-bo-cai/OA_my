import { Module } from "vuex";
const URL = 'http://oms.dev.175.run/api/DataV/staff';

interface ICountState {
    [key: string]: any
}
interface IRootState {
    [key: string]: any
}
const homeMoudle: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
          
        }
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    }
}
export default homeMoudle