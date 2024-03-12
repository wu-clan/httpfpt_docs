:::tip
测试数据支持 Yaml 和 Json 两种文件格式定义，它们是完全兼容的

以下作为基础的请求数据实例，包含基础请求必填项，可以直接 copy 此模板作为测试数据基础
:::

## Yaml file

```yaml
config:
  allure:
    epic: 一级说明
    feature: 二级说明
    story: 三级说明
  request:
    env: xxx.env
  module: any

test_steps:
  - name: xx
    case_id: xx_001
    description:
    is_run: True
    request:
      method: GET
      url: /test
      params:
      headers:
      body_type:
      body:
      files: 
```

## Json file

```json
{
  "config": {
    "allure": {
      "epic": "一级说明",
      "feature": "二级说明",
      "story": "三级说明"
    },
    "request": {
      "env": "xxx.env"
    },
    "module": "any"
  },
  "test_steps": [
    {
      "name": "xx",
      "case_id": "xx_001",
      "description": null,
      "is_run": true,
      "request": {
        "method": "GET",
        "url": "/test",
        "params": null,
        "headers": null,
        "body_type": null,
        "body": null,
        "files": null
      }
    }
  ]
}
```
