## 数据结构展示

:::warning
这只是一个相对比较完整的测试用例数据演示，参数细节请查看[参数描述](/case_data/params_desc.md)
:::

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
    retry:
  module:

test_steps:
  - name:
    case_id:
    description:
    is_run:
    retry:
    request:
      method:
      url:
      params:
      headers:
      body_type:
      body:
      files:
    setup:
      - testcase: 
      - testcase:
          case_id:
          key:
          jsonpath:
      - sql: SELECT * FROM xxx WHERE xxx=xxx
      - sql: 
          key:
          type:
          sql:
          jsonpath:
      - hook:
      - wait_time:
    teardown:
      - sql:
      - hooks:
      - extract:
          key:
          type:
          jsonpath:
      - assert: assert 200 = pm.response.get('status_code')
      - assert:
          check:
          value:
          type:
          jsonpath:
      - assert:
          check:
          value:
          type:
          sql:
          jsonpath:
      - wait_time:
```
