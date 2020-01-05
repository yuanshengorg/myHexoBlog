---
title: html+css（一）html标签
categories: css
tags: html+css
date: 
---

## html

### html骨架

| 标签名 |    定义    | 说明                                                    |
| ------ | :--------: | :------------------------------------------------------ |
| html   |  HTML标签  | 页面中最大的标签，我们成为  根标签                      |
| head   | 文档的头部 | 注意在head标签中我们必须要设置的标签是title             |
| titile | 文档的标题 | 让页面拥有一个属于自己的网页标题                        |
| body   | 文档的主体 | 元素包含文档的所有内容，页面内容 基本都是放到body里面的 |

约定：

HTML标签名、类名、标签属性和大部分属性值统一用小写；

``` html
<html>
<head>
    <title></title>
</head>
<body>
    ……
</body>
</html>
```

## 标签

带有“< >”符号的元素被称为HTML标签；

双标签

``` html
<body> 双标签 </body>
```

单标签

``` html
<br />
```

嵌套关系

``` html
<head>
    <title> </title>
</head>
```

并列关系

``` html
<head></head>
<body></body>
```

### DOCTYPE

告知浏览器文档使用哪种 HTML 或 XHTML 规范；

``` html
<!DOCTYPE html>
```

### lang

指定html 语言种类；en 英语、zh-CN 中文；

``` html
<html lang="zh-CN">
```

### 字符集

告知 html 文件是以 UTF-8 编码保存的， 浏览器根据编码去解码对应的html内容；

``` html
<meta charset="UTF-8">
```

## 常用标签

### 标题标签h

``` html
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
```

### 段落标签 p

``` html
<p> 文本内容 </p>
```

### 水平线标签 hr

``` html
<hr /> 	<!-- 是一个单标签 -->
```

### 换行标签 br

``` html
<br />
```

### div 和 span

*   div、span 是没有语义的，是我们网页布局主要的2个盒子；
*   div 就是  division  的缩写：分割、分区的意思，其实有很多div 来组合网页；

``` html
<div> 没有语义的div </div>
<span> 没有语义的span </span>
```

### 文本格式化标签

*   b  只加粗，strong  除了加粗还有强调的意思，语义更强烈；
*   剩下同理；

``` html
<b></b> 粗体
<strong></strong> 粗体
<i></i> 斜体
<em></em> 斜体
<s></s> 删除线
<del></del> 删除线
<u></u> 下划线
<ins></ins> 下划线
```

### 标签属性

1.  标签可以拥有多个属性，必须写在开始标签中，位于标签名后面。
2.  属性之间不分先后顺序，标签名与属性、属性与属性之间均以空格分开。
3.  采取  键值对 的格式   key="value"  的格式  

``` html
<img src="src就是img标签的一个属性" />
```

### 图像标签 img

``` html
<img src="tupian.jpg" alt="图片不能正常显示就显示alt" />
<!-- 可以加标题、宽度、高度、边框等： -->
<img src="timg.gif" title="标题文字" width="600" height="600" border="10" />
```

### 链接 a

``` html
<a href="跳转目标" target="目标窗口弹出方式 _self _blank">文本或图像</a>
<a href="http://www.a.com" target="_blank">文本或图像</a>
<a href="demo.html">文字或图片</a>
```

### 注释

注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行（约定）；

``` html
<!-- 这是div内容的注释文字 -->
<div>...</div>
```

## 路径

### 相对路径

*   相对路径，是从代码所在的这个文件出发， 去寻找我们的目标文件的；
* `../` 上级目录、 `../../` 上上级目录；

``` html
<!-- 同级路径：本文件同一目录下的图片 -->
<img src="timg.gif" />
<!-- 下级路径：本文件同一目录下images中的图片 -->
<img src="images/timg.jpg" />
<!-- 上级路径：本文件上一级目录下images中的图片 -->
<img src="../images/timg.gif" />
```

### 绝对路径

``` html
<!-- 我们不提倡使用这种方法 -->
<img src="C:\Users\yuan\Desktop\img\img.jpg" />
<!-- 绝对的网络地址 还是可以用的 -->
<img src="http://www.a.cn/b/c/img.jpg" />
```

## 其他

### 锚点定位

``` html
<!-- 使用相应的id名标注跳转目标的位置 -->
<h3 id="two">第2集大片</h3>
<!-- 创建链接 -->
<a href="#two">点击查看第2集</a>
```

### base标签

base 可以设置整体链接的打开状态；base 写到 `head` 标签内；

``` html
<head>
    <base target="_blank">
</head>

<body>
    <a href="http://www.baidu.com">百度</a>
</body>
```

### 预格式化文本标签

被包围在 `pre` 标签 元素中的文本通常会保留空格和换行符；

``` html
<pre>
	   标题
	锄禾日当午，
	汗滴禾下土。
	谁知盘中餐，
	粒粒皆辛苦。
</pre>
```

### 特殊字符

``` html
&nbsp;   <!-- 空格 -->
&lt;     <!-- 小于号 -->
&gt;     <!-- 大于号 -->
<!-- 以 `&` 开头, 以分号 `;` 结尾； -->
```

![](http://mdimg.95408.com/201912302302_548.png?null)


``` html
<!-- HTML 中不能使用小于号 “<” 和大于号 “>”特殊字符 -->
<!-- 浏览器会将它们作为标签解析 -->
<!-- 若要正确显示，在 HTML 源代码中使用字符实体； -->

<!-- 推荐： -->
<a href="#">more &gt;&gt;</a>
<!-- 不推荐： -->
<a href="#">more >> </a>
```

以上。

