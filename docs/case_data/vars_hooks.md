## 变量定义

以下三种变量统称为常规变量

- global: 全局变量，仅在 data 目录下的 `global_vars.yaml` 文件中以键值对形式进行定义
- env: 环境变量，在测试用例依赖的环境文件中以键值对的形式进行定义
- cache: 缓存变量，在同一 `python包` 下运行测试用例时，在系统内存中定义

## 变量存储

- env：在当前测试用例数据所调用的测试环境文件中进行持久化写入，键值不会重复，新值覆盖旧值
- global: 在全局变量文件中进行持久化写入，键值不会重复，新值覆盖旧值
- cache：在同一 `python包` 目录下，写入所有测试用例运行过程的内存中，不会持久化，同一 `python包` 目录下所有测试用例运行结束后自动清除

::: warning
变量持久化写入会冲刷掉手写注释内容
:::

## 变量表达式

::: tip
变量命名规则: `a-zA-Z_`
:::

::: warning
变量表达式要尽可能使用带有大括号的格式，因为没有大括号的变量强制要求前后不能包含任何内容；

在使用过程中，为了方便，往往不写大括号，但是这通常存在一些隐式问题，例如在 yaml 中：`value: ^test` 你会认为变量 `^test` 前后确实没有任何内容，
但是，在 yaml 解析后，变量 `^test` 被解析为 `'^test'`，此时变量前后就多出来个单引号，因此变量就不会被识别到

这种强制规则是为了尽可能避免用例数据中存在与变量名相似的请求体或其他内容被错误识别
:::

- 常规变量：全局可用

  ```text
  ${var} 或 $var
  ```

- 关联测试用例变量：仅对当前单个测试用例可用

  ```text
  ^{var} 或 ^var
  ```
  ```yaml
  # E.g.:
  setup:
    - testcase:
        case_id: event_query_002
        response:
          - key: r_code
            jsonpath: $.json.status
  teardown:
    - assert: assert ^{r_code} == pm.response.get('json').get('status')
  ```

- SQL 专属变量：仅在 SQL 语句中可用

  ```text
  :{var} 或 :var
  ```
  ```yaml
  # E.g.:
  setup:
    - sql:
        key: gtr_ID
        type: cache
        sql: SELECT o.id FROM onetime AS o WHERE name = 'gtr';
        jsonpath: $.id
    - sql: SELECT a.b FROM c WHERE x = ':{gtr_ID}';
  ```

## 变量替换逻辑

::: tip
变量替换逻辑与变量语法密切相关
:::

- 常规变量

  请求数据解析时，会立即自动寻找所有常规变量并立即替换，寻找变量优先级为：cache > env > global，找到变量自动替换数据，未找到抛出异常

- 关联变量

  默认在 cache 中存储关联变量

  如果通过关联用例进行了关联变量设置，在关联测试用例执行后，会立即重新对当前测试用例数据进行变量替换操作（仅处理关联测试用例变量语法）

  ::: warning
  关联变量仅对当前单个测试用例可用，不能与其他测试用例共享（一个测试步骤就相当于一个测试用例），关联变量替换后，将自动清除所有已替换的关联变量；
  虽然此变量不可全局使用，但依然不要与其他变量名进行重复命名
  :::

- SQL 变量

  此变量为特殊变量，仅在 SQL 被执行时才进行变量替换，如果在此之前，进行了 SQL 设置变量，这会很有帮助（比如，你执行了一条插入
  SQL，然后将插入 SQL 新增的 ID 设置为变量，此时，你就可以精准的对插入数据进行额外操作），变量替换时的优先级与常规变量相同

## hook（钩子函数）

仅在 data 目录下的 hooks.py 文件中定义

在测试用例前后置 hook 参数下定义时，只执行代码, 在其他地方使用时, 将执行代码并替换为返回值

- hook：全局可用

  ```text
  ${func()}
  ```
  ```yaml
  # E.g.:
  description: 测试 hook，时间：${current_time()}
  setup:
    - hook: ${current_time()}
  ```
