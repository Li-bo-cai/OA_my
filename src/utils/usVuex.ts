import store from '../store'
const stores:any = store

// State方法
const useState = function (ModuleName: string, mapper: string):void {
    if(mapper){
        return stores.state[ModuleName][mapper];
    }else{
        return stores.state[ModuleName]
    }
}

// Getters方法
const useGetters = function (nameModule: string, mapper: string):void {
    return stores.getters[nameModule + '/' + mapper]
}

// Mutsations方法
const useMutations = function (nameModule: string, mapper: string, payload: any):void {
    return stores.commit(`${nameModule}/${mapper}`, payload)
}

//Actions方法
const useActions = function (nameModule: string, mapper: string,payload: any):Promise<any> {
    return stores.dispatch(`${nameModule}/${mapper}`,payload)
}

export default {
    useState,
    useGetters,
    useMutations,
    useActions
};