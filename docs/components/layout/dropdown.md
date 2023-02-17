<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  dorpoptions: [
    { label: "menu1" },
    { label: "menu2" },
    { label: "menu3" },
    { label: "menu4" },
    { label: "menu5" },
  ],
});
const dropchange = (item:any, index:any) => {
};
const { dorpoptions } = state;
const state1 = reactive({
  dorpoptions1: [
    { label: "menu1", icon: "k-icon-shezhi-xianxing1" },
    { label: "menu2", icon: "k-icon-shopping_cart_line" },
    { label: "menu3", icon: "k-icon-share_circle_line" },
    { label: "menu4", icon: "k-icon-star_arc_line" },
  ],
});
const { dorpoptions1 } = state1;
</script>
# Dropdown

## ● 基本用法 
<p>Dropdown 下拉菜单的基本使用，需要一个主要的<code>options</code> 参数。</p>
<div class="borderBox">
      <k-dropdown
        title="Hover me"
        :options="dorpoptions"
        @change="dropchange"
      ></k-dropdown>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
      <k-dropdown
        title="Hover me"
        :options="dorpoptions"
        @change="dropchange"
      ></k-dropdown>   
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  dorpoptions: [
    { label: "menu1" },
    { label: "menu2" },
    { label: "menu3" },
    { label: "menu4" },
    { label: "menu5" },
  ],
});
const dropchange = (item:any, index:any) => {
//   console.log(item, index);
};
const { dorpoptions } = state;
</script>
  ```
</details>

## ● 不同大小
<p>通过设置<code> size</code> 属性适应不同大小。</p>
<div class="borderBox">
    <k-dropdown
      title="Hover me"
      :options="dorpoptions"
    ></k-dropdown>
    <k-dropdown
      title="Hover me"
      :options="dorpoptions"
      size="small"
    ></k-dropdown>
    <k-dropdown
      title="Hover me"
      :options="dorpoptions"
      size="mini"
    ></k-dropdown>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
  <k-space>
    <k-dropdown
      title="Hover me"
      :options="dorpoptions"
    ></k-dropdown>
    <k-dropdown
      title="Hover me"
      :options="dorpoptions"
      size="small"
    ></k-dropdown>
    <k-dropdown
      title="Hover me"
      :options="dorpoptions"
      size="mini"
    ></k-dropdown>
  </k-space>

</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  dorpoptions: [
    { label: "menu1" },
    { label: "menu2" },
    { label: "menu3" },
    { label: "menu4" },
    { label: "menu5" },
  ],
});
const { dorpoptions } = state;
</script>
  ```
</details>

## ● 带图标
<p>通过设置 options 数据的<code>icon</code> 属性展示图标</p>
<div class="borderBox">
  <k-dropdown title="Hover me" :options="dorpoptions1" size="small"></k-dropdown>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
      <k-dropdown title="Hover me" :options="dorpoptions" size="small"></k-dropdown>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  dorpoptions: [
    { label: "menu1", icon: "k-icon-shezhi-xianxing1" },
    { label: "menu2", icon: "k-icon-shopping_cart_line" },
    { label: "menu3", icon: "k-icon-share_circle_line" },
    { label: "menu4", icon: "k-icon-star_arc_line" },
  ],
});
const { dorpoptions } = state;
</script>
  ```
</details>

## ● 点击唤醒
<p>默认是移入触发菜单，可以通过 <code>trigger</code>属性设置点击触发唤醒方式</p>
<div class="borderBox">
<k-dropdown title="Click me" :options="dorpoptions" size="small" trigger="click"></k-dropdown>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
      <k-dropdown title="Click me" :options="dorpoptions" size="small" trigger="click"></k-dropdown>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  dorpoptions: [
    { label: "menu1" },
    { label: "menu2" },
    { label: "menu3" },
    { label: "menu4" },
    { label: "menu5" },
  ],
});
const { dorpoptions } = state;
</script>

  ```
</details>

## ● Attributes 参数
|      参数     | 说明                                   |   类型   | 可选值                                                    | 默认值 |
| :----------------: | :---------------------------------:   | :------: | :------------------------------------------:            | :-------: |
| size      | 是否为竖向导航栏                    |  boolean  | —| false|        |
|  optinos        | 接收文本                          |  Array  | —| -|
|   trigger     | 点击唤醒                             |  string   | — | 	—   |
|  icon         | 图标类名                               |  string   | — | 	—   |
