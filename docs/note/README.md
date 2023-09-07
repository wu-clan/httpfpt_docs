# HttpFpt

我在掘金发表了关于 `HttpFpt` 的前身和由来，包括部分功能点的说明， 感兴趣

的小伙伴可以一睹为快哟，[点击跳转](https://juejin.cn/post/7224314619867136037)

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

github:

```shell
git clone https://github.com/wu-clan/httpfpt.git
```

## 🧑‍💻 USE / DEV

> 依赖包和 redis 是必需的，allure 是可选的，将运行参数 allure 设置为 False 即可关闭它（默认开启）

1. 安装依赖包:

    ```shell
    pip install -r requirements.txt
    ```

2. 安装 [allure](https://www.yuque.com/poloyy/python/aiqlmi)
   程序和 [Java JDK](https://adoptopenjdk.net/archive.html?variant=openjdk8&jvmVariant=hotspot)
3. 安装 redis 并启动服务

## 📺 入门指北

<BiliBili bvid="BV1k8411B7zz"/>
