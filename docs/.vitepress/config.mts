import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'LetAiCode',
  description: 'Vibe Coding 教程全集',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?3adb9b1b1ab8b80d3d4b6634c33ed0db";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`
    ]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '基础入门', link: '/基础入门/' },
      { text: 'AI 编程工具', link: '/AI编程工具/' },
      { text: '实战案例', link: '/实战案例/' },
      { text: 'Skill 相关', link: '/Skill相关/' }
    ],
    sidebar: {
      '/基础入门/': [
        {
          text: '基础入门',
          items: [
            { text: '栏目导读', link: '/基础入门/' },
            { text: '什么是 Vibe Coding？', link: '/基础入门/01-什么是-vibe-coding' },
            { text: '改变你的习惯：如何以正确的姿势用 AI 来编程', link: '/基础入门/02-改变你的习惯-如何正确地用-ai-编程' },
            { text: 'AI 编程工具大盘点：选择你的武器', link: '/基础入门/03-ai-编程工具大盘点' },
            { text: '极速上手：用 AI 开发一个个人简历页面', link: '/基础入门/04-极速上手-开发一个个人简历页面' },
            { text: '发布你的作品：从本地到线上', link: '/基础入门/05-发布你的作品-从本地到线上' },
            { text: '提示词工程入门：让 AI 听懂你的话', link: '/基础入门/06-提示词工程入门' },
            { text: '进阶提示词技巧：让 AI 更好地为你工作', link: '/基础入门/07-进阶提示词技巧' },
            { text: '理解 AI 的输出：代码审查与调试', link: '/基础入门/08-理解-ai-的输出-代码审查与调试' },
            { text: '项目管理思维：MVP 与迭代开发', link: '/基础入门/09-项目管理思维-mvp-与迭代开发' },
            { text: '版本控制基础：Git 与 GitHub', link: '/基础入门/10-版本控制基础-git-与-github' }
          ]
        }
      ],
      '/AI编程工具/': [
        {
          text: 'AI 编程工具',
          items: [
            { text: '栏目导读', link: '/AI编程工具/' },
            { text: 'Codex', link: '/AI编程工具/Codex/' },
            { text: 'Claude Code', link: '/AI编程工具/Claude-Code/' }
          ]
        },
        {
          text: 'Codex',
          items: [
            { text: 'Codex 介绍与安装指南', link: '/AI编程工具/Codex/01-codex-介绍与安装' },
            { text: 'Codex 快速入门', link: '/AI编程工具/Codex/02-codex-快速入门' },
            { text: 'Codex 进阶使用技巧', link: '/AI编程工具/Codex/03-codex-进阶使用技巧' },
            { text: 'Codex 常见问题与解决方案', link: '/AI编程工具/Codex/04-codex-常见问题' }
          ]
        },
        {
          text: 'Claude Code',
          items: [
            { text: 'Claude Code 介绍与安装指南', link: '/AI编程工具/Claude-Code/01-claude-code-介绍与安装' },
            { text: 'Claude Code 快速入门', link: '/AI编程工具/Claude-Code/02-claude-code-快速入门' },
            { text: 'Claude Code 进阶技巧', link: '/AI编程工具/Claude-Code/03-claude-code-进阶技巧' },
            { text: 'Claude Code 命令速查表', link: '/AI编程工具/Claude-Code/04-claude-code-命令速查表' }
          ]
        }
      ],
      '/实战案例/': [
        {
          text: '实战案例',
          items: [
            { text: '栏目导读', link: '/实战案例/' },
            { text: '从零做一个番茄钟应用', link: '/实战案例/01-从零做一个番茄钟应用' },
            { text: '天气查询小工具完整开发实录', link: '/实战案例/02-天气查询小工具完整开发实录' },
            { text: '个人作品集网站开发全过程', link: '/实战案例/03-个人作品集网站开发全过程' },
            { text: '记忆翻牌游戏开发实录', link: '/实战案例/04-记忆翻牌游戏开发实录' }
          ]
        }
      ],
      '/Skill相关/': [
        {
          text: 'Skill 相关',
          items: [
            { text: '栏目导读', link: '/Skill相关/' },
            { text: '什么是 AI Skill？', link: '/Skill相关/01-什么是-ai-skill' },
            { text: '如何使用 Skill', link: '/Skill相关/02-如何使用-skill' },
            { text: '优秀开源 Skill 推荐', link: '/Skill相关/03-优秀开源-skill-推荐' },
            { text: '如何创建自己的 Skill', link: '/Skill相关/04-如何创建自己的-skill' }
          ]
        }
      ]
    },
    footer: {
      message: '基于新版 vibe-coding 教程全集整理',
      copyright: 'Copyright © 2024-present LetAiCode'
    },
    search: {
      provider: 'local'
    }
  }
})
