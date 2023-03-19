import { defineConfig } from "vitepress"

export default defineConfig({
  lang: "zh-CN",
  title: "AliceBot",
  description: "简单的 Python 异步多后端聊天机器人框架",

  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["link", { rel: "apple-touch-icon", href: "/icons/apple-touch-icon.png" }],
    ["link", { rel: "mask-icon", href: "/icons/safari-pinned-tab.svg" }],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/icons/mstile-150x150.png" }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#2d89ef" }]
  ],

  themeConfig: {
    logo: "/logo.png",

    nav: [
      { text: "主页", link: "/" },
      { text: "社区", link: "/community" }
    ],

    editLink: {
      pattern: "https://github.com/AliceBotProject/homepage/edit/main/:path",
      text: "在 GitHub 上编辑此页"
    },

    lastUpdatedText: "上次更新",

    socialLinks: [
      { icon: "github", link: "https://github.com/AliceBotProject" }
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present st1020"
    }
  }
})
