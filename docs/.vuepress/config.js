import {defaultTheme, defineUserConfig} from "vuepress";
import {mediumZoomPlugin} from "@vuepress/plugin-medium-zoom";
import {componentsPlugin} from "vuepress-plugin-components";
import {searchPlugin} from "@vuepress/plugin-search";
import {sidebar} from "./sidebar";
import {navbar} from "./navbar";


export default defineUserConfig({
    base: "/httpfpt_docs/",
    lang: "zh-CN",
    title: "HttpFpt",
    description: "Documentation for HttpFpt",
    theme: defaultTheme({
        repo: "https://github.com/wu-clan/httpfpt",
        home: '/',
        logo: '/assets/img/head.png',
        navbar: navbar,
        sidebar: sidebar,
        sidebarDepth: 2,
        editLink: false,
        lastUpdatedText: "Releases",
    }),
    plugins: [
        [
            mediumZoomPlugin(),
            componentsPlugin({
                components: ["BiliBili"]
            }),
            searchPlugin({
                maxSuggestions: 10,
                getExtraFields: (page) => page.frontmatter.tags ?? [],
            })
        ]
    ]
})
