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

import SocketIO from '@/utils/io'

const app = createApp(App)


app.use(ElementPlus, { zIndex: 3000 })
app.use(SocketIO, {
    connection: process.env.VUE_APP_SOCKET_API
})
app.use(router)
app.use(store)
app.config.globalProperties.usVuex = usVuex;
app.mount('#app')
