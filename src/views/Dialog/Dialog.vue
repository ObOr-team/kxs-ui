<script lang="ts" setup>
    //引入KDialog组件
    import KDialog from "@/components/kdialog/KDialog.vue"
    // 引入ref处理响应式数据
    import { ref } from 'vue'

    // 是否展示对话框组件
    let isShow: any = ref([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
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

<template>
    <div>
        <!-- 类型：info、confirm、warning、error -->
        <div>
            <h3>●  类型</h3>
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
        </div>

        <!-- 尺寸大小 -->
        <div>
            <h3>●  自定义大小</h3>
            <k-button :onclick = "() => {clickToShow(4)}">600×200</k-button>
            <k-dialog v-if = "isShow[4]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            width="600px"
            height="200px"
            ></k-dialog>

            <k-button :onclick = "() => {clickToShow(5)}">400×170</k-button>
            <k-dialog v-if = "isShow[5]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            width="400px"
            height="170px"
            ></k-dialog>
        </div>

        <!-- 主题颜色 -->
        <div>
            <h3>●  自定义主题颜色</h3>
            <k-button :onclick = "() => {clickToShow(6)}">themeColor = "#1ABC9C"</k-button>
            <k-dialog v-if = "isShow[6]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            themeColor="#1ABC9C"
            ></k-dialog>
        </div>

        <!-- 位置 -->
        <div>
            <h3>●  位置</h3>
            <k-button :onclick = "() => {clickToShow(7)}">top</k-button>
            <k-dialog v-if = "isShow[7]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            location="top"
            ></k-dialog>

            <k-button :onclick = "() => {clickToShow(8)}">center</k-button>
            <k-dialog v-if = "isShow[8]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            location="center"
            ></k-dialog>
        </div>

        <!-- 按钮 -->
        <div>
            <h3>●  按钮</h3>
            <k-button :onclick = "() => {clickToShow(9)}">无关闭按钮</k-button>
            <k-dialog v-if = "isShow[9]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            :closable = false
            ></k-dialog>

            <k-button :onclick = "() => {clickToShow(10)}">仅含确认按钮</k-button>
            <k-dialog v-if = "isShow[10]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            footerBtn="confirm"
            ></k-dialog>

            <k-button :onclick = "() => {clickToShow(11)}">仅含取消按钮</k-button>
            <k-dialog v-if = "isShow[11]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            footerBtn="cancel"
            ></k-dialog>

            <k-button :onclick = "() => {clickToShow(12)}">不展示确认和取消按钮</k-button>
            <k-dialog v-if = "isShow[12]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            footerBtn="null"
            ></k-dialog>
        </div>

        <!-- 点击事件 -->
        <div>
            <h3>●  点击事件</h3>
            <k-button :onclick = "() => {clickToShow(13)}">确认按钮点击事件</k-button>
            <k-dialog v-if = "isShow[13]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            :confirmClick="confirmClick"
            ></k-dialog>

            <k-button :onclick = "() => {clickToShow(14)}">取消按钮点击事件</k-button>
            <k-dialog v-if = "isShow[14]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            :cancelClick="cancelClick"
            ></k-dialog>
        </div>
    </div>
</template>