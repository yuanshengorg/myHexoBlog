---
title: 《HTML和CSS进阶教程》笔记（一）
categories: css
tags: html+css
date: 
---









## CSS优先级与样式冲突

3.3.3 指定样式冲突

所谓的指定样式，指的是指定“当前元素”的样式。当直接指定的样式发生冲突时，样式权值高者获胜。

![](http://mdimg.95408.com/202001022223_461.png?null)

`! important`

-   在CSS中，我们可以使用！important规则来改变样式的优先级。如果一个样式使用!important来声明，则这个样式会覆盖CSS中任何的其他样式声明。
-   例子：有人在jQuery插件中写了糟糕的行内样式（行内样式优先级往往是最高的），而你需要在CSS文件中修改这些样式，可以使用! important来覆盖那些行内样式。
-   如果在同一样式中出现了多个！important，则遵循后来者居上原则。

伪元素：常见的伪元素只有四个：即 `::before`、`::after`、`::first-letter`、`::first-line`。

伪类：伪类我们经常见到，如：`hover`、`:first-child` 等。

>   有权重问题，按权重大小；权重相同，按代码优先；

选择器权重的计算只针对指定样式（当前元素），并不能用于继承样式；

``` html
<style>
    .aaa #bbb {
        color:blue;
    }
    .aaa p {
        color: red;
    }
</style>
<div class="aaa">
    <div id="bbb">
        <p>文字仍是红色</p>
    </div>
</div>
```

如上：虽然蓝色样式的权重非常高，但仍然使用的是红色，因为：

-   所谓的指定样式冲突，指的是“当前元素”的样式发生冲突；
-   在这个例子中，我们所针对的当前元素是 p ，然而“.aaa #bbb”针对的元素是 p 的祖先元素，并不是 p；

对于CSS优先级，主要就是以下两个黄金定律。

-   （1）优先级高的样式覆盖优先级低的样式。
-   （2）同一优先级的样式，后定义的覆盖先定义的，即后来者居上。



## 兄弟选择器与相邻选择器

**层次选择器**

常见的层次关系包括：父子、后代、兄弟和相邻。

![](http://mdimg.95408.com/202001022305_27.png?null)

**兄弟选择器**

就是选中元素后面（不包括前面）的某一类兄弟元素。

**相邻选择器**

相邻选择器，就是选中元素后面（不包括前面）的某一个“相邻”的兄弟元素。相邻选择器跟兄弟选择器也非常相似，不过也有明显的区别。

（1）兄弟选择器选取元素后面“所有”的某一类元素。

（2）相邻选择器选取元素后面“相邻”的某一个元素。



## 相邻选择器的妙用

“li+li”使用的是相邻选择器，表示“选择li元素相邻的下一个li元素”。由于最后一个li元素没有相邻的下一个li元素，所以对于最后一个li元素，它是没有下一个li元素可以选取的。“li+li{border-top:2px solid red; }”达到在两个li元素之间添加一个边框的效果。

这是一个非常棒的技巧，在实际开发中如果我们想要在两个元素之间实现什么效果（border、margin等），我们会经常用到这个技巧！

![](http://mdimg.95408.com/202001022326_629.png?null)

``` html
<style>
    li {
        float: left;
        font-size: 18px;
        padding: 0 20px;
        list-style: none;
    }
    li+li {
        border-left: 1px solid #000;
    }
</style>
<ul>
    <li>aaa</li>
    <li>aaa</li>
    <li>aaa</li>
    <li>aaa</li>
    <li>aaa</li>
    <li>aaa</li>
</ul>
```





## class命名参考



### 网页主体部分命名

![](http://mdimg.95408.com/202001022342_442.png?null)



### 导航

![](http://mdimg.95408.com/202001022343_959.png?null)

### 菜单

![](http://mdimg.95408.com/202001022343_855.png?null)

### 其他

![](http://mdimg.95408.com/202001022344_497.png?null)

### CSS文件命名

![](http://mdimg.95408.com/202001022346_301.png?null)



## CSS书写顺序

![](http://mdimg.95408.com/202001022347_593.png?null)

把影响元素页面布局的样式（如float、margin、padding、height、width等）排到前面，而把不影响布局的样式（如background、color、font等）排到后面。这种主次分明的排列方式，极大地提高了代码的可阅读性和可维护性。

注意：功能代码块还是应该放在一起；

对于单行文本居中、块元素居中等具有某一个特殊功能的代码块，我们就不应该那么呆板了。因为功能代码往往是用多个CSS属性来实现的，此时如果也按照表4-6的书写顺序来的话，这些功能代码就会被打乱，并且难以维护。因此，对于功能代码，我们应该集中放在一块。







## CSS reset

来源：https://meyerweb.com/eric/tools/css/reset/

``` css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```

Eric Meyer建议此CSS reset代码是应该根据个人需求不同来定义，例如有的页面不会用到address、code元素，直接把这两个元素剔除即可。



















