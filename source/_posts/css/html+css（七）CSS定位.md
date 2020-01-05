---
title: html+css（七）CSS定位
categories: css
tags: html+css
date: 
---





## 定位



-   将盒子**定**在某一个**位**置  自由的漂浮在其他盒子的上面；
-   定位也是用来布局的；
-   两部分组成：`定位 = 定位模式 + 边偏移`



### 边偏移

-   定位的盒子，是通过边偏移来移动位置的；
-   通过 `top`、`bottom`、`left` 和 `right` 属性定义元素的**边偏移**；
-   定位的盒子有了边偏移才有价值，凡是有定位地方必定有边偏移；



| 边偏移属性 | 示例           | 描述                                                     |
| ---------- | :------------- | -------------------------------------------------------- |
| `top`      | `top: 80px`    | **顶端**偏移量，定义元素相对于其父元素**上边线的距离**。 |
| `bottom`   | `bottom: 80px` | **底部**偏移量，定义元素相对于其父元素**下边线的距离**。 |
| `left`     | `left: 80px`   | **左侧**偏移量，定义元素相对于其父元素**左边线的距离**。 |
| `right`    | `right: 80px`  | **右侧**偏移量，定义元素相对于其父元素**右边线的距离**   |



### 定位模式

```css
选择器 { position: 属性值static/relative/absolute/fixed; }
```



| 值         |     语义     |
| ---------- | :----------: |
| `static`   | **静态**定位 |
| `relative` | **相对**定位 |
| `absolute` | **绝对**定位 |
| `fixed`    | **固定**定位 |

 

## 定位模式 position



### 静态定位 static

-   默认定位方式，无定位的意思；
-   按照标准流特性摆放位置，它没有边偏移；
-   一般不用；



### 相对定位 relative

-   元素**相对**于它原来在标准流中的位置；
-   相对于自己原来在标准流中位置来移动的；
-   原来**在标准流的区域继续占有**，后面的盒子仍然以标准流的方式对待它；

**示例：**

>   div 盒子1、2、3按标准流显示；当 div2 盒子相对定位 `position: relative;`并向上、左偏移20px `top: 20px; left: 20px;` 时：
>
>   1、div2 原本在标准流中的位置仍然占有，div3 没有上来；
>
>   2、div2 的偏移，是以自己原本的位置来偏移的；

![](http://mdimg.95408.com/202001021257_318.png?null)

``` html
<style>
    div {
        width: 200px;
        height: 100px;
        background-color: pink;
    }
    .two {
        background-color: yellow;
        position: relative;
        top: 20px;
        left: 20px;
    }
</style>
<div>1</div>
<div class="two">2</div>
<div>3</div>
```





### 绝对定位 absolute

-   **绝对定位**是元素以带有定位的**父级**元素来移动位置；
-   **完全脱标** —— 完全不占位置；  
-   **父元素没有定位**，则以**浏览器**为准定位（Document 文档）。

>   如果父级有定位，绝对定位子盒子以父级为准移动位置：

![](http://mdimg.95408.com/202001021345_353.png?null)

```html
<style>
    .father {
        margin: 0 auto;
        width: 400px;
        height: 400px;
        background-color: pink;
        /* 如果父级有定位，绝对定位子盒子以父级为准移动位置 */
        position: relative;
    }
    .son {
        width: 200px;
        height: 200px;
        background-color: purple;
        /* 子盒子绝对定位 */
        position: absolute;
        top: 100px;
        left: 100px;
    }
</style>
<div class="father">father
    <div class="son">son</div>
</div>
```

>   如果父级没有定位 绝对定位子盒子以浏览器为准移动位置：

![](http://mdimg.95408.com/202001021345_988.png?null)

``` css
.father {
    margin: 0 auto;
    width: 400px;
    height: 400px;
    background-color: pink;
    /* 如果父级没有定位 绝对定位子盒子以浏览器为准移动位置 */
    /* 父盒子取消相对定位 */
    /* position: relative; */
}
```



>   son1 紫色盒子绝对定位后：不占据文件流，son2 蓝色盒子上移；

![](http://mdimg.95408.com/202001021355_845.png?null)



### 口诀：子绝父相

-   **子级**是**绝对**定位，**父级**要用**相对**定位；
-   常常用子绝父相来布局：
-   外层的父盒子：相对定位：
    -   相对定位，占据原有位置，按标准流显示，让后面的盒子布局正常显示；
-   内层的子盒子：绝对定位：
    -   绝对定位，不占据位置，脱离标准流，不影响其他子盒子的位置；
    -   给定偏移量，方便移动到想要的位置；



### 固定定位 fixed

-   是**绝对定位**的一种特殊形式；
-   **完全脱标** —— 完全不占位置；
-   只以唯一的：**浏览器可视窗口**来偏移位置；
-   不会随浏览器向下滚动；

>   将猴子固定到浏览器的右下角示例：

![](http://mdimg.95408.com/web_2020010201.gif)

``` html
<style>
    body {
        height: 1500px;
    }
    img {
        position: fixed;
        right: 0;
        bottom: 0;
    }
</style>
<img src="images/houzi.jpg" alt="" width="150">
```





## 定位扩展



### 让定位后的盒子居中

-   **绝对定位/固定定位的盒子**不能通过设置 `margin: auto` 设置**水平居中**；
-   实现居中的办法（假设盒子宽度200px）：
    -   `left: 50%;`：让**盒子的左侧**移动到**父级元素的水平中心位置**；
    -   `margin-left: -100px;`：让盒子**向左**移动**自身宽度的一半**；
-   `left:50%`水平居中；`top:50%`垂直居中；

>   绝对定位的盒子水平居中示例：

![](http://mdimg.95408.com/202001021403_744.png?null)

``` css
div {
    /* 绝对定位 margin 左右auto 不能让盒子水平居中 */
    /* margin: auto; */
    
    /* 解决办法 */
    /* 0.定位position: absolute; */	
    position: absolute;
    /* 1.left 50% 走父亲宽度的一半 */	
    left: 50%;
    /* 2.margin-left 左走自己宽度的一半  一定注意是 负值 */
    margin-left: -100px;
    width: 200px;
    height: 200px;
    background-color: pink;    
}
```





### 堆叠顺序 z-index

-   使用**定位**布局，可能会**出现盒子重叠的情况**；
-   默认**后来居上**， 后面的盒子会压住前面的盒子；
-   应用 `z-index` 层叠等级属性可以**调整盒子的堆叠顺序**；
    -   默认值是 0，数值越大，盒子越靠上；
    -   可以是正整数、负整数；
    -   如果**属性值相同**，按默认顺序：**后来居上**；
    -   **数字后不加单位**；
-   只能用于**相对定位**、**绝对定位**和**固定定位**的元素，其他**标准流**、**浮动**和**静态定位**无效；

![](http://mdimg.95408.com/202001021230_452.png?null)

>   应用 z-index 层叠等级属性示例：

![](http://mdimg.95408.com/202001021408_891.png?null)

``` html
<style>
    .son1 {
        position: absolute;
        width: 200px;
        height: 200px;
        background-color: red;
    }
    .son2 {
        position: absolute;
        /* son2向右下角偏移50px */
        top: 50px;
        left: 50px;
        /* 左图：没加上z-index: 2; */
        /* 右图：加上了z-index: 2; */
        /* z-index: 2; */
        width: 200px;
        height: 200px;
        background-color: green;
    }
    .son3 {
        position: absolute;
        /* son2向右下角偏移100px */
        top: 100px;
        left: 100px;
        width: 200px;
        height: 200px;
        background-color: blue;
    }
</style>
<div class="son1">son1</div>
<div class="son2">son2</div>
<div class="son3">son3</div>
```





### 定位 变 行内块

一个元素，如果加了**浮动**、**固定定位**和**绝对定位**，自动变**行内块**。

-   `display：inline-bolck;` display 显示模式：
    -   转行内块；
-   `float: left/right;` 浮动：
    -   默认转（类似）行内块；
-   `position: absolute/fixed;`绝对定位、固定定位：
    -   默认转行内块；
-   块级元素：
    -   如果加了**浮动**、**固定定位**和**绝对定位**，自动变**行内块**；
    -   原本不给width，默认通栏；
    -   变成行内块后，默认宽度为内容的宽度；
-   行内元素：
    -   如果加了**浮动**、**固定定位**和**绝对定位**，自动变**行内块**；
    -   原本不能设置width、height，默认宽高以内容为准；
    -   变成行内块后，可以直接设置宽、高等等；
-   浮动、绝对定位（固定定位）转行内块，不会触发外边距合并（塌陷）的问题；

>   不会触发外边距塌陷示例：

![](http://mdimg.95408.com/202001021420_4.png?null)

``` html
<style>
    .father {
        /* 使用浮动，可以解决外边距塌陷的问题 */
        /* float: left; */
        /* 使用绝对定位/固定定位，也可以解决 */
        position: absolute;
        width: 400px;
        height: 400px;
        background-color: pink;
    }
    .son {
        width: 200px;
        height: 200px;
        background-color: purple;
        /*外边距合并*/
        margin-top: 100px;
    }
</style>
<div class="father">
    <div class="son"></div>
</div>
```





## 定位小结

关于**边偏移**：要和**定位**联合使用，**单独使用无效**；

-   `top` 和 `bottom` 不要同时使用；
-   `left` 和 `right` 不要同时使用；



| 定位模式         | 是否脱标占有位置     | 移动位置基准           | 转行内块 | 使用情况                 |
| ---------------- | -------------------- | :--------------------- | -------- | ------------------------ |
| 静态static       | 不脱标，正常模式     | 正常模式               | /        | 几乎不用                 |
| 相对定位relative | 不脱标，占有位置     | 相对自身位置移动       | /        | 基本单独使用             |
| 绝对定位absolute | 完全脱标，不占有位置 | 相对于定位父级移动位置 | 能       | 要和定位父级元素搭配使用 |
| 固定定位fixed    | 完全脱标，不占有位置 | 相对于浏览器移动位置   | 能       | 单独使用，不需要父级     |



## 网页布局总结

一个完整的网页，有标准流 、 浮动 、 定位 一起完成布局的；

**标准流** 

可以让盒子上下排列 或者 左右排列；

**浮动**

可以让多个块级元素一行显示，或者左右对齐盒子，浮动的盒子就是按照顺序左右排列；

**定位**

定位最大的特点是有层叠的概念，就是可以让多个盒子 前后 叠压来显示；



以上。

















































