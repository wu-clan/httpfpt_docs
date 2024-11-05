::: tip 配置文件
/core/conf.toml
:::

## 🔧 project

测试项目配置

- `name`：指定测试项目，详情请查看：[多项目？](/projects)

## 🔧 report

测试报告配置

- `title`： 测试报告标题
- `tester_name`： 测试人员名称

## 🔧 mysql

MySQL 数据库配置

- `host`： 主机 IP
- `port`： 端口
- `user`： 用户名
- `password`： 密码
- `database`： 需要连接的数据库名称

## 🔧 redis

Redis 数据库配置

- `host`： 主机 IP
- `port`： 端口号
- `password`： 密码
- `database`： 指定数据库 [0-16]
- `timeout`： 连接超时时间

## 🔧 email

邮件发送配置

- `host`： 邮件服务器
- `port`： 端口号
- `user`： 用户名
- `password`： 密码（服务密码，非邮箱密码）
- `receiver`： 收件人
- `ssl`： 是否 SSL 验证
- `send`： 是否发送邮件测试报告，默认关闭

## 🔧 dingding

钉钉推送配置

- `webhook`： 钉钉机器人 webhook 地址
- `proxies.http`： 请求 http 代理
- `proxies.https`： 请求 https 代理
- `send`： 是否发送钉钉测试报告，默认关闭

## 🔧 feishu

飞书推送配置

- `webhook`： 飞书机器人 webhook 地址
- `proxies.http`： 请求 http 代理
- `proxies.https`： 请求 https 代理
- `send`： 是否发送飞书测试报告，默认关闭

## 🔧 wechat

企业微信推送配置

- `webhook`： 企微机器人 webhook 地址
- `proxies.http`： 请求 http 代理
- `proxies.https`： 请求 https 代理
- `send`： 是否发送企微测试报告，默认关闭

## 🔧 request

请求发送默认基础配置

- `global_env`：全局统一测试环境，默认为空字符串
- `timeout`： 请求超时时间，默认 10 s
- `verify`： 请求验证，默认关闭
- `redirects`： 跟随重定向，默认开启
- `proxies.http`： 请求 http 代理
- `proxies.https`： 请求 https 代理
- `retry`： 请求响应异常重试，默认 3 次

::: warning
`global_env`: 位于 core/run_env/ 目录下的文件名，必须以 `.env` 结尾，如果使用此配置，
将覆盖所有测试用例数据中的 `env` 配置，这有助于统一全局测试环境；
:::
