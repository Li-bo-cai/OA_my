import { AxiosResponse } from 'axios'
import axios from '../index'

/**
 * 首页信息
 * */ 
export function polymerization():Promise<AxiosResponse<any>>{
    return axios.get('/inside/staff/polymerization')
}