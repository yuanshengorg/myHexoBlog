---
title: Node.js（7）博客项目
categories: node
tags: Node.js
date: 2019-12-07 00:00
---

### 加密 bcrypt

``` js
python 2. X
npm install - g node - gyp
npm install--global--production windows - build - tools
重启命令行工具
npm install bcrypt
```

**加密：**

``` js
    // 生成随机字符串
    const salt = await bcrypt.genSalt(10);
    // 将原密码加密
    const password = await bcrypt.hash(req.body.password, salt);
    // 将req.body中的password替换成加密后的密码password
    req.body.password = password;
    // res.send(req.body.password) // 生成加密后的密码

    // 将用户信息添加到数据库
    await User.create(req.body);

    // 添加成功后，重定向到用户页/admin/user
    res.redirect('/admin/user');
```

**验证：**

``` js
    // 查询用户集合中此email数据是否存在
    let user = await User.findOne({
        email
    });
    // 如果查询到了用户,再对比密码
    if (user) {
        // 对比密码
        // compare(传递来的明文密码，数据为的加密密码)的对比
        // 返回布尔值
        let isValid = await bcrypt.compare(password, user.password)
        if (isValid) {
            // 登陆成功
            // 重定向到列表页
            res.redirect('/admin/user');
        } else {
            // 密码错误不成功
            res.status(400).render('admin/error', {
                msg: '密码错误'
            });
        }
```

### session

``` js
npm install express - session
```

### 登陆验证 joi

``` js
npm install joi
```

