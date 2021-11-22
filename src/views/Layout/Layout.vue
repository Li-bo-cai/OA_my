<template>
  <el-container>
    <el-header class="head">
      <Header />
    </el-header>
    <el-container>
      <el-aside class="menu">
        <Aside />
      </el-aside>
      <el-main>
        <el-scrollbar class="menu_scroll">
          <div id="outBox">
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
import Header from "@/components/Header/index.vue";
import Aside from "@/components/Aside/Aside.vue";
import ShortCut from "@/views/ShortCut/ShortCut.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Header,
    Aside,
    ShortCut,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.head {
  height: 50px;
  padding: 0;
  border-bottom: 1px solid #ccc;
}
.menu {
  width: auto;
  height: calc(100vh - 50px);
  padding-bottom: 40px;
  border-right: 2px solid #ccc;
}
.el-main {
  width: 100%;
  padding: 0px;
  .menu_scroll {
    height: calc(100vh - 50px);
    #outBox {
      min-width: 1000px;
      // height: calc(100vh - 60px);
      padding: 30px;
    }
  }
}
.short_cut {
  width: auto;
}
</style>