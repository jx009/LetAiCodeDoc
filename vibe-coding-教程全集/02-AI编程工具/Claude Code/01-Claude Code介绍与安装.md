# Claude Code 介绍与安装指南

## 什么是 Claude Code？

Claude Code 是 Anthropic 推出的 **AI 编程助手**，运行在终端中，基于 Claude 系列模型。它能理解整个项目，帮你编写、修改、调试代码。

### 核心能力

- 🧠 **深度理解**：能阅读并理解大型代码库
- ✍️ **代码生成**：根据自然语言生成高质量代码
- 🐛 **调试修复**：定位 bug 并修复
- 📝 **Git 操作**：自动提交、创建分支等
- 🏗️ **架构设计**：擅长复杂的系统设计和重构

## 系统要求

- macOS 13.0+ / Windows 10 1809+ / Ubuntu 20.04+
- 4 GB+ RAM
- 需要互联网连接
- 需要 Claude Pro、Max、Team、Enterprise 或 Console 账户（免费计划不支持）

## 安装步骤

### 推荐方式：原生安装

**macOS / Linux / WSL**：
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell**：
```powershell
irm https://claude.ai/install.ps1 | iex
```

### 备选：Homebrew
```bash
brew install --cask claude-code
```

### 验证安装
```bash
claude --version
```

## 登录认证

```bash
claude
# 启动后执行
/login
```

选择 "Sign in with Claude.ai"，浏览器弹出授权页面。

也可以用 API Key：
```bash
export ANTHROPIC_API_KEY="sk-ant-你的密钥"
```

## 更新与卸载

```bash
claude update              # 更新
rm ~/.local/bin/claude     # 卸载（原生安装）
brew uninstall --cask claude-code  # 卸载（Homebrew）
```
