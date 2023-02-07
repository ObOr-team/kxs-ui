export default[{
    //首页路径
    path:'/',
    component:()=>import ("@/views/Home.vue") ,
    children:[
        {
            //button
            path:'button',
            name:"Button 按钮",
            component:()=>import ("@/views/Button/Button.md") 
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
    ]
}]