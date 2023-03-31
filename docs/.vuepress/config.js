module.exports = {
    base: "/automated_api_pytest_docs/",
    dest: "docs/.vuepress/dist",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Automated Api Pytest",
            description: "docs for automated_api_pytest",
        },
    },
    themeConfig: {
        nav: [
            {text: "Home", link: "/"},
            {
                text: "Github",
                link: "https://github.com/wu-clan/automated_api_pytest",
            },
            {text: "Gitee", link: "https://gitee.com/wu_cl/automated_api_pytest"},
        ],
        sidebar: [
            {
                title: "介绍",
                path: "/note/",
                collapsable: false,
            },
            {
                title: "多项目？",
                path: "/projects/",
                collapsable: false,
            },
            {
                title: "测试用例数据",
                path: "/case_data/",
                collapsable: true,
                children: [
                    {
                        title: "参数描述",
                        path: "/case_data/params_desc"
                    },
                    {
                        title: "变量和钩子",
                        path: "/case_data/vars_hooks"
                    },
                    {
                        title: "jsonpath取值",
                        path: "/case_data/use_jsonpath"
                    },
                    {
                        title: "断言类型",
                        path: "/case_data/assert_type"
                    }
                ],

            },
            {
                title: "测试用例创建",
                path: "/case_create/",
                collapsable: false,
            },
            {
                title: "测试报告",
                path: "/reports/",
                collapsable: false,
            },
            {
                title: "CLI",
                path: "/cli/",
                collapsable: false,
            },
            {
                title: "常见问题",
                path: "/questions/",
                collapsable: false,
            },
            {
                title: "运行",
                path: "/run/",
                collapsable: false
            }
        ],
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: "Releases",
        markdown: {
            lineNumbers: true
        }
    },
};
