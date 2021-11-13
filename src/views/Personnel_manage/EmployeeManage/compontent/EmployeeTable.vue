<template>
  <div class="employee_table_box">
    <el-table :data="employee_tableData" :stripe="true" empty-text="暂无数据" class="employee_table">
      <el-table-column label="序号" type="index" align="center" header-align="center" width="90" />
      <el-table-column label="员工工号" prop="number" min-width="100" align="center" />
      <el-table-column label="姓名" prop="name" min-width="90" align="center" />
      <el-table-column label="性别" prop="gender_text" min-width="60" align="center" />
      <el-table-column label="身份证号" prop="card" min-width="170" align="center" />
      <el-table-column label="手机号" prop="phone" min-width="130" align="center" />
      <el-table-column label="所属部门" prop="depart_name" min-width="190" align="center" />
      <el-table-column label="岗位名称" prop="role_name" width="150" align="center" />
      <el-table-column label="当前状态" prop="state_text" width="100" align="center" />
      <el-table-column label="操作" width="240" align="center">
        <template #default="scope">
          <div class="table_btn">
            <p @click="handleEdit(scope.row)">编辑</p>
            <p @click="handleSee(scope.row)">查看</p>
            <p @click="handleMachine(scope.row)">录入考情机</p>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagin_ation">
      <el-pagination background :hide-on-single-page="true" :current-page="staffInfo.page" :page-sizes="[10, 15, 20, 25]" layout="total, prev, pager, next, sizes" :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState("employeeModule", ["employee_tableData", "total", "staffInfo"]),
  },
  setup() {
    const { proxy }: any = getCurrentInstance();
    const usVuex = proxy.usVuex;
    onMounted(() => {
      usVuex.useActions("employeeModule", "GET_STAFF_CHECK");
    });
    // 改变页面数量
    const handleSizeChange = (num: number) => {
      usVuex.useMutations("employeeModule", "SET_PAGE", 1);
      usVuex.useMutations("employeeModule", "SET_PER_PAGE", num);
      usVuex.useActions("employeeModule", "GET_STAFF_CHECK");
    };
    // 改变页数
    const handleCurrentChange = (num: number) => {
      usVuex.useMutations("employeeModule", "SET_PAGE", num);
      usVuex.useActions("employeeModule", "GET_STAFF_CHECK");
    };
    // 编辑
    const handleEdit = (item: any) => {
      console.log(123);
    };
    // 查看
    const handleSee = (item: any) => {
      console.log(123);
    };
    // 录入考情机
    const handleMachine = (item: any) => {
      console.log(123);
    };
    return {
      handleSizeChange,
      handleCurrentChange,
      handleEdit,
      handleSee,
      handleMachine,
    };
  },
});
</script>

<style scoped lang="scss">
.employee_table {
  margin-bottom: 30px;
}
.table_btn {
  display: flex;
  justify-content: center;
  p {
    font-size: 14px;
    color: #5777e7;
    margin-right: 30px;
    cursor: pointer;
  }
  p:last-child {
    margin: 0;
  }
}
.pagin_ation {
  display: flex;
  flex-direction: row-reverse;
}
</style>