<template>
  <div class="checked-people">
    已选择人员
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.checked-people {
  height: 100%;
  width: 45%;
  border: 1px solid #ccc;
}
</style>