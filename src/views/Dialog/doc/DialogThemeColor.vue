<template>
    <div>
        <k-space>
            <k-button :onclick = "() => {clickToShow(0)}">themeColor = "#1ABC9C"</k-button>
        </k-space>
    
        <k-dialog v-if = "isShow[0]"
        titleText = "对话框标题"
        contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
        themeColor="#1ABC9C"
        ></k-dialog>
    </div>
</template>
<script lang="ts" setup>
    // 引入ref处理响应式数据
    import { ref } from 'vue'

    // 是否展示对话框组件
    let isShow: any = ref([false]);
    // 点击按钮显示对应对话框
    let clickToShow = (i:number) => {
        // TODO: BUG：连续点击一个按钮，响应式数据失效，对话框不显示
        isShow.value.forEach((item:boolean, index:number) => isShow.value[index] = false);
        isShow.value[i] = true;
    }

</script>
