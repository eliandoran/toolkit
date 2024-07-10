import{s as ae,N as le,p as ee,i as _,f as o,e as $,c as h,O as ne,n as Y,t as N,a as T,b as K,d as M,g as j,o as m,h as p,j as W}from"../chunks/scheduler.DA8nbSZb.js";import{S as ce,i as oe,c as O,a as R,m as F,t as A,b as I,d as J,g as re,f as ie}from"../chunks/index.BEkOJB6f.js";import{C as H}from"../chunks/card.BQfKjRQ8.js";import{O as ue}from"../chunks/one-column-view.BkIwNrfn.js";import{T as fe}from"../chunks/tool.CTYN5z7q.js";const pe=["CapsLock","ControlLeft","ControlRight","AltLeft","AltRight","ShiftLeft","ShiftRight"];function te(l){const e=[],s=l.ctrlKey||l.altKey||l.metaKey;if(pe.includes(l.code))e.push(`const isPressed = (e.code == "${l.code}");`);else if(!s)e.push("const isMeta = (e.ctrlKey || e.altKey || e.metaKey);"),e.push(`const isPressed = (!isMeta && e.key == "${l.key}");`);else{const a=$e(l);e.push(`const is${a} = (${he(l)});`),e.push(`const isPressed = (is${a} && e.key == "${l.key}");`)}return e.join(`
`)}function se(l){const e=[];return l.ctrlKey&&l.key!=="Control"&&e.push("Control"),l.altKey&&l.key!=="Alt"&&e.push("Alt"),l.metaKey&&l.key!=="Meta"&&e.push("Meta"),l.shiftKey&&l.key!=="Shift"&&e.push("Shift"),l.code.startsWith("Key")?e.push(l.key):e.push(l.code),e.join(" + ")}function $e(l){const e=[];return l.ctrlKey&&e.push("Ctrl"),l.altKey&&e.push("Alt"),l.metaKey&&e.push("Meta"),e.join("")}function he(l){return[Z("e.ctrlKey",l.ctrlKey),Z("e.altKey",l.altKey),Z("e.metaKey",l.metaKey)].join(" && ")}function Z(l,e){return e?l:"!"+l}function de(l){let e,s="Press any key to display information about it.";return{c(){e=$("p"),e.textContent=s},l(t){e=h(t,"P",{"data-svelte-h":!0}),ne(e)!=="svelte-vb16fb"&&(e.textContent=s)},m(t,a){_(t,e,a)},p:Y,i:Y,o:Y,d(t){t&&o(e)}}}function me(l){let e,s=se(l[0])+"",t,a,n,u,v,i,g,k,C,y,w,P,B,E,b,U,L,r,d,S,V;return v=new H({props:{title:"code",$$slots:{default:[_e]},$$scope:{ctx:l}}}),k=new H({props:{title:"key",$$slots:{default:[ve]},$$scope:{ctx:l}}}),P=new H({props:{title:"keyCode",$$slots:{default:[ye]},$$scope:{ctx:l}}}),b=new H({props:{title:"location",$$slots:{default:[ge]},$$scope:{ctx:l}}}),r=new H({props:{title:"Meta keys",$$slots:{default:[ke]},$$scope:{ctx:l}}}),S=new H({props:{title:"Sample JavaScript code",$$slots:{default:[Ke]},$$scope:{ctx:l}}}),{c(){e=$("h2"),t=N(s),a=T(),n=$("div"),u=$("div"),O(v.$$.fragment),i=T(),g=$("div"),O(k.$$.fragment),C=T(),y=$("div"),w=$("div"),O(P.$$.fragment),B=T(),E=$("div"),O(b.$$.fragment),U=T(),L=$("div"),O(r.$$.fragment),d=T(),O(S.$$.fragment),this.h()},l(c){e=h(c,"H2",{class:!0});var f=K(e);t=M(f,s),f.forEach(o),a=j(c),n=h(c,"DIV",{class:!0});var q=K(n);u=h(q,"DIV",{class:!0});var z=K(u);R(v.$$.fragment,z),z.forEach(o),i=j(q),g=h(q,"DIV",{class:!0});var G=K(g);R(k.$$.fragment,G),G.forEach(o),q.forEach(o),C=j(c),y=h(c,"DIV",{class:!0});var D=K(y);w=h(D,"DIV",{class:!0});var Q=K(w);R(P.$$.fragment,Q),Q.forEach(o),B=j(D),E=h(D,"DIV",{class:!0});var X=K(E);R(b.$$.fragment,X),X.forEach(o),U=j(D),L=h(D,"DIV",{class:!0});var x=K(L);R(r.$$.fragment,x),x.forEach(o),D.forEach(o),d=j(c),R(S.$$.fragment,c),this.h()},h(){m(e,"class","svelte-gath57"),m(u,"class","column svelte-gath57"),m(g,"class","column svelte-gath57"),m(n,"class","columns svelte-gath57"),m(w,"class","column svelte-gath57"),m(E,"class","location"),m(L,"class","column svelte-gath57"),m(y,"class","columns svelte-gath57")},m(c,f){_(c,e,f),p(e,t),_(c,a,f),_(c,n,f),p(n,u),F(v,u,null),p(n,i),p(n,g),F(k,g,null),_(c,C,f),_(c,y,f),p(y,w),F(P,w,null),p(y,B),p(y,E),F(b,E,null),p(y,U),p(y,L),F(r,L,null),_(c,d,f),F(S,c,f),V=!0},p(c,f){(!V||f&1)&&s!==(s=se(c[0])+"")&&W(t,s);const q={};f&5&&(q.$$scope={dirty:f,ctx:c}),v.$set(q);const z={};f&5&&(z.$$scope={dirty:f,ctx:c}),k.$set(z);const G={};f&5&&(G.$$scope={dirty:f,ctx:c}),P.$set(G);const D={};f&5&&(D.$$scope={dirty:f,ctx:c}),b.$set(D);const Q={};f&5&&(Q.$$scope={dirty:f,ctx:c}),r.$set(Q);const X={};f&5&&(X.$$scope={dirty:f,ctx:c}),S.$set(X)},i(c){V||(A(v.$$.fragment,c),A(k.$$.fragment,c),A(P.$$.fragment,c),A(b.$$.fragment,c),A(r.$$.fragment,c),A(S.$$.fragment,c),V=!0)},o(c){I(v.$$.fragment,c),I(k.$$.fragment,c),I(P.$$.fragment,c),I(b.$$.fragment,c),I(r.$$.fragment,c),I(S.$$.fragment,c),V=!1},d(c){c&&(o(e),o(a),o(n),o(C),o(y),o(d)),J(v),J(k),J(P),J(b),J(r),J(S,c)}}}function _e(l){let e,s=l[0].code+"",t;return{c(){e=$("span"),t=N(s),this.h()},l(a){e=h(a,"SPAN",{class:!0});var n=K(e);t=M(n,s),n.forEach(o),this.h()},h(){m(e,"class","big-value svelte-gath57")},m(a,n){_(a,e,n),p(e,t)},p(a,n){n&1&&s!==(s=a[0].code+"")&&W(t,s)},d(a){a&&o(e)}}}function ve(l){let e,s=l[0].key+"",t;return{c(){e=$("span"),t=N(s),this.h()},l(a){e=h(a,"SPAN",{class:!0});var n=K(e);t=M(n,s),n.forEach(o),this.h()},h(){m(e,"class","big-value svelte-gath57")},m(a,n){_(a,e,n),p(e,t)},p(a,n){n&1&&s!==(s=a[0].key+"")&&W(t,s)},d(a){a&&o(e)}}}function ye(l){let e,s=l[0].keyCode+"",t;return{c(){e=$("span"),t=N(s),this.h()},l(a){e=h(a,"SPAN",{class:!0});var n=K(e);t=M(n,s),n.forEach(o),this.h()},h(){m(e,"class","big-value svelte-gath57")},m(a,n){_(a,e,n),p(e,t)},p(a,n){n&1&&s!==(s=a[0].keyCode+"")&&W(t,s)},d(a){a&&o(e)}}}function ge(l){let e,s=l[0].location+"",t;return{c(){e=$("span"),t=N(s),this.h()},l(a){e=h(a,"SPAN",{class:!0});var n=K(e);t=M(n,s),n.forEach(o),this.h()},h(){m(e,"class","big-value svelte-gath57")},m(a,n){_(a,e,n),p(e,t)},p(a,n){n&1&&s!==(s=a[0].location+"")&&W(t,s)},d(a){a&&o(e)}}}function ke(l){let e,s,t,a,n,u,v,i,g,k,C,y,w,P,B,E,b,U,L;return{c(){e=$("label"),s=$("input"),a=N(`
                            ctrlKey`),n=T(),u=$("label"),v=$("input"),g=N(`
                            altKey`),k=T(),C=$("label"),y=$("input"),P=N(`
                            shiftKey`),B=T(),E=$("label"),b=$("input"),L=N(`
                            metaKey`),this.h()},l(r){e=h(r,"LABEL",{class:!0});var d=K(e);s=h(d,"INPUT",{type:!0}),a=M(d,`
                            ctrlKey`),d.forEach(o),n=j(r),u=h(r,"LABEL",{class:!0});var S=K(u);v=h(S,"INPUT",{type:!0}),g=M(S,`
                            altKey`),S.forEach(o),k=j(r),C=h(r,"LABEL",{class:!0});var V=K(C);y=h(V,"INPUT",{type:!0}),P=M(V,`
                            shiftKey`),V.forEach(o),B=j(r),E=h(r,"LABEL",{class:!0});var c=K(E);b=h(c,"INPUT",{type:!0}),L=M(c,`
                            metaKey`),c.forEach(o),this.h()},h(){m(s,"type","checkbox"),s.checked=t=l[0].ctrlKey,s.disabled=!0,m(e,"class","meta-key svelte-gath57"),m(v,"type","checkbox"),v.checked=i=l[0].altKey,v.disabled=!0,m(u,"class","meta-key svelte-gath57"),m(y,"type","checkbox"),y.checked=w=l[0].shiftKey,y.disabled=!0,m(C,"class","meta-key svelte-gath57"),m(b,"type","checkbox"),b.checked=U=l[0].metaKey,b.disabled=!0,m(E,"class","meta-key svelte-gath57")},m(r,d){_(r,e,d),p(e,s),p(e,a),_(r,n,d),_(r,u,d),p(u,v),p(u,g),_(r,k,d),_(r,C,d),p(C,y),p(C,P),_(r,B,d),_(r,E,d),p(E,b),p(E,L)},p(r,d){d&1&&t!==(t=r[0].ctrlKey)&&(s.checked=t),d&1&&i!==(i=r[0].altKey)&&(v.checked=i),d&1&&w!==(w=r[0].shiftKey)&&(y.checked=w),d&1&&U!==(U=r[0].metaKey)&&(b.checked=U)},d(r){r&&(o(e),o(n),o(u),o(k),o(C),o(B),o(E))}}}function Ke(l){let e,s=te(l[0])+"",t;return{c(){e=$("div"),t=N(s),this.h()},l(a){e=h(a,"DIV",{class:!0});var n=K(e);t=M(n,s),n.forEach(o),this.h()},h(){m(e,"class","code-preview svelte-gath57")},m(a,n){_(a,e,n),p(e,t)},p(a,n){n&1&&s!==(s=te(a[0])+"")&&W(t,s)},d(a){a&&o(e)}}}function be(l){let e,s,t,a;const n=[me,de],u=[];function v(i,g){return i[0]?0:1}return e=v(l),s=u[e]=n[e](l),{c(){s.c(),t=ee()},l(i){s.l(i),t=ee()},m(i,g){u[e].m(i,g),_(i,t,g),a=!0},p(i,g){let k=e;e=v(i),e===k?u[e].p(i,g):(re(),I(u[k],1,1,()=>{u[k]=null}),ie(),s=u[e],s?s.p(i,g):(s=u[e]=n[e](i),s.c()),A(s,1),s.m(t.parentNode,t))},i(i){a||(A(s),a=!0)},o(i){I(s),a=!1},d(i){i&&o(t),u[e].d(i)}}}function Ee(l){let e,s;return e=new ue({props:{title:"JavaScript Keycode",$$slots:{default:[be]},$$scope:{ctx:l}}}),{c(){O(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,a){F(e,t,a),s=!0},p(t,a){const n={};a&5&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){s||(A(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){J(e,t)}}}function Ce(l){let e,s;return e=new fe({props:{$$slots:{default:[Ee]},$$scope:{ctx:l}}}),{c(){O(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,a){F(e,t,a),s=!0},p(t,[a]){const n={};a&5&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){s||(A(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){J(e,t)}}}function Pe(l,e,s){let t;function a(n){s(0,t=n),n.preventDefault(),n.stopPropagation()}return le(()=>(document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)})),[t]}class Ne extends ce{constructor(e){super(),oe(this,e,Pe,Ce,ae,{})}}export{Ne as component};