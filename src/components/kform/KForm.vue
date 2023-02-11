<template>
    <div id="root1">
         <form id="basic" :model="formDemo" >
             <div id="account">
             账号：
             <form-item   
              label="账号"
              prop="account"
             >
              <input style="width:200px" :value="formDemo.account" placeholder="请输入账号"/>
              <div :hidden="true"></div>
             </form-item></div><br>

             密码：
             <form-item
             label="Password"
             prop="password"
             >
              <input style="width:200px" v-model="formDemo.password" placeholder="请输入密码"/>
             </form-item><br/><br/>

             <div id="foot">
             <input name="agree" type="checkbox" v-model="formDemo.agree"> 阅读并接受
             <a href="http://www.baidu.com">《用户协议》</a>
             <button @click="childEmit">提交</button></div><br/>
         </form>
         <br/>
         <k-preview compName="Form" demoName="preview_form1"/>
     </div>
 </template>
 
 <script lang="ts">
 import { defineComponent, reactive } from 'vue';
 interface formDemo{
     account:string;
     password:string;
     agree:boolean;
 }
 
 export default defineComponent({
    props:{
        account:String,
        password:String,
        agree:Boolean
    },
     setup(props,{emit}) {
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



         function childEmit () {
            emit('my-emit', '我是子组件值')
        }
         return {
             formDemo,
             onFinish,
             onFinishFailed,
             props,
             childEmit
         };

     },
 });
 </script>
 
 <style>
 #root1{
     margin-top: 50px;
 }
 #basic{
     width:100% ;
     margin:auto;
     border: 1px solid #b2bec3;
     text-align: center;
     border-radius: 8px;
 }
 </style>