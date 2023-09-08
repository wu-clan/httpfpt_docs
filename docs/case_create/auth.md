## 授权

配置位于 core 目录下的 auth.yaml 文件中，只需修改配置文件，无需额外操作

- `is_auth`: 是否开启自动授权
- `auth_type`: 授权方式，填写 auth.yaml 文件中认证方式的键值

### Bearer Token

Token 验证，自动添加至每个请求的请求头中

::: warning
如果在请求数据中手动填入了 token，它将被更新为当前 token 值
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
