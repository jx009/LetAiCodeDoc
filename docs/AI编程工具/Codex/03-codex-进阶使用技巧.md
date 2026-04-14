# Codex 进阶使用技巧

## 模型选择与切换

| 模型 | 特点 | 适合场景 | 成本 |
|------|------|---------|------|
| gpt-5.3-codex | 代码专用，最强 | 复杂开发 | 高 |
| o4-mini | 轻量快速 | 简单任务 | 低 |

```bash
codex --model o4-mini  # 启动时指定
/model gpt-5.3-codex   # 交互中切换
```

## 配置文件

用户级 `~/.codex/config.toml`，项目级 `.codex/config.toml`：

```toml
model = "gpt-5.3-codex"
model_reasoning_effort = "medium"

[profiles.dev]
model = "gpt-5.3-codex"
model_reasoning_effort = "high"

[profiles.quick]
model = "o4-mini"
model_reasoning_effort = "low"
```

使用：`codex -p dev` 或 `codex -p quick`

## AGENTS.md：给 AI 的说明书

在项目根目录创建 `AGENTS.md`，写明项目概述、技术规范、设计规范、文件结构、注意事项。Codex 启动时会自动读取。上下文管理的思路也可以结合 [进阶提示词技巧](../../基础入门/07-进阶提示词技巧) 一起看。

## MCP 集成

```bash
codex mcp add playwright -- npx @playwright/mcp@latest
```

让 Codex 能操作浏览器、查询数据库等。

## Shell 别名

```bash
alias cxd='codex -m gpt-5.3-codex -c model_reasoning_effort="high" --search'
alias cxr='codex -m gpt-5.3-codex --sandbox read-only'
alias cxq='codex -m o4-mini -c model_reasoning_effort="medium"'
```

## 成本控制

1. 简单任务用 o4-mini，复杂任务用 gpt-5.3-codex
2. 默认 medium 推理就够了
3. 对话太长时用 `/compact`
4. 有 ChatGPT 订阅就用 `codex login` 走订阅额度

排查问题时，可以顺手参考 [Codex 常见问题与解决方案](./04-codex-常见问题)。

## 继续阅读

- [Codex 快速入门](./02-codex-快速入门)
- [Codex 常见问题与解决方案](./04-codex-常见问题)
- [进阶提示词技巧：让 AI 更好地为你工作](../../基础入门/07-进阶提示词技巧)
