<template>
    <k-space>
           <k-input placeholder="请输入内容" v-model="iptValue"></k-input>
    </k-space>
</template>
<script lang="ts" setup>
  import {ref} from 'vue'
  const iptValue = ref('')
</script>