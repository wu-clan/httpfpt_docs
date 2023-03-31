# python接口自动化测试框架

## 🧠 设计思路

- python3 + pytest + parametrize + requests / httpx + yaml + allure ...

## 🌴 目录结构介绍

- common/: 公共类
- core/: 配置
- data/: 测试数据
- db/: 数据库
- log/: 日志文件
- report/: 测试报告存放
- test_case/: 放置接口自动化测试项目和用例
- utils/: 工具包
- conftest.py: pytest.fixture 配置
- pytest.ini pytest 参数配置
- run.py: pytest 主程序运行入口

## ⬇️ 下载

克隆:

```shell
git clone https://gitee.com/wu_cl/automated_api_pytest.git
```

安装依赖包:

```shell
pip install -r requirements.txt
```
