<div align="center">

# LetAiCode — Vibe Coding 教程全集

**零基础学 AI 编程 · 从入门到实战 · 中文最全 Vibe Coding 教程**

[![VitePress](https://img.shields.io/badge/Built%20with-VitePress-646CFF?logo=vitepress)](https://vitepress.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](#license)

🌐 [在线阅读](https://letaicode.com) · 📘 [基础入门](#-基础入门) · 🛠️ [AI 编程工具](#%EF%B8%8F-ai-编程工具教程) · 🚀 [实战案例](#-实战案例) · 🧩 [Skill 指南](#-skill-指南)

</div>

---

## 📖 项目简介

**LetAiCode** 是一份开源的 **Vibe Coding（AI 编程）** 中文教程全集，帮助零编程基础的用户通过自然语言驱动 AI 来完成软件开发。

> **什么是 Vibe Coding？** 由 OpenAI 联合创始人 Andrej Karpathy 在 2025 年提出的全新编程范式——你只需用自然语言描述需求，AI 来写代码。不需要学习编程语言语法，只需要学会"如何清晰地表达你的想法"。

本教程覆盖从概念认知、工具选择、提示词工程到完整项目实战的全链路内容，适合设计师、产品经理、学生、创业者以及希望提升效率的开发者。

## ✨ 特性

- 📘 **体系化教程** — 10 篇基础入门文章，从零构建 AI 编程认知体系
- 🛠️ **主流工具覆盖** — 深度讲解 Codex 和 Claude Code 两大终端型 AI 编程工具
- 🚀 **真实项目实战** — 番茄钟、天气工具、作品集网站、记忆翻牌游戏四大完整案例
- 🧩 **Skill 生态指南** — 从理解到使用再到自定义创建 AI Skill
- 🔍 **内置全文搜索** — 基于 VitePress 本地搜索，快速定位所需内容
- 📱 **响应式设计** — 完美适配桌面端和移动端阅读

## 📚 内容目录

### 📘 基础入门

从 Vibe Coding 概念到提示词工程、代码审查、项目管理和版本控制的完整入门路径：

| 序号 | 文章 | 简介 |
|:---:|------|------|
| 01 | 什么是 Vibe Coding？ | 了解 AI 编程的核心概念与适用场景 |
| 02 | 改变你的习惯：如何正确地用 AI 编程 | 建立正确的 AI 编程思维方式 |
| 03 | AI 编程工具大盘点 | 全面对比主流 AI 编程工具，选择你的武器 |
| 04 | 极速上手：开发一个个人简历页面 | 第一个实战项目，10 分钟出成品 |
| 05 | 发布你的作品：从本地到线上 | 学会将项目部署到互联网 |
| 06 | 提示词工程入门 | 让 AI 听懂你的话 |
| 07 | 进阶提示词技巧 | 让 AI 更好地为你工作 |
| 08 | 理解 AI 的输出：代码审查与调试 | 学会检查和调试 AI 生成的代码 |
| 09 | 项目管理思维：MVP 与迭代开发 | 掌握最小可行产品思维 |
| 10 | 版本控制基础：Git 与 GitHub | 学会用 Git 管理你的项目 |

### 🛠️ AI 编程工具教程

深度覆盖两大终端型 AI 编程工具，从安装到进阶：

**Codex（OpenAI）**
- Codex 介绍与安装指南
- Codex 快速入门
- Codex 进阶使用技巧
- Codex 常见问题与解决方案

**Claude Code（Anthropic）**
- Claude Code 介绍与安装指南
- Claude Code 快速入门
- Claude Code 进阶技巧
- Claude Code 命令速查表

### 🚀 实战案例

四个从零开始的完整项目开发实录，涵盖需求拆解、提示词组织、问题定位和逐步迭代：

| 案例 | 技术要点 |
|------|---------|
| 🍅 番茄钟应用 | 计时器逻辑、状态管理、UI 交互 |
| 🌤️ 天气查询小工具 | API 调用、数据展示、错误处理 |
| 🎨 个人作品集网站 | 响应式布局、多页面路由、动画效果 |
| 🃏 记忆翻牌游戏 | 游戏逻辑、DOM 操作、计分系统 |

### 🧩 Skill 指南

全面了解 AI Skill 生态：

- 什么是 AI Skill？
- 如何使用 Skill
- 优秀开源 Skill 推荐
- 如何创建自己的 Skill

## 🚀 快速开始

### 环境要求

- [Node.js](https://nodejs.org/) >= 18
- npm / yarn / pnpm

### 本地运行

```bash
# 克隆项目
git clone https://github.com/jx009/LetAiCodeDoc.git
cd LetAiCodeDoc

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev
```

启动后访问 `http://localhost:5173` 即可在本地阅读全部教程。

### 构建部署

```bash
# 构建静态文件
npm run docs:build

# 本地预览构建结果
npm run docs:preview
```

构建产物位于 `docs/.vitepress/dist` 目录，可部署到任意静态托管服务（Vercel、Netlify、GitHub Pages 等）。

## 🤝 参与贡献

欢迎通过以下方式参与贡献：

1. **提交 Issue** — 报告错误、提出建议或请求新内容
2. **提交 PR** — Fork 本仓库，修改后提交 Pull Request
3. **分享传播** — 将本教程分享给更多需要的人

### 贡献指南

- 文档使用 Markdown 编写，存放在 `docs/` 目录下
- 站点基于 [VitePress](https://vitepress.dev/) 构建，配置文件为 `docs/.vitepress/config.mts`
- 请确保新增内容符合现有的目录结构和命名规范

## 📄 License

本项目基于 [MIT License](LICENSE) 开源。

## ⭐ Star History

如果这个项目对你有帮助，请给一个 ⭐ Star 支持一下！

---

<div align="center">

**LetAiCode** — 让每个人都能用 AI 把想法变成现实 🚀

[回到顶部](#letaicode--vibe-coding-教程全集)

</div>