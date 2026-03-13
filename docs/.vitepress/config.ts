import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LoveCoding',
  description: '技术文档网站 - 涵盖 iOS, Android, Web, Server, AI 等技术类目',
  lang: 'zh-CN',
  base: '/LoveCoding/',

  head: [
    ['link', { rel: 'icon', href: '/LoveCoding/logo.svg' }]
  ],

  themeConfig: {
    logo: '/LoveCoding/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: 'iOS', link: '/ios/' },
      { text: 'Android', link: '/android/' },
      { text: 'Web', link: '/web/' },
      { text: 'Server', link: '/server/' },
      { text: 'DevOps', link: '/devops/' },
      { text: 'AI', link: '/ai/' }
    ],

    sidebar: {
      '/ios/': [
        {
          text: 'iOS 开发',
          collapsed: false,
          items: [
            { text: '简介', link: '/ios/' },
            { text: 'Swift 基础', link: '/ios/swift' },
            { text: 'SwiftUI', link: '/ios/swiftui' },
            { text: 'Foundation', link: '/ios/foundation' }
          ]
        }
      ],
      '/android/': [
        {
          text: 'Android 开发',
          collapsed: false,
          items: [
            { text: '简介', link: '/android/' },
            { text: 'Kotlin', link: '/android/kotlin' },
            { text: 'Jetpack', link: '/android/jetpack' }
          ]
        }
      ],
      '/web/': [
        {
          text: 'Web 开发',
          collapsed: false,
          items: [
            { text: '简介', link: '/web/' },
            { text: 'React', link: '/web/react' },
            { text: 'Vue', link: '/web/vue' },
            { text: 'TypeScript', link: '/web/typescript' }
          ]
        }
      ],
      '/server/': [
        {
          text: '服务端开发',
          collapsed: false,
          items: [
            { text: '简介', link: '/server/' },
            { text: 'Node.js', link: '/server/nodejs' },
            { text: 'Python', link: '/server/python' },
            { text: '数据库', link: '/server/database' }
          ]
        }
      ],
      '/devops/': [
        {
          text: 'DevOps',
          collapsed: false,
          items: [
            { text: '简介', link: '/devops/' },
            { text: 'Docker', link: '/devops/docker' },
            { text: 'Kubernetes', link: '/devops/kubernetes' },
            { text: 'CI/CD', link: '/devops/cicd' }
          ]
        }
      ],
      '/ai/': [
        {
          text: 'AI 技术',
          collapsed: false,
          items: [
            { text: '简介', link: '/ai/' }
          ]
        },
        {
          text: '机器学习',
          collapsed: false,
          items: [
            { text: '监督学习', link: '/ai/machine-learning' },
            { text: '无监督学习', link: '/ai/machine-learning' },
            { text: '深度学习', link: '/ai/neural-networks' }
          ]
        },
        {
          text: '专项领域',
          collapsed: false,
          items: [
            { text: '计算机视觉', link: '/ai/computer-vision' },
            { text: '自然语言处理', link: '/ai/nlp' }
          ]
        },
        {
          text: 'LLM 应用',
          collapsed: false,
          items: [
            { text: 'Prompt 工程', link: '/ai/prompt-engineering' },
            { text: '大语言模型', link: '/ai/llm' }
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
