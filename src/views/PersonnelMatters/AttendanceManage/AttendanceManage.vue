<template>
  <div>
    <Breadcrumb />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb.vue";
export default defineComponent({
  components: {
    Breadcrumb,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>