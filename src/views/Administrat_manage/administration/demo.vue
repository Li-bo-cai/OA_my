<template>
  <div id="box">
    <div id="drag" v-drag="greet" :style="style">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export const vm = defineComponent({
  setup() {
    const el = "#box";
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
      vm.val = val;
    };

    return {
      el,
      val,
      style,
      greet,
    };
  },
});
</script>

<style scoped lang="scss">
#box {
  width: 100%;
  height: 100%;
}
#drag {
  cursor: pointer;
}
.message_box {
  cursor: pointer;
}
</style>