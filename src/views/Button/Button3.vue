<script lang="ts" setup>
    //引入KButton组
    import KButton from "@/components/kbutton/KButton3.vue"
    import perview from '@/components/preview.vue'
</script>
<template>
    <div class="kbcontent">
        <div>
        <k-button type="default" disabled>Disabled</k-button>
        <k-button type="primary" disabled>Primary</k-button>
        <k-button type="success" disabled>Success</k-button>
        <k-button type="info" disabled>Info</k-button>
        <k-button type="warming" disabled>Warming</k-button>
        <k-button type="danger" disabled>Danger</k-button>
        </div>
        <perview compName="kbutton" demoName="KButton3"/>
    </div>

</template>