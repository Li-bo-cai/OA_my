<template>
  <div>
    <div id="chart" ref="chart"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import hmoeFunc from "./Home";
export default defineComponent({
  setup() {
    // const chart = ref<HTMLDivElement | undefined>();

    return {
      ...hmoeFunc(),
      // chart,
    };
  },
});
</script>

<style scoped>
</style>