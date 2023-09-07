## jsonpath 取值范围

jsonpath 取值在文档中还会被称为 `response 数据集`，根结构如下，你也可以在源代码的 send_request.py 文件中看到它

```json
{
  "url": "响应地址",
  "status_code": "响应状态码",
  "elapsed": "请求耗时",
  "headers": "响应请求头",
  "cookies": "响应 cookies",
  "json": "响应 json",
  "content": "响应内容",
  "text": "响应文本",
  "stat": {
    "execute_time": "请求执行开始时间"
  }
}
```
