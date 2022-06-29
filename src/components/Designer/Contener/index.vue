<template>
    <div class="contener-box">
        <el-scrollbar height="calc(100vh - 110px)">
            <FormProvider :form="form">
                <Draggable v-model="schemaData" ghost-class="ghost" chosen-class="chosenClass" animation="300"
                    itemKey="id" touch-start-threshold="50" :fallback-tolerance="50" :fallback-class="true"
                    @start="onStart" @end="onEnd" :group="groupB" style="height: calc(100vh - 120px);">
                    <template #item="{ element }">
                        <div class="draggable-item move" :class="{ is_active: nowItem.id == element.id }"
                            @click="getItem(element)">
                            <!-- <SchemaField :schema="{
                                type: 'object',
                                properties: {
                                    [element.id]: element.info
                                },
                            }">
                            </SchemaField> -->
                            <SchemaField :schema="{
                                type: 'object',
                                properties: {
                                    [element.id]: {
                                        'x-decorator': 'SelfCompt',
                                        'x-decorator-props': element.info
                                    }
                                },
                            }">
                            </SchemaField>
                            <div class="draggable-btn" v-show="nowItem.id == element.id">
                                <el-button type="primary" :icon="Delete" circle @click.stop="delToolItem(element)" />
                            </div>
                        </div>
                    </template>
                </Draggable>
            </FormProvider>
        </el-scrollbar>
    </div>
</template>

<script lang="ts">
import { createForm, Form } from '@formily/core'
import { defineComponent, watch, ref, toRefs, computed } from 'vue'
import Draggable from 'vuedraggable'
import { createSchemaField, FormProvider } from "@formily/vue";
import * as ElementPlus from "@formily/element-plus"
import { SelfCompt } from '../components/index'
import { Delete } from '@element-plus/icons-vue';

const { SchemaField } = createSchemaField({
    components: {
        ...ElementPlus,
        SelfCompt
    },
});

export default defineComponent({
    props: {
        toolBag: {
            type: Object,
            default: () => ({})
        }
    },
    components: {
        SchemaField,
        FormProvider,
        Draggable,
        ...ElementPlus
    },
    setup(props, context) {
        const { schemaData } = toRefs(props.toolBag)

        const formRef = ref()

        watch(schemaData, (newValue, oldValue) => {
            formRef.value = createForm({
                readOnly: true,
            })
        }, { immediate: true })


        const form = computed(() => {
            return formRef.value
        }).value

        const nowItem = ref({
            id: ''
        })

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

        // 点击事件
        const getItem = (e: any) => {
            nowItem.value = e;
            console.log(form, '点击事件form');
            console.log(e, '点击事件e');
            context.emit('activeNode', { allData: form.fields, activData: e })
        }
        // 点击删除按钮
        type Any = any
        const delToolItem = (delItem: any) => {
            (schemaData.value as Array<Any>).forEach((item: any, index: any) => {
                if (item.id == delItem.id) {
                    (schemaData.value as Array<Any>).splice(index, 1)
                }
            })
        }
        const onSubmit = (value: any) => {
            console.log(form);
        };

        return {
            form: form,
            groupB: {
                name: "itxst",
                put: true, //不允许拖入
                pull: ""
            },
            schemaData,  //表单展示的值
            nowItem, //当前选中的值
            Delete,
            onStart, //拖拽开始的事件
            onEnd,   //拖拽结束的事件
            onMove,
            getItem,   //点击事件
            delToolItem,
            onSubmit
        }
    }
})
</script>

<style scoped lang="scss">
.contener-box {
    cursor: pointer;
    user-select: none;
    padding: 5px 5px 0 5px;
    height: 100%;

    .draggable-item {
        margin-bottom: 8px;
        padding: 5px;

        &:hover {
            border: 1px solid #409eff;
            padding: 4px;
        }

        .draggable-btn {
            display: flex;
            flex-direction: row-reverse;
        }
    }
}

.is_active {
    border: 1px solid #409eff;
    padding: 4px !important;
}

.chosenClass {
    border: 1px solid #ccc;
}
</style>
