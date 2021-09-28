// 首页数据加载
import { defineComponent } from '@vue/runtime-dom';
import {polymerization} from '@/api/home/home.api'
// export default defineComponent({
//     setup(){
//         const homeInfo = polymerization().then((res: any)=>{
//                         console.log(res);
//                     })
//         return{
//             homeInfo
//         }
//     }
// })
export default ()=>{
    // 获取首页信息
    const homeInfo = polymerization().then((res: any)=>{
            console.log(res);
        })
    return {
        homeInfo
    }
}