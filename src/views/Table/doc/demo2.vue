<template>
    <h4>small</h4>
    <k-table :options="options" size="small"></k-table>
    <h4>mini</h4>
    <k-table :options="options" size="mini"></k-table>
</template>
  
<script lang="ts" setup>
  import { reactive } from "vue";
  const state = reactive({
    options: {
      fileds: [
        { field: "id", title: "ID", align: "center" },
        { field: "name", title: "姓名", align: "center" },
        { field: "job", title: "职业", align: "center" },
        { field: "address", title: "地址", align: "center" },
        { field: "from", title: "籍贯", align: "center" },
      ],
      datas: [
     {id:1,name:'张三',job:'UI',address:'组一',from:"云南"},
      {id:2,name:'李四',job:'前端',address:'组二',from:"新疆"},
      {id:3,name:'王五',job:'后端',address:'组三',from:"海南"},
      {id:4,name:'老杨',job:'测试',address:'组四',from:"西藏"},
      ],
    },
  });
  const { options } = state;
  </script>