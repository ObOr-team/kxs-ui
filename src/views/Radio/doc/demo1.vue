<template>
    <div class="borderBox">
        <k-radio :options="options"></k-radio>
    </div>
</template>

<script lang="ts" setup>
    import {reactive} from 'vue'
    const state =reactive({
        options:[
            {
                label:'北京',
                value:1
            },
            {
                label:'上海',
                value:2
            },
            {   
                label:'广州',
                value:3
            },
            {   
                label:'深圳',
                value:4
            }
        ]
    })
    const {options} =state
</script>

<style lang="scss" scoped>

</style>