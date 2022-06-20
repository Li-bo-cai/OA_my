import * as vue from 'vue';
const React = { createElement: vue.h, Fragment: vue.Fragment }

export const Hello = vue.defineComponent({
    setup(props) {
        return () => <el-button>你好世界</el-button>
    }
})