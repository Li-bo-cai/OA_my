import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VUex from './utils/usVuex'
import $common from './utils/common'
export const usVuex = new VUex(store)


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'

import '@/assets/css/index.scss'
import '@/assets/font/iconfont.css'

import SocketIO from '@/utils/socket'


import DragDirective from '@/utils/drag'

const app = createApp(App)

for (const [key, component] of Object.entries(ElIcons)) {
    app.component(key, component)
}

app.use(SocketIO, {
    connection: "wss://oms.dev.175.run",
    options: {
        path: '',
        transports: ['websocket', 'post'],
        autoConnect: true,  //是否自动打开
        transportOptions: {
            polling: {
                extraHeaders: {
                    'token': sessionStorage.getItem('socketToken') || ''
                }
            }
        }
    },
})

app.use(ElementPlus, { size: "small", zIndex: 3000 })
app.use(router)
app.use(store)
app.use(DragDirective)
app.config.globalProperties.usVuex = usVuex;
app.config.globalProperties.$common = $common;
app.provide('usVuex', usVuex)
app.provide('$common', $common)
app.mount('#app')
