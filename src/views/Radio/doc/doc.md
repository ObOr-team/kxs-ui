<script setup>
    import demo1 from './demo1.vue' 
    import demo2 from './demo2.vue' 
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    import demo5 from './demo5.vue'
    import demo6 from './demo6.vue'
</script>
## Radio单选

### ● 基本使用
<p> radio 组件的基本使用，需要一个主要的<code>options</code>参数。</p>
<demo1/>
<k-preview compname="Radio" demoname="demo1"/>

### ● 禁用选项
<p>可以针对 options 下某个选项来添加<code>disabled</code> 属性实现禁用选项。</p>
<demo2/>
<k-preview compname="Radio" demoname="demo2"/>

### ● 垂直排列
<p>可以通过添加<code>column</code>属性为实现垂直排列。</p>
<demo3/>
<k-preview compname="Radio" demoname="demo3"/>

### ● 自定义颜色
<p>可以通过设置<code>customColor</code>属性的值自定义你喜欢的颜色。</p>
<demo4/>
<k-preview compname="Radio" demoname="demo4"/>

### ● 自定义数据格式
<p>默认options接收label和value作为显示和值绑定，你可以使用<code>labelFiled</code>和<code>valueFiled</code>来重新确定字段的绑定，更方便的匹配不同格式的数据。</p>
<demo5/>
<k-preview compname="Radio" demoname="demo5"/>

### ● 获取点击的数据
<p>可以通过绑定<code>change</code>事件,获取点击的数据</p>
<demo6/>
<k-preview compname="Radio" demoname="demo6"/>

### Attributes 参数

|    参数     |        类型        |                 说明                 |         可选值         | 默认值  |
| :---------: | :----------------: | :----------------------------------: | :--------------------: | :-----: |
|   v-model   | String \|\| Number |              单选绑定值              |           ——           |   ——    |
|    size     |       String       |               尺寸大小               | default / small / mini | default |
|   options   |       Array        | 单选数据配置，具体见下方 options API |           ——           |   []    |
|   inline    |      Boolean       |            是否为行内元素            |      true / false      |  true   |
| labelFiled  |       String       |       自定义替换lable的字段名        |           ——           |  label  |
| valueFiled  |       String       |       自定义替换value的字段名        |           ——           |  value  |
| customColor |       String       |          自定义选中颜色色值          |           ——           |   ——    |
| customClass |       String       |            自定义组件类名            |           ——           |   ——    |

### options API

|   参数   |  类型   |                             说明                             |    可选值    | 默认值 |
| :------: | :-----: | :----------------------------------------------------------: | :----------: | :----: |
|  label   | String  | 单选默认label展示字段名，<br />自定义请使用 labelFiled 属性重新关联lable字段 |      ——      | label  |
|  value   | String  | 单选默认value选中值，<br />自定义请使用 valueFiled 属性重新关联value字段 |      ——      | value  |
| disabled | Boolean |                         是否禁用选项                         | true / false | false  |

### Event 事件

| 事件名 |   说明   | 回调参数  |                     示例                      |
| :----: | :------: | :-------: | :-------------------------------------------: |
| change | 选中事件 | (value:e) | change = (e) =>{console.log(e.value,e.index)} |