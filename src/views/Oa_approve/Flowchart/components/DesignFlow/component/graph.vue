<template>
  <div class="graph">
    <!-- <dndWrap v-if="showCmpt" /> -->
    <div className="dnd-wrap">
      <div data-type="rect" className="dnd-rect" @mousedown="startDrag">
        审批人
      </div>
      <div data-type="copy" className="dnd-rect" @mousedown="startDrag">
        抄送人
      </div>
      <div data-type="circle" className="dnd-circle" @mousedown="startDrag">
        结束
      </div>
    </div>
    <!-- 挂载节点 创建画布 -->
    <div id="container" ref="container"></div>
    <!-- 迷你地图 -->
    <div class="map" ref="minimapContainer"></div>
  </div>
</template>

<script lang="ts">
import { createGraphic } from "./graph";
import createNode from "./Node/graphCreateNode";
import { defineComponent, nextTick, onBeforeUnmount, ref } from "vue";

export default defineComponent({
  setup() {
    let startDrag = ref<any>("");
    nextTick(() => {
      const { dnd, graph } = createGraphic();

      const { nodeRect, nodeCopy, nodeCircle } = createNode(graph);

      startDrag = (e: any) => {
        const target = e.currentTarget;
        const type = target.getAttribute("data-type");
        // const node = type === "rect" ? nodeRect : nodeCircle;
        let node: any;
        if (type == "rect") {
          node = nodeRect;
        } else if (type == "copy") {
          node = nodeCopy;
        } else if (type == "circle") {
          node = nodeCircle;
        }
        dnd.start(node, e);
      };
    });
    onBeforeUnmount(() => {
      // console.log("被销毁了");
    });
    return {
      startDrag,
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
.validating {
  position: relative;
}

.validating:after {
  position: absolute;
  top: 4px;
  left: 4px;
  content: " ";
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 6px solid #873bf4;
  border-color: #873bf4 transparent #873bf4 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

.dnd-wrap {
  width: 200px;
  padding: 16px;
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
}

.dnd-rect {
  width: 100px;
  height: 40px;
  border: 2px solid #31d0c6;
  text-align: center;
  line-height: 40px;
  margin: 16px;
  cursor: move;
}

.dnd-copy {
  width: 100px;
  height: 40px;
  border: 2px solid #31d0c6;
  text-align: center;
  line-height: 40px;
  margin: 16px;
  cursor: move;
}

.dnd-circle {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 2px solid #31d0c6;
  text-align: center;
  line-height: 60px;
  margin: 16px;
  cursor: move;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>