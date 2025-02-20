import{_ as e,c as i,a2 as l,o as s}from"./chunks/framework.CU2KmuNA.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"run.md","filePath":"run.md"}'),t={name:"run.md"};function r(n,a,o,c,d,p){return s(),i("div",null,a[0]||(a[0]=[l(`<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>在项目运行前，确保你已编写用例数据，并已生成测试用例</p><p>详见：<a href="./case_create.html">测试用例创建</a></p></div><h2 id="🚀-运行方式" tabindex="-1">🚀 运行方式 <a class="header-anchor" href="#🚀-运行方式" aria-label="Permalink to &quot;🚀 运行方式&quot;">​</a></h2><h3 id="pycharm-推荐" tabindex="-1">PyCharm (推荐) <a class="header-anchor" href="#pycharm-推荐" aria-label="Permalink to &quot;PyCharm (推荐)&quot;">​</a></h3><p>在 run.py 文件内部，鼠标右键选择执行即可</p><h3 id="终端" tabindex="-1">终端 <a class="header-anchor" href="#终端" aria-label="Permalink to &quot;终端&quot;">​</a></h3><p>在 run.py 文件目录下打开终端，如果遇到路径/模块问题，请参阅：<a href="https://www.cnblogs.com/duanweishi/p/15987693.html" target="_blank" rel="noreferrer">通用解决方法</a></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run.py</span></span></code></pre></div><h3 id="cli" tabindex="-1">CLI <a class="header-anchor" href="#cli" aria-label="Permalink to &quot;CLI&quot;">​</a></h3><p>此功能仅适用于源码 CLI（SDK 不包含此功能）在 httpfpt 目录下打开终端</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入 cli.py 目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> httpfpt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cli.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span></span></code></pre></div><h2 id="📖-默认运行参数" tabindex="-1">📖 默认运行参数 <a class="header-anchor" href="#📖-默认运行参数" aria-label="Permalink to &quot;📖 默认运行参数&quot;">​</a></h2><ul><li><code>*args</code>: pytest 运行参数，例如：<code>(&#39;-m&#39;, &#39;test_mark&#39;)</code></li><li><code>testcase_generate</code>: 自动生成测试用例（跳过同名文件），建议通过 CLI 手动执行，默认关闭</li><li><code>clean_cache</code>: 清理 redis 缓存数据，对于脏数据，这很有用，默认关闭</li><li><code>pydantic_verify</code>: 用例数据完整架构 pydantic 快速检测, 默认开启</li><li><code>log_level</code>: 控制台打印输出级别，默认&quot;-s&quot;</li><li><code>case_path</code>: 指定测试用例函数，默认为空，如果指定，则执行指定用例，否则执行全部</li><li><code>html_report</code>: 生成 HTML 测试报告，默认开启</li><li><code>allure</code>: 生成 allure 测试报告，默认开启</li><li><code>allure_clear</code>: 清空 allure 报告历史记录，默认开启</li><li><code>allure_serve</code>: 自动打开 allure 测试报告服务，默认关闭</li><li><code>reruns</code>: 用例运行失败重试次数，兼容性差，默认不开启使用，并不建议开启</li><li><code>maxfail</code>: 用例运行失败数量，到达数量上限后终止运行，默认为 0，即不终止</li><li><code>x</code>: 用例运行失败，终止运行，默认关闭</li><li><code>strict_markers</code>: markers 严格模式，对于使用了自定义 marker 的用例，如果 marker 未在 pytest.ini 注册，用例运行将报错</li><li><code>capture</code>: 避免在使用输出模式为&quot;v&quot;和&quot;s&quot;时，html报告中的表格日志为空的情况，默认开启</li><li><code>disable_warnings</code>: 关闭控制台警告信息，默认开启</li><li><code>**kwargs</code>: pytest 运行关键字参数，通常取决于插件</li></ul><h2 id="📖-扩展运行参数" tabindex="-1">📖 扩展运行参数 <a class="header-anchor" href="#📖-扩展运行参数" aria-label="Permalink to &quot;📖 扩展运行参数&quot;">​</a></h2><p>如果你想手动添加更多 pytest 插件，并且指定它们的运行参数，只需在 main 方法下的 run() 方法中以字符串或键值对形式填入即可</p>`,14)]))}const k=e(t,[["render",r]]);export{u as __pageData,k as default};
