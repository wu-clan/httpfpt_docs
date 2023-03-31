## 🚀 如何运行测试

### Pycharm

在 run.py 文件内部，鼠标右键执行即可

### 命令行

请确保当前使用的 python 环境和当前框架一致，如果遇到路径问题，
请参阅：[通用解决方法](https://www.cnblogs.com/duanweishi/p/15987693.html)

## 运行参数

IDE 和 CLI 都支持参数自定义和扩展，在 IDE 中，在 run(...) 方法括号内以字符串形式填入即可，
命令行请遵循命令行参数规则

在 IDE 运行的好处时，它会在控制台同时打印你当前所有运行参数和转化后的 pytest 命令，
你可以直接将命令用于命令行执行， 如果测试用例发生意外或报错，它会得到一个完美的错误信息统计，
基于 [pytest-pretty](https://github.com/samuelcolvin/pytest-pretty) 构建
