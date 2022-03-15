<template>
  <div>
    <div>子组件{{modelValue}}</div>
    <div>子组件{{name}}</div>
    <button @click='handleEdit'>点击我是v-model传值</button>
    <button @click='handleEmit'>点击我是emit传值</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
      default: "",
    },
    modelValue: {
      type: Array,
      default: null,
    },
  },
  setup(props, context) {
    const newArr = ref(["你好世界", "我很好，谢谢"]);
    const handleEdit = () => {
      console.log("我发出了");
      context.emit("update:modelValue", newArr.value);
    };
    const handleEmit = () => {
      context.emit("update:name", "hello world");
    };
    return {
      handleEdit,
      handleEmit,
    };
  },
});
</script>

<style scoped>
</style>