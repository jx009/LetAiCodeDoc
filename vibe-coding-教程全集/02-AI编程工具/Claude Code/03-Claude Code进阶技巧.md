# Claude Code 进阶技巧

## CLAUDE.md：项目级配置文件

在项目根目录创建 `CLAUDE.md`，定义项目规范。Claude 启动时自动读取。

优先级：子目录 > 项目根目录 > 全局（`~/.claude/CLAUDE.md`）

## Hooks：自动化钩子

在 `~/.claude/settings.json` 中配置，可以在保存文件时自动格式化、提交前自动 lint 等。

## Multi-Agent：多代理协同

对于复杂任务，Claude Code 支持启动多个子代理并行处理。用 `/agent` 查看和切换。

## 模型选择策略

| 模型 | 特点 | 适合 |
|------|------|------|
| Claude Opus 4.6 | 最强推理 | 架构设计、复杂重构 |
| Claude Sonnet 4 | 平衡 | 日常开发 |
| Claude Haiku | 最快最便宜 | 简单查询 |

## 与 Git 深度集成

```bash
claude commit          # 自动生成提交信息
```

也可以让 Claude 帮你创建分支、写 PR 描述、查看改动等。

## 实用命令合集

- 分析 TODO/FIXME 注释
- 安全审计（硬编码密钥检查）
- 性能分析
- 重构建议
- 文档生成
