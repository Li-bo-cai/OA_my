import * as vue from 'vue';
import { createForm, useField, useFieldSchema } from '@formily/vue';
import { createSchemaField, FormProvider } from "@formily/vue";
import * as ElementPlus from "@formily/element-plus"
import { onFormMount, onFormUnmount } from '@formily/core';
import mitt from "@/utils/mitt";

const { SchemaField } = createSchemaField({
    components: {
        ...ElementPlus,
    },
});

export const SelfCompt = vue.defineComponent({

    setup() {
        const schemaRef = useFieldSchema()
        const fromRef = createForm({
            effects() {
                onFormMount((form) => {
                    console.log('我挂载啦');
                    mitt.emit('onFormMount', schemaRef.value)
                })
                onFormUnmount((form) => {
                    console.log("我卸载啦");
                    mitt.emit('onFormUnmount', schemaRef.value)
                })
            },
        })

        return () => {
            const form = fromRef
            const schema: any = schemaRef.value;

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