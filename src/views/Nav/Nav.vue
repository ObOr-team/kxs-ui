<template>

       

   <div>
    <h3>横向导航栏</h3>
      <k-menu Perpendicular>
            <k-nav index="1">横向导航栏1</k-nav>
            <k-nav index="2">横向导航栏2</k-nav>
            <k-nav index="3">横向导航栏3</k-nav>
            <k-nav index="4" disabled>横向导航栏4</k-nav>
            <k-nav index="5" disabled>横向导航栏5</k-nav>
      </k-menu>
    </div>
  <h3>竖向导航栏</h3>
  <div class="bottom"> 
      <div>
      <p>图标在前</p>
      <k-menu>
      <k-nav index="7"   frontIcon="sousuo">竖向导航栏1</k-nav>
      <k-nav index="8"   frontIcon="tianjia">竖向导航栏2</k-nav>
      <k-nav index="9"   frontIcon="shezhi-xianxing">竖向导航栏3</k-nav>
      <k-nav index="10" disabled   frontIcon="xiazai">竖向导航栏4</k-nav>
      <k-nav index="11" disabled   frontIcon="bianjixiugai">竖向导航栏5</k-nav>
      <k-nav index="12" disabled   frontIcon="shanchu">竖向导航栏6</k-nav>
      </k-menu>
    </div>
    <div>
      <p>图标在后</p>
      <k-menu>
      <k-nav index="13"   behindIcon="sousuo">竖向导航栏1</k-nav>
      <k-nav index="14"   behindIcon="tianjia">竖向导航栏2</k-nav>
      <k-nav index="15"   behindIcon="shezhi-xianxing">竖向导航栏3</k-nav>
      <k-nav index="16" disabled   behindIcon="xiazai">竖向导航栏4</k-nav>
      <k-nav index="17" disabled   behindIcon="bianjixiugai">竖向导航栏5</k-nav>
      <k-nav index="18" disabled   behindIcon="shanchu">竖向导航栏6</k-nav>
      </k-menu>
    </div> 

  </div> 

</template>

<script lang="ts" setup>

import KNav from '../../components/knav/KNav.vue'
import kMenu from '../../components/knav/kMenu.vue'



</script>
<style lang="scss" scoped>
.bottom{
  display: flex;
  justify-content: space-around;
}
</style>
