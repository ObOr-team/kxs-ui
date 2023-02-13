<template>
  <div class="k-input">
    <input class="k-input__inner"
           :class="{'is-disabled':disabled}"
           :type="type"
           :placeholder="placeholder"
           :name="name"
           :disabled="disabled"
           ref="inputBox"
           v-model="oldValue"
    />
    <span class="eye"  @click="changeEye">
      <svg v-show="eyeOpen&&type=='password'" t="1676271826305" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3704" width="16" height="16"><path d="M512 637.207273c-171.752727 0-343.272727-52.363636-465.454545-156.858182a34.909091 34.909091 0 1 1 46.545454-53.061818c215.505455 186.181818 623.243636 186.181818 837.818182 0a34.909091 34.909091 0 0 1 46.545454 53.061818c-122.181818 104.494545-293.701818 156.858182-465.454545 156.858182z" fill="#666666" p-id="3705"></path><path d="M384.465455 791.272727a28.625455 28.625455 0 0 1-6.283637 0A34.676364 34.676364 0 0 1 349.090909 749.149091l23.272727-137.309091a34.909091 34.909091 0 1 1 69.818182 12.101818l-23.272727 137.309091A34.909091 34.909091 0 0 1 384.465455 791.272727zM907.636364 721.454545a34.443636 34.443636 0 0 1-24.669091-10.472727l-114.734546-116.363636a34.909091 34.909091 0 1 1 49.570909-48.872727l114.734546 116.363636a34.909091 34.909091 0 0 1 0 49.338182A36.305455 36.305455 0 0 1 907.636364 721.454545zM116.363636 721.454545a36.305455 36.305455 0 0 1-23.272727-10.007272 34.909091 34.909091 0 0 1 0-49.338182l114.734546-116.363636a34.909091 34.909091 0 1 1 48.174545 48.872727l-114.734545 116.363636A34.443636 34.443636 0 0 1 116.363636 721.454545zM641.163636 791.272727a34.909091 34.909091 0 0 1-34.210909-28.858182l-23.272727-137.30909a34.909091 34.909091 0 1 1 67.956364-13.265455l23.272727 137.309091a34.676364 34.676364 0 0 1-28.16 40.494545 28.625455 28.625455 0 0 1-5.585455 1.629091z" fill="#666666" p-id="3706"></path></svg>
      <svg v-show="!eyeOpen&&type=='password'" t="1676272038724" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3909" width="16" height="16"><path d="M512 279.272727c171.985455 0 328.610909 162.909091 388.421818 232.727273-59.810909 69.818182-216.436364 232.727273-388.421818 232.727273S183.389091 581.818182 123.578182 512c59.810909-69.818182 216.436364-232.727273 388.421818-232.727273m0-69.818182C298.589091 209.454545 117.76 407.970909 56.785455 483.374545a44.916364 44.916364 0 0 0 0 57.25091C117.76 616.029091 298.589091 814.545455 512 814.545455s394.24-198.516364 455.214545-273.92a44.916364 44.916364 0 0 0 0-57.25091C906.24 407.970909 725.410909 209.454545 512 209.454545z" fill="#666666" p-id="3910"></path><path d="M512 442.181818a69.818182 69.818182 0 1 1-69.818182 69.818182 69.818182 69.818182 0 0 1 69.818182-69.818182m0-69.818182a139.636364 139.636364 0 1 0 139.636364 139.636364 139.636364 139.636364 0 0 0-139.636364-139.636364z" fill="#666666" p-id="3911"></path></svg>
    </span>
  </div>
</template>

<script lang="ts">
import { ref } from "vue"
export default {
  name: 'kInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name:{
      type:String,
      default:''
    },
    disabled:{
      type:Boolean,
      default:false
    },
    defaultValue:{
      type:String,
      default:'abcdef'
    }

  },
 
  setup(props){
    const inputBox:any =ref(null)
    let oldValue=ref(props.defaultValue)
    let eyeOpen=ref(true)
    const changeEye=()=>{
      oldValue=inputBox.value.value
      inputBox.value.type=inputBox.value.type==="password" ? "text":"password"
      eyeOpen.value=!eyeOpen.value
    }
    return {changeEye,inputBox,eyeOpen,oldValue}
  }
};
</script>

<style lang="scss" scoped>
.k-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  .k-input__inner {
    display: inline-block;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .25s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #485fc7;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
input[type="password"]::-ms-reveal{
 display:none
}
.eye{
  position: absolute;
  z-index: 100;
  right: 5px;
  line-height: 40px;
  cursor: pointer;
}
</style>