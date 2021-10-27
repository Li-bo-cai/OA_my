<template>
  <el-container>
    <el-container>
      <el-aside class="menu">
        <Aside />
      </el-aside>
      <el-main>
        <el-scrollbar class="menu_scroll">
          <div class="outBox">
            <router-view></router-view>
          </div>
        </el-scrollbar>
      </el-main>
      <el-aside class="short_cut">
        <ShortCut />
      </el-aside>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Aside from "@/components/Aside/Aside.vue";
import ShortCut from "@/components/ShortCut/ShortCut.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Aside,
    ShortCut,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.menu {
  width: auto;
  height: 100vh;
  border-right: 2px solid #ccc;
}
.el-main {
  width: 100%;
  padding: 0px;
  .menu_scroll {
    height: 100vh;
    .outBox {
      min-width: 1000px;
      padding: 20px;
    }
  }
}
.short_cut {
  width: auto;
  height: 100vh;
}
</style>