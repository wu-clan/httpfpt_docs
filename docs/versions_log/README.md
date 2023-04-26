> 目前此框架的变化以发版形式进行记录，你同样可以在 [Gitee](https://gitee.com/wu_cl/automated_api_pytest/releases)
> 或 [Github](https://github.com/wu-clan/automated_api_pytest/releases) 获取完整英文版说明

## v0.0.6a1

- 更新使用文档至 [automatic_api_pytest_docs](https://wu-clan.github.io/automated_api_pytest_docs/)
- 修复测试报告电子邮件附件乱码
- 增加测试数据架构验证
- 更新基于 black 的测试用例自动生成器
- 增加 ruff 支持
- 增加 pre-commit 支持
- 添加 black 支持

## v0.0.5a3

- 更新json断言类型 `not contains` 为 `not_contains`
- 更新日志控制台输出的默认状态为关闭
- 添加 pytest 运行参数控制台打印
- 删除所有对 excel 作为用例数据文件的支持
- 修复用例数据模式模型部分的参数类型，注意它目前没有被定义为非常严格的
- 添加 pydantic 数据验证，目前是可选的
- 修复解析某些可归零参数时缺乏条件判断的问题

## v0.0.5a2

- 增加用例唯一 ID 检测和重复 ID 坐标捕获输出
- 更新请求数据解析规则
- 增加引擎内置 raise_for_status 方法，提前触发请求异常
- 修复头文件类型自动解析没有更新到请求数据的问题
- 升级 pytest==7.2.2，并设置最低版本为 >= 7.0.0

## v0.0.5a1

第一个预览版本
