<template>
    <div class="config-box">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item v-for="(toolItem, index) in modifyTools" :title="toolItem.label" :name="toolItem.label"
                :key="index">
                <div>
                    <FormProvider :form="form">
                        <SchemaField :schema="toolItem.sechmaItem" />
                    </FormProvider>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from "@formily/vue";
import * as ElementPlus from "@formily/element-plus"
import modifyToolJS from "../utils/modifyTool"


const { SchemaField } = createSchemaField({
    components: {
        ...ElementPlus
    },
});

export default defineComponent({
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
    padding: 5px;
}
</style>