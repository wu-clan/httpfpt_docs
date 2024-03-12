::: tip 🙏🙏🙏
欢迎加入我们的[交流群](https://github.com/wu-clan)

如果 `HttpFpt` 能够帮助到你，你可以通过 [Sponsor](https://wu-clan.github.io/sponsor/) 链接随意发起打赏，不胜感激；
:::

# HttpFPT

[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/wu-clan/httpfpt/ci.yml?logo=github)](https://github.com/wu-clan/httpfpt/actions)
[![GitHub](https://img.shields.io/github/license/wu-clan/httpfpt)](https://github.com/wu-clan/httpfpt/blob/master/LICENSE)
[![Static Badge](https://img.shields.io/badge/python-3.8%20%7C%203.9%20%7C%203.10%20%7C%203.11%20%7C%203.12-blue)](https://www.python.org/downloads/)
[![GitHub release (with filter)](https://img.shields.io/github/v/release/wu-clan/httpfpt)](https://github.com/wu-clan/httpfpt/releases)

基于 HTTP 请求的快速数据驱动 pytest 接口自动化测试框架

我在掘金发表了关于 `HttpFPT` 的前身和由来，包括部分功能点的说明， 感兴趣

的小伙伴可以一睹为快，[点击跳转](https://juejin.cn/post/7224314619867136037)

## 🧠 设计思路

- python3 + pytest + parametrize + requests / httpx + yaml + allure + redis + 飞书 / 钉钉...

## 🌳 目录结构介绍

```text
httpfpt
   |
   ├─ common ·················· 公共方法
   ├─ core ···················· 配置
   ├─ data ···················· 测试数据
   ├─ db ······················ 数据库
   ├─ enums ··················· 枚举类
   ├─ schemas ················· 数据架构
   ├─ log ····················· 日志
   ├─ report ·················· 测试报告
   ├─ templates ··············· 数据模板
   ├─ testcases ··············· 测试项目和用例
   ├─ utils ··················· 工具包
   ├─ cli.py ·················· CLI 程序
   ├─ conftest.py ············· pytest 配置
   ├─ pytest.ini ·············· pytest 运行配置
   └─ run.py ·················· 主程序运行入口
```

## ⬇️ 下载

::: tip
如果你需要修改代码实现功能定制，我们建议你使用源码

如果你无需功能定制，我们建议你使用 SDK
:::

- 源码:

   ```shell
   git clone https://github.com/wu-clan/httpfpt.git
   ```
- SDK

   ```shell
   pip install httpfpt
   ```

## 🧑‍💻 USE / DEV

- 如果你正在使用源码，则必须安装相关依赖

   ```shell
   pip install -r requirements.txt
   ```
- 如果你正在使用 SDK，则必须通过 httpfpt 命令创建新项目，命令使用帮助：[CLI](/cli/README.md)

   ```shell
   # check out help
   httpfpt -h
   
   # create new project
   httpfpt --startproject
   ```

- 安装 redis 并启动服务

  [Redis Windows](https://github.com/redis-windows/redis-windows)

  [Linux / macOS](https://redis.io/download/)

  [Docker](https://hub.docker.com/_/redis)
- 安装 mysql 数据库（可选，如果你需要本地数据库）

  [Windows / Linux / macOS](https://dev.mysql.com/downloads/installer/)

  [Docker](https://hub.docker.com/_/mysql)

## 📺 入门指北

当前视频可能与当前版本有所出入，仅供参考

<BiliBili bvid="BV1jh4y1a7ic"/>
<BiliBili bvid="BV1by421q7Yf"/>
