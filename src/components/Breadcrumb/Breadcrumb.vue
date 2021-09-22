<template>

  <el-breadcrumb separator-class="el-icon-arrow-right" class="o-breadcrumb">
    <el-breadcrumb-item v-for="route in breadList" :key="route.path" separator="/" :to="route.path">{{ route.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>

</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const route = useRoute();
    // console.log(route);

    let breadList = ref<any>([]);
    const getBreadcrumb = () => {
      breadList.value = [];
      breadList.value = route.matched;
      console.log(111);
    };

    onMounted(() => {
      getBreadcrumb();
    });

    return {
      breadList,
    };
  },
});
</script>

<style scoped>
</style>