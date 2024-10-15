import{_ as n,o as s,c as a,e}from"./app-fad4658a.js";const t={},p=e(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>测试数据支持 Yaml 和 Json 两种文件格式定义，它们是完全兼容的</p><p>以下作为基础的请求数据实例，包含基础请求必填项，可以直接 copy 此模板作为测试数据基础</p></div><h2 id="yaml-file" tabindex="-1"><a class="header-anchor" href="#yaml-file" aria-hidden="true">#</a> Yaml file</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">config</span><span class="token punctuation">:</span>
  <span class="token key atrule">allure</span><span class="token punctuation">:</span>
    <span class="token key atrule">epic</span><span class="token punctuation">:</span> 一级说明
    <span class="token key atrule">feature</span><span class="token punctuation">:</span> 二级说明
    <span class="token key atrule">story</span><span class="token punctuation">:</span> 三级说明
  <span class="token key atrule">request</span><span class="token punctuation">:</span>
    <span class="token key atrule">env</span><span class="token punctuation">:</span> xxx.env
  <span class="token key atrule">module</span><span class="token punctuation">:</span> any

<span class="token key atrule">test_steps</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> xx
    <span class="token key atrule">case_id</span><span class="token punctuation">:</span> xx_001
    <span class="token key atrule">description</span><span class="token punctuation">:</span>
    <span class="token key atrule">is_run</span><span class="token punctuation">:</span> <span class="token boolean important">True</span>
    <span class="token key atrule">request</span><span class="token punctuation">:</span>
      <span class="token key atrule">method</span><span class="token punctuation">:</span> GET
      <span class="token key atrule">url</span><span class="token punctuation">:</span> /test
      <span class="token key atrule">params</span><span class="token punctuation">:</span>
      <span class="token key atrule">headers</span><span class="token punctuation">:</span>
      <span class="token key atrule">body_type</span><span class="token punctuation">:</span>
      <span class="token key atrule">body</span><span class="token punctuation">:</span>
      <span class="token key atrule">files</span><span class="token punctuation">:</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json-file" tabindex="-1"><a class="header-anchor" href="#json-file" aria-hidden="true">#</a> Json file</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;allure&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;epic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;一级说明&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;feature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;二级说明&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;story&quot;</span><span class="token operator">:</span> <span class="token string">&quot;三级说明&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx.env&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;any&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;test_steps&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;case_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xx_001&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;is_run&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/test&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;params&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body_type&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function l(c,u){return s(),a("div",null,o)}const r=n(t,[["render",l],["__file","instances.html.vue"]]);export{r as default};
