export const sidebar = [
    {
        text: '介绍',
        collapsed: false,
        items: [
            {text: '简介', link: '/note'},
            {text: "多项目？", link: '/projects'},
        ]
    },
    {
        text: '配置',
        collapsed: false,
        items: [
            {text: "配置文件", link: "/config",},
        ]
    },
    {
        text: '用例数据',
        collapsed: false,
        items: [
            {text: '数据说明', link: '/case_data'},
            {text: "数据实例", link: "/instances",},
            {text: "完整实例", link: "/complete_ins",},
            {text: "授权/认证", link: "/auth",},
            {text: "变量和钩子", link: "/vars_hooks",},
            {text: "JsonPath", link: "/use_jsonpath",},
            {text: "断言类型", link: "/assert_type",}
        ]
    },
    {
        text: '测试用例',
        collapsed: false,
        items: [
            {text: "用例创建", link: "/case_create",},
            {text: "CLI", link: "/cli",},
            {text: "运行", link: "/run",},
        ]
    },
    {
        text: '测试报告',
        collapsed: false,
        items: [
            {text: "展示", link: "/report",},
            {text: "Jenkins", link: "/jenkins",},
        ]
    },
    {
        text: '其他',
        collapsed: false,
        items: [
            {text: "常见问题", link: "/questions",},
            {text: "注意事项", link: "/warnings",},
            {text: "更新日志", link: "/changelog",}
        ]
    }
]
