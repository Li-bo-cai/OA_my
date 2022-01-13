import { Module } from "vuex";
import axios from 'axios'
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
            chartData: {}
        }
    },
    getters: {
    },
    mutations: {
        SET_CHART_DATA(state,payload){
            state.chartData = payload
        }
    },
    actions: {
        GET_HOME_DATA({ commit }) {
            axios.post(URL, { answer: 42 }).then(res => {
                if (res.data.code == 1) {
                    commit('SET_CHART_DATA',res.data.data)
                }
            })
        }
    }
}
export default homeMoudle