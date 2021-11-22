<template>
  <div id="mountNode">

  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import G6 from "@antv/g6";
export default defineComponent({
  setup() {
    const data = {
      // 点集
      nodes: [
        {
          id: "node1", // String，该节点存在则必须，节点的唯一标识
          x: 100, // Number，可选，节点位置的 x 值
          y: 200, // Number，可选，节点位置的 y 值
        },
        {
          id: "node2", // String，该节点存在则必须，节点的唯一标识
          x: 300, // Number，可选，节点位置的 x 值
          y: 200, // Number，可选，节点位置的 y 值
        },
      ],
      // 边集
      edges: [
        {
          source: "node1", // String，必须，起始点 id
          target: "node2", // String，必须，目标点 id
        },
      ],
    };
    nextTick(() => {
      const graph = new G6.Graph({
        container: "mountNode",
        width: 800,
        height: 500,
        fitView: false, //设置是否将图适配到画布中
        fitViewPadding: 10, //画布上四周的留白宽度
      });
      graph.data(data); // 读取 Step 2 中的数据源到图上
      graph.render(); // 渲染图
    });
    return {};
  },
});
</script>

<style scoped lang="scss">
</style>