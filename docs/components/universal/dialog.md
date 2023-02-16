<script lang="ts" setup>
    // 引入ref处理响应式数据
    import { ref } from 'vue'
    // 是否展示对话框组件
    let isShow: any = ref([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    // 点击按钮显示对应对话框
    let clickToShow = (i:number) => {
        // TODO: BUG：连续点击一个按钮，响应式数据失效，对话框不显示
        isShow.value.forEach((item:boolean, index:number) => isShow.value[index] = false);
        isShow.value[i] = true;
    }
    // 自定义确认按钮点击事件
    let confirmClick = () => {
        window.alert("点击了确认按钮");
    }
    // 自定义取消按钮点击事件
    let cancelClick = () => {
        window.alert("点击了取消按钮");
    }
    // 异步确认事件
    let loadingConfirm = () => {
        let p = new Promise<void>((resolve, reject) => {
            setTimeout(()=> {
                resolve();
            }, 1000)
        })
        p.then(()=> {
            isShow.value[15] = false;
        })
    }
</script>

# Dialog 对话框

## ● 类型
<p>通过<code>type</code>属性来设置对话框的类型</P>
<div class="borderBox">
    <k-button :onclick = "() => {clickToShow(0)}" type="primary">Open a dialog of type info</k-button>
    <k-button :onclick = "() => {clickToShow(1)}" type="success">Open a dialog of type confirm</k-button>
    <k-button :onclick = "() => {clickToShow(2)}" type="warming">Open a dialog of type warning</k-button>
    <k-button :onclick = "() => {clickToShow(3)}" type="danger">Open a dialog of type error</k-button>
</div>
<k-dialog v-if = "isShow[0]"
    titleText = "Title"
    contentText = "Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents..."
></k-dialog>
<k-dialog v-if = "isShow[1]"
    titleText = "Title"
    contentText = "Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents..."
    type="confirm"
></k-dialog>
<k-dialog v-if = "isShow[2]"
    titleText = "Are you sure delete this task?"
    contentText = "Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents..."
    type="warning"
></k-dialog>
<k-dialog v-if = "isShow[3]"
titleText = "A serious error has occurred here !"
contentText = "It needs to be updated online. Please confirm that your network connection is normal and try again."
type="error"
></k-dialog>

<details>
<summary class="pre-code-tag">展示代码</summary>

```vue
<template>
    <!-- 类型：info、confirm、warning、error -->
    <div>
        <k-space>
            <k-button :onclick = "() => {clickToShow(0)}" type="primary">Open a dialog of type info</k-button>
            <k-button :onclick = "() => {clickToShow(1)}" type="success">Open a dialog of type confirm</k-button>
            <k-button :onclick = "() => {clickToShow(2)}" type="warming">Open a dialog of type warning</k-button>
            <k-button :onclick = "() => {clickToShow(3)}" type="danger">Open a dialog of type error</k-button>
        </k-space>
        
        <k-dialog v-if = "isShow[0]"
        titleText = "Title"
        contentText = "Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents..."
        ></k-dialog>
       
        <k-dialog v-if = "isShow[1]"
        titleText = "Title"
        contentText = "Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents..."
        type="confirm"
        ></k-dialog>
       
        <k-dialog v-if = "isShow[2]"
        titleText = "Are you sure delete this task?"
        contentText = "Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents... Some contents..."
        type="warning"
        ></k-dialog>
       
        <k-dialog v-if = "isShow[3]"
        titleText = "A serious error has occurred here !"
        contentText = "It needs to be updated online. Please confirm that your network connection is normal and try again."
        type="error"
        ></k-dialog>
    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    // 是否展示对话框组件
    let isShow: any = ref([false, false, false, false]);
    // 点击按钮显示对应对话框
    let clickToShow = (i:number) => {
        isShow.value.forEach((item:boolean, index:number) => isShow.value[index] = false);
        isShow.value[i] = true;
    }
</script>
```
</details>

## ● 自定义大小
<p>通过<code>width</code>和<code>height</code>属性来设置对话框的整体宽度和高度</P>
<div class="borderBox">
    <k-button :onclick = "() => {clickToShow(4)}" type="primary">600×200</k-button>
    <k-button :onclick = "() => {clickToShow(5)}" type="primary">400×170</k-button>
</div>
<k-dialog v-if = "isShow[4]"
titleText = "对话框标题"
contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
width="600px"
height="200px"
></k-dialog>
<k-dialog v-if = "isShow[5]"
titleText = "对话框标题"
contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
width="400px"
height="170px"
></k-dialog>
<details>
<summary class="pre-code-tag">展示代码</summary>

```vue
<template>
    <div>
        <k-space>
            <k-button :onclick = "() => {clickToShow(0)}" type="primary">600×200</k-button>
            <k-button :onclick = "() => {clickToShow(1)}" type="primary">400×170</k-button>
        </k-space>
        
        <k-dialog v-if = "isShow[0]"
        titleText = "对话框标题"
        contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
        width="600px"
        height="200px"
        ></k-dialog>

        <k-dialog v-if = "isShow[1]"
        titleText = "对话框标题"
        contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
        width="400px"
        height="170px"
        ></k-dialog>
    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    // 是否展示对话框组件
    let isShow: any = ref([false, false]);
    // 点击按钮显示对应对话框
    let clickToShow = (i:number) => {
        isShow.value.forEach((item:boolean, index:number) => isShow.value[index] = false);
        isShow.value[i] = true;
    }
</script>
```
</details>

## ● 自定义主题颜色
<p>通过<code>themeColor</code>属性来设置对话框的主题颜色</P>
<div class="borderBox">
    <k-button :onclick = "() => {clickToShow(6)}" type="success">themeColor = "#1ABC9C"</k-button>
</div>
<k-dialog v-if = "isShow[6]"
titleText = "对话框标题"
contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
themeColor="#1ABC9C"
></k-dialog>

<details>
<summary class="pre-code-tag">展示代码</summary>

```vue
<template>
    <div>
        <k-space>
            <k-button :onclick = "() => {clickToShow(6)}" type="success">themeColor = "#1ABC9C"</k-button>
        </k-space>
    
        <k-dialog v-if = "isShow[0]"
        titleText = "对话框标题"
        contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
        themeColor="#1ABC9C"
        ></k-dialog>
    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    // 是否展示对话框组件
    let isShow: any = ref([false]);
    // 点击按钮显示对应对话框
    let clickToShow = (i:number) => {
        isShow.value.forEach((item:boolean, index:number) => isShow.value[index] = false);
        isShow.value[i] = true;
    }
</script>
```
</details>

## ● 位置
<p>通过<code>location</code>属性来设置对话框的位置</P>
<div class="borderBox">
    <k-button :onclick = "() => {clickToShow(7)}" type="primary">top</k-button>
    <k-button :onclick = "() => {clickToShow(8)}" type="primary">center</k-button>
</div>
<k-dialog v-if = "isShow[7]"
titleText = "对话框标题"
contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
location="top"
></k-dialog>
<k-dialog v-if = "isShow[8]"
titleText = "对话框标题"
contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
location="center"
></k-dialog>

<details>
<summary class="pre-code-tag">展示代码</summary>

```vue
<template>
    <div>
        <k-space>
            <k-button :onclick = "() => {clickToShow(0)}" type="primary">top</k-button>
            <k-button :onclick = "() => {clickToShow(1)}" type="primary">center</k-button>
        </k-space>

        <k-dialog v-if = "isShow[0]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            location="top"
        ></k-dialog>

        <k-dialog v-if = "isShow[1]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            location="center"
        ></k-dialog>
    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    // 是否展示对话框组件
    let isShow: any = ref([false, false]);
    // 点击按钮显示对应对话框
    let clickToShow = (i:number) => {
        isShow.value.forEach((item:boolean, index:number) => isShow.value[index] = false);
        isShow.value[i] = true;
    }
</script>
```
</details>

## ● 按钮
<p>通过<code>closable</code>属性来设置是否展示对话框的关闭按钮</P>
<p>通过<code>footerBtn</code>属性来设置对话框的底部按钮的展示情况</P>
<div class="borderBox">
    <k-button :onclick = "() => {clickToShow(9)}" type="primary">无关闭按钮</k-button>
    <k-button :onclick = "() => {clickToShow(10)}" type="primary">仅含确认按钮</k-button>
    <k-button :onclick = "() => {clickToShow(11)}" type="primary">仅含取消按钮</k-button>
    <k-button :onclick = "() => {clickToShow(12)}" type="primary">不展示确认和取消按钮</k-button>
</div>
<k-dialog v-if = "isShow[9]"
titleText = "对话框标题"
contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
:closable = false
></k-dialog>
<k-dialog v-if = "isShow[10]"
titleText = "对话框标题"
contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
footerBtn="confirm"
></k-dialog>
<k-dialog v-if = "isShow[11]"
titleText = "对话框标题"
contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
footerBtn="cancel"
></k-dialog>
<k-dialog v-if = "isShow[12]"
titleText = "对话框标题"
contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
footerBtn="null"
></k-dialog>

<details>
<summary class="pre-code-tag">展示代码</summary>

```vue
<template>
    <div>
        <k-space>
            <k-button :onclick = "() => {clickToShow(0)}" type="primary">无关闭按钮</k-button>
            <k-button :onclick = "() => {clickToShow(1)}" type="primary">仅含确认按钮</k-button>
            <k-button :onclick = "() => {clickToShow(2)}" type="primary">仅含取消按钮</k-button>
            <k-button :onclick = "() => {clickToShow(3)}" type="primary">不展示确认和取消按钮</k-button>
        </k-space>

        <k-dialog v-if = "isShow[0]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            :closable = false
        ></k-dialog>

        <k-dialog v-if = "isShow[1]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            footerBtn="confirm"
        ></k-dialog>

        <k-dialog v-if = "isShow[2]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            footerBtn="cancel"
        ></k-dialog>

        <k-dialog v-if = "isShow[3]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            footerBtn="null"
        ></k-dialog> 
    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    // 是否展示对话框组件
    let isShow: any = ref([false, false, false, false]);
    // 点击按钮显示对应对话框
    let clickToShow = (i:number) => {
        isShow.value.forEach((item:boolean, index:number) => isShow.value[index] = false);
        isShow.value[i] = true;
    }
</script>
```
</details>

## ● 点击事件
<p>通过<code>confirmClick</code>和<code>cancelClick</code>属性来注册对话框的确认按钮和取消按钮的点击事件</P>
<div class="borderBox">
    <k-button :onclick = "() => {clickToShow(13)}" type="primary">确认按钮点击事件</k-button>
    <k-button :onclick = "() => {clickToShow(14)}" type="primary">取消按钮点击事件</k-button>
</div>
<k-dialog v-if = "isShow[13]"
titleText = "对话框标题"
contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
:confirmClick="confirmClick"
></k-dialog>
<k-dialog v-if = "isShow[14]"
titleText = "对话框标题"
contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
:cancelClick="cancelClick"
></k-dialog>

<details>
<summary class="pre-code-tag">展示代码</summary>

```vue
<template>
    <div>
        <k-space>
            <k-button :onclick = "() => {clickToShow(0)}" type="primary">确认按钮点击事件</k-button>
            <k-button :onclick = "() => {clickToShow(1)}" type="primary">取消按钮点击事件</k-button>       
        </k-space>

        <k-dialog v-if = "isShow[0]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            :confirmClick="confirmClick"
        ></k-dialog>

        <k-dialog v-if = "isShow[1]"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            :cancelClick="cancelClick"
        ></k-dialog>
    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    // 是否展示对话框组件
    let isShow: any = ref([false, false]);
    // 点击按钮显示对应对话框
    let clickToShow = (i:number) => {
        isShow.value.forEach((item:boolean, index:number) => isShow.value[index] = false);
        isShow.value[i] = true;
    }

    // 自定义确认按钮点击事件
    let confirmClick = () => {
        window.alert("点击了确认按钮");
    }
    // 自定义取消按钮点击事件
    let cancelClick = () => {
        window.alert("点击了取消按钮");
    }
</script>
```
</details>

## ● 异步确认
<p>通过<code>confirmLoading</code>属性来设置确认按钮是否为异步按钮</P>
<div class="borderBox">
    <k-button :onclick = "() => {clickToShow(15)}" type="primary">异步确认</k-button>            
</div>
<k-dialog v-if = "isShow[15]"
    titleText = "对话框标题"
    contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
    :confirmLoading = true
    :confirmClick="loadingConfirm"
></k-dialog>

<details>
<summary class="pre-code-tag">展示代码</summary>

```vue
<template>
    <div>
        <k-space>
            <k-button :onclick = "() => {clickToShow()}" type="primary">异步确认</k-button>            
        </k-space>
        <k-dialog v-if = "isShow"
            titleText = "对话框标题"
            contentText = "提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
            :confirmLoading = true
            :confirmClick="confirmClick"
        ></k-dialog>
    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    // 是否展示对话框组件
    let isShow: any = ref(false);
    // 点击按钮显示对应对话框
    let clickToShow = () => {
        isShow.value = true;
    }
    // 自定义异步确认按钮点击事件
    let confirmClick = () => {
        let p = new Promise<void>((resolve, reject) => {
            setTimeout(()=> {
                resolve();
            }, 1000)
        })
        p.then(()=> {
            isShow.value = false;
        })
    }
</script>
```
</details>

## Dialog Attributes
|      参数      |                        说明                        |   类型   | 默认值  |
| :----------------: | :------------------------------------------------: | :------: | :-----: |
|      type      |     提示框类型：info、confirm、warning、error      |  string  | "info"  |
|   themeColor   | 主题颜色，包括头部背景颜色、图标颜色、确认按钮颜色 |  string  |    -    |
|   titleColor   |                    标题文字颜色                    |  string  | "white" |
|  contentColor  |                 提示框内容文字颜色                 |  string  | "black" |
|   titleText    |                      标题文本                      |  string  |    -    |
|  contentText   |                   提示框内容文本                   |  string  |    -    |
| confirmBtnText |                    确认按钮文本                    |  string  | "确认"  |
| cancelBtnText  |                    取消按钮文本                    |  string  | "取消"  |
|    closable    |              是否显示右上角的关闭按钮              | boolean  |  true   |
|   footerBtn    |     底部按钮类型：both、confirm、cancel、null      |  string  | "both"  |
|     width      |                   对话框整体宽度                   |  string  | "500px" |
|     height     |                   对话框整体高度                   |  string  | "200px" |
|    location    |              提示框位置：top、center               |  string  |  "top"  |
|  confirmClick  |                  确定按钮点击事件                  | function |    -    |
|  cancelClick   |                  取消按钮点击事件                  | function |    -    |
| confirmLoading |                    异步确认按钮                    | boolean  |  false  |