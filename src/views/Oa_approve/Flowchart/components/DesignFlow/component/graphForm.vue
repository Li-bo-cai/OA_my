<template>
  <div>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" :size="formSize">
      <el-form-item label="节点名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import type { ElForm } from "element-plus";

export default defineComponent({
  setup() {
    const formSize = ref("");
    const ruleFormRef = ref<InstanceType<typeof ElForm>>();

    const ruleForm = reactive({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: "",
    });

    const rules = reactive({});

    const submitForm = (val: any) => {
      console.log(123);
    };

    return {
      rules,
      formSize,
      ruleForm,
      ruleFormRef,
      submitForm,
    };
  },
});
</script>

<style scoped lang="scss">
</style>