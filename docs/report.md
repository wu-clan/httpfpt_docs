# 预览

## 📝 测试报告说明

测试执行完毕后, 测试报告会自动生成到 report 文件夹下

- yaml：测试报告主要用来收集测试结果，用作存储结果数据
- allure：测试报告需启用并正确安装 allure 服务，默认开启
- html：测试报告无需额外配置，默认开启，需手动在文件夹下浏览
- 钉钉 / 飞书 / 邮箱 / 企微：测试报告需正确配置并打开发送开关，测试运行完成后将自动推送

## 🔍 Yaml Report

```yaml
elapsed: 9.003
error: 0
failed: 3
passed: 3
result: Failed
skipped: 3
started_time: '2023-04-01 16:05:37'
total: 9
```

## 🔍 Allure Report

::: warning
allure 测试报告默认使用 allure-pytest 生成，但是不能直接访问，有以下选择

1. 本地访问：你必须安装 [allure](https://www.yuque.com/poloyy/python/aiqlmi)
   程序和 [Java JDK](https://adoptopenjdk.net/archive.html?variant=openjdk8&jvmVariant=hotspot) 才能进行本地可视化浏览
2. Jenkins：将 allure 测试报告集成到到 Jenkins 中
   :::

![](/assets/img/allure_report.jpg)

## 🔍 Html Report

![](/assets/img/html_report.jpg)

## 🔍 DingDing Report

![](/assets/img/ding_report.jpg)

## 🔍 WeChat Report

![](/assets/img/ding_report.jpg)

## 🔍 FeiShu Report

![](/assets/img/lark_report.jpg)

## 🔍 Email Report

![](/assets/img/email_report.jpg)
