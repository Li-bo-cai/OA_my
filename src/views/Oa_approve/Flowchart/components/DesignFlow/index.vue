<template>
  <div class="design-flow">
    <el-scrollbar class="design-scroll">
      <div class="design-top-btn">
        <el-button size="small" plain :icon="ArrowUp" @click="save_btn">上一步</el-button>
        <el-button size="small" plain :icon="ArrowDown" @click="save_btn">下一步</el-button>
        <el-button size="small" plain :icon="Checked" @click="save_btn">保存</el-button>
        <el-button size="small" plain :icon="Delete" @click="clear_btn">清空</el-button>
        <el-button size="small" plain :icon="Rank" @click="regain_btn">实际尺寸</el-button>
        <el-button size="small" plain :icon="PictureFilled" @click="submit_btn">下载SVG</el-button>
      </div>
      <div class="design_conter">
        <!-- <FlowDesigner /> -->
        <div class="root">
          <!-- 左侧盒子 -->
          <div class="graph-box" ref="graph_box">
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
          </div>
          <!-- 右侧盒子 -->
          <div class=" graph-info">
            <el-scrollbar height="calc(100vh - 190px)">
              <GraphForm />
            </el-scrollbar>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowUp,
  ArrowDown,
  Checked,
  Delete,
  Rank,
  PictureFilled,
} from "@element-plus/icons-vue";
import { nextTick, onBeforeUnmount, ref } from "vue";
import GraphX6 from "@/utils/graph"; 
import graphData from "./component/Node/graphNode";
import createNode from "./component/Node/graphCreateNode";
import { graphFunc } from "./component/Func/graphFunc";
import GraphForm from "./component/graphForm.vue";
const graph_box = ref<HTMLDivElement | null>(null);
const graphCmpt = ref();

nextTick(() => {
  graphCmpt.value = new GraphX6("#container", ".map");
  graphCmpt.value.graph.fromJSON(graphData); //数据被加载
  graphCmpt.value.graph.zoom(-0.3);
  graphFunc(graphCmpt.value.graph); //调用方法
});

onBeforeUnmount(() => {
  graphCmpt.value.graph.dispose(); //画布被销毁
});

// 保存按钮
const save_btn = () => {
  console.log(123);
};
// 保存按钮
const clear_btn = () => {
  console.log(123);
};
// 保存按钮
const regain_btn = () => {
  console.log(123);
};
// 保存按钮
const submit_btn = () => {
  console.log(123);
};
// 拖动创建
const startDrag = (e: any) => {
  let { nodeRect, nodeTerm, nodeCircle } = createNode(
    graphCmpt.value.graph
  );
  let target = e.currentTarget;
  let type = target.getAttribute("data-type");
  let node: any;
  if (type == "rect") {
    node = nodeRect;
  } else if (type == "copy") {
    node = nodeTerm;
  } else if (type == "circle") {
    node = nodeCircle;
  }
  graphCmpt.value.dnd.start(node, e);
};
</script>

<style scoped lang="scss">
.design-flow {
  height: 100%;

  .design-scroll {
    height: calc(100vh - 161px);
  }
}

.root {
  display: flex;
  width: 100%;
  height: 100%;

  .graph-box {
    flex: 2;
    padding: 20px;
    border: 1px solid #ccc;
  }

  .graph-info {
    flex: 1;
    padding-left: 20px;
  }

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
}
</style>