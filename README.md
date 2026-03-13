# LoveCoding 技术文档

基于 VitePress 构建的技术文档网站，涵盖 iOS、Android、Web、Server、AI 等技术类目。

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run docs:dev
```

访问 http://localhost:5173 查看网站。

### 构建生产版本

```bash
npm run docs:build
```

### 预览构建结果

```bash
npm run docs:preview
```

## 项目结构

```
docs/
├── .vitepress/
│   └── config.ts          # VitePress 配置
├── ios/                   # iOS 开发文档
├── android/               # Android 开发文档
├── web/                   # Web 开发文档
├── server/                # 服务端开发文档
├── ai/                    # AI 技术文档
├── public/                # 静态资源
└── index.md               # 首页
```

## Markdown 扩展

- 脚注支持
- 代码高亮
- 任务列表
- 自定义容器

## 部署

本项目配置了 GitHub Actions，每次 push 到 main 分支会自动部署到 GitHub Pages。
