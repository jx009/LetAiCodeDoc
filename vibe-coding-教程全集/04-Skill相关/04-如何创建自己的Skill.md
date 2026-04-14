# 如何创建自己的 Skill

## 为什么要自己创建？

- 🎯 完全按照你的工作流定制
- 🔄 团队统一的开发规范
- 📦 做一次，用无数次
- 🌍 发布出去帮助更多人

## SKILL.md 模板

```markdown
---
name: "skill-name"
description: "一句话描述"
version: "1.0.0"
author: "你的名字"
tags: ["标签1", "标签2"]
triggers: ["触发词1", "触发词2"]
---

# Skill 名称

## 概述
[详细描述功能和用途]

## 执行步骤
### 步骤 1：...
### 步骤 2：...

## 输出规范
- 代码风格：...
- 命名规范：...

## 注意事项
- 不要做什么
- 特殊情况处理
```

## 实战：创建"前端组件生成"Skill

创建 `~/.workbuddy/skills/frontend-component/SKILL.md`，写明：
- 使用 BEM 命名法
- 暗色主题 CSS 变量
- 响应式要求
- 中文注释

安装后每次说"创建组件"，AI 都会自动遵循这些规范。

## 发布与分享

1. 创建 GitHub 仓库
2. 推送 Skill 文件
3. 写好 README
4. 添加 `ai-skill` 标签

## 最佳实践目录结构

```text
my-skill/
├── SKILL.md
├── README.md
├── scripts/
├── templates/
├── references/
└── examples/
```

**记住**：好的 Skill 是迭代出来的。先写简单版本，用着用着改进。
