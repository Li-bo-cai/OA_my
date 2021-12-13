<template>
  <div class="graph">
    <!-- 挂载节点 -->
    <div id="canvasPanel" ref="canvasPanel" />
  </div>
</template>

<script lang="ts">
import G6 from "@antv/g6";
import {
  ComponentInternalInstance,
  defineComponent,
  getCurrentInstance,
  nextTick,
} from "vue";

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance;
    console.log(proxy);

    nextTick(() => {
      createGraphic();
    });

    const createGraphic = () => {
      const grid = new G6.Grid();
      const menu = new G6.Menu({
        offsetX: -20,
        offsetY: -50,
        itemTypes: ["node", "edge"],
        getContent(e) {
          const outDiv = document.createElement("div");
          outDiv.style.width = "80px";
          outDiv.style.cursor = "pointer";
          outDiv.innerHTML = '<p id="deleteNode">删除节点</p>';
          return outDiv;
        },
        handleMenuClick(target, item) {
          const { id } = target;
          // if (id) {
          //   proxy[id](item);
          // }
        },
      });
      const minimap = new G6.Minimap({
        size: [200, 100],
      });
      // const cfg = registerFactory()
    };
    // const

    return {};
  },
});
</script>

<style scoped>
</style>