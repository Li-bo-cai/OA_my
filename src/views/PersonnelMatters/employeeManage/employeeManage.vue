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
      <el-form ref="form" :model="formSearch">
        <div class="search">
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
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb.vue";
export default defineComponent({
  components: {
    Breadcrumb,
  },
  setup() {
    const formSearch = ref({});
    return {
      formSearch,
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
  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1980px) {
      flex-wrap: wrap;
      .el-form-item{
        margin-bottom: 20px;
      }
    }
  }
}
</style>