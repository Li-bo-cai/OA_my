<template>
  <div class="graph">
    <!-- 挂载节点 创建画布 -->
    <div id="container" ref="container"></div>
  </div>
</template>

<script lang="ts">
import { Graph, Shape } from "@antv/x6";
import graphData from "./graph";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  props: ["pWidth", "pHeight"],
  setup(props) {
    console.log(props);

    onMounted(() => {
      new Graph({
        container: document.getElementById("container") as HTMLElement,
        width: 800,
        height: 600,
        background: {
          color: "#fff", // 设置画布背景颜色
        },
        grid: {
          size: 10, // 网格大小 10px
          visible: true, // 渲染网格背景
        },
      }).fromJSON(graphData);
    });
    return {};
  },
});
</script>

<style scoped lang="scss">
.graph {
  width: 100%;
  height: 100%;
}
</style>