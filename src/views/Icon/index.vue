<template>
	<p class="titlep">所有图标</p>
	<div class="">
		  <k-input type="text" placeholder="输入图标关键词进行搜索" v-model="searchValue" ></k-input>  
		<!-- <input class="inputcss iconfont icon-sousuo-xianxing" type="text" v-model="searchValue" :placeholder='"\ue8b8"+"输入图标关键词进行搜索"'> -->
	</div>
    <div class="iconListBox">
		<ul>
			<li v-for="(item,index) in IconListData" :key="index" @click="copyIconNane(item.className)"
				v-show="!searchValue || (searchValue && searchRule(searchValue,item.className))"
			>
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
	let searchValue=ref("")
	const IconListData = ref(iconList)
	// IconListData.value = []
	const copyIconNane = (name:any) =>{
    if(document.execCommand('copy')){
      document.execCommand('copy')
	  toast('复制成功',1000)
    }else{
    }
  }
 	const searchRule = (rule:string,name:string) => {
        let reg = new RegExp("(?="+rule+")");
		return(reg.test(name))
	}
  const toast=function Toast(msg:string, duration:number) {
            duration = isNaN(duration) ? 1000 : duration; 
            var toastDiv = document.createElement('div'); toastDiv.innerHTML = msg; 
            toastDiv.style.cssText = "padding: 0 10px;opacity: 0.7;height: 30px;color:#38a155;line-height: 30px;text-align: center;border-radius: 5px;position: fixed;top: 5%;left: 50%;transform: translateX(-50%);z-index: 999999;background: #def5d4;font-size: 12px;"; document.body.appendChild(toastDiv); setTimeout(function () { var d = 0.5; toastDiv.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in'; toastDiv.style.opacity = '0'; setTimeout(function () { document.body.removeChild(toastDiv) }, d * 1000); }, duration);
}
</script>

<style lang="scss" scope>
	.titlep {
		font-size: 17px;
		font-weight: 600;
	}
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
// .inputcss{
// 	line-height: 35px;
// 	width: 200px;
// 	border-radius: 5px;
// 	font-size: 10px;
// 	border: 1px solid #d1d1d1;
// 	&:focus {
//       outline: none;
//     }
// }

// @font-face {
//   font-family: "iconfont"; /* Project id 3579896 */
//   src: url('//at.alicdn.com/t/c/font_3579896_4z4w105wteu.woff2?t=1676359378416') format('woff2'),
//        url('//at.alicdn.com/t/c/font_3579896_4z4w105wteu.woff?t=1676359378416') format('woff'),
//        url('//at.alicdn.com/t/c/font_3579896_4z4w105wteu.ttf?t=1676359378416') format('truetype');
// }

// .iconfont {
//   font-family: "iconfont" !important;
//   font-size: 16px;
//   font-style: normal;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

// .icon-sousuo-xianxing:before {
//   content: "\e8b8";
//   padding-left: 5px;
// }
</style>