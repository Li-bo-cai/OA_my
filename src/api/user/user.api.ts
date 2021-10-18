import { AxiosResponse } from 'axios'
import axios from '../index'

/**
 * 员工登录 
 * @url /inside/login
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
 * 获取验证码  
 * @url /api/sms/get_phone_code
 * @returns 
 */
export interface insideKey{
    key:number
}
export function get_phone_code(params:insideKey):Promise<AxiosResponse<any>>{
    return axios.post('/api/sms/get_phone_code',params)
}

/**
 * 退出登录 
 * @url /inside/logout
*/
export function logout():Promise<AxiosResponse<any>> {
    return axios.post('/inside/logout')
}
/**
 * 修改密码
 * @url /inside/staff/change_pwd
*/
export function lochange_pwdgout():Promise<AxiosResponse<any>> {
    return axios.get('/inside/staff/change_pwd')
}
/**
 * 修改密码
 * @url /inside/staff/change_picture
*/
interface insideChangePicture{
    staff_picture:string
}
export function change_picture(params:insideChangePicture):Promise<AxiosResponse<any>> {
    return axios.post('/inside/staff/change_picture',params)
}


