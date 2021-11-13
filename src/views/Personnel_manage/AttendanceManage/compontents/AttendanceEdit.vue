<template>
  <div class="att_edit">
    <div class="search">
      <el-form ref="form" :model="formSearch" class="search">
        <el-form-item label="搜索条件">
          <el-input v-model="formSearch.name" placeholder="请输入员工姓名/工号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>重置</el-button>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="att_table">
      <el-table :data="attfixData" :stripe="true" empty-text="暂无数据" class="employee_table">
        <el-table-column label="序号" type="index" align="center" header-align="center" width="90" />
        <el-table-column label="员工工号" prop="number" min-width="100" align="center" />
        <el-table-column label="姓名" prop="name" min-width="90" align="center" />
        <el-table-column label="性别" prop="gender_text" min-width="60" align="center" />
        <el-table-column label="身份证号" prop="card" min-width="170" align="center" />
        <el-table-column label="手机号" prop="phone" min-width="130" align="center" />
        <el-table-column label="所属部门" prop="depart_name" min-width="190" align="center" />
        <el-table-column label="岗位名称" prop="role_name" width="150" align="center" />
        <el-table-column label="当前状态" prop="state_text" width="100" align="center" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState("attendceModule", ["attfixData"]),
  },
  setup() {
    const formSearch = ref({
      name: "",
    });
    return {
      formSearch,
    };
  },
});
</script>

<style scoped>
</style>