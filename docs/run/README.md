# 🚀 如何运行测试

## Pycharm (推荐)

在 run.py 文件内部，鼠标右键选择执行即可

## 命令行

确保当前框架 python 运行环境，如果遇到路径问题，请参阅：[通用解决方法](https://www.cnblogs.com/duanweishi/p/15987693.html)

```shell
python run.py
```

## 运行参数

源码中，对现有已添加的运行参数添加了 RST
文档说明：[源码跳转](https://github.com/wu-clan/httpfpt/blob/3b6c01524fae4d1915e6bf685df21f2215a757d3/httpfpt/run.py#L51)

- `log_level`: 控制台打印输出级别, 默认"-v"
- `case_path`: 指定测试用例函数, 默认为空，如果指定，则执行指定用例，否则执行全部
- `html_report`: 生成 HTML 测试报告, 默认开启
- `allure`: 生成 allure 测试报告, 默认开启
- `allure_clear`: 清空 allure 报告历史记录, 默认开启
- `allure_serve`: 自动打开 allure 测试报告服务， 默认关闭
- `reruns`: 用例运行失败重试次数, 兼容性差, 默认不开启使用
- `maxfail`: 用例运行失败数量，到达数量上限后终止运行，默认为 0，即不终止
- `x`: 用例运行失败, 终止运行, 默认关闭
- `n`: 分布式运行, 默认 "auto"
- `dist`: 分布式运行方式, 默认"loadscope",
  详情: [distribution](https://pytest-xdist.readthedocs.io/en/latest/distribution.html)
- `strict_markers`: markers 严格模式, 对于使用了自定义 marker 的用例, 如果 marker 未在 pytest.ini 注册, 用例将报错
- `capture`: 避免在使用输出模式为"v"和"s"时，html报告中的表格日志为空的情况, 默认开启
- `disable_warnings`: 关闭控制台警告信息, 默认开启

## 运行方式选择

IDE 和命令行都支持参数自定义和扩展，在 IDE 中，在 run() 方法括号内以字符串或键值表达式形式填入即可，

在 IDE 运行的好处是，它会在控制台同时打印你当前所有运行参数和转化后的 pytest 命令，此命令可直接用于命令行执行

在命令行运行的好处是，如果测试用例发生意外或报错，它会得到一个完美的错误信息统计，
基于 [pytest-pretty](https://github.com/samuelcolvin/pytest-pretty) 构建
