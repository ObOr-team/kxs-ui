<script lang="ts" setup>
    import demo1 from './demo1.vue' 
    import demo2 from './demo2.vue' 
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    import demo5 from './demo5.vue'
    import demo6 from './demo6.vue'
    import demo7 from './demo7.vue'
</script>
### ● 基础  
<p>使用<code>type</code>属性指定按钮类型</p>
<p>使用<code>round</code>属性指定是否为圆角按钮</p>
<demo1/>  
<demo1/> 
<!-- 测试md是否能传值过去preview.vue文件，但现在还没发实现传值 -->
<!-- <k-preview compName="Button/doc" demoName="demo1"/>  -->

### ● 反色  
<p>使用<code>plain</code>属性指定是否为朴素按钮</p>
<demo2/>   

### ● 禁用
<p>使用<code>disabled</code>属性指定按钮是否被禁用</p>
<demo3/> 

### ● 大小
<p>使用<code>size</code>属性指定按钮的大小</p>
<demo4/> 

### ● 块级
<p>使用<code>block</code>属性指定是否为块级按钮</p>
<demo5/> 

### ● 图标
<p>使用<code>FrontIcon</code>属性指定按钮文字前面的图标</p>
<p>使用<code>postIcon</code>属性指定按钮文字后面的图标</p>
<p>使用<code>icon</code>属性指定无按钮文字的图标</p>
<demo6/> 

### ● 加载
<p>使用<code>icon="jiazai" loading</code>指定按钮的加载状态</p>
<demo7/> 

<style>
    table{
        width: 100%; 
    }
    th {
        height: 50px;
    }
    td {
        height: 35px;
    }
    table, th, td {
        border: 1px solid var(--default-border-color);
        border-collapse: collapse;
    }
</style>

## Button Attributes
|      **参数**      | 说明                                   |   类型   | 可选值                                                    | 默认值 |
| :----------------: | :---------------------------------:   | :------: | :------------------------------------------:            | :-------: |
|      **size**      | 尺寸                                  |  string   | small / default / large  | default           |
|   **type**         | 类型                                  |  string    |default/primary / success / warning / danger / info     | default   |
|   **plain**        | 是否朴素按钮                           |  boolean  | —| false  |
|  **round**         | 是否圆角按钮                           |  boolean  | —| false|
|   **disabled**     | 是否禁用状态                           |  boolean  |   —    | false 
|  **icon**          | 图标类名                               |  string   | — | 	—   |
|  **loading**       | 是否加载                               |  boolean   | — | false |
