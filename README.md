
# Welcome to cac 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)

## 问题

### 分析一下目录

- 什么类型的文件放到什么文件夹内
    - 配置文件放在根目录
    - examples 是放 使用 demo 的文件夹
    - scripts 是一些命令的js文件
    - src 放主逻辑和测试文件
- 一般都会有几个文件夹
    - src
    - test
    - examples

### .editorconfig  是干嘛的

1. editorConfig 定义编码风格，有助于跨不同编辑器和 IDE 为处理同一项目的多个开发人员维护一致的编码风格。EditorConfig 项目由用于定义编码样式的文件格式和一组文本编辑器插件组成，这些插件使编辑器能够读取文件格式并遵循已定义的样式。

### .gitattributes 是干嘛的

1. 每当一个文件被创建或保存，git 会按照这些属性所指定的自动化的保存文件
2. 开发者使用不同的操作系统，默认的文件结尾行就会不同。在 Windows 上默认的是回车换行（Carriage Return Line Feed, CRLF），然而，在 Linux/MacOS 上则是换行（Line Feed, LF）。
3. 其中的一个属性是 *eol*(end of line)，用于配置文件的结尾。目的是在不同的机器、操作系统 上都可以使得每个开发者都可以使用相同的值。

### 持续集成是如何实现的

- circle.yml 是如何配置的

### 分析一下单元测试环境是如何搭建的

- ts-jest 是解决什么问题的

    1. ts-jest 是不做配置直接让 jest 可以测试 ts 项目
    2. 如果没有 ts-jest 的话 你会搭建基于 ts 的 jest 的环境嘛？写个  demo？

    ```
    // 1 安装依赖
    yarn add --dev jest
    yarn add --dev babel-jest @babel/core @babel/preset-env
    yarn add --dev @babel/preset-typescript tslib
    // 配置文件 babel.config.js
    module.exports = {
      presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      '@babel/preset-typescript',],
    };
    ```

    

- 分析一下 jest.config.js  这几个字段都有什么用?

    ```js
    module.exports = {
      // testEnvironment 测试环境
      testEnvironment: 'node',
      // 转换
      transform: {
        '^.+\\.tsx?$': 'ts-jest'
      },
      // TestRegex 将尝试使用绝对文件路径检测测试文件，因此，如果有一个名称与之匹配的文件夹，则将所有文件作为测试运行。
      testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.tsx?$',
      // testPathIgnorePatterns 在执行测试之前与所有测试路径匹配的 regexp 模式字符串数组。如果测试路径与任何模式匹配，则将跳过它
      testPathIgnorePatterns: ['/node_modules/', '/dist/', '/types/'],
      // moduleFileExtensions 模块使用的文件扩展名数组。如果您需要不指定文件扩展名的模块，那么 Jest 将按照从左到右的顺序寻找这些扩展名。
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
    }
    ```

    

### 分析一下 package.json 里面的字段都是干嘛的

[参照文档](https://areknawo.com/whats-what-package-json-cheatsheet/)

1. 发布一个库需要用到哪些字段

    ```json
    * package.json 文件*
    {
      "name": "chen-btn", // 此包的名称
      "version": "1.0.0", // 此包的版本号
      "description": "", // 文件的描述
      "main": "index.js", // 入口文件
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      }, 
      "author": "", // 作者
      "license": "ISC" // npm包协议
    }
    
    
    ```

    

### 写一个库的 README 需要哪几个部分？

- 结构是什么样子的？

    - 对于README文档，大致分为几个部分：
        - 背景
        - 安装
        - 示例 或 用法
        - 维护者
        - 使用许可

- 有哪些可以快速生成 readme 的库

    - #### readme-md-generator

    - 可以记录下来，下次一起分析是如何做到的

### 构建是如何做的？

- 分析 rollup.config.js
    - 入口文件是 src/index.ts
    - 两种形式的输出，esm，带类型声明的js文件

### 分析一下 tsconfig 里面的配置项

```json
{
  "compilerOptions": {
    "target": "es2015", // 目标js版本
    "declaration": true,// 生成声明文件，开启后会自动生成声明文件
    "declarationDir": "types",// 指定生成声明文件存放目录
    "esModuleInterop": true,// 允许export=导出，由import from 导入
    "pretty": true,
    "moduleResolution": "node",// 模块解析策略，ts默认用node的解析策略，即相对的方式导入
    "lib": ["es2015", "es2016.array.include"],// TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入"ES2019.Array",
    "allowSyntheticDefaultImports": true,
    "stripInternal": true,
    "noImplicitAny": true,// 不允许隐式的 any 类型
    "noImplicitReturns": true,//每个分支都会有返回值
    "noImplicitThis": true,// 不允许this有隐式的any类型
    "noUnusedLocals": true,// 检查只声明、未使用的局部变量(只提示不报错)
    "noUnusedParameters": true,// 检查未使用的函数参数(只提示不报错)
    "noFallthroughCasesInSwitch": true,// 防止switch语句贯穿(即如果没有break语句后面不会执行)
    "strictNullChecks": true,// 配置为true时，null/undefined不能作为其他类型的子类型：
    "strictFunctionTypes": true,// 不允许函数参数双向协变
    "strictPropertyInitialization": true,// 类的实例属性必须初始化
    "alwaysStrict": true,// 在代码中注入'use strict'
    "module": "commonjs",// 生成代码的模板标准
    "outDir": "lib"// 输出目录
  },
  "include": ["src", "declarations.d.ts"],// 包含
  "exclude": ["src/deno.ts"]// 排除
}
```

### 画一下这个库的程序流程图

- 画流程图可以参考这篇文章 [https://zhuanlan.zhihu.com/p/364507517](https://zhuanlan.zhihu.com/p/364507517)
- 画好了图之后可以更清晰明了的看到程序设计的全貌
- 划分好类的职责
    - CAC
    - Command
    - Option
- 可以画一下 UML图

### 尝试通过单元测试调试库

- 可以把你通过单元测试调试库的过程记录下来
- 让别人可以基于你的记录也可以实现

### 这个库应该如何使用？ 

- 基于这个库的文档写一篇小教程
- 让别人基于你的教程就可以使用这个库

### 如何理解 option

- 概念
- 在程序里面是如何实现的

### 如何理解 command 

- 概念
- 在程序里面是如何实现的

### 如何理解 action 

- 概念
- 在程序里面是如何实现的

### 如何实现连续调用的api

![](https://images-1252602850.cos.ap-beijing.myqcloud.com/20220627173013.png)

```js
let cac = new CAC()
let cli = cac()
class CAC{
  command() {
    const command = new Command()
    // ...
    return command
  }
}

class Command{
  // ...
  option() {
    // ...
    return this
  }
  action() {
    // ...
    return this
  }
}
```

### Brackets 应该如何使用

- 方括号和尖括号有什么不同
    - 在命令名中使用括号时，尖括号表示必需的命令参数，而方括号表示可选参数。
    - 在选项名称中使用括号时，尖括号表示需要字符串/数值，而方括号表示值也可以为 true。


### Brackets  是如何实现的

### Negated Options 是如何实现的？ 

### 分析一下下面这段代码的执行流程

![](https://images-1252602850.cos.ap-beijing.myqcloud.com/20220627174013.png)

### 还可以从功能上分解需求点

- 全局的  command 是如何实现的
- sub command 是如何实现的
- 每个 command 的 option 是如何实现的
- help 和 version 是如何实现的 

### 程序等于数据结构＋算法

- 哪一部分是收集数据的
    - 对应初始化的逻辑
- 哪一部分是算法