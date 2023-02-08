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
               name="account"
               :rules="[{ required: true, message: '请输入您的账号!'}]"
              >
               <input  v-model="formDemo.account" style="width:200px"/>
              </form-item></div><br>
              密码：
              <form-item
              label="Password"
              name="password"
              :rules="[{ required: true, message: 'Please input your password!' }]"
              >
               <input style="width:200px" v-model="formDemo.password" />
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
          <div id="footer2">
              <a href="" class="detail">
              <svg t="1675232154125" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1503" width="40" height="40"><path d="M739.555556 213.333333a56.888889 56.888889 0 0 1 56.888888 56.888889v340.508445l0.611556 0.611555-199.111111 199.111111-0.611556-0.611555V810.666667H284.444444a56.888889 56.888889 0 0 1-56.888888-56.888889V270.222222a56.888889 56.888889 0 0 1 56.888888-56.888889h455.111112z m0 56.888889H284.444444v483.555556h256v-113.777778a85.333333 85.333333 0 0 1 82.133334-85.276444L625.777778 554.666667h113.777778V270.222222z m-3.043556 341.333334H625.777778a28.444444 28.444444 0 0 0-28.444445 28.444444v110.734222L736.512 611.555556z" fill="#8a8a8a" p-id="1504"></path><path d="M341.333333 384m14.222223 0l142.222222 0q14.222222 0 14.222222 14.222222l0 14.222222q0 14.222222-14.222222 14.222223l-142.222222 0q-14.222222 0-14.222223-14.222223l0-14.222222q0-14.222222 14.222223-14.222222Z" fill="#8a8a8a" p-id="1505"></path><path d="M540.444444 384m14.222223 0l14.222222 0q14.222222 0 14.222222 14.222222l0 14.222222q0 14.222222-14.222222 14.222223l-14.222222 0q-14.222222 0-14.222223-14.222223l0-14.222222q0-14.222222 14.222223-14.222222Z" fill="#8a8a8a" p-id="1506"></path><path d="M341.333333 483.555556m14.222223 0l142.222222 0q14.222222 0 14.222222 14.222222l0 14.222222q0 14.222222-14.222222 14.222222l-142.222222 0q-14.222222 0-14.222223-14.222222l0-14.222222q0-14.222222 14.222223-14.222222Z" fill="#8a8a8a" p-id="1507"></path><path d="M341.333333 583.111111m14.222223 0l142.222222 0q14.222222 0 14.222222 14.222222l0 14.222223q0 14.222222-14.222222 14.222222l-142.222222 0q-14.222222 0-14.222223-14.222222l0-14.222223q0-14.222222 14.222223-14.222222Z" fill="#8a8a8a" p-id="1508"></path></svg>
              <div id="detail">显示代码</div>
              </a>
             <a href="" class="copy">
              <svg t="1675233831297" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1920" width="40" height="40"><path d="M568.888889 213.333333a56.888889 56.888889 0 0 1 56.888889 56.888889v99.555556h-56.888889v-99.555556H312.888889v312.888889h71.111111v56.888889h-71.111111a56.888889 56.888889 0 0 1-56.888889-56.888889V270.222222a56.888889 56.888889 0 0 1 56.888889-56.888889h256z" fill="#8a8a8a" p-id="1921"></path><path d="M725.333333 398.222222a56.888889 56.888889 0 0 1 56.888889 56.888889v312.888889a56.888889 56.888889 0 0 1-56.888889 56.888889H469.333333a56.888889 56.888889 0 0 1-56.888889-56.888889V455.111111a56.888889 56.888889 0 0 1 56.888889-56.888889h256z m0 56.888889H469.333333v312.888889h256V455.111111z" fill="#8a8a8a" p-id="1922" class="custom-cursor-on-hover"></path><path d="M526.222222 540.444444m14.222222 0l113.777778 0q14.222222 0 14.222222 14.222223l0 14.222222q0 14.222222-14.222222 14.222222l-113.777778 0q-14.222222 0-14.222222-14.222222l0-14.222222q0-14.222222 14.222222-14.222223Z" fill="#8a8a8a" p-id="1923"></path><path d="M526.222222 611.555556m14.222222 0l42.666667 0q14.222222 0 14.222222 14.222222l0 14.222222q0 14.222222-14.222222 14.222222l-42.666667 0q-14.222222 0-14.222222-14.222222l0-14.222222q0-14.222222 14.222222-14.222222Z" fill="#8a8a8a" p-id="1924"></path></svg>
              <div id="copy">复制代码</div>  
          </a>
          </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from 'vue';
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
      setup() {
          const formDemo=reactive<formDemo>({
             account:'',
             password:'',   
             age:0,
             sex:'female',
             hobby:[],
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
  
  <style>
    #total{
      margin-top: 50px;
  }
  #basic2{
      width:60% ;
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
  #footer2{
      position: relative;
      top: 0px;
      width:60% ;
      height: 60px;
      margin:auto;
      border:1px solid #b2bec3;
      border-top: none;
      border-radius: 8px;
      background-color: rgb(247, 245, 245);
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