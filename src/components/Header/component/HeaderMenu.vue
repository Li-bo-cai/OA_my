<template>
  <div class="header-menu">
    <el-menu text-color="#232323" :default-active="route.path" :router="true">
      <template v-for="item in Routes">
        <el-menu-item v-if="item.meta" :index="item.path" :key="item.name">
          <template #title>
            <i class="iconfont" :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { asyncRoutes } from "@/router/asyncRoutes";
import { constantRoutes } from "@/router/constantRoutes";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const Routes = [...constantRoutes, ...asyncRoutes]; //全部路由
    const route = useRoute();
    return {
      Routes,
      route,
    };
  },
});
</script>

<style scoped lang="scss">
.header-menu {
  .el-menu {
    display: flex;
    align-items: center;
    .el-menu-item {
      height: 30px;
      line-height: 30px;
      border-radius: 8px;
      padding-left: 0 !important;
      padding: 0 10px !important;
      &:hover {
        background: rgb(98, 168, 248);
        color: #fff !important;
        i {
          color: #fff !important;
        }
      }
    }
  }
}
</style>
