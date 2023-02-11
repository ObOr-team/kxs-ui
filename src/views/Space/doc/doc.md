<script setup>
    import demo1 from './demo1.vue' 
    import demo2 from './demo2.vue'
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
</script>

## Space 间距

### ● 基本用法 
<p>相邻组件间的水平间距。</p>
<demo1/>

### ● 垂直间距 
<p>通过添加<code>column</code>属性设置相邻组件间的按垂直方向排列间距。</p>
<demo2/>

### ● 间距大小 
<p>通过设置<code>size</code>的值来规定间距的大小。</p>
<demo3/>

### ● 自动换行 
<p>通过添加<code>wrap</code>属性来设置自动换行。</p>
<demo4/>

### Space Attributes
|  参数  |                             说明                             |  类型   |
| :--------: | :--------------------------------------------------: | :---------: |
| inline |                 是否为水平或者垂直，默认横向                 | Boolean |
|  size  | 自定义间距大小，接收两个参数，<br />第一个为垂直间距，第二个为水平间距，<br />当inline为false是，只需要一个参数设置垂直间距即可 |  Array  |