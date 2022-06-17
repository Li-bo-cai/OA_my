<template>
    <div class="designer">
        <div class="left-contener">
            <ProductBox :tools="tools"></ProductBox>
        </div>
        <div class="center-contener">
            <Contener :sechmaData="sechmaData"></Contener>
        </div>
        <div class="right-contener">

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import ProductBox from './ProductBox/index.vue'
import Contener from './Contener/index.vue'
import toolBagJs from './toolBag'

export default defineComponent({
    components: {
        ProductBox,
        Contener
    },
    setup() {
        const { tools, sechmaData } = toRefs(reactive(toolBagJs))
        return {
            tools,
            sechmaData
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
    width: 45%;
    border: 1px solid #ccc;
}

.right-contener {
    width: 30%;
    border: 1px solid #ccc;
}
</style>