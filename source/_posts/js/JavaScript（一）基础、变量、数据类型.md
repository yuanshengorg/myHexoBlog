---
title: JavaScript（一）基础、变量、数据类型
categories: JavaScript
tags: js
date: 
---



## JavaScript 相关

### 计算机语言

-   汇编语言和高级语言：
    -   语言类型之汇编语言：汇编语言和机器语言实质是相同的，都是直接对硬件操作，只不过指令采用了英文缩写的标识符，容易识别和记忆；
    -   语言类型之高级语言：高级语言主要是相对于低级语言而言，它并不是特指某一种具体的语言，而是包括了很多编程语言，常用的有C语言、C++、Java、C#、Python、PHP、JavaScript、Go语言、Objective-C、Swift等；
-   翻译器：
    -   高级语言所编制的程序不能直接被计算机识别，必须经过转换才能被执行，为此，我们需要一个翻译器。
    -   翻译器可以将我们所编写的源代码转换为机器语言，这也被称为二进制化；
-   解释型语言和编译型语言：
    -   翻译器翻译的方式有两种：一个是编译，另外一个是解释。
    -   两种方式之间的区别在于翻译的时间点不同；
    -   编译型语言：编译器是在代码执行之前进行编译，生成中间代码文件；
    -   解释型语言：解释器是在运行时进行及时解释，并立即执行(当编译器以解释方式运行的时候，也称之为解释器)；
-   编程语言和标记语言：
    -   编程语言有很强的逻辑和行为能力。在编程语言里, 你会看到很多 if else 、for 、while等具有逻辑性和行为能力的指令，这是主动的；
    -   标记语言（html）不用于向计算机发出指令，常用于格式化和链接。标记语言的存在是用来被读取的, 他是被动的；

### JavaScript

-   JavaScript 是什么：
    -   是世界上最流行的语言之一；
    -   是运行在客户端的**脚本语言**；
-   脚本语言：
    -   不需要编译，运行过程中由 js 解释器( js 引擎）逐行来进行解释并执行；
    -   现在也可以基于 Node.js 技术进行服务器端编程；
-   JavaScript 作用：
    -   表单动态校验（密码强度检测）  （ JS 产生最初的目的 ）；
    -   网页特效；
    -   服务端开发(Node.js)；
    -   桌面程序(Electron)；
    -   App(Cordova) ；
    -   控制硬件-物联网(Ruff)；
    -   游戏开发(cocos2d-js)；
-   JavaScript 与HTML/CSS的关系：
    -   HTML 决定网页结构和内容；
    -   CSS 决定网页的样式和美观；
    -   JS 实现功能、页面控制；
-   渲染引擎和 JS 引擎：
    -   渲染引擎：解析 HTML 和 CSS，俗称内核，如 blink、webkit；
    -   JS 引擎：也叫JS解释器，读取并处理、运行 JS 代码，如 V8；
    -   浏览器本身并不会执行JS代码，通过内置 JavaScript 引擎(解释器) 来执行 JS 代码；
    -   JS 引擎执行代码时逐行解释每一句源码（转换为机器语言），然后由计算机去执行，所以 JavaScript 语言归为脚本语言，会逐行解释执行；
-   JavaScript 组成：
    -   JavaScript 语法： **ECMAScript**；
    -   页面文档对象模型：**DOM**；
    -   浏览器对象模型：**BOM**；
-   ECMAScript：
    -   规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法工业标准；
-   DOM：
    -   文档对象模型（DocumentObject Model，简称DOM），是W3C组织推荐的处理可扩展标记语言的标准编程接口。通过 DOM 提供的接口可以对页面上的各种元素进行操作（大小、位置、颜色等）；
-   BOM：
    -   浏览器对象模型(Browser Object Model，简称BOM) 是指浏览器对象模型，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等；

### 关键字

-   标识符：
    -   标识(zhi)符：就是指开发人员为变量、属性、函数、参数取的名字；
    -   标识符不能是关键字或保留字；
-   关键字：
    -   关键字：是指 JS本身已经使用了的字，不能再用它们充当变量名、方法名；
    -   包括：break、case、catch、continue、default、delete、do、else、finally、for、function、if、in、instanceof、new、return、switch、this、throw、try、typeof、var、void、while、with 等；
-   保留字：
    -   保留字：实际上就是预留的“关键字”，意思是现在虽然还不是关键字，但是未来可能会成为关键字，同样不能使用它们当变量名或方法名；
    -   包括：boolean、byte、char、class、const、debugger、double、enum、export、extends、fimal、float、goto、implements、import、int、interface、long、mative、package、private、protected、public、short、static、super、synchronized、throws、transient、volatile 等；
    -   注意：如果将保留字用作变量名或函数名，那么除非将来的浏览器实现了该保留字，否则很可能收不到任何错误消息。当浏览器将其实现后，该单词将被看做关键字，如此将出现关键字错误；



### 代码规范

**标识符命名规范**

-   变量、函数的命名必须要有意义
-   变量的名称一般用名词  
-   函数的名称一般用动词  

**操作符规范**

```js
// 操作符的左右两侧各保留一个空格
// i空格<=空格5;
for (var i = 1; i <= 5; i++) {
   console.log(i);
}
```

**注释规范**

```js
for (var i = 1; i <= 5; i++) {
   console.log(i); // 单行注释前面注意有个空格
}
```

**其他规范**	

``` js
// 关键词、操作符之间后加空格
// if空格(true)空格{
if (true) {
}
```





## JavaScript 基础

### JS 书写位置

行内式

``` html
<input type="button" value="点我试试" onclick="alert('Hello World')" />
```



内嵌式

``` html
<script>
    alert('Hello  World~!');
</script>
```



外部JS文件

``` html
<script src="./js/myjs.js"></script>
```



### JS 注释

单行注释

``` js
// 用来注释单行文字（快捷键 ctrl + / ）
alert('Hello World!');
```



多行注释

``` js
/*
  用来注释多行文字
  默认快捷键 alt + shift + a
*/
```



### JS 输入输出语句



| 方法             | 说明                           | 归属   |
| ---------------- | ------------------------------ | ------ |
| alert(msg)       | 浏览器弹出警示框               | 浏览器 |
| console.log(msg) | 浏览器控制台打印输出信息       | 浏览器 |
| prompt(info)     | 浏览器弹出输入框，用户可以输入 | 浏览器 |





## JavaScript 变量

### JS 变量

-   变量是用于存放数据的容器；
-   我们通过 变量名 获取数据、修改数据；
-   变量存储在内存中；
    -   本质：变量是程序在内存中申请的一块用来存放数据的空间；
    -   变量名和变量：类似我们酒店的房间号和房间；
-   变量的使用：
    -   变量的声明；
    -   变量的赋值；



### JS 变量使用

变量声明

``` js
// 声明变量  
var age;  // 声明一个 名称为age 的变量  
```

变量赋值

``` js
age = 10;  // 给 age 这个变量赋值为 10          
```

变量的初始化（声明一个变量并赋值）

``` js
var age  = 18;  // 声明变量同时赋值为 18
// 声明一个变量并赋值， 我们称之为变量的初始化。
```

-   var 是一个 JS关键字，用来声明变量( variable 变量的意思 )；
-   使用该关键字声明变量后，计算机会自动为变量分配内存空间，不需要程序员管；
-   age 是我们自己定义的变量名，我们要通过变量名来访问内存中分配的空间；
-   = 用来把右边的值赋给左边的变量空间中   此处代表赋值的意思；
-   变量值是我们保存到变量空间里的值；

更新变量

``` js
var age = 18;  // 声明变量同时赋值为 18
age = 81;   // 最后的结果就是81 因为18 被覆盖掉了      
```

同时声明多个变量

``` js
var age = 10, name = 'zs', sex = 2;       
// 同时声明多个变量时，只需要写一个 var
// 多个变量名之间使用英文逗号隔开
```

特殊情况

| 情况                           | 说明                    | 结果      |
| ------------------------------ | ----------------------- | --------- |
| var  age;   console.log (age); | 只声明 不赋值           | undefined |
| console.log(age);              | 不声明 不赋值  直接使用 | 报错      |
| age = 10;   console.log (age); | 不声明   只赋值         | 10        |



### JS 变量命名规范

-   由字母( A-Za-z )、数字( 0-9 )、下划线( _ )、美元符号( $ )组成，如：usrAge, num01, _name；
-   严格区分大小写。var app; 和 var App; 是两个变量；
-   不能 以数字开头。  18age   是错误的；
-   不能 是关键字、保留字。例如：var、for、while；
-   变量名必须有意义。 MMD   BBD        nl   →     age  ；
-   遵守驼峰命名法。首字母小写，后面单词的首字母需要大写。myFirstName；





## 数字型 Number



``` js
var age = 21;       // 整数
var Age = 21.3747;  // 小数   
```

-   JavaScript 数字类型既可以保存整数，也可以保存小数(浮点数）；

-   最常见的进制有二进制、八进制、十进制、十六进制；

-   八进制前面加0，十六进制前面加 0x；

-   JavaScript中数值的最大值和最小值：

    -   最大值：Number.MAX_VALUE，这个值为： 1.7976931348623157e+308；
    -   最小值：Number.MIN_VALUE，这个值为：5e-32；

-   数字型三个特殊值：

    -   Infinity ，代表无穷大，大于任何数值；
    -   -Infinity ，代表无穷小，小于任何数值；
    -   NaN ，Not a number，代表一个非数值；

-   isNaN：

    -   用来判断一个变量是否为非数字的类型，返回 true 或者 false；
    -   非数字类型，才返回 true；

    

``` js
var usrAge = 21;
console.log(isNaN(userAge));   // false ，21 不是一个非数字

var usrName = "andy";
console.log(isNaN(userName));   // true ，"andy"是一个非数字
```



## 字符串型 String

### 字符串写法

``` js
var strMsg = "半竹博客";   // 使用双引号表示字符串
var strMsg2 = '半竹博客~';   // 使用单引号表示字符串
// 常见错误
// 没使用引号，会被认为是js代码，但js没有这些语法
var strMsg3 = 半竹博客;   // 报错
```

-   字符串型可以是引号中的任意文本，其语法为 双引号 `" text "` 和 单引号 `' text '`；
-   因为 HTML 标签里面的属性使用的是双引号，JS 这里我们更推荐使用单引号；
-   JS 可以用单引号嵌套双引号 ，或者用双引号嵌套单引号 (外双内单，外单内双)；



```js
var strMsg = '我是"半竹"博客';   // 可以用''包含""
var strMsg2 = "我是'半竹'博客";   // 也可以用"" 包含''
//  常见错误
var badQuotes = '半竹博客";   // 报错，不能 单双引号搭配
```



### 字符串转义符

-   类似HTML里面的特殊字符，字符串中也有特殊字符，我们称之为转义符。
-   转义符都是 \ 开头的，常用的转义符及其说明如下：

| 转义符 | 解释说明                          |
| ------ | --------------------------------- |
| \n     | 换行符，n   是   newline   的意思 |
| \ \    | 斜杠   \                          |
| \'     | '   单引号                        |
| \"     | ”双引号                           |
| \t     | tab  缩进                         |
| \b     | 空格 ，b   是   blank  的意思     |



### 字符串长度 length

``` js
var strMsg = "半竹博客";
alert(strMsg.length);   // 4
```



### 字符串“ +” 加号拼接

``` js
// 1.1 字符串 "相加"
alert('hello' + ' ' + 'world');   // hello world
// 1.2 数值字符串 "相加"
alert('100' + '100');   // 100100
// 1.3 数值字符串 + 数值
alert('11' + 12);   // 1112 
// 只要有字符就会相连 
console.log('pink老师' + 18);
// 字符串连接变量
var age = 10;
console.log('半竹博客age岁啦');      // 这样不行哦，半竹博客age岁啦
console.log('半竹博客' + age);         // 半竹博客10
console.log('半竹博客' + age + '岁啦'); // 半竹博客10岁啦
```

-   拼接前会把与字符串相加的任何类型转成字符串，再拼接成一个新的字符串；
-   加号 ` + ` 口诀：数值相加 ，字符相连；
-   可以将字符串和变量来拼接，变量可以很方便地修改里面的值；
-   变量两侧都有字符串拼接，口诀“引引加加 ”，变量写两个加号中间；



## 布尔型 Boolean

-   布尔类型有两个值：true 和 false ，其中 true 表示真（对），而 false 表示假（错）；
-   布尔型和数字型相加的时候， true 的值为 1 ，false 的值为 0；

``` js
console.log(true + 1);  // 2
console.log(false + 1); // 1
```



### Undefined 和 Null：

-   一个声明后没有被赋值的变量会有一个默认值 undefined；
-   如果进行相连或者相加时，要注意结果；

``` js
var variable;   // 声明后没有被赋值的变量
console.log(variable);           // undefined
console.log('你好' + variable);  // 你好undefined
console.log(11 + variable);     // NaN
console.log(true + variable);   //  NaN
```

-   一个声明变量给 null 值，里面存的值为空；

```js
var vari = null;   // 声明变量给 null 值
console.log('你好' + vari);  // 你好null
console.log(11 + vari);     // 11
console.log(true + vari);   //  1
```





## JavaScript 简单数据类型

### 简单数据类型

![简单数据类型](http://mdimg.95408.com/202001052353_857.png?null)



### 获取数据类型 typeof

``` js
var num = 18;
console.log(typeof num)   // 结果 number      
```

**typeof：**

-   typeof 可用来获取检测变量的数据类型

![不同类型的返回值](http://mdimg.95408.com/202001060020_89.png?null)

**字面量：**

-   字面量是在源代码中一个固定值的表示法，通俗来说，就是字面量表示如何表达这个值；
-   数字字面量：8, 9, 10
-   字符串字面量：'半竹博客', "大半竹"
-   布尔字面量：true，false



### 数据类型转换

-   把一种数据类型的变量转换成另一种数据类型；
-   使用表单、prompt 获取过来的数据默认是字符串类型的，此时就不能直接简单的进行加法运算，而需要转换变量的数据类型；
-   通常会实现3种方式的转换：
    -   转换为字符串类型
    -   转换为数字型
    -   转换为布尔型

#### 转换为字符串

-   toString() 和 String()  使用方式不一样
-   三种转换方式，更多第三种加号拼接字符串转换方式， 这一种方式也称之为隐式转换

![转换为字符串](http://mdimg.95408.com/202001060025_59.png?null)



#### 转换为数字型

-   注意 parseInt 和 parseFloat 单词的大小写，这2个是重点
-   隐式转换是我们在进行算数运算的时候，JS 自动转换了数据类型

![转换为数字型](http://mdimg.95408.com/202001060026_540.png?null)

#### 转换为布尔型

-   代表空、否定的值会被转换为 false  ，如 ''、0、NaN、null、undefined  
-   其余值都会被转换为 true

![转换为布尔型*](http://mdimg.95408.com/202001060027_847.png?null)

``` js
console.log(Boolean('')); // false
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('半竹')); // true
console.log(Boolean(12)); // true
```











