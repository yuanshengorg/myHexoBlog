---
title: JavaScript 数组（二）
categories: JavaScript
tags: js
date: 
---

## 一、遍历数组

### 1、for循环遍历数组

``` js
fruits = ["Banana", "Orange", "Apple", "Mango"];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Banana
// Orange
// Apple
// Mango  
```

### 2、for in 遍历数组

``` js
fruits = ["Banana", "Orange", "Apple", "Mango"];
for (i in fruits) {
    console.log(fruits[i]);
}
// Banana
// Orange
// Apple
// Mango  
```

### 3、forEach() 遍历数组

``` js
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.forEach(function(v) {
    console.log(v);
});
// Banana
// Orange
// Apple
// Mango  
fruits.forEach(v => {
    console.log(v);
});
// Banana
// Orange
// Apple
// Mango  
```

数组元素和元素索引

``` js
var arr = [1, 2, 3];
arr.forEach(function(value, index, array) {
    console.log('数组元素' + value);
    console.log('数组元素索引号' + index);
})
// 数组元素1
// 数组元素索引号0
// 数组元素2
// 数组元素索引号1
// 数组元素3
// 数组元素索引号2
```

求数组的和

``` js
var sum = 0;
var arr = [1, 2, 3];
arr.forEach(function(value, index, array) {
    sum += value;
})
console.log(sum); // 6
```

## 二、数组迭代

### 1、filter() 筛选数组

返回一个新数组，接受 3 个参数：项目值、项目索引、数组本身

返回大于50的元素组成的一个新数组

``` js
var arr = [12, 66, 4, 88, 3, 7];
var newArr = arr.filter(function(value) {
    return value >= 50;
})
console.log(newArr); // [66, 88]
```

返回偶数元素组成的一个新数组

``` js
var arr = [12, 66, 4, 88, 3, 7];
var newArr2 = arr.filter(function(value) {
    return value % 2 === 0;
})
console.log(newArr2); // [12, 66, 4, 88]
```

### 2、some() 查找满足条件的元素是否存在

filter() 查找满足条件的元素 返回一个 `新数组` 

some() 查找满足条件的元素是否存在 返回一个 `布尔值` 

接受 3 个参数： `项目值` 、 `项目索引` 、 `数组本身` 

sonme() 如果查找到第一个满足条件的元素就终止循环，效率更高

``` js
var arr = [10, 30, 4];
var flag = arr.some(function(value) {
    return value < 3;
});
console.log(flag); // false

var arr1 = ['red', 'pink', 'blue'];
var flag1 = arr1.some(function(value) {
    return value == 'pink';
});
console.log(flag1); // true
```

### 3、forEach() 和 some() 的区别

如果查询数组中唯一的元素, 用some方法更合适

在 some 里面 遇到 return true 就是终止遍历 迭代效率更高

在forEach 里面 return 不会终止迭代

``` js
var arr = ['red', 'green', 'blue', 'pink'];
arr.some(function(value) {
    if (value == 'green') {
        console.log('找到了该元素');
        // 在 some 里面 return true 就终止遍历 迭代效率更高
        return true;
    }
    console.log(11);
    // 11
    // 找到了该元素
});

var arr = ['red', 'green', 'blue', 'pink'];
// 1. forEach迭代 遍历
arr.forEach(function(value) {
    if (value == 'green') {
        console.log('找到了该元素');
        // 在forEach 里面 return 不会终止迭代
        return true;
    }
    console.log(11);
})
// 11
// 找到了该元素
// 11
// 11
```

### 4、indexOf()

在数组中搜索元素值并返回其位置

``` js
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple"); // 0
```

### 5、lastIndexOf()

在数组中搜索元素值并返回其位置，从数组结尾开始搜索

``` js
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple"); // 2
```

### 6、find()

返回通过测试函数的第一个数组元素的值

``` js
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(function(value) {
    return value > 18;
})
console.log(first); // 25 第一个比18大的值
```

### 7、findIndex()

返回通过测试函数的第一个数组元素的索引

``` js
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(function(value) {
    return value > 18;
})
console.log(first); // 3 第一个比18大的值的索引号是3
```

### 8、map()

对每个数组元素执行函数来创建新数组，不会更改原始数组。

``` js
var numbers = [1, 2, 3];
var first = numbers.map(function(value) {
    return value * 2;
})
console.log(first); // [2, 4, 6] 将每个数组值乘以2
```

### 9、reduce() reduceRight()

在每个数组元素上运行函数，以生成（减少它）单个值

reduceRight() 方法在数组中从左到右工作

``` js
var numbers = [1, 2, 3];
var first = numbers.reduce(function(total, value) {
    return total + value;
})
console.log(first); // 6 总和为6
```

### 10、every()

检查所有数组值是否通过测试，返回布尔值

``` js
var numbers = [4, 9, 16, 25, 29];
var first = numbers.every(function(value) {
    return value > 18;
})
console.log(first); // false(并非所有元素都大于18)
```

## 三、数组排序

### 1、reverse() 反转数组

``` js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse(); // Mango,Apple,Orange,Banana
```

### 2、sort() 以字母方式排序

``` js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Apple,Banana,Mango,Orange
```

### 3、sort() 以数字方式排序

如果数字按照字符串来排序，则 "25" 大于 "100"，因为 "2" 大于 "1"。

``` js
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {
    return a - b
}); // 1,5,10,25,40,100
```

通过一个比值函数，对数组进行降序排序。

``` js
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {
    return b - a
}); // 100,40,25,10,5,1
```

### 4、sort() 随机排序

``` js
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {
    return 0.5 - Math.random()
});
// 40,10,5,100,1,25  随机生成排序
// 5,40,100,25,1,10
```

### 5、sort() 查找最高/最低数组值

升序排序

``` js
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {
    return a - b
});
// 现在 points[0] 包含最低值
// 而 points[points.length-1] 包含最高值
```

降序排序

``` js
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {
    return b - a
});
// 现在 points[0] 包含最高值
// 而 points[points.length-1] 包含最低值
```

### 6、Math.max.apply() 查找最高数组值

apply() 第二个参数须是数组，与 ` Math.max ` 相结合使用。

`Math.max.apply([1, 2, 3]) ` 等于 ` Math.max(1, 2, 3) ` .

``` js
var points = [40, 100, 1, 5, 25, 10];
var a = Math.max.apply(Math, points)
var a = Math.max.apply(null, points) // null 也可以
console.log(a); // 100
```

### 7、Math.min.apply() 查找最低数组值

`Math.max.apply([1, 2, 3]) ` 等于 ` Math.max(1, 2, 3) ` 。

``` js
var points = [40, 100, 1, 5, 25, 10];
var a = Math.min.apply(Math, points)
console.log(a); // 1
```

![20191213144049](http://mdimg.95408.com/20191213144049.png)

![](http://mdimg.95408.com/201912130047_162.png?imageView2/2/w/1200/h/1200)

以上。

