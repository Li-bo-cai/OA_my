<template>
  <div class="root">
    <!-- 左侧盒子 -->
    <div class="graph_box" ref="graph_box">
      <Graph :pWidth="pWidth" :pHeight="pHeight" />
    </div>
    <!-- 右侧盒子 -->
    <div class=" graph_info">

    </div>
  </div>
</template>

<script lang="ts">
import Graph from "./component/graph.vue";
import { defineComponent, nextTick, onMounted, ref } from "vue";

export default defineComponent({
  components: {
    Graph,
  },
  setup() {
    const graph_box = ref<HTMLDivElement | null>(null);
    let pWidth = ref<number | null>(null);
    let pHeight = ref<number | null>(null);
    // onMounted(() => {
    //   pWidth = (graph_box.value as HTMLDivElement).clientWidth;
    //   pHeight =
    //     (document.querySelector(".el-tabs__content") as HTMLDivElement)
    //       .clientHeight - 30;
    // });
    return {
      graph_box,
      pWidth,
      pHeight,
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
    height: 100%;
    padding: 20px;
    border: 1px solid #ccc;
  }
  .graph_info {
    flex: 1;
  }
}
</style>