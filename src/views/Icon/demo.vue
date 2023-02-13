<template>
	<p class="titlep">所有图标</p>
	<div class="">
		<k-input placeholder="输入图标关键词进行搜索" ></k-input>
	</div>
    <div class="iconListBox">
		<ul>
			<li v-for="(item,index) in IconListData" :key="index" @click="copyIconNane(item.className)">
				<i :class="item.className"></i>
				<span>{{item.className}}</span>
			</li>
		</ul>
	</div>
	<input type="text" id="inputCopy" placeholder="请输入" style="opacity: 0;">
</template>

<script lang="ts" setup>
	import {ref} from 'vue'
    import iconList from '@/const/iconList'
	const IconListData = ref(iconList)
	// IconListData.value = []
	const copyIconNane = (name:any) =>{
    const input:any = document.getElementById('inputCopy')
    input.value = name
    input.select()
    if(document.execCommand('copy')){
      document.execCommand('copy')
	  toast('复制成功',1000)
    }else{
    //   Message({
    //     type: 'error',
    //     text: '复制失败'
    //   })
    }
    
  }
  const toast=function Toast(msg:string, duration:number) {
            duration = isNaN(duration) ? 1000 : duration; 
            var toastDiv = document.createElement('div'); toastDiv.innerHTML = msg; 
            toastDiv.style.cssText = "padding: 0 10px;opacity: 0.7;height: 30px;color:#38a155;line-height: 30px;text-align: center;border-radius: 5px;position: fixed;top: 5%;left: 50%;transform: translateX(-50%);z-index: 999999;background: #def5d4;font-size: 12px;"; document.body.appendChild(toastDiv); setTimeout(function () { var d = 0.5; toastDiv.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in'; toastDiv.style.opacity = '0'; setTimeout(function () { document.body.removeChild(toastDiv) }, d * 1000); }, duration);
}
</script>

<style lang="scss" scope>
	.iconListBox{
		width: 100%;
		height: auto;
		overflow: hidden;
		margin-top:2vh;
		ul{
			margin:0;
			padding: 0;
			width: 100%;
			height: auto;
			overflow: hidden;
			li{
				list-style: none;
				width: 10.5vw;
				height: 140px;
				float: left;
				padding:1vw;
				box-sizing: border-box;
				text-align: center;
				transition: all .15s ease;
				cursor: pointer;
				border-radius: 4px;
				i{
					font-size:40px;
					color:#555;
					display: block;
					margin-top:1vh;
				}
				span{
					margin-top: 1vh;
					display: inline-block;
					font-size:.9vw;
					color:#555;
					margin-bottom:1vh;
				}
				&:hover{
					background-color:#0e80eb ;
					i{
						color:#fff
					}
					span{
						color:#fff
					}
				}
			}
		}
	}
</style>