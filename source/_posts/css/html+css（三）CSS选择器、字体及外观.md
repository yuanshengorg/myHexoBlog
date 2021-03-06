---
title: html+css（三）CSS选择器、字体及外观
categories: css
tags: html+css
date: 
---

## CSS层叠样式表

*   结构(html)与样式(css)相分离；
*   设置HTML页面中的文本内容（字体、大小、对齐方式等）、图片的外形（宽高、边框样式、边距等）以及版面的布局和外观显示样式；

## 引入css样式

![](http://mdimg.95408.com/201912311401_442.png?null)

### 行内样式

通过标签的style属性来设置元素的样式；

``` html
<标签名 style="属性1:属性值1; 属性2:属性值2; 属性3:属性值3;"> 内容 </标签名>
<div style="color: red; font-size: 12px;"> 内容 </div>
```

### 内部样式（内嵌式）

将CSS代码集中写在HTML文档的head头部标签中，并且用style标签定义；

``` css
<head>
    <style>
        div {
            color: red;
            font-size: 12px;
        }
    </style>
</head>
```

### 外部样式表（外链式）

将所有的样式放在一个或多个以**. CSS**为扩展名的外部样式表文件中；

``` html
<head>
    <link rel="stylesheet" type="text/css" href="css文件所在路径">
</head>
```

### link标签

*   link 是个单标签；
*   link标签需要放在head头部标签中，并且指定link标签的三个属性：
    -   rel：定义当前文档与被链接文档之间的关系，在这里需要指定为“stylesheet”，表示被链接的文档是一个样式表文件；
    -   type：定义所链接文档的类型，在这里需要指定为“text/css”，表示链接的外部文件为CSS样式表；
    -   href：定义所链接外部样式表文件的URL，可以是相对路径，也可以是绝对路径；

### 三种样式表总结（位置）

| 样式表     | 优点                     | 缺点                     | 使用情况       | 控制范围           |
| ---------- | ------------------------ | ------------------------ | -------------- | ------------------ |
| 行内样式表 | 书写方便，权重高         | 没有实现样式和结构相分离 | 较少           | 控制一个标签（少） |
| 内部样式表 | 部分结构和样式相分离     | 没有彻底分离             | 较多           | 控制一个页面（中） |
| 外部样式表 | 完全实现结构和样式相分离 | 需要引入                 | 最多，强烈推荐 | 控制整个站点（多） |

###样式规则

``` css
h2 {
    color: red;
    font-size: 20px;
}
```

说明：

``` css
h2 —— 选择器 
	指定CSS样式作用于哪个HTML标签 花括号内是对该对象设置的具体样式 
color: red; —— 声明 
	属性和属性值以“键值对”形式出现 
color —— 属性 
	设置的样式属性，例如字体大小、文本颜色等 
red —— 值 
	样式属性的值 
属性和值之间用 : 连接
多个“键值对”之间用 ; 进行区分
```

## CSS基础选择器

作用：找到特定的HTML元素；

![](http://mdimg.95408.com/201912311403_198.png?null)

### 标签选择器

把某一类标签**全部**选择出来  比如所有的div标签  和 所有的 span标签；

``` css
标签名 {
    属性1: 属性值1;
    属性2: 属性值2;
}
div {
    font-size: 18px;
}
```

### 类选择器

可以为元素对象定义单独或相同的样式，可以选择一个或者多个标签；

可以有多个类名，类名中间用空格隔开；

``` css
<div class='abc'></div>
.abc {
    color: red;
}
```

### id选择器

元素的id值是唯一的，只能对应于文档中某一个具体的元素；

``` css
<div id="abc"></div>
#abc {
    color: red;
}
```

### 通配符选择器

会匹配页面所有的元素，降低页面响应速度，不建议随便使用；

``` css
* {
    margin: 0;
    /* 定义外边距*/
    padding: 0;
    /* 定义内边距*/
}
```

### 总结

| 选择器       | 作用                          | 缺点                     | 使用情况   | 用法                 |
| ------------ | ----------------------------- | ------------------------ | ---------- | -------------------- |
| 标签选择器   | 可以选出所有相同的标签，比如p | 不能差异化选择           | 较多       | p { color：red; }     |
| 类选择器     | 可以选出1个或者多个标签       | 可以根据需求选择         | 非常多     | .nav { color: red; } |
| id选择器     | 一次只能选择器1个标签         | 只能使用一次             | 不推荐使用 | #nav {color: red; }   |
| 通配符选择器 | 选择所有的标签                | 选择的太多，有部分不需要 | 不推荐使用 | * {color: red; }      |

*   尽量少用通用选择器 `*` 
*   尽量少用 ID 选择器
*   不使用无具体语义定义的标签选择器 div span

## 复合选择器

![](http://mdimg.95408.com/201912311421_984.png?null)

### 后代选择器

*   用来选择元素或元素组的**子孙后代**
*   其写法就是把外层标签写在前面，内层标签写在后面，中间用**空格**分隔 

``` css
/* 父级 子级{属性:属性值;属性:属性值;} */
.abc h3 {
	color:red;
	font-size:16px;
}

<div class="abc">
	<h3></h3>
</div>
```

### 子代选择器

*   只能选择某元素的**子元素(亲儿子)**
*   父级标签写在前面，子级标签写在后面，中间跟一个 `>` 进行连接

``` css
.abc > h3 {
    color: red;
    font-size: 14px;
}

<div class="abc">
    <h3>aaa</h3>   /* 只能选择此处的h3 */ 
    <div>
    	<h3>bbb</h3>   /* 不能选择非子代（孙子）的h3 */
    </div>
</div>
```

### 交集选择器

必须满足：既有标签一的特点，也有标签二的特点

两个选择器之间**不能有空格**，如 h3.special，使用较少；

``` css
p.one
选择的是：类名为 .one 的段落标签
```

### 并集选择器

将一些样式相同的选择器，写在一起；

将各个选择器用 `,` 分隔；

``` css
.abc,
#xyz {
    color: red;
}

<div class="abc"></div>
<div id="xyz"></div>
```

### 链接伪类选择器

``` css
a:link
/* 未访问的链接 */
a:visited
/* 已访问的链接 */
a:hover
/* 鼠标移动到链接上 */
a:active
/* 选定的链接 */
```

顺序尽量不要颠倒  按照  lvha 的顺序；

一般写hover居多；

``` css
a {
    /* a是标签选择器  所有的链接 */
    font-weight: 700;
    font-size: 16px;
    color: gray;
}
a:hover {
    /* :hover 是链接伪类选择器 鼠标经过 */
    color: red;
    /*  鼠标经过的时候，由原来的 灰色 变成了红色 */
}
```

### 总结

| 选择器         | 作用                     | 特征                 | 使用情况 | 隔开符号及用法                          |
| -------------- | ------------------------ | -------------------- | -------- | --------------------------------------- |
| 后代选择器     | 用来选择元素后代         | 是选择所有的子孙后代 | 较多     | 符号是**空格** .nav a                   |
| 子代选择器     | 选择 最近一级元素        | 只选亲儿子           | 较少     | 符号是**>**   .nav>p                    |
| 交集选择器     | 选择两个标签交集的部分   | 既是 又是            | 较少     | **没有符号**  p.one                     |
| 并集选择器     | 选择某些相同样式的选择器 | 可以用于集体声明     | 较多     | 符号是**逗号** .nav, .header            |
| 链接伪类选择器 | 给链接更改状态           |                      | 较多     | 重点记住 a{} 和 a:hover  实际开发的写法 |

## CSS字体 font

![](http://mdimg.95408.com/201912311404_478.png?null)

### font-size 字体大小

``` css
p {
    font-size: 20px;
}
```

### font-family 字体

*   font-family属性用于设置哪一种字体；
*   各种字体之间必须使用英文状态下的逗号隔开；
*   中文字体、字体中有空格或特殊符号的，用 双引号 包含；
*   尽量写Unicode编码字体；

``` css
p {
	font-family: Arial,"Microsoft Yahei", "微软雅黑";
}
```

### CSS Unicode字体

在 CSS 中设置字体名称，直接写中文是可以的。但是在文件编码（GB2312、UTF-8 等）不匹配时会产生乱码的错误。

| 字体名称    | 英文名称        | Unicode 编码         |
| ----------- | --------------- | -------------------- |
| 宋体        | SimSun          | \5B8B\4F53           |
| 新宋体      | NSimSun         | \65B0\5B8B\4F53      |
| 黑体        | SimHei          | \9ED1\4F53           |
| 微软雅黑    | Microsoft YaHei | \5FAE\8F6F\96C5\9ED1 |
| 楷体_GB2312 | KaiTi_GB2312    | \6977\4F53_GB2312    |
| 隶书        | LiSu            | \96B6\4E66           |
| 幼园        | YouYuan         | \5E7C\5706           |
| 华文细黑    | STXihei         | \534E\6587\7EC6\9ED1 |
| 细明体      | MingLiU         | \7EC6\660E\4F53      |
| 新细明体    | PMingLiU        | \65B0\7EC6\660E\4F53 |

尽量只使用宋体和微软雅黑中文字体；

### font-weight 字体粗细

| 属性值  | 描述                                  |
| ------- | :------------------------------------ |
| normal  | 默认值（不加粗的）                    |
| bold    | 定义粗体（加粗的）                    |
| 100~900 | 400 等同于 normal，而 700 等同于 bold |

我们平时更喜欢用数字来表示加粗和不加粗。

### font-style 字体风格

font-style属性用于定义字体风格，如设置斜体、倾斜或正常字体，其可用属性值如下：

| 属性   | 作用                                                    |
| ------ | :------------------------------------------------------ |
| normal | 默认值，浏览器会显示标准的字体样式  font-style: normal; |
| italic | 浏览器会显示斜体的字体样式。                            |

我们很少给文字加斜体，反而喜欢给斜体标签（em，i）改为普通模式；

### font 综合设置字体样式

``` css
选择器 {
    font: font-style font-weight font-size/line-height font-family;
}
```

*   使用font属性时，必须按上面语法格式中的顺序书写，不能更换顺序，各个属性以**空格**隔开。
*   其中不需要设置的属性可以省略（取默认值），但必须保留font-size和font-family属性，否则font属性将不起作用。

### font总结

| 属性        | 表示     | 注意点                                                       |
| :---------- | :------- | :----------------------------------------------------------- |
| font-size   | 字号     | 我们通常用的单位是px 像素，一定要跟上单位                    |
| font-family | 字体     | 实际工作中按照团队约定来写字体                               |
| font-weight | 字体粗细 | 记住加粗是 700 或者 bold  不加粗 是 normal 或者  400  记住数字不要跟单位 |
| font-style  | 字体样式 | 记住倾斜是 italic     不倾斜 是 normal  工作中我们最常用 normal |
| font        | 字体连写 | 1. 字体连写是有顺序的  不能随意换位置 2. 其中字号 和 字体 必须同时出现 |

``` css
body {
    font-size: 16px;
}
.title {
    /* 字体大小 */
    font-size: 20px;
    /*设置字体		*/
    font-family: Arial, "Microsoft YaHei", "微软雅黑", "黑体";
    /*字体加粗	*/
    /*font-weight: bold; */
    /*这个 700 一定不要跟单位  700 等价于 bold*/
    font-weight: 700;
    /*字体倾斜*/
    font-style: italic;
    /*综合性写法*/
    /* font: font-style  font-weight  font-size/line-height  font-family;*/
    font: italic 700 20px "微软雅黑";
}
h1 {
    /*让粗体的不加粗*/
    /*font-weight: normal;  400 等价于 normal*/
    font-weight: 400;
}
em {
    /* 让倾斜的字体 不倾斜 */
    font-style: normal;
}
```

## CSS文本外观属性

![](http://mdimg.95408.com/201912311404_428.png?null)

### color 文本颜色

其取值方式有如下3种：

| 表示表示       | 属性值                                  |
| :------------- | :-------------------------------------- |
| 预定义的颜色值 | red，green，blue，还有我们的御用色 pink |
| 十六进制       | #FF0000，#FF6600，#29D794               |
| RGB代码        | rgb(255, 0, 0)或rgb(100%, 0%, 0%)           |

我们实际工作中， 用 16进制的写法是最多的，而且我们更喜欢简写方式比如  #f00 代表红色

### text-align 文本水平对齐

可用属性值如下：

| 属性   |       解释       |
| ------ | :--------------: |
| left   | 左对齐（默认值） |
| right  |      右对齐      |
| center |     居中对齐     |

> **注意：是让盒子里面的内容水平居中， 而不是让盒子居中对齐；**

### line-height 行间距

line-height属性用于设置行间距，就是行与行之间的距离，即字符的垂直间距，一般称为行高。

``` css
line-height: 24px;
```

### text-indent 首行缩进

``` css
p {
    /*行间距*/
    line-height: 25px;
    /*首行缩进2个字  em  1个em 就是1个字的大小*/
    text-indent: 2em;
}
```

### text-decoration 文本装饰

text-decoration   通常我们用于给链接修改装饰效果

| 值           | 描述                                                  |
| ------------ | ----------------------------------------------------- |
| none         | 默认。定义标准的文本。 取消下划线（最常用）           |
| underline    | 定义文本下的一条线。下划线 也是我们链接自带的（常用） |
| overline     | 定义文本上的一条线。（不用）                          |
| line-through | 定义穿过文本下的一条线。（不常用）                    |

### CSS外观属性总结

| 属性            | 表示     | 注意点                                                  |
| :-------------- | :------- | :------------------------------------------------------ |
| color           | 颜色     | 我们通常用  十六进制   比如 而且是简写形式 #fff         |
| line-height     | 行高     | 控制行与行之间的距离                                    |
| text-align      | 水平对齐 | 可以设定文字水平的对齐方式                              |
| text-indent     | 首行缩进 | 通常我们用于段落首行缩进2个字的距离   text-indent: 2em; |
| text-decoration | 文本修饰 | 记住 添加 下划线  underline  取消下划线  none           |

以上。