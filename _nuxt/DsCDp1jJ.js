import{o as y,m as _,_ as b}from"./uUSJbvZA.js";import{d as u,r as m,t as a,v as r,x as e,S as f,L as l,N as x,O as v,y as h,o as k,V as $,z as d,U as C}from"./B9mN5e5y.js";import{_ as w}from"./DlAUqK2U.js";const g=[{name:"關於我",to:"#introduction"},{name:"技能樹",to:"#skills"},{name:"經歷",to:"#experience"},{name:"願景",to:"#future"},{name:"聯繫我",to:"#contact"}],B={class:"max-w-screen-xl flex flex-wrap items-center justify-end mx-auto py-1 px-3 md:p-6 transitable"},E={class:"flex flex-col md:flex-row gap-8 md:gap-10 py-8 px-4 md:p-0"},L=["onClick"],z=u({__name:"DefaultHeader",setup(c){const n=m(!1),t=m(null);y(t,s=>n.value=!1);const o=()=>{n.value=!n.value,console.log("navbarExpanded",n.value)};return(s,p)=>(a(),r("nav",{ref_key:"nav",ref:t,class:"fixed top-0 left-0 w-full bg-secondary z-10 shadow-md"},[e("div",B,[e("button",{type:"button",class:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden hover:bg-gray-100",onClick:o},p[0]||(p[0]=[e("span",{class:"sr-only"},"Open main menu",-1),e("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})],-1)])),e("div",{class:f(["w-full md:w-auto max-h-0 md:max-h-6 md:mr-10 transitable overflow-hidden",{"max-h-[20rem]":l(n)}])},[e("ul",E,[(a(!0),r(x,null,v(l(g),i=>(a(),r("li",{key:i.name},[e("a",{class:"block text-primary hover:text-primary-dark transitable hoverable",onClick:A=>l(_)(i.to)},h(i.name),9,L)]))),128))])],2)])],512))}}),D=u({__name:"ToTopButton",setup(c){const n=m(!1),t=()=>{const o=document.querySelector("footer");if(o){const s=o.getBoundingClientRect();n.value=s.top<=window.innerHeight}};return k(()=>{t(),window.addEventListener("scroll",t),window.addEventListener("resize",t)}),$(()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}),(o,s)=>(a(),r("div",{class:f(["to-top-button",{"absolute-position":l(n)}])},s[0]||(s[0]=[e("a",{href:"#top",class:"w-full h-full flex-center"},[e("img",{src:b,alt:"to-top-icon",class:"w-1.5 xl:w-2 -rotate-90"})],-1)]),2))}}),T=w(D,[["__scopeId","data-v-a5ed5208"]]),j={class:"py-10 bg-primary text-white"},F={class:"container w-full mx-auto max-w-screen-xl p-4 flex-center flex-col md:flex-row md:justify-between gap-4"},M={class:"flex-center flex-wrap gap-8 text-sm"},N=["onClick"],R=u({__name:"DefaultFooter",setup(c){return(n,t)=>(a(),r("footer",j,[e("div",F,[t[0]||(t[0]=e("span",{class:"text-sm sm:text-center"}," © 2023 chaowen. All Rights Reserved. ",-1)),e("ul",M,[(a(!0),r(x,null,v(l(g),o=>(a(),r("li",{key:o.name},[e("a",{onClick:s=>l(_)(o.to),class:"hover:text-primary-light transitable hoverable"},h(o.name),9,N)]))),128))])])]))}}),S={},V={id:"top",class:"min-h-screen relative flex flex-col"},H={class:"relative page-content mb-auto"};function O(c,n){const t=z,o=T,s=R;return a(),r("div",V,[d(t),e("div",H,[C(c.$slots,"default",{},void 0,!0),d(o)]),d(s)])}const J=w(S,[["render",O],["__scopeId","data-v-7122cc55"]]);export{J as default};
