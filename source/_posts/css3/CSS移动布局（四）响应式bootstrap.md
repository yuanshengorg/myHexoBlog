---
title: CSS移动布局（四）响应式bootstrap
categories: css3
tags: bootstrap
date: 
---

## 响应式开发

使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的。

**响应式布局容器**

-   响应式需要一个父级做为布局容器，来配合子级元素来实现变化效果；
-   在不同屏幕下，通过媒体查询来改变这个布局容器的大小，再改变里面子元素的排列方式和大小，从而实现不同屏幕下，看到不同的页面布局和样式变化。

-   超小屏幕（手机，小于 768px）：设置宽度为 100%
-   小屏幕（平板，大于等于 768px）：设置宽度为 750px
-   中等屏幕（桌面显示器，大于等于 992px）：宽度设置为 970px
-   大屏幕（大桌面显示器，大于等于 1200px）：宽度设置为 1170px 

![](http://mdimg.95408.com/web_2019122718.gif)

``` html
<style>
    .container {
        height: 150px;
        background-color: pink;
        margin: 0 auto;
    }
    /* 1. 超小屏幕下  小于 768  布局容器的宽度为 100% */
    @media screen and (max-width: 767px) {
        .container {
            width: 100%;
        }
    }
    /* 2. 小屏幕下  大于等于768  布局容器改为 750px */
    @media screen and (min-width: 768px) {
        .container {
            width: 750px;
        }
    }
    /* 3. 中等屏幕下 大于等于 992px   布局容器修改为 970px */
    @media screen and (min-width: 992px) {
        .container {
            width: 970px;
        }
    }
    /* 4. 大屏幕下 大于等于1200 布局容器修改为 1170 */
    @media screen and (min-width: 1200px) {
        .container {
            width: 1170px;
        }
    }
</style>
<body>
    <!-- 响应式开发里面，首先需要一个布局容器 -->
    <div class="container"></div>
</body>
```



## bootstrap

Bootstrap 是基于HTML、CSS 和 JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷。

### 下载

``` bash
// 在网站上下载
https://v3.bootcss.com/getting-started/

// npm下载
$ npm install bootstrap@3
```

[中文网](lhttp://www.bootcss.com/)、  [官网](lhttp://getbootstrap.com/)



### 基本模板

引入 bootstrap.min.css 文件：

``` html
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <!-- Bootstrap 引入 -->
    <link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css">
```

针对 IE 9以下可加上：

``` html
<!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
<![endif]-->
```

使用 bootstrap 的 js 插件，需要在 `</body>`之前加上：

``` html
<!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
<script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
<!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
```



### 布局容器 container

-   所有的类放在 container 容器中，container 容器中的内容会随着屏幕宽度的变化面变化；
-   大屏 ( >=1200px)时，container 宽度为1170px；
-   中屏( >=992px)时，container 宽度为970px；
-   小屏( >=768px)时，container 宽度为750px；
-   超小屏时，container 宽度为100%；

>   如图：屏幕处理中屏时，container的宽度变成了970px，无需额外样式：

![](http://mdimg.95408.com/201912272340_717.png?null)

``` html
<body>
    <div class="container">
    </div>
</body>
```

.container

-   响应式布局的容器  固定宽度
-   大屏 ( >=1200px)  宽度定为 1170px
-   中屏 ( >=992px)   宽度定为  970px
-   小屏 ( >=768px)   宽度定为  750px
-   超小屏  (100%) 

.container-fluid

-   流式布局容器 百分百宽度
-   占据全部视口（viewport）的容器。



### 栅格系统

**一**

-   container 容器自动划分为12等分；
-   当有4个元素时：
    -   上：2 + 6 + 2 + 2，共计12份，占满一行；
    -   中：2 + 6 + 1 +1，共计10份，最后留空；
    -   下：2 + 6 + 4 + 2，共计14份，多的2份下移；

![](http://mdimg.95408.com/201912280004_525.png?null)

``` html
<div class="container">
    上：
    <div class="row">
        <div class="col-lg-2">div 2份</div>
        <div class="col-lg-6">div 6份</div>
        <div class="col-lg-2">div 2份</div>
        <div class="col-lg-2">div 2份</div>
    </div>
    中：
    <div class="row">
        <div class="col-lg-2">div 2份</div>
        <div class="col-lg-6">div 6份</div>
        <div class="col-lg-1">div 1份</div>
        <div class="col-lg-1">div 1份</div>
    </div>
    下：
    <div class="row">
        <div class="col-lg-2">div 2份</div>
        <div class="col-lg-6">div 6份</div>
        <div class="col-lg-4">div 4份</div>
        <div class="col-lg-2">div 2份</div>
    </div>
</div>
```

**二**

-   不同屏幕尺寸的响应：
    -   col-lg-* 、 col-md-* 、 col-sm-* 、 col-xs-*
-   当有4个元素时：
    -   col-lg-3：大屏时，每个元素占3份，共计12份；
    -   col-md-4：中屏时，每个元素占4份，前3个占满一行，第4个下移；
    -   col-sm-6：小屏时，每个元素占6份，前2个占满一行，后2个下移；
    -   col-xs-12：超小屏，每个元素占12份，每个元素占1行；

![](http://mdimg.95408.com/web_2019122711.gif)

``` html
<div class="container">
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">div2</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">div3</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">div1</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">div4</div>
</div>
```

-   行（row） 可以去除父容器作用15px的边距
-   xs-extra small：超小； sm-small：小；  md-medium：中等； lg-large：大；
-   每一列默认有左右15像素的 padding



### 栅格嵌套

-   container容器中3个元素div1、div2、div3各4份，占满一行；
-   将第一个div1中再嵌套2个div1:A 和 div2:B；
-   div1 也会默认分成12份，各占6份即可；

![](http://mdimg.95408.com/201912280016_58.png?null)

``` html
<style>
    .row div {
        height: 100px;
        border: 1px solid red;
    }
</style>

<div class="container">
    <div class="row">
        <div class="col-lg-4">
            <!-- 我们列嵌套最好加1个行 row -->
            <!-- 可以取消父元素的padding值 而且高度自动和父级一样高 -->
            <div class="row">
                <div class="col-lg-6">div1:A</div>
                <div class="col-lg-6">div1:B</div>
            </div>
        </div>
        <div class="col-lg-4">div2</div>
        <div class="col-lg-4">div3</div>
    </div>
</div>
```



### 列偏移 offset

-   使用 .col-md-offset-* 类可以将列向右侧偏移；
-   上：
    -   共有 2 个 div，各占 3 份，剩余 6 份；
    -   div2 往右偏移 6 份 `col-lg-offset-6` ；
    -   形成 div1 靠左、div2 靠右的效果；
-   下：
    -   共有 1 个 div，占 6 份，剩余 6 份；
    -   div1 往右偏移 3 份 `col-lg-offset-3` ；
    -   形成 div1 右边留空 3份，左边 3份，形成居中效果；

![](http://mdimg.95408.com/201912280027_605.png?null)

``` html
<div class="container">
    上：
    <div class="row">
        <div class="col-lg-3">div1:3份</div>
        <div class="col-lg-3 col-lg-offset-6">div2:3份</div>
    </div>
    下：
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2">div3:8份</div>
    </div>
</div>
```



### 列排序 push pull

通过使用 .col-md-push-* 和 .col-md-pull-* 类就可以很容易的改变列（column）的顺序。

![](http://mdimg.95408.com/201912280039_492.png?null)

``` html
<div class="container">
    <div class="row">
        <div class="col-lg-4">div1:4份:原本在左</div>
        <div class="col-lg-8 ">div2:8份:原本在右</div>
    </div>

    <div class="row">
        <div class="col-lg-4 col-lg-push-8">div1:4份:push到了右边</div>
        <div class="col-lg-8 col-lg-pull-4">div2:8份:pull到了左边</div>
    </div>
</div>
```



### 隐藏 hidden

-   在 lg、md 时，4个元素各占3份；
-   当屏幕缩小到 sm、xs 时，div2 隐藏；

![](http://mdimg.95408.com/web_2019122712.gif)

``` html
<div class="container">
    <div class="row">
        <div class="col-xs-3">div1:3份</div>
        <div class="col-xs-3 hidden-sm hidden-xs">div2:3份 在sm xs时隐藏</div>
        <div class="col-xs-3">div2:3份</div>
        <div class="col-xs-3">div2:3份</div>
    </div>
</div>
```



### 展示 visible

-   在 lg、md 时，4个元素各占3份；
-   当屏幕放大到 lg 时，div2 显示；

![](http://mdimg.95408.com/web_2019122714.gif)

``` html
<div class="container">
    <div class="row">
        <div class="col-xs-3">div1:3份</div>
        <div class="col-xs-3 visible-lg">div2:3份 在lg时显示</div>
        <div class="col-xs-3">div2:3份</div>
        <div class="col-xs-3">div2:3份</div>
    </div>
</div>
```

以上。

















































































