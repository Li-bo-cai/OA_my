// import store from '../store'
import { useStore } from "vuex";
// const store = useStore();

// State方法
const useState = function (moudleName: string, mapper: string):void {
    const store = useStore();
    return store.state[moudleName][mapper];
}

// Getters方法
const useGetters = function (nameModule: string, mapper: string):void {
    const store = useStore();
    return store.getters[nameModule + '/' + mapper]
}

// Mutsations方法
const useMutations = function (nameModule: string, mapper: string, payload: any):void {
    const store = useStore();
    return store.commit(`${nameModule}/${mapper}`, payload)
}

//Actions方法
const useActions = function (nameModule: string, mapper: string,payload: any):Promise<any> {
    const store = useStore();
    return store.dispatch(`${nameModule}/${mapper}`,payload)
}

export default {
    useState,
    useGetters,
    useMutations,
    useActions
};