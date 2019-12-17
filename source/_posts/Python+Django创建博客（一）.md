---
title: Python+Django创建博客（一）：创建环境，建立项目
fenlei: Python
---

## 1、虚拟环境

### 1.1、安装虚拟环境

```
(sudo) pip install virtualenv
(sudo) pip install virtualenvwrapper
```



### 1.2、创建虚拟环境

```
mkvirtualenv -p python3 py3_blog
```

如下：

```
yuan@ubuntu:~$ mkvirtualenv -p python3 py3_myblog
Running virtualenv with interpreter /usr/bin/python3
Already using interpreter /usr/bin/python3
Using base prefix '/usr'
New python executable in /home/yuan/.virtualenvs/py3_myblog/bin/python3
Also creating executable in /home/yuan/.virtualenvs/py3_myblog/bin/python
Installing setuptools, pip, wheel...
done.
virtualenvwrapper.user_scripts creating /home/yuan/.virtualenvs/py3_myblog/bin/predeactivate
virtualenvwrapper.user_scripts creating /home/yuan/.virtualenvs/py3_myblog/bin/postdeactivate
virtualenvwrapper.user_scripts creating /home/yuan/.virtualenvs/py3_myblog/bin/preactivate
virtualenvwrapper.user_scripts creating /home/yuan/.virtualenvs/py3_myblog/bin/postactivate
virtualenvwrapper.user_scripts creating /home/yuan/.virtualenvs/py3_myblog/bin/get_env_details
```

此时，创建了一个新的虚拟环境`py3_blog`，

```
win地址：C:\Users\yuan\Envs\py3_blog
Linux地址：~/.virtualenvs/py3_blog
```



### 1.3、虚拟环境操作命令

查看已经安装的虚拟环境：

```
workon 两次tab键
```

使用/进入虚拟环境：进入虚拟环境后，会在命令行前缀上加上（py3_blog）

```
workon py3_blog
```

退出虚拟环境：

```
deactivate
```

删除虚拟环境：(需要先即出虚拟环境)

```
先退出：deactivate
再删除：rmvirtualenv py3_blog
```



## 2、创建 Django 项目

### 2.1、安装 Django

安装所需要的其他安装包。

首先，你需要保证进入到了新建的虚拟环境：`py3_myblog`

```
workon py3_myblog
```

不要使用sudo命令 (==1.8.2可省去，就会直接安装最新版Django)

```
pip install django==1.8.2
```

此时，Django安装在了虚拟环境py_django下，

```
win地址：C:\Users\yuan\Envs\py_django\Lib\site-packages
Linux地址：~/.virtualenvs/py3_django/lib/python3.5/site-packages
```



### 2.2、创建 Django 项目及应用

创建一个项目：` MyBlog `

```
# 进入桌面目录
(py3_myblog) yuan@ubuntu:~$ cd /home/yuan/Desktop/

# 创建Django项目
(py3_myblog) yuan@ubuntu:~/Desktop$ django-admin startproject MyBlog
```

建立两个应用：` user、article `

```
# 进入MyBlog项目文件夹
(py3_myblog) yuan@ubuntu:~$ cd /MyBlog/

# 创建两个应用：user、article
(py3_myblog) yuan@ubuntu:~/Desktop/MyBlog$ python manage.py startapp user
(py3_myblog) yuan@ubuntu:~/Desktop/MyBlog$ python manage.py startapp article
```

在根目录下创建一个 `apps`文件夹；

将`user、article`两个文件夹放入 `apps`文件夹当中；



## 3、使用 PyCharm 

启动 PyCharm，打开项目。

文件——打开——选择 `MyBlog`文件夹：

![](http://mdimg.95408.com/201910292320_451.png?imageView2/2/w/1200/h/1200)

在pycharm中使用创建的虚拟环境 `py3_myblog`。

文件——设置——项目：MyBlog——Project Interpreter：

![](http://mdimg.95408.com/201910292325_435.png?imageView2/2/w/1200/h/1200)

此时，我们看到的文件结构如下：

![](http://mdimg.95408.com/201910292318_764.png?imageView2/2/w/1200/h/1200)



## 4、运行服务器

运行服务器：

```
python manage.py runserver
```

![](http://mdimg.95408.com/201910292333_888.png?imageView2/2/w/1200/h/1200)

打开浏览器，输入地址：

```
http://127.0.0.1:8000/
```

![](http://mdimg.95408.com/201910292334_580.png?imageView2/2/w/1200/h/1200)









创建数据库：

```mysql
create database myblog charset=utf8;
```

![](http://mdimg.95408.com/201910292229_259.png?imageView2/2/w/1200/h/1200)





































