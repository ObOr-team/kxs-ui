<template>
  <k-space>
    <k-dropdown
      title="Hover me"
      :options="dorpoptions"
    ></k-dropdown>
    <k-dropdown
      title="Hover me"
      :options="dorpoptions"
      size="small"
    ></k-dropdown>
    <k-dropdown
      title="Hover me"
      :options="dorpoptions"
      size="mini"
    ></k-dropdown>
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