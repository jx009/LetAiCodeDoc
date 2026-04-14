# 如何使用 Skill

## 安装 Skill

### 方式一：从 Skill 市场安装
打开 AI 编程工具 → 进入 Skill 市场 → 搜索 → 安装

### 方式二：手动安装
**用户级**（所有项目可用）：`~/.workbuddy/skills/my-skill/SKILL.md`
**项目级**（仅当前项目）：`your-project/.workbuddy/skills/my-skill/SKILL.md`

### 方式三：从 GitHub 安装
```bash
cd ~/.workbuddy/skills/
git clone https://github.com/xxx/awesome-skill.git
```

## 使用 Skill

安装后，Skill 根据触发条件自动激活。比如你说"帮我处理这个 Excel"，Excel Skill 自动加载。

## 管理 Skill

```bash
ls ~/.workbuddy/skills/         # 查看已安装
cd ~/.workbuddy/skills/xxx && git pull  # 更新
rm -rf ~/.workbuddy/skills/xxx  # 卸载
```

## 实用建议

1. **先用现成的**，再考虑自己做
2. **组合使用**，多个 Skill 可以同时生效
3. **定期更新**
4. **安全检查**，安装前看看 SKILL.md 内容
