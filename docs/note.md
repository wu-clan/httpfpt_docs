# HttpFPT

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

### 源码:

```shell
git clone https://github.com/wu-clan/httpfpt.git
```

### SDK

```shell
pip install httpfpt
```

## 🧑‍💻 USE / DEV

### 源码

```shell
pip install -r requirements.txt
```

### SDK

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

[//]: # (## 📺 入门指北)

[//]: # ()

[//]: # (当前视频可能与当前版本有所出入，仅供参考)
