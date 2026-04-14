# Codex 介绍与安装指南

## 什么是 Codex？

Codex 是 OpenAI 推出的 **AI 编程代理**，运行在终端中，基于 GPT-5 系列模型，能够直接读取、编写和执行你的代码。你可以把它理解为一个住在终端里的"AI 程序员"。如果你还在比较工具，可以先回看 [AI 编程工具大盘点：选择你的武器](../../基础入门/03-ai-编程工具大盘点)。

### 核心能力

- 🧠 **代码生成**：描述需求，自动生成完整代码
- 📖 **项目理解**：自动阅读你的项目文件，理解上下文
- 🔧 **自动修复**：发现 bug 后自动修复
- 📂 **文件操作**：创建、修改、删除文件
- 🖥️ **命令执行**：在沙箱环境中安全地执行代码
- 🔍 **网络搜索**：可以搜索最新的技术文档
- 🔄 **会话恢复**：关掉终端后可以恢复之前的工作

## 系统要求

- **操作系统**：macOS、Linux（正式支持），Windows（通过 WSL）
- **网络**：需要互联网连接
- **账号**：ChatGPT Plus/Pro 订阅 或 OpenAI API Key

## 安装步骤

### 方式一：npm 安装（推荐）

```bash
# 先安装 Node.js（如果没有）
# macOS:
brew install node
# Linux/WSL:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
nvm install --lts

# 安装 Codex
npm install -g @openai/codex

# 验证
codex --version
```

### 方式二：Homebrew 安装

```bash
brew install codex
```

### 方式三：直接下载

从 [GitHub Releases](https://github.com/openai/codex/releases) 下载二进制文件。

## 登录认证

### 方式一：ChatGPT 账号登录（推荐）

```bash
codex login
```

选择 "Sign in with ChatGPT"，浏览器会弹出授权。使用订阅包含的额度，不额外付费。

### 方式二：API Key

```bash
export OPENAI_API_KEY="sk-你的API密钥"
echo 'export OPENAI_API_KEY="sk-你的API密钥"' >> ~/.zshrc
source ~/.zshrc
```

## 验证一切正常

```bash
codex "说一句 hello world"
```

正常回复就说明安装配置完成 🎉 接下来可以继续看 [Codex 快速入门](./02-codex-快速入门)。

## 常见安装问题

- **npm 权限错误**：用 nvm 管理 Node.js
- **命令找不到**：检查 PATH 设置
- **网络问题**：设置代理 `export HTTPS_PROXY=http://127.0.0.1:7890`
- **API Key 无效**：检查是否正确复制、余额是否充足

## 继续阅读

- [Codex 快速入门](./02-codex-快速入门)
- [Codex 进阶使用技巧](./03-codex-进阶使用技巧)
- [Codex 常见问题与解决方案](./04-codex-常见问题)
