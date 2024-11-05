::: warning
测试数据支持 Yaml 和 Json 两种文件格式定义，它们是完全兼容的，但是请不要在 Yaml 文件格式内以 Json 格式定义数据！

实例：[test_project / case_data_files](https://github.com/wu-clan/httpfpt/tree/master/httpfpt/data/test_data/test_project)
:::

## 参数说明

参数中的一个 `-` 代表两个空格

必填列中的 `Y / Y` 表示如果父级填写则必须填写

| 参数            |            类型             |  必填   | 说明                                                                                                                          |
|:--------------|:-------------------------:|:-----:|:----------------------------------------------------------------------------------------------------------------------------|
| config        |           dict            |   Y   | 当前数据文件中所有测试用例的"统一配置"，默认应用到当前文件内的所有测试用例                                                                                      |
| - allure      |           dict            |   Y   | allure 测试报告配置                                                                                                               |
| -- epic       |            str            |   Y   | allure epic                                                                                                                 |
| -- feature    |            str            |   Y   | allure feature                                                                                                              |
| -- story      |            str            |   Y   | allure story                                                                                                                |
| -- severity   |        str / null         |   N   | allure severity：severity、critical、normal、minor、trivial                                                                      |
| - request     |           dict            |   Y   | 请求参数                                                                                                                        |
| -- env        |            str            |   N   | 测试环境，位于 core/run_env/ 目录下的文件名，必须以 `.env` 结尾                                                                                 |
| -- headers    |        dict / null        |   N   | 请求头                                                                                                                         |
| -- timeout    |        int / null         |   N   | 请求超时，用于测试用例接口请求超时时长，如果未设置或为空，则默认使用 [core/conf.toml](config.md#🔧-request) 文件中的配置                                            |
| -- verify     |        bool / null        |   N   | 请求验证，用于测试用例接口请求验证，如果未设置或为空，则默认使用 [core/conf.toml](config.md#🔧-request) 文件中的配置                                              |
| -- redirects  |        bool / null        |   N   | 重定向，用于测试用例接口请求重定向，如果未设置或为空，则默认使用 [core/conf.toml](config.md#🔧-request) 文件中的配置                                              |
| -- proxies    |        dict / null        |   N   | 请求代理，用于测试用例接口请求代理，如果未设置或为空，则默认使用 [core/conf.toml](config.md#🔧-request) 文件中的配置                                              |
| --- http      |        str / null         | Y / Y | http 代理                                                                                                                     |
| --- https     |        str / null         | Y / Y | https 代理                                                                                                                    |
| -- retry      |        int / null         |   N   | 接口请求响应异常时的重试次数，如果未设置或为空，则默认使用 [core/conf.toml](config.md#🔧-request) 文件中的配置                                                 |
| - module      |            str            |   Y   | 用例所属模块                                                                                                                      |
| - is_run      |    bool / dict / null     |   N   | [是否执行](#is-run)                                                                                                             |
| - mark        |        list / null        |   N   | pytest mark 标记                                                                                                              |
| test_steps    |        list / dict        |   Y   | 测试步骤，多条测试用例时，务必使用 List\[dict] 格式                                                                                            |
| - name        |            str            |   Y   | 测试用例名称                                                                                                                      |
| - case_id     |            str            |   Y   | 测试用例唯一 id，建议使用蛇形命名法                                                                                                         |
| - description |            str            |   Y   | 测试用例描述                                                                                                                      |
| - is_run      |    bool / dict / null     |   N   | [是否执行](#is-run)                                                                                                             |
| - mark        |    bool / dict / null     |   N   | pytest mark 标记，用于 pytest -m 参数，如果为空，则会应用统一配置中的请求头                                                                           |
| - retry       |        int / null         |   N   | 接口请求响应异常时的重试次数，如果未设置或为空，则默认使用统一配置中的 retry                                                                                   |
| - request     |           dict            |   Y   | 请求参数                                                                                                                        |
| -- method     |            str            |   Y   | 请求方式，必须大写：GET、POST、PUT、DELETE、PATCH                                                                                         |
| -- url        |            str            |   Y   | 请求链接，不包含域名时，域名需在测试环境文件中配置，域名定义方式：`host=` 优先于 `HOST=`；如果是完整链接，将不做任何处理                                                        |
| -- params     |        dict / null        |   N   | 请求/查询参数                                                                                                                     |
| -- headers    |        dict / null        |   N   | 请求头，如果为空，则会应用统一配置中的请求头，如果统一配置中也为空，则根据 `body_type` 自动解析，如果同时设置，则会应用当前请求头                                                     |
| -- cookies    |        dict / null        |   N   | 请求发送时携带的 cookies                                                                                                            |
| -- body_type  |        str / null         |   N   | 请求数据类型，支持：form、x_form、binary、GraphQL、text、js、json、html、xml                                                                  |
| -- body       | str / bytes / dict / null |   N   | 请求体                                                                                                                         |
| -- files      |        dict / null        |   N   | 请求文件上传，类似于在 postman 中使用 form-data 上传文件；需要将 body 中的文件上传参数在此定义，并删除 body 中的文件上传参数，类型为 Dict\[str, str] / Dict\[str, List\[str]] | |
| - setup       |        list / null        |   N   | 请求前置                                                                                                                        |
| -- testcase   |     str / dict / null     |   N   | [前置关联测试用例](#testcase)                                                                                                       |
| -- sql        |     str / dict / null     |   N   | [前置 sql](#sql)                                                                                                              |  |
| -- hook       |        str / null         |   N   | [前置钩子函数](vars_hooks.md#hook-钩子函数)                                                                                           |
| -- wait_time  |        int / null         |   N   | 请求前等待时间，单位：秒                                                                                                                |
| - teardown    |        list / null        |   N   | 请求后置                                                                                                                        |
| -- sql        |     str / dict / null     |   N   | [后置 sql](#sql)                                                                                                              |
| -- hook       |        str / null         |   N   | [后置钩子函数](vars_hooks.md#hook-钩子函数)                                                                                           |
| -- extract    |        dict / null        |   N   | [变量提取](#extract)                                                                                                            |
| -- assert     |     str / dict / null     |   N   | [高级断言](#assert)                                                                                                             |
| -- wait_time  |        int / null         |   N   | 请求后等待时间，单位：秒                                                                                                                |

## 参数附加说明

### is_run

config 和 test_steps 中的 is_run 参数有多种实现方式

⚠️ config 中如果设置此参数，如果条件成立，将跳过执行当前文件下所有测试用例

1. None 值, 默认执行

   ```yaml
   is_run:  # None
   ```

2. bool 类型值, True / False, 是否跳过执行

    ```yaml
    is_run: True  # bool
    ```

3. dict 类型值, skip - reason, 自定义跳过执行原因

    ```yaml
    is_run:
      skip: True  # bool
      reason: 跳过执行原因  # str
    ```

4. dict 类型值, skip_if - reason, 条件为真时跳过执行

    ```yaml
    is_run:
      skip_if: # list
        - ${timeout} == None  # str
        - python 表达式
      reason: 跳过执行原因  # str
    ```

## 请求前后置附加说明

在请求前后置数据定义中，一条数据就相当于一个动作，支持定义多个相同的动作，测试将按照定义顺序依次执行，当动作数量大于 0
时，setup /
teardown 都必须是 List 格式

```yaml
setup:
  - hook: xxx
  - testcase: xxx
  - hook: xxx
  - sql: xxx
teardown:
  - sql: xxx
  - extract: xxx
  - sql: xxx
  - assert: xxx
```

### testcase

setup 中的 testcase 参数支持三种功能

1. 执行关联测试用例

   ```yaml
   - testcase: 测试用例 case_id  # value: str
   ```

   E.g.:

   ```yaml
   - testcase: event_query_001
   ```

2. [关联测试用例变量提取](vars_hooks.md#变量表达式)

   ```yaml
   - testcase:
       case_id: 测试用例 case_id  # str
       response:  # list
         - key: 变量 key  # str
           jsonpath: 值 value, jsonpath 表达式, 数据依赖关联测试用例 response 数据集  # str
   ```

   E.g.:

   ```yaml
   - testcase:
       case_id: event_query_002
       response:
         - key: rcode
           jsonpath: $.status_code
   ```

3. 更新关联测试用例请求数据

   当与 response 参数同时存在时，response 用于变量提取的响应数据集取决于 response 的定义位置，如果在 response 参数前存在
   request 参数，那么此次提取的数据集将来自替换了请求参数后的请求响应数据集，否则，则来自上一个请求的响应数据集...

   ```yaml
   - testcase:
       case_id: 测试用例 case_id  # str
       request: # list
         - value: 要更新的值  # Any
           jsonpath: 需要进行更新或新增值的 jsonpath 表达式，用于数据更新或新增定位，表达式正则：r'^\$\.[a-zA-Z]-(?:\.[a-zA-Z]-)*$'
   ```

### sql

setup / teardown 中的 sql 参数支持两种功能

1. 执行 sql 语句

   ```yaml
   - sql: SELECT * FROM xxx WHERE xxx=xxx  # value: str
   ```

2. 变量提取

   ```yaml
   - sql:
       key: 变量 key  # str
       type: 变量类型：env / global / cache  # str
       sql: 执行 sql 查询  # str
       jsonpath: 值 value, jsonpath 表达式, 数据依赖 sql 查询结果  # str
   ```

   E.g.:

   ```yaml
   - sql:
       key: gtr_ID
       type: cache
       sql: SELECT o.id FROM onetime AS o WHERE name = 'gtr';
       jsonpath: $.id
   ```

### extract

- 变量提取

   ```yaml
   - extract:
       key: 变量 key  # str
       type: 变量类型：env / global / cache  # str
       jsonpath: 值 value, jsonpath 表达式, 数据依赖 response 数据集  # str
   ```

  E.g.:

   ```yaml
   - extract:
       key: test_cache
       type: cache
       jsonpath: $.status_code
   ```

### assert

teardown 中的 assert 参数支持多种实现方式

1. 常规断言：

   与 python assert 的语法格式基本一致，但比较值受约束, 比较值从 [response 数据集](use_jsonpath.md#response-数据集) 进行取值，
   并且以 `pm.response.get('')` 语法开始取值，后面可以继续使用 .get() 方法或其他 python 可执行代码，
   为了避免引号问题，断言脚本内必须使用`英文单引号`处理

   ```yaml
   - assert: assert 预期 条件 pm.response.get('xxx'), '错误说明'  # value: str
   ```

   E.g.:

   ```yaml
   - assert: assert 200 == pm.response.get('status_code')
   - assert: assert 'postId' not in str(pm.response.get('content')), 'No content'
   ```

   ::: details 扩展语法

   dirty-equals 库专属, 不要在断言语句中带有除 dirty_equals 库以外的外部函数，仅支持简易验证操作, 在使用前,
   务必阅读它的官方使用文档：[v0.7.1](https://dirty-equals.helpmanual.io/latest/)

   E.g.:

   ```yaml:no-line-numbers
   - assert: assert pm.response.get('json').get('uuid') == IsUUID, 'UUID 类型错误'
   ```
   :::

2. jsonpath 断言（非常规断言）:

    - [断言类型](assert_type.md)
    - [JsonPath 取值](use_jsonpath.md#jsonpath-取值)
    - [response 数据集](use_jsonpath.md#response-数据集)

   ```yaml
   - assert:
       check: 断言说明 / 错误信息, 为空时，将展示内部定义信息  # str / None
       type: 断言类型  # str
       value: 预期值  # Any
       jsonpath: jsonpath 表达式，用于从 response 数据集取值  # str
   ```

   E.g.:

   ```yaml
   - assert:
       check: 检查接口链接
       type: str_eq
       value: https://api.anonfiles.com/upload
       jsonpath: $.url
   ```

3. sql 断言（非常规断言）:

   ```yaml
   - assert:
       check: 断言说明 / 错误信息, 为空时，将展示内部定义信息  # str / None
       type: 断言类型  # str
       value: 预期值  # Any
       sql: 执行 sql 查询  # str
       jsonpath: jsonpath 表达式，用于从 sql 查询结果取值  # str
   ```

   E.g.:

   ```yaml
   - assert:
       check: 
       type: eq
       value: 8848
       sql: SELECT p.name FROM phone p WHERE material = ‘钛金’;
       jsonpath: $.name
   ```

4. [jsonschema](https://json-schema.org/) 断言（非常规断言）:

   此断言方式会直接验证请求响应结果（接口成功响应时返回的 json 数据）

   ```yaml
   - assert:
       check: 断言说明 / 错误信息  # str / None
       type: jsonschema  # 固定值
       jsonschema: jsonschema 表达式  # dict
   ```

   E.g.:

   ```yaml
   - assert:
       check: null
       type: jsonschema
       jsonschema:
         title: Product
         description: A product from Acme's catalog
         type: object
         properties:
           productId:
             description: The unique identifier for a product
             type: integer
   ```

   jsonschema 表达式以 json 格式编写可能更加直观，但不要在 yaml 文件中以 json 格式定义！

   可以选择直接将整个测试用例数据以 json 文件格式编写！

   ```json
   {
     "assert": {
        "check": null,
        "type": "jsonschema",
        "jsonschema": {
            "title": "Product",
            "description": "A product from Acme's catalog",
            "type": "object",
            "properties": {
                "productId": {
                    "type": "integer",
                    "description": "The unique identifier for a product"
                }
            }
        }
     }
   }
   ```

5. 正则断言（非常规断言）:

    - [response 数据集](use_jsonpath.md#response-数据集)

   ```yaml
   - assert:
       check: 断言说明 / 错误信息  # str / None
       type: re  # 固定值
       pattern: 正则表达式  # str 
       jsonpath: jsonpath 表达式，用于从请求响应取值  # str
   ```
