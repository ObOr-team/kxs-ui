<script lang="ts" setup>
    import sel from './Select.vue'
    import bas from './SelectBase.vue'
    import disabled from './SelectDisabled.vue'
    import second from './SelectSecond.vue'
    import multiple from './SelectMultiple.vue'
</script>

<sel/>

### ● 基础
<bas/>

### ● 禁用
<disabled/>

### ● 级联
<second/>

### ● 多选
<multiple/>

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

## Select Attributes
