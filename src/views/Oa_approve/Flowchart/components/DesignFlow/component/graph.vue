<template>
  <div class="graph">
    <!-- 挂载节点 创建画布 -->
    <div id="container" ref="container"></div>
  </div>
</template>

<script lang="ts">
import { Graph, Shape } from "@antv/x6";
import graphData from "./graph";
import {
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
} from "vue";

export default defineComponent({
  setup() {
    let container = ref<HTMLDivElement | null>(null);
    const createGraphic = () => {
      return new Graph({
        panning: {
          enabled: true,
          modifiers: "shift",
        },
        container: container.value as HTMLDivElement,
        width: 800,
        height: 600,
        interacting: {
          nodeMovable: true, //是否允许节点移动
        },
        background: {
          color: "#fff", // 设置画布背景颜色
        },
        grid: {
          size: 10, // 网格大小 10px
          visible: true, // 渲染网格背景
        },
      });
    };
    let graph = reactive<any>(null);
    onMounted(() => {
      nextTick(() => {
        graph = createGraphic(); //画布被创建
        graph.fromJSON(graphData);
        graph.centerContent(); //画布居中
        graph.on("node:mouseenter", ({ node }: any) => {
          node.attr("body", {
            stroke: "orange",
            fill: "orange",
          });
        });
        graph.on("node:mouseleave", ({ node }: any) => {
          node.attr("body", {
            stroke: "#000",
            fill: "#F39C12",
          });
        });
      });
    });
    onBeforeUnmount(() => {
      graph.dispose(); //画布被销毁
    });
    return {
      container,
    };
  },
});
</script>

<style scoped lang="scss">
.graph {
  width: 100%;
  height: 100%;
  font-family: sans-serif;
  padding: 0;
  display: flex;
}
#container {
  flex: 1;
  height: 280px;
  margin-left: 8px;
  margin-right: 8px;
  box-shadow: 0 0 10px 1px #e9e9e9;
}
</style>