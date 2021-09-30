import axios from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus'

const pending:any[]=[]; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
// const CancelToken:any = axios.CancelToken

const removePending:any = (config:any,f:any)=>{
    // 获取请求的url
    const flagUrl = config.url;
    // 判断该请求是否在请求队列中
    if(pending.indexOf(flagUrl)!=-1){
        // 如果在请求中，并存在f，f即axios提供的取消函数
        if(f){
            f('取消重复请求'); //执行取消操作
        }else{
            pending.splice(pending.indexOf(flagUrl),1) //把这条记录从数组中移除
        }
    }else{
        //如果不存在在请求队列中，加入队列
        if(f){
            pending.push(flagUrl)
        }
    }
}

// 创建一个axios服务
const instance = axios.create({
    baseURL:'/api',
    timeout: 20 * 1000
})
// 添加请求拦截器
instance.interceptors.request.use( config => {
    //neverCancel  允许多个请求
    // if(!config.neverCancel){
    //     config.cancelToken = new CancelToken((c:any)=>{
    //         removePending(config,c)
    //     })
    // }
    // 在发送请求之前做些什么
    if (sessionStorage.getItem('Token')) {
        const token = sessionStorage.getItem('Token')
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
}, error => {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
    // 对响应数据做点什么
    // 移除队列中的该请求
    removePending(response.config);
    // 获取返回数据，并处理
    if(response.status == 200){
        const code = response.data.code
        if(code == 500||code==2){
            ElMessageBox.confirm('token貌似失效了，重新登录吧！', '服务器错误', {
                confirmButtonText: '重新登录',
                cancelButtonText: '取消',
                type: 'error'
              }).then(() => {
                sessionStorage.setItem('Token','')
                location.reload()
              }) 
        }
    }else{
        ElMessage({
            message: '服务器错误',
            type: 'error',
            duration: 2000
          })
    }
    return response;
}, (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance