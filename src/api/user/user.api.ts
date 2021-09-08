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
export function login(params: insideLogin) {
    return axios.post('/inside/login', params)
}

/**
 * 退出登录 /inside/logout
*/
export function logout() {
    return axios.post('/inside/logout')
}