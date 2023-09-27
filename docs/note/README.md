# HttpFpt

![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/wu-clan/httpfpt/ci.yml?logo=github)
[![GitHub](https://img.shields.io/github/license/wu-clan/httpfpt)](https://github.com/wu-clan/httpfpt/blob/master/LICENSE)
![Static Badge](https://img.shields.io/badge/python-3.8%20%7C%203.9%20%7C%203.10%20%7C%203.11-blue)
![GitHub tag (with filter)](https://img.shields.io/github/v/tag/wu-clan/httpfpt)
![GitHub release (with filter)](https://img.shields.io/github/v/release/wu-clan/httpfpt)

基于 HTTP 请求的快速数据驱动 pytest 接口自动化测试框架

我在掘金发表了关于 `HttpFpt` 的前身和由来，包括部分功能点的说明， 感兴趣

的小伙伴可以一睹为快，[点击跳转](https://juejin.cn/post/7224314619867136037)

## 🧠 设计思路

- python3 + pytest + parametrize + requests / httpx + yaml + allure + redis + 飞书 / 钉钉...

## 🌴 目录结构介绍

- common/: 公共类
- core/: 配置
- data/: 测试数据
- db/: 数据库
- enums/: 枚举类
- schemas/: 数据架构
- log/: 日志
- report/: 测试报告
- templates/: 数据模板
- testcases/: 测试项目和用例
- utils/: 工具包
- cli.py: CLI 程序
- conftest.py: pytest.fixture 配置
- pytest.ini: pytest 参数配置
- run.py: 主程序运行入口

## ⬇️ 下载

克隆:

```shell
git clone https://github.com/wu-clan/httpfpt.git
```

## 🧑‍💻 USE / DEV

1. 安装依赖:

    ```shell
    pip install -r requirements.txt
    ```

2. 安装 redis 并启动服务

   [Redis Windows](https://github.com/redis-windows/redis-windows)

   [Linux / macOS](https://redis.io/download/)

   [Docker](https://hub.docker.com/_/redis)

3. 安装 mysql 并创建一个任意名称数据库，同步修改 conf.toml 中的数据库配置

   [Windows / Linux / macOS](https://dev.mysql.com/downloads/installer/)

   [Docker](https://hub.docker.com/_/mysql)

::: warning
allure 测试报告默认使用 allure-pytest
生成，但是不能直接访问，你必须安装 [allure](https://www.yuque.com/poloyy/python/aiqlmi)
本地程序和 [Java JDK](https://adoptopenjdk.net/archive.html?variant=openjdk8&jvmVariant=hotspot) 才能进行可视化浏览
:::

## 📺 入门指北

当前视频非最新演示，可能与当前版本有所出入，仅供参考

<BiliBili bvid="BV1jh4y1a7ic"/>
