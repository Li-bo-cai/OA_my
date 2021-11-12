<template>
  <div class="header_menu">
    <el-menu text-color="#232323" mode="horizontal" :default-active="route.path" :router="true">
      <template v-for="item in Routes" :key="item.name">
        <el-menu-item :index="item.path">
          <template #title>
            <i :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { asyncRoutes } from "@/router/asyncRoutes";
import { constantRoutes } from "@/router/constantRoutes";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const Routes = [...constantRoutes, ...asyncRoutes]; //全部路由
    const route = useRoute();
    console.log(route, Routes);

    return {
      Routes,
      route,
    };
  },
});
</script>

<style scoped lang="scss">
.header_menu {
  display: flex;
}
</style>