---
title: html+css（四）CSS显示模式、行高、背景、特性
categories: css
tags: html+css
date: 
---

## 显示模式 display

![](http://mdimg.95408.com/201912311503_941.png?null)

### 块级元素 block-level

``` css
常见的块元素有 <h1>~<h6>、 <p>、 <div>、 <ul>、 <ol>、 <li>等， 其中<div>标签是最典型的块元素。
```

*   独占一行
*   高度、宽度、外边距以及内边距都可以控制
*   宽度默认是容器（父级宽度）的100%
*   是一个容器及盒子，里面可以放行内或者块级元素。

*   只有 文字才 能组成段落  因此 p  里面不能放块级元素，特别是 p 不能放div 
*   同理还有这些标签h1, h2, h3, h4, h5, h6, dt，他们都是文字类块级标签，里面不能放其他块级元素。

### 行内元素 inline-level

``` css
常见的行内元素有 <a>、 <strong>、 <b>、 <em>、 <i>、 <del>、 <s>、 <ins>、 <u>、 <span>等， 其中<span>标签最典型的行内元素。有的地方也成内联元素
```

*   相邻行内元素在一行上，一行可以显示多个
*   高、宽直接设置是无效的
*   默认宽度就是它本身内容的宽度
*   行内元素只能容纳文本或则其他行内元素
*   链接里面不能再放链接

*   特殊情况a里面可以放块级元素，但是给a转换一下块级模式最安全

### 行内块元素 inline-block

``` css
在行内元素中有几个特殊的标签 <img />、 <input />、 <td>， 可以对它们设置宽高和对齐属性，有些资料可能会称它们为行内块元素。
```

*   和相邻行内元素（行内块）在一行上, 但是之间会有空白缝隙。一行可以显示多个
*   默认宽度就是它本身内容的宽度
*   高度，行高、外边距以及内边距都可以控制

### 总结

| 元素模式   | 元素排列               | 设置样式               | 默认宽度         | 包含                     |
| ---------- | ---------------------- | ---------------------- | ---------------- | ------------------------ |
| 块级元素   | 一行只能放一个块级元素 | 可以设置宽度高度       | 容器的100%       | 容器级可以包含任何标签   |
| 行内元素   | 一行可以放多个行内元素 | 不可以直接设置宽度高度 | 它本身内容的宽度 | 容纳文本或则其他行内元素 |
| 行内块元素 | 一行放多个行内块元素   | 可以设置宽度和高度     | 它本身内容的宽度 |                          |

### 转换 display

*   块转行内：display:inline; 
*   行内转块：display:block; 
*   块、行内元素转换为行内块： display: inline-block; 

## 行高 line-height

*   行高等于高度单行文字会垂直居中
*    行高我们利用最多的一个地方是： 可以让单行文本在盒子中垂直居中对齐
    -   文字行高 = 盒子高度
*   行高   =  上距离 +  内容高度  + 下距离 
    -   如果 行高 等 高度  文字会 垂直居中
    -   如果行高 大于 高度   文字会 偏下 
    -   如果行高小于高度   文字会  偏上 

![](http://mdimg.95408.com/201912311431_851.png?null)

> 当文字行高等于盒子高度：

![](http://mdimg.95408.com/201912311454_227.png?null)

``` html
<style>
    div {
        width: 100px;
        height: 80px;
        background-color: pink;
        line-height: 80px;
    }
</style>
<div> 文字垂直居中 </div>
```

## CSS背景 background

![](http://mdimg.95408.com/201912311501_370.png?null)

### 背景颜色 background-color

``` css
background-color: red;
默认的值是 transparent 透明的
```

### 背景图片 background-image

``` css
background-image : none | url(url地址);
background-image : url(images/demo.png);
```

| 参数 |              作用              |
| ---- | :----------------------------: |
| none |       无背景图（默认的）       |
| url  | 使用绝对或相对地址指定背景图像 |

我们提倡 背景图片后面的地址，url不要加引号。

### 背景平铺 background-repeat

``` css
background-repeat : repeat | no-repeat | repeat-x | repeat-y
```

| 参数      |                 作用                 |
| --------- | :----------------------------------: |
| repeat    | 背景图像在纵向和横向上平铺（默认的） |
| no-repeat |            背景图像不平铺            |
| repeat-x  |         背景图像在横向上平铺         |
| repeat-y  |          背景图像在纵向平铺          |

### 背景位置 background-position

``` css
background-position : length || length background-position : position || position
```

| 参数     |                              值                              |
| -------- | :----------------------------------------------------------: |
| length   |         百分数 \| 由浮点数字和单位标识符组成的长度值         |
| position | top \| center \| bottom \| left \| center \| right   方位名词 |

*   必须先指定background-image属性
*   position 后面是x坐标和y坐标。 可以使用方位名词或者 精确单位。
*   如果指定两个值，两个值都是方位名字，则两个值前后顺序无关，比如left  top和top  left效果一致
*   如果只指定了一个方位名词，另一个值默认居中对齐。
*   如果position 后面是精确坐标， 那么第一个，肯定是 x  第二的一定是y
*   如果只指定一个数值, 那该数值一定是x坐标，另一个默认垂直居中
*   如果指定的两个值是 精确单位和方位名字混合使用，则第一个值是x坐标，第二个值是y坐标

**实际工作用的最多的，就是背景图片居中对齐了。**

``` css
div {
    width: 800px;
    height: 500px;
    background-color: pink;
    /*背景图片 1. 必须加url 2. url 里面的地址不要加 引号*/
    background-image: url(images/l.jpg);
    /*背景图片不平铺*/
    background-repeat: no-repeat;
    /*背景位置*/
    /*background-position: x坐标 y坐标;*/
    /*background-position: right top; 右上角*/
    /*background-position: left bottom; 左下角*/
    /*background-position: center center; 水平居中 垂直居中*/
    /*则两个值前后顺序无关 因为是方位名词*/
    /*background-position:  center left; */
    /*如果只指定了一个方位名词，另一个值默认居中对齐*/
    background-position: top;
    /*以下说明  x 10像素  y 垂直居中的*/
    /*background-position: 10px center;*/
    background-position: center 10px;
    /*这种写法一般是我们以后常用 超大背景图片的做法 背景定位*/
    background-position: center top;
}
```

### 背景附着 background-attachment

背景附着就是解释背景是滚动的还是固定的

```】
background-attachment : scroll | fixed 

``` 

| 参数   |           作用           |
| ------ | :----------------------: |
| scroll | 背景图像是随对象内容滚动 |
| fixed  |       背景图像固定       |

``` css
div {
    height: 3000px;
    background-image: url(images/sms.jpg);
    background-repeat: no-repeat;
    /* 超大背景图片背景定位 */
    background-position: center top;
    /* 背景固定 */
    background-attachment: fixed;
}
```

### 背景连写 background

*   background：属性的值的书写顺序官方并没有强制标准的。为了可读性，建议大家如下写：
*   background: 背景颜色 背景图片地址 背景平铺 背景滚动 背景位置; 

``` css
background: transparent url(image.jpg) repeat-y scroll center top;
```

``` css
body {
    background-color: #ccc;
    background-image: url(images/sms.jpg);
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: fixed;
    /*background: 背景颜色 背景图片地址 背景平铺 背景滚动 背景位置;*/
    background: #ccc url(images/sms.jpg) no-repeat fixed center top;
}
```

### 背景透明 rgba

``` css
background: rgba(0, 0, 0, 0.3);
```

*   最后一个参数是alpha 透明度  取值范围 0~1之间
*   我们习惯把0.3 的 0 省略掉  这样写  background: rgba(0, 0, 0, .3); 
*   注意：  背景半透明是指盒子背景半透明， 盒子里面的内容不受影响

### 总结

| 属性                  | 作用             | 值                                                           |
| --------------------- | :--------------- | :----------------------------------------------------------- |
| background-color      | 背景颜色         | 预定义的颜色值/十六进制/RGB代码                              |
| background-image      | 背景图片         | url(图片路径)                                                |
| background-repeat     | 是否平铺         | repeat/no-repeat/repeat-x/repeat-y                           |
| background-position   | 背景位置         | length/position    分别是x  和 y坐标， 切记 如果有 精确数值单位，则必须按照先X 后Y 的写法 |
| background-attachment | 背景固定还是滚动 | scroll/fixed                                                 |
| 背景简写              | 更简单           | 背景颜色 背景图片地址 背景平铺 背景滚动 背景位置; 他们没有顺序 |
| 背景透明              | 让盒子半透明     | background: rgba(0, 0, 0, 0.3); 后面必须是 4个值              |

## CSS三大特性

![](http://mdimg.95408.com/201912311502_77.png?null)

### 层叠性

所谓层叠性是指多种CSS样式的叠加；

*   样式冲突，遵循的原则是**就近原则。** 那个样式离着结构近，就执行那个样式。
*   样式不冲突，不会层叠

### 继承性

*   子标签会继承父标签的某些样式，如文本颜色和字号。
*   想要设置一个可继承的属性，只需将它应用于父元素即可。

### 优先级

#### 权重计算公式

关于CSS权重，我们需要一套计算公式来去计算，这个就是 CSS Specificity（特殊性）

| 标签选择器             | 计算权重公式 |
| ---------------------- | ------------ |
| 继承或者 *             | 0, 0, 0, 0      |
| 每个元素（标签选择器） | 0, 0, 0, 1      |
| 每个类、伪类           | 0, 0, 1, 0      |
| 每个ID                 | 0, 1, 0, 0      |
| 每个行内样式 style=""  | 1, 0, 0, 0      |
| 每个!important  重要的 | ∞ 无穷大     |

值从左到右，左面的最大，一级大于一级，数位之间没有进制，级别之间不可超越。 

#### 权重叠加

我们经常用交集选择器，后代选择器等，是有多个基础选择器组合而成，那么此时，就会出现权重叠加。

就是一个简单的加法计算

*   div ul  li   ------>      0, 0, 0, 3
*   .nav ul li   ------>      0, 0, 1, 2
*   a:hover      -----—>   0, 0, 1, 1
*   .nav a       ------>      0, 0, 1, 1

数位之间没有进制 比如说： 0, 0, 0, 5 + 0, 0, 0, 5 =0, 0, 0, 10 而不是 0, 0, 1, 0， 所以不会存在10个div能赶上一个类选择器的情况。

以上。

