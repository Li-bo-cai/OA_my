<template>
    <div class="config-box">
        <el-scrollbar height="calc(100vh - 110px)">
            <el-collapse v-model="activeNames" @change="handleChange" v-if="activeSchema">
                <el-collapse-item
                    v-for="(toolItem, index) in activeSchema['x-decorator-props']['x-component-props'].info"
                    :title="toolItem.label" :name="toolItem.label" :key="index">
                    <div style="margin-right: 10px;">
                        <FormProvider :form="form">
                            <SchemaField :schema="toolItem.sechmaItem" />
                        </FormProvider>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </el-scrollbar>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive, ref, watch, watchEffect } from 'vue'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from "@formily/vue";

import * as ElementPlus from "@formily/element-plus"
// import modifyToolJS from "../utils/modifyTool"

import * as configCmpt from "../components/index"
import mitt from '@/utils/mitt';

const { SchemaField } = createSchemaField({
    components: {
        ...ElementPlus,
        ...configCmpt,
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
        },
    },
    components: {
        FormProvider,
        SchemaField,
    },
    setup() {
        const form = createForm()
        // const modifyTools = reactive(modifyToolJS)
        const activeSchema = ref()
        const activeNames = ref(['字段属性'])

        watchEffect(() => {
            // console.log(modifyTools[0].sechmaItem.properties?.id);
        })

        watch(activeSchema, (newValue) => {
            if (newValue) {
                form.setInitialValues({
                    id: newValue.name,
                    title: newValue['x-decorator-props'].title,
                })
            }
        })

        onMounted(() => {
            mitt.on('activeSchema', getActiveSchema)
        })

        onUnmounted(() => {
            mitt.off('activeSchema', getActiveSchema)
        })

        const getActiveSchema = (value: any) => {
            console.log(value);
            activeSchema.value = value
        }

        const handleChange = (val: string[]) => {
            console.log(val)
        }

        return {
            form: form,
            // modifyTools,
            activeSchema,
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