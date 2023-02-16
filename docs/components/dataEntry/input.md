<script lang="ts" setup>
  import {ref} from 'vue'
  const iptValue = ref('')
</script>
# Input 输入框

## ● 基本用法 
<p>的基本使用示例</p>
<div class="borderBox">
<k-input placeholder="请输入内容" v-model="iptValue"></k-input>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
           <k-input placeholder="请输入内容" v-model="iptValue"></k-input>
</template>
<script lang="ts" setup>
  import {ref} from 'vue'
  const iptValue = ref('')
</script>

  ```
</details>

## ● 禁用状态
<p>通过<code>disabled</code>属性限制输入及操作实现禁用状态</p>
<div class="borderBox">
<k-input placeholder="这是一个被禁用的输入框" disabled/>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-input placeholder="这是一个被禁用的输入框" disabled/>
</template>

  ```
</details>

## ● 密码类型
<p>可通过设置<code>type</code>为password来启用是否开启显示密码</p>
<div class="borderBox">
<k-input placeholder="密码类型" type="password"/>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-input placeholder="密码类型" type="password"/>
</template>

  ```
</details>

## ● 带图标
<p>可使用 <code>leftIcon</code> 或者<code> rightIcon </code>来定义显示图标并确定显示的位置。</p>
<div class="borderBox">
            <k-input placeholder="请输入内容" leftIcon="k-icon-sousuo1"></k-input>
           <k-input placeholder="请输入内容" rightIcon="k-icon-book_line"></k-input>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
           <k-input placeholder="请输入内容" leftIcon="k-icon-sousuo1"></k-input>
           <k-input placeholder="请输入内容" rightIcon="k-icon-book_line"></k-input>
</template>

  ```
</details>

## Attributes 参数

|         参数         |      类型       |                             说明                             |         可选值         | 默认值  |
| :------------------: | :-------------: | :----------------------------------------------------------: | :--------------------: | :-----: |
|       v-model        | string / number |                         input绑定值                          |           ——           |   ——    |
|         type         |     string      |                      支持所有原生type值                      |           ——           |   ——    |
|     placeholder      |     string      |                        输入框占位字符                        |           ——           |   ——    |
|       disabled       |     Boolean     |                           是否禁用                           |      true / false      |  false  |
|       readonly       |     Boolean     |                      原生属性，是否只读                      |      true / false      |  false  |
|         form         |     String      |                      原生属性，所属表单                      |           ——           |   ——    |
|      clearable       |     Boolean     |                          是否可清空                          |      true / false      |  false  |
|     showPassword     |     Boolean     | 是否显示密码查看图标，<br />需配合type为password类型一起使用 |      true / false      |  false  |
|         size         |     String      |                           尺寸大小                           | default / small / mini | default |
| leftIcon / rightIcon |     String      |                 是否带图标，并确定图标的位置                 |       参考图标库       |   ——    |
|      autofocus       |     Boolean     |                    是否自动获取输入框焦点                    |      true / false      |  false  |
|      focusColor      |     String      |                    自定义Focus颜色的色值                     |           ——           |   ——    |

<!-- ## Attributes 事件

| 事件名 |              说明               |         回调参数          |                   示例                    |
| :----: | :-----------------------------: | :-----------------------: | :---------------------------------------: |
| focus  |      input在获取焦点时触发      |      (event: Event)       | focus=(e)=>{console.log(e.target.value)}  |
|  blur  |      input在失去焦点时触发      |      (event: Event)       |  blur=(e)=>{console.log(e.target.value)}  |
| input  |        input值变化时触发        | (value: string \| number) |        input=(e)=>{console.log(e)}        |
| change |  用户获得焦点并按下回车时触发   |      (event: Event)       | change=(e)=>{console.log(e.target.value)} |
| clear  | 可清空的input点击清空按钮时触发 |            ——             |                    ——                     |  -->