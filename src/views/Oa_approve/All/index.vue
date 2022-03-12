<template>
  <div>
    <div class="header">全部</div>
    <el-button type="primary" @click="dialog= true">点击我展开弹窗</el-button>
    <PeopleChoseDialog :ckStatus="2" :dialog="dialog" @closeDialog="myModealHide"></PeopleChoseDialog>
  </div>
</template>

<script lang="ts">
import PeopleChoseDialog from "@/components/PeopleChoseDialog/index.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    PeopleChoseDialog,
  },
  setup() {
    const dialog = ref<boolean>(false);
    const myModealHide = (e: any) => {
      dialog.value = e;
    };
    return {
      dialog,
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