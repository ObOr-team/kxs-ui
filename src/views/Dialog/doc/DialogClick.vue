<template>
    <div class="borderBox">
        <k-button :onclick = "() => {clickToShow(0)}">确认按钮点击事件</k-button>
        <k-dialog v-if = "isShow[0]"
        titleText = "对话框标题"
        contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
        :confirmClick="confirmClick"
        ></k-dialog>

        <k-button :onclick = "() => {clickToShow(1)}">取消按钮点击事件</k-button>
        <k-dialog v-if = "isShow[1]"
        titleText = "对话框标题"
        contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
        :cancelClick="cancelClick"
        ></k-dialog>
    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'

    // 是否展示对话框组件
    let isShow: any = ref([false, false]);
    // 点击按钮显示对应对话框
    let clickToShow = (i:number) => {
        // TODO: BUG：连续点击一个按钮，响应式数据失效，对话框不显示
        isShow.value.forEach((item:boolean, index:number) => isShow.value[index] = false);
        isShow.value[i] = true;
    }

    // 自定义确认按钮点击事件
    let confirmClick = () => {
        window.alert("点击了确认按钮");
    }
    // 自定义取消按钮点击事件
    let cancelClick = () => {
        window.alert("点击了取消按钮");
    }

</script>