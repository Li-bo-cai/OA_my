<template>
  <div>
    <el-table :data="tableData" style="width: 100%" highlight-current-row :header-cell-style="{'text-align':'center'}">
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作" width="440">
        <template #default="scope">
          <div class="operate-btn">
            <el-button type="primary" size="small" plain :icon="Edit" @click="edit_btn(scope.row)">编辑</el-button>
            <el-button type="warning" size="small" plain :icon="Setting" @click="design_btn(scope.row)">设计</el-button>
            <el-button type="success" size="small" plain :icon="Position" @click="realease_btn(scope.row)">发布</el-button>
            <el-button type="primary" size="small" plain :icon="View" @click="examine_btn(scope.row)">查看</el-button>
            <el-button type="danger" size="small" plain :icon="Delete" @click="delete_btn(scope.row)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    {{ItemPanelDialogVisible}}
    <FlowChartDialog v-if="ItemPanelDialogVisible" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { Edit, Setting, Position, View, Delete } from "@element-plus/icons-vue";
import FlowChartDialog from "@/views/Oa_approve/Flowchart/GraphView.vue";
import { mapState } from "vuex";
export default defineComponent({
  components: {
    FlowChartDialog,
  },
  computed: {
    ...mapState("oa_approveModule", ["ItemPanelDialogVisible"]),
  },
  setup() {
    const usVuex: any = inject("usVuex");

    const tableData = [
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄",
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄",
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄",
      },
    ];
    const edit_btn = (val: any) => {
      console.log(123);
    };
    const design_btn = (val: any) => {
      usVuex.useMutations("oa_approveModule", "SET_ITEMPANEL", true);
    };
    const realease_btn = (val: any) => {
      console.log(123);
    };
    const examine_btn = (val: any) => {
      console.log(123);
    };
    const delete_btn = (val: any) => {
      console.log(123);
    };

    return {
      Edit,
      Setting,
      Position,
      View,
      Delete,
      edit_btn,
      design_btn,
      realease_btn,
      examine_btn,
      delete_btn,
      tableData,
    };
  },
});
</script>

<style scoped lang="scss">
.operate-btn {
  // display: flex;
}
</style>