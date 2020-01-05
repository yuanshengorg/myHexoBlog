---
title: JavaScript（三）数组一
categories: JavaScript
tags: js
date: 
---

## 数组

-   数组是一种特殊的变量，它能够一次存放一个以上的值。
-   数组是一种特殊类型的对象，在 JavaScript 中对数组使用 typeof 运算符会返回 "object"。JavaScript 数组最好以数组来描述。
-   数组使用数字来访问其“元素”，对象使用名称来访问其“成员”。数组和对象的区别：数组使用数字索引、象使用命名索引。数组是特殊类型的对象，具有数字索引。
    -   `var person = ["Bill", "Gates", 62]; ` 使用： ` person[0] ` 
    -   `var person = {firstName:"John", lastName:"Doe", age:46}; ` 使用： ` person.firstName ` 
-   如果希望元素名为字符串（文本）则应该使用对象、如果希望元素名为数字则应该使用数组。
-   可以在数组保存对象、函数、甚至是数组；
    -   `myArray[0] = Date.now;  myArray[1] = myFunction;  myArray[2] = myCars;` 

### 1、定义数组

``` js
var cars = ["Saab", "Volvo", "BMW"];
// 以逗号隔开；
// 最后不要加逗号；
// var cars = new Array("Saab", "Volvo", "BMW");
// 尽量不要使用 new Array() ，执行效率更低；
```

### 2、 识别数组

``` js
typeof cars; // 返回 object
// typeof 运算符返回 "object"，因为 JavaScript 数组属于对象。
Array.isArray(cars); // 返回 true
```

### 3、访问数组元素

``` js
var cars = new Array("Saab", "Volvo", "BMW");
console.log(cars[0]); // Saab
```

### 4、遍历数据

把数组中的每个元素从头到尾都访问一次（类似学生的点名），可以通过 for 循环索引遍历数组中的每一项；

``` js
var arr = ['red','green', 'blue'];
for (var i = 0; i < arr.length; i++) {
    console.log(arrStus[i]);
}
// red
// green
// blue
```

### 5、改变数组元素

通过使用它们的索引号来访问、更改数组元素

``` js
var cars = new Array("Saab", "Volvo", "BMW");
cars[0] = 'abc'
console.log(cars[0]); // abc
```

### 6、访问完整数组

``` js
var cars = ["Audi", "BMW", "porsche"];
document.getElementById("demo").innerHTML = cars; <
p id = "demo" > < /p>
//<p id="demo">Audi,BMW,porsche</p>
```

## 数组属性方法

### 1、length 属性

返回数组的长度

``` js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length; // 4
```

### 2、length 访问最后一个元素

``` js
fruits = ["Banana", "Orange", "Apple", "Mango"];
var first = fruits[0]; // 访问第一个元素
var last = fruits[fruits.length - 1]; // Mango
// str.length 为长度4，减1表示是索引3（索引从0开始）
```

### 3、push()、length添加元素

``` js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon"); // 向 fruits 添加一个新元素 (Lemon)

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon"; // 向 fruits 添加一个新元素 (Lemon)
// str.length是数组长度，比索引大1（索引从0开始）
// 等于在原来最大索引+1的位置添加元素
```

### 4、添加元素时的空位

``` js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon"; // 向 fruits 添加一个新元素 (Lemon)
// Banana
// Orange
// Apple
// Mango
// undefined 添加最高索引的元素可在数组中创建未定义的“洞”：
// undefined
// Lemon
```

## 数组方法

### 1、toString() 转为字符串

``` js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // Banana,Orange,Apple,Mango
console.log(fruits); // 也可以直接调用
// 所有 JavaScript 对象都拥有 toString() 方法。
```

### 2、join() 转字符串

类似 toString()，但是您还可以规定分隔符

``` js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join('*')); // Banana*Orange*Apple*Mango
```

### 3、pop() 删除最后元素

1、pop() 删除最后元素，返回被删除元素

2、push() 在最后增加元素，返回数组长度

3、shift() 删除开始元素，返回被删除元素

4、unshift() 在开始增加元素，返回数组长度

返回被删除的值

``` js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop()
// console.log(fruits.pop()); // Mango
// console.log(fruits); // Banana,Orange,Apple
```

### 4、push() 在最后增加元素

返回新数组的长度值

``` js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var f = fruits.push('Kiwi');
// console.log(f); // 5
// console.log(fruits); // Banana Orange Apple Mango Kiwi
```

### 5、shift() 删除第一个元素

返回被“位移出”的字符串

``` js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift(); // 返回 "Banana"
```

### 6、unshift() 在最前面增加元素

返回新数组的长度

``` js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); // 返回 5
```

### 7、delete 删除元素

使用 delete 会在数组留下未定义的空洞。请使用 pop() 或 shift() 取而代之。

``` js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; // 把 fruits 中的首个元素改为 undefined
```

### 8、splice() 向数组添加新项

``` js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
// 原数组： Banana,Orange,Apple,Mango
// 新数组： Banana,Orange,Lemon,Kiwi,Apple,Mango
```

第一个参数（2）定义了应添加新元素的位置（拼接）。

第二个参数（0）定义应删除多少元素。

其余参数（“Lemon”，“Kiwi”）定义要添加的新元素。

splice() 方法返回一个包含已删除项的数组：

``` js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
// 原数组： Banana,Orange,Apple,Mango
// 新数组： Banana,Orange,Lemon,Kiwi
// 已删除项： Apple,Mango
```

### 8、splice() 删除元素

第一个参数（0）定义新元素应该被添加（接入）的位置。

第二个参数（1）定义应该删除多个元素。

其余参数被省略。没有新元素将被添加。

``` js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); // 删除 fruits 中的第一个元素 Banana
// 原数组： Banana,Orange,Apple,Mango
// 新数组： Orange,Apple,Mango
fruits.splice(1, 2); // Banana,Mango
```

### 9、concat() 合并、连接数组

concat() 方法不会更改现有数组。它总是返回一个新数组。

concat() 方法可以使用任意数量的数组参数：

concat() 方法也可以将值作为参数：

``` js
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
arr1.concat(arr2); // 将arr1 与 arr2 连接在一起
arr1.concat(arr2, arr3); // 将arr1、arr2 与 arr3 连接在一起
arr1.concat(["Emil", "Tobias", "Linus"]); // 也可以将值作为参数
```

### 10、slice() 裁剪新数组

slice() 方法创建新数组。它不会从源数组中删除任何元素。

``` js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.slice(1); // Orange,Lemon,Apple,Mango
fruits.slice(3); // Apple,Mango
```

slice() 可接受两个参数，从开始参数选取元素，直到结束参数（不包括）为止。

第2个参数可省略，表示从第1个参数往后所有的元素；

``` js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3); // Orange,Lemon
```

![](http://mdimg.95408.com/201912130047_162.png?imageView2/2/w/1200/h/1200)

以上。

