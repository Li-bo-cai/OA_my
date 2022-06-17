<template>
    <div>
        <el-scrollbar height="calc(100vh - 110px)">
            <div class="demo-collapse">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item v-for="(tool, index) in toolArray" :title="tool.label" :name="tool.label"
                        animation="300" :key="index">
                        <draggable :list="tool.toolItem" ghost-class="ghost" handle=".move" filter=".forbid"
                            chosen-class="chosenClass" animation="300" :sort="false" :itemKey="tool.label"
                            class="tool-box">
                            <template #item="{ element }">
                                <div class="tool-item move">
                                    <div>
                                        <el-icon>
                                            <CreditCard />
                                        </el-icon>
                                    </div>
                                    <div>{{ element.name }}</div>
                                </div>
                            </template>
                        </draggable>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </el-scrollbar>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import draggable from 'vuedraggable'

export default defineComponent({
    props: {
        tools: {
            type: Array,
            default: () => []
        }
    },
    components: {
        draggable
    },
    setup(props) {
        const toolArray = reactive(props.tools as Array<any>)

        const activeNames = ref(['输入控件'])

        const handleChange = (val: string[]) => {
            console.log(val)
        }

        return {
            toolArray,
            activeNames,
            handleChange,
        }
    }
})
</script>

<style scoped lang="scss">
.demo-collapse {
    margin: 0 5px;

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
        user-select: none
    }

    .tool-item:last-child {
        margin-right: 0px;
    }
}
</style>