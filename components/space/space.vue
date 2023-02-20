<template>
</template>

<script>
import {useSlots,h,ref,computed} from 'vue'
    export default {
         name:"kSpace",
         props:{
            inline:{
                type:Boolean,
                default:false
            },
            size:{
                type:String,
                default:""
            },
            column:{
                type:Boolean,
                default:false
            },
            wrap:{
                type:Boolean,
                default:false
            },
         },
         setup(props){
            const $slot = useSlots()
            const slotList = ref([])
       /*     // 输出插槽里面的Dom值
            console.log($slot.default())
            const size = computed(()=>{
                    return props.size? `iconfont icon-${props.icon}`:""
            }) */
            const kStyle = computed(()=>{
                
                return{
                    display:props.inline? 'inline-flex':'flex',
                    gap:props.size? `${props.size}`:`20px 20px`,
                    'flex-direction':props.column? 'column':'',
                    'flex-wrap':props.wrap? 'wrap':'no wrap',
                    padding:'15px'
                }
            })
            $slot.default().forEach((item,index)=>{
                slotList.value.push(
                    h(
                        'div',
                        {
                            className:'k-space-item',
                            style:"width:fit-content"
                        },
                        item
                    )
                )
            })
            return ()=>[
                h(
                    'div',
                    {
                        className:"k-space",
                        style:kStyle.value
                    },
                    slotList.value
                )
            ]
         }
    }
</script>