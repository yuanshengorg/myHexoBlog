---
title: Bootstrap(一)导航栏navbar 
categories: bootstrap
tags: [Css, bootstrap]
date: 
---



### 导航栏 navbar 

-   依赖 JavaScript 插件：窗口变窄，只显示logo和汉堡菜单；
-   使用 `<nav>` 元素，或者`<div role="navigation">` 让辅助设备知道是一个导航；
-   `.navbar-brand` 已经被设置了 padding 和高度 height；
-   表单放置于 `.navbar-form` 之内可以呈现很好的垂直对齐，并在较窄的视口（viewport）中呈现折叠状态；
-   不包含在 `<form>` 中的 `<button>` 元素，加上 `.navbar-btn` 后，可以让它在导航条里垂直居中；
-   文本包裹在 `<p class="navbar-text"></p>`中；



| 0    | class                                      | 备注                       |
| ---- | ------------------------------------------ | -------------------------- |
| 1    | nav class="navbar navbar-default"          | 导航条                     |
| 2    | div class="container-fluid" 或 "container" | 版心                       |
| 3    | div class="navbar-header"                  | 包裹logo和汉堡菜单         |
| 4    | a class="navbar-brand"                     | 包裹标志文字或者img        |
| 5    | div class="collapse navbar-collapse"       | 包裹菜单ul>li>a链接        |
| 6    | form class="navbar-form"                   | 包裹表单                   |
| 7    | button class="navbar-btn"                  | 包裹按钮                   |
| 8    | ul class="navbar-right"                    | 菜单向左、向右排列         |
| 9    | a class="navbar-link"                      | 链接显示默认颜色和反色设置 |
| 10   | p class="navbar-text"                      | p标签内有正确的行距和颜色  |
| 11   | nav class="avbar-fixed-top"                | 让导航条固定在顶部         |
| 12   | nav class="navbar-fixed-bottom"            | 让导航条固定在底部         |
| 13   | nav class="navbar-static-top               | 静止在顶部                 |
| 14   | nav class="navbar-inverse"                 | 反色的导航条               |



### 结构

``` html
<div class="navbar navbar-default">
    <div class="container">
        <!-- 标志头部 -->
        <div class="navbar-header">
            <!-- 品牌logo文字或图片 -->
            <div class="navbar-brand">Logo</div>
        </div>
        <!-- 菜单选项 -->
        <div class="collapse navbar-collapse">
            <!-- 菜单链接 -->
            <ul class="nav navbar-nav">
                <li><a href="#">Link</a></li>
            </ul>
        </div>
    </div>
</div>
```



### 示例



``` html
<!-- navbar 导航条 -->
<!-- navbar-default 默认导航条 -->
<nav class="navbar navbar-default">
    <!-- container 按版心居中 -->
    <!-- container-fluid 100%版心 -->
    <div class="container">
        <!-- navbar-header 将logo部分分组 更好的移动展示 -->
        <div class="navbar-header">
            <!-- 汉堡菜单显示 -->
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <!-- logo -->
            <a class="navbar-brand" href="#">
                <!-- logo a标签中直接写文字或者加img -->
                <img src="./img/logo.png" alt="" class="center-block">
            </a>
        </div>

        <!-- 可折叠部分 链接 表单 按钮等 -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <!-- 菜单链接 -->
            <ul class="nav navbar-nav">
                <!-- 单个链接 -->
                <li class="active"><a href="#">首页</a></li>
                <li><a href="#">关于我们</a></li>

                <!-- 下拉菜单 -->
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">下拉菜单 <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">下拉菜单1</a></li>
                        <li><a href="#">下拉菜单2</a></li>
                        <!-- 分隔线 -->
                        <li role="separator" class="divider"></li>
                        <li><a href="#">下拉菜单3</a></li>
                    </ul>
                </li>
            </ul>

            <!-- 表单 -->
            <form class="navbar-form navbar-left">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn btn-default">提交</button>
            </form>

            <!-- 按钮 -->
            <button type="button" class="btn btn-primary navbar-btn">登陆</button>

            <!-- 右侧菜单链接 -->
            <!-- hidden-sm 在小屏时隐藏，其他屏按官方的：大中屏正常显示 超小屏蔽显示汉堡菜单 -->
            <ul class="nav navbar-nav navbar-right hidden-sm">
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
            </ul>

        </div>
        <!-- 可折叠部分结束 -->
    </div>
    <!-- container结束 -->
</nav>
```



### 修改



-   navbar-brand 有加 -15px 的 padding，去除 container 盒子的paddding；
-   navbar-brand 有加四周各15px 的 margin ；
-   navbar-brand 中加 img，img 会有 左右各 10px 的 margin；



![](http://mdimg.95408.com/201912302204_576.png)



``` css
/* 自定义 */

/* 标志img大小 */
.navbar img {
    width: 70px;
    height: 70px;
    margin: 0;
}

/* navbar-brand */
.navbar-brand {
    width: 90px;
    height: 70px;
    padding: 0;
}

/* 修改导航栏高度 */
.navbar-nav>li>a {
    font-size: 18px;
    padding-top: 25px;
    height: 70px;
}

/* 表单 按钮 汉堡区 */
.navbar-form, .navbar-btn, .navbar-toggle {
    margin-top: 18px;
}
```



以上。







































