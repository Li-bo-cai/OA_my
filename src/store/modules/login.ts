import { Module } from "vuex";
import { login, get_phone_code } from "@/api/user/user.api";
import router from "@/router";
interface ICountState {
    token: string
    roles: any,
    time: number
}
interface IRootState {
    [key: string]: any
}

const loginModule: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
            token: "", //token
            roles: [], //权限
            time: 60,
        }
    },
    getters: {

    },
    mutations: {
        // 设置token
        SET_TOKEN: (state, payload) => {
            state.token = payload
        },
        SET_ROLES: (state, payload) => {
            state.roles = payload
        }
    },
    actions: {
        // 获取验证码
        GET_PHONE_CODE({ state }, code_key) {
            const { key } = code_key
            get_phone_code({ key }).then((res: any) => {
                if (res.code == 1) {
                    const timer = setInterval(() => {
                        if (state.time > 1) {
                            state.time--;
                        } else {
                            clearInterval(timer);
                            state.time = 60
                        }
                    }, 1000);
                }
            })
        },
        // 用户登录跳转页面和存储token
        GET_LOGIN({ commit }, loginKey) {
            const { account, password } = loginKey
            login({ account, password }).then((res: any) => {
                if (res.data.code == 1) {
                    commit('SET_TOKEN', res.data.data.access_token)   //token 存储再vuex中
                    sessionStorage.setItem('Token', res.data.data.access_token)   //token 存储在临时存储中
                    router.push({
                        path: "/",
                    });
                }
            })
        },
        //用户登录失效，清空token并且跳转login的方法
        GET_CLEAR_TOKEN({ commit }) {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            sessionStorage.setItem('Token', '')
            location.reload()   //刷新当前页面
        }
    },
}
export default loginModule