---
title: hexo创建博客
categories: 工具
tags: [博客, hexo]
date: 
---



![](http://mdimg.95408.com/201912180011_408.png?imageView2/2/w/1200/h/1200)



## 环境

### node.js 和 npm

Hexo是基于nodejs的静态博客，首先需要安装nodejs，并且需要nodejs中的重要工具：` npm ` ；

查看 nodejs 版本：` node -V ` ；

### hexo

有了nodejs，其他就简单了！安装hexo： ` npm install -g hexo ` ；

查看 hexo 版本： ` hexo -v ` ；

### git

你也可以安装一个必备的代码管理工具：` git ` ；这样我们就可以使用 ` git bash ` 这个工具了；

查看 git 版本： ` git version ` ；



## 创建 hexo

我们在本地创建一个文件夹 ` d\hexo ` 做为博客的目录；

只需3步，完成博客的搭建：

1、在 ` d\hexo `目录下，执行以下命令，创建 hexo 完成；

``` git
hexo init
```

2、开始书写文章：

``` git
hexo new '我的第一篇hexo博客文章'
```

3、运行本地博客服务器：

```git
$ hexo s
    INFO  Start processing
    INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.
```

此时，我们在浏览器当中输入：` http://local:4000 ` 即可查看网站。



## 写文章

使用以下命令创建文章，我们就可以通过 ` D:\hexo\source\_posts ` 查看创建的文件，开始创作即可。

``` git
$ hexo new [layout] <title>
```

或者直接将md文章放入到 ` D:\hexo\source\_posts ` 目录下；



## 文章预定义参数

我们在md文章形状，使用yaml定义标题、分类、标签、日期等等，可以自己增减。

```yaml
---
title: 文章标题
date： 日期
categories: 分类
tags: 标签
---
```

[官方文档：更多预先定义的参数](https://hexo.io/zh-cn/docs/front-matter)

如果是有子分类：

```yaml
categories: [父分类， 子分类]
```

如果是有多个标签：

``` yaml
tags: [标签1， 标签2]
```



## 搭建到 github

1、创建 github 账号，并创建 ssh （参考：[git和github：SSH](https://yuanshengorg.github.io/2019/12/17/tools/git%E5%92%8Cgithub/#SSH-%E6%8E%A8%E9%80%81)）； 

2、在自己的账号下，新建一个repo：` New repository ` （github右上角 + 号——New repository）；

3、项目名称（Repository name）为：` 你的名称.github.io ` ，如 ` yuansheng.github.io `；

![](http://mdimg.95408.com/201912172352_728.png?imageView2/2/w/1200/h/1200)

4、回到本地文件夹：` d/hexo ` ，修改文件： ` _config.yml ` ：

``` git
deploy:
  type: git
  repo: https://github.com/yuansheng/yuansheng.github.io.git
  branch: master
```

repo 请修改为你创建的地址。

5、安装工具：hexo-deployer-git

```git
npm install hexo-deployer-git --save
```

6、回到命令行工具运行：

```git
hexo clean // 清除之前生成的文件
hexo generate   // 生成新的静态文件
hexo depoly   // 部署网站
```

执行 ` hexo depoly ` 时，第一次可能会需要注册 github.com 的账号及密码；



## 访问地址

输入 ` yuansheng.github.io ` ，即你设置的项目文件名，即可访问网站；

你也可以绑定自己的域名，如 ` www.yuanblogname.com `；



## 增/改文章

上面的三个命令 ` hexo clean / generate / depoly ` 可简写为：

```git
hexo clean
hexo g
hexo d
```

以后每次在文件夹中增加、修改了 md 文章后，执行这三个命令即可；

所有在本地电脑上修改的文档，远程博客也就修改了。



## 更多命令

[hexo官方文档：指令](https://hexo.io/zh-cn/docs/commands)



## 其他

[hexo从零开始到搭建完整](https://www.cnblogs.com/visugar/p/6821777.html)

[官方文档：中文](https://hexo.io/zh-cn/docs/)



以上。