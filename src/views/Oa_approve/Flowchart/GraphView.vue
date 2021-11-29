<template>
  <el-dialog v-model="ItemPanelDialogVisible" width="100%" destroy-on-close center :close-on-click-modal="false" :fullscreen="true" :before-close="closeDialod">
    <template #title>
      <span>流程设计器名称</span>
    </template>
    <div class="flow_chat">
      <!-- 左侧按钮 -->
      <ItemPanel />
      <!-- 挂载节点 -->
      <div id="canvasPanel" ref="canvasPanel"></div>
      <!-- 配置面板 -->
      <ConfigurePanel />
    </div>
  </el-dialog>
</template>

<script lang="ts">
import ItemPanel from "./compontents/ItemPanel.vue";
import ConfigurePanel from "./compontents/ConfigurePanel.vue";
import { computed, defineComponent, inject, ref } from "vue";
export default defineComponent({
  components: {
    ItemPanel,
    ConfigurePanel,
  },
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
    return {
      ItemPanelDialogVisible,
      closeDialod,
    };
  },
});
</script>

<style scoped lang="scss">
.flow_chat {
  display: flex;
  height: calc(100vh - 103px) ;
}
</style>