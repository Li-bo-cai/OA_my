<template>
  <el-dialog class="graph-dialog" :model-value="ItemPanelDialogVisible" width="100%" center :append-to-body="true"
    :close-on-click-modal="false" :fullscreen="true" :before-close="closeDialod">
    <template #title>
      <span>流程设计器名称</span>
    </template>
    <div class="flow-chat">
      <ul class="df-ac tabs-box">
        <li class="tabs-item" v-for="(item, index) in tabsItem" :key="index"
          :class="{ is_active: item.value == activeName }" @click="changeTabs(item)">
          <span>{{ item.label }}</span>
        </li>
      </ul>
      <div class="tabs-content">
        <div :class="{ is_show: activeName != 'form_edit' }">
          <FormCmpt />
        </div>
        <div :class="{ is_show: activeName != 'design_flow' }">
          <DesignFlow />
        </div>
        <div :class="{ is_show: activeName != 'design_edit' }">

        </div>
        <div :class="{ is_show: activeName != 'design_rule' }">

        </div>
        <div :class="{ is_show: activeName != 'design_log' }">

        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, defineEmits, inject, nextTick, onBeforeUnmount, ref } from "vue";
import DesignFlow from "./components/DesignFlow/index.vue";
import FormCmpt from "./components/FormCmpt/index.vue";
const usVuex: any = inject("usVuex");
interface Props {
  ItemPanelDialogVisible: boolean
}
const props = withDefaults(defineProps<Props>(), {
  ItemPanelDialogVisible: false
})
const emit = defineEmits<{
  (e: 'ItemPanelDialogVisible', value: boolean): void
}>()

const tabsItem = [
  {
    label: "表单设计",
    value: "form_edit",
  },
  {
    label: "流程设计",
    value: "design_flow",
  },
  {
    label: "流程设置",
    value: "design_edit",
  },
  {
    label: "流程规则",
    value: "design_rule",
  },
  {
    label: "流程记录",
    value: "design_log",
  },
];

const activeName = ref<string>("form_edit");
// 关闭弹出框
const closeDialod = () => {
  // 如果弹窗关闭,清空graphmodel中的值
  emit("ItemPanelDialogVisible", false);
  usVuex.useMutations("graphModule", "SET_ALL_DATA_CLEAR", "");
};

const changeTabs = (item: any) => {
  activeName.value = item.value;
};

nextTick(() => {
  // console.log(12);
});
onBeforeUnmount(() => {
  // console.log("被销毁了");
});

</script>

<style scoped lang="scss">
$light: #f5f7fa;
$secondary: #909399;
$primary: #409eff;
$border: #dcdfe6;

.flow-chat {
  height: calc(100vh - 105px);
  border: 1px solid $border;
  border-radius: 5px;
  overflow: hidden;

  .tabs-box {
    width: 100%;
    background: $light;

    // border: 1px solid $border;
    .tabs-item {
      height: 39px;
      line-height: 39px;
      padding: 0 20px;
      margin-top: -1px 0 0;
      color: $secondary;
      font-size: 14px;
      border: 1px solid $light;
      cursor: pointer;

      &:hover {
        color: $primary;
      }
    }

    .is_active {
      background: #fff;
      color: $primary;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
  }

  .tabs-content {
    padding: 15px;

    .is_show {
      visibility: hidden;
    }
  }
}

// ::v-deep .el-overlay-dialog > .el-dialog__footer {
//   padding: 0 !important;
//   // display: none !important;
// }
</style>