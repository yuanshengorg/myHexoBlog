---
title: CSS移动布局（二）flex布局（图示）
categories: css3
tags: Css3
date: 
---

## flex布局

### 速查

**父项常见属性**

*   flex-direction：设置主轴的方向   
    -   row； row-reverse； column； column-reverse； 
*   justify-content：设置主轴上的子元素排列方式   
    -   fles-start； flex-end； center； space-around； space-between； 
*   flex-wrap：设置子元素是否换行  
    -   nowrap； wrap； 
*   align-items：设置侧轴上的子元素排列方式（单行）
    -   flex-start； flex-end； center； stretch； 
*   align-content：设置侧轴上的子元素的排列方式（多行）
    -   flex-start； flex-end； center； space-around； space-between； stretch； 
*   flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap

**子项常见属性**

*   flex子项目占的份数
*   align-self控制子项自己在侧轴的排列方式
*   order属性定义子项的排列顺序（前后顺序）

### flex 弹性布局

*   flex 是 flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为 flex 布局；
*   又叫伸缩布局 、弹性布局 、伸缩盒布局 、弹性盒布局；
*   通过给父盒子添加 `flex` 属性，来控制子盒子的位置和排列方式；

> 小试牛刀：

![](http://mdimg.95408.com/web_2019122602.gif)

``` html
<style>
    div {
        /* flex布局 */
        display: flex;
        /* 平分剩余空间 */
        justify-content: space-around;
        width: 80%;
        height: 400px;
        border: 2px solid red;
        margin: 0 auto;
    }

    div span {
        width: 200px;
        height: 200px;
        border: 1px solid blue;
    }
</style>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
```

## 父项常见属性

*   flex-direction：设置主轴的方向
*   justify-content：设置主轴上的子元素排列方式
*   flex-wrap：设置子元素是否换行  
*   align-content：设置侧轴上的子元素的排列方式（多行）
*   align-items：设置侧轴上的子元素排列方式（单行）
*   flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap

### flex-direction主轴方向

*   row   默认值，从左到右
*   row-reverse   从右到左
*   column   从上到下
*   column-reverse   从下到上

> 以 X 轴为主轴（左）及以 Y 轴为主轴（右）：

![](http://mdimg.95408.com/201912262137_368.png?null)

``` css
div {
    display: flex;

    /* 左图：以x轴为主轴： */
    /* 为默认值，可以不写 */
    flex-direction: row;

    /* 右图：以Y轴为主轴： */
    flex-direction: column;

    width: 400px;
    height: 400px;
    border: 2px solid red;
    margin: 0 auto;
}
```

### justify-content 主轴子元素排列

*   fles-start   默认值，从头部开始；如果x轴是主轴则从左到右
*   flex-end   从尾部开始
*   center   在**主轴居中对齐**；如果x轴是主轴则水平居中
*   space-around   平分剩余空间
*   space-between   **先两边靠边，再平分剩余空间**

> 当主轴为 X 轴（默认）时，主轴上 子元素 的排列方式：

![](http://mdimg.95408.com/201912262150_216.png?null)

``` css
div {
    display: flex;

    /* 从左往右排列 */
    justify-content: flex-start;
    /* 从右往左排列 左上图 */
    justify-content: flex-end;
    /* 居中排列 右上图 */
    justify-content: center;
    /* 平分剩余空间 左下图 */
    justify-content: space-around;
    /* 先两边靠齐，再平分剩余空间 右下图 */
    justify-content: space-between;

    width: 400px;
    height: 400px;
    border: 2px solid red;
    margin: 0 auto;
}
```

> X 轴为主轴时（左）和 Y 轴为主轴时 `flex-direction: column;` 对比（其他排序方式类似）:

![](http://mdimg.95408.com/201912262202_745.png?null)

### flex-wrap 是否换行

*   nowrap   默认值，不换行
*   wrap   换行

> 当主轴为 X 轴（默认）时，子元素 压缩不换行（左）及换行（右）：

![](http://mdimg.95408.com/201912262155_924.png?null)

``` css
div {
    display: flex;

    /* 不换行 默认值 可不写  左图 */
    flex-wrap: nowrap;
    /* 换行  右图 */
    flex-wrap: wrap;

    width: 400px;
    height: 400px;
    border: 2px solid red;
    margin: 0 auto;
}
```

> 当设置 Y 轴为主轴时 `flex-direction: column;` :

![](http://mdimg.95408.com/201912262159_917.png?null)

### align-items 侧轴子元素排列（单行 ）

*   flex-start   默认值，从头部开始
*   flex-end   从尾部开始
*   center   居中显示
*   stretch   拉伸

> 当主轴为 X 轴（默认）时，子元素 在侧轴上 的排列方式（单行 ）：

![](http://mdimg.95408.com/201912262210_634.png?null)

![](http://mdimg.95408.com/201912262211_79.png?null)

``` css
div {
    display: flex;

    /* 从头部开始 上右图*/
    align-items: flex-start;
    /* 从尾部开始 上右图*/
    align-items: flex-end;
    /* 居中 下左图*/
    align-items: center;
    /* 拉伸 下右图*/
    align-items: stretch;

    width: 400px;
    height: 400px;
    border: 2px solid red;
    margin: 0 auto;
}

div span {
    width: 100px;
    /* 拉伸stretch时，高度不要写 */
    height: 100px;
    border: 1px solid blue;
}
```

### align-content  侧轴子元素排列（多行）

*   flex-start   默认值，在侧轴的头部开始排列
*   flex-end   尾部开始
*   center   在侧轴中间显示
*   space-around   在侧轴平分剩余空间
*   space-between   在侧轴先靠两边，再平分剩余空间
*   stretch   高度平分父元素高度

> 当主轴为 X 轴（默认）时，子元素 在侧轴上 的排列方式（多行 ）：

![](http://mdimg.95408.com/201912262216_131.png?null)

![](http://mdimg.95408.com/201912262218_39.png?null)

![](http://mdimg.95408.com/201912262219_508.png?null)

``` css
div {
    display: flex;
    flex-wrap: wrap;

    /* 从头开始 */
    align-content: flex-start;
    /* 从尾开始 */
    align-content: flex-end;
    /* 居中 */
    align-content: center;
    /* 平分剩余空间 */
    align-content: space-around;
    /* 两侧靠边，再平分剩余空间 */
    align-content: space-between;
    /* 平分父元素高度 */
    align-content: stretch;

    width: 400px;
    height: 400px;
    border: 2px solid red;
    margin: 0 auto;
}

div span {
    width: 100px;
    /* 拉伸stretch时，高度不要写 */
    height: 100px;
    border: 1px solid blue;
}
```

### align-content 和 align-items 区别

*   align-items  适用于单行， 只有上对齐、下对齐、居中和 拉伸
*   align-content 适应于换行（多行）（单行情况下无效）， 可以设置 上对齐、下对齐、居中、拉伸以及平均分配剩余空间等属性值。 

### flex-flow

*   是 flex-direction 和 flex-wrap 属性的复合属性
*   如：同时设置为 X 轴为主轴 + 换行：

``` css
flex-flow:row wrap;
```

## 子项常见属性

*   flex子项目占的份数
*   align-self控制子项自己在侧轴的排列方式
*   order属性定义子项的排列顺序（前后顺序）

### flex 属性

flex 属性定义子项目分配剩余空间，用flex来表示占多少份数。

> 父盒子800px，span1和span3各固定100px，span2分配剩余的空间：

![](http://mdimg.95408.com/201912262231_433.png?null)

``` html
<style>
    div {
        display: flex;
        width: 800px;
        height: 100px;
        border: 2px solid red;
        margin: 0 auto;
    }

    /* span1固定宽度 */
    div span:nth-child(1) {
        width: 100px;
        height: 100px;
        background-color: aquamarine;
    }

    /* span2分配除了span1和span3之外的所有空间 */
    div span:nth-child(2) {
        flex: 1;
        background-color: #ccc;
    }

    /* span3固定宽度 */
    div span:nth-child(3) {
        width: 100px;
        height: 100px;
        background-color: aquamarine;
    }
</style>

<div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
</div>
```

> span1、span2 和 span3 平均分配父盒子所有剩余空间（各占1份）：

![](http://mdimg.95408.com/201912262236_351.png?null)

``` css
div {
    display: flex;
    width: 800px;
    height: 100px;
    border: 2px solid red;
    margin: 0 auto;
}

div span {
    flex: 1;
    border: 1px solid blue;
}
```

> span1、span2 各分配1份，span3 分配 2 份：

![](http://mdimg.95408.com/201912262239_353.png?null)

``` css
div {
    display: flex;
    width: 800px;
    height: 100px;
    border: 2px solid red;
    margin: 0 auto;
}

div span {
    flex: 1;
    border: 1px solid blue;
}
div span:nth-child(3) {
    flex: 2;
    border: 1px solid blue;
}
```

### align-self 子项自己在侧轴排列

align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。

> 将 span2 与总体相异：独自底对齐（其他默认对齐方式）；

![](http://mdimg.95408.com/201912262245_389.png?null)

``` css
div {
    display: flex;
    width: 400px;
    height: 300px;
    border: 2px solid red;
    margin: 0 auto;
}

div span {
    width: 100px;
    height: 100px;
    border: 1px solid blue;
}

div span:nth-child(2) {
    align-self: flex-end;
}
```

### order 定义项目排序

数值越小，排列越靠前，默认为0。

> 所有 span 默认都是 0 ，将 span3 改成 -1，就排到第一了：

![](http://mdimg.95408.com/201912262248_317.png?null)

``` css
div {
    display: flex;
    width: 400px;
    height: 300px;
    border: 2px solid red;
    margin: 0 auto;
}

div span {
    width: 100px;
    height: 100px;
    border: 1px solid blue;
}

div span:nth-child(3) {
    order: -1;
}
```

以上。

