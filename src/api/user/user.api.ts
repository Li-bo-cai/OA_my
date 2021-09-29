import { AxiosResponse } from 'axios'
import axios from '../index'

/**
 * 员工登录 /inside/login
 * @param account
 * @param password
*/
export interface insideLogin {
    account: number,
    password: string
}
export function login(params:insideLogin):Promise<AxiosResponse<any>> {
    return axios.post('/inside/login', params)
}

/**
 * 获取验证码  /api/sms/get_phone_code
 * @returns 
 */
export interface insideKey{
    key:number
}
export function get_phone_code(params:insideKey):Promise<AxiosResponse<any>>{
    return axios.post('/api/sms/get_phone_code',params)
}

/**
 * 退出登录 /inside/logout
*/
export function logout():Promise<AxiosResponse<any>> {
    return axios.post('/inside/logout')
}