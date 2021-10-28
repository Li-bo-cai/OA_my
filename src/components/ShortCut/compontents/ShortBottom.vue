<template>
  <div class="short_bottom" ref="shortBottom">
    <i class="sell-a-01"></i>
    <i class="sell-a-01"></i>
    <i class="el-icon-arrow-left" v-show="clickSee" @click="show_message_title"></i>
    <i class="el-icon-arrow-right" v-show="!clickSee" @click="show_message_title"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const clickSee = ref<boolean>(true);
    const shortBottom = ref(null as HTMLDivElement | null);
    const show_message_title = () => {
      //  clickSee?
      console.log(shortBottom.value);
      // shortBottom.value.style.width = "300px";
    };
    onMounted(() => {
      // console.log(shortBottom.value);
    });
    return {
      clickSee,
      show_message_title,
      shortBottom,
    };
  },
});
</script>

<style scoped lang="scss">
.short_bottom {
  width: 76px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
}
i {
  width: 40px;
  height: 40px;
  display: inline-block;
  font-size: 20px;
  border-radius: 50%;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  margin-top: 20px;
}
</style>