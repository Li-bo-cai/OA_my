<template>
  <div>
    <FormProvider :form="form">
      <SchemaField :schema="schema"></SchemaField>
    </FormProvider>
  </div>
</template>

<script setup lang="ts">
import { createForm } from "@formily/core";
import { createSchemaField, FormProvider } from "@formily/vue";
import { FormItem, Input } from "@formily/element-plus";

const form = createForm();
const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Input,
  },
});
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

</script>

<style scoped>
</style>
