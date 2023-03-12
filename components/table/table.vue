<template>
   <div :class="[`k-table-${size}`,customClass]">
    <table>
        <tr>
          <th v-for="(x,n) in options.fileds" :key="n" :style="[headStyle,{'text-align':x.align}]">
            <div>{{x.title}}</div>
          </th>
        </tr>  
        <tr v-for="(v,i) in options.datas" :key="i">
          <td v-for="(m,j) in options.fileds" :key="j" :style="[rowStyle,{width:options.fileds[j].width?(options.fileds[j].width):'','text-align':options.fileds[j].align}]">
            <div>{{options.datas[i][options.fileds[j].field]}}</div>
          </td>
        </tr>
    </table>
  </div>
</template>

<script lang="ts">
export default {
    name:"KTable"
}
</script>
<script lang="ts" setup>
const props = defineProps({
  options:{
    type:Object,
    default:()=>{
      return {
        fileds:[],
        datas:[],
      }
    }
  },
  size:{
    type:String,
    default:"default"
  },
  showHeader:{
    type:Boolean,
    default:true
  },
  headStyle:{
    type:Object,
    default:()=>{
      return {}
    }
  },
  rowStyle:{
    type:Object,
    default:()=>{
      return {}
    }
  },
  customClass:String
})
</script>

<style lang="scss" scoped>
.k-table-default{
  width:100%;
  height:auto;
  overflow:hidden;
  table{
    width:100%;
    box-sizing: border-box;
    border-spacing:0;
    border-spacing: 0;
    th{
        padding:14px 12px;
        box-sizing: border-box;
        text-align: left;
        line-height: 20px;
        color: #646468;
        font-weight: 550;
        font-size:14px;
        border:1px solid #ebe6e6;
        border-right:0;
        background-color:#fafafa ;
      }
      th:last-child{
        border-right:1px solid #ebe6e6;
      }
      th:first-child{
        border-left:1px solid #ebe6e6;
      }
    tr{
      border-bottom: 1px solid #f0f0f0;
        td{
          padding:13.5px 12px;
          box-sizing: border-box;
          text-align: left;
          line-height: 20px;
          color: #505050;
          font-weight: 500;
          font-size:14px;
          border:1px solid #f0f0f0;
          border-right:0;
          border-top:0;
        }
        td:first-child{
          border-left:1px solid #f0f0f0;
          
        }
        td:last-child{
          border-right:1px solid #f0f0f0;
          
        }
        &:hover{
          background:rgba(240,240,240,.2)
        } 
    }
      tr:first-child th:first-child{
                border-top-left-radius: 10px; /* 设置table左下圆角 */
      } 
      tr:first-child th:last-child{
                border-top-right-radius: 10px;/* 设置table右下圆角 */
            }
      tr:last-child td:first-child{
                border-bottom-left-radius: 10px; /* 设置table左下圆角 */
            }
      tr:last-child td:last-child{
                border-bottom-right-radius: 10px;/* 设置table右下圆角 */
            }
      tr:first-child th{
                border-top: 1px solid #f0f0f0;
        }
      tr:last-child td{
                border-bottom: 1px solid #f0f0f0;
      }
    }
  }
.k-table-small{
  width: 600px;
  height:auto;
  overflow:hidden;
  table{
    width:100%;
    box-sizing: border-box;
    border-spacing:0;
    border-spacing: 0;
    th{
        padding:14px 12px;
        box-sizing: border-box;
        text-align: left;
        line-height: 20px;
        color: #646468;
        font-weight: 550;
        font-size:14px;
        border:1px solid #ebe6e6;
        border-right:0;
        background-color:#fafafa ;
      }
      th:last-child{
        border-right:1px solid #ebe6e6;
      }
      th:first-child{
        border-left:1px solid #ebe6e6;
      }
    tr{
      border-bottom: 1px solid #f0f0f0;
        td{
          padding: 12.5px 12px;
          box-sizing: border-box;
          line-height: 20px;
          color: #505050;
          font-weight: 500;
          font-size: 13px;
        }
        td:first-child{
          border-left:1px solid #f0f0f0;
          
        }
        td:last-child{
          border-right:1px solid #f0f0f0;
          
        }
        &:hover{
          background:rgba(240,240,240,.2)
        } 
    }
      tr:first-child th:first-child{
                border-top-left-radius: 10px; /* 设置table左下圆角 */
      } 
      tr:first-child th:last-child{
                border-top-right-radius: 10px;/* 设置table右下圆角 */
            }
      tr:last-child td:first-child{
                border-bottom-left-radius: 10px; /* 设置table左下圆角 */
            }
      tr:last-child td:last-child{
                border-bottom-right-radius: 10px;/* 设置table右下圆角 */
            }
      tr:first-child th{
                border-top: 1px solid #f0f0f0;
        }
      tr:last-child td{
                border-bottom: 1px solid #f0f0f0;
      }
    }
 }
 .k-table-mini{
  width: 500px;
  height:auto;
  overflow:hidden;
  table{
    width:100%;
    box-sizing: border-box;
    border-spacing:0;
    border-spacing: 0;
    th{
        padding:14px 12px;
        box-sizing: border-box;
        text-align: left;
        line-height: 20px;
        color: #646468;
        font-weight: 550;
        font-size:14px;
        border:1px solid #ebe6e6;
        border-right:0;
        background-color:#fafafa ;
      }
      th:last-child{
        border-right:1px solid #ebe6e6;
      }
      th:first-child{
        border-left:1px solid #ebe6e6;
      }
    tr{
      border-bottom: 1px solid #f0f0f0;
        td{
          padding: 11.5px 11px;
          box-sizing: border-box;
          line-height: 20px;
          color: #505050;
          font-weight: 500;
          font-size: 12px;
        }
        td:first-child{
          border-left:1px solid #f0f0f0;
          
        }
        td:last-child{
          border-right:1px solid #f0f0f0;
          
        }
        &:hover{
          background:rgba(240,240,240,.2)
        } 
    }
      tr:first-child th:first-child{
                border-top-left-radius: 10px; /* 设置table左下圆角 */
      } 
      tr:first-child th:last-child{
                border-top-right-radius: 10px;/* 设置table右下圆角 */
            }
      tr:last-child td:first-child{
                border-bottom-left-radius: 10px; /* 设置table左下圆角 */
            }
      tr:last-child td:last-child{
                border-bottom-right-radius: 10px;/* 设置table右下圆角 */
            }
      tr:first-child th{
                border-top: 1px solid #f0f0f0;
        }
      tr:last-child td{
                border-bottom: 1px solid #f0f0f0;
      }
    }
 }
table{
  -webkit-border-horizontal-spacing: 0px;
  -webkit-border-vertical-spacing: 0px;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: grey;
}
</style>