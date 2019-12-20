---
title: (1)HTML5+Css3基础
categories: css
tags: [Css3, HTML5]
date: 
---

## HTML新增



## 1.1、语义化标签

-   `header`   ---  头部标签
-   `nav`        ---  导航标签
-   `article` ---   内容标签
-   `section` ---   块级标签
-   `aside`     ---   侧边栏标签
-   `footer`   ---   尾部标签

>   在 `IE9` 浏览器中，需要把语义化标签都转换为块级元素语义化标签；
>
>   在移动端支持比较友好；



##  1.2、多媒体音频标签

### 1.2.1、audio

![audio 的参数](http://mdimg.95408.com/201912191818_942.png)

>注意：在 chrome 浏览器中已经禁用了 autoplay 属性



### 1.2.2、video

``` html
<body>
  <video src="./media/video.mp4" controls="controls"></video>
  <!-- 谷歌浏览器禁用了自动播放功能，如果想自动播放，需要添加 muted 属性 -->
  <!-- 多个视频格式支持不同浏览器 -->
  <video controls="controls" autoplay muted loop poster="./media/pig.jpg">
    <source src="./media/video.mp4" type="video/mp4">
    <source src="./media/video.ogg" type="video/ogg">
  </video>
</body>
```



>谷歌浏览器禁用了自动播放功能，解决办法：需要添加 **muted** 属性



![video 参数](http://mdimg.95408.com/201912191820_561.png?null)



## 1.3、input 标签

tel只能输入电话；search能直接删除搜索数据；

![新增 input 标签](http://mdimg.95408.com/201912191824_8.png?null)



## 1.4、表单属性

placeholder：表单中增加一行提示文本，获得焦点时消失；

![新增表单属性](http://mdimg.95408.com/201912191826_338.png?null)



## Css3 新增



## 2.1、属性选择器

![](http://mdimg.95408.com/201912191830_587.png?null)

1）

``` css
button {
	/* 选择所有的button元素 */
}
button[disabled] {
	/* 选择标签中带有disabled属性的button元素 */
}
```

2）

``` css
input[type=search] {
    /* 选择type属性=search的input元素 */
}
span[class^=black] {
	/* 选择class属性 以black开头的 span元素 */
}
span[class$=black] {
	/* 选择class属性 以black结尾的 span元素 */
}
span[class*=black] {
	/* 选择class属性 包含black的 span元素 */
}
```



## 2.2、结构伪类选择器



![结构伪类选择器属性列表](http://mdimg.95408.com/201912191838_395.png)



### 2.2.1、first-child / last-child



```css
ul li:first-child {
  /* 选择第一个li元素 */
}
ul li:last-child {
  /* 选择最后一个li元素 */
}
ul li:nth-child(3) {
  /* 选择第3个li元素 */
}
```



### 2.2.2、nth-child( )

| 选择符                        | 简介          |
| ----------------------------- | ------------- |
| ul li:nth-child(**even**) { } | 偶数          |
| ul li:nth-child(**odd**) { }  | 奇数          |
| ul li:nth-child(**2n**) { }   | 偶数          |
| ul li:nth-child(**2n+1**) { } | 奇数          |
| ul li:nth-child(**5n**) { }   | 第5、10、15个 |
| ul li:nth-child(**3n**) { }   | 第3、6、9个   |
| ul li:nth-child(**n+5**) { }  | 从第5个到最后 |
| ul li:nth-child(**-n+5**) { } | 前面5个       |



>   有时需要将2排各5个div中的最右边2个去除 ` margin-right ` 时，可以用 ` ul li:nth-child(5) ` 来选择第 5、10个div元素。



### 2.2.3、nth-child 和 nt-of-type 的区别



-   ul中只有li元素时，两都选择相同；
-   ul中第一个是p元素，后面是li元素时：
    -   nth-child 选择父元素里面的第几个子元素，只要是子元素即可，不管是什么类型；
    -   nth-of-type 是选择父元素的某一种子元素的第几个；



``` css
<body>
    <ul>
        <p>p</p>
        <li>li 1</li>
        <li>li 2</li>
        <li>li 3</li>
        <li>li 4</li>
        <li>li 5</li>
        <li>li 6</li>
    </ul>
</body>

<style>
    ul :nth-child(1){
        background-color: red;  
        /* 选择p */
    }
    ul li:nth-child(3){
        background-color: blue;
        /* 选择li 2 */
        /* 虽然选择的是li的第3个，但是从第一个子元素p就开始计算 */
    }
    ul li:nth-of-type(3){
        background-color: green;
        /* 选择li 3 */
    }
    ul li:nth-of-type(1){
        background-color: hotpink;
        /* 选择li 1 */
    }
</style>
```





## 2.3、伪元素选择器



![伪类选择器](http://mdimg.95408.com/201912191916_205.png?null)



### 2.3.1、注意事项



-   `before` 和 `after` 必须有 `content` 属性
-   `before` 在内容前面，` after` 在内容后面
-   `before` 和 `after` 创建的是一个元素，但是属于行内元素
-   创建出来的元素在 `Dom` 中查找不到，所以称为伪元素
-   伪元素和标签选择器一样，权重为 1



### 2.3.2、增加字体图标



``` css
p {
   width: 220px;
   height: 22px;
   border: 1px solid lightseagreen;
   margin: 60px;
   position: relative;
}
p::after {
  content: '\ea50';
  font-family: 'icomoon';
  position: absolute;
  top: -1px;
  right: 10px;
}
```





