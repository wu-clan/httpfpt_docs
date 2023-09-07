export const navbar = [
    {
        text: "Home",
        link: "/"
    },
    {
        text: 'Others',
        children: [
            {
                text: 'Gitee',
                children: [
                    {
                        text: 'Django Blog',
                        link: 'https://gitee.com/wu_cl/DBlog'
                    }
                ]
            },
            {
                text: 'Github',
                children: [
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
                    {
                        text: 'Auto Selenium UI',
                        link: 'https://github.com/wu-clan/automated_ui'
                    },
                    {
                        text: 'Auto Unittest Api',
                        link: 'https://github.com/wu-clan/automated_api'
                    }
                ]
            }
        ]
    },
    {
        text: "About",
        link: "https://juejin.cn/post/7224314619867136037"
    }
]
