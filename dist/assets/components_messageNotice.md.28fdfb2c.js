import{_ as s,c as n,o as a,d as l}from"./app.f313fdc2.js";const C=JSON.parse('{"title":"messageNotice","description":"","frontmatter":{"title":"messageNotice","pageClass":"xly-class"},"headers":[],"relativePath":"components/messageNotice.md"}'),p={name:"components/messageNotice.md"},o=l(`<h1 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h1><br><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h4</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u901A\u77E5\u7C7B</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h4</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">float:left;margin-right:30px</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#82AAFF;">notice</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">enquire</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u901A\u77E5</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">float:left;margin-right:30px</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#82AAFF;">notice</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u901A\u77E5</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">float:left;margin-right:30px</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#82AAFF;">notice</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u901A\u77E5</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">float:left;margin-right:30px</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#82AAFF;">notice</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u901A\u77E5</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">notice</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$messageNotice</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    align</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">left</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    title</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u63A5\u5165\u8BBE\u5907</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    content</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u3010\u5E0C\u6377\u3011WDC6589ASD898ADC658DC658DC658</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    controlMsg</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;span style=&quot;color:#2675ff;margin-right:10px&quot;&gt;\u65B0\u5EFA\u6848\u4F8B&lt;/span&gt;&lt;span&gt;\u5BF9\u8BE5\u8BBE\u5907\u8FDB\u884C\u64CD\u4F5C&lt;/span&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    controlClick</span><span style="color:#89DDFF;">:this.</span><span style="color:#A6ACCD;">polic</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#676E95;">//timeOut:2</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">456</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">no</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">polic</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4F60\u8981\u5E72\u54C8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h1><h1 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h1><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u53EF\u9009\u503C</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u901A\u77E5\u6846\u79CD\u7C7B</td><td>success,error,warning,enquire</td><td>string</td><td>\u65E0</td></tr><tr><td>align</td><td>\u5F39\u51FA\u4F4D\u7F6E</td><td>left/right</td><td>string</td><td>right</td></tr><tr><td>title</td><td>\u901A\u77E5\u6807\u9898</td><td>\u81EA\u5B9A\u4E49</td><td>string</td><td>\u81EA\u5B9A\u4E49</td></tr><tr><td>content</td><td>\u901A\u77E5\u5185\u5BB9</td><td>\u81EA\u5B9A\u4E49</td><td>string</td><td>\u81EA\u5B9A\u4E49</td></tr><tr><td>controlMsg</td><td>\u64CD\u4F5Chtml\u5B57\u7B26\u4E32</td><td>\u81EA\u5B9A\u4E49</td><td>string</td><td>\u81EA\u5B9A\u4E49</td></tr><tr><td>controlClick</td><td>\u64CD\u4F5C\u56DE\u8C03\u51FD\u6570</td><td>\u81EA\u5B9A\u4E49\u51FD\u6570</td><td>function</td><td>\u81EA\u5B9A\u4E49\u51FD\u6570</td></tr><tr><td>timeOut</td><td>\u5EF6\u65F6\u5173\u95ED\u65F6\u95F4</td><td>\u81EA\u5B9A\u4E49\u6570\u5B57</td><td>number</td><td>5</td></tr></tbody></table><h1 id="event" tabindex="-1">event <a class="header-anchor" href="#event" aria-hidden="true">#</a></h1><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>.then(() =&gt; {})</td><td>\u5F39\u51FA\u65F6\u89E6\u53D1</td><td>\u65E0</td></tr><tr><td>.catch(() =&gt; {})</td><td>\u6D88\u5931\u65F6\u89E6\u53D1</td><td>\u65E0</td></tr></tbody></table>`,8),t=[o];function e(c,r,F,D,y,d){return a(),n("div",null,t)}const A=s(p,[["render",e]]);export{C as __pageData,A as default};
