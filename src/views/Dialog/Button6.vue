<script lang="ts" setup>
    //引入KButton组
    import KButton from "@/components/kbutton/KButton.vue"
    import perview from '@/components/preview.vue'
</script>
<template>
    <div class="kbcontent">
        <div>
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
        <perview compName="Button" demoName="Preview_Button6"/>
    </div>
</template>