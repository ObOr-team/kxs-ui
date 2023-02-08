<script lang="ts" setup>
    //引入KDialog组件
    import KDialog from "@/components/kdialog/KDialog.vue"
    // 引入ref处理响应式数据
    import { ref } from 'vue'

    // 是否展示对话框组件
    let isShow: any = ref([false, false, false, false]);
    // 点击按钮显示对应对话框
    let clickToShow = (i:number) => {
        // TODO: BUG：连续点击一个按钮，响应式数据失效，对话框不显示
        isShow.value.forEach((item:boolean, index:number) => isShow.value[index] = false);
        isShow.value[i] = true;
    }

</script>

<template>
    <!-- 类型：info、confirm、warning、error -->
    <div>
        <k-button :onclick = "() => {clickToShow(0)}">info</k-button>
        <k-dialog v-if = "isShow[0]"
        titleText = "Title"
        contentText = "Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents..."
        ></k-dialog>

        <k-button :onclick = "() => {clickToShow(1)}">confirm</k-button>
        <k-dialog v-if = "isShow[1]"
        titleText = "Title"
        contentText = "Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents..."
        type="confirm"
        ></k-dialog>

        <k-button :onclick = "() => {clickToShow(2)}">warning</k-button>
        <k-dialog v-if = "isShow[2]"
        titleText = "Are you sure delete this task?"
        contentText = "Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents..."
        type="warning"
        ></k-dialog>

        <k-button :onclick = "() => {clickToShow(3)}">error</k-button>
        <k-dialog v-if = "isShow[3]"
        titleText = "A serious error has occurred here !"
        contentText = "It needs to be updated online. Please confirm that your network connection is normal and try again."
        type="error"
        ></k-dialog>

        <k-preview  compName="Dialog" demoName="DialogType"/>
    </div>
</template>