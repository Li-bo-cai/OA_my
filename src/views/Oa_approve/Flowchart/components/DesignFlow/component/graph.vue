<template>
  <div class="graph">
    <!-- 挂载节点 创建画布 -->
    <div id="container" ref="container"></div>
    <div class="map" ref="minimapContainer"></div>
  </div>
</template>

<script lang="ts">
import graphData from "./Node/graphNode";
import { createGraphic } from "./graph";
import graphFunc from "./Func/graphFunc";
import {
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
} from "vue";

export default defineComponent({
  setup() {
    let graph = reactive<any>(null);
    onMounted(() => {
      nextTick(() => {
        graph = createGraphic(); //画布被创建
        graph.fromJSON(graphData);
        graphFunc(graph); //调用方法
      });
    });
    onBeforeUnmount(() => {
      graph.dispose(); //画布被销毁
    });
    return {};
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
  position: relative;
}
#container {
  flex: 1;
  height: 280px;
  margin-left: 8px;
  margin-right: 8px;
  box-shadow: 0 0 10px 1px #e9e9e9;
}
.map {
  position: absolute;
  right: 10px;
  bottom: 0;
  z-index: 9;
}
</style>