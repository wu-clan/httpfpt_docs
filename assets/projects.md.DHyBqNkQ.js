import{_ as s,c as t,a2 as e,o as n}from"./chunks/framework.CU2KmuNA.js";const u=JSON.parse('{"title":"多项目","description":"","frontmatter":{},"headers":[],"relativePath":"projects.md","filePath":"projects.md"}'),p={name:"projects.md"};function l(o,a,i,c,r,d){return n(),t("div",null,a[0]||(a[0]=[e(`<h1 id="多项目" tabindex="-1">多项目 <a class="header-anchor" href="#多项目" aria-label="Permalink to &quot;多项目&quot;">​</a></h1><h2 id="多项目概念" tabindex="-1">多项目概念 <a class="header-anchor" href="#多项目概念" aria-label="Permalink to &quot;多项目概念&quot;">​</a></h2><p>多项目是为了能够将多个项目同时应用在此套框架中，并且需要隔离不同项目之间的测试用例和测试数据，而设计的一种运行模式，它从初始就被应用到我的所有开源自动化测试项目中</p><h2 id="工作方式" tabindex="-1">工作方式 <a class="header-anchor" href="#工作方式" aria-label="Permalink to &quot;工作方式&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>├─httpfpt</span></span>
<span class="line"><span>|  |</span></span>
<span class="line"><span>|  ├─data</span></span>
<span class="line"><span>|  |  └─test_data</span></span>
<span class="line"><span>|  |     └─your_project</span></span>
<span class="line"><span>|  |</span></span>
<span class="line"><span>|  ├─testcases</span></span>
<span class="line"><span>|  |  └─your_project</span></span>
<span class="line"><span>|  |</span></span>
<span class="line"><span>...</span></span></code></pre></div><ol><li><p>在 testcases 目录下的一级目录被视为项目目录，如 httpfpt 源码中的 test_project 目录， 就等于是 test_project 这个项目，需要在此项目目录下存放该项目所有相关的测试用例</p></li><li><p>测试数据同样使用此规则，在 data &gt; test_data 目录下的一级目录被视为项目目录，如 httpfpt 源码中的 test_project 目录， 就等于是 test_project 这个项目，需要在此项目目录下存放该项目所有相关的测试数据</p></li><li><p>确保测试用例和测试数据的项目名称一致，否则会导致测试用例无法获取测试数据，</p></li></ol>`,6)]))}const _=s(p,[["render",l]]);export{u as __pageData,_ as default};
