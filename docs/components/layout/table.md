<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  options:{
    fileds:[
      {field:'id',title:'ID',align:'center'},
      {field:'name',title:'姓名',align:'center'},
      {field:'job',title:'职业',align:'center'},
      {field:'address',title:'地址',align:'center'},
      {field:'from',title:'籍贯',align:'center'}
    ],
    datas:[
      {id:1,name:'张三',job:'UI',address:'组一',from:"云南"},
      {id:2,name:'李四',job:'前端',address:'组二',from:"新疆"},
      {id:3,name:'王五',job:'后端',address:'组三',from:"海南"},
      {id:4,name:'老杨',job:'测试',address:'组四',from:"西藏"},
    ]
  },
});
const { options } = state;
</script>
# Table 表格

## ● 基本使用
<p> table 表格基本使用示例,需要一个主要的 <code>options</code> 参数。</p>
<div class="borderBox">
 <k-table :options="options"></k-table>
</div>

## ● 不同大小
<p> 你可以传入一个<code> size </code>来确定表格的不同大小，以适配不同的应用场景</p>
<div class="borderBox">
<h4>small</h4>
<k-table :options="options" size="small"></k-table>
<h4>mini</h4>
<k-table :options="options" size="mini"></k-table>  
</div>

<!-- 待研究
### ● 自定义插槽内容
<p> 根据需要自定义表格的插槽内容，插槽接受需要定义表格列的 field 并返回当前行的数据 rowItem ，如果是定义表头，需要在插槽名加上 head- 前缀作为识别符</p>
<demo3/>
<br/>
<k-preview compname="Table" demoname="demo3"/> -->



## ● Attributes 参数
|      参数      | 说明                                   |   类型   | 可选值                                                    | 默认值 |
| :----------------: | :---------------------------------:   | :------: | :------------------------------------------:            | :-------: |
|      size      | 尺寸                                  |  string   | small / mini /default            |—  |
|   type         | 类型                                  |  string    |text     |  —  |
|   def        | 默认值                           |  string  | —  | default   |
|  attr        | 属性                           |  string  | options/size| —|



