export const sidebar = [
    {
        text: "介绍",
        link: "/note/",
    },
    {
        text: "多项目？",
        link: "/projects/",
    },
    {
        text: "配置文件",
        link: "/config/",
    },
    {
        text: "用例创建",
        link: "/case_create/",
    },
    {
        text: "用例数据",
        link: "/case_data/",
        collapsible: true,
        children: [
            {
                text: "📄 数据实例",
                link: "/case_data/instances.html",
            },
            {
                text: "📄 完整实例",
                link: "/case_data/complete_ins.html",
            },
            {
                text: "🪪 授权认证",
                link: "/case_data/auth.html",
            },
            {
                text: "🏪 变量和钩子",
                link: "/case_data/vars_hooks.html",
            },
            {
                text: "👁️ JsonPath",
                link: "/case_data/use_jsonpath.html",
            },
            {
                text: "🔡 断言类型",
                link: "/case_data/assert_type.html",
            }
        ]
    },
    {
        text: "CLI",
        link: "/cli/",
    },
    {
        text: "运行",
        link: "/run/",
    },
    {
        text: "测试报告",
        link: "/reports/",
    },
    {
        text: "Jenkins",
        link: "/jenkins/",
    },
    {
        text: "常见问题",
        link: "/questions/",
    },
    {
        text: "注意事项",
        link: "/warnings/",
    },
    {
        text: "更新日志",
        link: "/changes_log/",
    }
];
