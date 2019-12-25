---
title: Node.js（3）web服务器、http、async异步编程
categories: node
tags: Node.js
date: 2019-12-03 00:00
---

## 1. HTTP协议

### 1.1 web 服务器模块 http

*   创建一个服务器对象app，绑定一个端口号：3000；
*   通过后台运行 ` node app.js ` ，就创建了一个web服务器；
*   浏览器请求这个服务器的地址： ` localhost:3000 ` 时，服务器就响应一段数据（ ` res.end ` ）给浏览器；

``` js
// 引用http系统模块
const http = require('http');
// 创建web服务器
const app = http.createServer();
// 当客户端发送请求时启用的事件函数
// req 请求事件  res 响应事件
app.on('request', (req, res) => {
    // 当浏览器请求时，服务器响应内容给浏览器
    res.end('当你在浏览器输入网址请求本web服务器，就会响应这一些文字');
})
app.listen(3000);
// 在node后台输出的文字
console.log('web服务器启动成功，请访问：localhost:3000');
```

Chrome--F12--Network--Headers：请求和响应报文：

**Request 请求报文**

*   浏览器客户端告诉服务器端的事件；
*   能接收的格式，语言；

**Response 响应报文**

*   服务器端对浏览器客户端响应的事情；
*   服务器端响应给客户端具体的数据：html文件

### 1.2 请求报文

请求方式：

*   GET 请求数据
*   POST 发送数据

### 1.3 req.method

req.method 获取请求的方式

浏览器端通过post或get向服务器端发送数据：

``` html
// 表单数据通过post请求发送给localhost:3000服务器
<form method="post" action="http://localhost:3000">
    <input type="submit" name="">
</form>
```

服务器端接收来自浏览器客户端的数据，并响应了一段文字 `res.end` ：

``` js
// 引用http系统模块
const http = require('http');
// 创建web服务器
const app = http.createServer();
// 当客户端发送请求时启用的事件函数
// req 请求事件  res 响应事件
app.on('request', (req, res) => {
    // req.method 获取请求的方式
    console.log(req.method)
    if (req.method == 'POST') {
        res.end('来自浏览器的请求方式为POST');
    } else if (req.method == 'GET') {
        res.end('来自浏览器的请求方式为GET');
    }
})
app.listen(3000);
// 在node后台输出的文字
console.log('web服务器启动成功，请访问：localhost:3000');
```

### 1.4 req.url

req.url 客户端请求的url地址

``` js
// 引用http系统模块
const http = require('http');
// 创建web服务器
const app = http.createServer();
// 当客户端发送请求时启用的事件函数
// req 请求事件  res 响应事件
app.on('request', (req, res) => {
    // req.url 客户端面请求的url地址
    if (req.url == '/index' || req.url == '/') {
        res.end('welcome to index page');
    } else if (req.url == '/list') {
        res.end('welcom to list page');
    } else {
        res.end('404 not found page');
    }
})
app.listen(3000);
// 在node后台输出的文字
console.log('web服务器启动成功，请访问：localhost:3000');
```

### 1.5 req.headers

客户端请求的报文信息

``` js
app.on('request', (req, res) => {
    // 获取请求报文信息中accept中的值
    console.log(req.headers['accept']);
})
```

### 1.6 响应报文

### 1.7 HTTP 响应状态码

*   200
*   404
*   500
*   400

### 1.8 res.writeHead

书写服务器端给客户端响应的数据

``` js
app.on('request', (req, res) => {
    res.writeHead(400);
})
```

![设置状态码为 400 时](http://mdimg.95408.com/web_1576778412.jpg)

设置状态码、文本格式及编码：

``` js
app.on('request', (req, res) => {
    // 设置状态码200和html格式及编码utf8
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });

    // req.url 客户端面请求的url地址
    if (req.url == '/index' || req.url == '/') {
        res.end('欢迎来到index首页！');
    } else {
        res.end('404')
    }
})
```

## 2. HTTP请求和响应

### 2.1 请求参数

客户端向服务器端发送请求时，有时需要携带一些客户信息，客户信息需要通过请求参数的形式传递到服务器端，比如登录操作。

### 2.2 GET请求参数

*   参数被放置在浏览器地址栏中，例如：http://localhost:3000/?name=zhangsan&age=20
*   参数获取需要借助系统模块url
    -   之前我们直接使用了 `req.url` 获得了所有的请求参数，如 `/index?name=zhangsan&qq=123456` ；
    -   如果要得到更方便的对象形式的 `get参数` ，可以使用 `url.parse(req.url, true).query;` ，将get地址解析成对象形式，如 `{ name: 'zhangsan', qq: '123456' }` ；

####  2.2.1 url.parse( ).query

``` js
// 引入系统模块url
const url = require('url');

app.on('request', (req, res) => {
    // 获取请求参数
    console.log(req.url); // /index?name=zhangsan&qq=123455

    // 将请求参数交给url模块进行处理
    // parse(参1：要解析的url地址， 参2：将参数解析成对象形式)
    let params = url.parse(req.url, true).query;

    console.log(params); // { name: 'zhangsan', qq: '123455' }
    console.log(params.name); // params.name获取：zhangsan
    console.log(params.qq); // params.qq获取：123455
})
```

#### 2.2.2 url.parse( ).pathname

`url.parse().pathname` 包含的是url地址的 `/index` 部分，前面通过url的路由没有提取get参数；

``` js
    let query = url.parse(req.url, true).query;
    // query:  { name: 'zhangsan', qq: '123455' }
    let pathname = url.parse(req.url, true).pathname;
    // pathname:  /index
    // 等同于：
    let {
        query,
        pathname
    } = url.parse(req.url, true);
```

#### 2.2.3 get请求响应页面

通过get请求地址响应不同页面

修改去除url中的get参数（原来：if (req.url == '/index')，如果url中有参数就无法识别）

``` js
app.on('request', (req, res) => {
    let {
        query,
        pathname
    } = url.parse(req.url, true);
    // 设置状态码200和html格式及编码utf8
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    // req.url 客户端面请求的url地址
    // 原来：if (req.url == '/index')，如果url中有参数就无法识别
    if (pathname == '/index' || pathname == '/') {
        res.end('欢迎来到index首页！');
    } else if (pathname == '/list') {
        res.end('欢迎来到list页面')
    } else {
        res.end('404')
    }
})
```

![url中带get参数](http://mdimg.95408.com/201912201246_963.png)

### 2.3 POST请求参数

*   参数被放置在请求体中进行传输
*   获取POST参数需要使用data事件和end事件
*   使用querystring

#### 2.3.1 form.html

`form.html` ： html表单通过post参数向服务器传递数据：

``` html
<body>
    <form method="post" action="http://localhost:3000">
        <input type="text" name="usename">
        <input type="text" name="password">
        <input type="submit" name="">
    </form>
</body>
```

#### 2.3.2 提交表单

使用表单提交数据：

![](http://mdimg.95408.com/201912201313_858.png)

#### 2.3.3 app.js

`app.js` ：服务器开启 `nodemon app.js` 后，接收来自form.html传递的post数据：

> `console.log(postParams); ` // usename=zhangsan&password=123456；
>
> `console.log(querystring.parse(postParams));` // { usename: 'zhangsan', password: '123456' }；

``` js
// 引用http系统模块
const http = require('http');
// 处理请求参数模块 post参数字符串转为对象
const querystring = require('querystring')
// 创建web服务器
const app = http.createServer();
// 当客户端发送请求时启用的事件函数
// req 请求事件  res 响应事件
app.on('request', (req, res) => {
    // post请求

    // 请求参数传输有一定的时间
    // post参数是通过事件的方式接收的
    // 请求参数传递时触发data事件
    // 请求参数传输完成时触发end事件
    let postParams = '';
    req.on('data', params => {
        postParams += params;
    })
    req.on('end', () => {
        // postParams 为post请求数据的字符串格式
        console.log(postParams); // usename=zhangsan&password=123456
        // querystring.parse(postParams) 
        // 通过处理后得到了对象形式的post请求数据
        console.log(querystring.parse(postParams));
        // { usename: 'zhangsan', password: '123456' }
    })
})
app.listen(3000);
// 在node后台输出的文字
console.log('web服务器启动成功，请访问：localhost:3000');
```

## 3. 路由

之前，我们在浏览器输入 `localhost:3000/index` ，需要响应到 `index` 页面上的内容；

输入 `localhost:3000/list` ，需要响应到 `list` 上的数据；

> 路由是指客户端请求地址与服务器端程序代码的对应关系。简单的说，就是请求什么响应什么。

![路由](http://mdimg.95408.com/201912201325_932.png)

之前的代码：

``` js
app.on('request', (req, res) => {
    let {
        query,
        pathname
    } = url.parse(req.url, true);

    if (pathname == '/index' || pathname == '/') {
        res.end('index页面数据');
    } else if (pathname == '/list') {
        res.end('list页面数据')
    } else {
        res.end('404')
    }
})
```

以上是简单的路由代码，但没有体现客户端的get、post请求判断；

#### 3.1 判断为get请求的路由

``` js
const http = require('http');
const url = require('url');
const app = http.createServer();

app.on('request', (req, res) => {
    // 获取请求方式,转小写
    const method = req.method.toLowerCase();
    // 获取请求地址
    const pathname = url.parse(req.url).pathname;
    // 响应头设置编码
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    })
    // 判断请求方式是post还是get
    if (method == 'get') {
        // 判断请求url来响应数据
        if (pathname == '/' || pathname == '/index') {
            res.end('欢迎来到首页');
        } else if (pathname == '/list') {
            res.end('欢迎来到列表页');
        } else {
            res.end('没有找到你要的页面')
        }
    } else if (method == 'post') {
        // 请求方式为post时的内容
        // 与get判断基本相同
    }
})

app.listen(3000);
console.log('服务器启动成功');
```

![](http://mdimg.95408.com/201912201346_522.png)

## 4. 静态资源

将客户端浏览器请求的路径，转换为服务器实现静态文件路径：

``` js
const http = require('http');
const url = require('url');
const path = require('path');
const app = http.createServer();

app.on('request', (req, res) => {
    // 响应原始url路径
    // res.end(req.url);
    // 获取请求地址
    const pathname = url.parse(req.url).pathname;
    // 响应pathname路径
    // res.end(pathname);  // /index
    const dirpath = path.join(__dirname, 'public' + pathname);
    // 响应path拼接的绝对路径
    res.end(dirpath); // D:\doc\1218\route\public\index
})

app.listen(3000);
console.log('服务器启动成功');
```

![](http://mdimg.95408.com/201912201407_769.png)

我们通过拼接得到了文件的绝对路径 `d:\doc\1218\route\public\index` ，可以通过 `fs` 模块读取，响应给客户端：

### 4.1 读取静态.html文件

*   客户端发送请求 `localhost:3000/index` ，得到请求路径 `/index` ；
*   服务器端 `path.join()` 拼接出服务器本地绝对地址 `d:\doc\1218\route\public\index` ；
*   在绝对地址下有对应的 `index.html` 文件时，通过 `fs.readFile` 读取后响应给客户端；
*   浏览器就打开了这个 `index.html` 的首页文件；

``` js
const fs = require('fs');

app.on('request', (req, res) => {
    let pathname = url.parse(req.url).pathname;
    let realpath = path.join(__dirname, 'public' + pathname);
    // res.end(realpath);   // d:\doc\1218\route\public\index
    fs.readFile(realpath, (err, result) => {
        // 读取失败响应文字
        if (err != null) {
            res.end('文件读取失败');
            return;
        }
        // 读取成功后，将读取到的index.html文件响应给客户端
        res.end(result);
    })
})
```

![](http://mdimg.95408.com/201912201435_163.png)

### 4.2 请求根目录至首页文件

当客户请求根目录 `localhost:3000` 时，跳转到 `localhost:3000/index` ：

``` js
pathname = pathname == '/' ? '/index' : pathname;
```

### 4.3 指定返回资源的类型 mime

``` js
const mime = require('mime');

app.on('request', (req, res) => {
    let pathname = url.parse(req.url).pathname;
    pathname = pathname == '/' ? '/index' : pathname;
    let realpath = path.join(__dirname, 'public', pathname);

    let type = mime.getType(realpath);

    fs.readFile(realpath, (err, result) => {
        if (err != null) {
            res.end('文件读取失败');
            return;
        }
        // 指定资源返回的类型
        res.writeHead(200, {
            'content-type': type;
        })
        res.end(result);
    })
})
```

![](http://mdimg.95408.com/201912201449_374.png)

## 5. 异步API

### 5.1 同步API 和 异步API

同步API：只有当前API执行完成后，才能继续执行下一个API；

``` js
console.log('1');
console.log('2');
console.log('3');
```

异步API：当前API的执行不会阻塞后续代码的执行；

``` js
console.log('1');
setTimeout(
    () => {
        console.log('3');
    }, 2000);
console.log('2');
```

同步API可以**从返回值中拿到API执行的结果**, 但是异步API是不可以的；

异步API是通过回调函数来完成的。

``` js
// 同步
function sum(n1, n2) {
    return n1 + n2;
}
const result = sum(10, 20); // 30

// 异步
function getMsg() {
    setTimeout(function() {
        return {
            msg: 'Hello Node.js'
        }
    }, 2000);
    // 异步不会等待，直接会在此执行 return undefined
    // 2秒后才后返回msg，但此时值早已拿到，并输出了
}
const msg = getMsg(); // undefined
```

同步API和异步API的执行顺序不同：

同步API从上到下依次执行，前面代码会阻塞后面代码的执行；

``` js
// 同步：
for (var i = 0; i < 100000; i++) {
    console.log(i);
}
console.log('for循环后面的代码');
// 先执行10万次，再输出最后一句话

// 异步：
console.log('代码开始执行');
setTimeout(() => {
    console.log('2秒后执行的代码')
}, 2000);
setTimeout(() => {
    console.log('0秒后执行的代码')
}, 0);
console.log('代码结束执行');
// 输出顺序：
// 代码开始执行
// 代码结束执行
// 0秒后执行的代码
// 2秒后执行的代码
```

### 5.2 Node.js 异步API (回调函数)

我们之前读取文件、服务器请求等都是通过回调函数来实现的；

要得到读取完成后文件的数据，在回调函数中获取；

``` js
fs.readFile('./demo.txt', (err, result) => {
    res.end(result);
});

var app = http.createServer();
app.on('request', (req, res) => {
    res.end(req.url);
});
```

**回调地狱**

如果有多层回调函数，需要一层一层的嵌套，影响代码维护；

### 5.3 Promise

Promise解决Node.js异步编程中回调地狱的问题；

``` js
const fs = require('fs');

function p1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./1.txt', 'utf8', (err, result) => {
            resolve(result);
        })
    })
}

function p2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./2.txt', 'utf8', (err, result) => {
            resolve(result);
        })
    })
}

function p3() {
    return new Promise((resolve, reject) => {
        fs.readFile('./3.txt', 'utf8', (err, result) => {
            resolve(result);
        })
    })
}

p1().then((r1) => {
    console.log(r1);
    return p2();
}).then((result2) => {
    console.log(result2);
    return p3();
}).then((result3) => {
    console.log(result3);
})
```

![](http://mdimg.95408.com/201912201630_672.png)

## 6. 异步函数 async

``` js
const fn = async () => {};
async function fn() {}
```

让我们将异步代码写成同步的形式，让代码不再有回调函数嵌套，使代码变得清晰明了。

``` js
async function fn() {
    throw '错误信息txt';
    return 123;
}
// console.log(fn());   // Promise { 123 }

fn().then(function(data) {
    console.log(data); // 123  
    // return替代了resolve 用then获取
}).catch(function(err) {
    console.log(err); // 错误信息txt  
    // throw替代了reject 用catch获取
})
```

### 6.1 async 关键字

1. 普通函数定义前加async关键字 普通函数变成异步函数
2. 异步函数默认返回promise对象
3. 在异步函数内部使用return关键字进行结果返回 结果会被包裹的promise对象中 return关键字代替了resolve方法
4. 在异步函数内部使用throw关键字抛出程序异常
5. 调用异步函数再链式调用then方法获取异步函数执行结果
6. 调用异步函数再链式调用catch方法获取异步函数执行的错误信息

### 6.2 await 关键字

1. await关键字只能出现在异步函数中
2. await promise await后面只能写promise对象 写其他类型的API是不不可以的
3. await关键字可是暂停异步函数向下执行 直到promise返回结果

``` js
async function p1() {
    return '1.txx';
}
async function p2() {
    return '2.txt';
}
async function p3() {
    return '3.txt';
}
async function run() {
    let r1 = await p1(); // 直接调用p1的return的结果
    let r2 = await p2();
    let r3 = await p3();

    console.log(r1);
    console.log(r2);
    console.log(r3);
}
run();

// D:\doc\1219>node 2.js
// 1.txx
// 2.txt
// 3.txt
```

### 6.3 顺序读取3个文件

*   使用async异步函数的方法按顺序读取3个文件：
*   const readFile = promisify(fs.readFile)   // 调用promisify方法改造了现有的异步API，让其返回promise对象；
*   从而支持异步函数语法；

``` js
const fs = require('fs');
// 改造现有的异步函数api，让其返回promise对象，从而支持异步函数语法
const promisify = require('util').promisify;
// 调用promisify方法改造了现有的异步API，让其返回promise对象
const readFile = promisify(fs.readFile);

async function run() {
    let r1 = await readFile('./1.txt', 'utf8');
    // 通过promisify处理的新reafFile方法，不用写回调函数，直接使用await
    let r2 = await readFile('./2.txt', 'utf8');
    let r3 = await readFile('./3.txt', 'utf8');
    console.log(r1);
    console.log(r2);
    console.log(r3);
}
run();
// D: \doc\1219 > node 2.js
// 1.txt内容
// 2.txt内容
// 3.txt内容
```

以上。

