<template>
    <div>
        <draggable :list="sechmaDataArray" ghost-class="ghost" chosen-class="chosenClass" animation="300"
            @start="onStart" @end="onEnd" >
            <template #item="{ element }">
                <div class="draggable-item move">
                    <FormProvider :form="form">
                        <SchemaField :schema="{
                            type: 'object',
                            properties: {
                                [element.id]: element.info
                            },
                        }">
                        </SchemaField>
                    </FormProvider>
                </div>
            </template>
        </draggable>
    </div>
</template>

<script lang="ts">
import { createForm } from '@formily/core'
import { defineComponent, reactive } from 'vue'
import { createSchemaField, FormProvider } from "@formily/vue";
import * as ElementPlus from "@formily/element-plus"
import draggable from 'vuedraggable'

const { SchemaField } = createSchemaField({
    components: {
        ...ElementPlus
    },
});

export default defineComponent({
    props: {
        sechmaData: {
            type: Object,
            default: () => ({})
        }
    },
    components: {
        SchemaField,
        FormProvider,
        draggable
    },
    setup(props) {
        const sechmaDataArray = reactive(props.sechmaData as Array<any>)
        //拖拽开始的事件
        const onStart = () => {
            console.log("开始拖拽");
        };

        //拖拽结束的事件
        const onEnd = () => {
            console.log("结束拖拽");
            console.log(props);
        };

        const onMove = (e: any, originalEvent: any) => {
            //不允许停靠
            if (e.relatedContext.element.disabledPark == true) return false;
            return true;
        };

        return {
            form: createForm(),
            sechmaDataArray,
            onStart,
            onEnd,
            onMove
        }
    }
})
</script>

<style scoped lang="scss">
.draggable {
    cursor: pointer;
    user-select: none;

    .draggable-item {
        width: 100%;
    }
}

.chosenClass {
    border: 1px solid #ccc;
}
</style>
