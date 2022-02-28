<template>
  <div class="all-people">
    <el-scrollbar>
      <el-input v-model="search_people" placeholder="搜索人员" size="small" prefix-icon="el-icon-search" />
      <div class="check-box">
        <div class="bread-crumb-title">
          <el-breadcrumb separator-icon="el-icon-arrow-right">
            <el-breadcrumb-item>homepage</el-breadcrumb-item>
            <el-breadcrumb-item>promotion</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="check-content">
          <el-checkbox class="ml20" v-model="checkedAll">全选</el-checkbox>
          {{organizaData}}
          <el-tree :data="organizaData" show-checkbox node-key="id" :props="defaultProps" />
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import data from "./data";
import { defineComponent, onMounted, ref, toRefs } from "vue";
export default defineComponent({
  props: {
    showData: {
      type: Number,
      default: 1,
    },
  },
  setup(props, context) {
    const { showData } = toRefs(props);
    const { search_people, organizaData, organiza } = data();
    const chose_status = showData;
    const defaultProps = {
      children: "children",
      label: "depart_name",
    };
    const checkedAll = ref<boolean>(false);

    onMounted(() => {
      organiza();
      // 当chose_status为1时可以获取部门基本信息
      // if (chose_status == 1) {
      // }
    });

    return {
      search_people,
      organizaData,
      defaultProps,
      chose_status,
      checkedAll,
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