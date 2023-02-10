export default[{
    //首页路径
    path:'/',
    component:()=>import ("@/views/Home.vue") ,
    children:[
        {
            //button
            path:'button',
            name:"Button 按钮",
            component:()=>import ("@/views/Button//doc/doc.md") 
        },
        {
            //form
            path:'form',
            name:"From 表单",
            component:()=>import ("@/views/Form/Form.md") 
        },
        {
            //dialog
            path:'dialog',
            name:"Dialog 对话框",
            component:()=>import ("@/views/Dialog/Dialog.md") 
        },
        {
            //textarea
            path:'textarea',
            name:"Textarea 文本域",
            component:()=>import ("@/views/Textarea/doc/doc.md") 
        }
        ,
        {
            //space
            path:'space',
            name:"Space 间距",
            component:()=>import ("@/views/Space/doc/doc.md") 
        },
        {
            //radio
            path:'radio',
            name:"Radio 单选",
            component:()=>import ("@/views/Radio/doc/doc.md") 
        },
        {
            //tree
            path:'tree',
            name:"Tree 树形控件",
            component:()=>import ("@/views/Tree/doc/doc.md") 
        },
        {
            //select
            path:'select',
            name:"Select 下拉框",
            component:()=>import ("@/views/Select/doc/doc.md") 
        },
        {
            //optfile
            path:'optfile',
            name:"OptFile 文件选择",
            component:()=>import ("@/views/OptFile/doc/doc.md") 
        }
    ]
}]