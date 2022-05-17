<template>
  <div>
    <FormProvider :form="form">
      <SchemaField :schema="schema"></SchemaField>
    </FormProvider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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

export default defineComponent({
  components: {
    FormProvider,
    SchemaField
  },
  setup() {


    return {
      // SchemaField,
      form,
      schema,
    };
  },
});
</script>

<style scoped>
</style>
