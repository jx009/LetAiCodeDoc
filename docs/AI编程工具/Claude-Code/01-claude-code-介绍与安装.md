# Claude Code 介绍与安装指南


## 📋 系统要求

- 支持的操作系统：macOS 10.15+、Ubuntu 20.04+/Debian 10+ 或 Windows 10+（带 WSL 或 Git for Windows）
- 硬件：4GB+ RAM
- 软件：Git（Windows 安装需要）、 Node.js 18+（仅 NPM 安装需要）
- 网络：Anthropic 支持国家/地区的网络连接

## 🚀 安装 Claude Code

原生安装是最推荐的安装方法，并拥有多个优势：
- 一个自包含的可执行文件
- 无 Node.js 依赖
- 改进的自动更新程序稳定性

如果您已有 Claude Code 的现有安装，请使用 `claude install` 迁移到原生二进制安装。

**Windows 系统安装步骤：**
#### 步骤1：安装Git For Windows
在 Windows 上原生安装 Claude Code 需要通过 Git Bash
- Git For Windows 下载地址：https://git-scm.com/install/windows
下载系统对应版本默认选项安装即可，验证安装命令：
```bash
git --version
```
#### 步骤2：安装 Claude Code

之后打开 PowerShell 或 CMD 终端运行以下安装命令即可

Windows PowerShell 安装命令:
```bash
irm https://claude.ai/install.ps1 | iex
```

Windows CMD 安装命令:
```bash
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```
以上都不行的话，就用这个命令：
```bash
winget install Anthropic.ClaudeCode
```
#### 步骤3：添加 PATH 环境变量

Claude 可执行文件所在的目录需要加入系统 PATH，否则 PowerShell 目前无法识别 claude 命令，参考路径：

`C:\Users\你的用户名\.local\bin`

请通过以下步骤添加：打开系统属性 → 环境变量 → 编辑用户 PATH → 新建 → 添加上方的Claude安装路径。

![图片.png](https://api.apifox.com/api/v1/projects/7177090/resources/588356/image-preview)

完成后重启PowerShell终端或电脑即可

**macOS / Linux 系统安装步骤：**

macOS, Linux, WSL 安装指令:
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Homebrew (macOS, Linux) 安装命令:
```bash
brew install --cask claude-code
```

> 💡 **提示**：如果您已经安装了 Node.js 18.0 或更高版本，也可以使用 NPM 方式进行安装

NPM 安装指令： 
```bash
npm install -g @anthropic-ai/claude-code
```

最后在新的终端输入命令验证是否成功安装：

```bash
claude --version
```

## 获取API Key

**1. 获取 Auth Token**
访问 [LetAiCode](https://letaicode.cn/?aff=vibe) 站点页面进行以下操作：

  - 点击 **接口密钥** 页面
  - 点击 **创建新密钥**
  - 密钥类型选择：**claude**（务必选择此分组，否则无法使用）
  - 令牌名称随意



**2. 配置文件**

> **重要提示**：请将下方的 `sk-xxx` 替换为您在 LetAiCode 生成的实际 API 密钥！
> **重要提示**：请将下方的 `sk-xxx` 替换为您在 LetAiCode 生成的实际 API 密钥！
> **重要提示**：请将下方的 `sk-xxx` 替换为您在 LetAiCode 生成的实际 API 密钥！


## ⚙️  配置并开始使用


您需要准备两个重要的配置项：

| 配置项 | 说明 | 获取方式 |
|--------|------|----------|
| **ANTHROPIC_AUTH_TOKEN** | API 认证令牌 | 注册后在 `接口密钥` 页面点击 `创建新密钥` 获得，选择claude code类型获得（以 `sk-` 开头） |
| **ANTHROPIC_BASE_URL** | API 服务地址 | 使用 `https://letaicode.cn/claude` |


#### 然后新建或修改 `settings.json` 配置文件，配置文件位于：

•  Windows: C:\Users\用户名文件夹\ .claude\settings.json
•  Mac: ~/.claude/settings.json 或 .claude/settings.json
•  Linux: ~/.claude/settings.json

写入以下配置信息，将`ANTHROPIC_AUTH_TOKEN` 替换为你的API令牌，`ANTHROPIC_MODEL` 可以替换为您需要的其他模型ID

```bash
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "sk-你的API令牌",
    "ANTHROPIC_BASE_URL": "https://letaicode.cn/claude",
    "ANTHROPIC_MODEL": "claude-opus-4-8",
    "ANTHROPIC_SMALL_FAST_MODEL": "claude-opus-4-8"
  }
}
```
PS：如果你想要换模型，直接在ANTHROPIC_MODEL这里配置对应的模型即可，比如要配置opus4.7则把 claude-opus-4-8 改为 claude-opus-4-7，不过opus预算不足的用户，不推荐用，比较贵。

#### Ubuntu/macOS可通过 vi或者vim命令直接创建或者修改vim `settings.json`文件

```bash
vim  ~/.claude/settings.json
```

#### 在您的项目目录下输入Claude 即可启动并运行 Claude Code：

```bash
cd /path/to/your/project
claude
```

#### 初次运行配置

启动后，您将看到以下配置步骤：

1. **选择主题** → 选择您喜欢的主题 + 按 Enter
2. **安全须知** → 确认安全须知 + 按 Enter
3. **Terminal 配置** → 使用默认配置 + 按 Enter
4. **工作目录信任** → 信任当前目录 + 按 Enter

✨ **恭喜！** 现在您可以开始与您的 AI 编程搭档一起写代码了！


## ❓ 常见问题解答

### Q: 遇到 "Invalid API Key · Please run /login" 错误？

**A:** 这表明 Claude Code 未检测到环境变量。请检查：
- 是否正确设置了 `ANTHROPIC_AUTH_TOKEN` 和 `ANTHROPIC_BASE_URL`
- 环境变量值是否正确（令牌以 `sk-` 开头）
- 如果使用了永久配置，是否重启了终端

### Q: PowerShell 无法安装脚本，遇到执行策略报错问题？

**A:** 以 管理员身份运行选项 启动 PowerShell，运行这行命令：`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`

### Q: 为什么显示 "offline" 状态？

**A:** Claude Code 通过连接 Google 来判断网络状态。显示 "offline" 不影响正常使用，只是表明无法连接到 Google。

### Q: 为什么浏览网页的 Fetch 会失败？

**A:** Claude Code 在访问网页前需要调用 Claude 服务进行安全检查。您需要：
- 保持稳定的国际互联网连接
- 必要时使用全局代理

### Q: 请求总是显示 "fetch failed"？

**A:** 可能是网络环境导致的问题。解决方案：
1. 尝试使用代理工具


### Q: API 报错如何处理？

**A:** 可能是转发代理不稳定导致的，建议：
- 退出 Claude Code（Ctrl+C）
- 重新运行 `claude` 命令
- 如果问题持续，请稍后再试

### Q: 网页登录错误？

**A:** 尝试清除本站的 Cookie，然后重新登录。

## 🔗 相关链接

- [Claude Code 官方文档](https://docs.anthropic.com)
- [Node.js 官方网站](https://nodejs.org)

---

💡 **提示**：如遇到其他问题，请查看官方文档或联系技术支持。
```

## 继续阅读

- [Claude Code 快速入门](./02-claude-code-快速入门)
- [Claude Code 进阶技巧](./03-claude-code-进阶技巧)
- [Claude Code 命令速查表](./04-claude-code-命令速查表)
