
<script lang="ts" setup>
    import {ref} from 'Vue'
    const textVal =ref('')
</script>

# Textarea 文本域

## ● 默认
<p>通过<code>v-model</code>属性设置文本域绑定值</p>
<div class="borderBox">
<k-textarea v-model="textVal"></k-textarea>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-textarea v-model="textVal"></k-textarea>
</template>
<script lang="ts" setup>
    import {ref} from 'Vue'
    const textVal =ref('')
</script>
  ```
</details>

## ● 禁用
<p>通过<code>disabled</code>属性设置禁用状态</p>
<div class="borderBox">
 <k-textarea v-model="textVal" disabled></k-textarea>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-textarea v-model="textVal" disabled></k-textarea>
</template>

  ```
</details>


## ● 只读
<p>通过<code>readonly</code>属性设置只读状态</p>
<div class="borderBox">
    <k-textarea v-model="textVal" readonly></k-textarea>
</div>

<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-textarea v-model="textVal" readonly></k-textarea> 
</template>

  ```
</details>

## ● 提示
<p>通过<code>placeholder</code>属性设置输入框占位符</p>
<div class="borderBox">
<k-textarea v-model="textVal" placeholder="请输入内容......"></k-textarea>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-textarea v-model="textVal" placeholder="请输入内容......"></k-textarea>
</template>

  ```
</details>


## ● 字数限制
<p>通过<code>maxlength</code>属性限制字数</p>
<div class="borderBox">
<k-textarea v-model="textVal" :maxlength="20"></k-textarea>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-textarea v-model="textVal" :maxlength="20"></k-textarea>
</template>
  ```
</details>


## ● Attributes
|    参数     |         说明          |      类型       | 默认值 |
| :---------: | :-------------------: | :-------------: | :----: |
|   v-model   | textarea文本域绑定值  | string / number |   —    |
| placeholder |    输入框占位字符     |     String      |   —    |
|  disabled   |       是否禁用        |     Boolean     | false  |
|    form     |  原生属性，所属表单   |     String      |   —    |
|    rows     | textarea可见区域高度  |     Number      |   4    |
|    cols     | textarea可见区域宽度  |     Number      |   50   |
|  readonly   |  原生属性，是否只读   |     Boolean     | false  |
|  maxlength  | 文本区域的最大字符数  |     Number      |   —    |
| focusColor  | 自定义focus颜色的色值 |     String      |   —    |
| customClass |  自定义组件整体类名   |     String      |   —    |