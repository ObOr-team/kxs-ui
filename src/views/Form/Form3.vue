<template>
  <div id="root">
       <form id="basic3" :model="formDemo">
           <div id="account">
           账号：
           <form-item   
            label="账号"
            name="account"
            :rules="[{ required: true, message: '请输入您的账号!'}]"
           >
            <input style="width:200px" modelvalue="formDemo.account" />
           </form-item></div><br>
           密码：
           <form-item
           label="Password"
           name="password"
           :rules="[{ required: true, message: 'Please input your password!' }]"
           >
            <input style="width:200px" modelvalue="formDemo.password" />
           </form-item><br/><br/> 
<!-- 验证框 -->
         <div id="verify">
            <form-item prop="captcha" label="">
                  <div class="captcha-text">
                    <input placeholder="请输入验证码" >
                  </div>
                  <div class="captcha-code">
                      <Security ref="SecurityRefs"></Security>
                  </div></form-item>
          </div>
<!--验证码  -->
          <div id="toVerify">
                  <div class="CharacterVerification" :style="{'width' : width + 'px','height' : height + 'px'}" ref="CharacterVerification">
                      <canvas
                        @click="refresh"
                        :width="width"
                        :height="height"
                        ref="verifyCanvas"
                        :style="{ cursor: 'pointer' }"
                      ></canvas>
                    </div>
          </div>
           <div id="foot3">
           <input name="agree" type="checkbox" update:modelvalue="agree"> 阅读并接受
           <a href="http://www.baidu.com"></a>《用户协议》
           <button>提交</button></div><br/>
       </form>
       <br/>
        <k-preview compName="Form" demoName="preview_form3"/>
        <br/><br/>
   </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { Vue, Component } from 'vue-property-decorator';

import {  ref, onMounted } from "vue";

interface formDemo{
   account:string;
   password:string;
   agree:boolean;
}

export default defineComponent({

  name: "CharacterVerification",
  props: {
    width: {
      type: Number,
      default: 150,
    },
    height: {
      type: Number,
      default: 40,
    },
    type: {
      type: String,
      default: "blend", //图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
    },
  },
  setup(props, {expose}) {
    const numArr = "0,1,2,3,4,5,6,7,8,9".split(",");
    const letterArr =
      "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(
        ","
      );
    const code = ref("");
    const CharacterVerification = ref<HTMLDivElement | null>(null);
    const verifyCanvas = ref<HTMLCanvasElement | null>(null);
    // 生成验证码
    let ctx;
    onMounted(() => {
      refresh();
    })
    const refresh = () => {
      code.value = "";
      if (verifyCanvas.value?.getContext) {
        ctx = verifyCanvas.value.getContext("2d") as CanvasRenderingContext2D;
      } else {
        return;
      }
 
      ctx.textBaseline = "middle";
 
      ctx.fillStyle = randomColor(180, 240);
      ctx.fillRect(0, 0, props.width, props.height);
 
      if (props.type == "blend") {
        //判断验证码类型
        var txtArr = numArr.concat(letterArr);
      } else if (props.type == "number") {
        var txtArr = numArr;
      } else {
        var txtArr = letterArr;
      }
 
      for (var i = 1; i <= 4; i++) {
        var txt = txtArr[randomNum(0, txtArr.length)];
        code.value += txt;
        ctx.font = randomNum(props.height / 2, props.height) + "px SimHei"; //随机生成字体大小
        ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色
        ctx.shadowOffsetX = randomNum(-3, 3);
        ctx.shadowOffsetY = randomNum(-3, 3);
        ctx.shadowBlur = randomNum(-3, 3);
        ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
        var x = (props.width / 5) * i;
        var y = props.height / 2;
        var deg = randomNum(-30, 30);
        /**设置旋转角度和坐标原点**/
        ctx.translate(x, y);
        ctx.rotate((deg * Math.PI) / 180);
        ctx.fillText(txt, 0, 0);
        /**恢复旋转角度和坐标原点**/
        ctx.rotate((-deg * Math.PI) / 180);
        ctx.translate(-x, -y);
      }
      /**绘制干扰线**/
      for (var i = 0; i < 4; i++) {
        ctx.strokeStyle = randomColor(40, 180);
        ctx.beginPath();
        ctx.moveTo(randomNum(0, props.width), randomNum(0, props.height));
        ctx.lineTo(randomNum(0, props.width), randomNum(0, props.height));
        ctx.stroke();
      }
      /**绘制干扰点**/
      for (var i = 0; i < props.width / 4; i++) {
        ctx.fillStyle = randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(
          randomNum(0, props.width),
          randomNum(0, props.height),
          1,
          0,
          2 * Math.PI
        );
        ctx.fill();
      }
    };
 
    /**生成一个随机色**/
    const randomColor = (min: number, max: number) => {
      var r = randomNum(min, max);
      var g = randomNum(min, max);
      var b = randomNum(min, max);
      return "rgb(" + r + "," + g + "," + b + ")";
    };
    /**生成一个随机数**/
    const randomNum = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min) + min);
    };
    /**验证验证码**/
    const validate = (iptCode: string) => {
      var newIptCode = iptCode.toLowerCase();
      var v_code = code.value.toLowerCase();
      if (newIptCode == v_code) {
        return true;
      } else {
        refresh();
        return false;
      }
    };
 
    // 暴露方法
    expose({ validate });
 

    const formDemo=reactive<formDemo>({
          account:'',
          password:'',   
          agree:true,
       });
       const onFinish = (values: any) => {
           console.log('Success:', values);
       };
       const onFinishFailed = (errorInfo: any) => {
           console.log('Failed:', errorInfo);
       };
    return {
      CharacterVerification,
      verifyCanvas,
      refresh,
      formDemo,
       onFinish,
           onFinishFailed,
    };
  },

})
// setup() {
      //  const formDemo=reactive<formDemo>({
      //     account:'',
      //     password:'',   
      //     agree:true,
      //  });
      //  const onFinish = (values: any) => {
      //      console.log('Success:', values);
      //  };
      //  const onFinishFailed = (errorInfo: any) => {
      //      console.log('Failed:', errorInfo);
      //  };
//        return {
//            formDemo,
//            onFinish,
//            onFinishFailed,
//        };
//    },
// });
</script>

<style>
#root{
  margin-top: 50px;
}
#basic3{
   width:100% ;
   margin: auto;
   border: 1px solid #b2bec3;
   text-align: center;
   border-radius: 8px;
}
#verify{
  position: relative;
  margin-right: 120px;
}
#toVerify{
  display: flex;
  position: relative;
  left: 520px;
  top: -30px;
}

</style>