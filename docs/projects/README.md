## ❓ 多项目概念

多项目是为了能够将多个项目同时应用在此套框架中，并且需要隔离不同项目之间的测试用例和测试数据，而设计的一种运行模式，它从初始就被应用到我的所有开源自动化测试项目中

## ❓ 工作方式

```text:no-line-numbers
├─httpfpt
|  |
|  ├─data
|  |  └─test_data
|  |     └─your_project
|  |
|  ├─testcases
|  |  └─your_project
|  |
...
```

1. 在 testcases 目录下的一级目录被视为项目目录，如 httpfpt 源码中的 test_project 目录， 就等于是 test_project
   这个项目，需要在此项目目录下存放该项目所有相关的测试用例

2. 测试数据同样使用此规则，在 data > test_data 目录下的一级目录被视为项目目录，如 httpfpt 源码中的 test_project 目录， 就等于是
   test_project 这个项目，需要在此项目目录下存放该项目所有相关的测试数据

3. 确保测试用例和测试数据的项目名称一致，否则会导致测试用例无法获取测试数据，

