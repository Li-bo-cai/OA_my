import { AxiosResponse } from 'axios'
import axios from '../index'

/**
 * 员工查询
 * @url /inside/staff/check2
*/
export interface insideCheck2 {
    content?: string,
    depart_id?: number,
    post?: string,
    state?: number,
    page: number,
    per_page: number
}
export function staff_check2(params: insideCheck2): Promise<AxiosResponse<any>> {
    return axios.post('/inside/staff/check2', params)
}

/**
 * 编辑员工信息
 * @url /inside/staff/edit
*/
export interface insideStaffEdit {
    content?: string,
    depart_id?: string,
    post?: string,
    state?: string,
    page: number,
    per_page: number
}
export function staff_edit(params: insideStaffEdit): Promise<AxiosResponse<any>> {
    return axios.post('/inside/staff/edit', params)
}

/**
 * 员工个人信息
 * @url /inside/staff/self_show
*/
export function self_show(): Promise<AxiosResponse<any>> {
    return axios.get('/inside/staff/self_show')
}

/**
 * 查看员工信息
 * @url /inside/staff/other_show
*/
export interface insideOtherShow {
    id: number
}
export function other_show(params: insideOtherShow): Promise<AxiosResponse<any>> {
    return axios.post('/inside/staff/other_show', params)
}

/**
 * 获取户籍地
 * @url /inside/staff/china_address
*/
export function china_address(): Promise<AxiosResponse<any>> {
    return axios.get('/inside/staff/china_address')
}




