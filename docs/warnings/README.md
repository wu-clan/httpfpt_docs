## ⚠️ use_pydantic_verify

在自动生成的测试用例中，请注意 `get_request_data()` 方法中的 `use_pydantic_verify`
参数的使用，如果你的测试数据仅仅是简单的测试验证，并不包含完整的测试数据结构，务必将它设置为 `False`,
你也可以将此参数删除，此功能主要用于用例数据架构验证，它是完整的，会直接验证完整数据架构，如果将你的简单测试数据启用它，那么它将直接导致运行中止并报错，下面是一个示例：

only_skip.py

```python {3}
request_data = get_request_data(
    file_data=read_yaml(filename=os.sep.join([PROJECT_NAME, 'only_skip.yml'])),
    use_pydantic_verify=False
)
```

only_skip.yml

```yaml
test_steps:
  # 因为只是测试跳过用例，所以没写其他内容
  - name: 跳过
    case_id: event_create_004
    description: 测试跳过
    is_run: False
```

如果你不想在获取测试数据时来进行请求数据架构验证，你还可以通过 CLI 程序来验证它，
详情请查看 [CLI](/cli/) 程序使用帮助

::: warning
如果在 run.py 文件的 main 方法中启用了 `get_all_testcase_data(pydantic_verify=True)`
，此参数配置将没有意义，你必须使用完整 [基础请求数据](/case_create/instances.md) 架构的测试数据，并且建议设置此参数为 False
或直接删除此参数配置

此参数是非必须的，它的作用是只是为了能提前快速验证数据架构，并且目前它不是完全严格的，当设置为 False 时，
并不会影响数据参数验证，因为在此之后，会有更加完善，更加严格的数据参数校验，你可以放心的设置为 False 或删除它
:::
