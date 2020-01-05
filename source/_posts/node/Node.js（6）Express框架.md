---
title: Node.js（6）Express框架
categories: node
tags: Node.js
date: 2019-12-06 00:00
---

## Express 框架

Express是一个基于Node平台的web应用开发框架，它提供了一系列的强大特性，帮助你创建各种Web应用。

**下载**：

``` js
npm install express
```

**特性**：

*   提供了方便简洁的路由定义方式
*   对获取HTTP请求参数进行了简化处理
*   对模板引擎支持程度高，方便渲染动态HTML页面
*   提供了中间件机制有效控制HTTP请求
*   有大量第三方中间件对功能进行扩展

### 原生Node.js与Express对比

**路由：**

``` js
 app.on('request', (req, res) => {
     // 获取客户端的请求路径
     let {
         pathname
     } = url.parse(req.url);
     // 对请求路径进行判断 不同的路径地址响应不同的内容
     if (pathname == '/' || pathname == 'index') {
         res.end('欢迎来到首页');
     } else if (pathname == '/list') {
         res.end('欢迎来到列表页页');
     } else if (pathname == '/about') {
         res.end('欢迎来到关于我们页面')
     } else {
         res.end('抱歉, 您访问的页面出游了');
     }
 });

 // Express
 // 当客户端以get方式访问/时
 app.get('/', (req, res) => {
     // 对客户端做出响应
     res.send('Hello Express');
 });
 // 当客户端以post方式访问/add路由时
 app.post('/add', (req, res) => {
     res.send('使用post方式请求了/add路由');
 });
```

**获取请求参数：**

``` js
 app.on('request', (req, res) => {
     // 获取GET参数
     let {
         query
     } = url.parse(req.url, true);
     // 获取POST参数
     let postData = '';
     req.on('data', (chunk) => {
         postData += chunk;
     });
     req.on('end', () => {
         console.log(querystring.parse(postData)
         }));
 });

 // Express
 app.get('/', (req, res) => {
     // 获取GET参数
     console.log(req.query);
 });
 app.post('/', (req, res) => {
     // 获取POST参数
     console.log(req.body);
 })
```

### Express基本使用

``` js
 // 引入Express框架
 const express = require('express');
 // 使用框架创建web服务器
 const app = express();
 // 当客户端以get方式访问/路由时
 app.get('/', (req, res) => {
     // 对客户端做出响应 send方法会根据内容的类型自动设置请求头
     res.send('Hello Express'); // <h2>Hello Express</h2> {say: 'hello'}
 });
 // 程序监听3000端口
 app.listen(3000);
```

不再使用res.end，而是使用res.send方法：

*   send方法会自动检测响应内容的类型
*   自动设置http状态码
*   自动设置响应内容类型及编码

``` js
// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();
app.get('/', (req, res) => {
    res.send('Hello Express');
})
// 监听端口
app.listen(3000);
console.log('网站服务器启动成功：localhost:3000');
```

![Hello Express](http://mdimg.95408.com/201912231402_279.png?null)

## Express中间件

中间件就是一堆方法，可以接收客户端发来的请求、可以对请求做出响应，也可以将请求继续交给下一个中间件继续处理。

比如：通过中间件，确认用户是否登陆，登陆后跳转到个人页；

比如：路由、GET、POST；

![中间件](http://mdimg.95408.com/201912231405_838.png?null)

中间件主要由两部分构成，中间件方法以及请求处理函数。

中间件方法由Express提供，负责拦截请求，请求处理函数由开发人员提供，负责处理请求。

``` js
app.get('请求路径', '处理函数') // 接收并处理get请求
app.post('请求路径', '处理函数') // 接收并处理post请求
```

### next方法

可以针对同一个请求设置多个中间件，对同一个请求进行多次处理。

默认情况下，请求从上到下依次匹配中间件，一旦匹配成功，终止匹配。

可以调用next方法将请求的控制权交给下一个中间件，直到遇到结束请求的中间件。

``` js
app.get('/', (req, res, next) => {
    req.name = 'lisi';
    next();
});
app.get('/', (req, res) => {
    res.send(req.name);
})
// 输出：lisi
```

### use方法

app.use 匹配所有的请求方式，可以直接传入请求处理函数，代表接收所有的请求。

app.use 第一个参数也可以传入请求地址，代表不论什么请求方式，只要是这个请求地址就接收这个请求。

``` js
// 接收所有请求的中间件
app.use((req, res, next) => {
    console.log('请求走了app.use');
    next();
})

// 客户访问/list请求
app.use('/list', (req, res, next) => {
    console.log('请求走了app.use/list');
    next();
})
// 请求走了app.use
// 请求走了app.use / list

// /admin请求
app.get('/amin', (req, res) => {
    res.send('ok')
})
// 请求走了app.use
```

### 中间件应用

**路由保护**

客户端在访问需要登录的页面时，可以先使用中间件判断用户登录状态，用户如果未登录，则拦截请求，直接响应，禁止用户进入需要登录的页面。

``` js
// 设置一个变量，如果为false表示没有登陆
// 如果登陆，使用next，请求继续向下执行
app.use('/admin', (req, res, next) => {
    let isLogin = true;
    if (isLogin) {
        // 如果用户登陆，请求继续向下执行
        next();
    } else {
        res.send('您还没有登陆')
    }
})

// isLogin为true时，才能进入
app.get('/admin', (req, res) => {
    res.send('您已登陆，可以访问后台')
})
```

**网站维护公告**

在所有路由的最上面定义接收所有请求的中间件，直接为客户端做出响应，网站正在维护中。

``` js
// 在最开始调用，并且不加next方法
// 就不能往后执行
app.use((req, res, next) => {
    res.send('网站维护，禁止访问');
})

// 其他页面统统不能访问
app.get('/admin', (req, res) => {
    res.send('后台');
})
app.get('/index', (req, res) => {
    res.send('首页');
})
```

**自定义404页面**

``` js
app.get('/admin', (req, res) => {
    res.send('后台');
})
app.get('/index', (req, res) => {
    res.send('首页');
})

// 前面所有的都存在，执行404
app.use((req, res, next) => {
    // 为客户端响应404状态码及提示信息
    res.status(404).send('404页面');
})
```

![404页面](http://mdimg.95408.com/201912231447_808.png?null)

### 错误处理中间件

``` js
app.get('/index', (req, res) => {
    // 创建一个错误实例：throw抛出错误
    throw new Error('程序发生了XX错误');
    // 如果取消throw错误，正常执行
    // 就不会执行错误处理中间件
    // res.send('正常执行');
})

// 错误处理中间件
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
})
```

![错误处理中间件](http://mdimg.95408.com/201912231458_653.png?null)

``` js
app.get('/index', (req, res, next) => {
    fs.readFile('./file-not-exist.txt', 'utf8', (err, result) => {
        if (err != null) {
            // 错误，通过app.get()中的next传递
            next(err);
        } else {
            // 正常执行，输出值
            res.send(result);
        }
    });
})

// 错误处理中间件
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

// 输出：ENOENT: no such file or directory, open 'D:\doc\1221express\no-file.txt'
```

### 异步函数 捕获错误

在node.js中，异步API的错误信息都是通过回调函数获取的；**异步函数**执行如果发生错误要如何捕获错误呢？

try catch 可以捕获异步函数以及其他同步代码在执行过程中发生的错误，但是不能其他类型的API发生的错误。

``` js
 app.get("/", async (req, res, next) => {
     try {
         await User.find({
             name: '张三'
         })
     } catch (ex) {
         next(ex);
     }
 });
```

读取一个不存在的文件：

``` js
// 引入express框架
const express = require('express');
const fs = require('fs');
const promisify = require('util').promisify;
// 创建网站服务器
const app = express();

app.get('/index', async (req, res, next) => {
    try {
        await readFile('./not-file.js');
    } catch (ex) {
        next(ex);
    }
})

// 错误处理中间件
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

// 输出：readFile is not defined

// 监听端口
app.listen(3000);
console.log('网站服务器启动成功：localhost:3000');
```

![](http://mdimg.95408.com/201912231631_341.png?null)

## Express框架请求处理

### 构建模块化路由

``` js
// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();
// 创建路由对象
const home = express.Router();

// 为路由对象匹配请求路径
app.use('/home', home);
// 创建二级路由
home.get('/index', (req, res) => {
    res.send('欢迎来到博客首页/home/index')
})

// 监听端口
app.listen(3000);
console.log('网站服务器启动成功：localhost:3000');
```

![](http://mdimg.95408.com/201912231647_415.png?null)

创建一个route路由目录，将不同的路由分文件存放：

``` js
route 目录
admin.js
home.js
app.js

// ---------------------------------------

// ./route/admin.js
const express = require('express');
const admin = express.Router();
admin.get('/index', (req, res) => {
    res.send('博客后台首页/admin/index');
})
module.exports = admin;

// ---------------------------------------

// ./route/home.js
const express = require('express');
const home = express.Router();
home.get('/index', (req, res) => {
    res.send('博客前台首页/home/index')
});
module.exports = home;

// ---------------------------------------

// ./app.js
const express = require('express');
const app = express();
const home = require('./route/home');
const admin = require('./route/admin');
app.get('/index', (req, res) => {
    res.send('index')
})
app.use('./home', home);
app.use('./admin', admin);
app.listen(3000);
console.log('localhost:3000');

// 访问：
// http://localhost:3000/home/index :  博客前台首页/home/index
// http://localhost:3000/admin/index : 博客前台首页/home/index
```

### 获取GET参数

Express框架中使用**req.query**即可获取GET参数，框架内部会将GET参数转换为对象并返回。

``` js
const express = require('express');
const app = express();
app.get('/index', (req, res) => {
    // 获取get请求参数
    res.send(req.query);
})
app.listen(3000);
```

![](http://mdimg.95408.com/201912231734_419.png?null)

### 获取POST参数

Express中接收post请求参数需要借助第三方包 body-parser。

Express官方模块；安装：

``` js
npm install body - parser
```

使用：

``` js
// ./post.html
<body>
    <form action = "http://localhost:3000/add" method = "POST" >
        <input type = "text" name = "username" >
        <input type = "password" name = "password" >
        <input type = "submit" >
    </form> 
</body>

// ./app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// 拦截所有请求
// extended: false 方法内部使用querystring模块处理请求参数的格式
// extended: true 方法内部使用第三方模块qs处理请求参数的格式
app.use(bodyParser.urlencoded({
    extended: false
}));
app.post('/add', (req, res) => {
    // 接收post请求参数
    res.send(req.body);
})
app.listen(3000);
```

![获取POST参数](http://mdimg.95408.com/201912231753_382.png?null)

### params路由参数

``` js
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

app.get('/index/:id/:name', (req, res) => {
    //接收post参数
    res.send(req.params);
})
// 请求：http://localhost:3000/index/188/zhangsan
// 响应：{"id":"188","name":"李四"}

app.listen(3000);
```

![](http://mdimg.95408.com/201912231808_219.png?null)

## 静态资源static

通过Express内置的**express.static**可以方便地托管静态文件，例如img、CSS、JavaScript 文件等。

``` js
app.use(express.static('public'));
```

将项目根目录下的public目录的文件，做为静态资源：

``` js
const express = require('express');
const path = require('path');
const app = express();
// 实现静态资源访问功能
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000);
```

此时，我们直接访问： `http://localhost:3000/css/base.css` ；

如果要要前缀 `files` 的话 `http://localhost:3000/files/css/base.css` ：

``` js
// 实现静态资源访问功能
app.use('/files', express.static(path.join(__dirname, 'public')));
app.listen(3000);
```

![](http://mdimg.95408.com/201912231819_717.png?null)

**注意**：

html、art模板文件中的静态资源相对路径，是相对于请求路径的；

模板文件中，外链资源要写绝对路径，就是以 `/` 开关；

``` js
<link rel = "stylesheet" href = "/admin/css/base.css">
```

子模板的相对路径，是相对当前文件；

引入的模板文件，由模板引擎解析，写相对路径；

``` js
{{ include './common/header' }}
```

## 模板引擎express-art-template

安装

``` js
npm install art-template express-art-template
```

为了使 `art-template` 模板引擎能够更好的和Express框架配合，模板引擎官方在原art-template模板引擎的基础上封装了 `express-art-template` 。

``` js
// views 目录
//	/views/index.art 模板文件
// app.js

// ---------------------------------------

// ./app.js
const express = require('express');
const path = require('path');
const app = express();
// engine(模板后缀，模板引擎)
app.engine('art', require('express-art-template'));
// 设置模板文件路径
app.set('views', path.join(__dirname, 'views'));
// 设置模板文件默认后缀
app.set('view engine', 'art');
// 客户端访问/index路由
app.get('/index', (req, res) => {
    // render('index')这里的index就是
    // 引用的./views目录下的模板文件
    // res.render将拼接的模板响应给客户端
    res.render('index', {
        msg: '我是msg的值',
        name: '张三',
        age: '18'
    })
})
app.listen(3000);

// ---------------------------------------

// ./views/index.art
<body > 
    {{msg}} 
    {{name}} 
	{{age}} 
</body>
```

![](http://mdimg.95408.com/201912232016_357.png?null)

## locals对象

当有一些公共数据在每个页面都需要加载，而不希望在每个app.get()中查询，可以定义到 `locals` 中；

``` js
// views 模板目录
//		/views/index.art
//		/views/list.art
// app.js

// ---------------------------------------

// app.js
const express = require('express');
const path = require('path');
const app = express();
app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');
app.locals.users = [{
    name: '张三',
    age: 20
}, {
    name: '李四',
    age: 30
}]
app.get('/index', (req, res) => {
    res.render('index', {
        msg: '首页msg的值'
    })
})
app.get('/list', (req, res) => {
    res.render('list', {
        msg: '列表页msg的值'
    })
})
app.listen(3000);

// ---------------------------------------

// /views/index.art
<body > 
    {{msg}} // 首页msg的值
    <ul> 
        {{each users}} 
			<li > 
				{{ $value.name}} // 张三 20   李四 30
				{{$value.age}} 
			</li> 
		{{/each}} 
	</ul> 
</body>

// ---------------------------------------

// /views/list.art
<body > 
	{{msg}} //列表页msg的值
	<ul >
		{{each users}} 
            <li >
                {{$value.name}} // 张三 20   李四 30
                {{$value.age}} 
            </li>
		{{/each}}
	</ul> 
</body>
```

![](http://mdimg.95408.com/201912232035_11.png?null)

以上。

