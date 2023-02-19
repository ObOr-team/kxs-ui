<template>
    <div class="container">
        <k-textarea v-model="textVal"></k-textarea>
    </div>
    
</template>
<script lang="ts" setup>
    import {ref} from 'Vue'
    const textVal =ref('')
</script>
<style lang="scss" scoped>

</style>