<template>
    <div>
        <input type="file" class="file-input" ref="inpRef" @change="inpChange" :multiple="multiple">
        <k-button @click="fileChange" :type="btnType" v-if="targetType=='button'">
            {{ label }}
        </k-button>
        <div :class="['area-box',{'k-opfile-area-active':activeFile}]" v-show="targetType=='box'" @click="fileChange" ref="areaRef" id="title">
            <i class="k-icon-upload_clound_line"></i>
            <p v-if="label!=''">{{lableText}}</p>
        </div>
        <div class="fileList-box" v-if="showFileList">
            <li v-for="(item,index) in fileList" :key="index">
                <span>{{ item.name }}</span>
                <span class="delete-span" @click="deleteFile(index)">删除</span>
            </li>
        </div>
    </div>
    </template>
    
    <script lang="ts">
    export default {
        name: "kOptfile",
    }
    </script>
    
    <script lang="ts" setup>
    import {
        ref,
        reactive,
        toRefs,
        onMounted
    } from 'vue'
    const props = defineProps({
        multiple: Boolean,
        label: {
            type: String,
            default: "选择文件"
        },
        btnType: {
            type: String,
            default: "default"
        },
        targetType: {
            type: String,
            default: "button"
        },
        showFileList: Boolean,
        drop: Boolean,
    })
    // console.log(props.label)
    //用emit去封装事件抛出，并且抛出的时候可以给它传数据
    const emit = defineEmits(['change', 'update:fileList'])
    const inpRef = ref(null)
    const areaRef = ref(null)
    const activeFile = ref(false)
    const lableText = ref(props.label)
    const fileList = reactive([])
    const deleteFile = (index) => {
        fileList.splice(index, 1)
        emit('update:fileList', fileList)
    }
    const fileChange = () => {
        inpRef.value.click()
    }
    const inpChange = (e) => {
    
        fileList.unshift(...e.target.files)
        emit('change', fileList)
    }
    onMounted(() => {
        if (props.drop && props.targetType == 'box') {
            // console.log(window)
            let dropArea = areaRef.value
            //图片拖拽放下框框后，会触发一次
            dropArea.addEventListener('drop', (e) => {
                e.preventDefault()
                fileList.unshift(...e.dataTransfer.files)
                console.log(e.dataTransfer.files)
                //拿到文件信息
                emit('change', fileList)
                activeFile.value = falseA
            })
            //图片拖拽离开框框后，会触发一次
            dropArea.addEventListener('dragleave', (e) => {
                e.preventDefault()
                activeFile.value = false
                lableText.value = "将文件拖拽到此处或点击选择文件"
                //   console.log(e)
            })
            //图片拖拽进入框框后，会触发一次
            dropArea.addEventListener('dragenter', (e) => {
                e.preventDefault()
                activeFile.value = true
                lableText.value = "松开鼠标完成"
            })
            //图片在框框会触发
            dropArea.addEventListener('dragover', (e) => {
                e.preventDefault()
                activeFile.value = true
                lableText.value = "松开鼠标完成"
            })
        }
    })
    </script>
    
    <style lang="scss" scoped>
    .file-input {
        display: none;
    }
    .fileList-box {
        li {
            line-height: 35px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .delete-span {
            cursor: pointer;
        }
    }
    .area-box {
        width: 250px;
        height: 150px;
        border: 1px dashed #000;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-radius: 6px;
        cursor: pointer;
        &:hover {
            //  color: rgb(107, 144, 243);
            border: 1px dashed rgb(107, 144, 243);
        }
    
        i {
            font-size: 20px;
            color: #a29194;
        }
    
        p {
            font-size: 5px;
        }
    }
    //当图片进入区域时，则高亮
    .k-opfile-area-active {
        transition: all .4s;
        border-color: #0e80eb;
    }
    </style>
    