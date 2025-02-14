import { defineConfig } from 'vitepress'
import {navbar} from "./navbar";
import {sidebar} from "./sidebar";

export default defineConfig({
  base: "/httpfpt_docs/",
  lang: "zh-CN",
  title: "HttpFPT",
  description: "Documentation for HttpFPT",
  lastUpdated: false,
  themeConfig: {
    logo: '/assets/img/head.png',
    nav: navbar,
    sidebar: sidebar,
    outline: {
      level: [2-4],
      label: '当前页大纲'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wu-clan/httpfpt' },
      { icon: 'discord', link: 'https://discord.gg/RK4Eh7zVg8' }
    ],
    footer: {
      message: 'MIT License',
      copyright: 'Copyright © 2022-2025 wu-clan'
    },
    search: {
      provider: 'local'
    },
    sidebarMenuLabel:'目录',
    returnToTopLabel:'返回顶部',
  },
})
