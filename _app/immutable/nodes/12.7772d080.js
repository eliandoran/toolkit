import{s as d,z as T}from"../chunks/scheduler.72378643.js";import{S,i as b,b as l,d as f,m as g,a as m,t as _,e as $}from"../chunks/index.ecff66b7.js";import{S as j}from"../chunks/symmetric-input-output.24fb6965.js";import{T as O}from"../chunks/tool.00d54485.js";function x(n){var t={};for(var e in n)t[n[e]]=e;return t}var v={A:"01",B:"1000",C:"1010",D:"100",E:"0",F:"0010",G:"110",H:"0000",I:"00",J:"0111",K:"101",L:"0100",M:"11",N:"10",O:"111",P:"0110",Q:"1101",R:"010",S:"000",T:"1",U:"001",V:"0001",W:"011",X:"1001",Y:"1011",Z:"1100",0:"11111",1:"01111",2:"00111",3:"00011",4:"00001",5:"00000",6:"10000",7:"11000",8:"11100",9:"11110",".":"010101",",":"110011","?":"001100","'":"011110","!":"101011","/":"10010","(":"10110",")":"101101","&":"01000",":":"111000",";":"101010","=":"10001","+":"01010","-":"100001",_:"001101",'"':"010010",$:"0001001","@":"011010"},y=x(v),h={space:"/",short:".",long:"-"},c=globalThis&&globalThis.__assign||function(){return c=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},c.apply(this,arguments)};function A(n){return n=parseInt(n,2),isNaN(n)?"":unescape("%u"+n.toString(16))}function D(n,t){var e=c(c({},h),t),r=e.space,o=e.short,a=e.long;return n.split(r).map(function(p){var i=p.replace(/\s+/g,"").replace(new RegExp("\\"+o,"g"),"0").replace(new RegExp("\\"+a,"g"),"1"),s=y[i];return s||(s=A(i)),s}).join("")}var u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},u.apply(this,arguments)};function E(n){for(var t=[],e=0;e<n.length;e++)t[e]=("00"+n.charCodeAt(e).toString(16)).slice(-4);var r=t.join("");return r=parseInt(r,16).toString(2),r}function R(n,t){var e=u(u({},h),t),r=e.space,o=e.short,a=e.long,p=n.replace(/\s+/g,"").toLocaleUpperCase().split("");return p.map(function(i){var s=v[i];return s||(s=E(i)),s.replace(/0/g,o).replace(/1/g,a)}).join(r)}function w(n){let t,e;return t=new j({props:{fromTitle:"Plain text",toTitle:"Morse code",to:n[0],from:n[1]}}),{c(){l(t.$$.fragment)},l(r){f(t.$$.fragment,r)},m(r,o){g(t,r,o),e=!0},p:T,i(r){e||(m(t.$$.fragment,r),e=!0)},o(r){_(t.$$.fragment,r),e=!1},d(r){$(t,r)}}}function N(n){let t,e;return t=new O({props:{$$slots:{default:[w]},$$scope:{ctx:n}}}),{c(){l(t.$$.fragment)},l(r){f(t.$$.fragment,r)},m(r,o){g(t,r,o),e=!0},p(r,[o]){const a={};o&8&&(a.$$scope={dirty:o,ctx:r}),t.$set(a)},i(r){e||(m(t.$$.fragment,r),e=!0)},o(r){_(t.$$.fragment,r),e=!1},d(r){$(t,r)}}}function P(n){const t={space:" "};function e(o){return o.split(`
`).map(a=>R(a,t)).join(`
`)}function r(o){return o.split(`
`).map(a=>D(a,t)).join(`
`)}return[e,r]}class L extends S{constructor(t){super(),b(this,t,P,N,d,{})}}export{L as component};
