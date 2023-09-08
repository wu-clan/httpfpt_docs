## 参数说明

必填列中 `Y / Y` 表示如果父级填写则必须填写

| 参数            |            类型             | 必填    | 说明                                                                       |
|:--------------|:-------------------------:|-------|:-------------------------------------------------------------------------|
| config        |           dict            | Y     | 当前文件中所有测试用例测统一配置                                                         |
| + allure      |           dict            | Y     | allure 测试报告配置                                                            |
| ++ epic       |            str            | Y     | allure epic                                                              |
| ++ feature    |            str            | Y     | allure feature                                                           |
| ++ story      |            str            | Y     | allure story                                                             |
| ++ severity   |        str / null         | N     | allure severity: severity、critical、normal、minor、trivial                  |
| + request     |           dict            | Y     | 请求参数                                                                     |
| ++ env        |            str            | Y     | 测试环境文件名, 位于 core/run_env/ 目录下                                            |
| ++ headers    |        dict / null        | N     | 请求头                                                                      |
| ++ timeout    |        int / null         | N     | 请求超时时长，如果存在且不为空，则应用到当前文件中的所有测试用例，如果不存在或为空，则默认应用 conf.toml 中的配置           |
| ++ verify     |        bool / null        | N     | 请求验证，应用同上                                                                |
| ++ redirects  |        bool / null        | N     | 重定向，应用同上                                                                 |
| ++ proxies    |        dict / null        | N     | 请求代理，应用同上                                                                |
| +++ http      |        str / null         | Y / Y | http 代理                                                                  |
| +++ https     |        str / null         | Y / Y | https 代理                                                                 |
| + module      |            str            | Y     | 用例所属模块, 为后期设计, 暂未特殊使用                                                    |
| test_steps    |        list / dict        | Y     | 测试步骤, 多条测试用例时，必须使用 list 格式                                               |
| + name        |            str            | Y     | 测试用例名称                                                                   |
| + case_id     |            str            | Y     | 测试用例唯一id                                                                 |
| + description |            str            | Y     | 测试用例描述                                                                   |
| + is_run      |    bool / dict / null     | Y     | 跳过执行此测试用例                                                                |
| + request     |           dict            | Y     | 请求参数                                                                     |
| ++ method     |            str            | Y     | 请求方式，不限大小写，支持 get, post, put, delete, patch                              |
| ++ url        |            str            | Y     | 请求链接，不包含域名，域名需在测试环境文件中配置                                                 |
| ++ params     |        dict / null        | Y     | 请求/查询参数                                                                  |
| ++ headers    |        dict / null        | Y     | 请求头，如果为空，则会应用上方配置中的请求头，如果上方也未配置，则不使用请求头                                  |
| ++ body_type  |        str / null         | Y     | 请求数据类型: None、form、x_form、binary、GraphQL、text、js、json、html、xml            |
| ++ body       | str / bytes / dict / null | Y     | 请求体                                                                      |
| ++ files      |        dict / null        | Y     | 请求文件上传                                                                   |
| + setup       |        dict / null        | N     | 请求前置                                                                     |
| ++ testcase   |        list / null        | N     | 前置 testcase，当执行测试用例时，格式应为 List\[str]，当设置当前测试执行过程中的缓存变量时，格式应为 List\[dict] |
| ++ sql        |        list / null        | N     | 前置 sql，当为执行 sql 时，格式为 List\[str]，当为设置变量时，格式为 List\[dict]                 |  |
| ++ hooks      |        list / null        | N     | 前置函数，调用钩子函数，格式为 List\[str]                                               |
| ++ wait_time  |        int / null         | N     | 请求前等待时间                                                                  |
| + teardown    |        dict / null        | N     | 请求后置                                                                     |
| ++ sql        |        list / null        | N     | 后置 sql，同前置                                                               |
| ++ hooks      |        list / null        | N     | 后置函数，同前置                                                                 |
| ++ extract    |        list / null        | N     | 变量提取, 格式为 List\[dict]                                                    |
| ++ assert     |     str / list / null     | N     | 断言                                                                       |
| ++ wait_time  |        int / null         | N     | 请求后等待时间                                                                  |

## 参数附加说明

### is_run

test_steps 中的 is_run 参数多种实现方式

1. None 值, 默认执行

   ```yaml
   is_run:  # None
   ```

2. bool 类型值, True / False, 是否跳过执行

    ```yaml
    is_run: True  # bool
    ```

3. dict 类型值, skip + reason, 自定义跳过执行原因

    ```yaml
    is_run:
      skip: True  # bool
      reason: 跳过执行原因  # str
    ```

4. dict 类型值, skip_if + reason, 条件为真时跳过执行

    ```yaml
    is_run:
      skip_if:
        - ${timeout} == None  # str
        - python 表达式
      reason: 跳过执行原因  # str
    ```

### testcase

setup 中的 testcase 参数支持两种功能

1. 执行关联测试用例

    ```yaml
    testcase:
      - event_query_001  # str
      - 测试用例 case_id
    ```

2. 设置当前测试用例执行前的缓存变量, 且仅供当前测试用例使用

    ```yaml
    testcase:
      - case_id: 测试用例 case_id  # str
        key: 变量 key  # str
        jsonpath: 值 value, jsonpath 表达式, 数据依赖关联测试用例 response 数据集  # str
    ```

### sql

setup / teardown 中的 sql 参数支持两种功能

1. 执行 sql 语句

    ```yaml
    sql:
      - select * from xxx where xxx=xxx  # str
      - select ...
    ```

2. 变量提取

    ```yaml
    sql:
      - key: 变量 key  # str
        type: 变量类型：env / global / cache  # str
        sql: 执行 sql 查询  # str
        jsonpath: 值 value, jsonpath 表达式, 数据依赖 sql 查询结果  # str
    ```

### extract

teardown 中的 extract 参数支持一种功能

- 变量提取

    ```yaml
    extract:
      - key: 变量 key  # str
        type: 变量类型：env / global / cache  # str
        jsonpath: 值 value, jsonpath 表达式, 数据依赖 response 数据集  # str
    ```

### assert

teardown 中的 assert 参数多种实现方式

1. 常规断言：

   与 python assert 的语法格式基本一致，但比较值受约束, 比较值从 [response 数据集](/case_data/use_jsonpath.md) 进行取值，
   并且以 pm.response.get('') 开始取值，后面可以继续使用 .get() 方法或其他 python 可执行代码，
   **为了避免引号问题，断言脚本请使用`英文单引号`处理**

    ```yaml
    assert: assert xxx 条件 pm.response.get('xxx'), '错误说明'  # str
    ```

    ```yaml
    assert:
      - assert xxx 条件 pm.response.get('xxx')  # str
      - assert xxx 条件 pm.response.get('xxx').get('xxx'), '错误说明'
    ```

   ::: details 扩展语法
   
   dirty-equals 库专属, 请不要在断言语句中带有除 dirty_equals 库以外的外部函数，仅支持简易验证操作, 使用前,
   请阅读它的官方使用文档：[v0.6.0](https://dirty-equals.helpmanual.io/0.6/)
   
   E.g.:
   
   ```yaml:no-line-numbers
   assert: assert pm.response.get('json').get('uuid') == IsUUID, '错误说明'  # str
   ```
   :::

2. jsonpath 断言:
   
   查看断言类型说明: [type](/case_data/assert_type.md)

   ```yaml
   assert:
     - check: 断言说明 / 错误信息, 为空时，将展示内部定义信息  # str / None
       value: 比较值  # Any
       type: 断言类型  # str
       jsonpath: jsonpath 表达式, 数据依赖用例的请求返回的数据集  # str
   ```

3. sql 断言:

   ```yaml
   assert:
     - check: 断言说明 / 错误信息, 为空时，将展示内部定义信息  # str / None
       value: 比较值  # Any
       type: 断言类型  # str
       sql: 执行 sql 查询  # str
       jsonpath: jsonpath 表达式, 数据依赖 sql 查询结果  # str
   ```
