    
    <Form :form="form">
      <FormProvider :form="form">
        <SchemaField :schema="schema" @change="handeleChange" />
        <!-- 自定义组件 -->
        <!-- <FormConsumer>
        <template #default="{form}">
          <el-button type="primary" @click="onSubmit(form)">提交</el-button>
        </template>
        </FormConsumer> -->
        <FormButtonGroup align-form-item>
          <Submit @submit="onSubmit">提交</Submit>
        </FormButtonGroup>
      </FormProvider>
    </Form>