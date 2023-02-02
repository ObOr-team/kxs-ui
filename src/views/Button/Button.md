<script lang="ts" setup>
    import button1 from './Button1.vue'
    import button2 from './Button2.vue'
    import button3 from './Button3.vue'
    import button4 from './Button4.vue'
    import button5 from './Button5.vue'
    import button6 from './Button6.vue'
</script>
### ● 基础  
<button1/>  

### ● 反色  
<button2/>  

### ● 禁用
<button3/>

### ● 大小
<button4/>

### ● 块级
<button5/>

### ● 图标
<button6/>

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
