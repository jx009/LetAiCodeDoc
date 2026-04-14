# 版本控制基础：Git 与 GitHub

## 为什么需要版本控制？

想象一下这个场景：

> 你做了一个很棒的个人网站 v1.0。然后你让 AI 大改了一番，加了动画、换了配色，变成了 v2.0。结果 v2.0 改坏了——动画有 bug，配色也不好看。你想回到 v1.0……
>
> 但是 v1.0 已经被覆盖了。没了。

如果你用了版本控制，**一条命令就能回到 v1.0**。

**版本控制**就像一台"时光机"，记录你项目的每一次变化，随时可以回到任意一个历史版本。它是你做 Vibe Coding 的**安全网**——有了它，你可以放心大胆地让 AI 做任何修改。

## Git 基础概念

**Git** 是最流行的版本控制工具，全世界的开发者都在用它。**GitHub** 是基于 Git 的在线平台，可以把你的代码存到云端。

先理解几个核心概念（不用背，用的时候自然就记住了）：

| 概念 | 通俗理解 | 类比 |
|------|---------|------|
| **仓库（Repository）** | 被 Git 管理的项目文件夹 | 一个带历史记录的抽屉 |
| **提交（Commit）** | 保存当前版本的快照 | 给当前状态拍照片 |
| **暂存区（Stage）** | 标记哪些文件要拍照 | 把人摆好位置准备拍照 |
| **分支（Branch）** | 独立的工作线 | 平行宇宙 |
| **推送（Push）** | 把本地版本上传到 GitHub | 备份到云盘 |
| **拉取（Pull）** | 从 GitHub 下载最新版本 | 从云盘同步到本地 |

## 安装 Git

### macOS

Git 通常已经预装了。打开终端输入：

```bash
git --version
```

如果显示版本号（如 `git version 2.x.x`），说明已安装。如果没有：

```bash
brew install git
```

### Windows

1. 访问 [git-scm.com](https://git-scm.com)
2. 下载 Windows 版本
3. 安装时全部选默认选项即可

### 首次配置（只需要做一次）

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```

这是告诉 Git 你是谁。每次提交代码会带上你的名字和邮箱。

## 最常用的 Git 命令

你日常只需要记住这几个命令就够了：

### 初始化仓库（项目开始时做一次）

```bash
cd my-project     # 进入项目文件夹
git init          # 初始化 Git 仓库
```

### 查看当前状态

```bash
git status        # 看看有什么文件被改了
```

红色文字 = 有改动但还没保存为版本；绿色文字 = 已标记准备保存。

### 保存一个版本（最常用的操作）

```bash
git add .                    # 1. 标记所有改动的文件
git commit -m "描述这次改了什么"  # 2. 保存版本快照
```

这两条命令合起来 = "拍一张照片并写上备注"。

**提交信息怎么写？** 简短描述改了什么就行：

```bash
git commit -m "v1.0: 初始版本，基本简历页面"
git commit -m "添加暗色模式切换功能"
git commit -m "修复手机端布局错位问题"
git commit -m "更新联系方式区域，添加微信二维码"
```

### 查看历史版本

```bash
git log --oneline    # 简洁地查看所有版本
```

输出类似：

```text
a1b2c3d 添加暗色模式切换功能
e4f5g6h v1.0: 初始版本，基本简历页面
```

前面那串字母数字（`a1b2c3d`）是版本 ID。

### 回到之前的版本

```bash
git log --oneline              # 先看看有哪些版本
git checkout e4f5g6h           # 跳到某个版本查看
git checkout main              # 回到最新版本
```

> 💡 **这就是版本控制的魅力**——大胆改，改坏了随时回退。再也不用担心 AI 把好好的代码改坏了。

## 实操：给你的简历项目加上版本控制

### 步骤 1：初始化

```bash
cd my-resume     # 进入之前做的简历项目
git init         # 初始化
```

### 步骤 2：保存第一个版本

```bash
git add .
git commit -m "v1.0: 初始版本，基本简历页面"
```

### 步骤 3：让 AI 做修改

用 [Codex](../AI编程工具/Codex/02-codex-快速入门) 或其他工具对页面做一些修改（比如改配色、加动画）。

### 步骤 4：保存第二个版本

```bash
git add .
git commit -m "v1.1: 更换配色为暗色主题，添加滚动动画"
```

### 步骤 5：如果改坏了，一秒回退

```bash
git log --oneline
# 输出：
# a1b2c3d v1.1: 更换配色为暗色主题，添加滚动动画
# e4f5g6h v1.0: 初始版本，基本简历页面

git checkout e4f5g6h    # 瞬间回到 v1.0
# 看看旧版本的效果...

git checkout main       # 回到最新版本
```

### 日常工作流

养成这个习惯：**每完成一个功能就 commit 一次**。

```text
让 AI 做了一个改动
    ↓
自己测试一下，确认没问题
    ↓
git add . && git commit -m "简短描述"
    ↓
继续下一个功能……
```

## GitHub：把代码存到云端

### 为什么用 GitHub？

- 📁 **云端备份**：电脑坏了代码也不会丢
- 🌍 **在线展示**：方便分享给别人看
- 🚀 **部署**：GitHub Pages 可以直接建站
- 🤝 **协作**：多人一起开发（以后可能会用到）

### 步骤 1：注册 GitHub 账号

去 [github.com](https://github.com) 注册。

### 步骤 2：创建仓库

1. 点击右上角 `+` → `New repository`
2. 填写仓库名（比如 `my-resume`）
3. 选择 **Public**（公开）
4. **不要**勾选任何初始化选项
5. 点击 **Create**

### 步骤 3：推送代码到 GitHub

创建完仓库后，GitHub 会给你几行命令，大概长这样：

```bash
git remote add origin https://github.com/你的用户名/my-resume.git
git branch -M main
git push -u origin main
```

复制粘贴执行即可。可能需要输入 GitHub 用户名和 Token（密码已经不支持了，需要用 Personal Access Token）。

### 步骤 4：后续更新

以后每次改完代码，用这三步上传：

```bash
git add .
git commit -m "描述这次改了什么"
git push
```

## 用 AI 帮你做 Git 操作

其实你不用记这些命令——大部分 AI 编程工具都能直接帮你执行 Git 操作：

```text
帮我初始化一个 Git 仓库，并创建第一个提交，提交信息为"初始版本"。
```

```text
帮我把代码推送到 GitHub。
我的仓库地址是 https://github.com/xxx/my-project.git
```

```text
帮我查看 Git 历史，并回退到上一个版本。
```

```text
帮我创建一个叫 feature/dark-mode 的新分支。
```

如果你也在用 [Claude Code](../AI编程工具/Claude-Code/02-claude-code-快速入门)，它甚至有专门的快捷命令：

```bash
claude commit    # 自动分析改动，生成提交信息，一键提交
```

## .gitignore：忽略不需要的文件

有些文件不应该放到 Git 里（比如 API 密钥、临时文件、系统文件）。在项目根目录创建一个 `.gitignore` 文件：

```text
# 系统文件
.DS_Store
Thumbs.db

# 环境变量（包含密钥，绝对不能上传）
.env

# 依赖目录
node_modules/

# 日志
*.log

# 编辑器配置
.vscode/
.idea/
```

或者直接让 AI 帮你生成：

```text
帮我创建一个 .gitignore 文件，适用于前端静态网站项目。
```

## Git 命令速查表

| 操作 | 命令 | 什么时候用 |
|------|------|-----------|
| 初始化 | `git init` | 项目开始时 |
| 查看状态 | `git status` | 随时看看 |
| 标记改动 | `git add .` | 准备保存版本时 |
| 保存版本 | `git commit -m "说明"` | 完成一个功能时 |
| 查看历史 | `git log --oneline` | 想看之前的版本 |
| 回到旧版本 | `git checkout 版本ID` | 想看旧版本 |
| 回到最新 | `git checkout main` | 看完旧版本回来 |
| 推送到 GitHub | `git push` | 想备份到云端 |
| 从 GitHub 拉取 | `git pull` | 想同步最新代码 |

## 小结

**版本控制是你做 Vibe Coding 的安全网。** 有了它，你可以放心大胆地让 AI 做任何修改——改坏了，一条命令回退。

养成习惯：**每完成一个功能就 commit 一次。** 这个习惯会在某一天救你一命。

🎉 **恭喜你完成了基础入门篇的所有内容！** 接下来可以去看：
- [AI 编程工具详细教程](../AI编程工具/)
- [实战案例](../实战案例/)

## 继续阅读

- [Codex 快速入门](../AI编程工具/Codex/02-codex-快速入门)
- [Claude Code 快速入门](../AI编程工具/Claude-Code/02-claude-code-快速入门)
- [发布你的作品：从本地到线上](./05-发布你的作品-从本地到线上)
