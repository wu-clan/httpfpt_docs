module.exports = {
    base: './automated_api_pytest_docs/',
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
            {text: 'Github', link: 'https://github.com/wu-clan'},
            {text: 'Gitee', link: 'https://gitee.com/wu_cl'},
        ],
        sidebar: 'auto',
        search: false,
        searchMaxSuggestions: 10,
        lastUpdated: 'Releases',
    }
}
