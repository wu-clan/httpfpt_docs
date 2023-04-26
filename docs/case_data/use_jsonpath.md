## jsonpath 取值范围

jsonpath 在文档中还会被称为 response 数据集，根结构如下，你也可以在框架的 send_request.py 文件中看到它

```json
{
  "url": "请求连接",
  "status_code": "请求状态码",
  "elapsed": "请求耗时",
  "headers": "请求头",
  "cookies": "请求 cookies",
  "json": "请求返回 json",
  "content": "请求返回内容",
  "text": "请求返回文本",
  "stat": {
    "execute_time": "请求执行时间"
  }
}
```
