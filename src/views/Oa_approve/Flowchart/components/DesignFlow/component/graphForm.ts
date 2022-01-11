import { ElForm } from "element-plus";
import { computed, reactive, ref } from "vue";
import store from "@/store";
import VUex from '@/utils/usVuex'
import {insiseGraphForm} from '@/store/modules/graph'

const graphStore:VUex = new VUex(store)

export default () => {

    const ruleFormRef = ref<InstanceType<typeof ElForm>>();
    const disabled:boolean = ref<any>(computed(()=>{
        return graphStore.useState('graphModule','disabled')
    }))
    const ruleForm:insiseGraphForm = reactive<any>(computed(()=>{
        return graphStore.useState('graphModule','gForm')
    }));

    const rules = reactive({
        id: [
            {
              required: true,
              message: '请输入节点id',
              trigger: 'blur',
            }],
    });

    const submitForm = (val: any) => {
        console.log(123);
    };

    return {
        rules,
        ruleForm,
        ruleFormRef,
        disabled,
        submitForm,
    }
}