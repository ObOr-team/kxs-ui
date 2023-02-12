<template>
    <k-space>
        <k-optfile 
            multiple 
            @change="change"
            label="上传文件">
        </k-optfile>
    </k-space>
</template>

<script setup>
const change=(files)=>{
    console.log(files)
}
</script>
