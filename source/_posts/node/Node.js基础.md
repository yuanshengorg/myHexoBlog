---
title: Node.js基础
categories: node
tags: [js, Node.js]
date: 
---



![Node.js](http://mdimg.95408.com/201912182243_175.png)



## 常用信息

[Node.js 官网](https://nodejs.org/en/)

[npm 官网](https://www.npmjs.com/)

win系统中，需要将node.js放入系统环境变量；

如果不能安装成功，需要以管理员身份运行命令行工具；

查看 Node.js 版本： ` node -v ` ；

nodejs已经集成了 ` npm ` ，查看 npm 版本： ` npm -v ` ；





## Node.js 与JavaScript

-   **Node** 是一个基于 Chrome V8 引擎的 JavaScript **代码运行环境**；
-   浏览器（软件）能够运行JavaScript代码，浏览器就是JavaScript代码的运行环境；
-   Node（软件）能够运行JavaScript代码，Node就是JavaScript代码的运行环境；
-   JavaScript 由三部分组成，**ECMAScript**，**DOM**，**BOM** ；
-   Node.js是由**ECMAScript**及**Node 环境**提供的一些**附加API**组成的，包括文件、网络、路径等等一些更加强大的 API ；
-   浏览器全局对象是 ` window ` ，Node.js 全局对象是 ` global ` 。

![Node.js与JavaScript](http://mdimg.95408.com/201912182202_431.png)





## Node.js 模块化

-   Node.js规定一个 `JavaScript ` 文件就是一个模块，模块内部定义的变量和函数默认情况下在外部无法得到；
-   模块内部使用 ` exports` 导出对象，在其他模块（文件）中使用 ` require ` 导入其他模块；



``` js
a.js文件
const add = (n1, n2) => n1 + n2;  // 一个加法的函数
exports.add = add;  // 将函数导出

b.js文件
const a = require('./a.js');  // 导入a.js中的加法函数
console.log(a.add(1, 2))  // 使用加法函数得到3
```





## npm 工具

npmjs.com 第三方模块管理工具 （node package manager）



### 安装模块：

```js
本地安装：
npm install 模块名称
全局安装：
npm install 模块名称 -g
```

>   -   **本地安装**的第三方模块，只存储在当前项目文件夹 ` node_modules ` ，只有本项目能使用，其他项目使用相同模块，需要在其他项目下再次安装；
>   -   命令行工具使用**全局安装**，在其他项目都可以使用；



### 卸载模块：

``` js
npm uninstall 模块名
```






## nodemon 模块

是一个命令行工具，全局安装： ` npm install nodemon -g ` ；

辅助替换node命令，项目更改时，能自动刷新；





## nrm 替换国内镜像源

nrm 安装： ` npm install nrm -g ` ；

查询下载地址列表：` nrm ls ` ；

选择国内taobao下载源，加快下载速度：` nrm use taobao ` ；

![](http://mdimg.95408.com/201912182305_359.png?null)





## node_modules

node_modules 文件夹中包含了项目中所有的第三方模块，数百个，多而碎；

依赖关系复杂，不同版本的兼容问题；





## package.json

项目描述文件，记录了当前项目信息，例如项目名称、版本、作者、github地址、当前项目依赖了哪些第三方模块等。

使用 ` npm init -y ` 命令生成。



### 项目依赖

开发阶段和线上运营阶段，都需要依赖的第三方包，称为项目依赖；

正常使用 ` npm install 包名 ` 安装；

```js
package.json文件
 {
    "dependencies": {
        "jquery": "^3.3.1“
    }
 } 
```



### 开发依赖

开发阶段需要依赖，线上运营阶段不需要依赖的第三方包，称为开发依赖；

命令行加 --save -dev 安装： ` npm install 包名 --save -dev ` 安装；

```js
package.json文件
 {
    "devDependencies": {
        "gulp": "^3.9.1“
    }
 } 
```



### package-lock.json

-   锁定包的版本，确保再次下载时不会因为包版本不同而产生问题
-   加快下载速度，因为该文件中已经记录了项目所依赖第三方包的树状结构和包的下载地址，重新安装时只需下载即可，不需要做额外的工作



### 总结

>   当我们将项目移到其他电脑，由于有了 ` package.json ` 和 ` package-lock.json ` 文件，不需要拷贝 ` node_modules ` 文件夹；
>
>   只需运行 ` npm install ` 即可通过这两个文件，自行下载所需的所有第三方模块。



以上。





