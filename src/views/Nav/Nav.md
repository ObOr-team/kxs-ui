
<script lang="ts" setup>
    import nav1 from './Nav1.vue'
    import nav2 from './Nav2.vue'
</script>
### ● 横向导航栏 
<nav1/> 

### ● 竖向导航栏 
<nav2/> 

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

## Nav Attributes
|      **参数**      | 说明                                   |   类型   | 可选值                                                    | 默认值 |
| :----------------: | :---------------------------------:   | :------: | :------------------------------------------:            | :-------: |
| **Perpendicular**      | 是否为竖向导航栏                    |  boolean  | —| false|        |
|  **disabled**         | 是否禁用                          |  boolean  | —| false|
|   **behindIcon**     | 图标类名(在后)                             |  string   | — | 	—   |
|  **frontIcon**          | 图标类名(在前)                               |  string   | — | 	—   |
