<template>
    <div class="container">
        <KInput placeholder="这是一个被禁用的标签"  v-model:value="text" disabled/>
        <span class="preview">
            {{text}}
        </span>
        <KInput placeholder="同样支持响应式"  v-model:value="text" />
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
    padding: 10px 15px;
}

</style>