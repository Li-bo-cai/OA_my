import { AxiosResponse } from 'axios'
import axios from '../index'

/**
 * 岗位展示
 * @url /inside/role/post_show
*/
export interface insidePostShow{
    page?:number,
    per_page?:number
}
export function post_show(params:insidePostShow):Promise<AxiosResponse<any>>{
    return axios.post('/inside/role/post_show',params)
}

/**
 * 岗位选择
 * @url /inside/role/depart_choose
*/
export function depart_choose():Promise<AxiosResponse<any>>{
    return axios.get('/inside/role/depart_choose')
}
/**
 * 岗位选择（员工添加处）
 * @url /inside/role/post_chose
*/
export function post_chose():Promise<AxiosResponse<any>>{
    return axios.get('/inside/role/post_chose')
}

/**
 * 创建岗位
 * @url /inside/role/post_set
*/
export interface insidePostShow{
    post:string
}
export function post_set(params:insidePostShow):Promise<AxiosResponse<any>>{
    return axios.post('/inside/role/post_set',params)
}

/**
 * 岗位编辑
 * @url /inside/role/post_delete
*/
export interface insidePostEdit{
    id:number,
    title:string
}
export function post_edit(params:insidePostEdit):Promise<AxiosResponse<any>>{
    return axios.post('/inside/role/post_edit',params)
}
/**
 * 岗位删除
 * @url /inside/role/post_delete
*/
export interface insidePostDelete{
    id:number,
}
export function post_delete(params:insidePostDelete):Promise<AxiosResponse<any>>{
    return axios.post('/inside/role/post_delete',params)
}

