<template>
  <Form :form="form">
    <FormProvider :form="form">
      <SchemaField :schema="schema" />
      <Submit @submit="onSubmit">提交</Submit>
    </FormProvider>
    <el-input ref="input" v-model="form2.input" @input="changeInput"></el-input>
  </Form>
</template>

<script lang="ts" setup>
import {
  createForm,
  onFormValuesChange,
  onFormReact,
  onFormInputChange,
} from "@formily/core";
import { createSchemaField, FormProvider } from "@formily/vue";
import { FormItem, Input, Submit, Form } from "@formily/element-plus";
import { reactive } from "vue-demi";

const form = createForm({
  initialValues: {
    input: "20",
    input2: "",
    textarea: "15",
  },
  effects() {
    onFormReact((form) => {
      console.log(form, "实现表单响应式逻辑");
    });
    onFormInputChange((form) => {
      console.log(form, "监听字段输入");
    });
    onFormValuesChange((form) => {
      console.log(form, "表单值变化");
    });
  },
});
const form2 = reactive({
  input: "",
});
const schema = {
  type: "object",
  properties: {
    input: {
      type: "string",
      title: "输入框",
      "x-decorator": "FormItem",
      "x-decorator-props": {
        label: "输入框",
      },
      "x-component": "Input",
    },
    input2: {
      type: "string",
      title: "输入框",
      "x-decorator": "FormItem",
      "x-decorator-props": {
        label: "输入框",
      },
      "x-component": "input",
    },
    textarea: {
      type: "string",
      title: "文本框",
      "x-decorator": "FormItem",
      "x-component": "Input.TextArea",
      "x-decorator-props": {
        label: "文本框",
      },
      "x-component-props": {
        type: "textarea",
      },
    },
  },
};

form.onMount = () => {
  console.log("我加载了");
  // form.subscribe((payload) => {
  //   console.log(payload, "---------------");
  //   form.setValues({ form: payload.payload.values });
  // });
  // form.setValues({ input: "20" });
  // form.setState((state) => {
  //   console.log(12);
  // });
};

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Input,
  },
});

const changeInput = (value: any) => {
  form.setValues({ input2: value });
};

const onSubmit = (value: any) => {
  console.log(value);
};
</script>