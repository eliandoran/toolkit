import{s as W,p as q,i as C,f as b,q as fe,e as O,t as G,a as P,c as z,b as S,d as J,g as V,o as g,u as B,h as H,j as K,z as ue,Z as he,L as _e,B as Z,C as R,n as Q,r as me,_ as de,v as ge,w as ve,x as be,k as pe,l as we,H as He,m as ke}from"../chunks/scheduler.CVlXoP1p.js";import{S as X,i as Y,t as k,g as L,f as T,b as M,c as j,a as A,m as D,d as N,e as Ee}from"../chunks/index.B7p841iZ.js";import{e as U}from"../chunks/each.D6YF6ztN.js";import{b as I}from"../chunks/paths.BSxyNoL-.js";import{I as y}from"../chunks/icon.CfgyRktz.js";import{t as Se}from"../chunks/action.DMriyFdV.js";import{H as Me}from"../chunks/header-button.BRJLE3v6.js";import{t as ce}from"../chunks/tools.Dhp0jLg6.js";import{p as Oe}from"../chunks/stores.gxlz7YXr.js";const ze=!0,Ke=Object.freeze(Object.defineProperty({__proto__:null,prerender:ze},Symbol.toStringTag,{value:"Module"}));function ee(o,e,t){const l=o.slice();return l[5]=e[t][0],l[6]=e[t][1],l}function le(o,e,t){const l=o.slice();return l[9]=e[t],l}function te(o){let e,t;return e=new y({props:{icon:o[9].icon,flipHorizontal:o[9].iconFlipHorizontally}}),{c(){j(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,n){D(e,l,n),t=!0},p(l,n){const r={};n&1&&(r.icon=l[9].icon),n&1&&(r.flipHorizontal=l[9].iconFlipHorizontally),e.$set(r)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){M(e.$$.fragment,l),t=!1},d(l){N(e,l)}}}function ne(o){let e,t;return e=new y({props:{icon:o[9].icon,flipHorizontal:o[9].iconFlipHorizontally}}),{c(){j(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,n){D(e,l,n),t=!0},p(l,n){const r={};n&1&&(r.icon=l[9].icon),n&1&&(r.flipHorizontal=l[9].iconFlipHorizontally),e.$set(r)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){M(e.$$.fragment,l),t=!1},d(l){N(e,l)}}}function ie(o){let e,t,l,n,r=o[9].title+"",i,a,f,c,_,h,p,s,u,m,d=o[9].icon&&te(o),v=o[9].icon&&ne(o);return{c(){e=O("li"),t=O("a"),d&&d.c(),l=P(),n=O("span"),i=G(r),f=P(),c=O("a"),v&&v.c(),p=P(),this.h()},l(w){e=z(w,"LI",{});var E=S(e);t=z(E,"A",{href:!0,class:!0});var F=S(t);d&&d.l(F),l=V(F),n=z(F,"SPAN",{class:!0});var $=S(n);i=J($,r),$.forEach(b),F.forEach(b),f=V(E),c=z(E,"A",{href:!0,class:!0,title:!0});var x=S(c);v&&v.l(x),x.forEach(b),p=V(E),E.forEach(b),this.h()},h(){g(n,"class","title"),g(t,"href",a=I+o[9].path),g(t,"class","item-full svelte-1l1wrt9"),B(t,"active",I+o[9].path===o[1]),g(c,"href",_=I+o[9].path),g(c,"class","item-collapsed svelte-1l1wrt9"),g(c,"title",h=o[9].title),B(c,"active",I+o[9].path===o[1])},m(w,E){C(w,e,E),H(e,t),d&&d.m(t,null),H(t,l),H(t,n),H(n,i),H(e,f),H(e,c),v&&v.m(c,null),H(e,p),s=!0,u||(m=[ue(t,"click",o[3]),he(Se.call(null,c,{position:"right"}))],u=!0)},p(w,E){w[9].icon?d?(d.p(w,E),E&1&&k(d,1)):(d=te(w),d.c(),k(d,1),d.m(t,l)):d&&(L(),M(d,1,1,()=>{d=null}),T()),(!s||E&1)&&r!==(r=w[9].title+"")&&K(i,r),(!s||E&1&&a!==(a=I+w[9].path))&&g(t,"href",a),(!s||E&3)&&B(t,"active",I+w[9].path===w[1]),w[9].icon?v?(v.p(w,E),E&1&&k(v,1)):(v=ne(w),v.c(),k(v,1),v.m(c,null)):v&&(L(),M(v,1,1,()=>{v=null}),T()),(!s||E&1&&_!==(_=I+w[9].path))&&g(c,"href",_),(!s||E&1&&h!==(h=w[9].title))&&g(c,"title",h),(!s||E&3)&&B(c,"active",I+w[9].path===w[1])},i(w){s||(k(d),k(v),s=!0)},o(w){M(d),M(v),s=!1},d(w){w&&b(e),d&&d.d(),v&&v.d(),u=!1,_e(m)}}}function ae(o){let e,t,l=o[5]+"",n,r,i,a,f,c,_=U(o[6]),h=[];for(let s=0;s<_.length;s+=1)h[s]=ie(le(o,_,s));const p=s=>M(h[s],1,1,()=>{h[s]=null});return{c(){e=O("section"),t=O("h3"),n=G(l),r=P(),i=O("nav"),a=O("ul");for(let s=0;s<h.length;s+=1)h[s].c();f=P(),this.h()},l(s){e=z(s,"SECTION",{class:!0});var u=S(e);t=z(u,"H3",{class:!0});var m=S(t);n=J(m,l),m.forEach(b),r=V(u),i=z(u,"NAV",{class:!0});var d=S(i);a=z(d,"UL",{});var v=S(a);for(let w=0;w<h.length;w+=1)h[w].l(v);v.forEach(b),d.forEach(b),f=V(u),u.forEach(b),this.h()},h(){g(t,"class","svelte-1l1wrt9"),g(i,"class","nav"),g(e,"class","svelte-1l1wrt9"),B(e,"collapsed",o[2])},m(s,u){C(s,e,u),H(e,t),H(t,n),H(e,r),H(e,i),H(i,a);for(let m=0;m<h.length;m+=1)h[m]&&h[m].m(a,null);H(e,f),c=!0},p(s,u){if((!c||u&1)&&l!==(l=s[5]+"")&&K(n,l),u&11){_=U(s[6]);let m;for(m=0;m<_.length;m+=1){const d=le(s,_,m);h[m]?(h[m].p(d,u),k(h[m],1)):(h[m]=ie(d),h[m].c(),k(h[m],1),h[m].m(a,null))}for(L(),m=_.length;m<h.length;m+=1)p(m);T()}(!c||u&4)&&B(e,"collapsed",s[2])},i(s){if(!c){for(let u=0;u<_.length;u+=1)k(h[u]);c=!0}},o(s){h=h.filter(Boolean);for(let u=0;u<h.length;u+=1)M(h[u]);c=!1},d(s){s&&b(e),fe(h,s)}}}function Be(o){let e,t,l=U(Object.entries(o[0])),n=[];for(let i=0;i<l.length;i+=1)n[i]=ae(ee(o,l,i));const r=i=>M(n[i],1,1,()=>{n[i]=null});return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=q()},l(i){for(let a=0;a<n.length;a+=1)n[a].l(i);e=q()},m(i,a){for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(i,a);C(i,e,a),t=!0},p(i,[a]){if(a&15){l=U(Object.entries(i[0]));let f;for(f=0;f<l.length;f+=1){const c=ee(i,l,f);n[f]?(n[f].p(c,a),k(n[f],1)):(n[f]=ae(c),n[f].c(),k(n[f],1),n[f].m(e.parentNode,e))}for(L(),f=l.length;f<n.length;f+=1)r(f);T()}},i(i){if(!t){for(let a=0;a<l.length;a+=1)k(n[a]);t=!0}},o(i){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)M(n[a]);t=!1},d(i){i&&b(e),fe(n,i)}}}function Pe(o,e,t){let{tools:l}=e,{currentPath:n}=e,{collapsed:r}=e,{menuShownOnMobile:i=!1}=e;function a(){t(4,i=!1)}return o.$$set=f=>{"tools"in f&&t(0,l=f.tools),"currentPath"in f&&t(1,n=f.currentPath),"collapsed"in f&&t(2,r=f.collapsed),"menuShownOnMobile"in f&&t(4,i=f.menuShownOnMobile)},[l,n,r,a,i]}class Ve extends X{constructor(e){super(),Y(this,e,Pe,Be,W,{tools:0,currentPath:1,collapsed:2,menuShownOnMobile:4})}}function oe(o){let e,t;return{c(){e=Z("desc"),t=G(o[7])},l(l){e=R(l,"desc",{});var n=S(e);t=J(n,o[7]),n.forEach(b)},m(l,n){C(l,e,n),H(e,t)},p(l,n){n&128&&K(t,l[7])},d(l){l&&b(e)}}}function se(o){let e,t;return{c(){e=Z("title"),t=G(o[6])},l(l){e=R(l,"title",{});var n=S(e);t=J(n,o[6]),n.forEach(b)},m(l,n){C(l,e,n),H(e,t)},p(l,n){n&64&&K(t,l[6])},d(l){l&&b(e)}}}function Ce(o){let e,t,l,n=o[7]&&oe(o),r=o[6]&&se(o);return{c(){e=Z("svg"),n&&n.c(),t=q(),r&&r.c(),l=Z("path"),this.h()},l(i){e=R(i,"svg",{viewBox:!0,width:!0,height:!0,class:!0,"aria-label":!0,"aria-hidden":!0});var a=S(e);n&&n.l(a),t=q(),r&&r.l(a),l=R(a,"path",{d:!0,fill:!0}),S(l).forEach(b),a.forEach(b),this.h()},h(){g(l,"d","M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"),g(l,"fill",o[2]),g(e,"viewBox",o[3]),g(e,"width",o[0]),g(e,"height",o[1]),g(e,"class",o[8]),g(e,"aria-label",o[4]),g(e,"aria-hidden",o[5])},m(i,a){C(i,e,a),n&&n.m(e,null),H(e,t),r&&r.m(e,null),H(e,l)},p(i,[a]){i[7]?n?n.p(i,a):(n=oe(i),n.c(),n.m(e,t)):n&&(n.d(1),n=null),i[6]?r?r.p(i,a):(r=se(i),r.c(),r.m(e,l)):r&&(r.d(1),r=null),a&4&&g(l,"fill",i[2]),a&8&&g(e,"viewBox",i[3]),a&1&&g(e,"width",i[0]),a&2&&g(e,"height",i[1]),a&256&&g(e,"class",i[8]),a&16&&g(e,"aria-label",i[4]),a&32&&g(e,"aria-hidden",i[5])},i:Q,o:Q,d(i){i&&b(e),n&&n.d(),r&&r.d()}}}function Ie(o,e,t){let{size:l="1em"}=e,{width:n=l}=e,{height:r=l}=e,{color:i="currentColor"}=e,{viewBox:a="0 0 24 24"}=e,{ariaLabel:f=void 0}=e,{ariaHidden:c=void 0}=e,{title:_=void 0}=e,{desc:h=void 0}=e,{class:p=void 0}=e;return o.$$set=s=>{"size"in s&&t(9,l=s.size),"width"in s&&t(0,n=s.width),"height"in s&&t(1,r=s.height),"color"in s&&t(2,i=s.color),"viewBox"in s&&t(3,a=s.viewBox),"ariaLabel"in s&&t(4,f=s.ariaLabel),"ariaHidden"in s&&t(5,c=s.ariaHidden),"title"in s&&t(6,_=s.title),"desc"in s&&t(7,h=s.desc),"class"in s&&t(8,p=s.class)},[n,r,i,a,f,c,_,h,p,l]}class Le extends X{constructor(e){super(),Y(this,e,Ie,Ce,W,{size:9,width:0,height:1,color:2,viewBox:3,ariaLabel:4,ariaHidden:5,title:6,desc:7,class:8})}}function re(o){let e,t,l,n,r,i="Tool",a,f,c,_,h;l=new Me({props:{$$slots:{default:[Te]},$$scope:{ctx:o}}}),l.$on("click",o[4]);function p(u){o[6](u)}let s={tools:ce,currentPath:o[2].url.pathname,collapsed:o[1]};return o[0]!==void 0&&(s.menuShownOnMobile=o[0]),c=new Ve({props:s}),we.push(()=>Ee(c,"menuShownOnMobile",p)),{c(){e=O("aside"),t=O("header"),j(l.$$.fragment),n=P(),r=O("h2"),r.textContent=i,a=P(),f=O("div"),j(c.$$.fragment),this.h()},l(u){e=z(u,"ASIDE",{class:!0});var m=S(e);t=z(m,"HEADER",{});var d=S(t);A(l.$$.fragment,d),n=V(d),r=z(d,"H2",{class:!0,"data-svelte-h":!0}),He(r)!=="svelte-yhwwis"&&(r.textContent=i),d.forEach(b),a=V(m),f=z(m,"DIV",{class:!0});var v=S(f);A(c.$$.fragment,v),v.forEach(b),m.forEach(b),this.h()},h(){g(r,"class","svelte-152lmph"),g(f,"class","inner-wrapper svelte-152lmph"),g(e,"class","menu svelte-152lmph"),B(e,"collapsed",o[1]),B(e,"mobile-show",o[0])},m(u,m){C(u,e,m),H(e,t),D(l,t,null),H(t,n),H(t,r),H(e,a),H(e,f),D(c,f,null),h=!0},p(u,m){const d={};m&128&&(d.$$scope={dirty:m,ctx:u}),l.$set(d);const v={};m&4&&(v.currentPath=u[2].url.pathname),m&2&&(v.collapsed=u[1]),!_&&m&1&&(_=!0,v.menuShownOnMobile=u[0],ke(()=>_=!1)),c.$set(v),(!h||m&2)&&B(e,"collapsed",u[1]),(!h||m&1)&&B(e,"mobile-show",u[0])},i(u){h||(k(l.$$.fragment,u),k(c.$$.fragment,u),h=!0)},o(u){M(l.$$.fragment,u),M(c.$$.fragment,u),h=!1},d(u){u&&b(e),N(l),N(c)}}}function Te(o){let e,t;return e=new y({props:{icon:Le}}),{c(){j(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,n){D(e,l,n),t=!0},p:Q,i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){M(e.$$.fragment,l),t=!1},d(l){N(e,l)}}}function je(o){let e,t,l,n,r,i;document.title=e=o[3](o[2].url.pathname);let a=o[2].url.pathname!=="/"&&re(o);const f=o[5].default,c=me(f,o,o[7],null);return{c(){t=P(),l=O("div"),a&&a.c(),n=P(),r=O("div"),c&&c.c(),this.h()},l(_){de("svelte-16jreza",document.head).forEach(b),t=V(_),l=z(_,"DIV",{class:!0});var p=S(l);a&&a.l(p),n=V(p),r=z(p,"DIV",{class:!0});var s=S(r);c&&c.l(s),s.forEach(b),p.forEach(b),this.h()},h(){g(r,"class","main-content svelte-152lmph"),g(l,"class","page-wrapper svelte-152lmph")},m(_,h){C(_,t,h),C(_,l,h),a&&a.m(l,null),H(l,n),H(l,r),c&&c.m(r,null),i=!0},p(_,[h]){(!i||h&12)&&e!==(e=_[3](_[2].url.pathname))&&(document.title=e),_[2].url.pathname!=="/"?a?(a.p(_,h),h&4&&k(a,1)):(a=re(_),a.c(),k(a,1),a.m(l,n)):a&&(L(),M(a,1,1,()=>{a=null}),T()),c&&c.p&&(!i||h&128)&&ge(c,f,_,_[7],i?be(f,_[7],h,null):ve(_[7]),null)},i(_){i||(k(a),k(c,_),i=!0)},o(_){M(a),M(c,_),i=!1},d(_){_&&(b(t),b(l)),a&&a.d(),c&&c.d(_)}}}function Ae(o,e,t){let l;pe(o,Oe,p=>t(2,l=p));let{$$slots:n={},$$scope:r}=e,i=!1,a=!1;function f(p){const s=c(p);let u="";return s&&(u=`${s.title} - `),u+="Toolkit",u}function c(p){for(const s of Object.values(ce))for(const u of s)if(u.path===p)return u;return null}function _(){t(1,a=!a),t(0,i=!i)}function h(p){i=p,t(0,i)}return o.$$set=p=>{"$$scope"in p&&t(7,r=p.$$scope)},[i,a,l,f,_,n,h,r]}class Qe extends X{constructor(e){super(),Y(this,e,Ae,je,W,{})}}export{Qe as component,Ke as universal};