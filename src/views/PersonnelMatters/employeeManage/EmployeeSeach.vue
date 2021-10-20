<template>
  <div class="employee_seach">
    <el-form ref="form" :model="formSearch" class="search">
      <el-form-item label="搜索条件">
        <el-input v-model="formSearch.name" placeholder="请输入员工姓名/工号"></el-input>
      </el-form-item>
      <el-form-item label="所属部门">
        <el-input v-model="formSearch.name" placeholder="请输入员工姓名/工号"></el-input>
      </el-form-item>
      <el-form-item label="岗位">
        <el-input v-model="formSearch.name" placeholder="请输入员工姓名/工号"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-input v-model="formSearch.name" placeholder="请输入员工姓名/工号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>重置</el-button>
        <el-button type="primary">筛选</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1980px) {
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 20px;
    }
  }
}
</style>