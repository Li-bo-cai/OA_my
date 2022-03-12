<template>
  <div>
    <div class="header">全部</div>
    <el-button type="primary" @click="dialog= true">点击我展开弹窗</el-button>
    <PeopleChoseDialog :dialog="dialog" @closeDialog="myModealHide"></PeopleChoseDialog>
    <Demo v-model="title"></Demo>
  </div>
</template>

<script lang="ts">
import PeopleChoseDialog from "@/components/PeopleChoseDialog/index.vue";
import Demo from "./Demo.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    PeopleChoseDialog,
    Demo,
  },
  setup() {
    const dialog = ref<boolean>(false);
    const title = ref("hello");
    const myModealHide = (e: any) => {
      dialog.value = e;
    };
    return {
      dialog,
      title,
      myModealHide,
    };
  },
});
</script>

<style scoped lange="scss">
.header {
  margin-bottom: 20px;
}
</style>