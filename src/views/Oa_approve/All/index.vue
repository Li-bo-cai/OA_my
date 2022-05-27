<template>
  <div>
    <el-input label="输入框" v-model="form.values.input"></el-input>
    {{schema}}
    <!-- <Form :form="form"> -->
    <FormProvider :form="form">
      <SchemaField :schema="schema" @change="handeleChange" />
      <!-- <FormConsumer>
        <template #default="{form}">
          <el-button type="primary" @click="onSubmit(form)">提交</el-button>
        </template>
        </FormConsumer> -->
      <FormButtonGroup align-form-item>
        <Submit @submit="onSubmit">提交</Submit>
      </FormButtonGroup>
    </FormProvider>
    <!-- </Form> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import {
  createForm,
  onFormValuesChange,
  onFormSubmit,
  onFormInit,
} from "@formily/core";
import { createSchemaField, FormProvider, FormConsumer } from "@formily/vue";
import {
  Form,
  FormItem,
  Input,
  Submit,
  FormButtonGroup,
} from "@formily/element-plus";

const { SchemaField } = createSchemaField({
  components: {
    Input,
    FormItem,
  },
});

export default defineComponent({
  components: {
    FormProvider,
    Submit,
    SchemaField,
    // Form,
    FormButtonGroup,
    // FormConsumer,
  },
  setup() {
    const form = createForm({
      initialValues: {
        input: "",
        textarea: "",
      },
      effects: () => {
        onFormInit(() => {
          // console.log(1234);
        });
        onFormValuesChange((form) => {
          //监听数据变化了
          console.log(form.getState()); //这个form 很重要 这里你才能够拿到表单的值
        });
        onFormSubmit((form) => {
          // //监听表单提交
          // console.log(form);
          // form.fields.input.title = "1234";
          // console.log(form.fields);
        });
      },
    });

    const schema = reactive({
      type: "object",
      properties: {
        input: {
          type: "string",
          title: "输入框",
          required: true,
          "x-decorator": "FormItem",
          // "x-decorator-props": {
          //   label: "输入框",
          // },
          "x-component": "Input",
          " x-validator": {},
          // "x-component-props": {
          //   placeholder: "请输入",
          // },
          // "x-editable": true,
        },
        textarea: {
          type: "string",
          title: "文本框",
          "x-decorator": "FormItem",
          // "x-decorator-props": {
          //   label: "文本框",
          // },
          "x-component": "Input.TextArea",
          "x-component-props": {
            type: "textarea",
            placeholder: "请输入",
          },
        },
      },
    });

    // setTimeout(() => {
    //   form.values.input = "你好";
    // }, 2000);

    const onSubmit = (value: any) => {
      console.log(value);
    };

    const handeleChange = () => {
      console.log(1234);
    };

    return {
      form,
      schema,
      onSubmit,
      handeleChange,
    };
  },
});
</script>

<style scoped>
</style>
