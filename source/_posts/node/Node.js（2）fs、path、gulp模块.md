---
title: Node.js（2）fs、path、gulp模块
categories: node
tags: Node.js
date: 2019-12-02 00:00
---

## fs 文件操作

``` js
const fs = require('fs');
```

### fs.readFile 读取文件

``` js
fs.readFile('文件路径'，
    '文件编码可选'，
    callback回调函数)；
```

> callback回调函数的第一个值是错误信息，node.js中都是错误优先的回调函数；

``` js
// 调用fs模块
const fs = require('fs');

// 通过fs模块的readFile读取文件内容
fs.readFile('./a.txt', 'utf8', (err, doc) => {
    // 如果读取错误，err包含错误信息
    // 反之，err为空
    // doc是读取的文件
    console.log(err); // 读取正确，err返回null
    console.log(doc);
})
```

### fs.writeFile 写入文件

``` js
fs.writeFile('文件路径’， ‘数据’， callback回调函数)；
```

如果错误，err返回错误信息；反之，err为null

``` js
// 调用fs模块
const fs = require('fs');

// 通过fs模块的writeFile写入内容
fs.writeFile('./b.txt', '要写入b.txt的数据', err => {
    // 如果错误，err返回错误信息
    // 反之，err为null
    // 如果err不为空，打印err信息，return
    if (err != null) {
        console.log(err);
        return;
    }
    // 如果err这空，则证明写入正确
    console.log('数据写入b.txt成功');
})
```

## path 路径模块

进行路径拼接：win\os\lunix的路径符不同，使用路径拼接更安全；

node中的相对路径，是相对于node系统命令工具所在的目录

``` js
// 调用path模块
const path = require('path');

// 使用path模块进行路径拼接
const p = path.join('public', 'halfbamoo', 'src');

console.log(p); // public\halfbamoo\src
```

`__dirname ` 为系统绝对路径；

``` js
const pp = path.join(__dirname, 'public', 'halfbamboo', 'src');

console.log(pp); // D:\doc\1218\public\halfbamboo\src
```

## gulp 模块

基于node.js 平台的前端构建工具

*   html、css、js文件压缩；
*   es6、less语法转换；
*   公共文件的抽离；
*   修改文件浏览器自动刷新；

### 安装gulp

安装： ` npm install gulp ` ，本地安装即可；

安装： ` npm install gulp-cli -g ` ，全局安装gulp命令行工具；

创建： ` gulpfile.js ` 文件写代码；

### gulp 方法

*   gulp.src()：获取任务要处理的文件
*   gulp.dest()：输出文件
*   gulp.task()：建立gulp任务
*   gulp.watch()：监控文件的变化

使用gulp将src/css目录下的文件，复制到dist/css目录下：

> 建立一个固定名称的文件： ` gulpfile.js ` ，敲如下代码，
>
> 此时，会将原/src/css中的文件，复制到/dist/css目录下，如果目标目录存在，会自动创建；

``` js
gulpfile.js:

    // 调用gulp模块
    const gulp = require('gulp');

// 使用gulp.task（任务名称，回调函数）建立任务
gulp.task('first', () => {
    console.log('第一个gulp任务');
    // src 获取要处理的文件
    gulp.src('./src/css/a.css')
        // dest 输出文件地址 要放在pipei当中
        .pipe(gulp.dest('./dist/css'));
})
```

### gulp插件/第三方模块

*   gulp-htmlmin ：html文件压缩
*   gulp-csso ：压缩css
*   gulp-babel ：JavaScript语法转化
*   gulp-less: less语法转化
*   gulp-uglify ：压缩混淆JavaScript
*   gulp-file-include 公共文件包含
*   browsersync 浏览器实时同步

安装：

``` js
npm install gulp - htmlmin
npm install gulp - file - include
npm install gulp - less
npm install gulp - csso
npm install gulp - babel @babel / core @babel / preset - env
// https://www.npmjs.com/package/gulp-babel
npm install gulp - uglify
```

*   gulp-file-include：源代码中公共样式抽离出来后，使用 `  @@include('./common/header.html') ` 引入时，使用 gulp-file-include 模块，可以将引入的内容重新生成到一个完整的html页面当中；

### gulpfile.js 创建任务

压缩html、css、js，处理es6、less语法……

项目根目录下建立 ` gulpfile.js ` 文件；

源文件：src目录；处理后的文件：dict目录；

通过以下代码：我们可以：

*   将所有html \ css \ js 压缩；
*   将 less 语法、es6 语法处理
*   将src目录下的所有文件 **经过处理后** 复制到 dist 文件夹

``` js
// 调用gulp模块
const gulp = require('gulp');
// 调用处理html
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
// 调用处理css less
const less = require('gulp-less');
const csso = require('gulp-csso');
// 调用处理js
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// 压缩html任务
// 1 压缩html 2 抽取html公共代码
gulp.task('htmlmin', () => {
    gulp.src('./src/*.html')
        .pipe(fileinclude())
        // 压缩html代码
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
})

// 压缩css 及处理 less
gulp.task('cssmin', () => {
    gulp.src(['./src/css/*.css', './src/css/*.less'])
        // 处理less
        .pipe(less())
        // 压缩css
        .pipe(csso())
        .pipe(gulp.dest('dist/css'));
})

// 处理es6 及压缩js
gulp.task('jsmin', () => {
    gulp.src('./src/js/*.js')
        // 处理es6语法
        .pipe(babel({
            // 识别当前运行环境，将代码按当前环境转换
            presets: ['@babel/env']
        }))
        // 压缩js代码
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})

// 复制其他不需要处理的夹 img / lib
gulp.task('copy', () => {
    gulp.src('./src/images/*')
        .pipe(gulp.dest('dist/images'));

    gulp.src('./src/lib/**/*')
        .pipe(gulp.dest('dist/lib'));
})

// 构建任务
// gulp.task('default', ['htmlmin', 'cssmin', 'jsmin', 'copy']);

gulp.task('default', gulp.parallel('htmlmin', 'cssmin', 'jsmin', 'copy', function() {
    console.log('任务完成');
}));

// 任务命令：
// gulp default 或者 gulp
```

### gulp3 和 gulp4的区别

> 操作时报错：gulp Task function must be specified。
>
> gulp 版本的原因！

在Gulp 4中需要使用 `gulp.series` 和 `gulp.parallel` ，因为gulp任务现在只有两个参数。

> `gulp.series` ：按照顺序执行
> `gulp.paralle` ：可以并行计算

 

``` js
gulp.task('my-tasks', gulp.series('a', 'b', 'c', function() {
    // Do something after a, b, and c are finished.
}));

gulp.task('build', gulp.parallel('styles', 'scripts', 'images', function() {
    // Build the website.
}));

gulp.task('my-tasks', gulp.series('a', gulp.parallel('styles', 'scripts', 'images'), 'b', 'c', function() {
    // Do something after a, b, and c are finished.
}));
```

## 模块加载机制

### 当模块拥有路径但没有后缀时

``` js
require('./find.js');
require('./find');
```

1.  require方法根据模块路径查找模块，如果是完整路径，直接引入模块。
2.  如果模块后缀省略，**先找同名JS文件再找同名JS文件夹**
3.  如果找到了同名文件夹，找文件夹中的index.js
4.  如果文件夹中没有index.js就会去当前文件夹中的package.json文件中查找main选项中的入口文件
5.  如果找指定的入口文件不存在或者没有指定入口文件就会报错，模块没有被找到

### 当模块没有路径且没有后缀时

``` js
require('find');
```

1.  Node.js会假设它是**系统模块**
2.  Node.js会去node_modules文件夹中
3.  首先看是否有该名字的JS文件
4.  再看是否有该名字的文件夹
5.  如果是文件夹看里面是否有index.js
6.  如果没有index.js查看该文件夹中的package.json中的main选项确定模块入口文件
7.  否则找不到报错

以上。

