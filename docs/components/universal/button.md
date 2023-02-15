# Button 按钮

<k-button type="default">Default</k-button>
<k-button type="primary">Primary</k-button>
<k-button type="success">Success</k-button>
<k-button type="info">Info</k-button>
<k-button type="warming">Warming</k-button>
<k-button type="danger">Danger</k-button>

<k-input placeholder="请输入内容" v-model="iptValue"></k-input>
<k-input placeholder="请输入内容" leftIcon="k-icon-sousuo1"></k-input>
<k-input placeholder="请输入内容" rightIcon="k-icon-book_line"></k-input>

<k-radio :options="options" column></k-radio>

<script lang="ts" setup>
    import {reactive} from 'vue'
    const state =reactive({
        options:[
            {
                label:'软件工程',
                value:1,
            },
            {
                label:'网络工程',
                value:2
            },
            {   
                label:'电子信息',
                value:3
            },
            {   
                label:'人工智能',
                value:4
            }
        ]
    })
    const {options} =state
</script>


## Button Attributes
|      参数      | 说明                                   |   类型   | 可选值                                                    | 默认值 |
| :----------------: | :---------------------------------:   | :------: | :------------------------------------------:            | :-------: |
|      size      | 尺寸                                  |  string   | small / default / large  | default           |
|   type         | 类型                                  |  string    |default/primary / success / warning / danger / info     | default   |
|   plain        | 是否朴素按钮                           |  boolean  | —| false  |
|  round         | 是否圆角按钮                           |  boolean  | —| false|
|   disabled     | 是否禁用状态                           |  boolean  |   —    | false 
|  icon          | 图标类名                               |  string   | — | 	—   |
|  loading       | 是否加载                               |  boolean   | — | false |