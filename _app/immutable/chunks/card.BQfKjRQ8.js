import{s as v,u as b,a as k,e as c,g as C,c as r,b as m,f as u,o as g,v as _,i as h,w as P,x as w,y as E,t as S,d as p,h as N,j}from"./scheduler.DA8nbSZb.js";import{S as q,i as H,t as I,b as O}from"./index.BEkOJB6f.js";function d(f){let a,i;return{c(){a=c("h3"),i=S(f[0]),this.h()},l(l){a=r(l,"H3",{class:!0});var t=m(a);i=p(t,f[0]),t.forEach(u),this.h()},h(){g(a,"class","svelte-16ak1vv")},m(l,t){h(l,a,t),N(a,i)},p(l,t){t&1&&j(i,l[0])},d(l){l&&u(a)}}}function T(f){let a,i,l,t=f[0]&&d(f);const o=f[4].default,n=b(o,f,f[3],null);return{c(){t&&t.c(),a=k(),i=c("section"),n&&n.c(),this.h()},l(e){t&&t.l(e),a=C(e),i=r(e,"SECTION",{class:!0});var s=m(i);n&&n.l(s),s.forEach(u),this.h()},h(){g(i,"class","svelte-16ak1vv"),_(i,"thin",f[1]),_(i,"with-title",f[0]),_(i,"no-padding",f[2])},m(e,s){t&&t.m(e,s),h(e,a,s),h(e,i,s),n&&n.m(i,null),l=!0},p(e,[s]){e[0]?t?t.p(e,s):(t=d(e),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null),n&&n.p&&(!l||s&8)&&P(n,o,e,e[3],l?E(o,e[3],s,null):w(e[3]),null),(!l||s&2)&&_(i,"thin",e[1]),(!l||s&1)&&_(i,"with-title",e[0]),(!l||s&4)&&_(i,"no-padding",e[2])},i(e){l||(I(n,e),l=!0)},o(e){O(n,e),l=!1},d(e){e&&(u(a),u(i)),t&&t.d(e),n&&n.d(e)}}}function z(f,a,i){let{$$slots:l={},$$scope:t}=a,{title:o=void 0}=a,{thin:n=!1}=a,{noPadding:e=!1}=a;return f.$$set=s=>{"title"in s&&i(0,o=s.title),"thin"in s&&i(1,n=s.thin),"noPadding"in s&&i(2,e=s.noPadding),"$$scope"in s&&i(3,t=s.$$scope)},[o,n,e,t,l]}class D extends q{constructor(a){super(),H(this,a,z,T,v,{title:0,thin:1,noPadding:2})}}export{D as C};