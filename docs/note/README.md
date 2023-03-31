# python接口自动化测试框架

## 🧠 设计思路

- python3 + pytest + parametrize + requests / httpx + yaml + allure + redis + 飞书 / 钉钉...

## 🌴 目录结构介绍

- common/: 公共类
- core/: 配置
- data/: 测试数据
- db/: 数据库
- enums: 枚举类
- schemas: 数据架构
- log/: 日志
- report/: 测试报告
- templates: 数据模板
- test_case/: 测试项目和用例
- utils/: 工具包
- cli.py: CLI 程序
- conftest.py: pytest.fixture 配置
- pytest.ini pytest 参数配置
- run.py: 主程序运行入口

## ⬇️ 下载

克隆:

github:

```shell
git clone https://github.com/wu-clan/automated_api_pytest.git
```

gitee:

```shell
git clone https://gitee.com/wu_cl/automated_api_pytest.git
```

## 🧑‍💻 USE / DEV

> 依赖和 redis 是必需的，allure 是可选的，将运行参数 allure 设置为 False 即可关闭它

1. 安装依赖包:

    ```shell
    pip install -r requirements.txt
    ```

2. 安装 [allure](https://www.yuque.com/poloyy/python/aiqlmi) 程序
3. 安装 redis 并启动服务
