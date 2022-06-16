<template>
  <div>

  </div>
</template>

<script setup lang="ts">
const schema = {
  type: "object",
  properties: {
    input: {
      type: "string",
      title: "输入框",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    textarea: {
      type: "string",
      title: "文本框",
      "x-decorator": "FormItem",
      "x-component": "Input.TextArea",
      "x-component-props": {
        type: "textarea",
      },
    },
  },
};

</script>

<style scoped>
</style>