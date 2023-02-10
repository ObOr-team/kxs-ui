<template>
    <div>
        <k-radio :options="options" customColor="#FFE4E1"></k-radio>
        <k-radio :options="options" customColor="#C1FFC1"></k-radio>
        <k-radio :options="options" customColor="#87CEFA"></k-radio>
        <k-radio :options="options" customColor="#EEC591"></k-radio>
        <k-preview compName="Radio/doc" demoName="demo4"/>
    </div>
</template>

<script lang="ts" setup>
    import {reactive} from 'vue'
    const state =reactive({
        options:[
            {
                label:'专科',
                value:1
            },
            {
                label:'本科',
                value:2
            },
            {   
                label:'硕士',
                value:3
            },
            {   
                label:'博士',
                value:4
            }
        ]
    })
    const {options} =state
</script>

<style lang="scss" scoped>

</style>