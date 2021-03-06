---
title: JavaScript（六）对象、构造函数、Math、Date
categories: JavaScript
tags: js
date: 
---



## 对象

### 对象概念

-   在 JavaScript 中，对象是一组无序的相关属性和方法的集合
-   所有的事物都是对象，例如字符串、数值、数组、函数等。
-   对象是由属性和方法组成的。
    -   属性：事物的特征，在对象中用属性来表示（常用名词）
    -   方法：事物的行为，在对象中用方法来表示（常用动词）
-   为了让更好地存储一组数据，对象应运而生
    -   对象中为每项数据设置了属性名称，可以访问数据更语义化，数据结构清晰，表意明显
    -   JS中的对象表达结构更清晰，更强大。

``` js
var obj = {
    name: "张三",
    sex: "男",
    age: 28,
    height: 170
}
```



### 字面量创建对象

-   花括号 { } 里面包含了表达这个具体事物（对象）的属性和方法；
-   花括号 { } 里面采取键值对的形式表示；
    -   键：相当于属性名；
    -   值：相当于属性值，可以是任意类型的值（数字类型、字符串类型、布尔类型，函数类型等）;

``` js
var star = {
    name : 'pink',
    age : 18,
    sex : '男',
    sayHi : function(){
        alert('大家好啊~');
    }
};
```



### 对象的属性和方法

-   对象的属性；
    -   对象中存储**具体数据**的 "键值对"中的 "键"称为对象的属性，即对象中存储具体数据的项；
-   对象的方法；
    -   对象中存储**函数**的 "键值对"中的 "键"称为对象的方法，即对象中存储函数的项；
-   访问对象的属性；
    -   对象里面的属性调用 : 对象.属性名 ，这个小点 . 就理解为“ 的 ”  ；
    -   对象里面属性的另一种调用方式 : 对象[‘属性名’]，注意方括号里面的属性必须加引号    ；
-   调用对象的方法；
    -   对象里面的方法调用：对象.方法名() ，注意这个方法名字后面一定加括号 ；

访问对象的属性

```js
// 访问对象的属性
console.log(star.name)     // 调用名字属性
console.log(star['name'])  // 调用名字属性
```

调用对象的方法

```js
// 调用对象的方法
star.sayHi(); // 调用sayHi方法 带后面的括号
```



### 变量与属性、函数和方法

-   变量、属性总结；

    -   属性是对象的一部分，而变量不是对象的一部分，变量是单独存储数据的容器；
    -   变量：单独声明赋值，单独存在；
    -   属性：对象里面的变量称为属性，不需要声明，用来描述该对象的特征；

-   函数、方法总结；

    -   方法是对象的一部分，函数不是对象的一部分，函数是单独封装操作的容器；

    -   函数：单独存在的，通过“函数名()”的方式就可以调用；

    -   方法：对象里面的函数称为方法，方法不需要声明，使用“对象.方法名()”的方式就可以调用，方法用来描述该对象的行为和功能；

        

### new Object 创建对象 

``` js
var xyz = new Obect();
xyz.name = 'pink';
xyz.age = 18;
xyz.sex = '男';
xyz.sayHi = function(){
    alert('Hello JS~');
}
```

-   通过内置构造函数Object创建对象，此时xyz变量已经保存了创建出来的空对象；
-   通过对象操作属性和方法的方式，来为对象增加属性和方法；
-   Object() ：第一个字母大写；
-   new Object() ：需要 new 关键字；
-   使用的格式：对象.属性 =  值；



### 构造函数实例化对象

``` js
// 构造函数的封装格式
function 构造函数名(形参1,形参2,形参3) {
     this.属性名1 = 参数1;
     this.属性名2 = 参数2;
     this.属性名3 = 参数3;
     this.方法名 = 函数体;
}
// 构造函数的调用格式
var obj = new 构造函数名(实参1，实参2，实参3)
// obj即接收到构造函数创建出来的对象
```

-   构造函数：
    -   构造函数是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与 new 运算符一起使用；
    -   我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面；
-   构造函数注意事项：
    -   构造函数约定**首字母大写**；
    -   函数内的属性和方法前面需要添加 **this** ，表示当前对象的属性和方法；
    -   构造函数中**不需要 return 返回结果**；
    -   当我们创建对象的时候，**必须用 new 来调用构造函数**；
-   类与实例化对象：
    -   构造函数，如 function Stars() {}，抽象了对象的公共部分，封装到了函数里面，它泛指某一大类（class） ；
    -   创建对象，如 new Stars()，特指某一个，通过 new 关键字创建对象的过程我们也称为对象实例化；
-   new关键字作用：
    -   在构造函数代码开始执行之前，创建一个空对象；
    -   修改this的指向，把this指向创建出来的空对象；
    -   执行函数的代码；
    -   在函数完成之后，返回this---即创建出来的对象；



### 遍历对象

``` js
for (变量 in 对象名字) {
    // 在此执行代码
}
// 语法中的变量是自定义的，它需要符合命名规范
// 通常我们会将这个变量写为 k 或者 key
for (var k in obj) {
    console.log(k);      // 这里的 k 是属性名
    console.log(obj[k]); // 这里的 obj[k] 是属性值
}
```





## 内置对象

-   JavaScript 中的对象分为3种：自定义对象 、内置对象、 浏览器对象
-   前面两种对象属于 ECMAScript；  第三个浏览器对象属于 JS 独有的
-   MDN文档: https://developer.mozilla.org/zh-CN/



### Math 对象

Math 对象不是构造函数，它具有数学常数和函数的属性和方法。跟数学相关的运算（求绝对值，取整、最大值等）可以使用 Math 中的成员。

| 属性、方法名          | 功能                                         |
| --------------------- | -------------------------------------------- |
| Math.PI               | 圆周率                                       |
| Math.floor()          | 向下取整                                     |
| Math.ceil()           | 向上取整                                     |
| Math.round()          | 四舍五入版 就近取整   注意 -3.5   结果是  -3 |
| Math.abs()            | 绝对值                                       |
| Math.max()/Math.min() | 求最大和最小值                               |
| Math.random()         | 获取范围在[0,1)内的随机值                    |

注意：上面的方法使用时必须带括号

**获取指定范围内的随机整数**：

```js
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
```



### Date 日期对象

Date 对象和 Math 对象不一样，Date是一个构造函数，所以使用时需要实例化后才能使用其中具体方法和属性。Date 实例用来处理日期和时间

``` js
// 获取当前时间实例化
var now = new Date();
// 获取指定时间的日期对象
var future = new Date('2019/5/1');
```

-   创建实例时并未传入参数，则得到的日期对象是当前时间对应的日期对象

![使用Date实例的方法和属性](http://mdimg.95408.com/202001060233_997.png?null)

通过Date实例获取总毫秒数

``` js
// 实例化Date对象
var now = new Date();
// 1. 用于获取对象的原始值
console.log(date.valueOf())	
console.log(date.getTime())	
// 2. 简单写可以这么做
var now = + new Date();			
// 3. HTML5中提供的方法，有兼容性问题
var now = Date.now();
```



### String 字符串对象

-   为了方便操作基本数据类型，JavaScript 还提供了三个特殊的引用类型：String、Number和 Boolean
-   基本包装类型
    -   基本包装类型就是把简单数据类型包装成为复杂数据类型，这样基本数据类型就有了属性和方法
-   字符串的不可变
    -   当重新给字符串变量赋值的时候，变量之前保存的字符串不会被修改，依然在内存中重新给字符串赋值，会重新在内存中开辟空间，这个特点就是字符串的不可变。
    -   由于字符串的不可变，在**大量拼接字符串**的时候会有效率问题

``` js
// 基本包装类型
// 下面代码有什么问题？
var str = 'andy';
console.log(str.length);
// 按道理基本数据类型是没有属性和方法的，而对象才有属性和方法
// 但上面代码却可以执行，这是因为
// js 会把基本数据类型包装为复杂数据类型，其执行过程如下 
// 1. 生成临时变量，把简单类型包装为复杂数据类型
var temp = new String('andy');
// 2. 赋值给我们声明的字符变量
str = temp;
// 3. 销毁临时变量
temp = null;
```



以上。





