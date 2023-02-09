<template>
    <div>
        <k-radio :options="options" filedLabel="name" filedValue="id"></k-radio>
    </div>
</template>

<script lang="ts" setup>
    import {reactive} from 'vue'
    const state =reactive({
        options:[
            {
                name:'不及格',
                id:1
            },
            {
                name:'及格',
                id:2
            },
            {   
                name:'优秀',
                id:3
            },
            {   
                name:'良好',
                id:4
            }
        ]
    })
    const {options} =state
</script>

<style lang="scss" scoped>

</style>