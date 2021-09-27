<template>
  <div v-if="!route.meta.hasChild" class="title_bread_only">
    <span>{{ route.meta.title }}</span>
  </div>

  <div v-if="route.meta.hasChild" class="title_bread">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="o-breadcrumb">
      <el-breadcrumb-item v-for="route in breadList" :key="route.path" separator="/" :to="route.path">{{ route.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div v-if="title=='backhome'" class="back_to_home" @click="back_home">
      <span>返回首页</span>
    </div>
    <div v-if="title=='pageup'" class="back_to_home" @click="page_up">
      <span>返回上一页</span>
    </div>
  </div>

</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    // console.log(route);

    let breadList = ref<any>([]);
    const getBreadcrumb = () => {
      breadList.value = [];
      breadList.value = route.matched;
    };

    const back_home = () => {
      router.push("/");
    };
    const page_up = () => {
      router.go(-1);
    };

    onMounted(() => {
      getBreadcrumb();
    });

    return {
      route,
      breadList,
      back_home,
      page_up,
    };
  },
});
</script>

<style scoped lang="scss">
.title_bread_only {
  padding-bottom: 20px;
  border-bottom: 1px solid #edeef2;
  margin-bottom: 30px;
  span {
    font-size: 18px;
    color: #303133;
    font-weight: bold;
  }
}
.title_bread {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #edeef2;
  margin-bottom: 30px;
}
.el-breadcrumb {
  font-size: 18px;
}
.back_to_home {
  span {
    display: inline-block;
    width: 102px;
    height: 32px;
    line-height: 32px;
    margin-left: 50px;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
  }
}
</style>