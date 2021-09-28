import { createApp, defineComponent } from "@vue/runtime-dom";
import App from './App.vue'
/**
 * 防抖  节流
*/
class ActionControl{
    timeout:any = null;
    fn:any = null;
    wait = 0;
    preActionTime = 0;
    constructor(fn: any,wait: number){
        this.fn = fn;
        this.wait = wait;
    }
    // 防抖
    $debounce():void{
        if(this.timeout) clearTimeout(this.timeout)
        this.timeout = setTimeout(this.fn,this.wait)
    }
    // 节流
    $throttle():void{
        if(this.preActionTime) this.preActionTime = new Date().getTime()
        const timeBetween = new Date().getTime() - this.preActionTime
        if(timeBetween>=this.wait){
            this.timeout = setTimeout(()=>{
                this.fn();
                this.preActionTime = 0;
            },500)
        }
    }
}

// export default ActionControl

export default defineComponent({
    setup(){
        const app = createApp(App)
        let ctime: NodeJS.Timeout | null = null;
        const debounce = (func: any,...rest: any[])=>{
            if(ctime) clearTimeout(ctime)
            const readytime =  !ctime
            ctime = setTimeout(()=>{
                ctime = null
            },500)
            if(readytime) func.apply(app.config.globalProperties,rest)
        }
        return{
            debounce
        }
    },
})