# 用例创建

## 🤖 用例数据创建

1. 使用 [CLI](cli.md) 程序自动导入
2. 根据数据结构和[参数说明](case_data.md#参数说明)
   ，手动编写用例数据文件，基础测试用例数据示例可参阅[数据实例](/instances.md)

## 🤖 测试用例创建

::: warning
在创建基于数据驱动的测试用例前，需优先创建[用例数据](/case_data.md)
:::

1. 通过 [CLI](cli.md) 程序自动生成测试用例，格外注意配置文件 [project](/projects.md) 参数
2. 将运行参数 `testcase_generate` 设置为 `True`，将在测试运行时自动创建
2. 自定义测试用例，当然你可以编写常规~~单元~~测试用例，
   可参阅 [Test Demo](https://github.com/wu-clan/httpfpt/blob/master/httpfpt/testcases/test_project/test_api.py)
