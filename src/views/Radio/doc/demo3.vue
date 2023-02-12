<template>
    <div>
        <k-radio :options="options" column></k-radio>
    </div>
</template>

<script lang="ts" setup>
    import {reactive} from 'vue'
    const state =reactive({
        options:[
            {
                label:'软件工程',
                value:1,
            },
            {
                label:'网络工程',
                value:2
            },
            {   
                label:'电子信息',
                value:3
            },
            {   
                label:'人工智能',
                value:4
            }
        ]
    })
    const {options} =state
</script>

<style lang="scss" scoped>

</style>