<template>
    <div >
        <k-menu Perpendicular>
            <k-nav index="1" frontIcon="sousuo">横向导航栏1</k-nav>
            <k-nav index="2">横向导航栏2</k-nav>
            <k-nav index="3" behindIcon="bianjixiugai">横向导航栏3</k-nav>
            <k-nav index="4" disabled>横向导航栏4</k-nav>
            <k-nav index="5" disabled>横向导航栏5</k-nav>
      </k-menu>
        <perview compName="Nav" demoName="Preview_Nav1"/>
    </div>
    
</template>
<script lang="ts" setup>
    import KNav from '@/components/knav/KNav.vue'
import kMenu from '@/components/knav/kMenu.vue'
import perview from '@/components/preview.vue'
</script>