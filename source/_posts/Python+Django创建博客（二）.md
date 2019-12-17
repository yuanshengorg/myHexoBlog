---
title: Python+Django创建博客（二）：
---



## 1、



MyBlog/setting.py

```python
import sys

# 指定使用apps下的应用，不用在INSTALLED_APPS和urls中输入apps前缀
sys.path.insert(0, os.path.join(BASE_DIR, 'apps'))

# 注册应用
INSTALLED_APPS = (
    'tinymce'  # 富文本编辑器
    'article',  # 博客前台
    'user',  # 博客后台
)

# 增加模板目录
TEMPLATES = [
    {
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
    },
]

# 更换为Mysql数据库
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'dailyfresh',
        'USER': 'root',
        'PASSWORD': '123456',
        'HOST': '192.168.230.1',
        'PORT': 3306,
    }
}

# 本地化
LANGUAGE_CODE = 'zh-Hans'
TIME_ZONE = 'Asia/Shanghai'

# 静态文件目录
STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]

# 富文本编辑器配置
TINYMCE_DEFAULT_CONFIG = {
    'theme': 'advanced',  # 高级主题
    'width': 600,
    'height': 400,
}
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]

# 富文本编辑器配置
TINYMCE_DEFAULT_CONFIG = {
    'theme': 'advanced',  # 高级主题
    'width': 600,
    'height': 400,
}

# 发送邮件配置
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
# smpt服务地址
EMAIL_HOST = 'smtp.163.com'
EMAIL_PORT = 25
# 发送邮件的邮箱
EMAIL_HOST_USER = 'aaa@163.com'
# 在邮箱中设置的客户端授权密码
EMAIL_HOST_PASSWORD = ''
# 收件人看到的发件人
EMAIL_FROM = 'MyBlog<aaa@163.com>'
```







pip install pymysql==0.9.3

pip install celery==3.1.25

install django-tinymce==2.8.0

pip install redis==2.10.6

pip install django-redis==4.10.0

pip install django-tinymce==2.8.0

```
(py3_myblog) yuan@ubuntu:~$ pip list
Package        Version 
-------------- --------
amqp           1.4.9   
anyjson        0.3.3   
billiard       3.3.0.23
celery         3.1.25  
Django         1.8.2   
django-redis   4.10.0  
django-tinymce 2.8.0   
kombu          3.0.37  
pip            19.3.1  
PyMySQL        0.9.3   
pytz           2019.3  
redis          2.10.6  
setuptools     41.4.0  
sqlparse       0.3.0   
wheel          0.33.6 
```









创建后台：`python manage.py createsuperuser`

```
(py3_myblog) yuan@ubuntu:~/Desktop/MyBlog$ python manage.py createsuperuser
Username (leave blank to use 'yuan'): admin
Email address: admin@eryoude.com
Password: 
Password (again): 
Superuser created successfully.
```













