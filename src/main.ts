//在vue中引入createApp函数，用该函数设置项目的主入口文件为App.vue
import { createApp } from 'vue'
import App from './App.vue'
const app =createApp(App)

//全局引用自定义样式文件style.scss
import './style.scss'

//全局引用路由并应用路由
import router from './routers/index'
app.use(router)

//在views中全局注册组件并应用组件
import Component from '@/views'
app.use(Component)

//全局引入代码高亮highlight.js文件和它的样式并自定义指令
import hljs from "highlight.js"
import "highlight.js/styles/color-brewer.css"
app.directive("highlight",function(el){
    const blocks =el.querySelectorAll("pre code");
    blocks.forEach((block:any)=>{
        hljs.highlightBlock(block);
    });
});
//挂载app
app.mount('#app')
