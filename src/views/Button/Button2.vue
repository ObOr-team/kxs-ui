<script lang="ts" setup>
    //引入KButton组
    import KButton from "@/components/kbutton/KButton2.vue"
    import perview from '@/components/preview.vue'
</script>
<template>
    <div class="kbcontent">
        <div>
        <k-button type="default" plain>Plain</k-button>
        <k-button type="primary" plain>Primary</k-button>
        <k-button type="success" plain>Success</k-button>
        <k-button type="info" plain>Info</k-button>
        <k-button type="warming" plain>Warming</k-button>
        <k-button type="danger" plain>Danger</k-button>
        </div>
        <div>
        <k-button type="default" round plain>Round</k-button>
        <k-button type="primary" round plain>Primary</k-button>
        <k-button type="success" round plain>Success</k-button>
        <k-button type="info" round plain>Info</k-button>
        <k-button type="warming" round plain>Warming</k-button>
        <k-button type="danger" round plain>Danger</k-button>
        </div>  
        <perview compName="kbutton" demoName="KButton2"/>
    </div>
</template>