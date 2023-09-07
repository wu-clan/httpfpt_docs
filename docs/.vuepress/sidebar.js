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
        text: "配置文件说明",
        link: "/config/",
    },
    {
        text: "测试用例数据说明",
        link: "/case_data/",
        collapsable: true,
        children: [
            {
                text: "参数描述",
                link: "/case_data/params_desc",
            },
            {
                text: "变量和钩子",
                link: "/case_data/vars_hooks",
            },
            {
                text: "jsonpath取值",
                link: "/case_data/use_jsonpath",
            },
            {
                text: "断言类型",
                link: "/case_data/assert_type",
            }
        ]
    },
    {
        text: "测试用例创建",
        link: "/case_create/",
        collapsable: true,
        children: [
            {
                text: "数据实例",
                link: "/case_create/instances",
            },
            {
                text: "认证",
                link: "/case_create/auth",
            }
        ]
    },
    {
        text: "测试报告",
        link: "/reports/",
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
    },
    {
        text: "Coffee",
        link: "/reward/",
    }
];
