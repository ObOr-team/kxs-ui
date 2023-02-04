<template>

    <div class="carousel" :style='{
            width: carouselW + "px",
            height: carouselH + "px"
        }'>
        <label :class="isHorizontal===true ? 'label_left':'label_up'" @click="previousBtn" @mousemove="mouseover" @mouseout="mouseout">
            <svg v-if="isHorizontal===true ? true : false" t="1675488886083" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1875" width="30" height="30"><path d="M731.6992 909.131776c8.660992 7.86432 8.660992 21.25824 0 29.12256-7.878656 8.6528-21.245952 8.6528-29.126656 0L290.922496 526.600192c-7.878656-7.86432-7.878656-21.260288 0-29.124608L702.57664 85.819392c7.880704-7.86432 21.248-7.86432 29.126656 0 8.660992 7.86432 8.660992 21.260288 0 29.124608L334.999552 512.444416 731.6992 909.131776z" p-id="1876"></path></svg>
            <svg v-if="isHorizontal===false ? true : false" t="1675488740890" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1608" width="30" height="30"><path d="M908.406784 732.42624c7.86432 8.66304 21.25824 8.66304 29.12256 0 8.650752-7.876608 8.650752-21.245952 0-29.124608L525.873152 291.647488c-7.86432-7.878656-21.260288-7.878656-29.124608 0L85.0944 703.301632c-7.86432 7.878656-7.86432 21.248 0 29.124608 7.86432 8.66304 21.260288 8.66304 29.124608 0l397.500416-396.699648L908.406784 732.42624z" p-id="1609"></path></svg>
        </label>
        <!--水平样式-->
        <ul :style='{
            width: ul_w + "px",
            left: ul_left + "px"
        }'
        v-if="isHorizontal===true ? true : false"
        >
            <li v-for="(i, id) in imgData"
                :style='{
                width: carouselW + "px",
                height: carouselH + "px"
                }'
            >
                <img :src="i.url" 
                    :style='{
                    width: carouselW + "px",
                    height: carouselH + "px"
                    }'
                >
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
            <li v-for="(i, id) in imgData"
                :style='{
                width: carouselW + "px",
                height: carouselH + "px"
                }'
            >
                <img :src="i.url" 
                    :style='{
                    width: carouselW+"px",
                    height: carouselH + "px"
                    }'
                >
               
            </li>
        </ul>
        <label :class="isHorizontal===true ? 'label_right':'label_down'"  @click="nextBtn" @mousemove="mouseover" @mouseout="mouseout">
            <svg v-if="isHorizontal===true ? true : false" t="1675488923875" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2046" width="30" height="30"><path d="M688.211968 512.444416 291.510272 114.944c-8.660992-7.86432-8.660992-21.260288 0-29.124608 7.878656-7.86432 21.245952-7.86432 29.126656 0l411.654144 411.656192c7.878656 7.86432 7.878656 21.260288 0 29.124608L320.638976 938.254336c-7.880704 8.6528-21.248 8.6528-29.126656 0-8.660992-7.86432-8.660992-21.25824 0-29.12256L688.211968 512.444416z" p-id="2047"></path></svg>
            <svg v-if="isHorizontal===false ? true : false" t="1675488945436" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2217" width="30" height="30"><path d="M908.406784 292.237312c7.86432-8.66304 21.25824-8.66304 29.12256 0 8.650752 7.876608 8.650752 21.245952 0 29.124608L525.873152 733.016064c-7.86432 7.878656-21.260288 7.878656-29.124608 0L85.0944 321.36192c-7.86432-7.878656-7.86432-21.248 0-29.124608 7.86432-8.66304 21.260288-8.66304 29.124608 0l397.500416 396.699648L908.406784 292.237312z" p-id="2218"></path></svg>
        </label>


        <div class="pointerBtnHorizontal"
        @mousemove="mouseover" @mouseout="mouseout"
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
        @mousemove="mouseover" @mouseout="mouseout" 
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
    carouselW:{
        type:Number,
        default:671
    },
    carouselH:{
        type:Number,
        default:300
    },
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
const carouselW =toRef(props,"carouselW");
const carouselH =toRef(props,"carouselH");
const autoplay =toRef(props,"autoplay");
const imgData=toRef(props,"imgData")
const showPointer=toRef(props,"showPointer")
const isHorizontal=toRef(props,"isHorizontal")
let lock = true;//锁
//根据图片数量计算ul宽度或高度
let ul_w = ref(imgData.value.length * carouselW.value)
let ul_left = ref(1)
let ul_h = ref(imgData.value.length * carouselH.value)
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
    ul_left.value = -(index.value) * carouselW.value
    ul_top.value = -(index.value) * carouselH.value
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
    ul_left.value = -(index.value) * carouselW.value
    ul_top.value = -(index.value) * carouselH.value
    clearTimeout(ulMove)
    setTimeout(function () {
            lock = true;
        }, 1000);
}
//指示点事件
const pEventBtn = function (id: number) {
    index.value = id;
    ul_left.value = -(index.value) * carouselW.value
    ul_top.value = -(index.value) * carouselH.value
    clearTimeout(ulMove)
}
//自动播放
let ulMove =setInterval(()=>{
    if (index.value < imgData.value.length - 1) {
        ++index.value
    } else {
        index.value = 0
    }
    ul_left.value = -(index.value) * carouselW.value
    ul_top.value = -(index.value) * carouselH.value
},autoplay.value)
const mouseover=function(){
    clearTimeout(ulMove)
}
const mouseout=function(){
    ulMove =setInterval(()=>{
    if (index.value < imgData.value.length - 1) {
        ++index.value
    } else {
        index.value = 0
    }
    ul_left.value = -(index.value) * carouselW.value
    ul_top.value = -(index.value) * carouselH.value
},autoplay.value)
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

.carousel {
    margin: 20px auto;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    ul {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        transition: left 1s;/*过渡*/ 
        li {
            float: left;
        }
    }
}
.carousel ul.ulVertical{
    display: block;
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
    border-radius: 20px;
}
.carousel label:hover{
    background-color: #999999;
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