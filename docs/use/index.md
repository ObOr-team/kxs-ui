# 安装使用

## 安装

推荐使用`npm`的方式安装，也可选择`cpm`或`yarn`进行安装。

```bash
npm install kx-ui
cnpm install  kx-ui --save
yarn add kxx-ui
```

## 使用

```ts
import { createApp } from "vue";
import App from "@/App.vue";
import kxUi from "kx-ui";
import "../node_modules/mzl-ui/dist/style.css";
const app = createApp(App);
app.use(kxUi);
app.mount("#app");
```