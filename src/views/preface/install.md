<h1>安装使用</h1>

<h3>安装</h3>
<p>推荐使用<code>npm</code>的方式安装，也可选择<code>cpm</code>或<code>yarn</code>进行安装。</p>

npm install kxx-ui

cnpm install  kxx-ui --save

yarn add kxx-ui

<h3>使用</h3>
<p></p>

/*js*/

import { createApp } from "vue";

import App from "@/App.vue";

import mzlUi from "mzl-ui";

import "../node_modules/mzl-ui/dist/style.css";

const app = createApp(App);

app.use(mzlUi);

app.mount("#app");