---
title: html+css（八）CSS高级技术
categories: css
tags: html+css
date: 
---



## 字体图标 icomoon

### 下载

-   设计保存为svg格式，上传后生成自己的图标；
-   使用网站上通用的字体图标；
-   网站：
    -   icomoon字库：http://icomoon.io
    -   阿里iconfont字库：http://www.iconfont.cn
-   选中需要的图标，Generate Font 生成、Download 下载图标；（图一）
-   得到 icomoon.zip 压缩包：
    -   将其中的 fonts 文件夹放入到项目目录；
    -   selection.json 更新字体文件时上传使用；
    -   查看 demo.html 中的字体效果，制作下方的样式到工作中即可；（图二）
-   更新：
    -   将下载压缩包中的 selection.json 重新 Impoft Icons 导入网站；（图三）
    -   再增减图标后，生成、下载、替换原有文件；

![图一）](http://mdimg.95408.com/202001031809_213.png?null)

![图二](http://mdimg.95408.com/202001031815_893.png?null)

![图三](http://mdimg.95408.com/202001031820_587.png?null)

### 使用

-   首先把 fonts文件夹放入我们 根目录下 ;
-   html标签内里面添加结构；（这里的符号不能正常显示，复制下载的demo文件）

``` html
<span>  </span>
<div>  </div>
<strong>  </strong>
```

-   在CSS样式里面声明字体： 告诉别人我们自己定义的字体(一定注意字体文件路径的问题)；

``` css
@font-face {
	/* 字体名称 */
    font-family: 'icomoon';
    /* 要注意路径的问题 */
    src:  url('fonts/icomoon.eot?7kkyc2');
    src:  url('fonts/icomoon.eot?7kkyc2#iefix') format('embedded-opentype'),
        url('fonts/icomoon.ttf?7kkyc2') format('truetype'),
        url('fonts/icomoon.woff?7kkyc2') format('woff'),
        url('fonts/icomoon.svg?7kkyc2#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
}
```

-   针对单个例子写样式，使用字体；

``` css
span, div, strong {
    /* 声明前一步定义的字体 */
    font-family: 'icomoon';
    /* 可以改大小颜色等等 */
    font-size: 50px;
    color: red;
}
```





## CSS书写顺序

建议遵循以下顺序：

-   布局定位属性：
    -   display / position / float / clear / visibility / overflow
    -   建议 display 第一个写，毕竟关系到模式
-   自身属性：
    -   width / height / margin / padding / border / background
-   文本属性：
    -   color / font / text-decoration / text-align / vertical-align / white- space / break-word
-   其他属性（CSS3）：
    -   content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …

```css
.bamboo {
    display: block;
    position: relative;
    float: left;
    
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```





## 显示与隐藏

### display 显示

-   display 设置或检索对象是否及如何显示；
    -   `display: none` 隐藏对象；
    -   `display：block` 除了转换为块级元素之外，同时还有显示元素的意思；
-   特点： 隐藏之后，不再保留位置；
-   配合 js 做特效，比如下拉菜单，原先没有，鼠标经过，显示下拉菜单， 应用极为广泛；



### visibility 可见性

-   设置或检索是否显示对象；
    -   `visibility：visible ; `　对象可视
    -   `visibility：hidden; `　  对象隐藏
-   特点： 隐藏之后，继续保留原有位置；

>   左：两个盒子正常流；
>
>   中：pink色盒子隐藏 `display: none` ：不占位置；
>
>   右：pink色盒子隐藏 `visibility：hidden; ` ，占位置；

![](http://mdimg.95408.com/202001022021_130.png?null)

``` css
/* 左图 */
.pink-div {
    width: 200px;
    height: 200px;
    background-color: pink;
}
/* 中图 */
.pink-div {
    /* 这里除了转换为块级元素以外，还可以 显示元素 */
    /* display: block; */
    
    /* 隐藏元素 */
    display: none;
    width: 200px;
    height: 200px;
    background-color: pink;
}
/* 右图 */
.pink-div {
    /* 默认：显示元素 */
    /* visibility: visible; */
    
    /* 隐藏元素 */
    visibility: hidden;    
    width: 200px;
    height: 200px;
    background-color: pink;
}
```





### overflow 溢出

-   检索或设置当对象的内容超过其指定高度及宽度时如何管理内容；
-   实际开发场景：
    -   清除浮动
    -   隐藏超出内容，隐藏掉,  不允许内容超过父盒子。



| 属性值      | 描述                                       |
| ----------- | ------------------------------------------ |
| **visible** | 不剪切内容也不添加滚动条                   |
| **hidden**  | 不显示超过对象尺寸的内容，超出的部分隐藏掉 |
| **scroll**  | 不管超出内容否，总是显示滚动条             |
| **auto**    | 超出自动显示滚动条，不超出不显示滚动条     |



### 总结

| 属性           | 区别                   | 用途                                          |
| -------------- | ---------------------- | --------------------------------------------- |
| **display**    | 隐藏对象，不保留位置   | 配合后面js做特效，比如下拉菜单                |
| **visibility** | 隐藏对象，保留位置     | 使用较少                                      |
| **overflow**   | 只是隐藏超出大小的部分 | 1. 清除浮动 2. 保证盒子里内容不会超出盒子范围 |





## 用户界面样式

界面样式， 就是更改一些用户操作样式，以便提高更好的用户体验；



### 鼠标样式 cursor

设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状。

| 属性值          | 描述       |
| --------------- | ---------- |
| **default**     | 小白  默认 |
| **pointer**     | 小手       |
| **move**        | 移动       |
| **text**        | 文本       |
| **not-allowed** | 禁止       |

```html
<ul>
  <li style="cursor:default">默认的</li>
  <li style="cursor:pointer">小手</li>
  <li style="cursor:move">移动</li>
  <li style="cursor:text">文本</li>
  <li style="cursor:not-allowed">禁止</li>
</ul>
```

![](http://mdimg.95408.com/web_2020010202.gif)



### 轮廓线 outline

绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用；

我们写样式时，一般是去除outline：

```css
input {
    outline: none;    
    /* 或者 */
    outline: 0;
}
```

>   上图：未取消轮廓线，下图：`outline: none;  `：

![](http://mdimg.95408.com/web_2020010203.gif)



### 防止拖拽文本域 resize

-   文件域 `textare` 可以拖拽右下角，放大缩小；
-   实际开发中，我们文本域右下角是不可以拖拽： 

``` css
textarea {
    resize: none;
}
```



### 总结

| 属性         | 用途                 | 用途                                     |
| ------------ | -------------------- | ---------------------------------------- |
| **鼠标样式** | 更改鼠标样式cursor   | 样式很多，重点记住 pointer               |
| **轮廓线**   | 表单默认outline      | outline 轮廓线，我们一般直接去掉         |
| **防止拖拽** | 主要针对文本域resize | 防止用户随意拖拽文本域，造成页面布局混乱 |





## vertical-align 垂直对齐

-   有宽度的块级元素居中对齐，是 `margin: 0 auto;` ；
-   让文字居中对齐，是 `text-align: center;` ；
-   但是我们从来没有讲过有垂直居中的属性；
-   vertical-align 垂直对齐，它只针对于**行内元素**或者**行内块元素**；

``` css
vertical-align : baseline |top |middle |bottom 
```

-   设置或检索对象内容的垂直对其方式；
-   vertical-align 不影响块级元素中的内容对齐，它只针对于**行内元素**或者**行内块元素**；
-   特别是行内块元素， **通常用来控制图片/表单与文字的对齐**；



### 图片、表单和文字对齐

-   可以通过vertical-align 控制图片和文字的垂直关系；
-   默认的图片会和文字基线对齐；

>   图片与文字的对齐方式：默认为基线对齐（上）：

![](http://mdimg.95408.com/202001022046_668.png?null)

``` html
<style>
    .one {
        /* 基线对齐 默认 */
        vertical-align: baseline;
    }
    .two {
        /* 垂直居中*/
        /* 让图片的中线 对齐 文字的中线*/
        vertical-align: middle;
    }
    .three {
        /* 顶部对齐*/
        /*让图片的顶线 对齐 文字的顶线*/
        vertical-align: top;
    }
</style>
<div>
    <img src="images/pic.jpg" class="one"> 你瞅啥 
</div>
<div>
    <img src="images/pic.jpg" class="two"> 你瞅啥 
</div>
<div>
    <img src="images/pic.jpg" class="three"> 你瞅啥 
</div>
```





### 去除图片底侧空白缝隙

-   一个父盒子由图片撑开时，图片下面会多出缝隙；
-   原因：图片或者表单等行内块元素，他的底线会和父级盒子的基线对齐，就是图片底侧会有一个空白缝隙；
-   **解决方法：**  
-   1、给img 添加 `vertical-align:middle | top| bottom` 等等，让图片不要和基线对齐；
    -   163写法：`img{vertical-align:top; border:0;}`；
-   2、给img 添加 `display：block;` 转换为块级元素就不会存在问题了；
    -   sina写法：`img{border:0; display:block}` ；

>   去除图片底侧空白：

![](http://mdimg.95408.com/202001022055_459.png?null)

``` html
<style>
    div {
        border: 1px solid red;
    }
    div img {
        /* 因为默认的是基线对齐，所有底册有空白缝隙 */
        /* vertical-align: baseline; */
        
        /* 只要不是 基线对齐就好了 */        
        /* vertical-align: bottom; */
        /* vertical-align: middle; */
        
        /* 块级元素来说 vertical-align是无效的，就不会有基线对齐的问题了 */
        /* display: block; */
    }
</style>
<div>
    <img src="./img/pic3.jpg" alt="">
</div>
```





## 溢出的文字省略号显示 text-overflow

### white-space 一行显示

white-space设置或检索对象内文本显示方式。通常我们使用于强制一行显示内容 

```
white-space:normal ；默认处理方式
white-space:nowrap ；　强制在同一行内显示所有文本，直到文本结束或者遭遇br标签对象才换行。
```



### text-overflow 文字溢出

设置或检索是否使用一个省略标记（...）标示对象内文本的溢出

```
text-overflow : clip ；不显示省略标记（...），而是简单的裁切 
text-overflow：ellipsis ； 当对象内文本溢出时显示省略标记（...）
```

**注意**：一定要首先强制一行内显示，再次和overflow属性  搭配使用



### 总结三步曲

```css
/* 1. 先强制一行内显示文本 */
white-space: nowrap;
/* 2. 超出的部分隐藏 */
overflow: hidden;
/* 3. 文字用省略号替代超出的部分 */
text-overflow: ellipsis;
```

![](http://mdimg.95408.com/202001022101_63.png?null)

``` html
<style>
    div {
        width: 150px;
        height: 25px;
        border: 1px solid pink;
        /* 当文字显示不开的时候，自动换行 */
        white-space: nowrap;
        /* 溢出隐藏 */
        overflow: hidden;
        /* 文字溢出 用省略号替代  ellipsis 省略号 */
        text-overflow: ellipsis;
    }
</style>
<div>这是一个灰常长灰常常的标题</div>
```





## CSS精灵技术 sprite

-   为了有效地减少服务器接受和发送请求的次数，提高页面的加载速度；
-   出现了CSS精灵技术（也称CSS Sprites、CSS雪碧）；
-   CSS 精灵：
    -   是将网页中的一些背景图像整合到一张大图中（精灵图）；
    -   只需向服务发送一次请求，网页中的背景图像即可全部展示出来；
-   需要使用CSS的：
    -   background-image 设置精灵图；
    -   background-repeat 不重复；
    -   background-position 最关键的：属性精确地定位；
-   CSS精灵技术主要针对于背景图片，放的都是小的装饰性质的背景图片；

>   例：

![](http://mdimg.95408.com/202001022158_564.png?null)

``` html
<style>
    .icon1 {
        width: 20px;
        height: 20px;
        /* 使用相同的图片 最重要的是定位每个小图标的位置 */
        background: url(images/index.png) no-repeat  0 -100px;    }
    .icon2 {
        width: 20px;
        height: 20px;
        background: url(images/index.png) no-repeat -150px -100px;
    }
</style>
<div class="icon1"></div>
---------
<div class="icon2"></div>
```

>   从精灵图中选择出字母：

![](http://mdimg.95408.com/202001022154_321.png?null)

``` html
<style>
    div {
        float: left;
        background: url(images/abcd.jpg) no-repeat;
    }
    .p {
        width: 92px;
        height: 108px;
        background-position: -497px -278px;
    }
    .i {
        width: 62px;
        height: 106px;
        background-position: -326px -142px;
    }
    .n {
        width: 112px;
        height: 113px;
        background-position: -255px -274px;
    }
    .k {
        width: 104px;
        height: 111px;
        background-position: -496px -142px;
    }
</style>
<div class="p"></div>
<div class="i"></div>
<div class="n"></div>
<div class="k"></div>
```



### 滑动门



![](http://mdimg.95408.com/202001022205_242.png?null)

``` html
<style>
    /* a 是设置左侧背景（左门）*/
    a {
        /* 因为我们是滑动门，左右推拉 跟文字内容多少有关系 */
        /* 此时需要用文字撑开盒子， 就要用到行内块 */
        display: inline-block;
        height: 33px;
        background: url(images/to.png) no-repeat;
        margin: 100px;
        padding-left: 15px;
        color: #fff;
    }
    /* span 是设置右侧背景（右门）*/
    a span {
        display: inline-block;
        height: 33px;
        line-height: 33px;
        /* 一定注意 span 需要背景图片 右对齐 */
        background: url(images/to.png) no-repeat right top;
        padding-right: 15px;
    }
    /* 鼠标移动变换样式 */
    /* 注意是鼠标移动到a上，再变换span，a:hover span*/
    a:hover,
    a:hover span {
        background-image: url(images/ao.png);
</style>
<a href="#">
    <span>公司新闻</span>
</a>
```





## margin 负值使用

**负边距+定位：水平垂直居中**

咱们前面讲过， 一个绝对定位的盒子， 利用  父级盒子的 50%，  然后 往左(上) 走 自己宽度的一半 ，可以实现盒子水平垂直居中。

![](http://mdimg.95408.com/202001021403_744.png?null)

``` css
div {  
    position: absolute;
    /* left 50% 走父亲宽度的一半 */    
    left: 50%;
    /* margin-left 左走自己宽度的一半  一定注意是 负值 */
    margin-left: -100px;
    width: 200px;
    height: 200px;
    background-color: pink;    
}
```



![](http://mdimg.95408.com/202001022145_306.png?null)

``` html
<style>
    .father {
        /* 相对定位 */
        position: relative;            
        width: 400px;
        height: 400px;
        margin: 20px auto;
        border: 1px solid red;
    }
    .son {
        /* 绝对定位 */
        position: absolute;
        /* 向下移动50% */
        top: 50%;
        /* 向下移动50%是以son盒子顶边为准 */
        /* 需还往回走son盒子的一半50px */
        margin-top: -50px;
        width: 100px;
        height: 100px;
        background-color: pink;
    }
</style>
<div class="father">
    <div class="son"></div>
</div>
```





**压住盒子相邻边框** 

>   左图：两个盒子的边框贴一起，成了4px
>
>   右图：后一个盒子往左走2px，盖住了前一个盒子的2px右边框；下一排盒子往上走2px，盖住了上一排盒子的2px底边框；

![](http://mdimg.95408.com/202001022119_992.png?null)

``` html
<style>
    div {
        /* 浮动的盒子是紧贴在一起的 */
        float: left;
        width: 200px;
        height: 300px;
        border: 1px solid #ccc;
        /* 左图：没有加下面两句，两个盒子的边框贴一起，成了4px */
        /* 右图：加上下面两句，后一个盒子往左走2px，盖住了前一个盒子的2px */
        margin-left: -2px;
        margin-top: -2px;
    }
</style>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

>   上一例，这时如果加hover，前一个边框变色会被后一个盖住：

![](http://mdimg.95408.com/202001022129_748.png?null)

``` css
div:hover {
    border: 2px solid blue;
}
```

>   改进：

![](http://mdimg.95408.com/202001022133_286.png?null)

``` css
/* 方案一 */
div:hover {
    border: 1px solid #f40;
    /* 我要让当前鼠标经过的这个div 升到最高处来就好了 */
    /* 定位的盒子是最高层的 */
    /* 我们只要保证当前的这个盒子 是定位 就会压住 标准流和浮动盒子 */
    /* 我们只能用相对定位 它是占位置的 */
    position: relative;
}

/* 方案二 */
div {
    position: relative;
}
div:hover {
    border: 1px solid #f40;
    /* 都是定位的盒子，我们通过z-index 来实现层级关系 */
    z-index: 1;
}
```





## border 写三角形

用 css 边框可以模拟三角效果：

-   宽度高度为 0 ；
-   我们4个边框都要写， 只保留需要的边框颜色，其余的不能省略，都改为 transparent 透明就好；
-   为了照顾兼容性 低版本的浏览器，加上 `font-size: 0;  line-height: 0;` ；

![](http://mdimg.95408.com/202001022107_171.png?null)

``` css
<style>
div {
    /* 用css边框可以模拟三角效果 */
    width: 0;
    height: 0;
    border-top: 10px solid red;
    border-right: 10px solid green;
    border-bottom: 10px solid blue;
    border-left: 10px solid pink;
    font-size: 0;
    line-height: 0;
}
p {
    /* 模拟向右三角效果 */
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px;
    border-color:  transparent transparent transparent red;
    font-size: 0;
    line-height: 0;
}
</style>
<div></div>
<p></p>
```



![](http://mdimg.95408.com/202001022113_890.png?null)

``` html
<style>
    div {
        position: relative;
        width: 200px;
        height: 100px;
        background-color: pink;
        margin: 100px auto;
    }
    p {
        position: absolute;
        top: -40px;
        left: 50%;
        margin-left: -20px;
        /* 三角效果 */
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 20px;
        border-color: transparent transparent pink transparent;
        font-size: 0;
        line-height: 0;
    }
</style>
<div>
    <p></p>
</div>
```



以上。

































