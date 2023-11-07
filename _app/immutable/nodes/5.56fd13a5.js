import{s as N,f as w,a as I,g as y,h as B,c as R,d as p,j as a,i as b,v as D,I as $,J as T,M}from"../chunks/scheduler.72378643.js";import{S as V,i as C,b as c,d as h,m,a as _,t as g,e as d}from"../chunks/index.ecff66b7.js";import{T as q}from"../chunks/tool.00d54485.js";import{I as v}from"../chunks/input-field.293ab1fd.js";import{T as X}from"../chunks/two-column-view.355ce081.js";const _t=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function j(l){const t=[];for(let n=0;n<l.length;n++){const s=l[n];if(s==="1")t.push(!0);else if(s==="0")t.push(!1);else throw new Error("Invalid value.")}return t}function k(l){return l.map(t=>t?"1":"0").join("")}function z(l,t){if(l.length==t.length)return;let n,s;l.length>t.length?(s=l,n=t):(s=t,n=l);const e=s.length-n.length;for(let r=0;r<e;r++)n.unshift(!1)}function E(l,t,n){const s=[];for(let e=0;e<l.length;e++)s[e]=n(l[e],t[e]);return k(s)}function F(l,t){const n=j(l);for(let s=0;s<t;s++)n.push(0);return k(n)}function G(l,t){return{orResult:E(l,t,(n,s)=>n||s),andResult:E(l,t,(n,s)=>n&&s),xorResult:E(l,t,(n,s)=>n^s)}}function J(l){let t,n,s;return{c(){t=w("input"),this.h()},l(e){t=y(e,"INPUT",{type:!0,class:!0}),this.h()},h(){a(t,"type","text"),a(t,"class","binary-input")},m(e,r){b(e,t,r),$(t,l[0]),n||(s=T(t,"input",l[8]),n=!0)},p(e,r){r&1&&t.value!==e[0]&&$(t,e[0])},d(e){e&&p(t),n=!1,s()}}}function H(l){let t,n,s;return{c(){t=w("input"),this.h()},l(e){t=y(e,"INPUT",{type:!0,class:!0}),this.h()},h(){a(t,"type","text"),a(t,"class","binary-input")},m(e,r){b(e,t,r),$(t,l[1]),n||(s=T(t,"input",l[9]),n=!0)},p(e,r){r&2&&t.value!==e[1]&&$(t,e[1])},d(e){e&&p(t),n=!1,s()}}}function K(l){let t,n,s,e,r;return n=new v({props:{label:"First number (binary)",$$slots:{default:[J]},$$scope:{ctx:l}}}),e=new v({props:{label:"Second number (binary)",$$slots:{default:[H]},$$scope:{ctx:l}}}),{c(){t=w("div"),c(n.$$.fragment),s=I(),c(e.$$.fragment),this.h()},l(u){t=y(u,"DIV",{slot:!0});var i=B(t);h(n.$$.fragment,i),s=R(i),h(e.$$.fragment,i),i.forEach(p),this.h()},h(){a(t,"slot","left")},m(u,i){b(u,t,i),m(n,t,null),D(t,s),m(e,t,null),r=!0},p(u,i){const o={};i&1025&&(o.$$scope={dirty:i,ctx:u}),n.$set(o);const f={};i&1026&&(f.$$scope={dirty:i,ctx:u}),e.$set(f)},i(u){r||(_(n.$$.fragment,u),_(e.$$.fragment,u),r=!0)},o(u){g(n.$$.fragment,u),g(e.$$.fragment,u),r=!1},d(u){u&&p(t),d(n),d(e)}}}function Q(l){let t,n,s;return{c(){t=w("input"),this.h()},l(e){t=y(e,"INPUT",{type:!0,class:!0}),this.h()},h(){a(t,"type","text"),a(t,"class","binary-input"),t.disabled=!0},m(e,r){b(e,t,r),$(t,l[2]),n||(s=T(t,"input",l[5]),n=!0)},p(e,r){r&4&&t.value!==e[2]&&$(t,e[2])},d(e){e&&p(t),n=!1,s()}}}function W(l){let t,n,s;return{c(){t=w("input"),this.h()},l(e){t=y(e,"INPUT",{type:!0,class:!0}),this.h()},h(){a(t,"type","text"),a(t,"class","binary-input"),t.disabled=!0},m(e,r){b(e,t,r),$(t,l[3]),n||(s=T(t,"input",l[6]),n=!0)},p(e,r){r&8&&t.value!==e[3]&&$(t,e[3])},d(e){e&&p(t),n=!1,s()}}}function Y(l){let t,n,s;return{c(){t=w("input"),this.h()},l(e){t=y(e,"INPUT",{type:!0,class:!0}),this.h()},h(){a(t,"type","text"),a(t,"class","binary-input"),t.disabled=!0},m(e,r){b(e,t,r),$(t,l[4]),n||(s=T(t,"input",l[7]),n=!0)},p(e,r){r&16&&t.value!==e[4]&&$(t,e[4])},d(e){e&&p(t),n=!1,s()}}}function Z(l){let t,n,s,e,r,u,i;return n=new v({props:{label:"OR",$$slots:{default:[Q]},$$scope:{ctx:l}}}),e=new v({props:{label:"AND",$$slots:{default:[W]},$$scope:{ctx:l}}}),u=new v({props:{label:"XOR",$$slots:{default:[Y]},$$scope:{ctx:l}}}),{c(){t=w("div"),c(n.$$.fragment),s=I(),c(e.$$.fragment),r=I(),c(u.$$.fragment),this.h()},l(o){t=y(o,"DIV",{slot:!0});var f=B(t);h(n.$$.fragment,f),s=R(f),h(e.$$.fragment,f),r=R(f),h(u.$$.fragment,f),f.forEach(p),this.h()},h(){a(t,"slot","right")},m(o,f){b(o,t,f),m(n,t,null),D(t,s),m(e,t,null),D(t,r),m(u,t,null),i=!0},p(o,f){const P={};f&1028&&(P.$$scope={dirty:f,ctx:o}),n.$set(P);const O={};f&1032&&(O.$$scope={dirty:f,ctx:o}),e.$set(O);const S={};f&1040&&(S.$$scope={dirty:f,ctx:o}),u.$set(S)},i(o){i||(_(n.$$.fragment,o),_(e.$$.fragment,o),_(u.$$.fragment,o),i=!0)},o(o){g(n.$$.fragment,o),g(e.$$.fragment,o),g(u.$$.fragment,o),i=!1},d(o){o&&p(t),d(n),d(e),d(u)}}}function A(l){let t,n;return t=new X({props:{leftTitle:"Generic bitwise operations (OR, AND, XOR)",rightTitle:"Result (binary)",$$slots:{right:[Z],left:[K]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(s){h(t.$$.fragment,s)},m(s,e){m(t,s,e),n=!0},p(s,[e]){const r={};e&1055&&(r.$$scope={dirty:e,ctx:s}),t.$set(r)},i(s){n||(_(t.$$.fragment,s),n=!0)},o(s){g(t.$$.fragment,s),n=!1},d(s){d(t,s)}}}function x(l,t,n){let s=1001,e=1,r,u,i;function o(){r=this.value,n(2,r),n(0,s),n(1,e)}function f(){u=this.value,n(3,u),n(0,s),n(1,e)}function P(){i=this.value,n(4,i),n(0,s),n(1,e)}function O(){s=this.value,n(0,s)}function S(){e=this.value,n(1,e)}return l.$$.update=()=>{if(l.$$.dirty&3&&s&&e)try{const U=j(s),L=j(e);z(U,L),n(2,{orResult:r,andResult:u,xorResult:i}=G(U,L),r,(n(3,u),n(0,s),n(1,e)),(n(4,i),n(0,s),n(1,e)))}catch(U){console.log(U)}},[s,e,r,u,i,o,f,P,O,S]}class tt extends V{constructor(t){super(),C(this,t,x,A,N,{})}}function et(l){let t,n,s;return{c(){t=w("input"),this.h()},l(e){t=y(e,"INPUT",{type:!0,class:!0}),this.h()},h(){a(t,"type","text"),a(t,"class","binary-input")},m(e,r){b(e,t,r),$(t,l[0]),n||(s=T(t,"input",l[4]),n=!0)},p(e,r){r&1&&t.value!==e[0]&&$(t,e[0])},d(e){e&&p(t),n=!1,s()}}}function nt(l){let t,n,s;return{c(){t=w("input"),this.h()},l(e){t=y(e,"INPUT",{type:!0}),this.h()},h(){a(t,"type","number")},m(e,r){b(e,t,r),$(t,l[1]),n||(s=T(t,"input",l[5]),n=!0)},p(e,r){r&2&&M(t.value)!==e[1]&&$(t,e[1])},d(e){e&&p(t),n=!1,s()}}}function st(l){let t,n,s,e,r;return n=new v({props:{label:"Number (binary)",$$slots:{default:[et]},$$scope:{ctx:l}}}),e=new v({props:{label:"Shift by (decimal)",$$slots:{default:[nt]},$$scope:{ctx:l}}}),{c(){t=w("div"),c(n.$$.fragment),s=I(),c(e.$$.fragment),this.h()},l(u){t=y(u,"DIV",{slot:!0});var i=B(t);h(n.$$.fragment,i),s=R(i),h(e.$$.fragment,i),i.forEach(p),this.h()},h(){a(t,"slot","left")},m(u,i){b(u,t,i),m(n,t,null),D(t,s),m(e,t,null),r=!0},p(u,i){const o={};i&65&&(o.$$scope={dirty:i,ctx:u}),n.$set(o);const f={};i&66&&(f.$$scope={dirty:i,ctx:u}),e.$set(f)},i(u){r||(_(n.$$.fragment,u),_(e.$$.fragment,u),r=!0)},o(u){g(n.$$.fragment,u),g(e.$$.fragment,u),r=!1},d(u){u&&p(t),d(n),d(e)}}}function rt(l){let t,n,s;return{c(){t=w("input"),this.h()},l(e){t=y(e,"INPUT",{type:!0,class:!0}),this.h()},h(){a(t,"type","text"),a(t,"class","binary-input"),t.disabled=!0},m(e,r){b(e,t,r),$(t,l[2]),n||(s=T(t,"input",l[3]),n=!0)},p(e,r){r&4&&t.value!==e[2]&&$(t,e[2])},d(e){e&&p(t),n=!1,s()}}}function lt(l){let t,n,s;return n=new v({props:{label:"Left shift (binary)",$$slots:{default:[rt]},$$scope:{ctx:l}}}),{c(){t=w("div"),c(n.$$.fragment),this.h()},l(e){t=y(e,"DIV",{slot:!0});var r=B(t);h(n.$$.fragment,r),r.forEach(p),this.h()},h(){a(t,"slot","right")},m(e,r){b(e,t,r),m(n,t,null),s=!0},p(e,r){const u={};r&68&&(u.$$scope={dirty:r,ctx:e}),n.$set(u)},i(e){s||(_(n.$$.fragment,e),s=!0)},o(e){g(n.$$.fragment,e),s=!1},d(e){e&&p(t),d(n)}}}function ut(l){let t,n;return t=new X({props:{leftTitle:"Bitshift",rightTitle:"Result",$$slots:{right:[lt],left:[st]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(s){h(t.$$.fragment,s)},m(s,e){m(t,s,e),n=!0},p(s,[e]){const r={};e&71&&(r.$$scope={dirty:e,ctx:s}),t.$set(r)},i(s){n||(_(t.$$.fragment,s),n=!0)},o(s){g(t.$$.fragment,s),n=!1},d(s){d(t,s)}}}function it(l,t,n){let s,e,r;function u(){r=this.value,n(2,r),n(0,s),n(1,e)}function i(){s=this.value,n(0,s)}function o(){e=M(this.value),n(1,e)}return l.$$.update=()=>{l.$$.dirty&3&&s&&e&&n(2,r=F(s,e))},[s,e,r,u,i,o]}class ot extends V{constructor(t){super(),C(this,t,it,ut,N,{})}}function ft(l){let t,n,s,e;return t=new tt({}),s=new ot({}),{c(){c(t.$$.fragment),n=I(),c(s.$$.fragment)},l(r){h(t.$$.fragment,r),n=R(r),h(s.$$.fragment,r)},m(r,u){m(t,r,u),b(r,n,u),m(s,r,u),e=!0},i(r){e||(_(t.$$.fragment,r),_(s.$$.fragment,r),e=!0)},o(r){g(t.$$.fragment,r),g(s.$$.fragment,r),e=!1},d(r){r&&p(n),d(t,r),d(s,r)}}}function at(l){let t,n;return t=new q({props:{$$slots:{default:[ft]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(s){h(t.$$.fragment,s)},m(s,e){m(t,s,e),n=!0},p(s,[e]){const r={};e&1&&(r.$$scope={dirty:e,ctx:s}),t.$set(r)},i(s){n||(_(t.$$.fragment,s),n=!0)},o(s){g(t.$$.fragment,s),n=!1},d(s){d(t,s)}}}class gt extends V{constructor(t){super(),C(this,t,null,at,N,{})}}export{gt as component,_t as universal};
