<template>

    <div class="carousel">
        <label :class="isHorizontal===true ? 'label_left':'label_up'" @click="previousBtn"></label>
        <!--水平样式-->
        <ul :style='{
            width: ul_w + "px",
            left: ul_left + "px"
        }'
        v-if="isHorizontal===true ? true : false"
        >
            <li v-for="(i, id) in imgData">
                <img :src="i.url" alt="">
            </li>
        </ul>
        <!--垂直样式-->
        <ul :style='{
            height: ul_h + "px",
            top: ul_top + "px"
        }'
        class="ulVertical"
        v-if="isHorizontal===true ? false : true"
        >
            <li v-for="(i, id) in imgData">
                <img :src="i.url" alt="">
            </li>
        </ul>
        <label :class="isHorizontal===true ? 'label_right':'label_down'"  @click="nextBtn"></label>


        <div class="pointerBtnHorizontal" 
        v-if="isHorizontal===true"
        :style='{
            width: pointerLength + "px"
        }'
        v-show="showPointer"
        >
            <p v-for="item of imgData" :key="item.id" :class='item.id === p_index ? "p_class" : ""' @click="pEventBtn(item.id)">
            </p>
        </div>

        <div class="pointerBtnVertical" 
        v-if="isHorizontal===false"
        v-show="showPointer"
        >
            <p v-for="item of imgData" :key="item.id" :class='item.id === p_index ? "p_class" : ""' @click="pEventBtn(item.id)">
            </p>
        </div>
    </div>

</template>


<script lang="ts" setup>
import { ref, toRef, watch } from "vue"
const props = defineProps({
    autoplay:{
        type:Number,
        default:2000
    },
    imgData:{
        type:Object,
        default:[]
    },
    showPointer:{
        type:Boolean,
        default:"true"
    },
    isHorizontal:{
        type:Boolean,
        default:"true"
    }
})
const autoplay =toRef(props,"autoplay");
const imgData=toRef(props,"imgData")
const showPointer=toRef(props,"showPointer")
const isHorizontal=toRef(props,"isHorizontal")
let lock = true;//锁
//根据图片数量计算ul宽度或高度
let ul_w = ref(imgData.value.length * 800)
let ul_left = ref(1)
let ul_h = ref(imgData.value.length * 494)
let ul_top = ref(1)
//当前轮播图索引
let index = ref(0)
//根据图片数量计算指示点总长度
let pointerLength = ref(0);
pointerLength.value = (10 + 10) * imgData.value.length
//指示点索引
let p_index = ref(0)
watch(index, (new_val, old_val) => {//使用watch监听轮播图图片索引值
    p_index.value = new_val
})
//轮播图相关事件区
//右或下按钮
const nextBtn = function () {
    if (!lock) return;
        lock = false;
    if (index.value < imgData.value.length - 1) {
        index.value++
    } else {
        index.value = 0
    }
    ul_left.value = -(index.value) * 800
    ul_top.value = -(index.value) * 494
    clearTimeout(ulMove)//清除定时器
    setTimeout(function () {
            lock = true;
        }, 1000);
}
//左或上按钮
const previousBtn = function () {
    if (!lock) return;
        lock = false;
    if (index.value > 0) {
        index.value--
    } else {
        index.value = imgData.value.length - 1
    }
    ul_left.value = -(index.value) * 800
    ul_top.value = -(index.value) * 494
    clearTimeout(ulMove)
    setTimeout(function () {
            lock = true;
        }, 1000);
}
//指示点事件
const pEventBtn = function (id: number) {
    index.value = id;
    ul_left.value = -(index.value) * 800
    ul_top.value = -(index.value) * 494
    clearTimeout(ulMove)
}
//自动播放
let ulMove =setInterval(()=>{
    if (index.value < imgData.value.length - 1) {
        ++index.value
    } else {
        index.value = 0
    }
    ul_left.value = -(index.value) * 800
    ul_top.value = -(index.value) * 494
},autoplay.value)

</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

.carousel {
    width: 800px;
    height: 494px;
    margin: 20px auto;
    overflow: hidden;
    border-radius: 10px;
    position: relative;

    ul {
        display: block;
        height: 494px;
        position: absolute;
        top: 0;
        left: 0;
        transition: left 1s;/*过渡*/ 
        li {
            float: left;
            width: 800px;
            height: 494px;

            img {
                width: 800px;
                height: 494px;
            }
        }
    }
}
.carousel ul.ulVertical{
    display: block;
    height: 494px;
    position: absolute;
    top: 0;
    left: 0;
    transition: top 1s;
}
.carousel label{
    width: 30px;
    height: 30px;
    display: block;
    position: absolute;
    z-index: 10;
    background-color: rgba(230, 12, 12, 0.932);
    border-radius: 10px;
}

.carousel .label_left {
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
}
.carousel .label_right {
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
}
.carousel .label_up {
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
}
.carousel .label_down {
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
}


.pointerBtnHorizontal {
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;

    p {
        float: left;
        width: 10px;
        height: 10px;
        margin-right: 10px;
        border-radius: 100%;
        cursor: pointer;
        background-color: #00CCFF;
    }
}
.pointerBtnVertical {
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;

    p {
        float: top;
        width: 10px;
        height: 10px;
        margin-bottom: 10px;
        border-radius: 100%;
        cursor: pointer;
        background-color: #00CCFF;
    }
}

.pointerBtnVertical p.p_class ,
.pointerBtnHorizontal p.p_class {
    background-color: #3399FF
}

.pointerBtnVertical p:hover ,
.pointerBtnHorizontal p:hover {
    background-color: #3399FF;
}
</style>