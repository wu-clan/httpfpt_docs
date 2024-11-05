## ❓ 添加日志

日志内容需要手动写入, 详细示例 demo 中几乎都有体现, 请自行查看或补充

## ❓ 测试报告生成

- html：自动生成，检查 run 参数是否开启 html 报告创建, 默认开启

- yaml：自动生成，它目前仅用于测试结果统计

- allure：自动生成，默认开启

## ❓ 调试 yaml 数据

在 `run()` 方法中，有一个 `pydantic_verify` 参数，它的作用是在运行前对所有 yaml 数据结构进行快速校验，如果检验异常，则会抛出异常，如果看不懂
pydantic 错误信息，建议设置 `pydantic_verify=False`

## ❓ 调试用例

你只需在 `run()` 方法中添加指定测试路径参数，E.g. `run(case_path='test_demo.py::test_demo')`

注意：由于数据驱动，它不能单独指定某条用例数据，最简单的方式是，注释 yaml 测试数据或使用第三方接口工具进行接口调试

## ❓ 添加运行参数

在 `run()` 方法中，支持任意 *args 和 **kwargs 参数，它们会被转化为 pytest 命令行参数，请遵循 pytest 运行参数规范

注意：使用键值形式入参时，如果键值与预设参数重复，将覆盖预设参数

## ❔ 其他问题

请确保你已经完全阅读了本文档所有内容，如仍有问题，请创建 ISSUES 或加入 Telegram 社区咨询

- [GitHub new issues](https://github.com/wu-clan/httpfpt/issues)
