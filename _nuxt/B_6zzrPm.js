import{_ as c}from"./DlAUqK2U.js";import{t as n,v as a,J as C,d as p,x as e,K as x,L as o,r as F,M as b,N as h,O as w,P as k,Q as S,R as $,S as v,y as u,z as m}from"./CSjMEQ9k.js";import{_ as y}from"./BAiOmHUA.js";const R={},j={class:"flex-center py-20"};function L(l,t){return n(),a("div",j,t[0]||(t[0]=[C('<div class="inline-flex flex-col items-start space-y-2"><div class="inline-block text-[4rem] text-primary"><p class="ubuntu-medium">Hi There</p><p class="ubuntu-medium"> I&#39;m <span class="text-secondary-dark">Chaowen</span></p></div><div class="inline-block px-4 py-1 ubuntu-medium text-4xl text-primary bg-secondary rounded-full"> Front-end Engineer </div></div>',1)]))}const U=c(R,[["render",L]]),B={class:"relative"},T={class:"w-full h-70 md:h-130 xl:h-187 overflow-hidden"},D=["src"],N={class:"w-full absolute right-0 top-0"},M=["src"],V={class:"w-full absolute right-0 bottom-0"},z=["src"],I=p({__name:"CoverImage",props:{topFrame:{},bottomFrame:{},bgImage:{}},setup(l){return(t,s)=>(n(),a("div",B,[e("div",T,[e("img",{class:"w-full h-full object-cover",src:t.bgImage,alt:"bg-cover"},null,8,D)]),e("div",N,[e("img",{class:"w-full",src:t.topFrame,alt:"bg-frame"},null,8,M)]),e("div",V,[e("img",{class:"w-full",src:t.bottomFrame,alt:"bg-frame"},null,8,z)])]))}}),E=""+new URL("cover-main.UNgo49t9.jpg",import.meta.url).href,H=""+new URL("bg-top-right.QwhradnW.png",import.meta.url).href,Q=""+new URL("bg-bottom-left.B4ZjP0ej.png",import.meta.url).href,G=p({__name:"IndexCoverMain",setup(l){return(t,s)=>{const i=I;return n(),x(i,{bgImage:o(E),topFrame:o(H),bottomFrame:o(Q)},null,8,["bgImage","topFrame","bottomFrame"])}}}),J={class:"f-container pt-8 pb-16 xl:pt-16"},K={class:"relative w-full md:w-1/2 overflow-hidden"},A={class:"w-full md:w-1/2 overflow-hidden"},P={class:"relative responsive ratio-1by1"},O=["src"],W=["src"],X=["src"],Z={class:"text-primary"},q={class:"text-gray"},Y={class:"text-primary"},ee={class:"text-gray"},te=p({__name:"ContentSwiper",props:{isReverse:{type:Boolean},images:{},section:{}},setup(l){const t=l,s=F(0);function i(){s.value<t.images.length-1&&s.value++}function _(){s.value>0&&s.value--}return(r,d)=>(n(),a("div",J,[e("div",{class:v(["flex flex-col-reverse md:flex-row xl:items-center gap-10",{"md:!flex-row-reverse":r.isReverse}])},[e("div",K,[e("div",{class:"transform-group",style:b({transform:`translate3d(-${o(s)*100}%, 0, 0)`})},[(n(!0),a(h,null,w(r.section,(f,g)=>(n(),a("div",{key:g,class:"w-full flex-shrink-0 flex xl:items-center"},[(n(),x(k(f)))]))),128))],4)]),e("div",A,[e("div",P,[e("div",{class:"transform-group",style:b({transform:`translate3d(-${o(s)*100}%, 0, 0)`})},[(n(!0),a(h,null,w(r.images,(f,g)=>(n(),a("div",{key:g,class:"w-full flex-shrink-0"},[e("img",{src:f,class:"w-full h-full object-cover"},null,8,O)]))),128))],4),S(e("button",{onClick:_,class:"arrow-icon left-0"},[e("img",{src:o(y),alt:"chevron-icon",class:"w-1.5 xl:w-2 rotate-180"},null,8,W)],512),[[$,o(s)>0]]),S(e("button",{onClick:i,class:"arrow-icon right-0"},[e("img",{src:o(y),alt:"chevron-icon",class:"w-1.5 xl:w-2"},null,8,X)],512),[[$,o(s)<r.images.length-1]])]),e("div",{class:v(["flex xl:hidden justify-end pt-2 text-subtitle-lg",{"md:!justify-start":r.isReverse}])},[e("span",Z,u(String(o(s)+1).padStart(2,"0")),1),d[0]||(d[0]=e("span",{class:"px-2 text-gray-lighter"},"|",-1)),e("span",q,u(String(r.section.length).padStart(2,"0")),1)],2)])],2),e("div",{class:v(["hidden xl:flex justify-end pt-5 text-subtitle-lg",{"md:!justify-start":r.isReverse}])},[e("span",Y,u(String(o(s)+1).padStart(2,"0")),1),d[1]||(d[1]=e("span",{class:"px-2 text-gray-lighter"},"|",-1)),e("span",ee,u(String(r.section.length).padStart(2,"0")),1)],2)]))}}),se=c(te,[["__scopeId","data-v-3abbde39"]]),ne=""+new URL("swiper-tool.dGuXmvCU.jpg",import.meta.url).href,oe=""+new URL("swiper-developer.DmHmbgeI.jpg",import.meta.url).href,re=""+new URL("swiper-colorful.K_BhdBba.jpg",import.meta.url).href,ae={},le={class:"list-disc pl-6 space-y-4"};function ie(l,t){return n(),a("ul",le,t[0]||(t[0]=[e("li",null,"HTML5 / CSS3 / JavaScript (ES6+)， Vue3 / Nuxt3",-1),e("li",null,"Sass / TailwindCSS / Flowbite / Quasar",-1),e("li",null,"Git 版本控制",-1),e("li",null,"Node.js / Docker",-1)]))}const ce=c(ae,[["render",ie],["__scopeId","data-v-e40da8c3"]]),me={};function pe(l,t){return n(),a("p",null,"hahaha")}const _e=c(me,[["render",pe]]),de={},ue={class:"text-primary"};function fe(l,t){return n(),a("div",ue,t[0]||(t[0]=[e("p",null," 我是一名具有兩年經驗的前端工程師，擅長使用 vue3 和 nuxt3 進行網頁開發，並且對 HTML、CSS、JavaScript 具備扎實的基礎知識，並熟練運用 Tailwind CSS 和 Sass 等框架進行前端設計，能夠快速開發響應式、跨平台的用戶界面。 ",-1),e("p",null," 此外，我也熟悉 Git 版本控制，能夠有效地協作開發，並對前端性能優化有一定的實踐經驗。 ",-1),e("p",null," 在過去的工作中，我參與了多個項目的前端開發，負責設計與實現交互式功能，並與後端工程師緊密合作，確保數據的正確傳遞和展示。我不斷學習新技術，希望能夠在未來的工作中持續成長，為團隊帶來更高的價值。 ",-1)]))}const ge=c(de,[["render",fe]]),ve={id:"skills"},he=p({__name:"SkillsSection",setup(l){const t=[ne,oe,re],s=[ce,_e,ge];return(i,_)=>{const r=se;return n(),a("div",ve,[m(r,{images:t,section:s})])}}}),xe=""+new URL("cover-ai.7CptrgQV.png",import.meta.url).href,be=""+new URL("bg-top-left.Dzlh7txo.png",import.meta.url).href,we=""+new URL("bg-bottom-right.KF3j8Rah.png",import.meta.url).href,Se=p({__name:"IndexCoverAI",setup(l){return(t,s)=>{const i=I;return n(),x(i,{bgImage:o(xe),topFrame:o(be),bottomFrame:o(we)},null,8,["bgImage","topFrame","bottomFrame"])}}}),$e={};function ye(l,t){const s=U,i=G,_=he,r=Se;return n(),a(h,null,[m(s),m(i),m(_),m(r)],64)}const ke=c($e,[["render",ye]]);export{ke as default};
