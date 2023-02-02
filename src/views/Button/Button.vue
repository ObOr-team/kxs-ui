<script lang="ts" setup>
    //引入KButton组
    import KButton from "@/components/kbutton/KButton.vue"
</script>
<template>
<div>
    <perview compName="kbutton" demoName="KButton"/>
    <div>
        <h3>●  基础</h3>
        <k-button type="default">Default</k-button>
        <k-button type="primary">Primary</k-button>
        <k-button type="success">Success</k-button>
        <k-button type="info">Info</k-button>
        <k-button type="warming">Warming</k-button>
        <k-button type="danger">Danger</k-button>
    </div>   
    <div>
        <k-button type="default" round>Round</k-button>
        <k-button type="primary" round>Primary</k-button>
        <k-button type="success" round>Success</k-button>
        <k-button type="info" round>Info</k-button>
        <k-button type="warming" round>Warming</k-button>
        <k-button type="danger" round>Danger</k-button>
    </div>
    <div>
        <h3>●  反色</h3>
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
    <div>
        <h3>●  禁用</h3>
        <k-button type="default" disabled>Disabled</k-button>
        <k-button type="primary" disabled>Primary</k-button>
        <k-button type="success" disabled>Success</k-button>
        <k-button type="info" disabled>Info</k-button>
        <k-button type="warming" disabled>Warming</k-button>
        <k-button type="danger" disabled>Danger</k-button>
    </div>
    <div>
        <h3>●  大小</h3>
        <k-button type="default" size="small">Size</k-button>
        <k-button type="default" size="">Size</k-button>
        <k-button type="default" size="large">Size</k-button>
    </div>
    <div>
        <h3>●  块级</h3>
        <k-button type="default" block>Block</k-button>
    </div>

    <div>
        <h3>●  图标</h3>
        <k-button type="default" frontIcon="sousuo">FrontIcon</k-button>
        <k-button type="default" frontIcon="tianjia">FrontIcon</k-button>
        <k-button type="default" frontIcon="shezhi-xianxing">FrontIcon</k-button>
        <k-button type="default" frontIcon="xiazai">FrontIcon</k-button>
        <k-button type="default" frontIcon="bianjixiugai">FrontIcon</k-button>
        <k-button type="default" frontIcon="shanchu">FrontIcon</k-button>
    </div>
    <div>
        <k-button type="default" postIcon="sousuo">PostIcon</k-button>
        <k-button type="default" postIcon="tianjia">PostIcon</k-button>
        <k-button type="default" postIcon="shezhi-xianxing">PostIcon</k-button>
        <k-button type="default" postIcon="xiazai">PostIcon</k-button>
        <k-button type="default" postIcon="bianjixiugai">PostIcon</k-button>
        <k-button type="default" postIcon="shanchu">PostIcon</k-button>
    </div>
    <div>
        <k-button type="default" icon="sousuo"></k-button>
        <k-button type="default" icon="tianjia"></k-button>
        <k-button type="default" icon="shezhi-xianxing"></k-button>
        <k-button type="default" icon="xiazai"></k-button>
        <k-button type="default" icon="bianjixiugai"></k-button>
        <k-button type="default" icon="shanchu"></k-button>
    </div>
</div>
</template>