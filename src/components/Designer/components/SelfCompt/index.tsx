import * as vue from 'vue';
import { createForm, useField, useFieldSchema } from '@formily/vue';
import { createSchemaField, FormProvider } from "@formily/vue";
import * as ElementPlus from "@formily/element-plus"
import { onFormMount, onFormUnmount } from '@formily/core';

const { SchemaField } = createSchemaField({
    components: {
        ...ElementPlus,
    },
});

export const SelfCompt = vue.defineComponent({
    setup() {
        const fromRef = createForm({
            effects(form) {
                onFormMount((form) => {
                    console.log('我挂载啦');
                })
                onFormUnmount((form) => {
                    console.log("我卸载啦", form);
                })
            },
        })
        const schemaRef = useFieldSchema()

        return () => {
            const schema: any = schemaRef.value;
            const form = fromRef
            console.log(schema.toJSON(), schema.name);
            return (
                <FormProvider form={form}>
                    <SchemaField schema={{
                        type: 'object',
                        properties: {
                            [schema['name']]: schema['x-decorator-props']
                        },
                    }}>
                    </SchemaField>
                </FormProvider>
            )
        }
    }
})