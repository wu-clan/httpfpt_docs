## 🚀 运行方式

### PyCharm (推荐)

在 run.py 文件内部，鼠标右键选择执行即可

### 终端

在 run.py
文件目录下打开终端，如果遇到路径/模块问题，请参阅：[通用解决方法](https://www.cnblogs.com/duanweishi/p/15987693.html)

```shell
python3 run.py
```

### CLI

此功能仅适用于源码 cli，在 httpfpt 目录下打开终端

```shell
# 进入 cli.py 目录
cd httpfpt

# 运行测试
python cli.py -r
```

## 📖 默认运行参数

- `testcase_generate`: 自动生成测试用例（跳过同名文件），建议通过 CLI 手动执行，默认关闭
- `clean_cache`: 清理 redis 缓存数据，对于脏数据，这很有用，默认关闭
- `pydantic_verify`: 用例数据完整架构 pydantic 快速检测, 默认开启
- `log_level`: 控制台打印输出级别，默认"-s"
- `case_path`: 指定测试用例函数，默认为空，如果指定，则执行指定用例，否则执行全部
- `html_report`: 生成 HTML 测试报告，默认开启
- `allure`: 生成 allure 测试报告，默认开启
- `allure_clear`: 清空 allure 报告历史记录，默认开启
- `allure_serve`: 自动打开 allure 测试报告服务，默认关闭
- `reruns`: 用例运行失败重试次数，兼容性差，默认不开启使用，并不建议开启
- `maxfail`: 用例运行失败数量，到达数量上限后终止运行，默认为 0，即不终止
- `x`: 用例运行失败，终止运行，默认关闭
- `strict_markers`: markers 严格模式，对于使用了自定义 marker 的用例，如果 marker 未在 pytest.ini 注册，用例运行将报错
- `capture`: 避免在使用输出模式为"v"和"s"时，html报告中的表格日志为空的情况，默认开启
- `disable_warnings`: 关闭控制台警告信息，默认开启

## 📖 扩展运行参数

如果你想手动添加更多 pytest 插件，并且指定它们的运行参数，只需在 main 方法下的 run() 方法中以字符串或键值对形式填入即可
