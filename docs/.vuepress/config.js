module.exports = {
    base: '/automated_api_pytest_docs/',
    dest: 'docs/.vuepress/dist',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Automated Api Pytest',
            description: 'docs for automated_api_pytest',
        }
    },
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Github', link: 'https://github.com/wu-clan/automated_api_pytest'},
            {text: 'Gitee', link: 'https://gitee.com/wu_cl/automated_api_pytest'},
        ],
        sidebar: 'auto',
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: 'Releases',
    }
}
