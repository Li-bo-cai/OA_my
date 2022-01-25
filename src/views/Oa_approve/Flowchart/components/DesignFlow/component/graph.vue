<template>
  <div class="graph">
    <div className="dnd-wrap">
      <div data-type="rect" className="dnd-rect" @mousedown="startDrag">
        人员选择
      </div>
      <div data-type="copy" className="dnd-copy" @mousedown="startDrag">
        <span>条件分支</span>
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
import { createGraphic } from "./graphHooks";
import { defineComponent, onBeforeUnmount } from "vue";

export default defineComponent({
  setup() {
    onBeforeUnmount(() => {
      // console.log("被销毁了");
    });
    return {
      ...createGraphic(),
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
  height: calc(100vh - 235px);
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
  position: relative;
  width: 60px;
  height: 60px;
  border: 1px solid #31d0c6;
  transform: rotateZ(45deg);
  overflow: hidden;
  margin: 16px;
  cursor: move;
  span {
    display: inline-block;
    position: absolute;
    top: 20px;
    right: -5px;
    transform: rotateZ(-45deg);
  }
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