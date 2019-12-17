redis



win版本github下载：https://github.com/ServiceStack/redis-windows/tree/master/downloads

解压至 `c:\redis` ，运行：

```
redis-server redis.windows.conf
指定模式：
redis-cli.exe -h 127.0.0.1 -p 6379 -a 123456
```

可以将c:\redis加入系统环境变量，运行可以简写为：

```
redis-server
```



Django与Celery（win10下）

https://www.jianshu.com/p/f9af57a772ff

Celery3.1.24 兼容python3.7问题

https://blog.csdn.net/hebaojing/article/details/100015886

>   celery3.1.25  celery3.1中的变量asyn，在python3.7中是关键字，直到celery4，没有对变量async改名。换句话说即使celery4与python3.7配合使用，仍然会出现这个问题。
>
>   因此需要将将python降级成python3.6版本

python下的redis版本过高：AttributeError: 'str' object has no attribute 'items'，重装：

```
pip install redis==2.10.6
```

在win10下，可以在同一个文件中完成。







