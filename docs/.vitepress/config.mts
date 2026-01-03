import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "LetAiCode",
  description: "AI 辅助编程与大模型开发指南",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    logo: '/logo.png',
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 基础', link: '/llm/' },
      { text: '提示词工程', link: '/prompt/' },
      { text: 'AI 编程工具', link: '/tools/' },
      { text: 'Agent 开发', link: '/agent/' },
    ],

    // 侧边栏
    sidebar: {
      '/llm/': [
        {
          text: '大模型基础',
          items: [
            { text: 'LLM 简介', link: '/llm/' },
            { text: 'Transformer 原理', link: '/llm/transformer' },
            { text: '常见模型对比', link: '/llm/models' }
          ]
        }
      ],
      '/prompt/': [
        {
          text: '提示词工程',
          items: [
            { text: 'Prompt 基础', link: '/prompt/' },
            { text: '结构化提示词', link: '/prompt/structure' },
            { text: 'CoT 思维链', link: '/prompt/cot' }
          ]
        }
      ],
      '/tools/': [
        {
          text: 'AI 编程工具',
          items: [
            { text: '工具概览', link: '/tools/' },
            
            // 二级分组：IDE 集成
            {
              text: '全能编辑器 (IDE)',
              collapsed: false,
              items: [
                { text: 'Cursor 实战', link: '/tools/cursor' },
                { text: 'Windsurf 体验', link: '/tools/windsurf' } // 假设有个新文件
              ]
            },

            // 二级分组：插件类
            {
              text: '辅助插件',
              collapsed: true, // 默认折叠起来
              items: [
                { text: 'GitHub Copilot', link: '/tools/copilot' },
                { text: 'Codeium', link: '/tools/codeium' }
              ]
            }
          ]
        }
      ],
      '/agent/': [
        {
          text: 'Agent 开发',
          items: [
            { text: 'Agent 概念', link: '/agent/' },
            { text: 'LangChain 入门', link: '/agent/langchain' },
            { text: '多智能体协作', link: '/agent/multi-agent' }
          ]
        }
      ]
    },

    // 社交链接 (右上角)
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/your-repo/let-ai-code' }
    // ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present LetAiCode'
    },
    
    // 搜索
    search: {
      provider: 'local'
    }
  }
})