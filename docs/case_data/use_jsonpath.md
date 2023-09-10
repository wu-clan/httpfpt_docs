## 了解 JsonPath

官方文档：

- [XPath for JSON](https://goessner.net/articles/JsonPath/)
- [JsonPath WG](https://datatracker.ietf.org/doc/html/draft-ietf-jsonpath-base-13)

框架内部依赖：

- [python-jsonpath](https://github.com/jg-rp/python-jsonpath)
- [语法实现](https://jg-rp.github.io/python-jsonpath/syntax/)
- [语法差异](https://jg-rp.github.io/python-jsonpath/syntax/#notable-differences)

辅助工具：

- 非完全标准[在线验证](https://www.jsonpath.cn/)

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

对于接口请求， jsonpath 取值源等同于 response 数据集

对于 SQL 语句， jsonpath 取值源取决于 sql 执行结果

详情：[jsonpath 断言](/case_data/params_desc.md#assert)
