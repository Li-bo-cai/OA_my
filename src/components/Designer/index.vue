<template>
    <div class="designer">
        <div class="left-contener">
            <ProductBox :toolBag="toolBag" @changeTools="changeTools" @increasedTool="increasedTool"></ProductBox>
        </div>
        <div class="center-contener">
            <Contener :toolBag="toolBag"></Contener>
        </div>
        <div class="right-contener">
            <ConfigItem></ConfigItem>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import ProductBox from './ProductBox/index.vue'
import Contener from './Contener/index.vue'
import ConfigItem from './ConfigItem/index.vue'
import toolBagJs from './toolBag'

export default defineComponent({
    components: {
        ProductBox,
        Contener,
        ConfigItem
    },
    setup() {
        const toolBag = reactive(toolBagJs)
        const tools = JSON.parse(JSON.stringify(toolBagJs.tools))

        const changeTools = (value: any) => {
            // 重新渲染左侧工具栏
            if (value) {
                toolBag.tools = JSON.parse(JSON.stringify(tools))
            } else {
                console.log('出错了！！！');
            }
        }

        const increasedTool = (value: any) => {
            console.log(value);

        }

        return {
            toolBag,
            changeTools,
            increasedTool
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