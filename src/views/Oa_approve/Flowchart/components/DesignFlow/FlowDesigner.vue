<template>
  <div class="root">
    <!-- 左侧盒子 -->
    <div class="graph_box">

    </div>
    <!-- 右侧盒子 -->
    <div class="graph_info">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.root {
  display: flex;
  .graph_box {
    flex: 2;
    padding: 20px;
    border: 1px solid #ccc;
  }
  .graph_info {
    flex: 1;
  }
}
</style>