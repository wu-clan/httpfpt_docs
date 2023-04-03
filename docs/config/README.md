## 参数描述

### project

测试项目配置

- `project` 指定测试项目，详情请查看：[多项目？](/projects/)

### report

测试报告配置

- `title` 测试报告标题
- `tester_name` 测试人员名称

### mysql

MySQL 数据库配置

- `host` 主机 IP
- `port` 端口
- `user` 用户名
- `password` 密码
- `database` 需要连接的数据库名称

### redis

Redis 数据库配置

- `host` 主机 IP
- `port` 端口号
- `password` 密码
- `database` 指定数据库 [0-16]
- `timeout` 连接超时时间

### email

邮件发送配置

- `host_server` 邮件服务器
- `port` 端口号
- `user` 用户名
- `password` 密码（服务密码，非邮箱密码）
- `send_to` 收件人
- `is_ssl` 是否 SSL 验证
- `is_send_report` 是否发送邮件测试报告

### ding_talk

钉钉推送配置

- `webhook` 钉钉机器人 webhook 地址
- `proxies.http` 请求 http 代理 
- `proxies.https` 请求 https 代理
- `is_send_report` 是否发送钉钉测试报告

### lark_talk

飞书推送配置

- `webhook` 飞书机器人 webhook 地址
- `proxies.http` 请求 http 代理 
- `proxies.https` 请求 https 代理
- `is_send_report` 是否发送飞书测试报告
  
### request

全局请求发送基础配置

- `timeout` 请求超时时间
- `verify` 请求验证
- `redirects` 跟随重定向
- `proxies.http` 请求 http 代理 
- `proxies.https` 请求 https 代理
