module.exports = {
    base: "/httpfpt_docs/",
    dest: "docs/.vuepress/dist",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "HttpFpt",
            description: "documentation for httpfpt",
        },
    },
    themeConfig: {
        logo: '/assets/img/head.png',
        nav: [
            { text: "Home", link: "/" },
            {
                text: 'Others',
                items: [
                    {
                        text: 'Gitee', items: [
                            { text: 'Django Blog', link: 'https://gitee.com/wu_cl/DBlog' }
                        ]
                    },
                    {
                        text: 'Github', items: [
                            {
                                text: 'FastAPI Best Architecture',
                                link: 'https://github.com/fastapi-practices/fastapi_best_architecture'
                            },
                            {
                                text: 'FastAPI SQLAlchemy',
                                link: 'https://github.com/fastapi-practices/fastapi_sqlalchemy_mysql'
                            },
                            {
                                text: 'FastAPI Tortoise',
                                link: 'https://github.com/fastapi-practices/fastapi_tortoise_mysql'
                            },
                            { text: 'Auto Selenium UI', link: 'https://github.com/wu-clan/automated_ui' },
                            { text: 'Auto Unittest Api', link: 'https://github.com/wu-clan/automated_api' }
                        ]
                    }
                ]
            },
            { text: "About", link: "https://juejin.cn/post/7224314619867136037" },
            { text: "Github", link: "https://github.com/wu-clan/httpfpt" }
        ],
        sidebar: [
            {
                title: "介绍",
                path: "/note/",
                collapsable: false,
                sidebarDepth: 2
            },
            {
                title: "多项目？",
                path: "/projects/",
                collapsable: false,
                sidebarDepth: 2
            },
            {
                title: "配置文件说明",
                path: "/config/",
                collapsable: false,
                sidebarDepth: 2
            },
            {
                title: "测试用例数据说明",
                path: "/case_data/",
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    {
                        title: "参数描述",
                        path: "/case_data/params_desc",
                        sidebarDepth: 2
                    },
                    {
                        title: "变量和钩子",
                        path: "/case_data/vars_hooks",
                        sidebarDepth: 2
                    },
                    {
                        title: "jsonpath取值",
                        path: "/case_data/use_jsonpath",
                        sidebarDepth: 2
                    },
                    {
                        title: "断言类型",
                        path: "/case_data/assert_type",
                        sidebarDepth: 2
                    }
                ]
            },
            {
                title: "测试用例创建",
                path: "/case_create/",
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    {
                        title: "数据实例",
                        path: "/case_create/instances",
                        sidebarDepth: 2
                    },
                    {
                        title: "认证",
                        path: "/case_create/auth",
                        sidebarDepth: 2
                    }
                ]
            },
            {
                title: "测试报告",
                path: "/reports/",
                collapsable: false,
                sidebarDepth: 2
            },
            {
                title: "CLI",
                path: "/cli/",
                collapsable: false,
                sidebarDepth: 2
            },
            {
                title: "运行",
                path: "/run/",
                collapsable: false,
                sidebarDepth: 2
            },
            {
                title: "常见问题",
                path: "/questions/",
                collapsable: false,
                sidebarDepth: 2
            },
            {
                title: "注意事项",
                path: "/warnings/",
                collapsable: false,
                sidebarDepth: 2
            },
            {
                title: "更新日志",
                path: "/changes_log/",
                collapsable: false,
                sidebarDepth: 2
            },
            {
                title: "Coffee",
                path: "/reward/",
                collapsable: false,
                sidebarDepth: 2
            }
        ],
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: "Releases",
    },
    markdown: {
        lineNumbers: true
    },
    plugins: [
        [
            'vuepress-plugin-zooming',
        ]
    ]
}
