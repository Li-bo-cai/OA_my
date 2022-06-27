import * as vue from 'vue';
import { createForm, useFieldSchema } from '@formily/vue';
import { createSchemaField, FormProvider } from "@formily/vue";
import * as ElementPlus from "@formily/element-plus"
const { SchemaField } = createSchemaField({
    components: {
        ...ElementPlus,
    },
});

export const SelfCompt = vue.defineComponent({
    setup(props) {
        const schemaRef = useFieldSchema()
        console.log(props);

        const fromRef = vue.ref(createForm({
            readOnly: true,
        }))
        return () => {
            const schema: any = schemaRef.value;
            const form = fromRef.value

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