export default class VUex {
    stores: any;
    constructor(stores: any){
        this.stores = stores
    }
    // State方法
     useState(ModuleName: string, mapper: string):void {
        if(mapper){
            return this.stores.state[ModuleName][mapper];
        }else{
            return this.stores.state[ModuleName]
        }
    }
    
    // Getters方法
     useGetters(nameModule: string, mapper: string):void {
        return this.stores.getters[nameModule + '/' + mapper]
    }
    
    // Mutsations方法
     useMutations(nameModule: string, mapper: string, payload?: any):void {
        return this.stores.commit(`${nameModule}/${mapper}`, payload)
    }
    
    //Actions方法
     useActions(nameModule: string, mapper: string,payload?: any):Promise<any> {
        return this.stores.dispatch(`${nameModule}/${mapper}`,payload)
    }
}
