<template>
  <div>
    <div class="header">全部</div>
    <el-button type="primary" @click="dialog= true">点击我展开弹窗</el-button>
    <PeopleChoseDialog v-model:closeDialog="dialog" :ckStatus="2"></PeopleChoseDialog>
    <Demo v-model="title" v-model:name="name"></Demo>
    {{name}}
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
    const title = ref([1, 2, 3, 4, 5]);
    const name = ref("你好世界");
    const getEmit = (e: any) => {
      console.log(e);
    };
    return {
      dialog,
      title,
      name,
      getEmit,
    };
  },
});
</script>

<style scoped lange="scss">
.header {
  margin-bottom: 20px;
}
</style>