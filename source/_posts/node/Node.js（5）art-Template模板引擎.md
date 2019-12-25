---
title: Node.js（5）art-Template模板引擎
categories: node
tags: Node.js
date: 2019-12-05 00:00
---

## 模板引擎

让开发者以更加友好的方式拼接字符串，使项目代码更加清晰、更加易于维护。

![使用模板引擎的写法](http://mdimg.95408.com/201912231155_737.png?null)

### art-template模板引擎

安装：

``` js
npm install art - template
```

使用：

``` js
// 导入模板引擎模块
const template = require('art-template');
// 将特定模板与特定数据进行拼接
const html = template('./views/index.art', {
    data: {
        name: '张三',
        age: 20
    }
});
// 使用：./views/index.art
<
div >
    <
    span > {
        {
            data.name
        }
    } < /span> <
    span > {
        {
            data.age
        }
    } < /span> <
    /div>
```

## 模板语法

### 输出

``` js
 <!-- 标准语法 -->
 <
 h2 > {
         {
             value
         }
     } < /h2> <
     h2 > {
         {
             a ? b : c
         }
     } < /h2> <
     h2 > {
         {
             a + b
         }
     } < /h2>

     <
     !--原始语法 -->
     <
     h2 > < %= value % > < /h2> <
     h2 > < %= a ? b : c % > < /h2> <
     h2 > < %= a + b % > < /h2>
```

### 原文输出

如果数据中携带HTML标签，默认模板引擎不会解析标签，会将其转义后输出。

``` js
<!-- 标准语法 -->
<
h2 > {
        {
            @ value
        }
    } < /h2> <
    !--原始语法 -->
    <
    h2 > < % -value % > < /h2>
```

### 条件判断

``` js
 <!-- 标准语法 --> 
 {
     {
         if 条件
     }
 }...{
     {
         /if}} {
             {
                 if v1
             }
         }...{
             {
                 else if v2
             }
         }...{
             {
                 /if}} <
                 !--原始语法 -->
                     <
                     %
                     if (value) {
                         % > ... < %
                     } % >
                     <
                     %
                 if (v1) {
                     % > ... < %
                 } else if (v2) {
                     % > ... < %
                 } % >
```

### 循环

``` js
<!-- 标准语法 -->
{
    {
        each target
    }
} {
    {
        $index
    }
} {
    {
        $value
    }
} {
    {
        /each}} <
        !--原始语法 -->
            <
            %
            for (var i = 0; i < target.length; i++) {
                % >
                <
                %= i % > < %= target[i] % >
                    <
                    %
            } % >
```

### 子模板

使用子模板可以将网站公共区块(头部、底部)抽离到单独的文件中。

``` js
  <!-- 标准语法 -->
  {
      {
          include './header.art'
      }
  } <
  !--原始语法 -->
      <
      % include('./header.art') % >
```

### 模板继承

使用模板继承可以将网站HTML骨架抽离到单独的文件中，其他页面模板可以继承骨架文件。

``` js
// layout.art文件 
<
html >
    <
    head >
    <
    meta charset = "utf-8" >
    <
    title > HTML骨架模板 < /title> {
        {
            block 'head'
        }
    } {
        {
            /block}} <
            /head> <
            body > {
                    {
                        block 'content'
                    }
                } {
                    {
                        /block}} <
                        /body> <
                        /html>

                        // index.art 文件
                        {
                            {
                                extend './layout.art'
                            }
                        } {
                            {
                                block 'head'
                            }
                        } < link rel = "stylesheet"
                        href = "custom.css" > {
                            {
                                /block}} {
                                    {
                                        block 'content'
                                    }
                                } < p > This is just an awesome page. < /p> {{/block
                            }
                        }
```

### 模板配置

1.  向模板中导入变量 template.defaults.imports.变量名 = 变量值;

2.  设置模板根目录 template.defaults.root = 模板目录

3.  设置模板默认后缀 template.defaults.extname = '.art'

``` js
const template = require('art-template');
const path = require('path');
const dateFormat = require('dateformat');

// 设置模板的根目录
template.defaults.root = path.join(__dirname, 'views');

// 导入模板变量
template.defaults.imports.dateFormat = dateFormat;

// 配置模板的默认后缀
template.defaults.extname = '.html';

const html = template('06.art', {
    time: new Date()
});

console.log(template('07', {}));
console.log(html);
```

## 路由、静态资源模块

### router路由模块

1.  获取路由对象

2.  调用路由对象提供的方法创建路由

3.  启用路由，使路由生效

``` js
const getRouter = require('router')
const router = getRouter();
router.get('/add', (req, res) => {
    res.end('Hello World!')
})
server.on('request', (req, res) => {
    router(req, res)
})
```

### serve-static静态资源访问

实现静态资源访问服务

1.  引入serve-static模块获取创建静态资源服务功能的方法

2.  调用方法创建静态资源服务并指定静态资源服务目录

3.  启用静态资源服务功能

``` js
const serveStatic = require('serve-static')
const serve = serveStatic('public')
server.on('request', () => {
    serve(req, res)
})
server.listen(3000)
```

## 案例

``` html
students 学生信息管理项目
model 模型
connect.js 连接数据库
user.js user 集合规则导出
public 公共资源
css css资源
route 路由
index.js 路由信息
views 模板
index.art 详情页
list.art 列表页
app.js 主文件
```

![学生档案管理](http://mdimg.95408.com/201912231233_615.png?null)

### model/connect.js

``` js
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true
    })
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'))
```

### model/user.js

``` js
const mongoose = require('mongoose');
// 创建学生集合规则
const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 10,
        max: 25
    },
    sex: {
        type: String
    },
    email: String,
    hobbies: [String],
    collage: String,
    enterDate: {
        type: Date,
        default: Date.now
    }
});
// 创建学生信息集合
const Student = mongoose.model('Student', studentsSchema);
// 将学生信息集合进行导出
module.exports = Student;
```

### route/index.js

``` js
const mongoose = require('mongoose');
// 创建学生集合规则
const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 10,
        max: 25
    },
    sex: {
        type: String
    },
    email: String,
    hobbies: [String],
    collage: String,
    enterDate: {
        type: Date,
        default: Date.now
    }
});
// 创建学生信息集合
const Student = mongoose.model('Student', studentsSchema);
// 将学生信息集合进行导出
module.exports = Student;
```

### views/index.art

``` js
const mongoose = require('mongoose');
// 创建学生集合规则
const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 10,
        max: 25
    },
    sex: {
        type: String
    },
    email: String,
    hobbies: [String],
    collage: String,
    enterDate: {
        type: Date,
        default: Date.now
    }
});
// 创建学生信息集合
const Student = mongoose.model('Student', studentsSchema);
// 将学生信息集合进行导出
module.exports = Student;
```

### views/list.art

``` js
< !DOCTYPE html >
    <
    html lang = "en" >
    <
    head >
    <
    meta charset = "UTF-8" >
    <
    title > 学员信息 < /title> <
    link rel = "stylesheet"
href = "./css/list.css" >
    <
    /head> <
    body >
    <
    table >
    <
    caption > 学员信息 < /caption> <
    tr >
    <
    th > 姓名 < /th> <
    th > 年龄 < /th> <
    th > 性别 < /th> <
    th > 邮箱地址 < /th> <
    th > 爱好 < /th> <
    th > 所属学院 < /th> <
    th > 入学时间 < /th> <
    /tr> {
        {
            each students
        }
    } <
    tr >
    <
    th > {
        {
            $value.name
        }
    } < /th> <
    th > {
        {
            $value.age
        }
    } < /th> <
    th > {
        {
            $value.sex == '0' ? '男' : '女'
        }
    } < /th> <
    th > {
        {
            $value.email
        }
    } < /th> <
    th > {
        {
            each $value.hobbies
        }
    } <
    span > {
        {
            $value
        }
    } < /span> {
        {
            /each}} <
            /th> <
            th > {
                    {
                        $value.collage
                    }
                } < /th> <
                th > {
                    {
                        dateformat($value.enterDate, 'yyyy-mm-dd')
                    }
                } < /th> <
                /tr> {
                    {
                        /each}}

                        <
                        /table> <
                        /body> <
                        /html>
```

### app.js

``` js
// 引入http模块
const http = require('http');
// 引入模板引擎
const template = require('art-template');
// 引入path模块
const path = require('path');
// 引入静态资源访问模块
const serveStatic = require('serve-static');
// 引入处理日期的第三方模块
const dateformat = require('dateformat');

const router = require('./route/index');
// 实现静态资源访问服务
const serve = serveStatic(path.join(__dirname, 'public'))

// 配置模板的根目录
template.defaults.root = path.join(__dirname, 'views');
// 处理日期格式的方法
template.defaults.imports.dateformat = dateformat;

// 数据库连接
require('./model/connect');

// 创建网站服务器
const app = http.createServer();
// 当客户端访问服务器端的时候
app.on('request', (req, res) => {
    // 启用路由功能
    router(req, res, () => {})
    // 启用静态资源访问服务功能
    serve(req, res, () => {})
});
// 端口监听
app.listen(80);
console.log('服务器启动成功');
```

以上。

