<script setup>
    import demo1 from './demo1.vue' 
    import demo2 from './demo2.vue' 
    import demo3 from './demo3.vue'
</script>
## Table 表格

### ● 基本使用
<p> table 表格基本使用示例,需要一个主要的 <code>options</code> 参数。</p>
<div class="borderBox">
    <demo1/>
<k-preview compname="Table" demoname="demo1"/>
</div>

### ● 不同大小
<p> 你可以传入一个<code> size </code>来确定表格的不同大小，以适配不同的应用场景</p>
<div class="borderBox">
    <demo2/>
    <k-preview compname="Table" demoname="demo2"/>
</div>

<!-- 待研究
### ● 自定义插槽内容
<p> 根据需要自定义表格的插槽内容，插槽接受需要定义表格列的 field 并返回当前行的数据 rowItem ，如果是定义表头，需要在插槽名加上 head- 前缀作为识别符</p>
<demo3/>
<br/>
<k-preview compname="Table" demoname="demo3"/> -->



### Table Attributes
|      参数      | 说明                                   |   类型   | 可选值                                                    | 默认值 |
| :----------------: | :---------------------------------:   | :------: | :------------------------------------------:            | :-------: |
|      size      | 尺寸                                  |  string   | small / mini /default            |—  |
|   type         | 类型                                  |  string    |text     |  —  |
|   def        | 默认值                           |  string  | —  | default   |
|  attr        | 属性                           |  string  | options/size| —|



