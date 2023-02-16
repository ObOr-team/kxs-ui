--- 
title: Select 选择器
head:
  - - meta
    - name: description
      content: kx-ui Select 选择器
  - - meta
    - name: keywords
      content: Select 选择器
---

# {{ $frontmatter.title }}

<script lang="ts" setup>
 import { reactive,ref } from "vue";
const selVal = ref("zhongguo");
const state = reactive({
  selOptions: [
    { label: "中国", value: "zhongguo" },
    { label: "俄罗斯", value: "eluosi" },
    { label: "美国", value: "meiguo" },
    { label: "澳大利亚", value: "aodaliya" },
    { label: "巴基斯坦", value: "bajisitan" },
  ],
});
const { selOptions } = state;
const selchange = (item:any, index:any) => {
};
const state1 = reactive({
  selOptions1: [
    { label: "中国", value: "zhongguo" },
    { label: "俄罗斯", value: "eluosi",disabled:true },
    { label: "美国", value: "meiguo" },
    { label: "澳大利亚", value: "aodaliya" ,disabled:true},
    { label: "巴基斯坦", value: "bajisitan"},
  ],
});
const { selOptions1 } = state1;
const state2 = reactive({
  selOptions2: [
    { name: "中国", id: "zhongguo" },
    { name: "俄罗斯", id: "eluosi" },
    { name: "美国", id: "meiguo" },
    { name: "澳大利亚", id: "aodaliya" },
    { name: "巴基斯坦", id: "bajisitan" },
  ],
});
const { selOptions2 } = state2;
</script>


## ● 基本用法 
<p>select 下拉框基本使用示例,需要一个主要的<code> options </code>参数</p>
<div class="borderBox">
   <k-select
    :options="selOptions"
    @change="selchange"
    v-model="selVal"
  >
  </k-select>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
  <div>
    <k-select
    :options="selOptions"
    @change="selchange"
    v-model="selVal"
  >
  </k-select>
  </div>
  
</template>

<script lang="ts" setup>
import { reactive,ref } from "vue";
const selVal = ref("zhongguo");
const state = reactive({
  selOptions: [
    { label: "中国", value: "zhongguo" },
    { label: "俄罗斯", value: "eluosi" },
    { label: "美国", value: "meiguo" },
    { label: "澳大利亚", value: "aodaliya" },
    { label: "巴基斯坦", value: "bajisitan" },
  ],
});
const selchange = (item:any, index:any) => {
 
};
const { selOptions } = state;
</script>
  ```
</details>

## ● 禁用状态 
<p>可以设置 <code> disabled </code> 属性来实现禁用状态参数</p>
<div class="borderBox">
  <k-select 
  :options="selOptions"
  disabled
  placeholder="请选择"
  >
  </k-select>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
  <div>
  <k-select 
  :options="selOptions"
  disabled
  placeholder="请选择"
  >
  </k-select>
  </div>
  
</template>

<script lang="ts" setup>
import { reactive} from "vue";
const state = reactive({
  selOptions: [
    { label: "中国", value: "zhongguo" },
    { label: "俄罗斯", value: "eluosi" },
    { label: "美国", value: "meiguo" },
    { label: "澳大利亚", value: "aodaliya" },
    { label: "巴基斯坦", value: "bajisitan" },
  ],
});
const { selOptions } = state;
</script>
  ```
</details>

## ● 选项禁用 
<p>可以针对 options 下某个选项来添加 <code> disabled </code>属性实现禁用选项</p>
<div class="borderBox">
  <k-select
    :options="selOptions1"
    v-model="selVal"
  >
  </k-select>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
  
  <div>
  <k-select
    :options="selOptions"
    v-model="selVal"
  >
  </k-select>
</div>
</template>

<script setup>
import { reactive,ref } from "vue";
const selVal = ref("meiguo");
const state = reactive({
  selOptions: [
    { label: "中国", value: "zhongguo" },
    { label: "俄罗斯", value: "eluosi",disabled:true },
    { label: "美国", value: "meiguo" },
    { label: "澳大利亚", value: "aodaliya" ,disabled:true},
    { label: "巴基斯坦", value: "bajisitan"},
  ],
});
const { selOptions } = state;
</script>
  ```
</details>

## ● 匹配不同格式的数据 
<p>默认 options 接收 label 和 value 作为显示和值绑定，你可以根据<code>labelFiled</code>和<code> valueFiled</code> 来重新确定字段的绑定，更方便的匹配不同格式的数据。</p>
<div class="borderBox">
    <k-select
    :options="selOptions2"
    filedLabel="name" filedValue="id"
    placeholder="请选择"
  >
  </k-select>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
  <div>
  <k-select
    :options="selOptions"
    filedLabel="name" filedValue="id"
    placeholder="请选择"
  >
  </k-select>
</div>
  
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  selOptions: [
    { name: "中国", id: "zhongguo" },
    { name: "俄罗斯", id: "eluosi" },
    { name: "美国", id: "meiguo" },
    { name: "澳大利亚", id: "aodaliya" },
    { name: "巴基斯坦", id: "bajisitan" },
  ],
});
const { selOptions } = state;
</script>
  ```
</details>

## ● Attributes 参数

|    参数     |       类型        |                  说明                  |         可选值         | 默认值  |
| :---------: | :---------------: | :------------------------------------: | :--------------------: | :-----: |
|   v-model   | String \|\| Array |  下拉框绑定值，开启多选时类型为Array   |           ——           |   ——    |
|    size     |      String       |                尺寸大小                | default / small / mini | default |
| placeholder |      String       |             下拉框占位字符             |           ——           |   ——    |
|   options   |       Array       | 下拉框数据配置，具体见下方 options API |           ——           |   []    |
|  disabled   |      Boolean      |             是否为禁用状态             |      true / false      |  false  |
|    width    |      String       |               自定义宽度               |           ——           |  260px  |
|   height    |      String       |               自定义高度               |           ——           |   ——    |
| searchable  |      Boolean      |            是否开启过滤搜索            |      true / false      |  false  |
|  multiple   |      Boolean      |              是否开启多选              |      true / false      |  false  |
| labelFiled  |      String       |        自定义替换lable的字段名         |           ——           |  label  |
| valueFiled  |      String       |        自定义替换value的字段名         |           ——           |  value  |

### options API

|   参数   |  类型   |                             说明                             |    可选值    | 默认值 |
| :------: | :-----: | :----------------------------------------------------------: | :----------: | :----: |
|  label   | String  | 下拉框默认label展示字段名，<br />自定义请使用 labelFiled 属性重新关联lable字段 |      ——      | label  |
|  value   | String  | 下拉框默认value选中值，<br />自定义请使用 valueFiled 属性重新关联value字段 |      ——      | value  |
| disabled | Boolean |                         是否禁用选项                         | true / false | false  |
