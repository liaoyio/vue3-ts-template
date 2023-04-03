# 🎉 Vue3-Ts-Template

## 介绍 📖

- 项目架构: 基于 Vue3、TypeScript、Vite3, 已配置TS，并兼容JS、TS。

### 参考文档

- [🚀 Vite 构建工具](https://cn.vitejs.dev/)
- [🚀 Vue3 Composition API](https://cn.vuejs.org/)
- [🚀 Vue Router v4.x](https://router.vuejs.org/zh/guide/) 
- [🚀 Pinia🍍 (Vue.js 状态管理库)](https://pinia.vuejs.org/zh/)
- [🚀 Element-Plus (UI组件库)](https://element-plus.gitee.io/zh-CN/)
- [🚀 Tailwind CSS](https://www.tailwindcss.cn/docs)


### 安装使用步骤 📔


- **克隆项目**

```shell
git clone git@github.com:montplex/engula-web-client.git
```

- **安装依赖：**

```shell
# 请使用nodejs 16+

pnpm install
```

- **运行：**

```shell
pnpm run dev
pnpm run serve
```

- **打包：**

```shell
# 开发环境
pnpm run build:dev

# 生产环境
pnpm run build:pro
```

- **检测：**

```text
# eslint 检测代码
pnpm run lint:eslint

# prettier 格式化代码
pnpm run lint:prettier

# stylelint 格式化样式
lint:stylelint
```



### 文件资源目录 📚

```text
vue-diverse-admin
├─ .vscode                # vscode推荐配置
├─ public                 # 静态资源文件（忽略打包）
├─ mock                   # moke文件 依赖于 vite-plugin-mock（只在开发环境有效）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ directives          # 全局指令文件
│  ├─ hooks               # 常用 Hooks   
│  ├─ plugins             # mian.js/ts 入口文件配置 (插件目录)
│  ├─ routers             # 路由管理
│  ├─ stores              # pinia 状态管理
│  ├─ styles              # 全局样式
│  ├─ utils               # 工具库
│  ├─ views               # 项目所有页面
│  ├─ App.vue             # 入口页面
│  └─ main.js             # 入口文件
├─ types                  # ts类型声明文件
├─ vite                   # vite 配置
├─ .editorconfig          # 编辑器配置（格式化）
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .eslintignore          # eslint 忽略校验配置文件
├─ .eslintrc.js           # eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # prettier 忽略校验配置文件
├─ .prettierrc.js         # prettier 配置
├─ .stylelintignore       # Stylelint 忽略校验配置文件
├─ .stylelintrc.js        # stylelint 样式格式化配置
├─ CHANGELOG.md           # 项目更新日志
├─ commitlint.config.js   # git 提交规范配置
├─ index.html             # 入口 html
├─ lint-staged.config     # lint-staged 配置文件
├─ package-lock.json      # 依赖包 (包版本锁)
├─ package.json           # 依赖包管理
├─ postcss.config.js      # postcss 配置
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 配置
```
