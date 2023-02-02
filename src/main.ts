import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//引用路由
import router from './routers/index'
//引入highlight.js
import hljs from "highlight.js"
import "highlight.js/styles/color-brewer.css"
const app =createApp(App)
//应用路由
app.use(router)
app.mount('#app')
//自定义指令
app.directive("highlight",function(el){
    const blocks =el.querySelectorAll("pre code");
    blocks.forEach((block:any)=>{
        hljs.highlightBlock(block);
    });
});
