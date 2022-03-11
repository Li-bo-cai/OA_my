<template>
  <div>
    子组件{{modelValue}}
    <button @click='handleEdit'>点击</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const handleEdit = () => {
      console.log("我发出了");
      context.emit("upload:modelValue", "nihao");
    };
    return {
      handleEdit,
    };
  },
});
</script>

<style scoped>
</style>