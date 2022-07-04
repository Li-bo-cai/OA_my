<template>
    <div>
        <el-scrollbar height="calc(100vh - 110px)">
            <div class="demo-collapse">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item v-for="(tool, index) in toolBag.tools" :title="tool.label" :name="tool.label"
                        animation="300" :key="index">
                        <Draggable v-model="tool.toolItem" ghost-class="ghost" handle=".move" filter=".forbid"
                            :group="groupA" chosen-class="chosenClass" animation="300" :force-fallback="false"
                            :sort="false" itemKey="type" class="tool-box" @start="onStart" @end="onEnd">
                            <template #item="{ element }">
                                <div class="tool-item move" :data-id="element.type">
                                    <div>
                                        <el-icon>
                                            <CreditCard />
                                        </el-icon>
                                    </div>
                                    <div>{{ element.info.title }}</div>
                                </div>
                            </template>
                        </Draggable>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </el-scrollbar>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import uuid from '../utils/getUid'
import Draggable from 'vuedraggable'

export default defineComponent({
    props: {
        toolBag: {
            type: Object,
            default: () => ({})
        }
    },
    components: {
        Draggable
    },
    setup(props, context) {
        const activeNames = ref(['输入控件'])
        const draggIemtIndex = ref('')  //当前分组下标
        const draggItemData = ref('')   //当前拖拽工具

        const handleChange = (val: string[]) => {
            console.log(val)
        }

        //拖拽开始的事件
        const onStart = (e: any) => {
            console.log("开始拖拽");
            draggIemtIndex.value = e.item.dataset.id;
        };

        //拖拽结束的事件
        const onEnd = (e: any) => {
            // console.log("结束拖拽", e);
            context.emit('changeTools', true)  //通知拖拽结束，重新渲染左侧工具栏
            if (e.pullMode === 'clone') {
                context.emit('increasedTool', draggItemData.value) //通知拖拽结束，新增数据，传递数据，展示右侧选项框
            }
        };

        return {
            groupA: {
                name: "itxst",
                put: false, //不允许拖入
                pull: (data: any) => {
                    let arr = props.toolBag.tools;
                    let [a, b]: any = [...draggIemtIndex.value.split('-')];
                    draggItemData.value = arr[a - 1].toolItem[b - 1];
                    arr[a - 1].toolItem[b - 1].id = uuid(8, 16)
                    return 'clone'
                },
            },
            activeNames,
            handleChange,
            onStart,
            onEnd
        }
    }
})
</script>

<style scoped lang="scss">
.demo-collapse {
    margin: 0 5px;
    user-select: none;

    .tool-box {
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-around;
    }

    .tool-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50px;
        height: 50px;
        padding: 5px;
        margin-bottom: 5px;
        margin-right: 5px;
        border: 1px solid #ccc;
        cursor: pointer;
    }

    .tool-item:last-child {
        margin-right: 0px;
    }
}
</style>