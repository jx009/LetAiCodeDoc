# Codex 介绍与安装指南
codex 有命令行版本，也有桌面版本，如果你想要看桌面版本的，可以看这个教程：[Codex Desktop 安装与配置使用教程](https://letaicode.cn/docs/codex-desktop?aff=vibe)，不过我推荐你就按照命令行版本的弄，弄完你要按照桌面版本的话，直接打开就可以用了，不需要任何配置。

下面我们以中转站来配置 codex，中转站比较简单且不需要科学上网，如果你有自己的帐号，也可以不需要配置 API Key 这些，而是直接登陆，不过考虑到大部分是没有帐号的，所以下面用中转站作为配置掩饰


## Windows 版本教程

### 系统要求
- Windows 10 或 Windows 11
- Node.js 22+
- npm 10+
- 网络连接

### 安装步骤

**前置步骤！！！**
安装 Git Bash，请访问 [Git - Downloads](https://git-scm.com/downloads) 下载对应您电脑系统的版本，之后一直点击“下一步”即可完成安装。

**1. 安装 Node.js**
访问 [Node.js 官网](https://nodejs.org/) 下载并安装最新 LTS 版本。

**2. 安装 codex**
打开命令提示符 (CMD) 或 PowerShell，运行：
```bash
npm install -g @openai/codex
````

**3. 验证安装**
打开命令提示符 (CMD) 或 PowerShell，运行：

```bash
codex --version
```

### 配置 API

**1. 获取 Auth Token**
访问 [LetAiCode](https://letaicode.cn/?aff=vibe) 站点页面进行以下操作：

  - 点击 **接口密钥** 页面
  - 点击 **创建新密钥**
  - 密钥类型选择：**codex**（务必选择此分组，否则无法使用）
  - 令牌名称随意



**2. 配置文件**

> **重要提示**：请将下方的 `sk-xxx` 替换为您在 LetAiCode 生成的实际 API 密钥！
> **重要提示**：请将下方的 `sk-xxx` 替换为您在 LetAiCode 生成的实际 API 密钥！
> **重要提示**：请将下方的 `sk-xxx` 替换为您在 LetAiCode 生成的实际 API 密钥！

1.  进入当前用户的用户目录下的 `.codex` 文件夹中，例如：`C:\Users\testuser\.codex`。
    （**注意**：如果看不到该目录，说明您没有打开 Windows 的“显示隐藏的项目”，请先在文件资源管理器中开启。）
    
![image.png](https://api.apifox.com/api/v1/projects/5443236/resources/575120/image-preview)

2.  如果没有 `.codex` 文件夹，请手动创建该文件夹，然后在其中创建 `config.toml` 以及 `auth.json` 两个文件。

![image.png](https://api.apifox.com/api/v1/projects/5443236/resources/575121/image-preview)

3.  **填写配置** (需要将 `sk-xxx` 替换成您自己创建的真实 SK)。

a、`auth.json` 中的配置（注意，如果文件里有其他内容，直接覆盖原有的哈）：

```json
{"OPENAI_API_KEY":"sk-xxx"}
```
> 注意注意注意，auth.json文件里，只保留上面这一行内容，其他全部删除，一定要删除，一定要删除，一定要删除，否则会报401


b、`config.toml` 中的配置直接复制下面的内容（注意，如果文件里有其他内容，直接覆盖原有的哈）：
    `model_reasoning_effort` 可选值为 `high`, `medium`, `low`，分别代表模型思考的努力程度（高、中、低）。

```toml
    model_provider = "letaicode"
    model = "gpt-5.5"
    model_reasoning_effort = "high"
    disable_response_storage = true
    preferred_auth_method = "apikey"

    [model_providers.letaicode]
    name = "letaicode"
    base_url = "https://letaicode.cn/codex"
    wire_api = "responses"
    requires_openai_auth = false
```
其中，model = "gpt-5.5" 这一行，你可以指定具体的模型，如果你想用最新的 gpt-5.4， 也可以改成 model = "gpt-5.4"

> 注意注意注意，上面这些内容，一定要放在config文件最上面，一定要放在最上面，一定要放在最上面！！！！否则会报错

### 启动 codex

**重启终端！重启终端！重启终端！**
然后进入到您的工程目录：

```bash
cd your-project-folder
```

运行以下命令启动：

```bash
codex
```


![image.png](https://api.apifox.com/api/v1/projects/5443236/resources/575122/image-preview)

## Mac 版本教程

### 系统要求

  - macOS 12 或更高版本
  - Node.js 22+
  - npm 10+
  - 网络连接

### 安装步骤

**1. 安装 Node.js**

  - **方式一**：直接访问 [Node.js 官网](https://nodejs.org/) 下载并安装最新 LTS 版本。
  - **方式二**：使用 Homebrew（推荐）
    ```bash
    # 如果尚未安装 Homebrew，请先运行此命令
    /bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"

    # 安装 Node.js
    brew install node
    ```

**2. 安装 codex**
打开终端 (Terminal)，运行（可能需要加 `sudo`）：

```bash
npm install -g @openai/codex
```

**3. 验证安装**
打开终端 (Terminal)，运行：

```bash
codex --version
```

### 配置 API

**1. 获取 Auth Token**
访问 [LetAiCode](https://letaicode.cn/?aff=vibe) 站点页面进行以下操作：

  - 点击 **接口密钥** 页面
  - 点击 **创建新密钥**
  - 密钥类型选择：**codex**（务必选择此分组，否则无法使用）
  - 令牌名称随意


**2. 配置文件**

> **重要提示**：请将下方的 `sk-xxx` 替换为您在 LetAiCode 生成的实际 API 密钥！
> **重要提示**：请将下方的 `sk-xxx` 替换为您在 LetAiCode 生成的实际 API 密钥！
> **重要提示**：请将下方的 `sk-xxx` 替换为您在 LetAiCode 生成的实际 API 密钥！

1、创建目录和文件：

```bash
    mkdir -p ~/.codex
    touch ~/.codex/auth.json
    touch ~/.codex/config.toml
```

2、编辑 `auth.json` 文件：

```bash
    vi ~/.codex/auth.json
```

按 `i` 进入插入模式，粘贴以下内容（将 `sk-xxx` 替换为您的密钥），然后按 `ESC` 键，输入 `:wq` 并回车保存退出。

```json
    {"OPENAI_API_KEY": "sk-xxx"}
```
> 注意注意注意，auth.json文件里，只保留上面这一行内容，其他全部删除，一定要删除，一定要删除，一定要删除，否则会报401

3、编辑 `config.toml` 文件：

```bash
    vi ~/.codex/config.toml
```

按 `i` 进入插入模式，粘贴以下内容，然后按 `ESC` 键，输入 `:wq` 并回车保存退出。

```toml
    model_provider = "letaicode"
    model = "gpt-5.5"
    model_reasoning_effort = "high"
    disable_response_storage = true
    preferred_auth_method = "apikey"

    [model_providers.letaicode]
    name = "letaicode"
    base_url = "https://letaicode.cn/codex"
    wire_api = "responses"
```
PS：（注意，如果文件里有其他内容，直接覆盖原有的哈）

其中，model = "gpt-5.5" 这一行，你可以指定具体的模型，如果你想用最新的 gpt-5.4， 也可以改成 model = "gpt-5.4"
> 注意注意注意，上面这些内容，一定要放在config文件最上面，一定要放在最上面，一定要放在最上面！！！！


### 启动 codex

**重启终端！重启终端！重启终端！**
然后进入到您的工程目录：

```bash
cd your-project-folder
```

运行以下命令启动：

```bash
codex
```

## Linux 版本教程

### 系统要求

  - 主流 Linux 发行版 (Ubuntu 20.04+, Debian 10+, CentOS 7+, etc.)
  - Node.js 22+
  - npm 10+
  - 网络连接

### 安装步骤

**1. 安装 Node.js**

  - **Ubuntu/Debian**
    ```bash
    sudo apt update
    curl -fsSL [https://deb.nodesource.com/setup_lts.x](https://deb.nodesource.com/setup_lts.x) | sudo -E bash -
    sudo apt-get install -y nodejs
    ```
  - **CentOS/RHEL/Fedora**
    ```bash
    # 使用 dnf (Fedora) 或 yum (CentOS/RHEL)
    sudo dnf install nodejs npm
    # 或
    sudo yum install nodejs npm
    ```
  - **Arch Linux**
    ```bash
    sudo pacman -S nodejs npm
    ```

**2. 安装 codex**
打开终端 (Terminal)，运行：

```bash
sudo npm install -g @openai/codex
```

**3. 验证安装**
打开终端 (Terminal)，运行：

```bash
codex --version
```

### 配置 API

**1. 获取 Auth Token**
访问 [LetAiCode](https://letaicode.cn/?aff=vibe) 站点页面进行以下操作：

  - 点击 **接口密钥** 页面
  - 点击 **创建新密钥**
  - 密钥类型选择：**codex**（务必选择此分组，否则无法使用）
  - 令牌名称随意



**2. 配置文件**

> **重要提示**：请将下方的 `sk-xxx` 替换为您在 LetAiCode 生成的实际 API 密钥！
> **重要提示**：请将下方的 `sk-xxx` 替换为您在 LetAiCode 生成的实际 API 密钥！
> **重要提示**：请将下方的 `sk-xxx` 替换为您在 LetAiCode 生成的实际 API 密钥！

1、创建目录和文件：
```bash
    mkdir -p ~/.codex
    touch ~/.codex/auth.json
    touch ~/.codex/config.toml
```
2、编辑 `auth.json` 文件：
```bash
    vi ~/.codex/auth.json
```

按 `i` 进入插入模式，粘贴以下内容（将 `sk-xxx` 替换为您的密钥），然后按 `ESC` 键，输入 `:wq` 并回车保存退出。
```json
    {"OPENAI_API_KEY": "sk-xxx"
```

> 注意注意注意，auth.json文件里，只保留上面这一行内容，其他全部删除，一定要删除，一定要删除，一定要删除，否则会报401


3、编辑 `config.toml` 文件：

```bash
vi ~/.codex/config.toml
```
按 `i` 进入插入模式，粘贴以下内容，然后按 `ESC` 键，输入 `:wq` 并回车保存退出。
```toml
    model_provider = "letaicode"
    model = "gpt-5.5"
    model_reasoning_effort = "high"
    disable_response_storage = true
    preferred_auth_method = "apikey"

    [model_providers.letaicode]
    name = "letaicode"
    base_url = "https://letaicode.cn/codex"
    wire_api = "responses"
```
其中，model = "gpt-5.5" 这一行，你可以指定具体的模型，如果你想用最新的 gpt-5.4， 也可以改成 model = "gpt-5.4"

> 注意注意注意，上面这些内容，一定要放在config文件最上面，一定要放在最上面，一定要放在最上面！！！！否则会报错

### 启动 codex

**重启终端！重启终端！重启终端！**
然后进入到您的工程目录：

```bash
cd your-project-folder
```

运行以下命令启动：

```bash
codex
```


![image.png](https://api.apifox.com/api/v1/projects/5443236/resources/575125/image-preview)
## VSCode 插件 codex

以上配置完成后，在 VSCode 扩展商店中搜索并安装 `codex` 即可。

![image.png](https://api.apifox.com/api/v1/projects/5443236/resources/575126/image-preview)
安装完成后会出现在侧边栏。

![image.png](https://api.apifox.com/api/v1/projects/5443236/resources/575127/image-preview)


找到并点击Settings，以打开VSCode系IDE的 settings.json文件


![图片.png](https://api.apifox.com/api/v1/projects/7177090/resources/592140/image-preview)
 
在 settings.json 文件末尾，添加以下配置⚠️注意：这里的apikey字段 无需更改！！ 即，将以下内容原封不动粘贴即可！！

-----

```bash
"chatgpt.apiBase":"https://letaicode.cn/codex",
"chatgpt.config":{
"preferred_auth_method":"apikey"
}
```

## codex 桌面客户端
配置方法和 上面的 codex cli 一样，没生效可能需要手动更改一下配置文件

设置 -> 配置 -> Custom config.toml settings 下面的 user config 换成你配置的路径


## 常见问题

**出现错误请按照如下步骤排查：**

1.  确认 API Key 创建是否正确：额度选择**无限额度**，不要限制模型，分组选择 **codex渠道**。


更多 codex 配置及使用详情请参考 **codex 官方教程**。


- [Codex 快速入门](./02-codex-快速入门)
- [Codex 进阶使用技巧](./03-codex-进阶使用技巧)
- [Codex 常见问题与解决方案](./04-codex-常见问题)
