<template>
  
  <div class="borderBox">
  <k-select
    :options="selOptions"
    v-model="selVal"
  >
  </k-select>
</div>
</template>

<script setup>
import { reactive,ref } from "vue";
const selVal = ref("meiguo");
const state = reactive({
  selOptions: [
    { label: "中国", value: "zhongguo" },
    { label: "俄罗斯", value: "eluosi",disabled:true },
    { label: "美国", value: "meiguo" },
    { label: "澳大利亚", value: "aodaliya" ,disabled:true},
    { label: "巴基斯坦", value: "bajisitan"},
  ],
});
const { selOptions } = state;
</script>