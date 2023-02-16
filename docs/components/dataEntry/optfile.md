<script setup>
const change=(files)=>{
   
}
</script>

# OptFile 文件选择

## ● 基本用法 
<p><code> OptFile </code>组件基本使用示例。</p>
<div class="borderBox">
        <k-optfile 
            multiple 
            @change="change"
            label="上传文件">
        </k-optfile>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-optfile 
            multiple 
            @change="change"
            label="上传文件">
        </k-optfile>
</template>

<script setup>
const change=(files)=>{
   
}
</script>
  ```
</details>

## ● 显示已选文件 
<p>可以通过 <code> showFileList</code> 启用。</p>
<div class="borderBox">
        <k-optfile 
            showFileList
            multiple 
            btnType="info">
        </k-optfile>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-optfile 
            showFileList
            multiple 
            btnType="info">
        </k-optfile>
</template>
  ```
</details>

## ● 展示方式 
<p>可以通过设置 <code>targetType</code> 为 box 切换。</p>
<div class="borderBox">
        <k-optfile 
            multiple 
            showFileList
            targetType="box">
        </k-optfile>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-optfile 
            multiple 
            showFileList
            targetType="box">
        </k-optfile>
</template>
  ```
</details>

## ● 开启拖拽
<p>通过设置<code> drop</code> 启用。</p>
<div class="borderBox">
        <k-optfile
            label="将文件拖拽到此处或点击选择文件"
            multiple
            showFileList 
            drop 
            targetType="box">
        </k-optfile>
</div>
 <details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-optfile
            label="将文件拖拽到此处或点击选择文件"
            multiple
            showFileList 
            drop 
            targetType="box">
        </k-optfile>
</template>
  ```
</details>


## ● Attributes 参数

|     参数     |  类型   |                             说明                             |                            可选值                            |     默认值      |
| :----------: | :-----: | :----------------------------------------------------------: | :----------------------------------------------------------: | :-------------: |
|    label     | String  |                         提示文字信息                         |                              ——                              |       ——        |
|  targetType  | String  |                         组件展现方式                         |                          btn / box                           |       btn       |
|     type     | String  |   按钮类型的type，<br />支持button的type的类型，custom除外   | default / primary / <br />success / danger /<br /> warning / dashed<br /> / text |     default     |
|     size     | String  |       盒子类型时组件大小，<br />targetType为box时有效        |                             big                              |       ——        |
|    accept    | String  |                        接受的文件类型                        |             参考原生input=file<br />的accept属性             |       ——        |
|   multiple   | Boolean |                         是否启用多选                         |                         true / false                         |      false      |
|     icon     | String  |                          自定义图标                          |                          参考图标库                          | m-icon-add-bold |
| showFileList | Boolean |                     是否显示文件上传列表                     |                         true / false                         |      false      |
|   fileList   |  Array  | 文件上传列表，例：[{name:1.png},{name:2.png}]，<br />imgListShow为 false 时有效 |                              ——                              |       []        |
|     drop     | Boolean |                       是否启用拖拽功能                       |                         true / false                         |      false      |
| imgListShow  | Boolean | 是否预览已上传图片，<br />targetType为box且showFileList为false时有效 |                         true / false                         |      false      |
| customClass  | String  |                        自定义组件类名                        |                              ——                              |       ——        | 

