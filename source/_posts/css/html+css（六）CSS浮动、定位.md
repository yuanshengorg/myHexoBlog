---
title: html+css（六）CSS浮动
categories: css
tags: html+css
date: 
---

## 浮动 float

![](http://mdimg.95408.com/201912311707_907.png?null)

*   如何让多个盒子(div)水平排列成一行？
*   如何实现盒子的左右对齐？
*   行内块（inline-block）可以实现多个元素一行显示，但是中间会有空白缝隙；
*   因此我们需要浮动来完成网页布局。

![行内块 inline-block](http://mdimg.95408.com/201912311716_936.png?null)

``` css
行内块（inline-block）可以实现多个元素一行显示，但是中间会有空白缝隙 div {
    display: inline-block;
    width: 200px;
    height: 200px;
}
```

### CSS 布局的三种机制

#### 普通流（标准流）

**块级元素**会独占一行，**从上向下**顺序排列；

-   常用元素：div、hr、p、h1~h6、ul、ol、dl、form、table

**行内元素**会按照顺序，**从左到右**顺序排列，碰到父元素边缘则自动换行；

-   常用元素：span、a、i、em等

#### 浮动

让盒子从普通流中**浮**起来, 主要作用让多个块级盒子一行显示。

#### 定位

将盒子**定**在浏览器的某一个**位**置——CSS 离不开定位，特别是后面的 js 特效。



### 浮动 float

元素的浮动是指设置了浮动属性的元素会 脱离标准普通流的控制，移动到指定位置。

1.  **让多个盒子(div)水平排列成一行**，使得浮动成为布局的重要手段。
2.  可以实现盒子的左右对齐等等..
3.  浮动最早是用来**控制图片**，实现**文字环绕图片的效果**。

``` css
选择器 {
    float: 属性值;
}
```

| 属性值    | 描述                     |
| --------- | ------------------------ |
| **none**  | 元素不浮动（**默认值**） |
| **left**  | 元素向**左**浮动         |
| **right** | 元素向**右**浮动         |

> 我们使用浮动的核心目的——让多个块级盒子在同一行显示。 因为这是我们最常见的一种布局方式

**float** —— **浮漏特**

| 特点 | 说明                                                         |
| ---- | ------------------------------------------------------------ |
| 浮   | 加了浮动的盒子**是浮起来**的，漂浮在其他标准流盒子的上面。   |
| 漏   | 加了浮动的盒子**是不占位置的**，它原来的位置**漏给了标准流的盒子**。 |
| 特   | **特别注意**：浮动元素会改变display属性， 类似转换为了行内块，但是元素之间没有空白缝隙 |

![](http://mdimg.95408.com/201912311719_847.png?null)

``` css
<style>.one {
    /*不是标准流了， 漂浮起来， 浮在 标准流的上面*/
    float: left;
    width: 200px;
    height: 200px;
    background-color: pink;
}

.two {
    width: 300px;
    height: 300px;
    background-color: purple;
}

</style><div class="one"></div><div class="two"></div>
```

### 浮动和标准流的父盒子搭配

我们知道，浮动是脱标的，会影响下面的标准流元素；

此时，我们需要给浮动的元素添加一个标准流的父亲，这样，最大化的减小了对其他标准流的影响。

### 浮动元素与父盒子的关系

*   子盒子的浮动参照父盒子对齐
*   不会与父盒子的边框重叠，也不会超过父盒子的内边距

> .son 右浮动后，还是有一定的间距，是 .father 的 padding 和 border ：

![](http://mdimg.95408.com/201912311654_325.png?null)

``` css
.father {
    width: 500px;
    height: 500px;
    background-color: pink;
    border: 20px solid red;
    padding: 20px;
}

.son {
    float: right;
    width: 200px;
    height: 200px;
    background-color: purple;
}
```

### 浮动元素与兄弟盒子的关系

在一个父级盒子中，如果：

*   前一个兄弟盒子是**浮动**的，那么**当前盒子**会与前一个盒子的顶部对齐；
*   前一个兄弟盒子是**普通流**的，那么**当前盒子**会显示在前一个兄弟盒子的下方。 

> 浮动只会影响当前的或者是后面的标准流盒子，不会影响前面的标准流。
>
> 如果一个盒子里面有多个子盒子，如果其中一个盒子浮动了，其他兄弟也应该浮动，防止引起问题。

![](http://mdimg.95408.com/201912311725_354.png?null)

``` html
<style>
    .one {
        /* 左图：加上了 float: left; */
        /* 不是标准流了，漂浮起来 */
        float: left;
        width: 200px;
        height: 200px;
        background-color: pink;
    }

    .two {
        width: 300px;
        height: 300px;
        background-color: purple;
    }
</style>
<div class="one"></div>
<div class="two"></div>
```

## 清除浮动

![](http://mdimg.95408.com/201912311707_487.png?null)

### why

因为父级盒子很多情况下，不方便给高度，但是子盒子浮动就不占有位置，最后父级盒子高度为0，就影响了下面的标准流盒子。

*   由于浮动元素不再占用原文档流的位置，所以它会对后面的元素排版产生影响；
*   准确地说，并不是清除浮动，而是**清除浮动后造成的影响**；

![](http://mdimg.95408.com/201912311743_403.png?null)

> 左图：正常流的盒子，父盒子（粉色）内的子盒子 a（紫色） b（蓝色） 会自然撑开粉色父盒子，灰色的下级盒子在下方正常排列；
>
> 右图：浮动的盒子，父盒子（粉色）内的子盒子 a（紫色） b（蓝色）浮动时，不能撑开父盒子，粉色父盒子高度为0，灰色的下级盒子会跑到粉色盒子下方；

``` html
<style>
    /* 右图 .a .b ：加上了 float: left; */
    /* 右图 .a .b ：没有加 */

    /* 父盒子不方便给高度，根据内容撑开，有多少内容，我的父盒子就有多高*/
    .one {
        width: 500px;
        background-color: pink;
    }

    /* a b 浮动了，不占有位置，而父级又没有高度，所以 two 就到底下去了 */
    .a {
        float: left;
        width: 200px;
        height: 200px;
        background-color: purple;
    }

    .b {
        float: left;
        width: 250px;
        height: 250px;
        background-color: skyblue;
    }

    .two {
        width: 700px;
        height: 400px;
        background-color: #666;
    }
</style>
<div class="one">
    <div class="a">a</div>
    <div class="b">b</div>
</div>
<div class="two"></div>
```

### 本质

清除浮动主要为了解决父级元素因为子级浮动引起内部高度为0 的问题。清除浮动之后， 父级就会根据浮动的子盒子自动检测高度。父级有了高度，就不会影响下面的标准流了。

![](http://mdimg.95408.com/201912311741_555.png?null)

> 左图：上方的例子；
>
> 右图：将粉色父例子 清除浮动 `.one{overflow: hidden;}` ，灰色下级盒子可以正常显示了；

``` css
左图： .one {
    width: 300px;
    background-color: pink;
}

右图： .one {
    width: 300px;
    background-color: pink;
    overflow: hidden;
}
```

### 额外标签法

``` css
W3C推荐的做法，通过在浮动元素末尾添加一个空的标签： <div style=”clear:both”></div>也可以是其他标签如 br 等都可以。
```

### 添加overflow属性

``` css
可以给父级添加： overflow 为 hidden| auto| scroll 都可以实现。 .father {
    overflow: hidden;
}
```

### 添加after伪元素

代表网站： 百度、淘宝网、网易等

``` css
/*声明清除浮动的样式*/
.clearfix:after {
    content: "";
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}

.clearfix {
    *zoom: 1;
    /* ie6 ie7 专门清除浮动的样式 */
}
```

### 添加双伪元素

代表网站： 小米、腾讯等

``` css
/*声明清除浮动的样式*/
.clearfix:before,
.clearfix:after {
    content: "";
    display: table;
}

.clearfix:after {
    clear: both;
}

.clearfix {
    *zoom: 1;
}
```

### 清除浮动总结

| 清除浮动的方式       | 优点               | 缺点                               |
| -------------------- | :----------------- | :--------------------------------- |
| 额外标签法（隔墙法） | 通俗易懂，书写方便 | 添加许多无意义的标签，结构化较差。 |
| 父级overflow:hidden; | 书写简单           | 溢出隐藏                           |
| 父级after伪元素      | 结构语义化正确     | 由于IE6-7不支持:after，兼容性问题  |
| 父级双伪元素         | 结构语义化正确     | 由于IE6-7不支持:after，兼容性问题  |

以上。

