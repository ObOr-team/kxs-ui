<template>
    <div class="k-space">
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
    </div>
</template>

<script lang="ts">
import {useSlots,h,ref} from 'vue'
    export default {
         name:"kSpace",
    }
</script>

<style lang="scss" scoped>
    .k-space{
        display: inline-flex;
        gap: 10px 10px;
    }
</style>