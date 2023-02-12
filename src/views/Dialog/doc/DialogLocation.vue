<template>
    <div>
        <k-space>
            <k-button :onclick = "() => {clickToShow(0)}">top</k-button>
            <k-button :onclick = "() => {clickToShow(1)}">center</k-button>
        </k-space>

        <k-dialog v-if = "isShow[0]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            location="top"
        ></k-dialog>

        <k-dialog v-if = "isShow[1]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            location="center"
        ></k-dialog>
    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    // 是否展示对话框组件
    let isShow: any = ref([false, false]);
    // 点击按钮显示对应对话框
    let clickToShow = (i:number) => {
        isShow.value.forEach((item:boolean, index:number) => isShow.value[index] = false);
        isShow.value[i] = true;
    }
</script>