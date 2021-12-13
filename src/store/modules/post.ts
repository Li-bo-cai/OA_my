import { Module } from "vuex";
import { group, get_role_group, insideCreateOrEdit } from '@/api/post/post.api'
interface ICountState {
    post_tableData: any[],
    post_tree: any[],
    post_options: any[],
    postInfo: insideCreateOrEdit,
    page: number,
    per_page: number,
    total: number
}
interface IRootState {
    [key: string]: any
}
let a!: number
const postModule: Module<ICountState, IRootState> = {
    namespaced: true,
    state() {
        return {
            post_tree: [], //岗位树状
            post_options: [], //岗位下拉选择
            post_tableData: [],//岗位数据
            postInfo: {
                group_id: a, //岗位分组ID
                title: '', //岗位名称
                status: 2, //岗位状态 1--岗位关闭   2--岗位开启   默认开启
                desc: '', //岗位描述
                role_id: a //岗位ID  编辑岗位传入岗位ID 
            },
            page: 1,  //默认第一页
            per_page: 10, //默认数据条数
            total: 0, //默认总条数
        }
    },
    getters: {},
    mutations: {
        //设置岗位树状
        SET_POST_TREE(state, payload) {
            state.post_tree = [...payload]
        },
        //设置岗位下拉选择
        SET_POST_OPTIONS(state, payload) {
            state.post_options = [...payload]
        },
        //设置岗位数据
        SET_POST_TABLEDATA(state, payload) {
            state.post_tableData = [...payload]
        },
        //设置默认条数
        SET_TOTAL(state, payload) {
            state.total = payload
        },
        //设置page数
        SET_PAGE(state, payload) {
            state.page = payload
        },
        //设置per_page数
        SET_PER_PAGE(state, payload) {
            state.per_page = payload
        }
    },
    actions: {
        //获取岗位下拉分组信息
        GET_POST_TREE({ commit }) {
            group().then((res: any) => {
                if (res.data.code == 1) {
                    commit('SET_POST_TREE', res.data.data)
                }
            })
        },
        // 获取岗位下拉选择
        GET_POST_OPTIONS({ commit }) {
            get_role_group().then((res: any) => {
                if (res.data.code == 1) {
                    commit('SET_POST_OPTIONS', res.data.data)
                }
            })
        },
    }
}
export default postModule