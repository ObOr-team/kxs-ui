<script lang="ts" setup>
    import demo1 from './demo1.vue' 
    import demo2 from './demo2.vue' 
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
</script>

## Carousel 轮播图

### ● 基础轮播图  
<p>在有限空间内，循环播放同一类型的图片、文字等内容</p>
<div class="borderBox">
    <demo1/>
    <k-preview compname="carousel" demoname="demo1"/>
</div>


### ● 指示点
<p><code>showPointer</code>属性定义了是否显示指示器。 默认情况下设置为 true ，设置为 false 则不会显示指示器。</p> 
<div class="borderBox">
    <demo2/>
    <k-preview compname="carousel" demoName="demo2"/> 
</div>

### ● 垂直轮播图
<p><code>isHorizontal</code>属性定义了是否垂直显示轮播图。 默认情况下设置为 true，显示为水平轮播图。设置为 false 则可以让轮播图在垂直方向上显示。</p> 
<div class="borderBox">
    <demo3/>
    <k-preview compname="carousel" demoName="demo3"/> 
</div>

### ● 卡片式播图
<p>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格。交互效果不弱于标准轮播图。</p> 
<div class="borderBox">
    <demo4/> 
    <k-preview compname="carousel" demoname="demo4"/>
</div>


### Carousel Attributes
|      参数      |                        说明                        |   类型   | 默认值  |
| :----------------: | :------------------------------------------------: | :------: | :-----: |
|    carouselW   |      轮播图长度                                      |  number  | 671        |
|    carouselH   |      轮播图宽度                                      |  number  |    300     |
|     imgData    |      轮播图图片数据                                  |  Object  | [ ]         |
|    autoplay    |      自动播放时间间距                                |  number  | 2000        |
|  showPointer   |        是否显示指示点                                |  boolead  |    true    |
|  isHorizontal  |      是否水平显示                                    |  boolead  | true      |
