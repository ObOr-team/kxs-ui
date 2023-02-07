<script lang="ts" setup>
    //引入KButton组
    import KButton from "@/components/kbutton/KButton.vue"
</script>
<template>
    <div class="kbcontent">
        <div>
        <k-button type="default" size="small">Size</k-button>
        <k-button type="default" size="">Size</k-button>
        <k-button type="default" size="large">Size</k-button>
        </div>
        <k-preview compName="Button" demoName="Preview_Button4"/>
    </div>
</template>