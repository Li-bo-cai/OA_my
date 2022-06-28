import * as vue from 'vue';
import { createForm, useFieldSchema } from '@formily/vue';
import { createSchemaField, FormProvider } from "@formily/vue";
import * as ElementPlus from "@formily/element-plus"
import { effect } from 'vue';

const { SchemaField } = createSchemaField({
    components: {
        ...ElementPlus,
    },
});

export const SelfCompt = vue.defineComponent({
    setup(props) {
        const schemaRef = useFieldSchema()
        console.log(props);

        const fromRef = vue.ref(createForm())
        const schema: any = schemaRef.value;

        return () => {
            const form = fromRef.value

            // console.log(form, 1211111);
            
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