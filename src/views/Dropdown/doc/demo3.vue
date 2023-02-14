<template>
  <k-space>
      <k-dropdown title="Hover me" :options="dorpoptions" size="small"></k-dropdown>
  </k-space>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  dorpoptions: [
    { label: "menu1", icon: "k-icon-shezhi-xianxing1" },
    { label: "menu2", icon: "k-icon-shopping_cart_line" },
    { label: "menu3", icon: "k-icon-share_circle_line" },
    { label: "menu4", icon: "k-icon-star_arc_line" },
  ],
});
const { dorpoptions } = state;
</script>
