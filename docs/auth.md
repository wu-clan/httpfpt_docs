:::tip
配置位于 core 目录下的 auth.yaml 文件中，只需修改配置文件，无需额外操作
:::

- `is_auth`: 是否开启自动授权
- `auth_type`: 授权方式，支持以下之一 `['bearer_token', 'bearer_token_custom', 'header_cookie']`

## Bearer Token

JWT 认证，自动添加至每个请求的请求头中

::: warning
如果在请求数据中手动配置了 token，并且打开了自动授权，那么自定义 token 将被更新为当前 token 值
:::

```yaml
bearer_token:
  url: https://api.pity.fun/auth/login
  username: tester
  password: tester
  headers:
    Content-Type: application/json
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36
  token_key: $.data.token
  timeout: 100000
```

- `url`: 获取 token 的登录地址
- `username`: 用户名
- `password`: 密码
- `headers`: 请求头
- `token_key`: jsonpath 表达式，用于从响应中提取 token 值
- `timeout`: 自定义当前 token 超时时间，而非服务器 token 本身超时时间，token 会根据此时间进行缓存, 避免频繁请求

---

## Bearer Token Custom

JWT 认证，自动添加至每个请求的请求头中

```yaml
bearer_token_custom:
  token: xxx
  timeout: 100000
```

- `token`: 设置 token 值，用于自动授权
- `timeout`: 自定义当前 token 超时时间，而非服务器 token 本身超时时间，token 会根据此时间进行缓存, 避免频繁请求

---

## Cookies

Cookie 认证，自动添加到请求头中

```yaml
header_cookie:
  url: xxx
  username: xxx
  password: xxx
  headers:
    Content-Type: application/json
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36
  timeout: 100000
```

- `url`: 获取 token 的登录地址
- `username`: 用户名
- `password`: 密码
- `headers`: 请求头
- `timeout`: 自定义当前 token 超时时间，而非服务器 token 本身超时时间，token 会根据此时间进行缓存, 避免频繁请求

