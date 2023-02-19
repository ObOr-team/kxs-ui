<template>
    <div>
        <k-radio :options="options" @change="change"></k-radio>
    </div>
</template>

<script lang="ts" setup>
    import {reactive} from 'vue'
    const state =reactive({
        options:[
            {
                label:'理学',
                value:1
            },
            {
                label:'工学',
                value:2
            },
            {   
                label:'医学',
                value:3
            },
            {   
                label:'农学',
                value:4
            }
        ]
    })
    const {options} =state;
    const change=(e:any)=>{
        console.log(e)
    }
</script>

<style lang="scss" scoped>

</style>