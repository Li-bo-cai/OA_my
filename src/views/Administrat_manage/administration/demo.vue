<template>
  <div id="box">
    <div id="drag" class="drag-target1" v-drag>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    return {
      
    };
  },
});
</script>

<style scoped lang="scss">
#drag {
  position: fixed;
  left: 0;
  width: 100px;
  height: 100px;
  background: #000;
  cursor: pointer;
}
.message_box {
  cursor: pointer;
}
</style>