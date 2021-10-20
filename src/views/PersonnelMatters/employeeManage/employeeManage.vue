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
        <EmployeeTable />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb.vue";
import EmployeeSeach from "./compontent/EmployeeSeach.vue";
import EmployeeTable from "./compontent/EmployeeTable.vue";
export default defineComponent({
  components: {
    Breadcrumb,
    EmployeeSeach,
    EmployeeTable,
  },
  setup() {
    return {};
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