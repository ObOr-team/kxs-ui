<template>
  
</template>

<script lang="js">
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
                default:false
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
            console.log($slot.default())
            const size = computed(()=>{
                    return props.size? `iconfont icon-${props.icon}`:""
            })
            const kStyle = computed(()=>{
                
                return{
                    display:props.inline? 'inline-flex':'flex',
                    gap: props.size? `${props.size}`:`10px 10px`,
                    'flex-direction':props.column? 'column':'inherit',
                    'flex-wrap':props.wrap? 'wrap':'no wrap',
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

<style lang="scss" scoped>
    // .k-space{
    //     display: flex;
    //     flex-wrap:wrap ;
    //     gap: 10px 10px;
    //     flex-direction: inherit;
    // }
</style>