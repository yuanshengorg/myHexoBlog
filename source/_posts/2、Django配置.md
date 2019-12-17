



## setting.py

INSTALLED_APPS

```python
INSTALLED_APPS = (
    ……
    'Book',  # 安装Book应用
)
```

DATABASES

```python
# 数据库配置
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'bookdb24',
        'HOST': 'LOCALHOST',
        'PORT': '3306',
        'USER': 'root',
        'PASSWORD': '123456'
    }
}
```

TEMPLATES

```python
TEMPLATES = [
	'DIRS': [os.path.join(BASE_DIR, 'templates')],
]
```

在根目录下建立文件夹：

```python
templates
templates/Book  # 或者分应用建立不同的应用文件夹
```

![1571019165140](D:\Markdown\Python\Django\assets\1571019165140.png)

LANGUAGE_CODE and TIME_ZONE

```python
LANGUAGE_CODE = 'zh-Hans'  # 中文
TIME_ZONE = 'Asia/Shanghai' # 上海时区
```

STATIC_URL

```python
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static')
]
```





## BookManager/init.py

```python
# 配置mysql数据库
import pymysql
pymysql.install_as_MySQLdb()
```





## BookManager/urls.py

```python
urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),

    # http://127.0.0.1:8000/除admin之外的url处理/
    url(r'^', include('Book.urls'))
]
```





## 新建Book/urls.py

```python
from django.conf.urls import url
from Book.views import bookList
# from Book import views  # views.bookList

urlpatterns = [
    # http://127.0.0.1:8000/除admin之外的url处理/
    # http://127.0.0.1:8000/booklist/
    url(r'^booklist/$', bookList)
]
```





## Book/views.py

```python
from django.shortcuts import render
# from Book.models import BookInfo, PeopleInfo


def bookList(request):
    context = {
        'name': 'python'
    }
    return render(request, 'Book/booklist.html', context)
```





## templates/Book/booklist.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>booklist</title>
</head>
<body>
<h1>{{ name }}</h1>
</body>
</html>
```





## 效果

![1571020724649](D:\Markdown\Python\Django\assets\1571020724649.png)

## 注册后台admin

Book/admin.py

```python
from django.contrib import admin
from Book.models import PeopleInfo

# Register your models here.
admin.site.register(PeopleInfo)
```

命令行注册：

```python
python manage.py createsuperuser
输入用户及密码：admin admin
```

Book/setting.py

```python
LANGUAGE_CODE = 'zh-Hans'
TIME_ZONE = 'Asia/Shanghai'
```

![1571122125224](D:\Markdown\Python\Django\assets\1571122125224.png)

Book/models.py   （让后台列表按`name`显示）

```python
class PeopleInfo(models.Model):
    """人物信息模型"""
    
    def __str__(self):
        return self.name
```

Book/admin.py （列表页增加展示）

```python
class PeopleInfoAdmin(admin.ModelAdmin):
    """PeopleInfo模型类的站点管理类"""

    # 设置每页列表数
    list_per_page = 10
    # 在列表正文也加入删除动作
    actions_on_bottom = True
    # actions_on_top = False   # 上面删除
    # 指定展示的字段
    list_display = ['id', 'name', 'gender', 'description', 'isDelete', 'book', 'title']
    # 右侧过滤器 按性别过滤
    list_filter = ['gender']
    # 增加搜索框 按人名查找
    search_fields = ['name']
   

# Register your models here.
admin.site.register(PeopleInfo, PeopleInfoAdmin) # 增加注册PeopleInfoAdmin
```

![1571124739595](D:\Markdown\Python\Django\assets\1571124739595.png)

















