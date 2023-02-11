<script setup>
    import demo1 from './demo1.vue' 
    // import demo2 from './demo2.vue' 
    // import demo3 from './demo3.vue'
    // import demo4 from './demo4.vue'
    // import demo5 from './demo5.vue'
    // import demo6 from './demo6.vue'
</script>
## Tree 树形控件

### ● 基本使用
<p> tree 组件基本使用示例。</p>
<demo1/>

### Attributes 参数

|        参数        |  类型   |                    说明                    | 默认值 |
| :----------------: | :-----: | :----------------------------------------: | :----: |
|      options       |  Array  | 绑定树形组件的数据,具体见下方 options 配置 |   ——   |
|      multiple      | Boolean |                 是否可选择                 | false  |
|  defaultOpenNodes  |  Array  |              默认展开节点key               |   []   |
| defaultSelectNodes |  Array  |              默认选中节点key               |   []   |
|    customClass     | String  |               自定义组件类名               |   ——   |

### options 配置项

|   参数   |  类型   |                     说明                     | 默认值 |
| :------: | :-----: | :------------------------------------------: | :----: |
|  label   | String  | 默认文本展示字段，可设置 labelFiled 进行替换 | lable  |
| children |  Array  |                 节点子集数据                 |   ——   |
| disabled | Boolean |                   是否禁用                   |   ——   |
|    *     | String  |     其他自定拓展配置字段，如：id、vlaue      |   ——   |

### Event 事件

|  事件名   |          说明          |       回调参数        |                   示例                   |
| :-------: | :--------------------: | :-------------------: | :--------------------------------------: |
| nodeClick | 节点点击或选中时的数据 | (value:object\|array) | nodeClick = (item) =>{console.log(item)} |