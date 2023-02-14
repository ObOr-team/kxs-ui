<template>
  <k-space>
      <k-dropdown title="Click me" :options="dorpoptions" size="small" trigger="click"></k-dropdown>
  </k-space>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  dorpoptions: [
    { label: "menu1" },
    { label: "menu2" },
    { label: "menu3" },
    { label: "menu4" },
    { label: "menu5" },
  ],
});
const { dorpoptions } = state;
</script>
