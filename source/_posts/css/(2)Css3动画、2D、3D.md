---
title: (2)Css3动画、2D、3D
categories: css
tags: [Css3, HTML5]
date: 
---



## 2D转换 transform

2D 转换是改变标签在二维平面上的位置和形状

-   移动： `translate`
-   旋转： `rotate`
-   缩放： `scale`

### translate 移动



-   `translate` 最大的优点就是不影响其他元素的位置
-   `translate` 中的100%单位，是相对于本身的宽度和高度来进行计算的

```css
transform: translate(x, y)
transform: translateX(n)
transfrom: translateY(n)
```

-   行内标签没有效果

``` css
div {
  background-color: lightseagreen;
  width: 200px;
  height: 100px;
  /* 水平垂直移动 100px */
  /* transform: translate(100px, 100px); */

  /* 水平移动 100px */
  /* transform: translate(100px, 0) */

  /* 垂直移动 100px */
  /* transform: translate(0, 100px) */

  /* 水平移动 100px */
  /* transform: translateX(100px); */

  /* 垂直移动 100px */
  transform: translateY(100px)
}
```



### 例：让盒子水平垂直居中



``` html
<div>
    <p></p>
</div>

<style>
    div {
        position: relative;
        width: 500px;
        height: 500px;
        background-color: red;
    }
    p {
        position: absolute;
        top: 50%;
        left: 50%;
        /* 原来的办法：计算返回原元素的一半 */
        /* margin-top: -100px; */
        /* margin-left: -100px; */
        
        /* translate(-50%, -50%)  盒子往上走自己高度的一半 */
        transform: translate(-50%, -50%);
        
        width: 200px;
        height: 200px;
        background-color: burlywood;
    }
</style>
```



### rotate 旋转



``` css
/* 单位是：deg */
transform: rotate(度数如180deg) 
```



-   `rotate` 里面跟度数，单位是 `deg`
-   角度为正时，顺时针，角度为负时，逆时针
-   默认旋转的中心点是元素的中心点



``` html
<style>
    div {
        width: 200px;
        height: 100px;
        background-color: red;
    }
    div:hover {
        transform: rotate(90deg);
        /* 鼠标移动时顺时针转90度 */
    }
</style>

<body>
    <div></div>
    <p></p>
</body>
```



### 例：图标360度旋转



![图标360度旋转](http://mdimg.95408.com/web_2019121903.gif)



``` html
<style>
    img {
        width: 200px;
        height: 200px;
        background-color: pink;
        border: pink solid 1px;
        border-radius: 50%;
        transition: all 0.3s;
    }
    img:hover {
        transform: rotate(180deg);
    }
</style>

<body>
    <img src="media/pic.jpg" alt="">
</body>
```



### 例：制作上下  > 符号

![上下  > 符号](http://mdimg.95408.com/web_2019121902.gif)



``` html
<style>
    div {
        position: relative;
        width: 249px;
        height: 35px;
        border: 1px solid #333;
    }
    div::after {
        content: "";
        position: absolute;
        top: 10px;
        right: 10px;
        /* 创建一个只有两边边框的方形 */
        width: 10px;
        height: 10px;
        border-right: 1px solid #333;
        border-bottom: 1px solid #333;
        /* 将方形旋转45度 */
        transform: rotate(45deg);
        transition: all .2s;
    }
    /* 是鼠标经过div时，::after变动效果 */
    div:hover::after {
        transform: rotate(225deg);
        top: 15px;
    }
</style>

<body>
    <div></div>
</body>
```





### 旋转中心点 transform-origin



```css
transform-origin: x y;

div {
    width: 200px;
    height: 200px;
    background-color: pink;
    margin: 100px auto;
    transition: all 1s;
    /* 1.可以跟方位名词 */
    /* transform-origin: left bottom; */
    /* 2. 默认的是 50%  50%  等价于 center  center */
    /* 3. 可以是px 像素 */
    transform-origin: 50px 50px;
}
```



-   注意后面的参数 x 和 y 用空格隔开
-   x y 默认旋转的中心点是元素的中心 (50% 50%)，等价于 `center`  `center`
-   还可以给 x y 设置像素或者方位名词(`top`、`bottom`、`left`、`right`、`center`)



### 例：图片从左下角旋转上升



![](http://mdimg.95408.com/2019121901.gif)



``` html
<style>
    div {
        /* 隐藏div外的after中的内容 */
        overflow: hidden;
        position: relative;
        width: 300px;
        height: 200px;
        border: 1px solid #333;
        margin: 10px;
        float: left;
    }
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 300px;
        height: 200px;
        /* 以左 下 角为基点，旋转180度，看不看的状态 */
        transform: rotate(100deg);
        transform-origin: left bottom;
        transition: all .2s;
    }
    div:hover img {
        /* 鼠标移动，图片旋转到div内 */
        transform: rotate(0deg);
    }
</style>

<body>
    <div><img src="./media/dog.jpg" alt=""></div>
    <div><img src="./media/dog.jpg" alt=""></div>
    <div><img src="./media/dog.jpg" alt=""></div>
</body>
```





### scale 缩放



``` css
transform: scale(x, y)

div:hover {
    /* 注意，数字是倍数的含义，所以不需要加单位 */
    /* transform: scale(2, 2) */

    /* 实现等比缩放，同时修改宽与高 */
    /* transform: scale(2) */

    /* 小于 1 就等于缩放*/
    transform: scale(0.5, 0.5)
}
```



-   x 与 y 之间使用逗号进行分隔
-   `transform: scale(1, 1)`: 宽高都放大一倍，相当于没有放大
-   `transform: scale(2, 2)`: 宽和高都放大了二倍
-   `transform: scale(2)`: 如果只写了一个参数，第二个参数就和第一个参数一致
-   `transform:scale(0.5, 0.5)`: 缩小
-   优势：可以设置转换中心点缩放，默认以中心点缩放，而且**不影响其他盒子**



### 例：图片放大

![图片放大](http://mdimg.95408.com/web_2019121905.gif)







### 例：分类按钮放大

![分类按钮放大](http://mdimg.95408.com/web_2019121906.gif)







### 2D 转换综合写法 及 顺序

-   顺序会影响到转换的效果；
-   同时有位置或者其他属性的时候，要将**位移放到最前面** ；

``` css
div:hover {
  transform: translate(200px, 0) rotate(360deg) scale(1.2)
}
```









