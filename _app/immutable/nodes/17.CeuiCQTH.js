import{s as N,n as I}from"../chunks/scheduler.CVlXoP1p.js";import{S as U,i as T,c as A,a as S,m as P,t as C,b as j,d as B}from"../chunks/index.B7p841iZ.js";import{S as H}from"../chunks/symmetric-input-output.Dh4ZKQgF.js";import{T as J}from"../chunks/tool.DmYppswC.js";const b={};var W=function(e,n){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var t=r.call(e),i,a=[],o;try{for(;(n===void 0||n-- >0)&&!(i=t.next()).done;)a.push(i.value)}catch(f){o={error:f}}finally{try{i&&!i.done&&(r=t.return)&&r.call(t)}finally{if(o)throw o.error}}return a},q={N:"null",i:"int",d:"float",b:"boolean",s:"string",a:"array-object",C:"serializable-class",O:"notserializable-class"},F=function(){function e(n,r,t){this.contents=n,this.index=r,this.options=t}return e.prototype.error=function(n){return n===void 0&&(n="Syntax Error"),new Error(n+" at index "+this.index+" while unserializing payload")},e.prototype.advance=function(n){this.index+=n},e.prototype.readAhead=function(n){var r=this.peekAhead(n);return this.index+=n,r},e.prototype.readUntil=function(n){var r=this.contents.indexOf(n,this.index);if(r===-1)throw this.error("Expected '"+n+"'");return this.readAhead(r-this.index)},e.prototype.peekAhead=function(n){return this.contents.toString(this.options.encoding,this.index,this.index+n)},e.prototype.seekExpected=function(n){var r=this.readAhead(n.length);if(r!==n)throw this.index-=n.length,this.error("Expected '"+n+"'")},e.prototype.getType=function(){var n=W(this.readAhead(2),2),r=n[0],t=n[1],i=q[r];if(!i)throw this.error("Unknown type");if(i==="null"?t!==";":t!==":")throw this.error();return i},e.prototype.getLength=function(){var n=parseInt(this.readUntil(":"),10);if(Number.isNaN(n))throw this.error();return n},e.prototype.getByLength=function(n,r,t){var i=this.getLength();this.seekExpected(":"+n);var a=t(i);return this.seekExpected(r),a},e}(),E=function(){function e(n){this.__PHP_Incomplete_Class_Name=n}return e}();function w(e,n){return typeof Buffer<"u"?Buffer.byteLength(e,n.encoding):encodeURIComponent(e).replace(/%[A-F\d]{2}/g,"U").length}function L(e){return typeof e=="number"&&parseInt(e.toString(),10)===e}function M(e){return new E(e)}function R(e){function n(){}return n.prototype=e,n}var v=function(){return v=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},v.apply(this,arguments)};function x(e,n,r){var t,i=n[e];return b(i||!r,"Class "+e+" not found in given scope"),i?t=new(R(i.prototype)):t=M(e),t}function k(e,n,r,t){for(var i=[],a=0;a<n;a+=1){var o=m(e,r,t);e.seekExpected(";");var f=m(e,r,t);e.peekAhead(1)===";"&&e.advance(1),i.push({key:o,value:f})}return i}function m(e,n,r){var t=e.getType();if(t==="null")return null;if(t==="int"||t==="float"){var i=e.readUntil(";");return t==="int"?parseInt(i,10):parseFloat(i)}if(t==="boolean"){var i=e.readAhead(1);return i==="1"}if(t==="string")return e.getByLength('"','"',function(s){return e.readAhead(s)});if(t==="array-object"){var a=e.getByLength("{","}",function(s){return k(e,s,n,r)}),o=a.every(function(s,u){return L(s.key)&&u===s.key}),f=o?[]:{};return a.forEach(function(s){var u=s.key,l=s.value;f[u]=l}),f}if(t==="notserializable-class"){var c=e.getByLength('"','"',function(u){return e.readAhead(u)});e.seekExpected(":");var a=e.getByLength("{","}",function(u){return k(e,u,n,r)}),h=x(c,n,r.strict),y="\0"+c+"\0",$="\0*\0";return a.forEach(function(u){var l=u.key,p=u.value;l.startsWith(y)?h[l.slice(y.length)]=p:l.startsWith($)?h[l.slice($.length)]=p:h[l]=p}),h}if(t==="serializable-class"){var c=e.getByLength('"','"',function(u){return e.readAhead(u)});e.seekExpected(":");var O=e.getByLength("{","}",function(u){return e.readAhead(u)}),g=x(c,n,r.strict);return g instanceof E||(b(g.unserialize,"unserialize not found on class when processing '"+c+"'"),g.unserialize(O)),g}throw new Error("Invalid type '"+t+"' encounterd while unserializing")}function Y(e,n,r){n===void 0&&(n={}),r===void 0&&(r={});var t=v({},r);typeof t.strict>"u"&&(t.strict=!0),typeof t.encoding>"u"&&(t.encoding="utf8");var i=new F(Buffer.from(e),0,t);return m(i,n,t)}var _=function(){return _=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},_.apply(this,arguments)},G=function(e,n){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var t=r.call(e),i,a=[],o;try{for(;(n===void 0||n-- >0)&&!(i=t.next()).done;)a.push(i.value)}catch(f){o={error:f}}finally{try{i&&!i.done&&(r=t.return)&&r.call(t)}finally{if(o)throw o.error}}return a};function K(e,n){return Object.keys(n).find(function(r){return e instanceof n[r]})||e.__PHP_Incomplete_Class_Name||e.constructor.name}function z(e,n){var r=Array.isArray(e)?e.map(function(i,a){return""+d(a,n)+d(i,n)}):Object.keys(e).map(function(i){return""+d(i,n)+d(e[i],n)}),t=r.filter(function(i){return typeof i<"u"}).length;return t+":{"+r.join("")+"}"}function d(e,n,r){n===void 0&&(n={}),r===void 0&&(r={});var t=typeof e,i=_({},r);if(typeof i.encoding>"u"&&(i.encoding="utf8"),e===null)return"N;";if(t==="number")return L(e)?"i:"+e+";":"d:"+e.toString().toUpperCase()+";";if(t==="string")return"s:"+w(e,i)+':"'+e+'";';if(t==="boolean")return"b:"+(e?"1":"0")+";";if(t!=="object")throw new TypeError("Unexpected type '"+t+"' encountered while attempting to serialize");if(Array.isArray(e)||e.constructor.name==="Object")return"a:"+z(e,n);if(e instanceof Map)return"a:"+e.size+":{"+Array.from(e.entries()).map(function(f){var c=G(f,2),h=c[0],y=c[1];return""+d(h,n)+d(y,n)}).join("")+"}";var a=K(e,n);if(typeof e.serialize=="function"){var o=e.serialize();return b(typeof o=="string",e.constructor.name+".serialize should return a string"),"C:"+a.length+':"'+a+'":'+w(o,i)+":{"+o+"}"}return"O:"+a.length+':"'+a+'":'+z(e,n)}function Q(e){let n,r;return n=new H({props:{fromTitle:"JSON",toTitle:"PHP Serialized Format",to:e[0],from:e[1]}}),{c(){A(n.$$.fragment)},l(t){S(n.$$.fragment,t)},m(t,i){P(n,t,i),r=!0},p:I,i(t){r||(C(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){B(n,t)}}}function Z(e){let n,r;return n=new J({props:{$$slots:{default:[Q]},$$scope:{ctx:e}}}),{c(){A(n.$$.fragment)},l(t){S(n.$$.fragment,t)},m(t,i){P(n,t,i),r=!0},p(t,[i]){const a={};i&4&&(a.$$scope={dirty:i,ctx:t}),n.$set(a)},i(t){r||(C(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){B(n,t)}}}function D(e){function n(t){return d(JSON.parse(t))}function r(t){return JSON.stringify(Y(t))}return[n,r]}class te extends U{constructor(n){super(),T(this,n,D,Z,N,{})}}export{te as component};