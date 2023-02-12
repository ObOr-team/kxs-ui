<script setup>
    import demo1 from './demo1.vue' 
    import demo2 from './demo2.vue' 
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    // import demo5 from './demo5.vue'
    // import demo6 from './demo6.vue'
</script>

## OptFile 文件选择

### ● 基本用法 
<p><code> OptFile </code>组件基本使用示例。</p>
<div class="borderBox">
<demo1/>
<k-preview compname="OptFile" demoname="demo1"/>
</div>


### ● 显示已选文件 
<p>可以通过 <code> showFileList</code> 启用。</p>
<div class="borderBox">
<demo2/>
<k-preview compname="OptFile" demoname="demo2"/>
</div>

### ● 展示方式 
<p>可以通过设置 <code>targetType</code> 为 box 切换。</p>
<div class="borderBox">
<demo3/>
<k-preview compname="OptFile" demoname="demo3"/>
</div>


### ● 开启拖拽
<p>通过设置<code> drop</code> 启用。</p>
<div class="borderBox">
<demo4/>
<k-preview compname="OptFile" demoname="demo4"/>
</div>
 


### Attributes 参数

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

### Event 事件

|    事件名    |      说明      |   回调参数    |                   示例                    |
| :----------: | :------------: | :-----------: | :---------------------------------------: |
| beforeChange |  文件选择之前  |      ()       | beforeChange = () =>{console.log("之前")} |
|    change    | 文件选择之之后 | (value:files) |  change = (files) =>{console.log(files)}  |