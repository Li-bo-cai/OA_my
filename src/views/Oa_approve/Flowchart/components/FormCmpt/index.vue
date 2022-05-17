<template>
  <div>
    <div>1234</div>
    <FormProvider v-if="false" :form="form">
      <SchemaField :schema="schema" />
    </FormProvider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createForm } from "@formily/core";
import { createSchemaField, FormProvider } from "@formily/vue";
import { FormItem, Input } from "@formily/element-plus";
export default defineComponent({
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
        },
      },
    };

    const form = createForm();
    const { SchemaField } = createSchemaField({
      components: {
        FormItem,
        Input,
      },
    });
    return {
      form,
      SchemaField,
    };
  },
});
</script>

<style scoped>
</style>
