<template>
    <div class="borderBox">
        <k-button :onclick = "() => {clickToShow()}">异步确认</k-button>
        <k-dialog v-if = "isShow"
        titleText = "对话框标题"
        contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
        :confirmLoading = true
        :confirmClick="confirmClick"
        ></k-dialog>
    </div>
</template>
<script lang="ts" setup>
    // 引入ref处理响应式数据
    import { ref } from 'vue'

    // 是否展示对话框组件
    let isShow: any = ref(false);
    // 点击按钮显示对应对话框
    let clickToShow = () => {
        isShow.value = true;
    }
    // 自定义确认按钮点击事件
    let confirmClick = () => {
        let p = new Promise<void>((resolve, reject) => {
            setTimeout(()=> {
                resolve();
            }, 1000)
        })
        p.then(()=> {
            isShow.value = false;
        })
    }
</script>
