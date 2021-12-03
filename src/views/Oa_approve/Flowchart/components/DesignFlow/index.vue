<template>
  <div class="design_flow">
    <el-scrollbar class="design_scroll">
      <div class="design_top_btn">
        <FlowBtn />
      </div>
      <div class="design_conter">
        <FlowDesigner />
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import FlowBtn from "./FlowBtn.vue";
import FlowDesigner from "./FlowDesigner.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    FlowBtn,
    FlowDesigner,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.design_flow {
  height: 100%;
  .scroll {
    height: 100%;
  }
}
</style>