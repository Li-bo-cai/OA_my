<template>
    <div class="config-box">
        <el-scrollbar height="calc(100vh - 110px)">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item v-for="(toolItem, index) in modifyTools" :title="toolItem.label"
                    :name="toolItem.label" :key="index">
                    <div style="margin-right: 10px;">
                        <FormProvider :form="form">
                            <!-- <SchemaField :schema="toolItem.sechmaItem" /> -->
                            <SchemaField>
                                <SchemaObjectField name="custom" x-component="Custom"
                                    :x-component-props="{ 'schema': toolItem.sechmaItem }">
                                </SchemaObjectField>
                            </SchemaField>
                        </FormProvider>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </el-scrollbar>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider, useFieldSchema } from "@formily/vue";

import * as ElementPlus from "@formily/element-plus"
import modifyToolJS from "../utils/modifyTool"

import * as configCmpt from "../components/index"

const Custom = defineComponent({
    setup() {
        const schemaRef = useFieldSchema()
        return () => {
            const schema = schemaRef.value
            console.log(schema);
        }
    }
})


const { SchemaField, SchemaObjectField } = createSchemaField({
    components: {
        ...ElementPlus,
        ...configCmpt,
        Custom
    },
});

export default defineComponent({
    props: {
        allNodeInfo: {
            type: Object,
            default: () => ({})
        },
        activeNodeInfo: {
            type: Object,
            default: () => ({})
        }
    },
    components: {
        FormProvider,
        SchemaField
    },
    setup() {
        const modifyTools = reactive(modifyToolJS)
        const activeNames = ref(['字段属性'])
        const handleChange = (val: string[]) => {
            console.log(val)
        }

        return {
            form: createForm(),
            modifyTools,
            activeNames,
            handleChange
        }
    }
})
</script>

<style scoped lang="scss">
.config-box {
    padding: 0 5px;
    overflow: hidden;
    user-select: none;
}
</style>