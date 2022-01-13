import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VUex from './utils/usVuex'
export const usVuex = new VUex(store)

// import Antd from 'ant-design-vue'

import ElementPlus from 'element-plus'
import '@/assets/css/element-variables.scss'
import '@/assets/css/element.scss'
import '@/assets/css/common.scss'
import '@/assets/css/index.scss'
import '@/assets/font/iconfont.css'

import SocketIO from '@/utils/socket'

import DragDirective from '@/utils/drag'

const app = createApp(App)

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

app.use(ElementPlus, { zIndex: 3000 })
app.use(router)
app.use(store)
app.use(DragDirective)
app.config.globalProperties.usVuex = usVuex;
app.provide('usVuex', usVuex)
app.mount('#app')
