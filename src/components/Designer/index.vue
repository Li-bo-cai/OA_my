<template>
    <div class="designer">
        <div class="left-contener">
            <ProductBox :toolBag="toolBag" @changeTools="changeTools" @increasedTool="increasedTool"></ProductBox>
        </div>
        <div class="center-contener">
            <Contener :toolBag="toolBag" @activeNode="activeNode"></Contener>
        </div>
        <div class="right-contener">
            <ConfigItem :allNodeInfo="allNodeInfo" :activeNodeInfo="activeNodeInfo"></ConfigItem>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import ProductBox from './ProductBox/index.vue'
import Contener from './Contener/index.vue'
import ConfigItem from './ConfigItem/index.vue'
import toolBagJs from './toolBag'
import mitt from '@/utils/mitt'

export default defineComponent({
    components: {
        ProductBox,
        Contener,
        ConfigItem
    },
    setup() {
        const toolBag = reactive(toolBagJs)   //左侧功能按钮
        const tools = JSON.parse(JSON.stringify(toolBagJs.tools))
        type T = {
            [key: string]: any
        }
        const schemaArr = ref<Array<T | undefined>>([]);

        const allNodeInfo = ref()
        const activeNodeInfo = ref()

        const changeTools = (value: any) => {
            // 重新渲染左侧工具栏
            if (value) {
                toolBag.tools = JSON.parse(JSON.stringify(tools))
            } else {
                console.log('出错了！！！');
            }
        }

        const increasedTool = (value: any) => {
            // 拖拽结束后返回存在的表单
            // console.log(value);
        }

        const activeNode = (value: any) => {
            console.log(value);
            // allNodeInfo.value = value.allData;
            // activeNodeInfo.value = value.activData
        }

        onMounted(() => {
            mitt.on('onFormMount', (e: any) => {
                console.log(e);
                schemaArr.value.push(e)
            })
            mitt.on('onFormUnmount', (e: any) => {
                schemaArr.value = schemaArr.value.map((item: T | undefined) => {
                    if (!item) return
                    if (e.name !== item.name) {
                        return item
                    }
                })
            })
        })
        return {
            toolBag,
            allNodeInfo,
            activeNodeInfo,
            changeTools,
            increasedTool,
            activeNode
        }
    }
})
</script>

<style scoped lang="scss">
.designer {
    display: flex;
    justify-content: space-around;
    height: calc(100vh - 110px);
}

.left-contener {
    width: 20%;
    border: 1px solid #ccc;
}

.center-contener {
    width: 50%;
    border: 1px solid #ccc;
}

.right-contener {
    width: 25%;
    border: 1px solid #ccc;
}
</style>