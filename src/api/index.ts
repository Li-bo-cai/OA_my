import axios from 'axios'
import Qs from 'qs'
import { ElMessageBox, ElMessage } from 'element-plus'

const header: any = null
// 创建一个axios服务
const instance = axios.create({
    baseURL: '/oa',
    timeout: 20 * 1000
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
    console.log(config);
    if (config.method === 'post') {
        config.data = Qs.stringify(config.data)
    }
    // 在发送请求之前做些什么
    return config
}, error => {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
    // 对响应数据做点什么
    console.log('res', response);
    return response;
}, (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance