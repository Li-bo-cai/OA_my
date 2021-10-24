import { AxiosResponse } from 'axios'
import axios from '../index'

/**
 * 岗位展示 下拉菜单
 * @url /inside/group
*/
export function group(): Promise<AxiosResponse<any>> {
    return axios.post('/inside/group')
}

/**
 * 岗位选择
 * @url /inside/group/get_role_group
*/
export function get_role_group(): Promise<AxiosResponse<any>> {
    return axios.post('/inside/group/get_role_group')
}

/**
 * 获取岗位下的员工
 * @url /inside/new_role/get_role_staff
*/
export function get_role_staff(params: number): Promise<AxiosResponse<any>> {
    return axios.post('/inside/new_role/get_role_staff', params)
}

/**
 * 岗位创建或编辑
 * @url /inside/new_role/create_or_edit
*/
export interface insideCreateOrEdit {
    group_id: number, //岗位分组ID
    title: string, //岗位名称  
    status: number, //岗位状态 1--岗位关闭   2--岗位开启   默认开启
    desc: string, //岗位描述
    role_id?: number //岗位ID  编辑岗位传入岗位ID 
}
export function create_or_edit(params: insideCreateOrEdit): Promise<AxiosResponse<any>> {
    return axios.post('/inside/new_role/create_or_edit', params)
}

/**
 * 岗位删除
 * @url /inside/new_role/delete_role
*/
export function delete_role(params: number): Promise<AxiosResponse<any>> {
    return axios.post('/inside/new_role/delete_role', params)
}


/**
 * 从岗位移除员工(包括批量移除)
 * @url /inside/new_role/remove_staff
 */
export interface insideRemoveStaff {
    role_id: number,  //岗位id
    staff_ids: number[] | number, //单个移除 staff_ids  int   批量一次 staff_ids 数组
}
export function remove_staff(params: insideRemoveStaff): Promise<AxiosResponse<any>> {
    return axios.post('/inside/new_role/remove_staff', params)
}

/**
 * 添加员工到岗位
 * @url /inside/new_role/build_staff
 */
export function build_staff(params: insideRemoveStaff): Promise<AxiosResponse<any>> {
    return axios.post('/inside/new_role/build_staff', params)
}

/** 
 * 岗位添加成员列表
 * @url /inside/new_role/show_staff
*/
interface insideShowStaff {
    role_id: number, //岗位ID
    depart_id: number,//部门ID
    keyword: string, //搜索关键词
}
export function show_staff(params: insideShowStaff): Promise<AxiosResponse<any>> {
    return axios.post('/inside/new_role/show_staff', params)
}