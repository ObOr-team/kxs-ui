<template>
    <div class="pagination">
      <a @click='changePage(0)' :class="{disabled: currentPage===1}">上一页</a>
      <span v-if='currentPage > 3'>...</span>
      <a @click='changePage(item)' :class='{active: currentPage===item}' v-for='item in list' :key='item'>{{item}}</a>
      <span v-if='currentPage < pages - 2'>...</span>
      <a @click='changePage(1)' :class='{disabled: currentPage===pages}'>下一页</a>
    </div>
  </template>
  <script lang="ts">
  import { computed, ref } from 'vue'
   
  export default {
    name: 'KPagination',
    props: {
      total: {
        type: Number,
        default: 80
      },
      pagesize: {
        type: Number,
        default: 10
      }
    },
    setup (props, { emit, attrs }) {
      const pages = computed(() => Math.ceil(props.total / props.pagesize))
      const currentPage = ref(attrs.page || 1)
      let current:any=currentPage.value
      
      // 计算页码
      const list = computed(() => {
        const result = []
        // 总页码小于等于5；大于5
        if (pages.value <= 5) {
          for (let i = 1; i <= pages.value; i++) {
            result.push(i)
          }
        } else {
          // 总页码大于5
          if (current <= 2) {
            for (let i = 1; i <= 5; i++) {
              result.push(i)
            }
          } else if (current >= pages.value - 1) {
            for (let i = pages.value - 4; i <= pages.value; i++) {
              result.push(i)
            }
          } else {
            for (let i = current - 2; i <= current + 2; i++) {
              result.push(i)
            }
          }
        }
        return result
      })
      // 上一页和下一页
      const changePage = (type:number) => {
        if (type === 0) {
          // 上一页
          if (current === 1) return
          if (current > 1) {
            current -= 1
          }
        } else if (type === 1) {
          // 下一页
          if (current === pages.value) return
          if (current < pages.value) {
            current += 1
          }
        } else {
          // 点击页码
          currentPage.value = type
        }
        emit('change-page', currentPage.value)
      }
      return { list, currentPage, pages, changePage }
    }
  }
  </script>
  <style scoped lang="scss">
  .pagination {
    display: flex;
    justify-content: center;
    padding: 20px;}
     a {
      display: inline-block;
      padding: 5px 10px;
      border: 1px solid #e4e4e4;
      border-radius: 4px;
      margin-right: 10px;
      text-decoration:none;
      color:gray
    }
    a:hover{
        color:#0984e3
    }
 span {
      margin-right: 10px;
    }
  
  </style>