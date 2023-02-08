<script lang="ts" setup>
    import formm from './Form.vue'
    import form1 from "./Form1.vue"
    import form2 from "./Form2.vue"
    import form3 from "./Form3.vue"
</script>

<formm/>


### 通用表单#

<Form1/>

### 可选表单#
<Form2/>

### 验证表单#
<Form3/>

<style>
    h3{
        /* color:#00a8ff; */
       color:#45aaf2;
        margin-left:20px;
        margin-top:80px;
    }
    table{
        width: 98%;       
        margin:0 auto;
    }
    th {
        height: 50px;
    }
    td {
        height: 35px;
    }
    table, th, td {
        border: 1px solid #b2bec3;
        border-collapse: collapse;
    }
</style>


## Form Attributes
|      **参数**      | 说明                                               |   类型   | 默认值  | 
| :----------------: | :--------------------------------------------------: | :------: | :-----: | 
|     **account**    | 账号：值不能为空                                    |  string  |    -    | 
|   **password**     | 密码：值不能为空                                    |  string  |    -    |
|   **age**          | 年龄：可输入，可增减                                |  number  |     -   |
|  **sex**           | 性别                                               |  string  |    -   | 
|  **hobby**         | 爱好：可选值                                        | string[] |   -    | 
|  **agree**         | 协议                                               |  boolean |    -    | 