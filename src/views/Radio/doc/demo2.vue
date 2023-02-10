<template>
    <div>
        <k-radio :options="options"></k-radio>
        <k-preview compName="Radio/doc" demoName="demo2"/>
    </div>
</template>

<script lang="ts" setup>
    import {reactive} from 'vue'
    const state =reactive({
        options:[
            {
                label:'大一',
                value:1,
                // disabled:true
            },
            {
                label:'大二',
                value:2,
                disabled:true
            },
            {   
                label:'大三',
                value:3
            },
            {   
                label:'大四',
                value:4,
                disabled:true
            }
        ]
    })
    const {options} =state
</script>

<style lang="scss" scoped>

</style>