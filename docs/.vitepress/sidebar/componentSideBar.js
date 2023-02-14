const commonPath = '/components';

export default [
    { 
        text: '组件介绍', 
        link: `${commonPath}/index.md`
    }, 
    {
        text: '通用',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Button 按钮', link: `${commonPath}/universal/button.md` },
            { text: 'Icon 图标', link: `${commonPath}/universal/icon.md` }, 
        ]
    },
    {
        text: '数据录入',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Input 输入框', link: `${commonPath}/dataEntry/input.md` }, 
            { text: 'Form 表单', link: `${commonPath}/dataEntry/form.md` },
            { text: 'Select 选择器', link: `${commonPath}/dataEntry/select.md` }, 
        ]
    }
]