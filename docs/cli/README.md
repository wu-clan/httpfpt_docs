# CLI 程序使用说明

CLI 程序是命令行工具，它同样是此框架的组成成分，使用 [cappa](https://cappa.readthedocs.io/en/latest/) 构建

::: details Need Help
CLI 程序架构已经初步完成，但是一些功能方面还待完善，尤其在用例数据导入方面，如果想达到满意的效果，
这需要巨大的工作量，我被迫将它们的状态设置为 TODO，如果你有意向提供帮助，请随时发起 ISSUES 或直接 PR，我将尽快审查
:::

## 💡 在源码中

1. 在 httpfpt/ 目录下打开终端

   ```shell
   cd httpfpt
   ```

2. 查看 CLI 程序使用帮助

   ```shell
   python cli.py -h
   ```

   <img :src="$withBase('/assets/img/source_cli.jpg')" alt="CLI">

3. 根据帮助说明, 进行其他操作

## 🚩 在 SDK 中

在任意窗口打开终端，查看使用帮助

```shell
httpfpt -h
```

<img :src="$withBase('/assets/img/pip_cli.jpg')" alt="CLI">
