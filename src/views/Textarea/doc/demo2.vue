<template>
    <div class="container">
        <k-textarea v-model="textVal" disabled></k-textarea>
    </div>
    <k-preview compName="Textarea/doc" demoName="demo2"/>
</template>
<script lang="ts" setup>
    import {ref} from 'Vue'
    const textVal =ref('救命，我被禁止了，除非你满足了什么条件，我才能解禁！')
</script>
<style lang="scss" scoped>

</style>