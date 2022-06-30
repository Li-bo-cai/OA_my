<template>
  <div class="all-people">
    <el-scrollbar>
      <el-input v-model="search_people" placeholder="搜索人员" size="small" prefix-icon="el-icon-search" />
      <div class="check-box">
        <div class="bread-crumb-title">
          <div class="title">{{ chose_status }}</div>
        </div>
        <div class="check-content">
          <el-tree ref="depart_tree" :data="organizaData" :show-checkbox="showData == 1" node-key="id"
            :props="defaultProps" :default-expanded-keys="[1]" :accordion="true" @check="handleCheckedNodes"
            @node-click="handleNodeClick" />
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, reactive, nextTick, onBeforeUnmount } from "vue";
import type Node from 'element-plus/es/components/tree/src/model/node'
import { ElTree } from "element-plus";
import mitt from "@/utils/mitt";
import { department_com_show2, staff_check2, insideCheck } from "@/api/organization/organization.api";
export default defineComponent({
  props: {
    showData: {
      type: Number,
      required: true,
      default: 1,
    },
    checkedData: {
      type: Array,
      default: () => [],
    }
  },
  setup(props, context) {
    type ElTreeType = InstanceType<typeof ElTree>;
    const search_people = ref<string>('')  //搜索人员
    const organizaData = ref([]);
    const depart_tree = ref<ElTreeType>()   //tree节点
    const checkedTree = ref<any>([])  //被选中的树节点


    const chose_status = computed(() => {
      if (props.showData == 1) {
        return "部门选择";
      }
      return "人员选择";
    });

    const defaultProps = {
      children: "children",
      label: "depart_name",
    };

    onMounted(() => {
      mitt.on('delete-check', deletecheck)
    })
    onBeforeUnmount(() => {
      mitt.off('delete-check', deletecheck)
    })

    // 获取架构树
    const organiza = () => {
      department_com_show2().then((res: { data: { code: number; data: never[]; }; }) => {
        if (res.data.code == 1) {
          organizaData.value = res.data.data;
          nextTick(() => {
            if (props.showData == 1) {
              (depart_tree.value as ElTreeType).setCheckedNodes(JSON.parse(JSON.stringify(props.checkedData)), true)
            }
          })
        }
      });
    };
    // 树节点选中事件
    const handleCheckedNodes = (node: Node) => {
      // console.log(node);
      if (props.showData == 1) {
        const treeArr = (depart_tree.value as ElTreeType).getCheckedNodes(true, false)
        checkedTree.value = treeArr
        mitt.emit('change-check', treeArr)
      }
    }
    // 树节点点击事件
    const handleNodeClick = (data: any, node: Node, event: any) => {
      if (props.showData == 2) {
        const param: insideCheck = {
          depart_id: data.id,
          page_size: 9999999
        }
        staff_check2(param).then((res) => {
          if (res.data.code == 1) {
            mitt.emit('people-check', res.data.data.data)
          }
        })
      }
    }
    // 监听delete-check返回后重新渲染tree
    const deletecheck = (e: any) => {
      (depart_tree.value as ElTreeType).setCheckedNodes(checkedTree.value, true)
    }


    onMounted(() => {
      organiza();
    });

    return {
      search_people,
      organizaData,
      depart_tree,
      defaultProps,
      chose_status,
      organiza,
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

  .check-content {}
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