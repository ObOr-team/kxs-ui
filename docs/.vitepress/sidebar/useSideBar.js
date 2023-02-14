const commonPath = '/use';

export default [
    {
        text: '快速上手',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '安装使用', link: `${commonPath}/index.md` }, 
            { text: '更新日志', link: `${commonPath}/log.md` },
            { text: '参与贡献', link: `${commonPath}/contribute.md` }, 
        ]
    }
]