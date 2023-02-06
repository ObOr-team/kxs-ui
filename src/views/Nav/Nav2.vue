<template>
    <div class="navBox2">
        <k-menu>
            <k-nav index="7"   frontIcon="sousuo">竖向导航栏1</k-nav>
            <k-nav index="8"   behindIcon="tianjia">竖向导航栏2</k-nav>
            <k-nav index="9"   frontIcon="shezhi-xianxing">竖向导航栏3</k-nav>
            <k-nav index="10" disabled   frontIcon="xiazai">竖向导航栏4</k-nav>
            <k-nav index="11" disabled   behindIcon="bianjixiugai">竖向导航栏5</k-nav>
            <k-nav index="12" disabled   frontIcon="shanchu">竖向导航栏6</k-nav>
         </k-menu>
        <perview compName="Nav" demoName="Preview_Nav2"/>
    </div>
    
</template>
<script lang="ts" setup>
    import KNav from '@/components/knav/KNav.vue'
    import kMenu from '@/components/knav/kMenu.vue'
    import perview from '@/components/preview.vue'
</script>

<style lang="scss" scoped>

</style>