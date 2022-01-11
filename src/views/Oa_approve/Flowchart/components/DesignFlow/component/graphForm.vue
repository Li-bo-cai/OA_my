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
        <el-select v-model="ruleForm.type" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button size="mini" type="primary" @click="submitForm(ruleFormRef)">确定</el-button>
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