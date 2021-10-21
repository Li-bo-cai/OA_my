import { AxiosResponse } from 'axios'
import axios from '../index'
/**
 * @url /inside/attendance/table/headers
 * 获取考情表头
*/
export function att_table_headers():Promise<AxiosResponse<any>>{
    return axios.post('/inside/attendance/table/headers')
}


/**
 * @url /inside/attendance/log
 * @param month
 * 我的考勤
*/
interface insiseAttLog{
    month?:string
}
export function att_log(params:insiseAttLog):Promise<AxiosResponse<any>>{
    return axios.post('/inside/attendance/log',params)
}
/**
 * @url /inside/attendance/table/logs
 * 考勤列表
*/
export interface insiseAttTableLog{
    search_key?:string,  //员工工号或姓名
    department_id?:number, //部门ID
    position_id?:number, //岗位ID
    start_time?:string , //开始时间 时间戳
    end_time?:string,//结束时间 时间戳
    page:number, //页码
    page_size:number //页面数量
}
export function att_table_log(params:insiseAttTableLog):Promise<AxiosResponse<any>>{
    return axios.post('/inside/attendance/table/logs',params)
}



