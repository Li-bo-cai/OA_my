<template>
  <div class="root">
    <!-- 左侧盒子 -->
    <div class="graph_box" ref="graph_box">
      <Graph />
    </div>
    <!-- 右侧盒子 -->
    <div class=" graph_info">

    </div>
  </div>
</template>

<script lang="ts">
import Graph from "./component/graph.vue";
import { defineComponent, reactive, ref, watch } from "vue";

export default defineComponent({
  components: {
    Graph,
  },
  setup() {
    interface insiseGview {
      gWidth: number;
      gHeight: number;
    }
    const graph_box = ref<HTMLDivElement | null>(null);
    let a!: number;
    let gView: insiseGview = reactive({
      gWidth: a,
      gHeight: a,
    });
    watch(
      gView,
      (newVal, oldVal) => {
        console.log(newVal);
      },
      {
        deep: true,
        immediate: true, //立即执行
      }
    );
    watch(graph_box, () => {
      gView.gWidth = (graph_box.value as HTMLDivElement).clientWidth;
      gView.gHeight =
        (document.querySelector(".el-tabs__content") as HTMLDivElement)
          .clientHeight - 30;
    });
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
    height: 100%;
    padding: 20px;
    border: 1px solid #ccc;
  }
  .graph_info {
    flex: 1;
  }
}
</style>