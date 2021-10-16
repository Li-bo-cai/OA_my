import { AxiosResponse } from 'axios'
import axios from '../index'

/**
 * 岗位展示
 * @url /inside/role/post_show
*/
export interface insidePostShow{
    page:number,
    per_page:number
}
export function post_show(params:insidePostShow):Promise<AxiosResponse<any>>{
    return axios.post('/inside/role/post_show',params)
}

