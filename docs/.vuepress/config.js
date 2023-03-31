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
        logo: '/assets/img/head.png',
        nav: [
            {text: "Home", link: "/"},
            {
                text: '我的开源',
                items: [
                    {
                        text: 'Gitee', items: [
                            {text: 'Django Blog', link: 'https://gitee.com/wu_cl/DBlog'},
                            {text: 'Fastapi SQLAlchemy', link: 'https://gitee.com/wu_cl/fastapi_sqlalchemy_mysql'},
                            {text: 'Fastapi Tortoise', link: 'https://gitee.com/wu_cl/fastapi_tortoise_mysql'},
                            {text: 'Auto Selenium UI', link: 'https://gitee.com/wu_cl/automated_ui'},
                            {text: 'Auto Unittest Api', link: 'https://gitee.com/wu_cl/automated_api'}
                        ]
                    },
                    {
                        text: 'Github', items: [
                            {text: 'Django Blog', link: 'https://github.com/wu-clan/DBlog'},
                            {text: 'Fastapi SQLAlchemy', link: 'https://github.com/wu-clan/fastapi_sqlalchemy_mysql'},
                            {text: 'Fastapi Tortoise', link: 'https://github.com/wu-clan/fastapi_tortoise_mysql'},
                            {text: 'Auto Selenium UI', link: 'https://github.com/wu-clan/automated_ui'},
                            {text: 'Auto Unittest Api', link: 'https://github.com/wu-clan/automated_api'}
                        ]
                    }
                ]
            },
            {
                text: "Github",
                link: "https://github.com/wu-clan/automated_api_pytest",
            },
            {text: "Gitee", link: "https://gitee.com/wu_cl/automated_api_pytest"}
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
                title: "测试用例数据",
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
                collapsable: false,
                sidebarDepth: 2
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
                title: "常见问题",
                path: "/questions/",
                collapsable: false,
                sidebarDepth: 2
            },
            {
                title: "运行",
                path: "/run/",
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
};
