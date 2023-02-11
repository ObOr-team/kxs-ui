<template>
    
         <form id="basic" :model="formDemo">
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
             <div id="foot">
             <input name="agree" type="checkbox" update:modelvalue="agree"> 阅读并接受
             <a href="http://www.baidu.com"></a>《用户协议》
             <button>提交</button></div><br/>
         </form>

 </template>
 <script lang="ts">
 import { defineComponent, reactive } from 'vue';
 import { Vue, Component } from 'vue-property-decorator';

 
 interface formDemo{
     account:string;
     password:string;
     agree:boolean;
 }
 
 export default defineComponent({
     setup() {
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
             formDemo,
             onFinish,
             onFinishFailed,
         };
     },
 });
 </script>