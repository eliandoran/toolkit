import{s as h,n as S}from"../chunks/scheduler.cQYGWxUu.js";import{S as j,i as O,c as f,a as l,m,t as g,b as _,d as $}from"../chunks/index.mWZiJta3.js";import{S as T}from"../chunks/symmetric-input-output.Dc5fR0Td.js";import{T as x}from"../chunks/tool.zmLwkrsu.js";function y(r){var e={};for(var n in r)e[r[n]]=n;return e}var v={A:"01",B:"1000",C:"1010",D:"100",E:"0",F:"0010",G:"110",H:"0000",I:"00",J:"0111",K:"101",L:"0100",M:"11",N:"10",O:"111",P:"0110",Q:"1101",R:"010",S:"000",T:"1",U:"001",V:"0001",W:"011",X:"1001",Y:"1011",Z:"1100",0:"11111",1:"01111",2:"00111",3:"00011",4:"00001",5:"00000",6:"10000",7:"11000",8:"11100",9:"11110",".":"010101",",":"110011","?":"001100","'":"011110","!":"101011","/":"10010","(":"10110",")":"101101","&":"01000",":":"111000",";":"101010","=":"10001","+":"01010","-":"100001",_:"001101",'"':"010010",$:"0001001","@":"011010"},A=y(v),d={space:"/",short:".",long:"-"},u=function(){return u=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])}return r},u.apply(this,arguments)};function D(r){return r=parseInt(r,2),isNaN(r)?"":unescape("%u"+r.toString(16))}function E(r,e){var n=u(u({},d),e),t=n.space,o=n.short,a=n.long;return r.split(t).map(function(p){var i=p.replace(/\s+/g,"").replace(new RegExp("\\"+o,"g"),"0").replace(new RegExp("\\"+a,"g"),"1"),s=A[i];return s||(s=D(i)),s}).join("")}var c=function(){return c=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])}return r},c.apply(this,arguments)};function R(r){for(var e=[],n=0;n<r.length;n++)e[n]=("00"+r.charCodeAt(n).toString(16)).slice(-4);var t=e.join("");return t=parseInt(t,16).toString(2),t}function w(r,e){var n=c(c({},d),e),t=n.space,o=n.short,a=n.long,p=r.replace(/\s+/g,"").toLocaleUpperCase().split("");return p.map(function(i){var s=v[i];return s||(s=R(i)),s.replace(/0/g,o).replace(/1/g,a)}).join(t)}function N(r){let e,n;return e=new T({props:{fromTitle:"Plain text",toTitle:"Morse code",to:r[0],from:r[1]}}),{c(){f(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,o){m(e,t,o),n=!0},p:S,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function P(r){let e,n;return e=new x({props:{$$slots:{default:[N]},$$scope:{ctx:r}}}),{c(){f(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,o){m(e,t,o),n=!0},p(t,[o]){const a={};o&8&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function b(r){const e={space:" "};function n(o){return o.split(`
`).map(a=>w(a,e)).join(`
`)}function t(o){return o.split(`
`).map(a=>E(a,e)).join(`
`)}return[n,t]}class L extends j{constructor(e){super(),O(this,e,b,P,h,{})}}export{L as component};