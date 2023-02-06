<script lang="ts" setup>
    //引入KButton组
    import KButton from "@/components/kbutton/KButton.vue"
    import perview from '@/components/preview.vue'
</script>
<template>
    <div class="kbcontent">
        <div>
        <k-button type="default" icon="jiazai" loading>Default</k-button>
        <k-button type="primary" icon="jiazai" loading>Primary</k-button>
        <k-button type="success" icon="jiazai" loading>Success</k-button>
        <k-button type="info"  icon="jiazai" loading>Info</k-button>
        <k-button type="warming"  icon="jiazai" loading>Warming</k-button>
        <k-button type="danger" icon="jiazai" loading>Danger</k-button>
        </div>
        <perview compName="Button" demoName="Preview_Button7"/>
    </div>
</template>
