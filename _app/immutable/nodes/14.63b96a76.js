import{s as C,l as b,f as h,m as y,g as d,j as _,i as m,K as $,w as P,N as c,B as V,d as o,y as q,a as B,c as K}from"../chunks/scheduler.9e408aab.js";import{S as O,i as S,b as v,d as w,m as N,a as T,t as I,e as U}from"../chunks/index.97a8dc8b.js";import{O as D}from"../chunks/one-column-view.e77451f0.js";import{T as E}from"../chunks/tool.cfc1dc5e.js";import{C as j}from"../chunks/card.842ae569.js";function F(l){let t,n,e,s,r,f,a,u,i;return{c(){t=b(`Percentage increase from
`),n=h("input"),e=b(`
to
`),s=h("input"),r=b(`
is
`),f=h("input"),a=b("%"),this.h()},l(p){t=y(p,`Percentage increase from
`),n=d(p,"INPUT",{type:!0}),e=y(p,`
to
`),s=d(p,"INPUT",{type:!0}),r=y(p,`
is
`),f=d(p,"INPUT",{type:!0,class:!0}),a=y(p,"%"),this.h()},h(){_(n,"type","number"),_(s,"type","number"),_(f,"type","text"),_(f,"class","percentage"),f.disabled=!0},m(p,g){m(p,t,g),m(p,n,g),$(n,l[0]),m(p,e,g),m(p,s,g),$(s,l[1]),m(p,r,g),m(p,f,g),$(f,l[2]),m(p,a,g),u||(i=[P(n,"input",l[3]),P(s,"input",l[4]),P(f,"input",l[5])],u=!0)},p(p,[g]){g&1&&c(n.value)!==p[0]&&$(n,p[0]),g&2&&c(s.value)!==p[1]&&$(s,p[1]),g&4&&f.value!==p[2]&&$(f,p[2])},i:V,o:V,d(p){p&&(o(t),o(n),o(e),o(s),o(r),o(f),o(a)),u=!1,q(i)}}}function G(l,t,n){let e,s,r;function f(){e=c(this.value),n(0,e)}function a(){s=c(this.value),n(1,s)}function u(){r=this.value,n(2,r),n(0,e),n(1,s)}return l.$$.update=()=>{if(l.$$.dirty&3&&e&&s){const i=s-e;n(2,r=i/e*100)}},[e,s,r,f,a,u]}class H extends O{constructor(t){super(),S(this,t,G,F,C,{})}}function J(l){let t,n,e,s,r,f,a;return{c(){t=h("input"),n=b(`
increased/decreased by
`),e=h("input"),s=b(`%
is
`),r=h("input"),this.h()},l(u){t=d(u,"INPUT",{type:!0}),n=y(u,`
increased/decreased by
`),e=d(u,"INPUT",{type:!0}),s=y(u,`%
is
`),r=d(u,"INPUT",{type:!0}),this.h()},h(){_(t,"type","number"),_(e,"type","number"),_(r,"type","number"),r.disabled=!0},m(u,i){m(u,t,i),$(t,l[0]),m(u,n,i),m(u,e,i),$(e,l[1]),m(u,s,i),m(u,r,i),$(r,l[2]),f||(a=[P(t,"input",l[3]),P(e,"input",l[4]),P(r,"input",l[5])],f=!0)},p(u,[i]){i&1&&c(t.value)!==u[0]&&$(t,u[0]),i&2&&c(e.value)!==u[1]&&$(e,u[1]),i&4&&c(r.value)!==u[2]&&$(r,u[2])},i:V,o:V,d(u){u&&(o(t),o(n),o(e),o(s),o(r)),f=!1,q(a)}}}function L(l,t,n){let e,s,r;function f(){e=c(this.value),n(0,e)}function a(){s=c(this.value),n(1,s)}function u(){r=c(this.value),n(2,r),n(0,e),n(1,s)}return l.$$.update=()=>{l.$$.dirty&3&&e&&s&&n(2,r=e+e*(s/100))},[e,s,r,f,a,u]}class M extends O{constructor(t){super(),S(this,t,L,J,C,{})}}function Q(l){let t,n,e,s,r,f,a;return{c(){t=h("input"),n=b(`
is
`),e=h("input"),s=b(`%
of
`),r=h("input"),this.h()},l(u){t=d(u,"INPUT",{type:!0}),n=y(u,`
is
`),e=d(u,"INPUT",{type:!0,class:!0}),s=y(u,`%
of
`),r=d(u,"INPUT",{type:!0}),this.h()},h(){_(t,"type","number"),_(e,"type","text"),_(e,"class","percentage"),e.disabled=!0,_(r,"type","number")},m(u,i){m(u,t,i),$(t,l[0]),m(u,n,i),m(u,e,i),$(e,l[2]),m(u,s,i),m(u,r,i),$(r,l[1]),f||(a=[P(t,"input",l[3]),P(e,"input",l[4]),P(r,"input",l[5])],f=!0)},p(u,[i]){i&1&&c(t.value)!==u[0]&&$(t,u[0]),i&4&&e.value!==u[2]&&$(e,u[2]),i&2&&c(r.value)!==u[1]&&$(r,u[1])},i:V,o:V,d(u){u&&(o(t),o(n),o(e),o(s),o(r)),f=!1,q(a)}}}function R(l,t,n){let e,s,r;function f(){e=c(this.value),n(0,e)}function a(){s=this.value,n(2,s),n(0,e),n(1,r)}function u(){r=c(this.value),n(1,r)}return l.$$.update=()=>{l.$$.dirty&3&&e&&r&&n(2,s=e/r*100)},[e,r,s,f,a,u]}class W extends O{constructor(t){super(),S(this,t,R,Q,C,{})}}function X(l){let t,n,e,s,r,f,a;return{c(){t=h("input"),n=b(`% of
`),e=h("input"),s=b(` is
`),r=h("input"),this.h()},l(u){t=d(u,"INPUT",{type:!0,class:!0}),n=y(u,`% of
`),e=d(u,"INPUT",{type:!0}),s=y(u,` is
`),r=d(u,"INPUT",{type:!0}),this.h()},h(){_(t,"type","number"),_(t,"class","percentage"),_(e,"type","number"),_(r,"type","text"),r.disabled=!0},m(u,i){m(u,t,i),$(t,l[0]),m(u,n,i),m(u,e,i),$(e,l[1]),m(u,s,i),m(u,r,i),$(r,l[2]),f||(a=[P(t,"input",l[3]),P(e,"input",l[4]),P(r,"input",l[5])],f=!0)},p(u,[i]){i&1&&c(t.value)!==u[0]&&$(t,u[0]),i&2&&c(e.value)!==u[1]&&$(e,u[1]),i&4&&r.value!==u[2]&&$(r,u[2])},i:V,o:V,d(u){u&&(o(t),o(n),o(e),o(s),o(r)),f=!1,q(a)}}}function Y(l,t,n){let e,s,r;function f(){e=c(this.value),n(0,e)}function a(){s=c(this.value),n(1,s)}function u(){r=this.value,n(2,r),n(0,e),n(1,s)}return l.$$.update=()=>{l.$$.dirty&3&&(e&&s?n(2,r=e/100*s):n(2,r=""))},[e,s,r,f,a,u]}class Z extends O{constructor(t){super(),S(this,t,Y,X,C,{})}}function x(l){let t,n;return t=new Z({}),{c(){v(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,s){N(t,e,s),n=!0},i(e){n||(T(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function ee(l){let t,n;return t=new W({}),{c(){v(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,s){N(t,e,s),n=!0},i(e){n||(T(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function te(l){let t,n;return t=new H({}),{c(){v(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,s){N(t,e,s),n=!0},i(e){n||(T(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function ne(l){let t,n;return t=new M({}),{c(){v(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,s){N(t,e,s),n=!0},i(e){n||(T(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function ue(l){let t,n,e,s,r,f,a,u;return t=new j({props:{title:"Value from percentage",$$slots:{default:[x]},$$scope:{ctx:l}}}),e=new j({props:{title:"Percentage of value",$$slots:{default:[ee]},$$scope:{ctx:l}}}),r=new j({props:{title:"Percentage increase from two values",$$slots:{default:[te]},$$scope:{ctx:l}}}),a=new j({props:{title:"Percentage increase",$$slots:{default:[ne]},$$scope:{ctx:l}}}),{c(){v(t.$$.fragment),n=B(),v(e.$$.fragment),s=B(),v(r.$$.fragment),f=B(),v(a.$$.fragment)},l(i){w(t.$$.fragment,i),n=K(i),w(e.$$.fragment,i),s=K(i),w(r.$$.fragment,i),f=K(i),w(a.$$.fragment,i)},m(i,p){N(t,i,p),m(i,n,p),N(e,i,p),m(i,s,p),N(r,i,p),m(i,f,p),N(a,i,p),u=!0},p(i,p){const g={};p&1&&(g.$$scope={dirty:p,ctx:i}),t.$set(g);const k={};p&1&&(k.$$scope={dirty:p,ctx:i}),e.$set(k);const z={};p&1&&(z.$$scope={dirty:p,ctx:i}),r.$set(z);const A={};p&1&&(A.$$scope={dirty:p,ctx:i}),a.$set(A)},i(i){u||(T(t.$$.fragment,i),T(e.$$.fragment,i),T(r.$$.fragment,i),T(a.$$.fragment,i),u=!0)},o(i){I(t.$$.fragment,i),I(e.$$.fragment,i),I(r.$$.fragment,i),I(a.$$.fragment,i),u=!1},d(i){i&&(o(n),o(s),o(f)),U(t,i),U(e,i),U(r,i),U(a,i)}}}function re(l){let t,n;return t=new D({props:{title:"Percentage calculator",$$slots:{default:[ue]},$$scope:{ctx:l}}}),{c(){v(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,s){N(t,e,s),n=!0},p(e,s){const r={};s&1&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){n||(T(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function se(l){let t,n;return t=new E({props:{$$slots:{default:[re]},$$scope:{ctx:l}}}),{c(){v(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,s){N(t,e,s),n=!0},p(e,[s]){const r={};s&1&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){n||(T(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}class me extends O{constructor(t){super(),S(this,t,null,se,C,{})}}export{me as component};
