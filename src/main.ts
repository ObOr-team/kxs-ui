import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
//引用路由
import router from './routers/index'
const app =createApp(App)
//应用路由
app.use(router)
app.mount('#app')
