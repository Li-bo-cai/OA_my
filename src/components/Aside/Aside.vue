<template>
  <div class="aside_box" ref="AsideMenuDom">
    <el-scrollbar class="menu-scroll">
      <AsideMenu :Routes="Routes" />
    </el-scrollbar>
    <div class="shrink-btn" v-show="icon_btn" @click="show_shrink_btn">
      <el-icon title="点击收缩菜单栏">
        <back />
      </el-icon>
    </div>
    <div class="pop-btn" v-show="!icon_btn" @click="show_pop_btn">
      <el-icon title="点击弹出菜单栏">
        <right />
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, inject } from "vue";
import AsideMenu from "./component/AsideMenu.vue";
export default defineComponent({
  components: {
    AsideMenu,
  },
  setup() {
    const usVuex: any = inject("usVuex");

    const icon_btn = ref<boolean>(true);
    let AsideMenuDom = ref<HTMLDivElement>();

    const show_shrink_btn = () => {
      (AsideMenuDom.value as HTMLDivElement).style.width = "0";
      icon_btn.value = false;
    };
    const show_pop_btn = () => {
      (AsideMenuDom.value as HTMLDivElement).style.width = "140px";
      icon_btn.value = true;
    };

    const Routes = computed(() => {
      let item = usVuex.useState("routesMoudle", "ItemRoutes");
      if (item.meta && item.meta.hasChild) {
        return item.children;
      } else {
        return null;
      }
    });
    return {
      Routes,
      icon_btn,
      AsideMenuDom,
      show_shrink_btn,
      show_pop_btn,
    };
  },
});
</script>

<style scoped lang="scss">
.aside_box {
  height: 100%;
  position: relative;
  width: 140px;
  transition: width 1s;
}
.menu-scroll {
  height: calc(100vh - 60px);
}
.shrink-btn {
  position: absolute;
  top: 5px;
  right: 0;
  font-size: 20px;
  line-height: 20px;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
}
.pop-btn {
  position: fixed;
  top: 55px;
  left: 0;
  font-size: 20px;
  line-height: 20px;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
}
</style>