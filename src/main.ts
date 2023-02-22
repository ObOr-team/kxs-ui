//在vue中引入createApp函数，用该函数设置项目的主入口文件为App.vue
import { createApp } from 'vue'
import App from './App.vue'
//全局引用自定义样式文件style.scss
import './style.scss'
//全局引用路由并应用路由
import KxUI from "./components"
const app =createApp(App)
app.use(KxUI)
//挂载app
app.mount('#app')

