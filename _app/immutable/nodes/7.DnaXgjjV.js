import{s as kr,n as Dr}from"../chunks/scheduler.cQYGWxUu.js";import{S as Nr,i as Pr,c as er,a as ir,m as or,t as ur,b as fr,d as hr}from"../chunks/index.mWZiJta3.js";import{i as Mr}from"../chunks/index.DSYfm7We.js";import{S as Or}from"../chunks/symmetric-input-output.Dc5fR0Td.js";import{T as Gr}from"../chunks/tool.zmLwkrsu.js";var W={},b={};b.byteLength=jr;b.toByteArray=Hr;b.fromByteArray=Jr;var U=[],F=[],Yr=typeof Uint8Array<"u"?Uint8Array:Array,Y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var S=0,Wr=Y.length;S<Wr;++S)U[S]=Y[S],F[Y.charCodeAt(S)]=S;F[45]=62;F[95]=63;function cr(c){var h=c.length;if(h%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var s=c.indexOf("=");s===-1&&(s=h);var p=s===h?0:4-s%4;return[s,p]}function jr(c){var h=cr(c),s=h[0],p=h[1];return(s+p)*3/4-p}function qr(c,h,s){return(h+s)*3/4-s}function Hr(c){var h,s=cr(c),p=s[0],y=s[1],w=new Yr(qr(c,p,y)),B=0,u=y>0?p-4:p,d;for(d=0;d<u;d+=4)h=F[c.charCodeAt(d)]<<18|F[c.charCodeAt(d+1)]<<12|F[c.charCodeAt(d+2)]<<6|F[c.charCodeAt(d+3)],w[B++]=h>>16&255,w[B++]=h>>8&255,w[B++]=h&255;return y===2&&(h=F[c.charCodeAt(d)]<<2|F[c.charCodeAt(d+1)]>>4,w[B++]=h&255),y===1&&(h=F[c.charCodeAt(d)]<<10|F[c.charCodeAt(d+1)]<<4|F[c.charCodeAt(d+2)]>>2,w[B++]=h>>8&255,w[B++]=h&255),w}function Vr(c){return U[c>>18&63]+U[c>>12&63]+U[c>>6&63]+U[c&63]}function Xr(c,h,s){for(var p,y=[],w=h;w<s;w+=3)p=(c[w]<<16&16711680)+(c[w+1]<<8&65280)+(c[w+2]&255),y.push(Vr(p));return y.join("")}function Jr(c){for(var h,s=c.length,p=s%3,y=[],w=16383,B=0,u=s-p;B<u;B+=w)y.push(Xr(c,B,B+w>u?u:B+w));return p===1?(h=c[s-1],y.push(U[h>>2]+U[h<<4&63]+"==")):p===2&&(h=(c[s-2]<<8)+c[s-1],y.push(U[h>>10]+U[h>>4&63]+U[h<<2&63]+"=")),y.join("")}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(c){const h=b,s=Mr,p=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;c.Buffer=u,c.SlowBuffer=yr,c.INSPECT_MAX_BYTES=50;const y=2147483647;c.kMaxLength=y,u.TYPED_ARRAY_SUPPORT=w(),!u.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function w(){try{const n=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(n,r),n.foo()===42}catch{return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}});function B(n){if(n>y)throw new RangeError('The value "'+n+'" is invalid for option "size"');const r=new Uint8Array(n);return Object.setPrototypeOf(r,u.prototype),r}function u(n,r,t){if(typeof n=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(n)}return d(n,r,t)}u.poolSize=8192;function d(n,r,t){if(typeof n=="string")return sr(n,r);if(ArrayBuffer.isView(n))return lr(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(A(n,ArrayBuffer)||n&&A(n.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(A(n,SharedArrayBuffer)||n&&A(n.buffer,SharedArrayBuffer)))return N(n,r,t);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const e=n.valueOf&&n.valueOf();if(e!=null&&e!==n)return u.from(e,r,t);const i=ar(n);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return u.from(n[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}u.from=function(n,r,t){return d(n,r,t)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array);function j(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function pr(n,r,t){return j(n),n<=0?B(n):r!==void 0?typeof t=="string"?B(n).fill(r,t):B(n).fill(r):B(n)}u.alloc=function(n,r,t){return pr(n,r,t)};function k(n){return j(n),B(n<0?0:P(n)|0)}u.allocUnsafe=function(n){return k(n)},u.allocUnsafeSlow=function(n){return k(n)};function sr(n,r){if((typeof r!="string"||r==="")&&(r="utf8"),!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r);const t=q(n,r)|0;let e=B(t);const i=e.write(n,r);return i!==t&&(e=e.slice(0,i)),e}function D(n){const r=n.length<0?0:P(n.length)|0,t=B(r);for(let e=0;e<r;e+=1)t[e]=n[e]&255;return t}function lr(n){if(A(n,Uint8Array)){const r=new Uint8Array(n);return N(r.buffer,r.byteOffset,r.byteLength)}return D(n)}function N(n,r,t){if(r<0||n.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');let e;return r===void 0&&t===void 0?e=new Uint8Array(n):t===void 0?e=new Uint8Array(n,r):e=new Uint8Array(n,r,t),Object.setPrototypeOf(e,u.prototype),e}function ar(n){if(u.isBuffer(n)){const r=P(n.length)|0,t=B(r);return t.length===0||n.copy(t,0,0,r),t}if(n.length!==void 0)return typeof n.length!="number"||G(n.length)?B(0):D(n);if(n.type==="Buffer"&&Array.isArray(n.data))return D(n.data)}function P(n){if(n>=y)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+y.toString(16)+" bytes");return n|0}function yr(n){return+n!=n&&(n=0),u.alloc(+n)}u.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==u.prototype},u.compare=function(r,t){if(A(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),A(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(r)||!u.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===t)return 0;let e=r.length,i=t.length;for(let o=0,f=Math.min(e,i);o<f;++o)if(r[o]!==t[o]){e=r[o],i=t[o];break}return e<i?-1:i<e?1:0},u.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(r,t){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return u.alloc(0);let e;if(t===void 0)for(t=0,e=0;e<r.length;++e)t+=r[e].length;const i=u.allocUnsafe(t);let o=0;for(e=0;e<r.length;++e){let f=r[e];if(A(f,Uint8Array))o+f.length>i.length?(u.isBuffer(f)||(f=u.from(f)),f.copy(i,o)):Uint8Array.prototype.set.call(i,f,o);else if(u.isBuffer(f))f.copy(i,o);else throw new TypeError('"list" argument must be an Array of Buffers');o+=f.length}return i};function q(n,r){if(u.isBuffer(n))return n.length;if(ArrayBuffer.isView(n)||A(n,ArrayBuffer))return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);const t=n.length,e=arguments.length>2&&arguments[2]===!0;if(!e&&t===0)return 0;let i=!1;for(;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return O(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return nr(n).length;default:if(i)return e?-1:O(n).length;r=(""+r).toLowerCase(),i=!0}}u.byteLength=q;function wr(n,r,t){let e=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(n||(n="utf8");;)switch(n){case"hex":return Ur(this,r,t);case"utf8":case"utf-8":return X(this,r,t);case"ascii":return Fr(this,r,t);case"latin1":case"binary":return Ar(this,r,t);case"base64":return dr(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Tr(this,r,t);default:if(e)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),e=!0}}u.prototype._isBuffer=!0;function R(n,r,t){const e=n[r];n[r]=n[t],n[t]=e}u.prototype.swap16=function(){const r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<r;t+=2)R(this,t,t+1);return this},u.prototype.swap32=function(){const r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<r;t+=4)R(this,t,t+3),R(this,t+1,t+2);return this},u.prototype.swap64=function(){const r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<r;t+=8)R(this,t,t+7),R(this,t+1,t+6),R(this,t+2,t+5),R(this,t+3,t+4);return this},u.prototype.toString=function(){const r=this.length;return r===0?"":arguments.length===0?X(this,0,r):wr.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(r){if(!u.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:u.compare(this,r)===0},u.prototype.inspect=function(){let r="";const t=c.INSPECT_MAX_BYTES;return r=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(r+=" ... "),"<Buffer "+r+">"},p&&(u.prototype[p]=u.prototype.inspect),u.prototype.compare=function(r,t,e,i,o){if(A(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),!u.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(t===void 0&&(t=0),e===void 0&&(e=r?r.length:0),i===void 0&&(i=0),o===void 0&&(o=this.length),t<0||e>r.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&t>=e)return 0;if(i>=o)return-1;if(t>=e)return 1;if(t>>>=0,e>>>=0,i>>>=0,o>>>=0,this===r)return 0;let f=o-i,l=e-t;const m=Math.min(f,l),x=this.slice(i,o),E=r.slice(t,e);for(let a=0;a<m;++a)if(x[a]!==E[a]){f=x[a],l=E[a];break}return f<l?-1:l<f?1:0};function H(n,r,t,e,i){if(n.length===0)return-1;if(typeof t=="string"?(e=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,G(t)&&(t=i?0:n.length-1),t<0&&(t=n.length+t),t>=n.length){if(i)return-1;t=n.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof r=="string"&&(r=u.from(r,e)),u.isBuffer(r))return r.length===0?-1:V(n,r,t,e,i);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(n,r,t):Uint8Array.prototype.lastIndexOf.call(n,r,t):V(n,[r],t,e,i);throw new TypeError("val must be string, number or Buffer")}function V(n,r,t,e,i){let o=1,f=n.length,l=r.length;if(e!==void 0&&(e=String(e).toLowerCase(),e==="ucs2"||e==="ucs-2"||e==="utf16le"||e==="utf-16le")){if(n.length<2||r.length<2)return-1;o=2,f/=2,l/=2,t/=2}function m(E,a){return o===1?E[a]:E.readUInt16BE(a*o)}let x;if(i){let E=-1;for(x=t;x<f;x++)if(m(n,x)===m(r,E===-1?0:x-E)){if(E===-1&&(E=x),x-E+1===l)return E*o}else E!==-1&&(x-=x-E),E=-1}else for(t+l>f&&(t=f-l),x=t;x>=0;x--){let E=!0;for(let a=0;a<l;a++)if(m(n,x+a)!==m(r,a)){E=!1;break}if(E)return x}return-1}u.prototype.includes=function(r,t,e){return this.indexOf(r,t,e)!==-1},u.prototype.indexOf=function(r,t,e){return H(this,r,t,e,!0)},u.prototype.lastIndexOf=function(r,t,e){return H(this,r,t,e,!1)};function xr(n,r,t,e){t=Number(t)||0;const i=n.length-t;e?(e=Number(e),e>i&&(e=i)):e=i;const o=r.length;e>o/2&&(e=o/2);let f;for(f=0;f<e;++f){const l=parseInt(r.substr(f*2,2),16);if(G(l))return f;n[t+f]=l}return f}function Br(n,r,t,e){return L(O(r,n.length-t),n,t,e)}function mr(n,r,t,e){return L(Sr(r),n,t,e)}function Er(n,r,t,e){return L(nr(r),n,t,e)}function gr(n,r,t,e){return L($r(r,n.length-t),n,t,e)}u.prototype.write=function(r,t,e,i){if(t===void 0)i="utf8",e=this.length,t=0;else if(e===void 0&&typeof t=="string")i=t,e=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(e)?(e=e>>>0,i===void 0&&(i="utf8")):(i=e,e=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const o=this.length-t;if((e===void 0||e>o)&&(e=o),r.length>0&&(e<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let f=!1;for(;;)switch(i){case"hex":return xr(this,r,t,e);case"utf8":case"utf-8":return Br(this,r,t,e);case"ascii":case"latin1":case"binary":return mr(this,r,t,e);case"base64":return Er(this,r,t,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return gr(this,r,t,e);default:if(f)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),f=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function dr(n,r,t){return r===0&&t===n.length?h.fromByteArray(n):h.fromByteArray(n.slice(r,t))}function X(n,r,t){t=Math.min(n.length,t);const e=[];let i=r;for(;i<t;){const o=n[i];let f=null,l=o>239?4:o>223?3:o>191?2:1;if(i+l<=t){let m,x,E,a;switch(l){case 1:o<128&&(f=o);break;case 2:m=n[i+1],(m&192)===128&&(a=(o&31)<<6|m&63,a>127&&(f=a));break;case 3:m=n[i+1],x=n[i+2],(m&192)===128&&(x&192)===128&&(a=(o&15)<<12|(m&63)<<6|x&63,a>2047&&(a<55296||a>57343)&&(f=a));break;case 4:m=n[i+1],x=n[i+2],E=n[i+3],(m&192)===128&&(x&192)===128&&(E&192)===128&&(a=(o&15)<<18|(m&63)<<12|(x&63)<<6|E&63,a>65535&&a<1114112&&(f=a))}}f===null?(f=65533,l=1):f>65535&&(f-=65536,e.push(f>>>10&1023|55296),f=56320|f&1023),e.push(f),i+=l}return Ir(e)}const J=4096;function Ir(n){const r=n.length;if(r<=J)return String.fromCharCode.apply(String,n);let t="",e=0;for(;e<r;)t+=String.fromCharCode.apply(String,n.slice(e,e+=J));return t}function Fr(n,r,t){let e="";t=Math.min(n.length,t);for(let i=r;i<t;++i)e+=String.fromCharCode(n[i]&127);return e}function Ar(n,r,t){let e="";t=Math.min(n.length,t);for(let i=r;i<t;++i)e+=String.fromCharCode(n[i]);return e}function Ur(n,r,t){const e=n.length;(!r||r<0)&&(r=0),(!t||t<0||t>e)&&(t=e);let i="";for(let o=r;o<t;++o)i+=Lr[n[o]];return i}function Tr(n,r,t){const e=n.slice(r,t);let i="";for(let o=0;o<e.length-1;o+=2)i+=String.fromCharCode(e[o]+e[o+1]*256);return i}u.prototype.slice=function(r,t){const e=this.length;r=~~r,t=t===void 0?e:~~t,r<0?(r+=e,r<0&&(r=0)):r>e&&(r=e),t<0?(t+=e,t<0&&(t=0)):t>e&&(t=e),t<r&&(t=r);const i=this.subarray(r,t);return Object.setPrototypeOf(i,u.prototype),i};function g(n,r,t){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+r>t)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(r,t,e){r=r>>>0,t=t>>>0,e||g(r,t,this.length);let i=this[r],o=1,f=0;for(;++f<t&&(o*=256);)i+=this[r+f]*o;return i},u.prototype.readUintBE=u.prototype.readUIntBE=function(r,t,e){r=r>>>0,t=t>>>0,e||g(r,t,this.length);let i=this[r+--t],o=1;for(;t>0&&(o*=256);)i+=this[r+--t]*o;return i},u.prototype.readUint8=u.prototype.readUInt8=function(r,t){return r=r>>>0,t||g(r,1,this.length),this[r]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(r,t){return r=r>>>0,t||g(r,2,this.length),this[r]|this[r+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(r,t){return r=r>>>0,t||g(r,2,this.length),this[r]<<8|this[r+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(r,t){return r=r>>>0,t||g(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(r,t){return r=r>>>0,t||g(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},u.prototype.readBigUInt64LE=T(function(r){r=r>>>0,C(r,"offset");const t=this[r],e=this[r+7];(t===void 0||e===void 0)&&$(r,this.length-8);const i=t+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24,o=this[++r]+this[++r]*2**8+this[++r]*2**16+e*2**24;return BigInt(i)+(BigInt(o)<<BigInt(32))}),u.prototype.readBigUInt64BE=T(function(r){r=r>>>0,C(r,"offset");const t=this[r],e=this[r+7];(t===void 0||e===void 0)&&$(r,this.length-8);const i=t*2**24+this[++r]*2**16+this[++r]*2**8+this[++r],o=this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+e;return(BigInt(i)<<BigInt(32))+BigInt(o)}),u.prototype.readIntLE=function(r,t,e){r=r>>>0,t=t>>>0,e||g(r,t,this.length);let i=this[r],o=1,f=0;for(;++f<t&&(o*=256);)i+=this[r+f]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*t)),i},u.prototype.readIntBE=function(r,t,e){r=r>>>0,t=t>>>0,e||g(r,t,this.length);let i=t,o=1,f=this[r+--i];for(;i>0&&(o*=256);)f+=this[r+--i]*o;return o*=128,f>=o&&(f-=Math.pow(2,8*t)),f},u.prototype.readInt8=function(r,t){return r=r>>>0,t||g(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},u.prototype.readInt16LE=function(r,t){r=r>>>0,t||g(r,2,this.length);const e=this[r]|this[r+1]<<8;return e&32768?e|4294901760:e},u.prototype.readInt16BE=function(r,t){r=r>>>0,t||g(r,2,this.length);const e=this[r+1]|this[r]<<8;return e&32768?e|4294901760:e},u.prototype.readInt32LE=function(r,t){return r=r>>>0,t||g(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},u.prototype.readInt32BE=function(r,t){return r=r>>>0,t||g(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},u.prototype.readBigInt64LE=T(function(r){r=r>>>0,C(r,"offset");const t=this[r],e=this[r+7];(t===void 0||e===void 0)&&$(r,this.length-8);const i=this[r+4]+this[r+5]*2**8+this[r+6]*2**16+(e<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24)}),u.prototype.readBigInt64BE=T(function(r){r=r>>>0,C(r,"offset");const t=this[r],e=this[r+7];(t===void 0||e===void 0)&&$(r,this.length-8);const i=(t<<24)+this[++r]*2**16+this[++r]*2**8+this[++r];return(BigInt(i)<<BigInt(32))+BigInt(this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+e)}),u.prototype.readFloatLE=function(r,t){return r=r>>>0,t||g(r,4,this.length),s.read(this,r,!0,23,4)},u.prototype.readFloatBE=function(r,t){return r=r>>>0,t||g(r,4,this.length),s.read(this,r,!1,23,4)},u.prototype.readDoubleLE=function(r,t){return r=r>>>0,t||g(r,8,this.length),s.read(this,r,!0,52,8)},u.prototype.readDoubleBE=function(r,t){return r=r>>>0,t||g(r,8,this.length),s.read(this,r,!1,52,8)};function I(n,r,t,e,i,o){if(!u.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(t+e>n.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(r,t,e,i){if(r=+r,t=t>>>0,e=e>>>0,!i){const l=Math.pow(2,8*e)-1;I(this,r,t,e,l,0)}let o=1,f=0;for(this[t]=r&255;++f<e&&(o*=256);)this[t+f]=r/o&255;return t+e},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(r,t,e,i){if(r=+r,t=t>>>0,e=e>>>0,!i){const l=Math.pow(2,8*e)-1;I(this,r,t,e,l,0)}let o=e-1,f=1;for(this[t+o]=r&255;--o>=0&&(f*=256);)this[t+o]=r/f&255;return t+e},u.prototype.writeUint8=u.prototype.writeUInt8=function(r,t,e){return r=+r,t=t>>>0,e||I(this,r,t,1,255,0),this[t]=r&255,t+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(r,t,e){return r=+r,t=t>>>0,e||I(this,r,t,2,65535,0),this[t]=r&255,this[t+1]=r>>>8,t+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(r,t,e){return r=+r,t=t>>>0,e||I(this,r,t,2,65535,0),this[t]=r>>>8,this[t+1]=r&255,t+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(r,t,e){return r=+r,t=t>>>0,e||I(this,r,t,4,4294967295,0),this[t+3]=r>>>24,this[t+2]=r>>>16,this[t+1]=r>>>8,this[t]=r&255,t+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(r,t,e){return r=+r,t=t>>>0,e||I(this,r,t,4,4294967295,0),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=r&255,t+4};function z(n,r,t,e,i){tr(r,e,i,n,t,7);let o=Number(r&BigInt(4294967295));n[t++]=o,o=o>>8,n[t++]=o,o=o>>8,n[t++]=o,o=o>>8,n[t++]=o;let f=Number(r>>BigInt(32)&BigInt(4294967295));return n[t++]=f,f=f>>8,n[t++]=f,f=f>>8,n[t++]=f,f=f>>8,n[t++]=f,t}function K(n,r,t,e,i){tr(r,e,i,n,t,7);let o=Number(r&BigInt(4294967295));n[t+7]=o,o=o>>8,n[t+6]=o,o=o>>8,n[t+5]=o,o=o>>8,n[t+4]=o;let f=Number(r>>BigInt(32)&BigInt(4294967295));return n[t+3]=f,f=f>>8,n[t+2]=f,f=f>>8,n[t+1]=f,f=f>>8,n[t]=f,t+8}u.prototype.writeBigUInt64LE=T(function(r,t=0){return z(this,r,t,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeBigUInt64BE=T(function(r,t=0){return K(this,r,t,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeIntLE=function(r,t,e,i){if(r=+r,t=t>>>0,!i){const m=Math.pow(2,8*e-1);I(this,r,t,e,m-1,-m)}let o=0,f=1,l=0;for(this[t]=r&255;++o<e&&(f*=256);)r<0&&l===0&&this[t+o-1]!==0&&(l=1),this[t+o]=(r/f>>0)-l&255;return t+e},u.prototype.writeIntBE=function(r,t,e,i){if(r=+r,t=t>>>0,!i){const m=Math.pow(2,8*e-1);I(this,r,t,e,m-1,-m)}let o=e-1,f=1,l=0;for(this[t+o]=r&255;--o>=0&&(f*=256);)r<0&&l===0&&this[t+o+1]!==0&&(l=1),this[t+o]=(r/f>>0)-l&255;return t+e},u.prototype.writeInt8=function(r,t,e){return r=+r,t=t>>>0,e||I(this,r,t,1,127,-128),r<0&&(r=255+r+1),this[t]=r&255,t+1},u.prototype.writeInt16LE=function(r,t,e){return r=+r,t=t>>>0,e||I(this,r,t,2,32767,-32768),this[t]=r&255,this[t+1]=r>>>8,t+2},u.prototype.writeInt16BE=function(r,t,e){return r=+r,t=t>>>0,e||I(this,r,t,2,32767,-32768),this[t]=r>>>8,this[t+1]=r&255,t+2},u.prototype.writeInt32LE=function(r,t,e){return r=+r,t=t>>>0,e||I(this,r,t,4,2147483647,-2147483648),this[t]=r&255,this[t+1]=r>>>8,this[t+2]=r>>>16,this[t+3]=r>>>24,t+4},u.prototype.writeInt32BE=function(r,t,e){return r=+r,t=t>>>0,e||I(this,r,t,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=r&255,t+4},u.prototype.writeBigInt64LE=T(function(r,t=0){return z(this,r,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeBigInt64BE=T(function(r,t=0){return K(this,r,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Z(n,r,t,e,i,o){if(t+e>n.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Q(n,r,t,e,i){return r=+r,t=t>>>0,i||Z(n,r,t,4),s.write(n,r,t,e,23,4),t+4}u.prototype.writeFloatLE=function(r,t,e){return Q(this,r,t,!0,e)},u.prototype.writeFloatBE=function(r,t,e){return Q(this,r,t,!1,e)};function v(n,r,t,e,i){return r=+r,t=t>>>0,i||Z(n,r,t,8),s.write(n,r,t,e,52,8),t+8}u.prototype.writeDoubleLE=function(r,t,e){return v(this,r,t,!0,e)},u.prototype.writeDoubleBE=function(r,t,e){return v(this,r,t,!1,e)},u.prototype.copy=function(r,t,e,i){if(!u.isBuffer(r))throw new TypeError("argument should be a Buffer");if(e||(e=0),!i&&i!==0&&(i=this.length),t>=r.length&&(t=r.length),t||(t=0),i>0&&i<e&&(i=e),i===e||r.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),r.length-t<i-e&&(i=r.length-t+e);const o=i-e;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,e,i):Uint8Array.prototype.set.call(r,this.subarray(e,i),t),o},u.prototype.fill=function(r,t,e,i){if(typeof r=="string"){if(typeof t=="string"?(i=t,t=0,e=this.length):typeof e=="string"&&(i=e,e=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!u.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(r.length===1){const f=r.charCodeAt(0);(i==="utf8"&&f<128||i==="latin1")&&(r=f)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(t<0||this.length<t||this.length<e)throw new RangeError("Out of range index");if(e<=t)return this;t=t>>>0,e=e===void 0?this.length:e>>>0,r||(r=0);let o;if(typeof r=="number")for(o=t;o<e;++o)this[o]=r;else{const f=u.isBuffer(r)?r:u.from(r,i),l=f.length;if(l===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(o=0;o<e-t;++o)this[o+t]=f[o%l]}return this};const _={};function M(n,r,t){_[n]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:r.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${n}]`,this.stack,delete this.name}get code(){return n}set code(i){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){return`${this.name} [${n}]: ${this.message}`}}}M("ERR_BUFFER_OUT_OF_BOUNDS",function(n){return n?`${n} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),M("ERR_INVALID_ARG_TYPE",function(n,r){return`The "${n}" argument must be of type number. Received type ${typeof r}`},TypeError),M("ERR_OUT_OF_RANGE",function(n,r,t){let e=`The value of "${n}" is out of range.`,i=t;return Number.isInteger(t)&&Math.abs(t)>2**32?i=rr(String(t)):typeof t=="bigint"&&(i=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=rr(i)),i+="n"),e+=` It must be ${r}. Received ${i}`,e},RangeError);function rr(n){let r="",t=n.length;const e=n[0]==="-"?1:0;for(;t>=e+4;t-=3)r=`_${n.slice(t-3,t)}${r}`;return`${n.slice(0,t)}${r}`}function Rr(n,r,t){C(r,"offset"),(n[r]===void 0||n[r+t]===void 0)&&$(r,n.length-(t+1))}function tr(n,r,t,e,i,o){if(n>t||n<r){const f=typeof r=="bigint"?"n":"";let l;throw r===0||r===BigInt(0)?l=`>= 0${f} and < 2${f} ** ${(o+1)*8}${f}`:l=`>= -(2${f} ** ${(o+1)*8-1}${f}) and < 2 ** ${(o+1)*8-1}${f}`,new _.ERR_OUT_OF_RANGE("value",l,n)}Rr(e,i,o)}function C(n,r){if(typeof n!="number")throw new _.ERR_INVALID_ARG_TYPE(r,"number",n)}function $(n,r,t){throw Math.floor(n)!==n?(C(n,t),new _.ERR_OUT_OF_RANGE("offset","an integer",n)):r<0?new _.ERR_BUFFER_OUT_OF_BOUNDS:new _.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${r}`,n)}const _r=/[^+/0-9A-Za-z-_]/g;function Cr(n){if(n=n.split("=")[0],n=n.trim().replace(_r,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function O(n,r){r=r||1/0;let t;const e=n.length;let i=null;const o=[];for(let f=0;f<e;++f){if(t=n.charCodeAt(f),t>55295&&t<57344){if(!i){if(t>56319){(r-=3)>-1&&o.push(239,191,189);continue}else if(f+1===e){(r-=3)>-1&&o.push(239,191,189);continue}i=t;continue}if(t<56320){(r-=3)>-1&&o.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,t<128){if((r-=1)<0)break;o.push(t)}else if(t<2048){if((r-=2)<0)break;o.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;o.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;o.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return o}function Sr(n){const r=[];for(let t=0;t<n.length;++t)r.push(n.charCodeAt(t)&255);return r}function $r(n,r){let t,e,i;const o=[];for(let f=0;f<n.length&&!((r-=2)<0);++f)t=n.charCodeAt(f),e=t>>8,i=t%256,o.push(i),o.push(e);return o}function nr(n){return h.toByteArray(Cr(n))}function L(n,r,t,e){let i;for(i=0;i<e&&!(i+t>=r.length||i>=n.length);++i)r[i+t]=n[i];return i}function A(n,r){return n instanceof r||n!=null&&n.constructor!=null&&n.constructor.name!=null&&n.constructor.name===r.name}function G(n){return n!==n}const Lr=function(){const n="0123456789abcdef",r=new Array(256);for(let t=0;t<16;++t){const e=t*16;for(let i=0;i<16;++i)r[e+i]=n[t]+n[i]}return r}();function T(n){return typeof BigInt>"u"?br:n}function br(){throw new Error("BigInt not supported")}})(W);function zr(c){let h,s;return h=new Or({props:{fromTitle:"Plain Text",toTitle:"Hex",to:c[0],from:c[1]}}),{c(){er(h.$$.fragment)},l(p){ir(h.$$.fragment,p)},m(p,y){or(h,p,y),s=!0},p:Dr,i(p){s||(ur(h.$$.fragment,p),s=!0)},o(p){fr(h.$$.fragment,p),s=!1},d(p){hr(h,p)}}}function Kr(c){let h,s;return h=new Gr({props:{$$slots:{default:[zr]},$$scope:{ctx:c}}}),{c(){er(h.$$.fragment)},l(p){ir(h.$$.fragment,p)},m(p,y){or(h,p,y),s=!0},p(p,[y]){const w={};y&4&&(w.$$scope={dirty:y,ctx:p}),h.$set(w)},i(p){s||(ur(h.$$.fragment,p),s=!0)},o(p){fr(h.$$.fragment,p),s=!1},d(p){hr(h,p)}}}function Zr(c){function h(p){return Array.from(W.Buffer.from(p)).map(w=>w.toString(16).padStart(2,"0")).join(" ")}function s(p){return W.Buffer.from(p.replace(/ /g,""),"hex")}return[h,s]}class it extends Nr{constructor(h){super(),Pr(this,h,Zr,Kr,kr,{})}}export{it as component};
