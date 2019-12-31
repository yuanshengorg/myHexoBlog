---
title: Bootstrap(二)轮播图carousel
categories: bootstrap
tags: [Css, bootstrap]
date: 
---



### Carousel 轮播图

[carousel文档](http://bootstrap.html.cn/javascript/#carousel)

-   必须初始化激活元素：`.active`类需要被添加，否则轮播图将不可见；
-   要对最外层的容器（`.carousel`）使用一个`id`，控制 carousel（旋转木马）正常工作；



``` html
<!-- id="huandengpian" 后面的应该一一对应 才能调用js -->
<div id="huandengpian" class="carousel slide" data-ride="carousel">
    <!-- 小点点指示器 -->
    <ol class="carousel-indicators">
        <li data-target="#huandengpian" data-slide-to="0" class="active"></li>
        <li data-target="#huandengpian" data-slide-to="1"></li>
        <li data-target="#huandengpian" data-slide-to="2"></li>
    </ol>
    <!-- 包裹所有幻灯片内容 -->
    <div class="carousel-inner" role="listbox">
        <!-- 单个图片 必须有一个 active -->
        <div class="item active">
            <img src="img/tb01.jpg" alt="...">
            <!-- 幻灯片添加说明文字 可以包括html格式 -->
            <div class="carousel-caption">
                <h3>caption标题</h3>
                <p>图片 520*280 px</p>
            </div>
        </div>
        <div class="item">
            <img src="img/tb02.jpg" alt="...">
        </div>
        <div class="item">
            <img src="img/tb03.jpg" alt="...">
        </div>
    </div>
    <!-- 左右控制器 -->
    <a class="left carousel-control" href="#huandengpian" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">左箭头说明文字</span>
    </a>
    <a class="right carousel-control" href="#huandengpian" role="button" data-slide="next">
        <span class="glyphicon glyphicon-forward" aria-hidden="true"></span>
        <span class="sr-only">右箭头说明文字</span>
    </a>
    <!-- 幻灯片结束 -->
</div>
```

-   非全宽的幻灯片，可以包含在`container`容器中或者修改长宽；
-   ` item ` 修改图片大小；

-   使用`row`可去除左右各15px的padding；

``` html
<div class="container container-carousel">
    <div class="row">
        ……
    </div>    
</div>


<style>
    .container-carousel {
        width: 480px;
    }
    #huandengpian .item {
        width: 480px;
        height: 260px;
    }
    .glyphicon {
        top: 50%;
    }
</style>
```



![](http://mdimg.95408.com/201912302135_67.png?null)



