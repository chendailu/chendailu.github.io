import{_ as c,c as i,e as n,a,b as t,w as p,d as C,r as A,o as d}from"./app.9df174a0.js";const y={methods:{third(o){this.$messageAlert({type:o,msg:"\u6210\u529F\u7684\u6D88\u606F",icon:"xly_icon_zhengque",top:"30px",timeOut:2,align:"left"}).then(()=>{console.log("ok")}).catch(()=>{console.log("no"+o)})}}},k=JSON.parse('{"title":"messageAlert","description":"","frontmatter":{"title":"messageAlert","pageClass":"xly-class"},"headers":[],"relativePath":"components/messageAlert.md"}'),g=a("h1",{id:"\u793A\u4F8B",tabindex:"-1"},[n("\u793A\u4F8B "),a("a",{class:"header-anchor",href:"#\u793A\u4F8B","aria-hidden":"true"},"#")],-1),_=a("br",null,null,-1),u={style:{overflow:"hidden"}},m=a("h4",null,"\u63D0\u793A\u7C7B",-1),D=C("",1);function h(o,s,f,x,v,e){const l=A("xly-button");return d(),i("div",null,[g,_,n(" ```vue "),a("template",null,[a("div",u,[m,t(l,{style:{"margin-right":"30px"},onClick:s[0]||(s[0]=r=>e.third("pramiry"))},{default:p(()=>[n("\u666E\u901A")]),_:1}),t(l,{style:{"margin-right":"30px"},type:"success",onClick:s[1]||(s[1]=r=>e.third("success"))},{default:p(()=>[n("\u6210\u529F")]),_:1}),t(l,{style:{"margin-right":"30px"},type:"warning",onClick:s[2]||(s[2]=r=>e.third("warning"))},{default:p(()=>[n("\u8B66\u544A")]),_:1}),t(l,{style:{"margin-right":"30px"},type:"danger",onClick:s[3]||(s[3]=r=>e.third("error"))},{default:p(()=>[n("\u9519\u8BEF")]),_:1})])]),D])}const T=c(y,[["render",h]]);export{k as __pageData,T as default};
