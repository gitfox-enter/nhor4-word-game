# 🎓 新视野大学英语（第四版）考试备考系统

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-brightgreen)](https://gitfox-enter.github.io/nhor4-exam-prep/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Data Source](https://img.shields.io/badge/Data-ima知识库-orange)](https://ima.qq.com/)

> 📚 **亳州某校酒管2025/2026学年** 在线考试复习工具
>
> 🎮 游戏化练习 · 真实数据驱动 · 考试模式模拟

---

## 📖 课程覆盖

### 读写教程（第四版）
| 单元 | 主题 | 单词量 | 短语量 | 翻译句数 |
|------|------|--------|--------|----------|
| Unit 1 | Life and Logic | 70词 | 18组 | 3句 |
| Unit 3 | Makerspace | 56词 | 18组 | 3句 |
| Unit 4 | Nature and Environment | 68词 | 18组 | 3句 |
| Unit 6 | Energy and Technology | 72词 | 17组 | 3句 |

### 长篇阅读（第四版）
- 📖 阅读理解题目与解析（待补充）

---

## 🎮 功能模块

### 一、单词匹配
- ✅ **考试模式**：随机抽题 + 计时考试 + 答案分析
- ✅ **单元练习**：按单元分类，逐个击破
- ✅ 真实数据：266个真实单词（ima知识库提取）

### 二、短语练习
- ✅ **考试模式**：匹配考试格式 + 答题分析
- ✅ **单元练习**：Expressions in use + Words in use
- ✅ 真实数据：71组短语练习题

### 三、翻译练习
- ✅ **学习模式**：中英文对照记忆卡片
- ✅ **考前速记**：顺口溜记忆法 + 快速浏览
- ✅ 真实数据：12组完整翻译（4单元×3组）
- ✅ 统一格式：英文原文（中文注释）+ 整句中文翻译

### 四、阅读理解
- 📌 **数据来源**：新视野大学英语（第四版）长篇阅读
- 📌 **内容位置**：ima 知识库 Word 文档
- 🔗 [查看完整内容](https://ima.qq.com/wiki/?shareId=84ff2e40cb713e3c1ffc6ab356018018064e46443d449ae6e73911cb1f997f80)

### 五、作文练习
- 📌 **数据来源**：新视野大学英语（第四版）读写教程
- 📌 **内容位置**：ima 知识库 Word 文档
- 🔗 [查看完整内容](https://ima.qq.com/wiki/?shareId=84ff2e40cb713e3c1ffc6ab356018018064e46443d449ae6e73911cb1f997f80)

---

## 🌟 特色亮点

### 1. 真实数据驱动
- 所有单词、短语、翻译数据均来自 **ima 知识库**
- 无虚构内容，确保考试复习的准确性
- 数据透明：每个数据源可追溯

### 2. 游戏化学习
- 🎯 匹配游戏：拖拽交互，趣味记忆
- ⏱️ 计时挑战：模拟真实考试时间压力
- 📊 答题分析：错题回顾，精准复习

### 3. 跨设备适配
- 📱 移动端友好：支持手机、平板随时学习
- 💻 桌面端优化：大屏体验更佳
- ☁️ 在线访问：无需下载，即开即用

### 4. 轻量级设计
- ⚡ 纯前端实现：无需后端服务
- 🚀 CDN 加速：GitHub Pages 托管
- 📦 零依赖：无需安装任何软件

---

## 🚀 快速开始

### 在线访问
🔗 **官网**：https://gitfox-enter.github.io/nhor4-exam-prep/

### 本地运行
```bash
# 克隆仓库
git clone https://github.com/gitfox-enter/nhor4-exam-prep.git

# 进入目录
cd nhor4-exam-prep

# 直接打开 index.html 或使用本地服务器
# 方式一：直接打开
open index.html

# 方式二：Python 简易服务器
python3 -m http.server 8080
# 访问 http://localhost:8080
```

---

## 📊 数据结构

```
data/
├── words.js          # 单词数据（266词）
├── translations.js   # 翻译数据（12组）
└── u1_content.json   # Unit 1 完整内容
```

---

## 🔗 数据来源

### 主要数据来源
📚 **ima 知识库**
- 平台：ima.qq.com
- 课程：大学英语IV
- 内容：单词、短语、翻译、阅读、作文

### 教材来源
- **读写教程**：新视野大学英语（第四版）读写教程
- **长篇阅读**：新视野大学英语（第四版）长篇阅读

---

## 📝 数据说明

### 已提取数据
✅ 单词（266个）：Unit 1/3/4/6 完整词汇表
✅ 短语（71组）：Expressions in use + Words in use
✅ 翻译（12组）：Unit 1/3/4/6 各3句完整翻译

### 待补充数据
📌 阅读理解：存储在 ima 知识库 Word 文档
📌 作文题目：存储在 ima 知识库 Word 文档

> 💡 如需补充阅读理解或作文数据，请在 ima 客户端内导出 Word 文档内容后提供。

---

## 🛠️ 技术栈

- **前端**：HTML5 + CSS3 + Vanilla JavaScript
- **数据**：JSON + JavaScript 数据文件
- **托管**：GitHub Pages
- **设计**：响应式设计 + 移动端优化

---

## 📄 许可证

本项目采用 MIT 许可证。

**数据版权声明**：
- 教材内容版权归出版社所有
- 本项目仅用于学习交流，不得用于商业用途

---

## 🤝 贡献指南

欢迎贡献代码或数据！

### 贡献方式
1. Fork 本仓库
2. 创建新分支 (`git checkout -b feature/新功能`)
3. 提交更改 (`git commit -m "添加某功能"`)
4. 推送分支 (`git push origin feature/新功能`)
5. 创建 Pull Request

### 数据贡献
如有完整的阅读理解或作文数据，欢迎提供！

---

## 📮 联系方式

- **项目维护**：gitfox-enter
- **GitHub Issues**：欢迎提 Issue 反馈问题

---

## 🙏 致谢

感谢以下项目和平台：
- 📚 新视野大学英语教材团队
- 🔗 ima 知识库平台
- ☁️ GitHub Pages 服务

---

**📌 重要提示**：本项目仅供学习交流使用，考试复习请以官方教材为准。

---

**最后更新**：2026-06-28
