## 测试用例数据说明

### 数据结构展示

这只是一个相对比较完整的模板，参数细节请查看[参数描述](/case_data/params_desc.md)

```yaml
config:
  allure:
    epic:
    feature:
    story:
    severity:
  request:
    env:
    headers:
    timeout:
    verify:
    redirects:
    proxies:
      http:
      https:
  module:

test_steps:
  - name:
    case_id:
    description:
    is_run:
    request:
      method:
      url:
      params:
      headers:
      body_type:
      body:
      files:
    setup:
      testcase:
        - case_id:
          key:
          jsonpath:
        - event_query_001
      sql:
        - key:
          type:
          sql:
          jsonpath:
        - select * from xxx where xxx=xxx
      hooks:
      wait_time:
    teardown:
      sql:
      hooks:
      extract:
        - key:
          type:
          jsonpath:
      assert:
        - check:
          value:
          type:
          jsonpath:
        - assert 200 = pm.response.get('status_code')
        - check:
          value:
          type:
          sql:
          jsonpath:
      wait_time:
```
