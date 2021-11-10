<template>
  <div class="route_box">
    <!-- 左边路由盒子 -->
    <div class="left_route_box">
      <el-scrollbar class="menu_scroll">
        <el-menu text-color="#232323" :default-active="route.path" :router="true">
          <template v-for="item in Routes">
            <el-menu-item v-if="item.meta" :index="item.path" :key="item.name" @click="showSecendRoutes(item)">
              <template #title>
                <i :class="item.meta.icon"></i>
                <span>{{ item.meta.title }}</span>
              </template>
            </el-menu-item>
          </template>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 右边路由盒子 -->
    <div class="right_route_box" v-if="showRightBox">
      <div class="showBtn">
        <el-switch :inactive-text="changeText" v-model="isCollapse" @change="changeTextBtn" />
      </div>
      <el-scrollbar class="menu_scroll">
        <el-menu text-color="#232323" :default-active="route.path" :collapse="!isCollapse" @open="handleOpen" @close="handleClose" :router="true">
          <template v-for="item in SecendRoutes" :key="item.name">
            <el-menu-item v-if="item.meta" :index="item.path" :key="item.name">
              <template #title>
                <span>{{ item.meta.title }}</span>
              </template>
            </el-menu-item>
          </template>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { constantRoutes } from "@/router/constantRoutes";
import { asyncRoutes } from "@/router/asyncRoutes";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const Routes = ref<any[]>([...constantRoutes, ...asyncRoutes]); //全部路由
    var route = useRoute();
    const SecendRoutes = ref<any[]>([]);
    const showRightBox = ref<boolean>(false); //二级菜单展示

    const isCollapse = ref(true);
    const changeText = ref("关闭");
    onMounted(() => {
      Routes.value.forEach((item: any) => {
        if (item.meta && item.meta.hasChild) {
          item.children.forEach((_item: any) => {
            if (_item.name == route.name) {
              SecendRoutes.value = item.children;
              showRightBox.value = true;
            }
          });
        }
      });
    });
    // 二级路由获取
    const showSecendRoutes = (val: any) => {
      if (val.meta && val.meta.hasChild) {
        SecendRoutes.value = val.children;
        showRightBox.value = true;
      } else {
        showRightBox.value = false;
      }
    };
    // 二级路由开关
    const changeTextBtn = (val: boolean) => {
      val ? (changeText.value = "关闭") : (changeText.value = "展开");
    };
    const handleOpen = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };

    return {
      route,
      Routes,
      isCollapse,
      changeText,
      SecendRoutes,
      showRightBox,
      handleOpen,
      handleClose,
      changeTextBtn,
      showSecendRoutes,
    };
  },
});
</script>

<style scoped lang="scss">
i {
  margin-right: 20px;
}
.el-menu {
  border-right: none;
}
.route_box {
  display: flex;
}
.left_route_box {
  padding-top: 150px;
  width: 240px;
  overflow: hidden;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.right_route_box {
  max-width: 200px;
  padding-top: 30px;
  border-bottom: 1px solid #ccc;
  .showBtn {
    margin-bottom: 20px;
    padding: 10px 10px;
  }
  .el-menu-item {
    padding: 0 20px;
  }
}
.menu_scroll {
  height: calc(100vh - 180px);
}
</style>