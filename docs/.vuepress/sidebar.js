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
        text: "测试用例数据",
        link: "/case_data/",
        collapsible: true,
        children: [
            {
                text: "📝 参数描述",
                link: "/case_data/params_desc.html",
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
        text: "测试用例创建",
        link: "/case_create/",
        collapsible: true,
        children: [
            {
                text: "📄 数据实例",
                link: "/case_create/instances.html",
            },
            {
                text: "🪪 认证",
                link: "/case_create/auth.html",
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
