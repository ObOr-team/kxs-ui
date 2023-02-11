<template>
  <div class="borderBox">
    <k-select
    :options="selOptions"
    @change="selchange"
    v-model="selVal"
  >
  </k-select>
  </div>
  
</template>

<script lang="ts" setup>
import { reactive,ref } from "vue";
const selVal = ref("zhongguo");
const state = reactive({
  selOptions: [
    { label: "中国", value: "zhongguo" },
    { label: "俄罗斯", value: "eluosi" },
    { label: "美国", value: "meiguo" },
    { label: "澳大利亚", value: "aodaliya" },
    { label: "巴基斯坦", value: "bajisitan" },
  ],
});
const selchange = (item:any, index:any) => {
  // 当前选中的值及index
  console.log(item, index);
};
const { selOptions } = state;
</script>