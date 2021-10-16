<template>
  <div class="post_manage_head">
    <Breadcrumb />
  </div>
  <div class="post_manage_body">
    <div class="title">
      <p class="text">重庆渝万传媒有限公司</p>
      <el-button type="primary">新增岗位</el-button>
    </div>
    <div class="post_content">
      <el-table :data="tableData" :stripe="true" empty-text="暂无数据" style="width: 100%;">
        <el-table-column label="序号" min-width="100">
          <template slots="scope">
            <!-- <span>{{ (page -1) *pageSize+scope.$index+1 }}</span> -->
          </template>
        </el-table-column>
        <el-table-column label="岗位名称" min-width="400" prop="title">
        </el-table-column>
        <el-table-column label="操作" prop="date" min-width="100">
          <template slots="scope">
            <el-button type="text" size="mini" style="color:#382AA3;margin:10px" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="mini" style="color:#382AA3;margin:10px" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb.vue";
export default defineComponent({
  components: {
    Breadcrumb,
  },

  setup() {
    const handleEdit = (item: any) => {
      console.log(123);
    };
    const handleDelete = (item: any) => {
      console.log(123);
    };

    return {
      tableData,
      handleEdit,
      handleDelete,
    };
  },
});
</script>

<style scoped lang="scss">
.post_manage_body {
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    .text {
      font-size: 18px;
      font-weight: 500;
      margin-right: 28px;
    }
  }
}
</style>