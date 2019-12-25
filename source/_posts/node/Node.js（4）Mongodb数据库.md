---
title: Node.js（4）Mongodb数据库
categories: node
tags: Mongodb
date: 2019-12-04 00:00
---

## MongoDB

### 常用命令

**下载：**

> 下载地址：https://www.mongodb.com/download-center/community

**系统环境变量：**

> 将MongoDB的路径 `C:\Program Files\MongoDB\Server\4.1\bin` 加入系统环境变量。

**启动/停止：**

> 启动： `net start mongodb` 
>
> 停止： `net stop mongodb` 
>
> 注意：以管理员身份运行命令提示行

**导入数据：**

> mongoimport –d 数据库名称 –c 集合名称 –file 要导入的数据文件 (注意：是 - - file)
>
> mongoimport - d playground - c users --file./ user.json

**其他：**

> 创建的数据库会自动加 `s` ；
>
> `const User = mongoose.model('User', userSchema);` 数据库中的集合名称实际为 `users` ；
>
> [使用Mongoose查询数据库一直为空数组？](https://www.jianshu.com/p/775088bb8f92)

###  MongoDB Compass 可视化

![](http://mdimg.95408.com/201912202251_415.png)

### 数据库、集合、文档、字段

在一个数据库软件中可以包含多个数据仓库，在每个数据仓库中可以包含多个数据集合，每个数据集合中可以包含多条文档（具体的数据）。

|      **术语**      |                    **解释说明**                    |
| :----------------: | :------------------------------------------------: |
| database    数据库 |       mongoDB数据库软件中可以建立多个数据库        |
| collection    集合 |    一组数据的集合，可以理解为JavaScript中的数组    |
|  document    文档  |    一条具体的数据，可以理解为JavaScript中的对象    |
|   field    字段    | 文档中的属性名称，可以理解为JavaScript中的对象属性 |

## Node.js与MongoDB

使用Node.js操作MongoDB数据库。

### Mongoose模块

*   使用Node.js操作MongoDB数据库需要依赖Node.js第三方包mongoose；
*   使用 `npm install mongoose` ；

### Node.js连接MongoDB

*   在MongoDB中**不需要显式创建数据库**，如果正在使用的数据库不存在，**MongoDB**会自动创建；

``` js
// 1.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err))

// D:\doc\1220>node 1.js
// 数据库连接成功
```

## 创建集合

*   一个集合就是一个数据库表单，如excel中的表单；
*   创建集合分为两步，一是对**对集合设定规则**，二是**创建集合**；

``` js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err))
// 创建集合规则
// 返回构造函数
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});
// 使用集合规则创建集合
// 创建的集合名为：courses
// 参1：集合名称； 参2：集合规则
const Course = mongoose.model('Course', courseSchema);

// 创建集合的文档
const course = new Course({
    name: 'Node.js',
    author: 'JavaScript',
    isPublished: true
})
// 保存，将创建的文档插入到数据库
course.save();
```

### 创建文档

创建文档实际就是向集合中插入数据。

*   只创建了集合，数据库并没有自动创建；
*   只有创建了一个文档，并将文件插入到集合中，集合才会自动创建；

![Compass查看数据](http://mdimg.95408.com/201912202254_525.png)

上一个代码中展示了一种创建数据的方式，以下是另外一种：

``` js
// 创建集合
const Course = mongoose.model('Course', courseSchema);

// 向集合中插入数据
Course.create({
    'name': 'Django',
    'author': 'Python',
    'isPublished': true
}, (err, result) => {
    console.log(err);
    console.log(result);
});
```

![](http://mdimg.95408.com/201912202255_890.png)

也支持异步函数的方式：

``` js
Course.create({
        'name': 'Django',
        'author': 'Python',
        'isPublished': true
    })
    .then(result => {
        console.log(result);
    })
```

### 导入数据

``` js
mongoimport - d playground - c users--file. / user.json
```

![图片错误：应是users](http://mdimg.95408.com/201912202255_2.png)

### mongoose验证

在创建集合规则时，可以设置当前字段的验证规则，验证失败就则输入插入失败；

获取错误信息：error.errors['字段名称'].message

*   required: true   必传字段
*   minlength：3   字符串最小长度
*   maxlength: 20   字符串最大长度
*   min: 2   数值最小为2
*   max: 100   数值最大为100
*   enum: ['html'**, ** 'css'**, ** 'javascript'**, ** 'node.js']
*   trim: true   去除字符串两边的空格
*   validate:   自定义验证器
*   default:   默认值

``` js
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        // 必选字段
        required: [true, '请传入文章标题'],
        // 字符串的最小长度
        minlength: [2, '文章长度不能小于2'],
        // 字符串的最大长度
        maxlength: [5, '文章长度最大不能超过5'],
        // 去除字符串两边的空格
        trim: true
    },
    age: {
        type: Number,
        // 数字的最小范围
        min: 18,
        // 数字的最大范围
        max: 100
    },
    publishDate: {
        type: Date,
        // 默认值
        default: Date.now
    },
    category: {
        type: String,
        // 枚举 列举出当前字段可以拥有的值
        enum: {
            values: ['html', 'css', 'javascript', 'node.js'],
            message: '分类名称要在一定的范围内才可以'
        }
    },
    author: {
        type: String,
        validate: {
            validator: v => {
                // 返回布尔值
                // true 验证成功
                // false 验证失败
                // v 要验证的值
                return v && v.length > 4
            },
            // 自定义错误信息
            message: '传入的值不符合验证规则'
        }
    }
});

const Post = mongoose.model('Post', postSchema);

Post.create({
        title: 'aa',
        age: 60,
        category: 'java',
        author: 'bd'
    })
    .then(result => console.log(result))
    .catch(error => {
        // 获取错误信息对象
        const err = error.errors;
        // 循环错误信息对象
        for (var attr in err) {
            // 将错误信息打印到控制台中
            console.log(err[attr]['message']);
        }
    })
```

### 集合关联

通常不同集合的数据之间是有关系的，例如文章信息和用户信息存储在不同集合中，但文章是某个用户发表的，要查询文章的所有信息包括发表用户，就需要用到集合关联。

*   使用id对集合进行关联
*   使用populate方法进行关联集合查询

``` js
// 用户集合
const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String
    }
}));
// 文章集合
const Post = mongoose.model('Post', new mongoose.Schema({
    title: {
        type: String
    },
    // 使用ID将文章集合和作者集合进行关联
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}));
//联合查询
Post.find()
    .populate('author')
    .then((err, result) => console.log(result));
```

文章关联到作者：

``` js
// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true
    })
    // 连接成功
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));

// 用户集合规则
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
// 文章集合规则
const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
// 用户集合
const User = mongoose.model('User', userSchema);
// 文章集合
const Post = mongoose.model('Post', postSchema);

// 创建用户
// User.create({name: 'itheima'}).then(result => console.log(result));
// 创建文章
// Post.create({titile: '123', author: '5c0caae2c4e4081c28439791'}).then(result => console.log(result));
Post.find().populate('author').then(result => console.log(result))
```

## 查/改/删

### 查询文档

#### find()

find()不管查询的数据多少，都返回文档（一个数组）；

``` js
//  根据条件查找文档（条件为空则查找所有文档）
Course.find().then(result => console.log(result))
// 返回文档集合
[{
    _id: 5 c0917ed37ec9b03c07cf95f,
    name: '张三',
    email: 'zhangsan@qq.cn‘
}, {
    _id: 5 c09dea28acfb814980ff827,
    name: 'Javascript',
    email: 'zhangsan@qq.cn‘
}]
```

#### findOne()

findOne() 返回单一的对象；

``` js
//  根据条件查找文档
Course.findOne({
            name: 张三 '}).then(result => console.log(result))
            // 返回文档
            {
                _id: 5 c0917ed37ec9b03c07cf95f,
                name: '张三',
                author: 'zhangsan@qq.cn‘
            }
```

#### 查询之前导入的数据

``` js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err))

// 创建集合规则
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String],
});
// 创建集合
const User = mongoose.model('User', userSchema);

// 查询所有
User.find().then(result => console.log(result));
```

#### 查询符号使用

![](http://mdimg.95408.com/201912202359_364.png)

``` js
// 年龄大于20 小于50
User.find({
    age: {
        $gt: 20,
        $lt: 50
    }
}).then(result => console.log(result));

// 爱好在敲代码中的数据
User.find({
    hobbies: {
        $in: ['敲代码']
    }
}).then(result => console.log(result));

// 只查找name email字段的数据 加-表示不显示的字段，_id字段默认显示
User.find().select('name email -_id').then(result => console.log(result));

// 按年龄字段进行排序 加-为降序
User.find().sort('age').then((result) => {
    console.log(result)
});

// skip 跳过2条，limit 限制显示2条
User.find().skip(2).limit(2).then(result => {
    console.log(result)
});
```

### 删除文档

#### findOneAndDelete

*   查找一条文档并删除；
*   返回删除的文档
*   如果查到了多个文档，删除第一条

``` js
// 删除单个
User.findOneAndDelete({
        _id: '5c09f267aeb04b22f8460968'
    })
    .then(result => console.log(result));
// 删除了指定_id的‘王五’的数据
```

#### deleteMany

*   为空时，删除所有！！！很危险！！！
*   返回删除数据条数

``` js
// 删除多个
User.deleteMany({}).then(result => console.log(result))
```

### 更新文档

#### updateOne

``` js
// 更新单个
User.updateOne({
    查询条件
}, {
    要修改的值
}).then(result => console.log(result))
// 将李四这个文档的年龄改成8
User.updateOne({
        'name': '李四'
    }, {
        'age': 8
    })
    .then(result => console.log(result));
```

#### updateMany

*   查询条件为空，更改全部文档数据！！！危险！！！

``` js
// 更新多个
User.updateMany({
    查询条件
}, {
    要更改的值
}).then(result => console.log(result))
// 将所有数据的年龄改成8
User.updateMany({}, {
        'age': 8
    })
    .then(result => console.log(result));
```

