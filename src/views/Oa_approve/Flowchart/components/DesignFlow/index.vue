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
        <FlowDesigner />
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import FlowDesigner from "./FlowDesigner.vue";
import {
  ArrowUp,
  ArrowDown,
  Checked,
  Delete,
  Rank,
  PictureFilled,
} from "@element-plus/icons-vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    FlowDesigner,
  },
  setup() {
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
    return {
      ArrowUp,
      ArrowDown,
      Checked,
      Delete,
      Rank,
      PictureFilled,
      save_btn,
      clear_btn,
      regain_btn,
      submit_btn,
    };
  },
});
</script>

<style scoped lang="scss">
.design-flow {
  height: 100%;
  .design-scroll {
    height: calc(100vh - 161px);
  }
}
</style>