# Claude Code 命令速查表

## 启动命令

```bash
claude                      # 交互模式
claude "你的指令"            # 带指令启动
claude -p "查询内容"         # 单次查询
claude commit               # 自动提交
claude update               # 更新
```

## 交互模式命令

| 命令 | 功能 |
|------|------|
| `/help` | 显示帮助 |
| `/login` | 登录/切换账号 |
| `/clear` | 清除对话 |
| `/resume` | 恢复历史对话 |
| `/config` | 查看/修改配置 |
| `/model` | 切换模型 |
| `/compact` | 压缩上下文 |
| `/diff` | 查看文件改动 |
| `/review` | 代码审查 |

## 快捷键

| 快捷键 | 功能 |
|--------|------|
| `Tab` | 自动补全 |
| `Ctrl+C` | 中断当前操作 |
| `Ctrl+D` | 退出 |
| `↑`/`↓` | 浏览历史指令 |
| `Shift+Enter` | 换行（多行输入） |

## 环境变量

```bash
export ANTHROPIC_API_KEY="sk-ant-xxx"
export HTTPS_PROXY="http://127.0.0.1:7890"
```

## 配置文件位置

| 文件 | 位置 | 作用 |
|------|------|------|
| 全局设置 | `~/.claude/settings.json` | 应用全局配置 |
| 全局规范 | `~/.claude/CLAUDE.md` | 所有项目的 AI 规范 |
| 项目规范 | `./CLAUDE.md` | 当前项目的 AI 规范 |

## 常见问题速查

| 问题 | 解决 |
|------|------|
| 命令找不到 | 检查 PATH |
| 认证失败 | `/login` 重新登录 |
| 响应慢 | `/model` 切 Haiku |
| 上下文溢出 | `/compact` |
| 网络超时 | 设置代理 |
