## 🔍 查看测试报告

测试执行完毕后, 测试报告会自动生成到 report 文件夹下

- yaml 测试报告主要用来收集测试结果，用作存储结果数据
- allure 测试报告需启用并正确安装 allure 服务，默认开启，自动在默认浏览器打开
- html 测试报告无需额外配置，默认开启，需手动在文件夹下浏览
- 钉钉 / 飞书 / 邮箱 测试报告需正确配置并打开发送开关，测试完成后自动发送

## 测试报告相关截图

### Yaml Report
---
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

### Allure Report
---
![allure_report](/assets/img/allure_report.jpg)

### Html Report
---
![html_report](/assets/img/html_report.jpg)

### Ding Report
---
![ding_report](/assets/img/ding_report.jpg)

### Lark Report
---
![lark_report](/assets/img/lark_report.jpg)

### Email Report
---
![email_report](/assets/img/email_report.jpg)
