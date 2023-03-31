## 指定测试项目

为什么要指定测试项目？

为了能够将多个项目同时使用此套架构，而设计的这种模式，它的概念大致如下：

1. 在主的 test_case 目录下的一级目录视为单个项目目录，如 demo 中的 test_project 目录， 就等于是 test_project
   这个项目，需要在此项目目录下存放该项目所有相关的测试用例
2. 测试数据文件同样使用此规则，在 data > test_data > excel_data / yaml_data 目录下的一级目录视为单个项目目录，如 demo 中的
   test_project 目录， 就等于是 test_project 这个项目，需要在此项目目录下存放该项目所有相关的测试数据
