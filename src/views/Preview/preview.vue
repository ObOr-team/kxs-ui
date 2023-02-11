<template>
    <div class="pre-code-box">

        <transition name="slide-fade">
            <pre
                class="out-language-html"
                v-if="showCode"
                v-highlight
            >
                <code class="language-html">{{sourceCode}}</code>
            </pre>
        </transition>       
        <div class="showCode" @click="showOrhideCode">
            <span>{{ showCode? "隐藏代码":"显示代码"}}</span>
            <!-- <i class="iconfont icon-sousuo"></i> -->
        </div>
        <textarea id="inputCopy"/>
    </div>
</template>
<script lang="ts">
export default {
    name:"kPreview"
}
</script>
<script lang="ts" setup>
    import { onMounted,ref} from "vue"
    const props = defineProps({
        compname:{
            type: String,
            default: "",
            require: true
        },
        demoname: {
            type: String,
            default: "",
            require: true,
        },
    });
    console.log(props.compname)
    console.log(props.demoname)
    const showCode = ref(false);
    const border = ref( "1px solid rgba(0,0,0,.06)");
    const showOrhideCode = ()=>{
        showCode.value = !showCode.value;
         if (showCode.value){
             border.value= "0";
        }else {
            border.value = "1px solid rgba(0,0,0,.06)";
        }
    };
    const sourceCode = ref("");
    //请求对应路径名的vue文件代码
    async function getSourceCode(){
        const isDev = import.meta.env.MODE === "development";
        if (isDev){
            sourceCode.value =(
                await import(
                     /* @vite-ignore */ `/src/views/${props.compname}/doc/${props.demoname}.vue?raw`
                    )
                ).default;
        }else{
            sourceCode.value = await fetch(
                `/src/views/${props.compname}/${props.demoname}.vue`
                ).then((res) => res.text());
        }   
    }
    onMounted(() =>{
        getSourceCode();
    });
</script>
<style scoped lang="scss">
#inputCopy{
    opacity: 0;
    border: 0;
    outline: none;
    height: 0;
    position: fixed;
    z-index: -999999999;
}
.showCode{
    height: 40px;
    border: solid 1px #ebe6e6;
    border-radius: 10px;
    background-color: rgb(247, 245, 245);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
.showCode span{
    font-size: 10px;
    &:hover{
        color: var(--btn-color-primary);
    }
}
.language-html{
    border-radius: 10px;
    // border: solid 1px #c9c6c6;
    background-color: rgb(247, 245, 245);
}
.out-language-html{
    border-radius: 10px;
    border: solid 1px #c9c6c6;
    background-color: rgb(247, 245, 245);
}
</style>

    