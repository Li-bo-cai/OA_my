<template>
  <el-dialog v-model="ItemPanelDialogVisible" title="Notice" width="100%" destroy-on-close center>
    <div>
      <!-- 左侧按钮 -->
      <item-panel />
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref } from "vue";
import ItemPanel from "./compontents/ItemPanel.vue";
export default defineComponent({
  components: {
    ItemPanel,
  },
  setup() {
    const usVuex: any = inject("usVuex");
    const ItemPanelDialogVisible = ref(
      computed(() => {
        return usVuex.useState("oa_approveMoudle", 'ItemPanelDialogVisible');
      })
    );
    return {
      ItemPanelDialogVisible,
    };
  },
});
</script>

<style scoped>
</style>