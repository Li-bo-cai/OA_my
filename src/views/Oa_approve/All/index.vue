<template>
  <div>
    <Designer :schema="schema"></Designer>
  </div>
</template>

<script setup lang="ts">
import Designer from '@/components/Designer'
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