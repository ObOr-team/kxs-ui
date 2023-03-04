<div align="center">
  <img src="./docs/public/logo/logo-blue.png" width="100"/>
  <h1 style="border-bottom:0">
    <p>kxs-ui组件库</p>
    <p style="font-size:20px">一套适合开发者使用的轻量级UI组件库，完美支持vue3</p>
  </h1>
</div>
<br/>



官网主页: [kxs-ui使用文档](https://kxs.cmds.run/)
***
### 快速使用
```
npm install  kxs-ui --save
cnpm install  kxs-ui --save
```
### 引入
```
import { createApp } from 'vue'
import App from '@/App.vue'
import kxs from 'kxs-ui'
import '../node_modules/kxs-ui/style.css'

const app = createApp(App)
app.use(kxs)
app.mount('#app')
```

### 文件结构
```bash
├─.vscode
├─components #封装的组件及其全局样式
├─docs #文档站
│  ├─.vitepress
│  │  ├─cache
│  │  │  └─deps
│  │  ├─i18n
│  │  │  └─sidebars
│  │  └─theme
│  ├─api
│  ├─components #组件页面
│  ├─feedback #反馈页面
│  ├─guide #指引页面
│  ├─mdshow
│  └─public
│      ├─imgs
│      └─logo
├─kx-ui
├─node_modules
```
