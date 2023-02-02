<script lang="ts" setup>
    //引入KButton组
    import KButton from "@/components/kbutton/KButton4.vue"
    import perview from '@/components/preview.vue'
</script>
<template>
    <div class="kbcontent">
        <div>
        <k-button type="default" size="small">Size</k-button>
        <k-button type="default" size="">Size</k-button>
        <k-button type="default" size="large">Size</k-button>
        </div>
        <perview compName="kbutton" demoName="KButton4"/>
    </div>
</template>