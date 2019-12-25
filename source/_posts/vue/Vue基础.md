---
title: Vue基础
categories: vue
tags: [js, vue]
date: 
---

## Vue

## Vue 模板语法

* 原生js拼接字符串
* 前端模板引擎（art-template）缺：没有专门提供事件机制
* Vue模板语法

差值表达式
指令
事件绑定
属性绑定
样式绑定
分支循环结构

### 差值表达式 v-cloak

**什么是指令？**

指令的本质就是自定义属性；以 `v-` 开头；

**闪动**：html页面被刷新时，会先显示 `大括号` ，再显示数据；

**v-clack**：先通过样式隐藏内容，然后在内存中进行值的替换，替换完成之后再显示最终的结果；

``` html
<style>
    [v-cloak] {
        display: none;
    }
</style>

<body>
    <div v-cloak> {{msg}} </div>
</body>
```

### 指令

#### 更多指令：

> 官网：[vuejs.org](https://cn.vuejs.org/v2/api/)

**数据绑定指令：**

v-text、v-html、v-pre

#### v-text

没有闪动问题；

``` html
<div v-text='msg'></div>
```

#### v-html

永不用在用户提交的内容上，只适合本网站内部数据；

``` html
<div v-html='msg1'></div>
```

#### v-pre

显示原始信息，路过Vue编译过程

``` html
// 直接显示出{{msg}}这个字符串，而不是msg数据的内容
<div v-pre>
    {{msg}}
</div>
```

#### 数据响应式 和 v-once

数据响应式：数据的变化导致页面内容的变化；

数据绑定：将数据填充到标签中；

v-once：只编译一次，显示内容之后不再有响应式的功能；

#### v-once

如果显示的信息后续不需要再修改，可以使用v-once；可以提高性能；

``` html
<div v-once>
    {{info}} // info数据只编译一次，不能再改
</div>
```

#### v-model 双向数据绑定

数据改变，页面内容改变；

页面内容改变，数据改变；

``` html
<div>{{msg}}</div>
<input type='text' v-model='msg' />
```

### MVVM 设计思想

M	——model

V	——view

VM	——view-model

页面input改变数据，通过**事件监听**DOM Listeners改变数据库Model；

数据通过**数据绑定**Data Bindings传递到View；

### 事件绑定

#### v-on 处理事件

``` html
v-on:click='num++'
@click='num++'
```

点击加1：

``` html
<div id='app'>
    <div>{{num}}</div> // num=1
    <button v-on:click='num++'>点击加1</button>
</div>
```

#### 事件函数调用

事件绑定-参数传递

如果事件直接绑定函数名称，默认会传递事件对象作为事件函数的第一个参数；

如果事件绑定函数调用，那么事件对象必须作为最后一个参数显示传递，名称为：event；

``` html
<div id='app'>
    <div>{{num}}</div> // num=1
    <button @:click='handle'>点击加1</button>
    <button @:click='handle(11, 22, $envnt)'>点击加1</button>
    // 可以传参数，事件对象放在最后一个
</div>

<script>
    var vm = new Vue({
        el: '#app',
        data: {
            num: 0
        },
        methods: {
            handle: function(a, b.event) {
                //this是Vue的实例对象
                console.log(this === vm);
                console.log(a, b);
                console.log(event.target.innerHTML)
                this.num++;
            }
        }
    })
</script>
```

#### 事件修饰符 stop prevent

#### .stop阻止冒泡

``` html
<a v-on:click.stop='handle'>跳转</a>
```

#### .prevent 阻止默认行为

``` html
<a v-on:click.prvevnet='handle'>跳转</a>
```

