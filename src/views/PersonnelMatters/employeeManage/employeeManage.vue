<template>
  <div>
    <div class="employee_header">
      <Breadcrumb />
    </div>
    <div class="employee_body">
      <!-- 操作部分 -->
      <div class="operate">
        <p class="title">员工管理</p>
        <el-button type="primary">新增员工</el-button>
        <el-button>导入数据</el-button>
        <el-button>导出数据</el-button>
      </div>
      <!-- 搜索部分 -->
      <div class="search_box">
        <EmployeeSeach />
      </div>
      <!-- 表格部分 -->
      <div class="table_box">
        <el-table :data="employee_tableData" :stripe="true" empty-text="暂无数据">
          <el-table-column label="序号" type="index" width="100" />
          <el-table-column label="员工工号" prop="number" min-width="100" align="center" />
          <el-table-column label="姓名" prop="name" min-width="126" align="center" />
          <el-table-column label="性别" prop="gender_text" min-width="60" align="center" />
          <el-table-column label="身份证号" prop="card" min-width="170" align="center" />
          <el-table-column label="手机号" prop="phone" min-width="140" align="center" />
          <el-table-column label="所属部门" prop="depart_name" min-width="200" align="center" />
          <el-table-column label="岗位名称" prop="role_name" width="180" align="center" />
          <el-table-column label="当前状态" prop="state_text" width="100" align="center" />
          <el-table-column label="操作" min-width="240" align="center">
            <template #default="scope">
              <div class="table_btn">
                <p @click="handleEdit(scope.row)">编辑</p>
                <p @click="handleSee(scope.row)">查看</p>
                <p @click="handleMachine(scope.row)">录入考情机</p>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb.vue";
import EmployeeSeach from "./EmployeeSeach.vue";
export default defineComponent({
  components: {
    Breadcrumb,
    EmployeeSeach,
  },
  setup() {
    const formSearch = ref({
      name: "",
    });
    const employee_tableData = ref([]);
    return {
      formSearch,
      employee_tableData,
    };
  },
});
</script>

<style scoped lang="scss">
.employee_body {
  .operate {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    .title {
      min-width: 72px;
      font-size: 18px;
      font-weight: 500;
      margin-right: 30px;
    }
    .el-button {
      margin-right: 50px;
    }
  }
}
</style>