--- 
title: 安装使用
head:
  - - meta
    - name: description
      content: kx-ui 安装使用
  - - meta
    - name: keywords
      content: 安装使用
---

# {{ $frontmatter.title }}

## ● 安装

推荐使用`npm`的方式安装，也可选择`cpm`或`yarn`进行安装。

```bash
npm install kx-ui
cnpm install  kx-ui --save
yarn add kx-ui
```

## ● 使用

```ts
import { createApp } from "vue";
import App from "@/App.vue";
import kx from "kx-ui";
import "../node_modules/kx-ui/dist/style.css";
const app = createApp(App);
app.use(kx);
app.mount("#app");