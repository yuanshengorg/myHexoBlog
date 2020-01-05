---
title: html+css（二）表格、列表和表单
categories: css
tags: html+css
date: 
---

> 表格、表单、列表

![表格、表单、列表](http://mdimg.95408.com/201912302312_919.png?null)

## 表格

*   表格可以让数据显示的非常的规整，可读性非常好；
*   不是用来布局，常见显示、展示表格式数据；
*   特别是后台展示数据的时候表格运用是否熟练就显得很重要；
*   表格不要纠结于外观，用CSS表达；

### 创建表格 table、tr、td

[w3school](https://www.w3school.com.cn/tags/tag_table.asp)

基本的三对HTML标签，分别为 `table` 、 `tr` 、 `td` ，他们是创建表格的基本标签，缺一不可；

``` html
<!-- 一个表格 -->
<table>
    <tr> 	<!-- 表格中的第一行 -->
        <td>第一行第一格 每个td就是一行中的每一格</td>
        <td>第一行第二格 每个td就是一行中的每一格</td>
    </tr>

    <tr> 	<!-- 表格中的第二行 -->
        <td>第二行第一格 每个td就是一行中的每一格</td>
        <td>第二行第二格 每个td就是一行中的每一格</td>
    </tr>
</table>
```

1. `table` 用于定义一个 `表格` ；
2. `tr` 标签用于定义表格中的 `行` ，必须嵌套在 table标签中；
3. `td` （table data）用于定义表格中的 `单元格` ，必须嵌套在<tr></tr>标签中，用来存储数据；

| 属性        | 值                    | 描述                                   |
| ----------- | --------------------- | -------------------------------------- |
| border      | 像素值                | 表格的边框                             |
| cellpadding | 像素值 默认1          | 规定单元格**边框**与**内容**之间的空白 |
| cellspacing | 像素值 默认2          | 规定**单元格**与**单元格之间**的空白   |
| align       | left   center   right | 不赞成使用。请使用样式代替。           |
| width       | 像素值  百分比        | 规定表格的宽度                         |
| height      | 像素值  百分比        | 规定表格的高度                         |

三参为0：

我们经常有个说法，是三参为0，  平时开发的我们这三个参数 border、cellpadding、cellspacing 为 0；

![](http://mdimg.95408.com/201912302331_813.png?null)

单元格与单元格之间的空白cellspacing：

![](http://mdimg.95408.com/201912302334_428.png?null)

``` html
<!-- 左：cellspacing="10" -->
<!-- 右：cellspacing="0" -->
<table width="500" height="300" border="1" cellpadding="20" cellspacing="0" align="center">
    <tr>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
    </tr>
    <tr>
        <td>张三</td>
        <td>男</td>
        <td>55</td>
    </tr>
    <tr>
        <td>李四</td>
        <td>男</td>
        <td>52</td>
    </tr>
    <tr>
        <td>王五</td>
        <td>男</td>
        <td>58</td>
    </tr>
    <tr>
        <td>赵六</td>
        <td>男</td>
        <td>18</td>
    </tr>
</table>
```

### 表头单元格 th

*   表头单元格位于表格的第一行或第一列，并且文本加粗居中；
*   只需用表头标签 `th` 替代相应的单元格标签 `td` 即可；

``` html
<table>
    <tr>
        <th>姓名</th> <!-- 表头单元格th -->
        <th>性别</th> 
        <th>电话</th> 
    </tr>
    <tr>
        <td>张三</td> <!-- 普通单元格td -->
        <td>男</td> 
        <td>28</td> 
    </tr>
</table>
```

### 表格标题 caption

``` html
<table>
    <caption>我是表格标题：四大名人年龄表</caption>
    <tr>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
    </tr>
</table>
```

1.  caption 元素定义**表格标题**，通常这个标题会被居中且显示于表格之上；
2.  caption 标签必须紧随 table 标签之后；
3.  这个标签只存在 表格里面才有意义；

### 合并单元格 rowspan、colspan

**合并单元格2种方式**

*   跨行合并：rowspan="合并单元格的个数"      
*   跨列合并：colspan="合并单元格的个数"

![](http://mdimg.95408.com/201912302347_304.png?null)

**合并单元格顺序**

*   先上、后下、先左、后右的顺序；
*   **顺序在前**的 td 上写规则 `td rowspan="跨行合并td数量"` 或者 `<td colspan="跨列合并td数量">` ；
*   删除**顺序在后**的 td ；

**将普通表格合并**

![](http://mdimg.95408.com/201912310001_303.png?null)

![](http://mdimg.95408.com/201912310006_234.png?null)

``` html
<table border="1" width="500" height="240" align="center" cellspacing="0">
    <caption> 个人简历 </caption>
    <tr>
        <td>张三</td>
        <td>男</td>
        <td>18</td>
        <!-- 将第二行tr的最后一格td合并 -->
        <td rowspan="2">照片</td>
    </tr>
    <tr>
        <td>身高 180</td>
        <td>汉族</td>
        <td>已婚</td>
        <!-- <td>照片</td> -->
    </tr>
    <tr>
        <td>个人作品</td>
        <!-- 将第三行tr的第二、三、四个格td合并 -->
        <td colspan="3">个人作品</td>
        <!-- <td>个人作品</td> -->
        <!-- <td>个人作品</td> -->
    </tr>
    <tr>
        <td>个人简历</td>
        <!-- 将第四行tr的第二、三、四个格td合并 -->
        <td colspan="3">个人简历</td>
        <!-- <td>个人简历</td> -->
	    <!-- <td>个人简历</td> -->
    </tr>
</table>
```

### 表达结构 thead、tbody

*   将表格分成三个部分：题头 `thead` 、正文 `tbody` 和脚注 `tfoot` 来标注， 这样更好的分清表格结构；
*   以上标签都是放到table标签中；

``` html
<table border="1" cellspacing="0" align="center" width="500">
    <!-- 题头 thead -->
    <thead>
        <tr>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
        </tr>
    </thead>
    <!-- 正文 tbody -->
    <tbody>
        <tr>
            <td>刘德华</td>
            <td>男</td>
            <td>55</td>
        </tr>
    </tbody>
    <!-- 脚注 tfoot -->
    <tfoot>
        <tr>
            <td>信息地址</td>
            <td colspan="2">湖南长沙</td>
        </tr>
    </tfoot>
</table>
```



## 列表

表格是用来显示数据的，那么列表就是用来布局的；

列表整齐 、整洁、 有序，跟表格类似，但是他可组合自由度会更高；

### 无序列表 ul

无序列表的各个列表项之间没有顺序级别之分，是并列的。

 1.ul 中只能嵌套 li，直接在ul签中输入其他标签或者文字的做法是不被允许的
 2.li 与 li 之间相当于一个容器，可以容纳所有元素
 3. 无序列样式属性让CSS来

``` html
<ul>
    <li>列表项1</li>
    <li>列表项2</li>
</ul>
```

### 有序列表 ol

有排列顺序的列表，其各个列表项按照一定的顺序排列定义；

``` html
<ol>
    <li>列表项1</li>
    <li>列表项2</li>
</ol>
```

### 自定义列表 dl

定义列表常用于对术语或名词进行解释和描述，定义列表的列表项前没有任何项目符号。

``` html
<dl>
    <dt>帮助中心</dt>
    <dd>账户管理</dd>
    <dd>购物管理</dd>
    ...
    <dt>服务支持</dt>
    <dd>售后政策</dd>
    <dd>自助服务</dd>
    ...
</dl>
```



## 表单

![](http://mdimg.95408.com/201912311226_319.png?null)

表单目的是为了收集用户信息。

在我们网页中， 我们也需要跟用户进行交互，收集用户资料，此时也需要表单。

> 在HTML中，一个完整的表单通常由表单域、表单控件（也称为表单元素）、提示信息和3个部分构成。

**表单控件： **

包含了具体的表单功能项，如单行文本输入框、密码输入框、复选框、提交按钮、重置按钮等。

**提示信息：**

一个表单中通常还需要包含一些说明性的文字，提示用户进行填写和操作。

**表单域：**  

他相当于一个容器，用来容纳所有的表单控件和提示信息，可以通过他定义处理表单数据所用程序的url地址，以及数据提交到服务器的方法。如果不定义表单域，表单中的数据就无法传送到后台服务器。

### input 表单控件

[w3school](https://www.w3school.com.cn/tags/tag_input.asp)

``` html
<input type="属性值" value="默认文本值">
```

*   <input /&gt; 标签为单标签
*   type属性设置不同的属性值用来指定不同的控件类型

![](http://mdimg.95408.com/201912310028_712.png?null)

#### 1.type 属性

*   这个属性通过改变值，可以决定了你属于那种input表单。
*   比如 type = 'text'  就表示 文本框 可以做 用户名， 昵称等。
*   比如 type = 'password'  就是表示密码框   用户输入的内容 是不可见的。

``` html
用户名: <input type="text" />
密  码：<input type="password" />
```

#### 2.value属性   值

``` html
用户名: <input type="text" name="username" value="请输入用户名">
```

*   value 默认的文本值。 有些表单想刚打开页面就默认显示几个文字，就可以通过这个value 来设置。

#### 3.name属性

``` html
用户名: <input type="text" name=“username” />
```

name表单的名字， 这样，后台可以通过这个name属性找到这个表单。  页面中的表单很多，name主要作用就是用于区别不同的表单。

*   name属性后面的值，是我们自己定义的。

*   radio  如果是一组，我们必须给他们命名相同的名字 name   这样就可以多个选其中的一个啦

``` html
<input type="radio" name="sex" /> 男
<input type="radio" name="sex" /> 女
```

*   name属性，我们现在用的较少， 但是，当我们学ajax 和后台的时候，是必须的。

#### 4.checked属性

*   表示默认选中状态，**较常见于单选按钮和复选按钮**。

``` html
性 别:
<input type="radio" name="sex" value="男" checked="checked" />男
<input type="radio" name="sex" value="女" />女
```

上面这个，表示就默认选中了 男 这个单选按钮

#### 5.input 属性小结

| 属性    | 说明     | 作用                                                   |
| ------- | :------- | ------------------------------------------------------ |
| type    | 表单类型 | 用来指定不同的控件类型                                 |
| value   | 表单值   | 表单里面默认显示的文本                                 |
| name    | 表单名字 | 页面中的表单很多，name主要作用就是用于区别不同的表单。 |
| checked | 默认选中 | 表示那个单选或者复选按钮一开始就被选中了               |

![](http://mdimg.95408.com/201912310055_261.png?null)

``` html
<!-- type text  是一个文本框 -->
用户名： <input type="text" value="请输入用户名" name="username" />

<!-- type password  是一个密码框 -->
密码： <input type="password" name="pwd" />

<!-- type radio 单选框 -->
性别：
男 <input type="radio" name="sex" />
女 <input type="radio" name="sex" checked="checked" />
未知 <input type="radio" name="sex" />

<!-- type checkbox 复选框 -->
爱好:
睡觉 <input type="checkbox" name="hobby" checked="checked" />
爬山 <input type="checkbox" name="hobby" />
篮球 <input type="checkbox" name="hobby" />
足球 <input type="checkbox" name="hobby" />

<!-- type button/submit/reset 按钮 需要value值 -->
<input type="button" value="获取验证码" />
<input type="submit" value="提交" />
<input type="reset" value="重置" />

<!-- type image 图片提交按钮 里面必须包含 src 属性 -->
<input type="image" src="images/btn.png" />

<!-- type file 文件域 上传文件 -->
上传头像: <input type="file" />
```

### label 标签

label标签主要目的是为了提高用户体验，为用户提高最优秀的服务。

label 标签为 input 元素定义标注（标签）。

用于绑定一个表单元素, 当点击label标签的时候, 被绑定的表单元素就会获得输入焦点。

绑定元素

1.  第一种用法就是用label直接包括input表单。

``` html
<label>
    <!-- 用户名： -->
    <input type="radio" name="usename" value="请输入用户名">
</label>
```

   适合单个表单选择

2.  第二种用法 for 属性规定 label 与哪个表单元素绑定。

``` html
<label for="nc">昵称：</label>
<input type="text" id="nc" />d="sex">
```

> 当我们鼠标点击 label标签里面的文字时， 光标会定位到指定的表单里面

### textarea控件(文本域)

``` html
<textarea>
  <!-- 文本内容 -->
</textarea>
```

通过textarea控件可以轻松地创建多行文本输入框.

cols="每行中的字符数"、rows="显示的行数"，实际开发不用

**文本框和文本域区别**

| 表单              |  名称  |       区别       |                  默认值显示 |             用于场景 |
| :---------------- | :----: | :--------------: | --------------------------: | -------------------: |
| input type="text" | 文本框 | 只能显示一行文本 | 单标签，通过value显示默认值 | 用户名、昵称、密码等 |
| textarea          | 文本域 | 可以显示多行文本 |  双标签，默认值写到标签中间 |               留言板 |

### select下拉列表

*   如果有多个选项让用户选择，为了节约空间，我们可以使用select控件定义下拉列表；
*   select 中至少包含一对 option ；
*   在option 中定义selected =" selected "时，当前项即为默认选中项；

``` html
<select>
    <option selected=" selected">选项1</option>
    <option>选项2</option>
    <option>选项3</option>
    <!-- ... -->
</select>
```

![](http://mdimg.95408.com/201912310059_791.png?null)

``` html
籍贯：
<!-- 省份选择 -->
<select>
    <option>请选择省份</option>
    <!-- selected="selected" 表示默认选中北京 -->
    <option selected="selected">北京</option>
    <option>天津</option>
    <option>上海</option>
    <option>山东</option>
</select>
<!-- 城市选择 -->
<select>
    <option>请选择城市</option>
    <option>海淀区</option>
    <option>昌平区</option>
    <option>通州区</option>
    <option>雄安区</option>
</select>
```



### form 表单域 

*   收集的用户信息通过form表单域传递给服务器；
*   在HTML中，form标签被用于定义表单域，以实现用户信息的收集和传递，form中的所有内容都会被提交给服务器；

``` html
<form action="url地址" method="提交方式" name="表单名称">
    <!-- 各种表单控件 -->
</form>
```

**常用属性：**

| 属性   | 属性值   | 作用                                               |
| ------ | :------- | -------------------------------------------------- |
| action | url地址  | 用于指定接收并处理表单数据的服务器程序的url地址。  |
| method | get/post | 用于设置表单数据的提交方式，其取值为get或post。    |
| name   | 名称     | 用于指定表单的名称，以区分同一个页面中的多个表单。 |

将 `user` 表单通过 `post` 请求方式向页面 `admin/user.html` 文件发送数据：

``` html
<form action="admin/user.html" method="post" name="user">
    用户名: <input type="text" name="username" /> <br />
    密码: <input type="password" name="pwd" /><br />
    <input type="submit" />
</form>
```

### 元素属性写法约定

*   元素属性值使用双引号语法
*   元素属性值可以写上的都写上

``` html
<!-- 推荐： -->
<input type="text" />
<input type="radio" name="name" checked="checked" />
<!-- 不推荐： -->
<input type=text /> <input type='text' />
<input type="radio" name="name" checked />
```

### 文档

W3C :  http://www.w3school.com.cn/

MDN: https://developer.mozilla.org/zh-CN/

Todo: [w3school HTML 表单](https://www.w3school.com.cn/html/html_forms.asp)

以上。

