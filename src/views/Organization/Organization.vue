<template>
  <div>
    <Breadcrumb />

    <Pagination />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.vue";
import Pagination from "../../components/Pagination/Pagination.vue";
export default defineComponent({
  components: {
    Breadcrumb,
    Pagination,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>