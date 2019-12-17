---
title: git和github
date: 2019-12-17 14:43:36
tags:
---

# git 本地仓库

## 常用命令

**Git 使用前配置**

在使用 git 前，需要告诉 git 你是谁，在向 git 仓库中提交时需要用到。

1. 配置提交人姓名： `git config --global user.name 提交人姓名` 
2. 配置提交人姓名： `git config --global user.email 提交人邮箱` 
3. 查看git配置信息： `git config --list` 

**提交步骤**

1. `git init` 初始化git仓库
2. `git status` 查看文件状态
3. `git add 文件列表` 追踪文件/提交到暂存区
4. `git commit -m 提交信息` 向仓库中提交代码
5. `git log` 查看提交记录

**撤销**

*   用暂存区中的文件覆盖工作目录中的文件： `git checkout 文件` 
*   将文件从暂存区中删除： `git rm --cached 文件` 
*   将 git 仓库中指定的更新记录恢复出来，并且覆盖暂存区和工作目录： `git rest --hard commitID` （ID号可以通过 ` git log ` 查看） 

**分支命令**

* `git branch` 查看分支
* `git branch 分支名称` 创建分支
* `git checkout 分支名称` 切换分支
* `git merge 来源分支` 合并分支
* `git branch -d 分支名称` 删除分支（分支被合并后才允许删除）（-D 强制删除）

**暂时保存更改**

*   存储临时改动： `git stash` 
*   恢复改动： `git stash pop` 

## 创建 git init

进入到一个目标管理文件夹，输入 `init` 命令创建完成；

``` git
$ git init  
// 初始化工作区，创建.git的隐藏文件夹
```

## 保存 git add / commit

保存一个文件的版本：

``` git
$ git add code1.py   // 保存到暂存区
$ git commit -m '这是第一个版本'   // 保存到本地文件库
```

再保存一个文件的另一个版本：

``` git
$ git add code1.py
$ git commit -m '这是第二个版本'
```

将工作区所有文件保存到暂存区：

``` git
$ git add .
```

## 查看版本 git log

查看文件多个版本：

``` git
$ git log
commit 699977fa2a89db2dabc8bf9c1d2e17f23dc4a73f (HEAD -> master)
Author: yuan <740040915@qq.com>
Date:   Wed Oct 16 15:02:37 2019 +0800

    '这是第二个版本。'

commit 325e516e92d3c14a9a4e0208fc89a967c7ae9154
Author: yuan <740040915@qq.com>
Date:   Wed Oct 16 14:59:45 2019 +0800

    '这是第一个版本。'
```

以简短形式显示：

``` git
$ git log --pretty=oneline
```

ps.win窗口使用命令行**不能显示中文字符**：

使用 `Git Bash` 窗口，右键设置--文本设置为 `zh_ch UTF-8` 退出重新进入即可。

## 回退 git reset

回到第一个版本：

HEAD^ 前一个版本；HEAD^^ 前两个版本；HEAD~1 前一个版本；HEAD~100 前100个版本；

``` git
$ git reset --hard HEAD^
commit 325e516e92d3c14a9a4e0208fc89a967c7ae9154 (HEAD -> master)
Author: yuan <740040915@qq.com>
Date:   Wed Oct 16 14:59:45 2019 +0800

    '这是第一个版本。'
```

通过版本号回到第二个版本：

``` git
$ git reset --hard 6999
HEAD is now at 699977f '这是第二个版本。'
```

如果退回到第一版本记录后，即出终端就找不到第二版本的版本号时，我们可以使用 `git reflog` 查看操作记录，得到最前面的版本号；如下， `699977f` 就是第二个版本的版本号。

``` git
$ git reflog
699977f (HEAD -> master) HEAD@{0}: reset: moving to 6999
325e516 HEAD@{1}: reset: moving to HEAD^
699977f (HEAD -> master) HEAD@{2}: commit: '这是第二个版本。'
325e516 HEAD@{3}: commit (initial): '这是第一个版本。'
```

## 工作区 暂存区

保存文件的 git_test 是工作区；

git_test 文件夹下的 .git 文件夹是版本库；其中包含暂存区；

git add 将文件添加到暂存区； git commit 把暂存区所有内容提交到当前分支，创建版本记录；

``` git
$ git add XXX
$ git commit -m 保存到本地文件库要增加的说明文字
```

查看未处理提交的文件状态：

``` git
$ git status
```

## 撤销修改 git checkout

文件没有保存到暂存区时，取消修改：

``` git
git checkout -- code2.txt
```

文件通过git add code2.txt 保存到了暂存区，取消修改：

``` git
git reset HEAD code2.txt  # 先取消暂存
git checkout -- code2.txt # 和上一步一样，取消修改
```

如果已经提交到了版本库（git commit -m ‘版本4’），就通过版本回退

``` git
$ git reset --hard HEAD^
```

## 查看不同 git diff

查看工作区与之前版本的不同：

``` git
$ git diff HEAD -- code1.py
```

查看上个版本和上上个版本的不同：

``` git
$ git diff Head HEAD^ -- code1.py
```

## 删除文件 git rm

``` git
git add code2.txt  # 文件提交到了暂存区
rm code2.txt  # 工作区删除文件
git rm code2.txt # 将删除提交到暂存区
git commit -m '删除后提交的版本'  # 将删除后提交一个版本
# 删除后恢复与撤销修改相同
```

## 切换分支 git branch

查看当前所有分支：git branch

``` git
$ git branch

* master

```

创建分支：git branch dev

``` git
// 创建新分支后：
$ git branch

* master  // 当前分支

  dev  // 新创建的分支
```

切换分支：git checkout dev

``` git
// 切换分支后：
$ git branch
  master

* dev  // 当前分支为dev

```

创建并切换分支：git checkout -b dev

``` git
$ git checkout -b dev
$ git branch

* dev

  master
```

切换回master分支：git checkout master

``` git
$ git checkout master
$ git branch
  dev

* master

```

在dev分支上做修改并提交后，可以切换到master分支，并使用以下方式合并dev分支；

## 合并分支 git merge

回到主分支master上，合并dev分支：git merge dev

``` git
$ git merge dev
```

## 删除分支 git branch

分支上所有内容都合并到主分支时，可以删除分支：git branch -d dev

``` git
$ git branch -d dev
// 如果没有合并子分支上的内容，并需要强制合并，改成大写 -D
```

## 分支冲突

当切换到dev分支修改code.txt并提交add、commit；

又切换回master分支修改code.txt并提交add、commit；

将dev分支合并到master时（git merge dev），会出现冲突；

（现在在master分支当中），手动修改code.txt冲突文件，并再次add、commit提交；

可以通过 `git log  --pretty=oneline --graph` 查看两个分支的合并情况；

## 分支合并

当在dev分支修改一个文件，并提交commit；

又在master分支增加一个新文件，并提交commit；

此时，在两个不同分支下有两个不同的提交；

此时合并时，git会提示输入一个分支注释文字，并自动创建一个新的分支；

可以通过 `git log  --pretty=oneline --graph` 查看两个分支的合并情况；

## 禁用快速合并 --no-ff

在dev分支上做了修改并提交一个分支为“dev分支”；

切换回master分支，将dev分支合并：

``` git
$ git merge dev
```

无冲突时，git会使用快速合并 `Fast forward` ，如果我们要保存分支信息时，需要禁止快速合并；

``` git
$ git merge --no-ff -m '禁用fast forward版本' dev
```

此时，原来dev创建的“dev分支”会保留下来，

并会创建一个新的分支：“禁用fast forward版本”；

可以通过 `git log  --pretty=oneline --graph` 查看两个分支的合并情况；

## bug分支

**禁用快速合并的情况**

当我们在dev分支进行工作时，需要临时进入一个临时分支进行bug处理；

可以先将当前分支存储起来：

``` git
git stash
```

此时我们使用 `git status` 查看，变成了干净的工作区；

切换回master分支：git checkout master

创建一个临时分支：bug-001；

修改bug完成，提交commit一个“修改bug-001版本”；

切换回master分支；

此时如果直接合并分支，就没有修改bug-001版本的记录；

我们就采用禁用快速合并的处理方式；

合并临时分支：bug-001；

``` git
git merge --no-ff -m "修复bug后的版本" bug-001
```

## 存储工作现场 git stash 暂时保存更改

当我们在dev分支上工作时，需要临时进入master分支上做修改，

只需在分支上临时保存，再进入master分支操作保存。

返回dev分支上重新开始工作。

``` git
git stash  // 当前在dev分支，暂存文件

$ git status
On branch dev  // 当前在dev分支
nothing to commit, working tree clean  // 暂存文件后，分支变干净了
```

回到master分支，进行bug修改，保存：

``` git
git checkout master
```

查看存储的工作记录：

``` git
git stash list
```

在master分支上完成操作后，返回到dev分支上，恢复工作记录：

``` git
git checkout dev   // 返回dev分支
git stash pop   // 恢复工作记录
```

# github 远程仓库

![](http://mdimg.95408.com/201912171203_333.png?imageView2/2/w/1200/h/1200)

 ## 1、  A 将新项目 push 至 github

(1)、A 将地址文件夹1215_git中的项目修改完成，保存到本地仓库；

(2)、A 在 github.com 上创建一个新项目：1215_git；并得到了项目远程地址： ` https://github.com/yuanshengorg/1215_git.git` 。

(3)、A 将本地项目 push 至远程仓库：master 表示本地仓库的分支；

``` git
$ git push https://github.com/yuanshengorg/1215_git.git master
```

将远程地址改为简短别名：

``` git
$ git remote add origin https://github.com/yuanshengorg/1215_git.git
origin 表示将远程地址改为的别名
```

通过别名推送到远程仓库：

``` git
$ git push origin master
```

在第一次推送时，加上 -u 记录：

``` git
$ git push -u origin master
```

下一次推送可以更简单：

``` git
$ git push
```

## 2、 B 将项目 clone 到 本地

在网站上获取 Clone 地址：

![](http://mdimg.95408.com/201912171139_943.png?imageView2/2/w/1200/h/1200)

克隆远端数据仓库到本地： `git clone 仓库地址` 

``` git
git clone https://github.com/yuanshengorg/1215_git.git
```

## 3、 B 将项目修改后 push 至 github

B 将项目克隆到本地后，直接在本地修改，add 至暂存区，commit 至本地仓库；

完成修改，上传到 A 创建的项目远程仓库：

``` git
$ git push origin master   // A 创建的远程地址别名 B 也可以使用
或者：
$ git push https://github.com/yuanshengorg/1215_git.git master
```

B 如果想摄推送内容至 A 的仓库，需要 A 设置一下：邀请 B 为团队成员。

![](http://mdimg.95408.com/201912171157_660.png?imageView2/2/w/1200/h/1200)

## 4、 A 拉取远程仓库中最新的版本

拉取远程仓库中最新的版本： `git pull 远程仓库地址 分支名称` 

``` git
$ git pull origin master
或者：
$ git pull https://github.com/yuanshengorg/1215_git.git master
```

git clone 是完全克隆；

git pull 是本地已有项目，只拉取远程仓库中更新的内容；

## SSH 推送

![](http://mdimg.95408.com/201912171137_313.png?imageView2/2/w/1200/h/1200)

``` git
$ ssh-keygen
```

会在本地（/c/Users/用户名/.ssh/）生成：id_rsa 文件和 id_rsa.pub 文件；

将 ` id_rsa.pub  ` 文件打开复制内容设置到 github.com 网站上，即可。

github.com ——右上角个人中心——settings——SSH and GPG keys——SSH keys，新增保存即可。

![](http://mdimg.95408.com/201912171135_162.png?imageView2/2/w/1200/h/1200)

## 跨团队合作：

1.  程序员 C fork仓库
2.  程序员 C 将仓库克隆在本地进行修改
3.  程序员 C 将仓库推送到远程
4.  程序员 C 发起pull reqest
5.  原仓库作者审核
6.  原仓库作者合并代码

## 忽略清单文件创建：

将不需要被git管理的文件名字添加到此文件中，在执行git命令的时候，git就会忽略这些文件。

git忽略清单文件名称：**.gitignore** 。

