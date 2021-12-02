<template>
  <el-dialog v-model="ItemPanelDialogVisible" width="100%" destroy-on-close center :close-on-click-modal="false" :fullscreen="true" :before-close="closeDialod">
    <template #title>
      <span>流程设计器名称</span>
    </template>
    <div class="flow_chat">
      <el-tabs type="border-card">
        <el-tab-pane label="流程设计">
        </el-tab-pane>
        <el-tab-pane label="流程设置"></el-tab-pane>
        <el-tab-pane label="流程规则"></el-tab-pane>
        <el-tab-pane label="流程记录"></el-tab-pane>
      </el-tabs>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { computed, defineComponent, inject, nextTick, ref } from "vue";
export default defineComponent({
  components: {},
  setup() {
    const usVuex: any = inject("usVuex");
    const ItemPanelDialogVisible = ref(
      computed(() => {
        return usVuex.useState("oa_approveModule", "ItemPanelDialogVisible");
      })
    );
    // 关闭弹出框
    const closeDialod = () => {
      usVuex.useMutations("oa_approveModule", "SET_ITEMPANEL", false);
    };

    nextTick(() => {
      // console.log(12);
    });
    return {
      ItemPanelDialogVisible,
      closeDialod,
    };
  },
});
</script>

<style scoped lang="scss">
.flow_chat {
  // display: flex;
  height: calc(100vh - 103px);
}
</style>