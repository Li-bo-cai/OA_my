import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import '@/assets/css/element-variables.scss'
import '@/assets/css/element.scss'
import '@/assets/css/common.scss'
import '@/assets/css/index.scss'


const app = createApp(App)
app.use(ElementPlus, { zIndex: 3000 })
app.use(store)
app.use(router)
app.mount('#app')
