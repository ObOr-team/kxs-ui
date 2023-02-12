<script setup>
    import demo1 from './demo1.vue' 
    import demo2 from './demo2.vue' 
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    import demo5 from './demo5.vue'
    import demo6 from './demo6.vue'
</script>

## Textarea 文本域

### ● 默认
<p>通过<code>v-model</code>属性设置文本域绑定值</p>
<div class="borderBox">
    <demo1/>
    <k-preview compname="Textarea" demoname="demo1"/>
</div>

### ● 禁用
<p>通过<code>disabled</code>属性设置禁用状态</p>
<div class="borderBox">
    <demo2/>
    <k-preview compname="Textarea" demoname="demo2"/>
</div>


### ● 只读
<p>通过<code>readonly</code>属性设置只读状态</p>
<div class="borderBox">
    <demo3/>
    <k-preview compname="Textarea" demoname="demo3"/>
</div>

### ● 提示
<p>通过<code>placeholder</code>属性设置输入框占位符</p>
<div class="borderBox">
    <demo4/>
    <k-preview compname="Textarea" demoname="demo4"/>
</div>

### ● 字数限制
<p>通过<code>maxlength</code>属性限制字数</p>
<div class="borderBox">
    <demo5/>
    <k-preview compname="Textarea" demoname="demo5"/>
</div>

### ● 放大缩小
<p>通过<code>resize</code>属性设置是否可以放大缩小文本域</p>
<div class="borderBox">
    <demo6/>
    <k-preview compname="Textarea" demoname="demo6"/>
</div>

### Textarea Attributes
|    参数     |         说明          |      类型       | 默认值 |
| :---------: | :-------------------: | :-------------: | :----: |
|   v-model   | textarea文本域绑定值  | string / number |   —    |
| placeholder |    输入框占位字符     |     String      |   —    |
|  disabled   |       是否禁用        |     Boolean     | false  |
|    form     |  原生属性，所属表单   |     String      |   —    |
|   resize    |     是否开启拉伸      |     Boolean     |  true  |
|    rows     | textarea可见区域高度  |     Number      |   4    |
|    cols     | textarea可见区域宽度  |     Number      |   50   |
|  readonly   |  原生属性，是否只读   |     Boolean     | false  |
|  maxlength  | 文本区域的最大字符数  |     Number      |   —    |
| focusColor  | 自定义focus颜色的色值 |     String      |   —    |
| customClass |  自定义组件整体类名   |     String      |   —    |