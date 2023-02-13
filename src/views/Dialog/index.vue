<template>
    <div class="dialog" v-if="isShow" :style="[Object.assign(sizeCss, locationCss)]">
        <div class="dialog-inner">
            <!-- 标题 -->
            <div class="title" :style="[bgColorCss]">
                <span :style="[tColorCss]">{{ props.titleText }}</span>
                <k-button class="closeBtn" v-if="closable" type="default" :onclick="closeClick" icon="k-icon-xianxingguanbi" :style="[bgColorCss,tColorCss]"></k-button>
            </div>
            <div class="base">
                <!-- 内容 -->
                <div class="content">
                    <!-- info类型不展示图标 -->
                    <div v-if="!(props.type === 'info')" class="icon-box">
                        <i :class="iconType" :style="{color:themeColor}"></i>
                    </div>
                    <div class="info" :style="[conColorCss]">{{ props.contentText }}</div>
                </div>
                <!-- 底部按钮 -->
                <div class="footerBox" v-if="!(props.footerBtn === 'null')">
                    <k-button class="footerBtn confirmBtn" v-if = "isConfirmBtnShow" :style="[bgColorCss]" :onclick="confirmClick" :icon="confirmIcon" :loading="isLoading">{{ props.confirmBtnText }}</k-button>
                    <k-button class="footerBtn cancelBtn" v-if = "isCancelBtnShow" :onclick="cancelClick">{{ props.cancelBtnText }}</k-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name:"kDialog"
}
</script>
<script lang="ts" setup>
    import {computed, ref} from 'vue'
    const props = defineProps({
        type: { // 提示框类型：info（默认）、confirm、warning、error
            type: String,
            default: "info"
        },
        themeColor: { // 主题颜色：头部背景颜色、图标颜色、确认按钮颜色
            type: String,
            default: ""
        },
        titleColor: { // 标题文字颜色
            type: String,
            default: "white"
        },
        contentColor: { // 提示框内容文字颜色
            type: String,
            default: "black"
        },
        titleText: { // 标题文本
            type: String,
            default: ""
        },
        contentText: { // 提示框内容文本
            type: String,
            default: ""
        },
        confirmBtnText: { // 确认按钮文本
            type: String,
            default: "确认"
        },
        cancelBtnText: { // 取消按钮文本
            type: String,
            default: "取消"
        },
        closable: { // 是否显示右上角的关闭按钮
            type: Boolean,
            default: true
        },
        footerBtn: { // 底部按钮：both、confirm、cancel、null
            type: String,
            default: "both"
        },
        confirmLoading: { // 确定按钮loading（异步确认关闭）
            type: Boolean,
            default: false
        },
        width: { // 对话框整体宽度
            type: String,
            default: "500px"
        },
        height: { // 对话框整体高度
            type: String,
            default: "200px"
        },
        location: { // 位置：top、center
            type: String,
            default: "top"
        },
        confirmClick: { // 确定按钮点击事件
            type: Function,
            default: function () {}
        },
        cancelClick: { // 取消按钮点击事件
            type: Function,
            default: function () {}
        }
    });
    
    // 所有主题颜色对象
    const themeColors = {
        confirm: "#2ECC71",
        warning: "#F39C12",
        error: "#E74C3C",
        info: "#3498DB"
    };
    // 主题颜色
    const themeColor = computed(() => {
        if(props.themeColor === ""){
            switch(props.type) {
                case "confirm":
                    return themeColors.confirm;
                case "warning":
                    return themeColors.warning;
                case "error":
                    return themeColors.error;
                case "info":
                    return themeColors.info;
            }
        }
        return props.themeColor;
    });
    // 背景颜色的css
    const bgColorCss = computed(() => {
        return {background: themeColor.value};
    });
    // 标题字体颜色
    const tColorCss = computed(() => {
        return {color: props.titleColor};
    });
    // 标题字体颜色
    const conColorCss = computed(() => {
        return {color: props.contentColor};
    });
    // 不同类型的提示框的图标
    const iconType = computed(() => {
        switch(props.type) {
            case "confirm":
                return "k-icon-check_circle_line";
            case "warning":
                return "k-icon-zhuyi";
            case "error":
                return "k-icon-guanbi";
            case "info":
                return "";
        }
    });
    // 是否显示右上角的关闭按钮
    const closable = computed(() => {
        if(props.closable === true) return true;
        return false;
    });
    // 是否展示底部确认按钮
    const isConfirmBtnShow = computed(() => {
        if(props.footerBtn === "both" || props.footerBtn === "confirm") return true;
        else return false;
    });
    // 是否展示底部取消按钮
    const isCancelBtnShow = computed(() => {
        if(props.footerBtn === "both" || props.footerBtn === "cancel") return true;
        else return false;
    });
    // 对话框尺寸
    const sizeCss = computed(() => {
        return {width: props.width, height: props.height};
    });
    // 对话框位置
    const locationCss = computed(() => {
        if(props.location === "top") return {top: '25%'};
        return {top: '50%'};
    });

    // 确认按钮图标
    let confirmIcon:any = ref("");
    // 确认按钮是否异步
    let isLoading:any = ref(false);
    //是否渲染dialog组件
    let isShow: any = ref(true);
    // 点击确定按钮
    let confirmClick = () => {
        if(props.confirmLoading) {
            isLoading.value = true;
            confirmIcon.value = "k-icon-jiazai";
        } else {
            
            isShow.value = false;
        }
        props.confirmClick();
    };
    // 点击取消按钮
    let cancelClick = () => {
        props.cancelClick();
        isShow.value = false;
    };
    // 点击关闭按钮
    let closeClick = () => isShow.value = false;
</script>
<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .dialog {
        position: fixed;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        z-index: 1000;
    }
    .dialog-inner {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 0 10px rgba($color: #888, $alpha: 0.3);
        // 动画
        -webkit-animation: scale-up-center 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	    animation: scale-up-center 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
    @-webkit-keyframes scale-up-center {
        0% { -webkit-transform: scale(0.5); transform: scale(0.5); }
        100% { -webkit-transform: scale(1); transform: scale(1);}
    }
    @keyframes scale-up-center {
        0% { -webkit-transform: scale(0.5); transform: scale(0.5); }
        100% { -webkit-transform: scale(1); transform: scale(1); }
    }
    .title {
        height: 20%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-between;
        span {
            color: white;
            margin-left: 10px;
            margin-bottom: 0;
        }
        .closeBtn {
            padding: 0; // 有padding此属性无效
            margin: 0 10px;
            border: 0;
        }
    }
    .base{
        height: 80%;
        width: 100%;
        background-color: white;
        padding: 20px 20px 10px;
    }
    .content {
        height: 75%;
        width: 100%;
        display: flex;
        .icon-box {
            flex: 1;
            padding: 10px;
            i {
                font-size: 25px;
            }
        }
        .info {
            flex: 11;
            font-size: 0.9rem;
        }
    }
    .footerBox {
        height: 25%;
        width: 100%;
        .footerBtn {
            height: 70%;
            aspect-ratio: 3 / 1; // 宽高比为3:1
            padding: 0; // 有padding此属性无效
            float: right;
            font-size: 13px;
            border-radius: 5px;
        }
        .confirmBtn {
            color: white;
        }
        .cancelBtn {
            color: #6C6C6C;
            margin-right: 10px;
        }
    }
</style>