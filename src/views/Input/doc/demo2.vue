<template>
    <div class="container">
        <KInput placeholder="文本类型"  v-model:value="text"/>
        <span class="preview">
            {{text}}
        </span>
        <KInput placeholder="密码类型" type="password" v-model:value="password"/>
        <span class="preview">
            {{password}}
        </span>
    </div>
    <k-preview compName="Input/doc" demoName="demo1"/>
</template>

<script lang="ts" setup>
    
    import { ref } from 'vue'
    import KInput from "@/components/kinput/KInput.vue"
     
    const text = ref('');
    const password = ref('');

</script>


<style lang="scss" scoped>

.preview{
    padding: 10px 15px;
}

</style>