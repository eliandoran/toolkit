import{s as W,k as P,e as v,a as S,c as b,b as k,f as u,g as J,o as m,i as I,h as T,A as E,z as U}from"../chunks/scheduler.CVlXoP1p.js";import{S as A,i as N,c as p,a as d,m as $,t as h,b as g,d as _}from"../chunks/index.B7p841iZ.js";import{t as O,C}from"../chunks/codemirror.CoeJeJdy.js";import{j as D}from"../chunks/index.BZmG2Gmm.js";import{T as V}from"../chunks/tool.DmYppswC.js";import{T as H}from"../chunks/two-column-view.Crq8HItu.js";import{S as y}from"../chunks/stack-view.AjxPP1mY.js";import{W as R}from"../chunks/warning-box.DlvfD-xO.js";class w extends Error{}w.prototype.name="InvalidTokenError";function q(o){return decodeURIComponent(atob(o).replace(/(.)/g,(e,t)=>{let n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}function z(o){let e=o.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return q(e)}catch{return atob(e)}}function j(o,e){if(typeof o!="string")throw new w("Invalid token specified: must be a string");e||(e={});const t=e.header===!0?0:1,n=o.split(".")[t];if(typeof n!="string")throw new w(`Invalid token specified: missing part #${t+1}`);let r;try{r=z(n)}catch(a){throw new w(`Invalid token specified: invalid base64 for part #${t+1} (${a.message})`)}try{return JSON.parse(r)}catch(a){throw new w(`Invalid token specified: invalid json for part #${t+1} (${a.message})`)}}function M(o){let e,t,n,r,a,s,i;return r=new R({props:{message:o[1]}}),{c(){e=v("div"),t=v("textarea"),n=S(),p(r.$$.fragment),this.h()},l(l){e=b(l,"DIV",{slot:!0,class:!0});var c=k(e);t=b(c,"TEXTAREA",{class:!0}),k(t).forEach(u),n=J(c),d(r.$$.fragment,c),c.forEach(u),this.h()},h(){m(t,"class","svelte-1njml3i"),m(e,"slot","left"),m(e,"class","svelte-1njml3i")},m(l,c){I(l,e,c),T(e,t),E(t,o[0]),T(e,n),$(r,e,null),a=!0,s||(i=U(t,"input",o[6]),s=!0)},p(l,c){c&1&&E(t,l[0]);const f={};c&2&&(f.message=l[1]),r.$set(f)},i(l){a||(h(r.$$.fragment,l),a=!0)},o(l){g(r.$$.fragment,l),a=!1},d(l){l&&u(e),_(r),s=!1,i()}}}function X(o){let e,t,n;return t=new C({props:{value:o[2],lang:D(),theme:o[4],lineWrapping:!0,readonly:!0}}),{c(){e=v("div"),p(t.$$.fragment),this.h()},l(r){e=b(r,"DIV",{class:!0});var a=k(e);d(t.$$.fragment,a),a.forEach(u),this.h()},h(){m(e,"class","codemirror-outer-wrapper header svelte-1njml3i")},m(r,a){I(r,e,a),$(t,e,null),n=!0},p(r,a){const s={};a&4&&(s.value=r[2]),a&16&&(s.theme=r[4]),t.$set(s)},i(r){n||(h(t.$$.fragment,r),n=!0)},o(r){g(t.$$.fragment,r),n=!1},d(r){r&&u(e),_(t)}}}function x(o){let e,t,n;return t=new C({props:{value:o[3],lang:D(),theme:o[4],lineWrapping:!0,readonly:!0}}),{c(){e=v("div"),p(t.$$.fragment),this.h()},l(r){e=b(r,"DIV",{class:!0});var a=k(e);d(t.$$.fragment,a),a.forEach(u),this.h()},h(){m(e,"class","codemirror-outer-wrapper payload svelte-1njml3i")},m(r,a){I(r,e,a),$(t,e,null),n=!0},p(r,a){const s={};a&8&&(s.value=r[3]),a&16&&(s.theme=r[4]),t.$set(s)},i(r){n||(h(t.$$.fragment,r),n=!0)},o(r){g(t.$$.fragment,r),n=!1},d(r){r&&u(e),_(t)}}}function B(o){let e,t,n,r,a;return t=new y({props:{title:"Header",hasPadding:!1,$$slots:{default:[X]},$$scope:{ctx:o}}}),r=new y({props:{title:"Payload",hasPadding:!1,isCollapsible:!1,fill:!0,$$slots:{default:[x]},$$scope:{ctx:o}}}),{c(){e=v("div"),p(t.$$.fragment),n=S(),p(r.$$.fragment),this.h()},l(s){e=b(s,"DIV",{slot:!0,class:!0});var i=k(e);d(t.$$.fragment,i),n=J(i),d(r.$$.fragment,i),i.forEach(u),this.h()},h(){m(e,"slot","right"),m(e,"class","svelte-1njml3i")},m(s,i){I(s,e,i),$(t,e,null),T(e,n),$(r,e,null),a=!0},p(s,i){const l={};i&148&&(l.$$scope={dirty:i,ctx:s}),t.$set(l);const c={};i&152&&(c.$$scope={dirty:i,ctx:s}),r.$set(c)},i(s){a||(h(t.$$.fragment,s),h(r.$$.fragment,s),a=!0)},o(s){g(t.$$.fragment,s),g(r.$$.fragment,s),a=!1},d(s){s&&u(e),_(t),_(r)}}}function F(o){let e,t;return e=new H({props:{leftTitle:"Input the JSON Web Token (JWT)",hasPadding:!1,$$slots:{right:[B],left:[M]},$$scope:{ctx:o}}}),{c(){p(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,r){$(e,n,r),t=!0},p(n,r){const a={};r&159&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){_(e,n)}}}function G(o){let e,t;return e=new V({props:{$$slots:{default:[F]},$$scope:{ctx:o}}}),{c(){p(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,r){$(e,n,r),t=!0},p(n,[r]){const a={};r&159&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){_(e,n)}}}function K(o,e,t){let n;P(o,O,f=>t(4,n=f));let r,a,s,i="",l="";function c(){r=this.value,t(0,r)}return o.$$.update=()=>{if(o.$$.dirty&33){t(1,s=""),t(2,i=""),t(3,l="");try{if(r){const f=j(r,{header:!0});t(2,i=JSON.stringify(f,null,4)),t(5,a=j(r)),t(3,l=JSON.stringify(a,null,4))}}catch(f){if(f instanceof w)t(1,s=f.message||"Unknown error while decoding the JWT token.");else throw f}}},[r,s,i,l,n,a,c]}class ae extends A{constructor(e){super(),N(this,e,K,G,W,{})}}export{ae as component};