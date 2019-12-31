---
title: CSS移动布局（一）基础、流式布局
categories: css3
tags: Css3
date: 
---

## 视口 viewport

### 理想视口 ideal viewport

视口（viewport）就是浏览器显示页面内容的屏幕区域。 视口可以分为布局视口、视觉视口和理想视口。

*   布局视口 layout viewport
*   视觉视口 visual viewport
*   理想视口 ideal viewport
    -   meta视口标签的主要目的：布局视口的宽度应该与理想视口的宽度一致，简单理解就是设备有多宽，我们布局的视口就多宽；
    -   我们开发最终会用理想视口，而理想视口就是将布局视口的宽度修改为视觉视口；

### meta标签

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
```

![](http://mdimg.95408.com/201912261921_804.png?null)

## 二倍图

### 物理像素&物理像素比

1、iphone 6/7/8 的物理像素宽度：750px，但我们制作一个375px宽度的盒子，就填充满了；

2、那是因为iphone的**物理像素比**为2，即1px能显示2个物理像素；

![](http://mdimg.95408.com/201912261940_282.png?null)

``` html
<style>

    - {

        margin: 0;
        padding: 0;
    }

    div {
        width: 375px;
        height: 375px;
        background-color: pink;
    }
</style>

<div>div</div>
```

### 二倍图 图片

1、我们制作一个50px的图标，因为手机的常用物理像素比为 2，那么在iphone上就会放大变成100px，图片会变模糊；

2、那我们直接使用一张100px的图片，缩小至50px；

3、当在移动端放大2倍时，还是正常清晰度；

![](http://mdimg.95408.com/201912261953_668.png?null)

``` html
<style>
    img:nth-child(2) {
        width: 50px;
        height: 50px;
    }
</style>

<!-- 模糊的 -->
<img src="images/apple50.jpg" alt="">
<!-- 采取2倍图 -->
<img src="images/apple100.jpg" alt="">
```

### 二倍图 背景 background-size

``` css
background-size: 背景图片宽度 背景图片高度;

* 单位： 长度|百分比|cover|contain； - cover把背景图像扩展至足够大，以使背景图像完全覆盖背景区域； - contain把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域；

```

同上例，图片能用二倍图，CSS3 中我们也可以使用 `background-size` 缩放背景图：

![](http://mdimg.95408.com/201912262038_528.png?null)

``` html
<style>
    .px50 {
        width: 50px;
        height: 50px;
        background: url(images/apple50.jpg) no-repeat;
    }

    .px100 {
        width: 50px;
        height: 50px;
        background: url(images/apple100.jpg) no-repeat;
        background-size: 50px 50px;
    }
</style>

<div class="px50"></div>
<div class="px100"></div>
```

## 移动端开发选择

### 移动端+PC端

PC端和移动端为两套网站，pc端是pc端的样式，移动端在写一套，专门针对移动端适配的一套网站；

### 响应式

响应式网站：即pc和移动端共用一套网站，只不过在不同屏幕下，样式会自动适配；

## 移动端技术

### 移动端公共样式

移动端 CSS 初始化推荐使用 `normalize.css` 

``` html
官网地址： http://necolas.github.io/normalize.css/
```

[本地备份](http://mdimg.95408.com/web_normalize.css)

### CSS3盒子模型box-sizing

CSS3盒子模型， padding 和 border 不会撑大盒子；

``` css
box-sizing: border-box;
```

![](http://mdimg.95408.com/201912262045_716.png?null)

``` html
<style>
    div:nth-child(1) {
        /* 传统盒子模型 = width + border + padding */
        width: 200px;
        height: 200px;
        background-color: pink;
        padding: 10px;
        border: 10px solid red;
    }

    div:nth-child(2) {
        /* box-sizing: border-box; 有了这句话就让盒子变成CSS3盒子模型 */
        /* padding 和 border 不会再撑大盒子了 */
        box-sizing: border-box;
        width: 200px;
        height: 200px;
        padding: 10px;
        border: 10px solid blue;
    }
</style>
```

### 移动端特殊样式

``` css
/*CSS3盒子模型*/
box-sizing: border-box;
-webkit-box-sizing: border-box;

/*点击高亮我们需要清除清除  设置为transparent 完成透明*/
-webkit-tap-highlight-color: transparent;

/*在移动端浏览器默认的外观在iOS上加上这个属性才能给按钮和输入框自定义样式*/
-webkit-appearance: none;

/*禁用长按页面时的弹出菜单*/
img,
a {
    -webkit-touch-callout: none;
}
```

## 移动端布局

### 移动端单独制作

*   流式布局（百分比布局）
*   flex 弹性布局（强烈推荐）
*   less+rem+媒体查询布局
*   混合布局

### 响应式

*   媒体查询
*   bootstarp

以上。

