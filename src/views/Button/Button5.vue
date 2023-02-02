<script lang="ts" setup>
    //引入KButton组
    import KButton from "@/components/kbutton/KButton.vue"
    import perview from '@/components/preview.vue'
</script>
<template>
    <div class="kbcontent">
        <div>
        <k-button type="default" block>Block</k-button>
        </div>
        <perview compName="Button" demoName="Preview_Button5"/>
    </div>
</template>