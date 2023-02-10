<template>
    <div>
      <h3>● 基础轮播图</h3>
      <span>&nbsp&nbsp&nbsp&nbsp在有限空间内，循环播放同一类型的图片、文字等内容</span>
      <k-carousel  
        :imgData="imgData"
        :autoplay="2000"
        :showPointer="true"
        :isHorizontal="true"
      >
      </k-carousel>
      <h3>● 指示点</h3>
      <span>&nbsp&nbsp&nbsp&nbsp showPointer 属性定义了是否显示指示器。 默认情况下设置为 true ，设置为 false 则不会显示指示器。</span>
      <k-carousel  
        :imgData="imgData"
        :autoplay="2000"
        :showPointer="false"
        :isHorizontal="true"
      >
      </k-carousel>
    </div>
    <div>
      <h3>● 垂直轮播图</h3>
      <span>&nbsp&nbsp&nbsp&nbsp默认情况下 isHorizontal 为 true,显示为水平轮播图。 可以通过设置 isHorizontal 为 false 来让轮播图在垂直方向上显示。</span>
      <k-carousel  
        :imgData="imgData"
        :autoplay="2000"
        :showPointer="true"
        :isHorizontal="false"
      >
      </k-carousel>
    </div>
    <div>
      <h3>● 卡片式轮播图</h3>
      <span>&nbsp&nbsp&nbsp&nbsp当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格。</span>
      <k-carouselcard  
        :imgData="imgData"
        :autoplay="2000"
        :showPointer="true"
      >
      </k-carouselcard>
    </div>
</template>

<script lang="ts" setup>
import KCarousel from "../../components/kcarousel/KCarousel.vue"
import KCarouselcard from "../../components/kcarousel/KCarouselcard.vue"
let imgData = [
    {
        url: "https://img-blog.csdnimg.cn/bc3292108e9c4f3ab289d32ff8fba599.jpg",
        id: 0
    },
    {
        url: "https://img-blog.csdnimg.cn/96d9b0d116e943e69050d1cb09a3c068.jpg",
        id: 1
    },
    {
        url: "https://img-blog.csdnimg.cn/6309a2bf616d42449bd1a64594a31ad0.jpg",
        id: 2
    }, {
        url: "https://img-blog.csdnimg.cn/f70ea795c036419db9002a1d452ab01a.jpg",
        id: 3
    },
    {
        url: "https://img-blog.csdnimg.cn/3be574c4c3bf402689c52bf3d1c021de.png",
        id: 4
    },
]
</script>