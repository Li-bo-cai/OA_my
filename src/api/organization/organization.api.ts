import { AxiosResponse } from 'axios'
import axios from '../index'

/**
 * 获取集团组织架构 /department/com_show2
 * @param 
*/
export function department_com_show2(): Promise<AxiosResponse<any>> {
    return axios.get('/inside/department/com_show2')
}
/**
 * 检查父级节点下所有员工  /staff/check2
 * @param content 内容  工号/姓名
 * @param depart_id 部门id
 * @param post 职务
 * @param state 状态
 * @param page 页数
 * @param per_page 每页数据条数
*/
export interface insideCheck {
    content?: string,
    depart_id?: number,
    post?: string,
    state?: number,
    page?: number,
    per_page?: number
}
export function staff_check2(params: insideCheck): Promise<AxiosResponse<any>> {
    return axios.post('/inside/staff/check2', params)
}