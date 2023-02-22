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

