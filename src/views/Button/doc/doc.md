<script lang="ts" setup>
    import demo1 from './demo1.vue' 
    import demo2 from './demo2.vue' 
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    import demo5 from './demo5.vue'
    import demo6 from './demo6.vue'
    import demo7 from './demo7.vue'
</script>

## Button 按钮

### ● 基础  
<p>使用<code>type</code>属性指定按钮类型</p>
<p>使用<code>round</code>属性指定是否为圆角按钮</p> 
<div class="borderBox">
    <demo1/> 
    <k-preview compname="Button" demoname="demo1" open/> 
</div>
<!-- 测试边框一起包组件和代码预览 -->
<style scoped>
.t-test{
    background:pink;
}
</style>

### ● 反色  
<p>使用<code>plain</code>属性指定是否为朴素按钮</p>
<div class="borderBox">
    <demo2/>   
    <k-preview compname="Button" demoname="demo2"/>
</div>   

### ● 禁用
<p>使用<code>disabled</code>属性指定按钮是否被禁用</p>
<div class="borderBox">
    <demo3/> 
    <k-preview compname="Button" demoname="demo3"/>
</div>

### ● 大小
<p>使用<code>size</code>属性指定按钮的大小</p>
<div class="borderBox">
    <demo4/> 
    <k-preview compname="Button" demoname="demo4"/>
</div>

### ● 块级
<p>使用<code>block</code>属性指定是否为块级按钮</p>
<div class="borderBox">
    <demo5/> 
    <k-preview compname="Button" demoname="demo5"/>
</div>

### ● 图标
<p>默认使用<code>icon</code>属性指定无按钮文字的图标</p>
<p>可以使用<code>postIcon</code>属性指定按钮文字后面的图标</p>
<div class="borderBox">
    <demo6/> 
    <k-preview compname="Button" demoname="demo6"/>
</div>

### ● 加载
<p>使用<code>loading</code>指定按钮的加载状态</p>
<div class="borderBox">
    <demo7/> 
    <k-preview compname="Button" demoname="demo7"/>
</div>

### Button Attributes
|      参数      | 说明                                   |   类型   | 可选值                                                    | 默认值 |
| :----------------: | :---------------------------------:   | :------: | :------------------------------------------:            | :-------: |
|      size      | 尺寸                                  |  string   | small / default / large  | default           |
|   type         | 类型                                  |  string    |default/primary / success / warning / danger / info     | default   |
|   plain        | 是否朴素按钮                           |  boolean  | —| false  |
|  round         | 是否圆角按钮                           |  boolean  | —| false|
|   disabled     | 是否禁用状态                           |  boolean  |   —    | false 
|  icon          | 图标类名                               |  string   | — | 	—   |
|  loading       | 是否加载                               |  boolean   | — | false |