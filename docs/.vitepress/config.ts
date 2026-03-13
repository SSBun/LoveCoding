import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LoveCoding',
  description: '技术文档网站 - 涵盖 iOS, Android, Web, Server, AI 等技术类目',
  lang: 'zh-CN',
  base: '/LoveCoding/',

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/LoveCoding/' },
      { text: 'iOS', link: '/LoveCoding/ios/' },
      { text: 'Android', link: '/LoveCoding/android/' },
      { text: 'Web', link: '/LoveCoding/web/' },
      { text: 'Server', link: '/LoveCoding/server/' },
      { text: 'AI', link: '/LoveCoding/ai/' }
    ],

    sidebar: {
      '/ios/': [
        {
          text: 'iOS 开发',
          collapsed: false,
          items: [
            { text: '简介', link: '/LoveCoding/ios/' },
            { text: 'Swift 基础', link: '/LoveCoding/ios/swift' },
            { text: 'SwiftUI', link: '/LoveCoding/ios/swiftui' },
            { text: 'Foundation', link: '/LoveCoding/ios/foundation' }
          ]
        }
      ],
      '/android/': [
        {
          text: 'Android 开发',
          collapsed: false,
          items: [
            { text: '简介', link: '/LoveCoding/android/' },
            { text: 'Kotlin', link: '/LoveCoding/android/kotlin' },
            { text: 'Jetpack', link: '/LoveCoding/android/jetpack' }
          ]
        }
      ],
      '/web/': [
        {
          text: 'Web 开发',
          collapsed: false,
          items: [
            { text: '简介', link: '/LoveCoding/web/' },
            { text: 'React', link: '/LoveCoding/web/react' },
            { text: 'Vue', link: '/LoveCoding/web/vue' },
            { text: 'TypeScript', link: '/LoveCoding/web/typescript' }
          ]
        }
      ],
      '/server/': [
        {
          text: '服务端开发',
          collapsed: false,
          items: [
            { text: '简介', link: '/LoveCoding/server/' },
            { text: 'Node.js', link: '/LoveCoding/server/nodejs' },
            { text: 'Python', link: '/LoveCoding/server/python' },
            { text: '数据库', link: '/LoveCoding/server/database' }
          ]
        }
      ],
      '/ai/': [
        {
          text: 'AI 技术',
          collapsed: false,
          items: [
            { text: '简介', link: '/LoveCoding/ai/' },
            { text: '机器学习', link: '/LoveCoding/ai/machine-learning' },
            { text: 'Prompt 工程', link: '/LoveCoding/ai/prompt-engineering' },
            { text: '大语言模型', link: '/LoveCoding/ai/llm' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SSBun/LoveCoding' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024-present LoveCoding'
    },

    outline: {
      level: [2, 3]
    }
  },

  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
