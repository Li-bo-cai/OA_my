<template>
    <div class="designer">
        <div class="left-contener">
            <ProductBox :tools="toolBag.tools" @changeTools="changeTools" @increasedTool="increasedTool"></ProductBox>
        </div>
        <div class="center-contener">
            <Contener :toolBag="toolBag" @activeNode="activeNode"></Contener>
        </div>
        <div class="right-contener">
            <ConfigItem :schemaData="toolBag.schemaData" :activeNodeInfo="activeNodeInfo">
            </ConfigItem>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, h, onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import ProductBox from './ProductBox/index.vue'
import Contener from './Contener/index.vue'
import ConfigItem from './ConfigItem/index.vue'
import toolBagJs from './toolBag'
import mitt from '@/utils/mitt'

export default defineComponent({
    components: {
        ProductBox,
        Contener,
        ConfigItem,
    },
    setup() {
        const toolBag = reactive({ ...toolBagJs })   //左侧功能按钮
        const tools = JSON.parse(JSON.stringify(toolBagJs.tools))
        type T = {
            [key: string]: any
        }
        const schemaArr = ref<any>([]);   //schema   center 数组
        const allNodeInfo = ref()
        const activeNodeInfo = ref()

        watch(schemaArr, (newValue) => {
            // mitt.emit('allSchemaArr', newValue)  //传递所有的schema数组
            if (newValue) return
            toolBag.schemaData = newValue
        }, { immediate: true, deep: true })

        onMounted(() => {
            mitt.on('onFormMount', onFormMount)
            mitt.on('onFormUnmount', onFormUnmount)
            mitt.on('updateSchemaData', updateSchemaData)
        })

        onUnmounted(() => {
            mitt.off('onFormMount', onFormMount)
            mitt.off('onFormUnmount', onFormUnmount)
            mitt.off('updateSchemaData', updateSchemaData)
        })

        const changeTools = (value: any) => {
            // 重新渲染左侧工具栏
            if (value) {
                toolBag.tools = JSON.parse(JSON.stringify(tools))
            } else {
                console.log('出错了！！！');
            }
        }

        const increasedTool = () => {
            // 拖拽结束后返回存在的表单
            // console.log(value);
        }

        const activeNode = (value: any) => {
            allNodeInfo.value = value.allData;
            activeNodeInfo.value = value.activData
            schemaArr.value.forEach((item: any) => {
                if (!item || !activeNodeInfo.value) return
                if (item.name == activeNodeInfo.value.id) {
                    // activeSchema,  //选中的节点的schema对象
                    mitt.emit('activeSchema', item.toJSON()) //设置工具属性
                }
            })
        }

        const onFormMount = (e: any) => {
            schemaArr.value.push(e);
            // console.log(schemaArr.value, 'schemaArr');
        }

        const onFormUnmount = (e: any) => {
            schemaArr.value = schemaArr.value.map((item: T | undefined) => {
                if (!item) return
                if (e.name !== item.name) {
                    return item
                }
            })
        }

        const updateSchemaData = (value: any) => {
            toolBag.schemaData = value;
        }

        return {
            toolBag,
            allNodeInfo,  //所有节点信息
            activeNodeInfo, //选中节点的信息
            changeTools,
            increasedTool,
            activeNode,
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