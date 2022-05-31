<template>
  <div>
    <FormProvider :form="form">
      <Form :form="form" :label-col="6" :wrapper-col="10">
        <SchemaField :schema="schema" />
        <Submit @submit="onSubmit">提交</Submit>
      </Form>
      <FormConsumer>
        <template #default="{ form }">
          <div style="white-space: pre">
            {{ JSON.stringify(form.values, null, 2) }}
          </div>
        </template>
      </FormConsumer>
    </FormProvider>
  </div>
</template>

<script lang="ts" setup>
import {
  createForm,
  onFormValuesChange,
  onFormReact,
  onFormInputChange,
} from "@formily/core";
import { createSchemaField, FormProvider, FormConsumer } from "@formily/vue";
import { FormItem, Input, Submit, Form } from "@formily/element-plus";

const form = createForm({
  validateFirst: true,
  initialValues: {
    input: "",
    input2: "",
    textarea: "",
  },
  effects() {
    onFormReact((form) => {
      console.log(form, "实现表单响应式逻辑");
    });
    onFormInputChange((form) => {
      console.log(form, "监听字段输入");
      // for (let key in form.values) {
      //   form.setValues({ [key]: form.values[key] });
      // }
    });
    onFormValuesChange((form) => {
      console.log(form, "表单值变化");
    });
  },
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
      title: "原生输入框",
      "x-decorator": "FormItem",
      "x-decorator-props": {
        label: "原生输入框",
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

// form.onMount = () => {
//   console.log("我加载了");
//   // form.subscribe((payload) => {
//   //   console.log(payload, "---------------");
//   //   form.setValues({ form: payload.payload.values });
//   // });
//   // form.setValues({ input: "20" });
//   // form.setState((state) => {
//   //   console.log(12);
//   // });
// };

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Input,
  },
});

const onSubmit = (value: any) => {
  console.log(value);
};
</script>