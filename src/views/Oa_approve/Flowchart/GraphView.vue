<template>
  <el-dialog class="graph-dialog" :model-value="ItemPanelDialogVisible" width="100%" center :append-to-body="true" :close-on-click-modal="false" :fullscreen="true" :before-close="closeDialod">
    <template #title>
      <span>流程设计器名称</span>
    </template>
    <div class="flow-chat">
      <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane label="流程设计" name="design_flow">
          <DesignFlow />
        </el-tab-pane>
        <el-tab-pane label="流程设置" name="design_edit"></el-tab-pane>
        <el-tab-pane label="流程规则" name="design_rule"></el-tab-pane>
        <el-tab-pane label="流程记录" name="design_log"></el-tab-pane>
      </el-tabs>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, inject, nextTick, onBeforeUnmount, ref } from "vue";
import DesignFlow from "./components/DesignFlow/index.vue";
export default defineComponent({
  components: {
    DesignFlow,
  },
  props: {
    ItemPanelDialogVisible: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  setup(props, context) {
    const usVuex: any = inject("usVuex");

    const activeName = ref<string>("design_flow");
    // 关闭弹出框
    const closeDialod = () => {
      // 如果弹窗关闭,清空graphmodel中的值
      context.emit("update:ItemPanelDialogVisible", false);
      usVuex.useMutations("graphModule", "SET_ALL_DATA_CLEAR", "");
    };

    nextTick(() => {
      // console.log(12);
    });
    onBeforeUnmount(() => {
      // console.log("被销毁了");
    });
    return {
      // ItemPanelDialogVisible,
      activeName,
      closeDialod,
    };
  },
});
</script>

<style scoped lang="scss">
.flow-chat {
  // display: flex;
  height: calc(100vh - 105px);
  .el-tabs {
    height: 100%;
  }
  .el-tab-pane {
    padding: 0;
  }
}
::v-deep .el-overlay-dialog > .el-dialog__footer {
  padding: 0 !important;
  // display: none !important;
}
</style>