<template>
  <el-container>
    <el-container>
      <el-aside>
        <Aside />
      </el-aside>
      <el-main>
        <el-scrollbar class="menu_scroll">
          <div class="outBox">
            <router-view></router-view>
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Aside from "../../components/Aside/Aside.vue";

export default defineComponent({
  components: {
    Aside,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.el-aside {
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
</style>