import{_ as t,o as e,c as a,e as s}from"./app-99dbd673.js";const c={},n=s(`<h2 id="❓-多项目概念" tabindex="-1"><a class="header-anchor" href="#❓-多项目概念" aria-hidden="true">#</a> ❓ 多项目概念</h2><p>多项目是为了能够将多个项目同时应用在此套框架中，并且需要隔离不同项目之间的测试用例和测试数据，而设计的一种运行模式，它从初始就被应用到我的所有开源自动化测试项目中</p><h2 id="❓-工作方式" tabindex="-1"><a class="header-anchor" href="#❓-工作方式" aria-hidden="true">#</a> ❓ 工作方式</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>├─httpfpt
|  |
|  ├─data
|  |  └─test_data
|  |     └─your_project
|  |
|  ├─testcases
|  |  └─your_project
|  |
...
</code></pre></div><ol><li><p>在 testcases 目录下的一级目录被视为项目目录，如 httpfpt 源码中的 test_project 目录， 就等于是 test_project 这个项目，需要在此项目目录下存放该项目所有相关的测试用例</p></li><li><p>测试数据同样使用此规则，在 data &gt; test_data 目录下的一级目录被视为项目目录，如 httpfpt 源码中的 test_project 目录， 就等于是 test_project 这个项目，需要在此项目目录下存放该项目所有相关的测试数据</p></li><li><p>确保测试用例和测试数据的项目名称一致，否则会导致测试用例无法获取测试数据，</p></li></ol>`,5),r=[n];function o(d,i){return e(),a("div",null,r)}const _=t(c,[["render",o],["__file","index.html.vue"]]);export{_ as default};
