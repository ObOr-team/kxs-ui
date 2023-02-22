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
npm install kxs-ui
cnpm install  kxs-ui --save
yarn add kxs-ui
```

## ● 使用

```ts
import { createApp } from "vue";
import App from "@/App.vue";
import kxs from "kxs-ui";
import "../node_modules/kxs-ui/dist/style.css";
const app = createApp(App);
app.use(kxs);
app.mount("#app");