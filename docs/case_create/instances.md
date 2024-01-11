:::tip
这是一个基础的请求数据实例，包含基础请求必填项，可以直接 copy 此模板作为数据编写基础
:::

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
