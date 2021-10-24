import { Module } from "vuex";
import { group, get_role_group, insideCreateOrEdit, get_role_staff, create_or_edit, delete_role, remove_staff, build_staff, show_staff } from '@/api/post/post.api'
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
            post_tableData: [],//岗位数据
            post_tree: [], //岗位树状
            post_options: [], //岗位下拉选择
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

    }
}
export default postModule