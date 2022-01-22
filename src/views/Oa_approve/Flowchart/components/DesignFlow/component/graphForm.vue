<template>
  <div class="form">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" size="" :disabled="disabled">
      <el-form-item label="节点Id" prop="id">
        <el-input size="mini" v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="节点名称" prop="name">
        <el-input size="mini" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="节点类型" prop="type">
        <el-select v-model="ruleForm.type" placeholder="人员默认为审批人">
          <el-option label="发起人" :value="1"></el-option>
          <el-option label="审批人" :value="2"></el-option>
          <el-option label="抄送人" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button size="mini" type="primary" @click="changGraphNode(ruleFormRef)">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import graphForm from "./graphForm";
export default defineComponent({
  setup() {
    return {
      ...graphForm(),
    };
  },
});
</script>

<style scoped lang="scss">
.form {
  // height: 600px;
}
</style>