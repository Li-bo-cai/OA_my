import { AxiosResponse } from 'axios'
import axios from '../index'

/**
 * 首页信息
 * */ 
export function polymerization():Promise<AxiosResponse<any>>{
    return axios.post('http://oms.dev.175.run/api/DataV/staff')
}
