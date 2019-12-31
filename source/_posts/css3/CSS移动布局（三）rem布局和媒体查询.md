---
title: CSS移动布局（三）rem布局和媒体查询
categories: css3
tags: Css3
date: 
---

## rem 基础

-   em：相对于父元素的字体大小；
-   rem： (root em) 相对于html元素的字体大小；
-   rem优势：父元素文字大小可能不一致， 但只有一个html，可以控制整个页面的元素大小；

>   html 字体这 10px，div 为 20rem = 200px，span为 10rem = 100px：

![](http://mdimg.95408.com/201912271258_392.png?null)

``` html
<style>
    html {
        font-size: 10px;
    }
    div {
        width: 20rem;
        height: 20rem;
        border: 1px solid red;
    }
    span {
        display: block;
        width: 10rem;
        height: 10rem;
        background-color: aquamarine;
    }
</style>

<div>
    <span>1</span>
</div>
```



## @media 媒体查询

-   媒体查询（Media Query）是CSS3新语法；
-   使用 @media查询，可以针对不同的媒体类型定义不同的样式；
    -   @media开头
    -   mediatype  媒体类型
    -   and  not  only 关键字 
    -   media feature 媒体特性（小括号包含）

### mediatype  媒体类型

-   all   用于所有设备
-   print   用于打印机和打印预览
-   scree   用于电脑屏幕、平板、智能手机

### and  not  only 关键字 

-   and：可以将多个媒体特性连接到一起，相当于“且”的意思；
-   not：排除某个媒体类型，相当于“非”的意思，可以省略；
-   only：指定某个特定的媒体类型，可以省略；

### media feature 媒体特性

-   width   输出设备中 **可见区域** 宽度；
-   min-width   输出设备中 **最小** 宽度；
-   max-width   输出设备中 **最大** 宽度；

### 例：根据屏幕宽度 改变颜色

>   根据不同屏幕宽度，改变body的颜色：

![](http://mdimg.95408.com/web_2019122702.gif)

``` css
/* max-width 最大宽度539 = 小于等于539时 显示的颜色 */
@media screen and (max-width: 539px) {
    body {
        background-color: #333;
    }
}
/* min-width 最小宽度540 = 大于等于540时 显示的颜色 */
@media screen and (min-width: 540px) {
    body {
        background-color: #666;
    }
}
/* min-width 最小宽度970 = 大于等于970时 显示的颜色 */
/* 后面的查询会覆盖前面的，当超过970时显示 */
@media screen and (min-width: 970px) {
    body {
        background-color: #fff;
    }
}
```

### 例：媒体查询 + rem效果

-   在不同屏幕大小下，html 中的 字体大小 不同；
-   div 和 字体 使用 `rem` 单位；
-   实现：不同屏幕大小下，div 和 字体大小发生变化；

![](http://mdimg.95408.com/web_2019122703.gif)

``` html
<style>
    * {
        margin: 0;
        padding: 0;
    }
    /* 当html写固定时，div大小就固定了 */
    /* html {
    font-size: 50px;
    } */

    /* 通过媒体查询，随着屏幕变化，改变html的值 */
    /* 小于等于319px时 */
    @media screen and (max-width: 319px) {
        html {
            font-size: 20px;
        }
    }
    /* 大于等于320px时 */
    @media screen and (min-width: 320px) {
        html {
            font-size: 50px;
        }
    }      
    /* 大于等于640px时 */
    @media screen and (min-width: 640px) {
        html {
            font-size: 80px;
        }
    }
    div {
        /* 宽度：html字体 1rem */
        height: 1rem;
        /* 字体大小：html字体 0.5rem */
        font-size: 0.5rem;
        color: #fff;
        line-height: 1rem;
        text-align: center;
        background-color: green;
    }
</style>
<div>Bamboo</div>
```

### 例：媒体查询 引入资源

-   引入资源：针对于不同的屏幕尺寸 调用不同的css文件；
-   屏幕大于等于 640px ，div 一行显示2个；
-   屏幕小于 640px时，div 一行显示1个；

![](http://mdimg.95408.com/web_2019122704.gif)

``` html
<link rel="stylesheet" href="style320.css" media="screen and (min-width: 320px)">
<link rel="stylesheet" href="style640.css" media="screen and (min-width: 640px)">
<div>1</div>
<div>2</div>
```

css资源文件：

``` css
/* style320.css */
div {
    width: 100%;
    height: 100px;
}
div:nth-child(1) {
    background-color: pink;
}
div:nth-child(2) {
    background-color: purple;
}

/* style640.css */
div {
    float: left;
    width: 50%;
    height: 100px;
}
div:nth-child(1) {
    background-color: pink;
}
div:nth-child(2) {
    background-color: purple;
}
```



## Less

-   Less（LeanerStyle Sheets）是一门 CSS扩展语言；
-   Less是一门 CSS 预处理语言，它扩展了CSS的动态特性；
-   常见的CSS预处理器：Sass、Less、Stylus；
-   Less中文网址：[lesscss.cn](http://lesscss.cn/)；

**安装：**

``` bash
npm install -g less
```

### Less 变量

``` less
@变量名:值;
@color: pink;
```

-   变量名区分大小写；
-   @color  和  @Color 是两个不同的变量

``` less
// 定义一个粉色的变量
@color: pink; 
// 定义了一个 字体为14像素的变量
@font14: 14px;
div {
    color: @color;
    font-size: @font14;
}
a {
    font-size: @font14;
}
```

### VS 插件 Easy LESS

-   Easy LESS 插件用来把 less 文件编译为 css 文件；
-   只要保存一下 Less 文件，会自动生成 CSS 文件；

### Less 嵌套

-   嵌套：子元素样式嵌套在父元素中；
-   交集、伪类、伪元素选择器，利用 `&` 进行连接；

``` less
// nav的子元素logo的样式嵌套在nav元素当中
// 伪元素/伪类前面加 & 
.nav {
    .logo {
        color: green;
    }
    &::before {
        content: "";
    }
}

a{
  font-size: 12px;
  &:hover{
      color:red;
  }
}

```

### Less 运算

-   任何数字、颜色或者变量都可以参与运算；
-   Less提供了加（+）、减（-）、乘（*）、除（/）算术运算；
-   运算符中间左右有个空格隔开 1px + 5；
-   两个值之间只有一个值有单位，则运算结果就取该单位；
-   两个值都有单位，取第一个值的单位 ；

``` less
/* Less 里面写 */
@witdh: 10px + 5;
div {
    border: @witdh solid red;
}
/* 生成的css */
div {
  border: 15px solid red;
}
```



### Mixin

``` less
/* 定义一个类 */
.roundedCorners(@radius: 5px) {
  -moz-border-radius: @radius;
  -webkit-border-radius: @radius;
  border-radius: @radius;
}
/* 定义的类应用到另个一个类中 */
＃header {
  .roundedCorners;
}
#footer {
  .roundedCorners(10px);
}
```



### Import

>   将样式放到多个文件中，最后通过`@import`的方式合并;
>
>   `@import url('_buttom.less');`

``` less
// main.less
@import url('_buttom.less');
body{
  width: 1024px;
}

// _buttom.less
.btn{
  color: red;
}

// 生成css
.btn{
  color: red;
}
body{
  width: 1024px;
}
```



### 函数

内置函数

-   lighten：将一个颜色变亮
    -   `lighten(#000, 10%);    // #1a1a1a`
-   darken：将一个颜色变暗
    -   `darken(#000, 10%);    // #e6e6e6`



以上。













































