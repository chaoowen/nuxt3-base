import{o as b,m as f,_ as y}from"./BaypTYSq.js";import{d as p,r as u,t as a,v as r,x as e,J as x,K as l,L as h,M as v,y as _,o as k,W as $,i as C,z as m,V as B}from"./Cp8_rBT4.js";import{_ as w}from"./DlAUqK2U.js";const g=[{name:"關於我",to:"#introduction"},{name:"技能樹",to:"#skills"},{name:"經歷",to:"#experience"},{name:"作品集",to:"#collection"},{name:"聯繫我",to:"#contact"}],E={class:"max-w-screen-xl flex flex-wrap items-center justify-end mx-auto py-1 px-3 md:p-6 transitable"},D={class:"flex flex-col md:flex-row gap-8 md:gap-10 py-8 px-4 md:p-0"},L=["onClick"],z=p({__name:"DefaultHeader",setup(c){const o=u(!1),n=u(null);b(n,t=>o.value=!1);const s=()=>{o.value=!o.value,console.log("navbarExpanded",o.value)};return(t,i)=>(a(),r("nav",{ref_key:"nav",ref:n,class:"fixed top-0 left-0 w-full bg-secondary z-40 shadow-md"},[e("div",E,[e("button",{type:"button",class:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden hover:bg-secondary-light transitable",onClick:s},i[0]||(i[0]=[e("span",{class:"sr-only"},"Open main menu",-1),e("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})],-1)])),e("div",{class:x(["w-full md:w-auto max-h-0 md:max-h-6 md:mr-10 transitable overflow-hidden",{"max-h-[40rem]":l(o)}])},[e("ul",D,[(a(!0),r(h,null,v(l(g),d=>(a(),r("li",{key:d.name},[e("a",{class:"block text-primary hover:text-primary-dark transitable hoverable",onClick:q=>l(f)(d.to)},_(d.name),9,L)]))),128))])],2)])],512))}}),F=p({__name:"ToTopButton",setup(c){const o=u(!1),n=()=>{const s=document.querySelector("footer");if(s){const t=s.getBoundingClientRect();o.value=t.top<=window.innerHeight}};return k(()=>{n(),window.addEventListener("scroll",n),window.addEventListener("resize",n)}),$(()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n)}),(s,t)=>(a(),r("div",{class:x(["to-top-button",{"absolute-position":l(o)}])},t[0]||(t[0]=[e("a",{href:"#top",class:"w-full h-full flex-center"},[e("img",{src:y,alt:"to-top-icon",class:"w-1.5 xl:w-2 -rotate-90"})],-1)]),2))}}),M=w(F,[["__scopeId","data-v-d3ab3bc5"]]),T={class:"py-10 bg-primary text-white"},j={class:"f-container w-full mx-auto max-w-screen-xl p-4 flex-center flex-col md:flex-row md:justify-between gap-4"},R={class:"text-sm sm:text-center"},V={class:"flex-center flex-wrap gap-8 text-sm"},H=["onClick"],N=p({__name:"DefaultFooter",setup(c){const o=C(()=>new Date().getFullYear());return(n,s)=>(a(),r("footer",T,[e("div",j,[e("span",R," © "+_(l(o))+" chaowen. All Rights Reserved. ",1),e("ul",V,[(a(!0),r(h,null,v(l(g),t=>(a(),r("li",{key:t.name},[e("a",{onClick:i=>l(f)(t.to),class:"hover:text-secondary-light transitable hoverable"},_(t.name),9,H)]))),128))])])]))}}),S={},A={id:"top",class:"min-h-screen relative flex flex-col"},O={class:"relative page-content mb-auto"};function Y(c,o){const n=z,s=M,t=N;return a(),r("div",A,[m(n),e("div",O,[B(c.$slots,"default",{},void 0,!0),m(s)]),m(t)])}const W=w(S,[["render",Y],["__scopeId","data-v-7122cc55"]]);export{W as default};
