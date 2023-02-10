<template>
  <k-select 
  :options="selOptions"
  disabled
  placeholder="请选择"
  >
  </k-select>
</template>

<script lang="ts" setup>
import { reactive} from "vue";
const state = reactive({
  selOptions: [
    { label: "中国", value: "zhongguo" },
    { label: "俄罗斯", value: "eluosi" },
    { label: "美国", value: "meiguo" },
    { label: "澳大利亚", value: "aodaliya" },
    { label: "巴基斯坦", value: "bajisitan" },
  ],
});
const { selOptions } = state;
</script>