for(var t={byteLength:function(t){var r=u(t),e=r[0],n=r[1];return 3*(e+n)/4-n},toByteArray:function(t){var r,o,i=u(t),a=i[0],$=i[1],j=new n(function(t,r,e){return 3*(r+e)/4-e}(0,a,$)),Y=0,q=$>0?a-4:a;for(o=0;o<q;o+=4)r=e[t.charCodeAt(o)]<<18|e[t.charCodeAt(o+1)]<<12|e[t.charCodeAt(o+2)]<<6|e[t.charCodeAt(o+3)],j[Y++]=r>>16&255,j[Y++]=r>>8&255,j[Y++]=255&r;2===$&&(r=e[t.charCodeAt(o)]<<2|e[t.charCodeAt(o+1)]>>4,j[Y++]=255&r);1===$&&(r=e[t.charCodeAt(o)]<<10|e[t.charCodeAt(o+1)]<<4|e[t.charCodeAt(o+2)]>>2,j[Y++]=r>>8&255,j[Y++]=255&r);return j},fromByteArray:function(t){for(var e,n=t.length,o=n%3,i=[],a=0,$=n-o;a<$;a+=16383)i.push(c(t,a,a+16383>$?$:a+16383));1===o?(e=t[n-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return i.join("")}},r=[],e=[],n="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,a=o.length;i<a;++i)r[i]=o[i],e[o.charCodeAt(i)]=i;function u(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");return -1===e&&(e=r),[e,e===r?0:4-e%4]}function c(t,e,n){for(var o,i,a=[],$=e;$<n;$+=3)o=(t[$]<<16&16711680)+(t[$+1]<<8&65280)+(255&t[$+2]),a.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return a.join("")}e["-".charCodeAt(0)]=62,e["_".charCodeAt(0)]=63;var $={read:function(t,r,e,n,o){var i,a,$=8*o-n-1,j=(1<<$)-1,Y=j>>1,q=-7,X=e?o-1:0,V=e?-1:1,W=t[r+X];for(X+=V,i=W&(1<<-q)-1,W>>=-q,q+=$;q>0;i=256*i+t[r+X],X+=V,q-=8);for(a=i&(1<<-q)-1,i>>=-q,q+=n;q>0;a=256*a+t[r+X],X+=V,q-=8);if(0===i)i=1-Y;else {if(i===j)return a?NaN:1/0*(W?-1:1);a+=Math.pow(2,n),i-=Y;}return (W?-1:1)*a*Math.pow(2,i-n)},write:function(t,r,e,n,o,i){var a,$,j,Y=8*i-o-1,q=(1<<Y)-1,X=q>>1,V=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,W=n?0:i-1,J=n?1:-1,Z=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?($=isNaN(r)?1:0,a=q):(a=Math.floor(Math.log(r)/Math.LN2),r*(j=Math.pow(2,-a))<1&&(a--,j*=2),(r+=a+X>=1?V/j:V*Math.pow(2,1-X))*j>=2&&(a++,j/=2),a+X>=q?($=0,a=q):a+X>=1?($=(r*j-1)*Math.pow(2,o),a+=X):($=r*Math.pow(2,X-1)*Math.pow(2,o),a=0));o>=8;t[e+W]=255&$,W+=J,$/=256,o-=8);for(a=a<<o|$,Y+=o;Y>0;t[e+W]=255&a,W+=J,a/=256,Y-=8);t[e+W-J]|=128*Z;}};var j={},Y=t,q=$,X="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;j.Buffer=u$1,j.SlowBuffer=function(t){+t!=t&&(t=0);return u$1.alloc(+t)},j.INSPECT_MAX_BYTES=50;function f(t){if(t>2147483647)throw new RangeError('The value "'+t+'" is invalid for option "size"');var r=new Uint8Array(t);return Object.setPrototypeOf(r,u$1.prototype),r}function u$1(t,r,e){if("number"==typeof t){if("string"==typeof r)throw new TypeError('The "string" argument must be of type string. Received type number');return a$2(t)}return s(t,r,e)}function s(t,r,e){if("string"==typeof t)return function(t,r){"string"==typeof r&&""!==r||(r="utf8");if(!u$1.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=0|y(t,r),n=f(e),o=n.write(t,r);o!==e&&(n=n.slice(0,o));return n}(t,r);if(ArrayBuffer.isView(t))return p(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(F(t,ArrayBuffer)||t&&F(t.buffer,ArrayBuffer))return c$1(t,r,e);if("undefined"!=typeof SharedArrayBuffer&&(F(t,SharedArrayBuffer)||t&&F(t.buffer,SharedArrayBuffer)))return c$1(t,r,e);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return u$1.from(n,r,e);var o=function(t){if(u$1.isBuffer(t)){var r=0|l(t.length),e=f(r);return 0===e.length||t.copy(e,0,0,r),e}return void 0!==t.length?"number"!=typeof t.length||N(t.length)?f(0):p(t):"Buffer"===t.type&&Array.isArray(t.data)?p(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return u$1.from(t[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function h$1(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function a$2(t){return h$1(t),f(t<0?0:0|l(t))}function p(t){for(var r=t.length<0?0:0|l(t.length),e=f(r),n=0;n<r;n+=1)e[n]=255&t[n];return e}function c$1(t,r,e){if(r<0||t.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===r&&void 0===e?new Uint8Array(t):void 0===e?new Uint8Array(t,r):new Uint8Array(t,r,e),Object.setPrototypeOf(n,u$1.prototype),n}function l(t){if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|t}function y(t,r){if(u$1.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||F(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var e=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===e)return 0;for(var o=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return _(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return z(t).length;default:if(o)return n?-1:_(t).length;r=(""+r).toLowerCase(),o=!0;}}function g(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return "";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return "";if((e>>>=0)<=(r>>>=0))return "";for(t||(t="utf8");;)switch(t){case"hex":return O(this,r,e);case"utf8":case"utf-8":return I(this,r,e);case"ascii":return S(this,r,e);case"latin1":case"binary":return R(this,r,e);case"base64":return T(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0;}}function w(t,r,e){var n=t[r];t[r]=t[e],t[e]=n;}function d(t,r,e,n,o){if(0===t.length)return -1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),N(e=+e)&&(e=o?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(o)return -1;e=t.length-1;}else if(e<0){if(!o)return -1;e=0;}if("string"==typeof r&&(r=u$1.from(r,n)),u$1.isBuffer(r))return 0===r.length?-1:v(t,r,e,n,o);if("number"==typeof r)return r&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):v(t,[r],e,n,o);throw new TypeError("val must be string, number or Buffer")}function v(t,r,e,n,o){var i,a=1,$=t.length,j=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return -1;a=2,$/=2,j/=2,e/=2;}function h(t,r){return 1===a?t[r]:t.readUInt16BE(r*a)}if(o){var Y=-1;for(i=e;i<$;i++)if(h(t,i)===h(r,-1===Y?0:i-Y)){if(-1===Y&&(Y=i),i-Y+1===j)return Y*a}else -1!==Y&&(i-=i-Y),Y=-1;}else for(e+j>$&&(e=$-j),i=e;i>=0;i--){for(var q=!0,X=0;X<j;X++)if(h(t,i+X)!==h(r,X)){q=!1;break}if(q)return i}return -1}function b(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n))>o&&(n=o):n=o;var i=r.length;n>i/2&&(n=i/2);for(var a=0;a<n;++a){var $=parseInt(r.substr(2*a,2),16);if(N($))return a;t[e+a]=$;}return a}function m(t,r,e,n){return D(_(r,t.length-e),t,e,n)}function E(t,r,e,n){return D(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function B(t,r,e,n){return E(t,r,e,n)}function A(t,r,e,n){return D(z(r),t,e,n)}function U(t,r,e,n){return D(function(t,r){for(var e,n,o,i=[],a=0;a<t.length&&!((r-=2)<0);++a)e=t.charCodeAt(a),n=e>>8,o=e%256,i.push(o),i.push(n);return i}(r,t.length-e),t,e,n)}function T(t,r,e){return 0===r&&e===t.length?Y.fromByteArray(t):Y.fromByteArray(t.slice(r,e))}function I(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i,a,$,j,Y=t[o],q=null,X=Y>239?4:Y>223?3:Y>191?2:1;if(o+X<=e)switch(X){case 1:Y<128&&(q=Y);break;case 2:128==(192&(i=t[o+1]))&&(j=(31&Y)<<6|63&i)>127&&(q=j);break;case 3:i=t[o+1],a=t[o+2],128==(192&i)&&128==(192&a)&&(j=(15&Y)<<12|(63&i)<<6|63&a)>2047&&(j<55296||j>57343)&&(q=j);break;case 4:i=t[o+1],a=t[o+2],$=t[o+3],128==(192&i)&&128==(192&a)&&128==(192&$)&&(j=(15&Y)<<18|(63&i)<<12|(63&a)<<6|63&$)>65535&&j<1114112&&(q=j);}null===q?(q=65533,X=1):q>65535&&(q-=65536,n.push(q>>>10&1023|55296),q=56320|1023&q),n.push(q),o+=X;}return function(t){var r=t.length;if(r<=4096)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return e}(n)}j.kMaxLength=2147483647,u$1.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),42===t.foo()}catch(t){return !1}}(),u$1.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u$1.prototype,"parent",{enumerable:!0,get:function(){if(u$1.isBuffer(this))return this.buffer}}),Object.defineProperty(u$1.prototype,"offset",{enumerable:!0,get:function(){if(u$1.isBuffer(this))return this.byteOffset}}),u$1.poolSize=8192,u$1.from=function(t,r,e){return s(t,r,e)},Object.setPrototypeOf(u$1.prototype,Uint8Array.prototype),Object.setPrototypeOf(u$1,Uint8Array),u$1.alloc=function(t,r,e){return function(t,r,e){return h$1(t),t<=0?f(t):void 0!==r?"string"==typeof e?f(t).fill(r,e):f(t).fill(r):f(t)}(t,r,e)},u$1.allocUnsafe=function(t){return a$2(t)},u$1.allocUnsafeSlow=function(t){return a$2(t)},u$1.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==u$1.prototype},u$1.compare=function(t,r){if(F(t,Uint8Array)&&(t=u$1.from(t,t.offset,t.byteLength)),F(r,Uint8Array)&&(r=u$1.from(r,r.offset,r.byteLength)),!u$1.isBuffer(t)||!u$1.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===r)return 0;for(var e=t.length,n=r.length,o=0,i=Math.min(e,n);o<i;++o)if(t[o]!==r[o]){e=t[o],n=r[o];break}return e<n?-1:n<e?1:0},u$1.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return !0;default:return !1}},u$1.concat=function(t,r){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u$1.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=u$1.allocUnsafe(r),o=0;for(e=0;e<t.length;++e){var i=t[e];if(F(i,Uint8Array)&&(i=u$1.from(i)),!u$1.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length;}return n},u$1.byteLength=y,u$1.prototype._isBuffer=!0,u$1.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)w(this,r,r+1);return this},u$1.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)w(this,r,r+3),w(this,r+1,r+2);return this},u$1.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)w(this,r,r+7),w(this,r+1,r+6),w(this,r+2,r+5),w(this,r+3,r+4);return this},u$1.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?I(this,0,t):g.apply(this,arguments)},u$1.prototype.toLocaleString=u$1.prototype.toString,u$1.prototype.equals=function(t){if(!u$1.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u$1.compare(this,t)},u$1.prototype.inspect=function(){var t="",r=j.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},X&&(u$1.prototype[X]=u$1.prototype.inspect),u$1.prototype.compare=function(t,r,e,n,o){if(F(t,Uint8Array)&&(t=u$1.from(t,t.offset,t.byteLength)),!u$1.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),r<0||e>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&r>=e)return 0;if(n>=o)return -1;if(r>=e)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),a=(e>>>=0)-(r>>>=0),$=Math.min(i,a),j=this.slice(n,o),Y=t.slice(r,e),q=0;q<$;++q)if(j[q]!==Y[q]){i=j[q],a=Y[q];break}return i<a?-1:a<i?1:0},u$1.prototype.includes=function(t,r,e){return -1!==this.indexOf(t,r,e)},u$1.prototype.indexOf=function(t,r,e){return d(this,t,r,e,!0)},u$1.prototype.lastIndexOf=function(t,r,e){return d(this,t,r,e,!1)},u$1.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else {if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r>>>=0,isFinite(e)?(e>>>=0,void 0===n&&(n="utf8")):(n=e,e=void 0);}var o=this.length-r;if((void 0===e||e>o)&&(e=o),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return b(this,t,r,e);case"utf8":case"utf-8":return m(this,t,r,e);case"ascii":return E(this,t,r,e);case"latin1":case"binary":return B(this,t,r,e);case"base64":return A(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return U(this,t,r,e);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0;}},u$1.prototype.toJSON=function(){return {type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function S(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(127&t[o]);return n}function R(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}function O(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=W[t[i]];return o}function L(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function x(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function C(t,r,e,n,o,i){if(!u$1.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<i)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function P(t,r,e,n,o,i){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function k(t,r,e,n,o){return r=+r,e>>>=0,o||P(t,0,e,4),q.write(t,r,e,n,23,4),e+4}function M(t,r,e,n,o){return r=+r,e>>>=0,o||P(t,0,e,8),q.write(t,r,e,n,52,8),e+8}u$1.prototype.slice=function(t,r){var e=this.length;(t=~~t)<0?(t+=e)<0&&(t=0):t>e&&(t=e),(r=void 0===r?e:~~r)<0?(r+=e)<0&&(r=0):r>e&&(r=e),r<t&&(r=t);var n=this.subarray(t,r);return Object.setPrototypeOf(n,u$1.prototype),n},u$1.prototype.readUIntLE=function(t,r,e){t>>>=0,r>>>=0,e||x(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n},u$1.prototype.readUIntBE=function(t,r,e){t>>>=0,r>>>=0,e||x(t,r,this.length);for(var n=this[t+--r],o=1;r>0&&(o*=256);)n+=this[t+--r]*o;return n},u$1.prototype.readUInt8=function(t,r){return t>>>=0,r||x(t,1,this.length),this[t]},u$1.prototype.readUInt16LE=function(t,r){return t>>>=0,r||x(t,2,this.length),this[t]|this[t+1]<<8},u$1.prototype.readUInt16BE=function(t,r){return t>>>=0,r||x(t,2,this.length),this[t]<<8|this[t+1]},u$1.prototype.readUInt32LE=function(t,r){return t>>>=0,r||x(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u$1.prototype.readUInt32BE=function(t,r){return t>>>=0,r||x(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u$1.prototype.readIntLE=function(t,r,e){t>>>=0,r>>>=0,e||x(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*r)),n},u$1.prototype.readIntBE=function(t,r,e){t>>>=0,r>>>=0,e||x(t,r,this.length);for(var n=r,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*r)),i},u$1.prototype.readInt8=function(t,r){return t>>>=0,r||x(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u$1.prototype.readInt16LE=function(t,r){t>>>=0,r||x(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},u$1.prototype.readInt16BE=function(t,r){t>>>=0,r||x(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},u$1.prototype.readInt32LE=function(t,r){return t>>>=0,r||x(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u$1.prototype.readInt32BE=function(t,r){return t>>>=0,r||x(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u$1.prototype.readFloatLE=function(t,r){return t>>>=0,r||x(t,4,this.length),q.read(this,t,!0,23,4)},u$1.prototype.readFloatBE=function(t,r){return t>>>=0,r||x(t,4,this.length),q.read(this,t,!1,23,4)},u$1.prototype.readDoubleLE=function(t,r){return t>>>=0,r||x(t,8,this.length),q.read(this,t,!0,52,8)},u$1.prototype.readDoubleBE=function(t,r){return t>>>=0,r||x(t,8,this.length),q.read(this,t,!1,52,8)},u$1.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r>>>=0,e>>>=0,n)||C(this,t,r,e,Math.pow(2,8*e)-1,0);var o=1,i=0;for(this[r]=255&t;++i<e&&(o*=256);)this[r+i]=t/o&255;return r+e},u$1.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r>>>=0,e>>>=0,n)||C(this,t,r,e,Math.pow(2,8*e)-1,0);var o=e-1,i=1;for(this[r+o]=255&t;--o>=0&&(i*=256);)this[r+o]=t/i&255;return r+e},u$1.prototype.writeUInt8=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,1,255,0),this[r]=255&t,r+1},u$1.prototype.writeUInt16LE=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,2,65535,0),this[r]=255&t,this[r+1]=t>>>8,r+2},u$1.prototype.writeUInt16BE=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=255&t,r+2},u$1.prototype.writeUInt32LE=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t,r+4},u$1.prototype.writeUInt32BE=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},u$1.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var o=Math.pow(2,8*e-1);C(this,t,r,e,o-1,-o);}var i=0,a=1,$=0;for(this[r]=255&t;++i<e&&(a*=256);)t<0&&0===$&&0!==this[r+i-1]&&($=1),this[r+i]=(t/a>>0)-$&255;return r+e},u$1.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var o=Math.pow(2,8*e-1);C(this,t,r,e,o-1,-o);}var i=e-1,a=1,$=0;for(this[r+i]=255&t;--i>=0&&(a*=256);)t<0&&0===$&&0!==this[r+i+1]&&($=1),this[r+i]=(t/a>>0)-$&255;return r+e},u$1.prototype.writeInt8=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=255&t,r+1},u$1.prototype.writeInt16LE=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,2,32767,-32768),this[r]=255&t,this[r+1]=t>>>8,r+2},u$1.prototype.writeInt16BE=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=255&t,r+2},u$1.prototype.writeInt32LE=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,4,2147483647,-2147483648),this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4},u$1.prototype.writeInt32BE=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},u$1.prototype.writeFloatLE=function(t,r,e){return k(this,t,r,!0,e)},u$1.prototype.writeFloatBE=function(t,r,e){return k(this,t,r,!1,e)},u$1.prototype.writeDoubleLE=function(t,r,e){return M(this,t,r,!0,e)},u$1.prototype.writeDoubleBE=function(t,r,e){return M(this,t,r,!1,e)},u$1.prototype.copy=function(t,r,e,n){if(!u$1.isBuffer(t))throw new TypeError("argument should be a Buffer");if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var o=n-e;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(r,e,n);else if(this===t&&e<r&&r<n)for(var i=o-1;i>=0;--i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,n),r);return o},u$1.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!u$1.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){var o=t.charCodeAt(0);("utf8"===n&&o<128||"latin1"===n)&&(t=o);}}else "number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var i;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(i=r;i<e;++i)this[i]=t;else {var a=u$1.isBuffer(t)?t:u$1.from(t,n),$=a.length;if(0===$)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<e-r;++i)this[i+r]=a[i%$];}return this};var V=/[^+/0-9A-Za-z-_]/g;function _(t,r){var e;r=r||1/0;for(var n=t.length,o=null,i=[],a=0;a<n;++a){if((e=t.charCodeAt(a))>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320);}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e);}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,63&e|128);}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128);}else {if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128);}}return i}function z(t){return Y.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(V,"")).length<2)return "";for(;t.length%4!=0;)t+="=";return t}(t))}function D(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}function F(t,r){return t instanceof r||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===r.name}function N(t){return t!=t}var W=function(){for(var t=new Array(256),r=0;r<16;++r)for(var e=16*r,n=0;n<16;++n)t[e+n]="0123456789abcdef"[r]+"0123456789abcdef"[n];return t}();

export { j };
