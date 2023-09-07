## 基础请求数据

这是一个基础的请求数据实例，仅包含基础请求必填项

```yaml
config:
  allure:
    epic: 基础实例
    feature: 基础实例模块
    story: 我是基础
  request:
    env: dev.env
  module: any
  
test_steps:
  - name: 基础
    case_id: case_001
    description: 无
    is_run: True
    request:
      method: get
      url: /api/v1/any
      params: 
      headers: 
      body_type: 
      body: 
      files: 
```
