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
import { defineComponent, onMounted, onUnmounted, ref, toRef, watch, } from 'vue'
import { createForm, onFormInitialValuesChange, onFormInputChange, onFormValuesChange } from '@formily/core'
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
        schemaData: {
            type: Array,
            default: () => ([])
        },
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
    setup(props, context) {
        const schemaData: any = toRef(props, 'schemaData')

        const form = ref()
        const activeSchema = ref()
        const activeNames = ref(['字段属性'])
        const allSchemaarr = ref([])

        watch(activeSchema, (newValue) => {
            if (newValue) {
                console.log(newValue, schemaData.value, 88787);
                form.value = createForm({
                    effects() {
                        onFormInputChange((form) => {
                            if (!schemaData.value) return
                            schemaData.value.forEach((item: any) => {
                                if (item.id == newValue.name) {
                                    Object.assign(item.info, { ...form.values })
                                }
                            })
                            mitt.emit('updateSchemaData', schemaData.value)
                        })
                    }
                })
                form.value.setInitialValues({
                    id: newValue.name,
                    ...newValue['x-decorator-props']
                })
            }
        })

        onMounted(() => {
            mitt.on('activeSchema', getActiveSchema)
            mitt.on('allSchemaArr', getAllSchemaArr)
        })

        onUnmounted(() => {
            console.log('我卸载了');

            mitt.off('activeSchema', getActiveSchema)
            mitt.off('allSchemaArr', getAllSchemaArr)
        })

        const getActiveSchema = (value: any) => {
            activeSchema.value = value
        }

        const getAllSchemaArr = (value: any) => {
            allSchemaarr.value = value
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