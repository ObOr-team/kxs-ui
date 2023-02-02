<script lang="ts" setup>
    import KButton from "../kbutton/KButton.vue"
    import {defineProps, computed, ref} from 'vue'
    const props = defineProps({
        // 提示框类型：info（默认）、confirm、warning、error
        type: {
            type: String,
            default: "info"
        },
        // 主题颜色：头部背景颜色、图标颜色、确认按钮颜色
        themeColor: {
            type: String,
            default: ""
        },
        // 标题文字颜色
        titleColor: {
            type: String,
            default: "white"
        },
        // 提示框内容文字颜色
        contentColor: {
            type: String,
            default: "black"
        },
        // 标题文本
        titleText: {
            type: String,
            default: ""
        },
        // 提示框内容文本
        contentText: {
            type: String,
            default: ""
        },
        // 确认按钮文本
        confirmBtnText: {
            type: String,
            default: "确认"
        },
        // 取消按钮文本
        cancelBtnText: {
            type: String,
            default: "取消"
        },
        // 是否显示右上角的关闭按钮
        closable: {
            type: Boolean,
            default: true
        },
        // 底部按钮：both、confirm、cancel、null
        footerBtn: {
            type: String,
            default: "both"
        },
        // TODO: 确定按钮loading（异步确认关闭）
        // confirmLoading: {
        //     type: Boolean,
        //     default: false
        // },
        // 对话框整体宽度
        width: {
            type: String,
            default: "500px"
        },
        // 对话框整体高度
        height: {
            type: String,
            default: "200px"
        },
        // 位置：top、center
        location: {
            type: String,
            default: "top"
        },
        // 确定按钮点击事件
        confirmClick: {
            type: Function,
            default: function () {}
        },
        // 取消按钮点击事件
        cancelClick: {
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

    //是否渲染dialog组件
    let isShow: any = ref(true);
    // 点击确定按钮
    let confirmClick = () => {
        props.confirmClick();
        isShow.value = false;
    };
    // 点击取消按钮
    let cancelClick = () => {
        props.cancelClick();
        isShow.value = false;
    };
    // 点击关闭按钮
    let closeClick = () => isShow.value = false;
</script>

<template>
    <div class="dialog" v-if="isShow" :style="[Object.assign(sizeCss, locationCss)]">
        <div class="dialog-inner">
            <!-- 标题 -->
            <div class="title" :style="[bgColorCss]">
                <span :style="[tColorCss]">{{ props.titleText }}</span>
                <k-button class="closeBtn" v-if="closable" type="default" :onclick="closeClick">×</k-button>
            </div>
            <div class="base">
                <!-- 内容 -->
                <div class="content">
                    <!-- info类型不展示图标 -->
                    <div v-if="!(props.type === 'info')" class="icon-box">
                        <div v-if="props.type === 'confirm'">
                            <svg t="1674706383088" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3884">
                                <path :fill=themeColor d="M316.8 454.08a32 32 0 0 0-22.613333 9.386667 32 32 0 0 0 0 45.226666l135.786666 135.786667a32 32 0 0 0 45.226667-45.226667L339.413333 463.466667a32 32 0 0 0-22.613333-9.386667z" p-id="3885"></path>
                                <path :fill=themeColor d="M829.28 213.333333a32 32 0 0 0-22.666667 9.386667l-376.64 376.533333a32 32 0 1 0 45.226667 45.226667l376.693333-376.693333a32 32 0 0 0 0-45.226667 32 32 0 0 0-22.613333-9.226667z" p-id="3886"></path>
                                <path :fill=themeColor d="M512 64c-5.333333 0-10.666667 0-16 0.266667C259.573333 72.426667 68.48 266.666667 64 503.466667A448 448 0 0 0 508 960H512c241.44 0 441.653333-194.346667 448-436.16A445.706667 445.706667 0 0 0 928.426667 346.666667a32 32 0 0 0-51.626667-11.413334 32 32 0 0 0-7.466667 35.68 384 384 0 0 1-320.853333 523.413334c-12.16 1.12-24.266667 1.653333-36.213333 1.653333a384 384 0 0 1-19.2-767.52C499.413333 128 505.706667 128 512 128a381.28 381.28 0 0 1 206.186667 60.266667 32 32 0 0 0 17.226666 5.333333 30.826667 30.826667 0 0 0 21.333334-8.266667l1.6-1.493333a31.093333 31.093333 0 0 0-4.586667-48.853333A445.28 445.28 0 0 0 512 64z" p-id="3887"></path>
                            </svg>
                        </div>
                        <div v-else-if="props.type === 'warning'">
                            <svg t="1674704581605" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2851">
                                <path :fill=themeColor d="M959.256366 512C959.256366 264.98713 759.01287 64.743634 512 64.743634 264.98713 64.743634 64.743634 264.98713 64.743634 512 64.743634 759.01287 264.98713 959.256366 512 959.256366 759.01287 959.256366 959.256366 759.01287 959.256366 512L959.256366 512 959.256366 512 959.256366 512 959.256366 512 959.256366 512ZM117.36203 512C117.36203 294.047467 294.047467 117.36203 512 117.36203 729.952533 117.36203 906.63797 294.047467 906.63797 512 906.63797 729.952533 729.952533 906.63797 512 906.63797 294.047467 906.63797 117.36203 729.952533 117.36203 512L117.36203 512 117.36203 512 117.36203 512 117.36203 512 117.36203 512Z" p-id="2852"></path>
                                <path :fill=themeColor d="M484.457558 599.560299C484.457558 622.580963 495.008537 634.091122 516.110812 634.091122 537.213087 634.091122 547.764066 622.580963 547.764066 599.560299L547.764066 280.150193C547.764066 257.129529 537.213087 245.61937 516.110812 245.61937 495.008537 245.61937 484.457558 257.129529 484.457558 280.150193L484.457558 599.560299ZM478.702421 740.561158C480.62081 763.581821 493.090149 775.091981 516.110812 775.091981 539.131476 775.091981 551.600815 763.581821 553.519203 740.561158 551.600815 717.540494 539.131476 705.071155 516.110812 703.152767 493.090149 705.071155 480.62081 717.540494 478.702421 740.561158L478.702421 740.561158Z" p-id="2853"></path>
                            </svg>
                        </div>
                        <div v-else-if="props.type === 'error'">
                            <svg t="1674726012094" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3499">
                                <path :fill=themeColor d="M331.274 684.336c8.978 8.977 23.545 8.977 32.523 0l148.966-148.991 148.992 148.991c8.978 8.977 23.521 8.977 32.5 0 8.978-8.979 9.001-23.522 0-32.501L545.287 502.844l148.969-148.969c8.978-8.976 8.978-23.522 0-32.5-8.979-8.978-23.522-9-32.5 0l-148.992 148.97L363.797 321.354c-8.979-8.957-23.501-8.957-32.479 0-8.978 8.978-8.978 23.545 0 32.521l148.946 148.969L331.274 651.835C322.316 660.813 322.316 675.357 331.274 684.336zM949.233 510.295c0-241.061-195.408-436.468-436.47-436.468-241.061 0-436.468 195.407-436.468 436.468s195.407 436.469 436.468 436.469c98.961 0 189.572-33.667 262.79-89.153 3.006-3.409 4.983-7.766 4.983-12.658 0-10.683-8.666-19.348-19.35-19.348-5.544 0-10.482 2.2-14.006 5.927l-0.246 0c-65.519 48.211-146.164 77.075-233.743 77.075-218.282 0-395.261-177.004-395.261-395.26 0-218.302 176.979-395.258 395.261-395.258 218.3 0 395.258 176.956 395.258 395.258 0 66.664-15.645 129.421-44.821 184.545l0 0.314c-0.54 1.842-1.123 3.636-1.123 5.61 0 10.684 8.664 19.349 19.347 19.349 8.328 0 15.286-5.343 18.001-12.704l0 0.136C930.941 650.533 949.233 582.568 949.233 510.295z" p-id="3500"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="info" :style="[conColorCss]">{{ props.contentText }}</div>
                </div>
                <!-- 底部按钮 -->
                <div class="footerBox" v-if="!(props.footerBtn === 'null')">
                    <k-button class="footerBtn confirmBtn" v-if = "isConfirmBtnShow" :style="[bgColorCss]" :onclick="confirmClick">{{ props.confirmBtnText }}</k-button>
                    <k-button class="footerBtn cancelBtn" v-if = "isCancelBtnShow" :onclick="cancelClick">{{ props.cancelBtnText }}</k-button>
                </div>
            </div>
        </div>
    </div>
</template>

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
    }
    .dialog-inner {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 0 10px #DDD;
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
        position: relative;
        span {
            position: absolute;
            top: 50%;
            transform: translate(0%, -50%);
            padding-left: 15px;
            color: white;
        }
        .closeBtn {
            height: 50%;
            aspect-ratio: 1 / 1; // 宽高比为1:1
            padding: 0; // 有padding此属性无效
            float: right;
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

            .icon {
                width:25px;
                height: 25px;
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
        }
    }
</style>