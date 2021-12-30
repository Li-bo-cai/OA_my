<template>
  <div class="graph">
    <dndWrap />
    <!-- 挂载节点 创建画布 -->
    <div id="container" ref="container"></div>
    <!-- 迷你地图 -->
    <div class="map" ref="minimapContainer"></div>
  </div>
</template>

<script lang="ts">
import { createGraphic } from "./graph";
// import dndWrap from "./dndWrap.vue";
import { defineAsyncComponent, defineComponent, nextTick, reactive } from "vue";

export default defineComponent({
  components: {
    dndWrap: defineAsyncComponent(() => import("./dndWrap.vue")),
    // dndWrap,
  },
  setup() {

    nextTick(() => {
      // graph = createGraphic(); //画布被创建
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