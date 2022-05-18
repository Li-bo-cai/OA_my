<template>
  <div>
    <el-input label="输入框" v-model="form.values.input" @change="changeForm"></el-input>
    {{ form.values }}
    <br>
    {{ schema }}
    <FormProvider :form="form" ref="formily">
      <SchemaField :schema="schema" />
      <FormButtonGroup align-form-item>
        <Submit :onSubmit="onSubmit">提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { createForm } from "@formily/core";
import { createSchemaField, FormProvider } from "@formily/vue";
import { FormItem, Input, Submit, FormButtonGroup } from "@formily/element-plus";

const { SchemaField } = createSchemaField({
  components: {
    Input,
    FormItem,
  },
});

export default defineComponent({
  components: {
    FormProvider,
    SchemaField,
    Submit,
    FormButtonGroup
  },
  setup() {
    const form = createForm()
    const formily = ref()

    onMounted(() => {
      console.log(formily);
    })

    const schema = reactive({
      type: "object",
      properties: {
        input: {
          type: "string",
          title: "输入框",
          "x-decorator": "FormItem",
          // "x-decorator-props": {
          //   label: "输入框",
          // },
          "x-component": "Input",
          "x-component-props": {
            placeholder: "请输入",
          },
          // "x-editable": true,
        },
        textarea: {
          type: "string",
          // title: "文本框",
          "x-decorator": "FormItem",
          "x-decorator-props": {
            label: "文本框",
          },
          "x-component": "Input.TextArea",
          "x-component-props": {
            type: "textarea",
            placeholder: "请输入",
          },
        },
      },
    });

    // setTimeout(() => {
    // schema.properties.input["x-decorator-props"].label = "4567";
    // }, 1000);

    // setTimeout(() => {
    //   form.values.input = "你好";
    // }, 2000);

    const changeForm = (e: any) => {
      console.log(form);
      // schema.properties.input["x-decorator-props"].label = e
      console.log(schema);
    };

    const onSubmit = (value: any) => {
      console.log(value);
    };

    return {
      form,
      formily,
      schema,
      onSubmit,
      changeForm,
    };
  },
});
</script>

<style scoped>
</style>
