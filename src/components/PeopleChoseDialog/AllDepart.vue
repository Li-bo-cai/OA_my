<template>
  <div class="all-people">
    <el-scrollbar>
      <el-input v-model="search_people" placeholder="搜索人员" size="small" prefix-icon="el-icon-search" />
      <div class="check-box">
        <div class="bread-crumb-title">
          <div class="title">{{chose_status}}</div>
        </div>
        <div class="check-content">
          <el-tree ref="depart_tree" :data="organizaData" :show-checkbox="showData==1" node-key="id" :props="defaultProps" :default-expanded-keys="[1]" :accordion="true" @check="handleCheckedNodes" @node-click="handleNodeClick" />
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import data from "./data";
import { computed, defineComponent, onMounted, reactive, toRefs } from "vue";
export default defineComponent({
  props: {
    showData: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  setup(props, context) {
    const { showData } = toRefs(props);

    const param = reactive({
      showData: showData.value,
    });
    const {
      search_people,
      organizaData,
      depart_tree,
      handleCheckedNodes,
      organiza,
      handleNodeClick,
    } = data(param);

    const chose_status = computed(() => {
      if (showData.value == 1) {
        return "部门选择";
      }
      return "人员选择";
    });

    const defaultProps = {
      children: "children",
      label: "depart_name",
    };

    onMounted(() => {
      organiza();
    });

    return {
      search_people,
      organizaData,
      depart_tree,
      defaultProps,
      chose_status,
      handleCheckedNodes,
      handleNodeClick,
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
  margin-right: 10px;
}
.check-box {
  margin-top: 10px;
  .bread-crumb-title {
    margin-bottom: 10px;
    .title {
      color: #8d8d8d;
    }
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
  --el-tree-node-hover-bg-color: #d4d4d5;
  --el-tree-node-hover-background-color: #d4d4d5;
}
</style>