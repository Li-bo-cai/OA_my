<template>
  <div class="root">
    <!-- 左侧盒子 -->
    <div class="graph_box" ref="graph_box">
      <Graph />
    </div>
    <!-- 右侧盒子 -->
    <div class=" graph_info">
      <GraphForm />
    </div>
  </div>
</template>

<script lang="ts">
import Graph from "./component/graph.vue";
import GraphForm from "./component/graphForm.vue";
import { defineComponent, inject, reactive, ref, watch } from "vue";
export default defineComponent({
  components: {
    Graph,
    GraphForm,
  },
  setup() {
    const usVuex: any = inject("usVuex");
    const graph_box = ref<HTMLDivElement | null>(null);

    return {
      graph_box,
    };
  },
});
</script>

<style scoped lang="scss">
.root {
  display: flex;
  width: 100%;
  height: 100%;
  .graph_box {
    flex: 2;
    // height: 100%;
    padding: 20px;
    border: 1px solid #ccc;
  }
  .graph_info {
    flex: 1;
    padding: 20px;
  }
}
</style>