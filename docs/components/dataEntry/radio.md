<script lang="ts" setup>
    import {reactive} from 'vue'
    const state =reactive({
        options:[
            {
                label:'北京',
                value:1
            },
            {
                label:'上海',
                value:2
            },
            {   
                label:'广州',
                value:3
            },
            {   
                label:'深圳',
                value:4
            }
        ]
    })
    const {options} =state
        const state1 =reactive({
        options1:[
            {
                label:'大一',
                value:1,
                // disabled:true
            },
            {
                label:'大二',
                value:2,
                disabled:true
            },
            {   
                label:'大三',
                value:3
            },
            {   
                label:'大四',
                value:4,
                disabled:true
            }
        ]
    })
    const {options1} =state1
    const change=(e:any)=>{
        console.log(e)
    }
</script>
# Radio单选

## ● 基本使用
<p> radio 组件的基本使用，需要一个主要的<code>options</code>参数。</p>
<div class="borderBox">
<k-radio :options="options"></k-radio>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-radio :options="options"></k-radio>
</template>
<script lang="ts" setup>
    import {reactive} from 'vue'
    const state =reactive({
        options:[
            {
                label:'北京',
                value:1
            },
            {
                label:'上海',
                value:2
            },
            {   
                label:'广州',
                value:3
            }
        ]
    })
    const {options} =state
</script>
  ```
</details>

## ● 禁用选项
<p>可以针对 options 下某个选项来添加<code>disabled</code> 属性实现禁用选项。</p>
<div class="borderBox">
  <k-radio :options="options1"></k-radio>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-radio :options="options"></k-radio>
</template>
<script lang="ts" setup>
    import {reactive} from 'vue'
    const state =reactive({
        options:[
            {
                label:'北京',
                value:1,
                // disabled:true
            },
            {
                label:'上海',
                value:2,
                disabled:true
            },
            {   
                label:'广州',
                value:3
            }
        ]
    })
    const {options} =state
</script>
  ```
</details>

## ● 垂直排列
<p>可以通过添加<code>column</code>属性为实现垂直排列。</p>
<div class="borderBox">
  <k-radio :options="options" column></k-radio>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-radio :options="options" column></k-radio>
</template>
<script lang="ts" setup>
    import {reactive} from 'vue'
    const state =reactive({
        options:[
            {
                label:'北京',
                value:1,
            },
            {
                label:'上海',
                value:2
            },
            {   
                label:'广州',
                value:3
            }
    })
    const {options} =state
</script>
  ```
</details>

## ● 自定义颜色
<p>可以通过设置<code>customColor</code>属性的值自定义你喜欢的颜色。</p>
<div class="borderBox">   
        <k-radio :options="options" customColor="#87CEFA"></k-radio>
        <k-radio :options="options" customColor="#C1FFC1"></k-radio>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-radio :options="options" customColor="#FFE4E1"></k-radio>
        <k-radio :options="options" customColor="#C1FFC1"></k-radio>
        <k-radio :options="options" customColor="#87CEFA"></k-radio>
        <k-radio :options="options" customColor="#EEC591"></k-radio>
</template>
<script lang="ts" setup>
    import {reactive} from 'vue'
    const state =reactive({
        options:[
            {
                label:'北京',
                value:1
            },
            {
                label:'上海',
                value:2
            },
            {   
                label:'广州',
                value:3
            }
        ]
    })
    const {options} =state
</script>
  ```
</details>

## ● 自定义数据格式
<p>默认options接收label和value作为显示和值绑定，你可以使用<code>labelFiled</code>和<code>valueFiled</code>来重新确定字段的绑定，更方便的匹配不同格式的数据。</p>
<div class="borderBox">
<k-radio :options="options"></k-radio>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-radio :options="options" filedLabel="name" filedValue="id"></k-radio>
</template>
<script lang="ts" setup>
    import {reactive} from 'vue'
    const state =reactive({
        options:[
            {
                name:'北京',
                id:1
            },
            {
                name:'上海',
                id:2
            },
            {   
                name:'广州',
                id:3
            }
        ]
    })
    const {options} =state
</script>
  ```
</details>

## ● 获取点击的数据
<p>可以通过绑定<code>change</code>事件,获取点击的数据</p>
<div class="borderBox">
<k-radio :options="options" @change="change"></k-radio>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-radio :options="options" @change="change"></k-radio>
</template>
<script lang="ts" setup>
    import {reactive} from 'vue'
    const state =reactive({
        options:[
            {
                label:'北京',
                value:1
            },
            {
                label:'上海',
                value:2
            },
            {   
                label:'广州',
                value:3
            }
        ]
    })
    const {options} =state;
    const change=(e:any)=>{
        console.log(e)
    }
</script>
  ```
</details>

## ● Attributes 参数

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
