import { ref } from "vue";

export default () => {
    const title = ref<string>("");
    const showAddCompany = ref<boolean>(false); //展示新增公司弹窗
    const addPostRules = {
        title: [
            { required: true, message: "请输入岗位名称", trigger: "blur" },
            {
                min: 2,
                max: 10,
                message: "长度在 3 到 10 个字符",
                trigger: "blur",
            },
        ],
        group_id: [
            { required: true, message: "请选择岗位分组", trigger: "blur" },
        ],
        desc: [{ required: true, message: "请输入岗位描述", trigger: "blur" }],
        group_name: [
            { required: true, message: "请输入分组名称", trigger: "blur" },
        ],
    }

    const add_post = () => {
        title.value = "新增岗位";
        showAddCompany.value = true;
      };

    return {
        title,
        showAddCompany,
        addPostRules,
        add_post,
    }
}