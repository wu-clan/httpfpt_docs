## response 数据集

响应数据集结构如下，你也可以在源代码的 send_request.py 文件中查看它

```json
{
  "url": "响应地址",
  "status_code": "响应状态码",
  "elapsed": "请求耗时",
  "headers": "响应请求头",
  "cookies": "响应 cookies",
  "json": "响应数据 > json 格式",
  "content": "响应数据 > 字节格式",
  "text": "响应数据 > 文本格式",
  "stat": {
    "execute_time": "请求执行开始时间"
  }
}
```

## jsonpath 取值

jsonpath 取值源等同于 response 数据集

- [官方地址](https://github.com/json-path/JsonPath)
- [在线验证](https://www.jsonpath.cn/)
