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
      <el-table :data="post_tableData" :stripe="true" empty-text="暂无数据" style="width: 100%;">
        <!-- <el-table-column label="序号" min-width="100">
          <template #default="scope">
            <span>{{ (page -1) *per_page+scope.$index+1 }}</span>
          </template>
        </el-table-column> -->
        <el-table-column label="序号" type="index" width="100" />
        <el-table-column label="岗位名称" min-width="400" prop="title" />
        <el-table-column label="操作" prop="date" width="300">
          <template #default="scope">
            <div class="table_btn">
              <p @click="handleEdit(scope.row)">编辑</p>
              <p @click="handleDelete(scope.row)">删除</p>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagin_ation">
      <el-pagination background :hide-on-single-page="true" :page-sizes="[10, 15, 20, 25]" layout="total, prev, pager, next, sizes" :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, reactive } from "vue";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb.vue";
import { mapState } from "vuex";
export default defineComponent({
  components: {
    Breadcrumb,
  },
  computed: {
    ...mapState("postModule", ["post_tableData", "page", "per_page", "total"]),
  },
  setup() {
    const { proxy }: any = getCurrentInstance();
    const usVuex = proxy.usVuex;

    var post_show = reactive({
      page: 1,
      per_page: 10,
    });
    onMounted(() => {
      usVuex.useActions("postModule", "GET_POST_SHOW", post_show);
    });
    const handleEdit = (item: any) => {
      console.log(123);
    };
    const handleDelete = (item: any) => {
      console.log(123);
    };
    const handleSizeChange = () => {
      console.log(12);
    };
    const handleCurrentChange = () => {
      console.log(12);
    };

    return {
      handleEdit,
      handleDelete,
      handleSizeChange,
      handleCurrentChange,
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
  .post_content {
    margin-bottom: 50px;
    .table_btn {
      display: flex;
      p {
        font-size: 14px;
        color: #5777e7;
        margin-right: 30px;
        cursor: pointer;
      }
    }
  }
  .pagin_ation {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>