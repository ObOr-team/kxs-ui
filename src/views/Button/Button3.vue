<script lang="ts" setup>
    //引入KButton组
    import KButton from "@/components/kbutton/KButton.vue"
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
        <k-preview compName="Button" demoName="Preview_Button3"/>
    </div>
</template>