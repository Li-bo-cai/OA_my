<template>
  <div id="box">
    <div id="drag" v-bind="'123'">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    const val = "123";
    const style = {
      width: "100px",
      height: "100px",
      background: "aqua",
      position: "absolute",
      right: "30px",
      top: 0,
    };
    const greet = (val: any) => {
      console.log(val);
    };
    return {
      val,
      style,
      greet,
    };
  },
});
</script>

<style scoped lang="scss">
.message_box {
  cursor: pointer;
}
</style>