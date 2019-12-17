---
title: 自定义 vs code 命令快捷键
categories: 工具
tags: vscode
date: 
---


### 1、光标移动到行尾/行首

当软件自动补全时，我们常常会需要将光标移动到行尾，可以使用 `end` 键，或者自定义一个更方便的键，比如：`Ctrl + ;` 。

| 键   | 命令                             | 我的修改         |
| ---- | -------------------------------- | ---------------- |
| END  | cursorEnd   光标移动到行尾       | /                |
| HOME | cursorHome   光标移动到行首      | Ctrl + Shift + ; |
| 无   | cursorLineEnd   光标移动到行尾   | Ctrl + ;         |
| 无   | cursorLineStart   光标移动到行首 | /                |



### 2、选择当前单词

连续按展开选择，第一次选中当前单词，第二次选择当前行；继续选择当前块；只按一次的话，就是选择当前单词。

| 键                  | 命令     | 我的修改 |
| ------------------- | -------- | -------- |
| Shift + Alt + Right | 展开选择 | Alt + I  |
| Shift + Alt + Left  | 收起选择 | Alt + O  |



### 3、光标移动到下/上一个单词

我们需要将光标跳转到下一个单词或者上一个单词。

| 键           | 命令                                         | 我的修改 |
| ------------ | -------------------------------------------- | -------- |
| Ctrl + Right | cursorWordEndRight   光标移动到右边单词结尾  | Alt + ;  |
| Ctrl + Left  | cursorWordStartLeft   光标移动到左边单词开关 | Alt + L  |



### 4、不使用方向键上下移动

我们要将光标上下移动时，使用上、下按键也是不方便，所以 vim 中使用了 `h j k l` ；

| 键    | 命令                       | 我的修改 |
| ----- | -------------------------- | -------- |
| DOWN  | cursorDown   向下移动光标  | Alt + J  |
| UP    | cursorUp   向上移动光标    | Alt + K  |
| LEFT  | cursorLeft   向左移动光标  | /        |
| RIGTH | cursorRight   向右移动光标 | /        |



![](http://mdimg.95408.com/201912111130_513.png?imageView2/2/w/1200/h/1200)

```
![1575993392487](D:\Markdown\css-js-blog\assets\1575993392487.png)
```



以上。