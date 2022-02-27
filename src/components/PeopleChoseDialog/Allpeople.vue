<template>
  <div class="all-people">
    <el-scrollbar>
      <el-input v-model="input2" placeholder="搜索人员" size="small" prefix-icon="el-icon-search" />
      <div class="check-box">
        <div class="bread-crumb-title">
          <el-breadcrumb separator-icon="el-icon-arrow-right">
            <el-breadcrumb-item>homepage</el-breadcrumb-item>
            <el-breadcrumb-item>promotion</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="check-content">
          <el-checkbox class="ml30" v-model="checkedAll">全选</el-checkbox>
          <el-tree :data="data" show-checkbox node-key="id" :props="defaultProps" />
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { data } from "./data";
import { defineComponent, ref, toRefs } from "vue";

export default defineComponent({
  props: {
    showData: {
      type: Array,
      required: true,
      default: null,
    },
  },
  setup(props, context) {
    const { showData } = toRefs(props);
    const allData = showData;
    const defaultProps = {
      children: "children",
      label: "label",
    };
    const checkedAll = ref(true);
    return {
      defaultProps,
      allData,
      checkedAll,
      data,
    };
  },
});
</script>

<style scoped lang="scss">
.all-people {
  height: 50vh;
  width: 45%;
  border: 1px solid #ccc;
  padding: 10px;
  background: #d4d4d5;
  border-radius: 10px;
  overflow: hidden;
}
.check-box {
  margin-top: 10px;
  .bread-crumb-title {
  }
  .check-content {
  }
}
:deep .el-tree {
  background: none;
}
:deep .el-tree-node__expand-icon {
  color: #333;
}
:deep .is-leaf {
  opacity: 0;
}
:deep .el-tree-node__content:hover {
  background: #8d8d8d;
}
:deep .el-tree-node__content {
  background: #d4d4d5;
}
:deep .el-tree {
  --el-tree-node-hover-background-color: #d4d4d5;
}
</style>