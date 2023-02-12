//在vue中引入createApp函数，用该函数设置项目的主入口文件为App.vue
import { createApp } from 'vue'
import App from './App.vue'
//全局引用自定义样式文件style.scss
import './style.scss'
//全局引用路由并应用路由
import router from './routers/index'
//在views中全局注册组件并应用组件
import Component from '@/views'
//全局引入代码高亮highlight.js文件和它的样式并
import hljs from "highlight.js"
import "highlight.js/styles/color-brewer.css"


const app =createApp(App)
app.use(router)
app.use(Component)
//自定义指令
app.directive("highlight",function(el){
    const blocks =el.querySelectorAll("pre code");
    blocks.forEach((block:any)=>{
        hljs.highlightBlock(block);
    });
});
//挂载app
app.mount('#app')

/* 不需要请求接口，所以不引用
import axios from 'axios'
//设置成全局
// App.prototype.$axios = axios;
import VueAxios from 'vue-axios' */

/* 应该是代码高亮识别语言
hljs.configure({
    ignoreUnescapedHTML: true,
    languages: [
      "javascript",
      "css",
      "python",
      "html",
      "bash",
      "java",
      "sql",
      "json",
      "http",
      "go",
      "c++",
      "c#",
      "",
    ],
  }); */