# 🚀 如何运行测试

## Pycharm (推荐)

在 run.py 文件内部，鼠标右键执行即可

## 命令行

请确保当前使用的 python 环境和当前框架一致，如果遇到路径问题，
请参阅：[通用解决方法](https://www.cnblogs.com/duanweishi/p/15987693.html)

## 运行参数

在源码中，对现有已添加的运行参数，是完全添加 RST
文档说明的：[源码跳转](https://gitee.com/wu_cl/automated_api_pytest/blob/master/fastpt/run.py#L27)

- `log_level`: 控制台打印输出级别, 默认"-v"
- `case_path`: 可选参数, 指定测试用例, 默认为空，如果指定，则执行指定用例，否则执行全部，请遵循 pytest 用例指定规则
- `html_report`: 是否生成 HTML 测试报告, 默认开启
- `allure`: allure 测试报告, 默认关闭
- `allure_clear`: 清空 allure 报告历史记录, 默认开启
- `allure_serve`: 是否测试执行完成后自动打开 allure 测试报告服务, 如果已启用 allure 测试报告
- `reruns`: 每个用例的运行次数, 兼容性差, 不建议使用
- `maxfail`: 大于0的正整数, 指定失败用例个数,到达数量上限后终止运行, 默认为0, 为0时表示此参数默认关闭
- `x`: 如果发生失败用例, 是否终止运行, 默认关闭
- `n`: 分布式运行, 使用"auto"表示全核, 也可指定cpu内核数量, 大于0的正整数, 默认"auto"
- `dist`: 分布式运行方式, 默认"loadscope", 详情: [distribution](https://pytest-xdist.readthedocs.io/en/latest/distribution.html)
- `strict_markers`: markers 严格模式, 对于使用了自定义 marker 的用例, 如果 marker 未在 pytest.ini 注册, 用例将报错
- `capture`: 避免在使用输出模式为"v"和"s"时,html报告中的表格log为空的情况, 默认开启
- `disable_warnings`: 是否关闭控制台警告信息, 默认开启

## 运行方式选择

IDE 和命令行都支持参数自定义和扩展，在 IDE 中，在 run(...) 方法括号内以字符串形式填入即可，
命令行请遵循命令行参数规则

在 IDE 运行的好处是，它会在控制台同时打印你当前所有运行参数和转化后的 pytest 命令，
你可以直接将命令用于命令行执行

在命令行运行的好处是，如果测试用例发生意外或报错，它会得到一个完美的错误信息统计，
基于 [pytest-pretty](https://github.com/samuelcolvin/pytest-pretty) 构建
