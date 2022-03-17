import { ElForm } from "element-plus";
import { computed, reactive, ref, watch } from "vue";
import store from "@/store";
import VUex from '@/utils/usVuex'

const graphStore: VUex = new VUex(store)

export default () => {

  const ruleFormRef = ref<InstanceType<typeof ElForm>>();

  const disabled: boolean = ref<any>(computed(() => {
    return graphStore.useState('graphModule', 'disabled')
  }))

  const ruleForm = reactive<any>(computed(() => {
    return graphStore.useState('graphModule', 'gForm')
  }));
  

  const rules = reactive({
    id: [{
      required: true,
      message: '请输入节点id',
      trigger: 'blur',
    }],
  });

  const changGraphNode = (formEl: InstanceType<typeof ElForm> | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        ruleForm.value.hasBeen = true
        graphStore.useMutations('graphModule', 'SET_CF_STATUS', true)
        graphStore.useMutations('graphModule','SET_GFORM',ruleForm.value)
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  };

  watch(() => ruleForm.value.type, (newVal, oldVal) => {
    if (newVal == 0) {
      return;
    }
    if(!ruleForm.value.hasBeen){
      ruleForm.value.user.type = newVal
      newVal == 1 ? ruleForm.value.changeOptType = 1 : ruleForm.value.changeOptType = 2;
    }
  });

  return {
    rules,
    ruleForm,
    ruleFormRef,
    disabled,
    changGraphNode,
  }
}