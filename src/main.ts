import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import usVuex from './utils/usVuex'


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
    connection: "ws://oms.dev.175.run:6699",
    options: {
        transports: ['post', 'websocket',]
    },
    // vuex: {
    //     store,
    //     mutationPrefix: "SOCKET_",
    //     actionPrefix: "SOCKET_"
    // }
})

app.use(ElementPlus, { zIndex: 3000 })
app.use(router)
app.use(store)
app.use(DragDirective)
app.config.globalProperties.usVuex = usVuex;
app.provide('usVuex', usVuex)
app.mount('#app')
