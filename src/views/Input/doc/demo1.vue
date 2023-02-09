<template>
    <div class="container">
        <k-input placeholder="请输入内容" v-model:value="text"></k-input>
        <span class="preview">{{text}}</span>
    </div>
    <k-preview compName="Input/doc" demoName="demo1"/>
</template>

<script lang="ts" setup>
    
    import { ref } from 'vue'
    import KInput from "@/components/kinput/KInput.vue"
     
    const text = ref('');

</script>


<style lang="scss" scoped>
.preview{
    padding-left: 10px;
}

</style>