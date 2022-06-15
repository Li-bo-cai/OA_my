<template>
  <div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {
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
    return {
      schema,
    };
  },
});
</script>

<style scoped>
</style>