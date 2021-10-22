<template>
  <el-container>
    <el-container>
      <el-aside>
        <Aside />
      </el-aside>
      <el-main>
        <router-view></router-view>
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
  padding: 36px 50px;
}
</style>