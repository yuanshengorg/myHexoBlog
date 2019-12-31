---
title: html+css（五）CSS盒子模型
categories: css
tags: html+css
date: 
---

## 盒子模型 box model

*   盒子模型有元素的内容、边框（border）、内边距（padding）、和外边距（margin）组成
*   盒子里面的文字和图片等元素是 内容区域
*   盒子的厚度 我们成为 盒子的边框 
*   盒子内容与边框的距离是内边距
*   盒子与盒子之间的距离是外边距

![](http://mdimg.95408.com/201912311509_411.png?null)

## 边框 border

![](http://mdimg.95408.com/201912311521_486.png?null)

``` css
border : border-width || border-style || border-color
```

| 属性         |          作用          |
| ------------ | :--------------------: |
| border-width | 定义边框粗细，单位是px |
| border-style |       边框的样式       |
| border-color |        边框颜色        |

border-style边框的样式：

*   none：没有边框即忽略所有边框的宽度（默认值）
*   solid：边框为单实线(最为常用的)
*   dashed：边框为虚线  
*   dotted：边框为点线

边框综合设置：

``` css
border: 1px solid red;
没有顺序
```

### 附：盒子边框

*   通过表格的 `cellspacing="0"` , 将单元格与单元格之间的距离设置为0
*   但是两个单元格之间的边框会出现重叠，从而使边框变粗
*   通过css属性：border-collapse:collapse; 表示相邻边框合并在一起

``` css
table,
td {
    border-collapse: collapse;
    /*合并相邻边框*/
}
```

### 圆角 border-radius

``` css
border-radius: 10px;
设置10px的圆角 

border-radius: 50%;
让一个正方形变成圆圈
```

### 阴影 box-shadow

``` css
box-shadow: 水平位置 垂直位置 模糊距离 阴影尺寸 阴影颜色 内/外阴影；
```

| 值         | 说明                                               |
| :--------- | :------------------------------------------------- |
| *h-shadow* | 必需的。水平阴影的位置。允许负值                   |
| *v-shadow* | 必需的。垂直阴影的位置。允许负值                   |
| *blur*     | 可选。模糊距离                                     |
| *spread*   | 可选。阴影的大小                                   |
| *color*    | 可选。阴影的颜色。在CSS颜色值找颜色值的完整列表    |
| inset      | 可选。从外层的阴影（开始时outset）改变阴影内侧阴影 |

*   前两个属性是必须写的，其余的可以省略；
*   外阴影 (outset) 是默认的 但是不能写，想要内阴影可以写 inset ；

![](http://mdimg.95408.com/201912311559_939.png?null)

``` css
div {
    width: 200px;
    height: 200px;
    border: 10px solid red;
    /* box-shadow: 5px 5px 3px 4px rgba(0, 0, 0, .4);  */
    /* box-shadow:水平位置 垂直位置 模糊距离 阴影尺寸（影子大小） 阴影颜色  内/外阴影； */
    box-shadow: 0 15px 30px rgba(0, 0, 0, .3);
}
```

## 内边距 padding

![](http://mdimg.95408.com/201912311522_325.png?null)

边框与内容之间的距离；

| 属性           | 作用     |
| -------------- | :------- |
| padding-left   | 左内边距 |
| padding-right  | 右内边距 |
| padding-top    | 上内边距 |
| padding-bottom | 下内边距 |

当我们给盒子指定padding值之后：

1.  内容和边框有了距离，添加了内边距
2.  盒子会变大了。

| 值的个数 | 表达意思                                        |
| -------- | ----------------------------------------------- |
| 1个值    | padding：上下左右内边距; |
| 2个值    | padding: 上下内边距    左右内边距 ；            |
| 3个值    | padding：上内边距   左右内边距   下内边距；     |
| 4个值    | padding: 上内边距 右内边距 下内边距 左内边距 ； |

### 附：内盒尺寸大小计算

盒子的整体大小 = 盒子的宽度高度 + padding + border 三者之和；

解决：例子宽度高度值 应减少 内边距和边框的数值；

![](http://mdimg.95408.com/201912311516_389.png?null)

> 下图：盒子的总大小这：330px宽、230px高：

![](http://mdimg.95408.com/201912311603_111.png?null)

### 附：padding不影响盒子情况

> 如果没有给一个盒子指定宽度， 此时，如果给这个盒子指定padding， 则不会撑开盒子。

``` css
div {
    /* 宽度指定到父盒子div上，子盒子p会继承 */
    width: 200px;
    height: 200px;
    background-color: pink;
}

p {
    /* 子盒子p没有宽度 则padding不会撑开盒子*/
    height: 100px;
    background-color: purple;
    padding: 10px;
}

<div><p>aaabbbccc</p></div>
```

## 外边距 margin

![](http://mdimg.95408.com/201912311522_905.png?null)

控制盒子和盒子之间的距离；

| 属性          | 作用     |
| ------------- | :------- |
| margin-left   | 左外边距 |
| margin-right  | 右外边距 |
| margin-top    | 上外边距 |
| margin-bottom | 下外边距 |

margin值的简写 （复合写法）代表意思  跟 padding 完全相同。

### 块级盒子水平居中

*   盒子必须指定了宽度（width）
*   然后就给**左右的外边距都设置为auto*
*   实际工作中常用这种方式进行网页布局

``` css
.header {
    width: 960px;
    margin: 0 auto;
}
```

常见的写法，以下下三种都可以：

*   margin-left: auto; margin-right: auto; 
*   margin: auto; 
*   margin: 0 auto; 

### 文字居中和盒子居中区别

1.  盒子内的文字水平居中是  text-align: center,  而且还可以让 行内元素和行内块居中对齐
2.  块级盒子水平居中  左右margin 改为 auto 

``` css
text-align: center;
/* 文字 行内元素 行内块元素水平居中 */
margin: 10px auto;
/* 块级盒子水平居中  左右margin 改为 auto 就阔以了 上下margin都可以 */
```

![](http://mdimg.95408.com/201912311554_284.png?null)

``` html
<style>
    div {
        width: 300px;
        height: 200px;
        background-color: pink;
        /*块级盒子水平居中*/
        margin: 50px auto;
        /*盒子里面的文字 行内元素 、行内块居中对齐水平居中*/
        text-align: center;
    }
</style>
<div>
    我是文字 <br />
    <input type="button" value="点击提交">
</div>
```

### 插入图片和背景图片区别

1.  插入图片 我们用的最多 比如产品展示类  移动位置只能靠盒模型 padding margin
2.  背景图片我们一般用于小图标背景 或者 超大背景图片  背景图片 只能通过  background-position

``` css
 img {
     width: 200px;
     /* 插入图片更改大小 width 和 height */
     height: 210px;
     margin-top: 30px;
     /* 插入图片更改位置 可以用margin 或padding  盒模型 */
     margin-left: 50px;
     /* 插入当图片也是一个盒子 */
 }

 div {
     width: 400px;
     height: 400px;
     border: 1px solid purple;
     background: #fff url(images/sun.jpg) no-repeat;
     background-position: 30px 50px;
     /* 背景图片更改位置 background-position */
 }
```

### 清除元素的默认内外边距

``` css

* {

    padding: 0;
    /* 清除内边距 */
    margin: 0;
    /* 清除外边距 */
}
```

### 外边距塌陷

#### 相邻块元素垂直外边距的合并

*   当上下相邻的两个块元素相遇时，如果上面的元素有下外边距margin-bottom
*   下面的元素有上外边距margin-top，则他们之间的垂直间距不是margin-bottom与margin-top之和
*   **取两个值中的较大者**这种现象被称为相邻块元素垂直外边距的合并（也称外边距塌陷）。

![](http://mdimg.95408.com/201912311530_335.png?null)

**解决方案：尽量给只给一个盒子添加margin值**。

#### 嵌套块元素垂直外边距的合并（塌陷）

*   对于两个嵌套关系的块元素，如果父元素没有上内边距及边框
*   父元素的上外边距会与子元素的上外边距发生合并
*   合并后的外边距为两者中的较大者

![](http://mdimg.95408.com/201912311531_644.png?null)

**解决方案：**

1.  可以为父元素定义上边框。
2.  可以为父元素定义上内边距
3.  可以为父元素添加overflow:hidden。

还有其他方法，比如浮动、固定、绝对定位的盒子不会有问题；

``` html
<style>
    .father {
        width: 200px;
        height: 200px;
        background-color: pink;
        /* 嵌套关系 垂直外边距合并  解决方案 */
        /* 1. 可以为父元素定义上边框  transparent 透明 */
        border-top: 1px solid transparent;
        /* 2. 可以给父级指定一个 上 padding值 */
        padding-top: 1px;
        /* 3. 可以为父元素添加overflow:hidden */
        overflow: hidden;
    }

    .son {
        width: 100px;
        height: 100px;
        background-color: purple;
        margin-top: 100px;
    }
</style>
<div class="father">
    <div class="son"></div>
</div>
```

![](http://mdimg.95408.com/201912311556_673.png?null)

### 使用优先级

按照 优先使用  宽度 （width）  其次使用 内边距（padding） 再次 外边距（margin）。   

``` 
  width >  padding  >   margin   
```

## CSS规范

**空格规范**

*   a 选择器 与 左花括号 { 之间必须包含空格
*   b 属性名 与之后的冒号 : 之间不允许包含空格
*   c 冒号  : 与 属性值 之间必须包含空格

``` css
.selector {
    font-size: 12px;
}
```

**选择器规范**

*   并集选择器，每个选择器声明必须独占一行
*   选择器的嵌套层级应不大于 3 级，位置靠后的限定条件应尽可能精确

``` css
.post,
.abc,
.comment {
    line-height: 1.5;
}

.page .header .login {}
```

**属性规范**

*   属性定义必须另起一行
*   属性定义后必须以分号结尾

``` css
.selector {
    margin: 0;
    padding: 0;
}
```

