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


const app = createApp(App)
app.use(ElementPlus, { zIndex: 3000 })
app.use(store)
app.use(router)
app.config.globalProperties.usVuex = usVuex;
app.mount('#app')
