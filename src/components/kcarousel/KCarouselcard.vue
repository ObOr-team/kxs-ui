<template>

    <div class="out"> 
        <label class="leftBtn" @click="previousBtn" @mousemove="mouseover" @mouseout="mouseout">
            <svg  t="1675488886083" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1875" width="30" height="30"><path d="M731.6992 909.131776c8.660992 7.86432 8.660992 21.25824 0 29.12256-7.878656 8.6528-21.245952 8.6528-29.126656 0L290.922496 526.600192c-7.878656-7.86432-7.878656-21.260288 0-29.124608L702.57664 85.819392c7.880704-7.86432 21.248-7.86432 29.126656 0 8.660992 7.86432 8.660992 21.260288 0 29.124608L334.999552 512.444416 731.6992 909.131776z" p-id="1876"></path></svg>
        </label>
        <div class="inner">
            <div class="img" v-for="(item, id) in imgData" ref="imgdom">
            <img :src="item.url" 
                :style='{
                width: carouselW + "px",
                height: carouselH + "px"
                }'
            >
        </div >
        </div>
        
        <label  class="rightBtn" @click="nextBtn" @mousemove="mouseover" @mouseout="mouseout">
            <svg  t="1675488923875" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2046" width="30" height="30"><path d="M688.211968 512.444416 291.510272 114.944c-8.660992-7.86432-8.660992-21.260288 0-29.124608 7.878656-7.86432 21.245952-7.86432 29.126656 0l411.654144 411.656192c7.878656 7.86432 7.878656 21.260288 0 29.124608L320.638976 938.254336c-7.880704 8.6528-21.248 8.6528-29.126656 0-8.660992-7.86432-8.660992-21.25824 0-29.12256L688.211968 512.444416z" p-id="2047"></path></svg>
        </label>
        <div class="pointerBtn"
        @mousemove="mouseover" @mouseout="mouseout" 
        :style='{
            width: pointerLength + "px"
        }'
        v-show="showPointer"
        >
            <p v-for="item of imgData" :key="item.id" :class='item.id === p_index ? "p_class" : ""' @click="pEventBtn(item.id)">
            </p>
        </div>
    </div>

</template>


<script lang="ts" setup>
import { ref, toRef, watch,onMounted } from "vue"
const props = defineProps({
    carouselW:{
        type:Number,
        default:400
    },
    carouselH:{
        type:Number,
        default:200
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
})
const carouselW =toRef(props,"carouselW");
const carouselH =toRef(props,"carouselH");
const autoplay =toRef(props,"autoplay");
const imgData=toRef(props,"imgData")
const showPointer=toRef(props,"showPointer")
let imgdom =ref(null)
let idArr: string[]=[]
if(imgData.value.length>=5){
    idArr[0]="first";idArr[1]="second";idArr[2]="right"
    for(let i=3;i<imgData.value.length-2;i++){
        idArr[i]="left"
    }
    idArr[imgData.value.length-1]="last"
}else{
    if(imgData.value.length==3){idArr = ["first", "second","last"];}
    if(imgData.value.length==4)idArr = ["first", "second", "right", "last"];
}
onMounted(()=>{
    initialize()
  })
let lock = true;//锁
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
//右按钮
const nextBtn = function () {
    if (!lock) return;
    lock = false;
    idArr.unshift(idArr.pop());
    initialize();
    if (index.value === imgData.value.length - 1) {
      index.value = 0;
    } else {
      index.value++;
    }
    clearTimeout(ulMove)
    setTimeout(function () {
            lock = true;
        }, 700);
}
//左按钮
const previousBtn = function () {
    if (!lock) return;
    lock = false;
    idArr.push(idArr.shift());
    initialize();
    if (index.value === 0) {
      index.value = imgData.value.length - 1;
    } else {
      index.value--;
    }
    clearTimeout(ulMove)
    setTimeout(function () {
            lock = true;
        }, 700);
}
//指示点事件
const pEventBtn = function (id: number) {
      //这里需要判断用户点击的小方块与当前图片的索引之差，如果
      //大于0，则表明用户需要更换的是后面的图片，反之，表明用户
      //需要更换之前也就是前面的图片
      if (index.value > id) {
        let x = index.value - id;
        while (x--) {
            idArr.push(idArr.shift());
    initialize();
    if (index.value === 0) {
      index.value = imgData.value.length - 1;
    } else {
      index.value--;
    }
            console.log("x")
        }
      } else if (index.value < id) {
        let x = id - index.value;
        while (x--) {
            idArr.unshift(idArr.pop());
    initialize();
    if (index.value === imgData.value.length - 1) {
      index.value = 0;
    } else {
      index.value++;
    }
        }
      }

}
//自动播放
let ulMove =setInterval(()=>{
    idArr.unshift(idArr.pop());
    initialize();
    if (index.value === imgData.value.length - 1) {
      index.value = 0;
    } else {
      index.value++;
    }
},autoplay.value)
const mouseover=function(){
    clearTimeout(ulMove)
}
const mouseout=function(){
    ulMove =setInterval(()=>{
        idArr.unshift(idArr.pop());
    initialize();
    if (index.value === imgData.value.length - 1) {
      index.value = 0;
    } else {
      index.value++;
    }
},autoplay.value)
}
function initialize(){
    for (let i = 0; i < imgdom.value.length; i++) {
      imgdom.value[i].id = idArr[i];
    }
};
  
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

.out {
  width: 800px;
  height: 280px;
  position: relative;
  margin: 0 auto;
  top: 30px;
  .inner {
    width: 100%;
    height: 260px;
    .img {
      width: 400px;
      height: 200px;
      position: absolute;
      transition: 0.7s;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.out label{
    width: 30px;
    height: 30px;
    display: block;
    position: absolute;
    z-index: 10;
    border-radius: 20px;
    top: 115px;
    transform: translateY(-50%);
}
.leftBtn{
    left: 0; 
}
.rightBtn{
    right: 0;
}
.out label:hover{
    background-color: #999999;
}


.pointerBtn{
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

.pointerBtn p.p_class {
    background-color: #3399FF
}

.pointerBtn p:hover {
    background-color: #3399FF;
}
#last {
    transform: translateX(0);
    z-index: 9;
    opacity: 1;
  }
  #first {
    transform: translateX(200px) scale(1.3);
    z-index: 99;
    opacity: 1;
  }
  #second {
    transform: translateX(400px);
    z-index: 9;
    opacity: 1;
  }
  #left {
    transform: translateX(-100px);
    z-index: 1;
    opacity: 0;
  }
  #right {
    transform: translateX(500px);
    z-index: 1;
    opacity: 0;
  }
</style>