<script setup>
    import demo1 from './demo1.vue' 
    import demo2 from './demo2.vue' 
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    // import demo5 from './demo5.vue'
    // import demo6 from './demo6.vue'
</script>

## Select下拉框

### ● 基本用法 
<p>select 下拉框基本使用示例,需要一个主要的<code> options </code>参数</p>
<demo1/>
<k-preview compname="Select" demoname="demo1"/>

### ● 禁用状态 
<p>可以设置 <code> disabled </code> 属性来实现禁用状态参数</p>
<demo2/>
<k-preview compname="Select" demoname="demo2"/>

### ● 选项禁用 
<p>可以针对 options 下某个选项来添加 <code> disabled </code>属性实现禁用选项</p>
<demo3/>
<k-preview compname="Select" demoname="demo3"/>

### ● 匹配不同格式的数据 
<p>默认 options 接收 label 和 value 作为显示和值绑定，你可以根据<code>labelFiled</code>和<code> valueFiled</code> 来重新确定字段的绑定，更方便的匹配不同格式的数据。</p>
<demo4/>
<k-preview compname="Select" demoname="demo4"/>

### Attributes 参数

|    参数     |       类型        |                  说明                  |         可选值         | 默认值  |
| :---------: | :---------------: | :------------------------------------: | :--------------------: | :-----: |
|   v-model   | String \|\| Array |  下拉框绑定值，开启多选时类型为Array   |           ——           |   ——    |
|    size     |      String       |                尺寸大小                | default / small / mini | default |
| placeholder |      String       |             下拉框占位字符             |           ——           |   ——    |
|   options   |       Array       | 下拉框数据配置，具体见下方 options API |           ——           |   []    |
|  disabled   |      Boolean      |             是否为禁用状态             |      true / false      |  false  |
|    width    |      String       |               自定义宽度               |           ——           |  260px  |
|   height    |      String       |               自定义高度               |           ——           |   ——    |
| searchable  |      Boolean      |            是否开启过滤搜索            |      true / false      |  false  |
|  multiple   |      Boolean      |              是否开启多选              |      true / false      |  false  |
| labelFiled  |      String       |        自定义替换lable的字段名         |           ——           |  label  |
| valueFiled  |      String       |        自定义替换value的字段名         |           ——           |  value  |

### options API

|   参数   |  类型   |                             说明                             |    可选值    | 默认值 |
| :------: | :-----: | :----------------------------------------------------------: | :----------: | :----: |
|  label   | String  | 下拉框默认label展示字段名，<br />自定义请使用 labelFiled 属性重新关联lable字段 |      ——      | label  |
|  value   | String  | 下拉框默认value选中值，<br />自定义请使用 valueFiled 属性重新关联value字段 |      ——      | value  |
| disabled | Boolean |                         是否禁用选项                         | true / false | false  |

### Event 事件

| 事件名 |      说明      |   回调参数    |                 示例                  |
| :----: | :------------: | :-----------: | :-----------------------------------: |
| change | 下拉框选中事件 | (value: item) | change = (item) =>{console.log(item)} |