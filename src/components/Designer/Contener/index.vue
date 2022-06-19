<template>
    <div class="contener-box">
        <Draggable v-model="sechmaData" ghost-class="ghost" chosen-class="chosenClass" animation="300" itemKey="id"
            touch-start-threshold="50" :fallback-tolerance="50" :fallback-class="true" @start="onStart" @end="onEnd"
            :group="groupB" style="height: 100%;">
            <template #item="{ element }">
                <div class="draggable-item move" :class="{ is_active: nowItem == element }" @click="getItem(element)">
                    <FormProvider :form="form">
                        <SchemaField :schema="{
                            type: 'object',
                            properties: {
                                [element.id]: element.info
                            },
                        }">
                        </SchemaField>
                    </FormProvider>
                    <div class="draggable-btn" v-show="nowItem.id == element.id">
                        <el-button type="primary" :icon="Delete" circle @click="delToolItem(element)" />
                    </div>
                </div>
            </template>
        </Draggable>
    </div>
</template>

<script lang="ts">
import { createForm } from '@formily/core'
import { defineComponent, ref, toRefs } from 'vue'
import { createSchemaField, FormProvider } from "@formily/vue";
import * as ElementPlus from "@formily/element-plus"
import Draggable from 'vuedraggable'
import { Delete } from '@element-plus/icons-vue'

const { SchemaField } = createSchemaField({
    components: {
        ...ElementPlus
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
    },
    setup(props, context) {
        // console.log(props.toolBag);
        const { sechmaData } = toRefs(props.toolBag)

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
            console.log(e);
            nowItem.value = e
        }
        // 点击删除按钮
        type Any = any
        const delToolItem = (delItem: any) => {
            (sechmaData.value as Array<Any>).forEach((item: any, index: any) => {
                if (item.id == delItem.id) {
                    (sechmaData.value as Array<Any>).splice(index, 1)
                }
            })
        }

        return {
            form: createForm(),
            groupB: {
                name: "itxst",
                put: true, //不允许拖入
                pull: ""
            },
            sechmaData,  //表单展示的值
            nowItem, //当前选中的值
            Delete,
            onStart, //拖拽开始的事件
            onEnd,   //拖拽结束的事件
            onMove,
            getItem,   //点击事件
            delToolItem,
        }
    }
})
</script>

<style scoped lang="scss">
.contener-box {
    cursor: pointer;
    user-select: none;
    padding: 5px;
    height: 100%;

    .draggable-item {
        margin-bottom: 10px;
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
    padding: 4px;
}

.chosenClass {
    border: 1px solid #ccc;
}
</style>
