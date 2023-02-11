<template>
    <div id="total">
      <form id="basic2" :model="formDemo"
              name="oneForm"
              :label-col="{span:8}"   
              :wrapper-col="{ span: 16 }"
              autocomplete="off"
              @finish="onFinish"
              @finishFailed="onFinishFailed"
          >
              <div id="account">
              账号：
              <form-item   
               label="account"
              >
               <input  v-model="formDemo.account" style="width:200px"/>
              </form-item></div><br>
              密码：
              <form-item
              label="Password"
              prop="password"
              >
               <input style="width:200px" v-model="formDemo.password"/>
              </form-item><br><br>
              年龄：
              <input style="width:200px" name="age" type="number" update:modelvalue.number="formDemo.age"> <br/><br/>
              <div id="sex">
              性别： 男
              <input type="radio" name="sex1" v-model="formDemo.sex" value="male"> 
              女
              <input type="radio" name="sex2" v-model="formDemo.sex" value="female"></div>
              <br/>      
              <div id="hobby">
              爱好： 学习
              <input type="checkbox" v-model="formDemo.hobby" value="study"> 打游戏
              <input type="checkbox" v-model="formDemo.hobby" value="game"> 吃饭
              <input type="checkbox" v-model="formDemo.hobby" value="eat">
              </div>
              <br/>
              <div id="location">
              位置：
              <select update:modelvalue="area">
                  <option value="">&nbsp;请选择地址&nbsp; </option>
                  <option value="beijing">北京</option>
                  <option value="shanghai">上海</option>
                  <option value="wuhan">武汉</option>
                  <option value="shenzhen">深圳</option>
              </select>
              </div>
              <br/>
              <div id="mes">
               其他信息：
              <textarea name="" id="" cols="30" rows="10" update:modelvalue.lazy="mes"></textarea>
              <!--lazy懒加载，失去焦点后vue才显示数据-->
              </div>
              <br/><br/>
              <div id="foot2">
              <input name="agree" type="checkbox" v-model="formDemo.agree"> 阅读并接受
              <a href="https://www.typescriptlang.org/">《用户协议》</a>
              <form-item :wrapper-col="{ offset: 8, span: 16 }">
              <button name="submit" type="submit">提交</button>
              </form-item></div><br/>
          </form>
          <br/>
        <k-preview compName="Form" demoName="preview_form2"/>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive,ref } from 'vue';
  import { Vue, Component } from 'vue-property-decorator';
  
  interface formDemo{
      account:string;
      password:string;
      age:number;
      sex:string;
      hobby:string[];
      agree:boolean;
  }
  
  export default defineComponent({
    props:{
     account:String,
     password:String,
      age:Number,
      sex:String,
      hobby:String,
      agree:Boolean,
    },
      setup(props) {
          const formDemo=reactive<formDemo>({
             account:'',
             password:'',   
             age:0,
             sex:'female',
             hobby:[],
             agree:true,
          });

          const password = (rule: any, value: any, callback: any) => {
            if (value === '') {
                callback(new Error('密码不可为空'))
            }  else {
                callback()
            }
}
          const onFinish = (values: any) => {
              console.log('Success:', values);
          };
          const onFinishFailed = (errorInfo: any) => {
              console.log('Failed:', errorInfo);
          };
          return {
              formDemo,
              onFinish,
              onFinishFailed,
              props,
              password: [
                {
                validator: password,
                trigger: 'blur'
                }
  ],
          };
      },
    

  });
  </script>
  
  <style>
    #total{
      margin-top: 50px;
  }
  #basic2{
      width:100% ;
      margin: auto;
      border: 1px solid #b2bec3;
      text-align: center;
      border-radius: 8px;
  }
  #account{
      margin-top: 50px;
  }
  #sex{
      margin-left: -120px;
  }
  #hobby{
      margin-left: -12px;
  }
  #location{
      margin-left: -114px;
  }
  #mes{
      margin-right: -75px;
  }
  a{
      text-decoration: none;
      color:#00a8ff ;
  }
  button:hover{
      background-color:#00a8ff ;
      color: white;
      border:white ;
  }
  a.detail{
      position: absolute;
      top:10px;
      margin-left: 380px;
  }
  a.copy{
      position: absolute;
      top:10px;
      margin-left: 280px;
  }
  </style>