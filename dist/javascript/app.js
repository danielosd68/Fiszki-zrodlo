(()=>{var t={931:(t,n,e)=>{"use strict";e.d(n,{Z:()=>u});var r=e(81),a=e.n(r),o=e(645),i=e.n(o)()(a());i.push([t.id,"html{min-height:100vh}html body{background-color:#242424;min-height:100vh;margin:0;color:white;font-family:sans-serif}html body main{min-height:100vh}html body main h1{text-align:center;margin-top:0}html body main .container{min-height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column}html body main .container .content{width:100%;min-height:70vh;display:flex;justify-content:center;align-items:center}html body main .container .content .flashcard{width:40%;height:45vh;background-color:black;border-radius:40px;box-shadow:8px 8px 42px -5px #696d94;display:flex;justify-content:center;align-items:center;font-size:2.5em;user-select:none;cursor:pointer;position:relative}@media only screen and (max-width: 1550px){html body main .container .content .flashcard{font-size:2em}}@media only screen and (max-width: 1200px){html body main .container .content .flashcard{width:60%}}@media only screen and (max-width: 850px){html body main .container .content .flashcard{width:65%;font-size:1.5em}}@media only screen and (max-width: 500px){html body main .container .content .flashcard{font-size:1.1em;width:75%}}html body main .container .content .flashcard .translation{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}html body main .container .content .ended{text-align:center;box-shadow:8px 8px 42px 5px #69bc49;background-color:black}html body main .container .options{width:100%;min-height:23vh;display:flex;justify-content:center}html body main .container .options .btn{width:200px;height:50px;background-color:black;border-radius:30px;border:2px solid white;display:flex;justify-content:center;align-items:center;font-size:1.2em;user-select:none;cursor:pointer;margin-left:10px;margin-right:10px;transition:all 0.3s ease-in-out}html body main .container .options .btn:hover{background-color:white;color:black}html body main .container .options .disabled{width:200px;height:50px;background-color:black;border-radius:30px;border:2px solid white;display:flex;justify-content:center;align-items:center;opacity:0.5;font-size:1.2em;user-select:none;margin-left:10px;margin-right:10px}html body main .container .copy{transform:translateY(50px);font-size:1.1em;color:gray}\n",""]);const u=i},645:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var s=this[u][0];null!=s&&(i[s]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var o={},i=[],u=0;u<t.length;u++){var s=t[u],c=r.base?s[0]+r.base:s[0],l=o[c]||0,d="".concat(c," ").concat(l);o[c]=l+1;var f=e(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var h=a(p,r);r.byIndex=u,n.splice(u,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function a(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var u=e(o[i]);n[u].references--}for(var s=r(t,a),c=0;c<o.length;c++){var l=e(o[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:t=>{"use strict";var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{"use strict";t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,a&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},446:()=>{const t=document.createElement("p");let n=(new Date).getFullYear();t.innerHTML=`&copy; Copyright ${n} Chyliński Daniel`,t.classList.add("copy"),document.querySelector(".container").appendChild(t)}},n={};function e(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return t[r](o,o.exports,e),o.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{"use strict";var t=e(379),n=e.n(t),r=e(795),a=e.n(r),o=e(569),i=e.n(o),u=e(565),s=e.n(u),c=e(216),l=e.n(c),d=e(589),f=e.n(d),p=e(931),h={};h.styleTagTransform=f(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals,e(446);var m={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},g={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},v=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],y={CSS:{},springs:{}};function b(t,n,e){return Math.min(Math.max(t,n),e)}function w(t,n){return t.indexOf(n)>-1}function x(t,n){return t.apply(null,n)}var k={arr:function(t){return Array.isArray(t)},obj:function(t){return w(Object.prototype.toString.call(t),"Object")},pth:function(t){return k.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||k.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},nil:function(t){return k.und(t)||null===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return k.hex(t)||k.rgb(t)||k.hsl(t)},key:function(t){return!m.hasOwnProperty(t)&&!g.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function M(t){var n=/\(([^)]+)\)/.exec(t);return n?n[1].split(",").map((function(t){return parseFloat(t)})):[]}function T(t,n){var e=M(t),r=b(k.und(e[0])?1:e[0],.1,100),a=b(k.und(e[1])?100:e[1],.1,100),o=b(k.und(e[2])?10:e[2],.1,100),i=b(k.und(e[3])?0:e[3],.1,100),u=Math.sqrt(a/r),s=o/(2*Math.sqrt(a*r)),c=s<1?u*Math.sqrt(1-s*s):0,l=s<1?(s*u-i)/c:-i+u;function d(t){var e=n?n*t/1e3:t;return e=s<1?Math.exp(-e*s*u)*(1*Math.cos(c*e)+l*Math.sin(c*e)):(1+l*e)*Math.exp(-e*u),0===t||1===t?t:1-e}return n?d:function(){var n=y.springs[t];if(n)return n;for(var e=1/6,r=0,a=0;;)if(1===d(r+=e)){if(++a>=16)break}else a=0;var o=r*e*1e3;return y.springs[t]=o,o}}function C(t){return void 0===t&&(t=10),function(n){return Math.ceil(b(n,1e-6,1)*t)*(1/t)}}var P,O,j=function(){var t=.1;function n(t,n){return 1-3*n+3*t}function e(t,n){return 3*n-6*t}function r(t){return 3*t}function a(t,a,o){return((n(a,o)*t+e(a,o))*t+r(a))*t}function o(t,a,o){return 3*n(a,o)*t*t+2*e(a,o)*t+r(a)}return function(n,e,r,i){if(0<=n&&n<=1&&0<=r&&r<=1){var u=new Float32Array(11);if(n!==e||r!==i)for(var s=0;s<11;++s)u[s]=a(s*t,n,r);return function(s){return n===e&&r===i||0===s||1===s?s:a(function(e){for(var i=0,s=1;10!==s&&u[s]<=e;++s)i+=t;--s;var c=i+(e-u[s])/(u[s+1]-u[s])*t,l=o(c,n,r);return l>=.001?function(t,n,e,r){for(var i=0;i<4;++i){var u=o(n,e,r);if(0===u)return n;n-=(a(n,e,r)-t)/u}return n}(e,c,n,r):0===l?c:function(t,n,e,r,o){var i,u,s=0;do{(i=a(u=n+(e-n)/2,r,o)-t)>0?e=u:n=u}while(Math.abs(i)>1e-7&&++s<10);return u}(e,i,i+t,n,r)}(s),e,i)}}}}(),B=(P={linear:function(){return function(t){return t}}},O={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){for(var n,e=4;t<((n=Math.pow(2,--e))-1)/11;);return 1/Math.pow(4,3-e)-7.5625*Math.pow((3*n-2)/22-t,2)}},Elastic:function(t,n){void 0===t&&(t=1),void 0===n&&(n=.5);var e=b(t,1,10),r=b(n,.1,2);return function(t){return 0===t||1===t?t:-e*Math.pow(2,10*(t-1))*Math.sin((t-1-r/(2*Math.PI)*Math.asin(1/e))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(t,n){O[t]=function(){return function(t){return Math.pow(t,n+2)}}})),Object.keys(O).forEach((function(t){var n=O[t];P["easeIn"+t]=n,P["easeOut"+t]=function(t,e){return function(r){return 1-n(t,e)(1-r)}},P["easeInOut"+t]=function(t,e){return function(r){return r<.5?n(t,e)(2*r)/2:1-n(t,e)(-2*r+2)/2}},P["easeOutIn"+t]=function(t,e){return function(r){return r<.5?(1-n(t,e)(1-2*r))/2:(n(t,e)(2*r-1)+1)/2}}})),P);function S(t,n){if(k.fnc(t))return t;var e=t.split("(")[0],r=B[e],a=M(t);switch(e){case"spring":return T(t,n);case"cubicBezier":return x(j,a);case"steps":return x(C,a);default:return x(r,a)}}function A(t){try{return document.querySelectorAll(t)}catch(t){return}}function I(t,n){for(var e=t.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<e;o++)if(o in t){var i=t[o];n.call(r,i,o,t)&&a.push(i)}return a}function L(t){return t.reduce((function(t,n){return t.concat(k.arr(n)?L(n):n)}),[])}function D(t){return k.arr(t)?t:(k.str(t)&&(t=A(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function E(t,n){return t.some((function(t){return t===n}))}function z(t){var n={};for(var e in t)n[e]=t[e];return n}function F(t,n){var e=z(t);for(var r in t)e[r]=n.hasOwnProperty(r)?n[r]:t[r];return e}function H(t,n){var e=z(t);for(var r in n)e[r]=k.und(t[r])?n[r]:t[r];return e}function N(t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(n)return n[1]}function q(t,n){return k.fnc(t)?t(n.target,n.id,n.total):t}function Z(t,n){return t.getAttribute(n)}function Y(t,n,e){if(E([e,"deg","rad","turn"],N(n)))return n;var r=y.CSS[n+e];if(!k.und(r))return r;var a=document.createElement(t.tagName),o=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=100+e;var i=100/a.offsetWidth;o.removeChild(a);var u=i*parseFloat(n);return y.CSS[n+e]=u,u}function $(t,n,e){if(n in t.style){var r=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=t.style[n]||getComputedStyle(t).getPropertyValue(r)||"0";return e?Y(t,a,e):a}}function V(t,n){return k.dom(t)&&!k.inp(t)&&(!k.nil(Z(t,n))||k.svg(t)&&t[n])?"attribute":k.dom(t)&&E(v,n)?"transform":k.dom(t)&&"transform"!==n&&$(t,n)?"css":null!=t[n]?"object":void 0}function W(t){if(k.dom(t)){for(var n,e=t.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;n=r.exec(e);)a.set(n[1],n[2]);return a}}function G(t,n,e,r){switch(V(t,n)){case"transform":return function(t,n,e,r){var a=w(n,"scale")?1:0+function(t){return w(t,"translate")||"perspective"===t?"px":w(t,"rotate")||w(t,"skew")?"deg":void 0}(n),o=W(t).get(n)||a;return e&&(e.transforms.list.set(n,o),e.transforms.last=n),r?Y(t,o,r):o}(t,n,r,e);case"css":return $(t,n,e);case"attribute":return Z(t,n);default:return t[n]||0}}function R(t,n){var e=/^(\*=|\+=|-=)/.exec(t);if(!e)return t;var r=N(t)||0,a=parseFloat(n),o=parseFloat(t.replace(e[0],""));switch(e[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function X(t,n){if(k.col(t))return function(t){return k.rgb(t)?(e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n=t))?"rgba("+e[1]+",1)":n:k.hex(t)?function(t){var n=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,n,e,r){return n+n+e+e+r+r})),e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return"rgba("+parseInt(e[1],16)+","+parseInt(e[2],16)+","+parseInt(e[3],16)+",1)"}(t):k.hsl(t)?function(t){var n,e,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),o=parseInt(a[1],10)/360,i=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,s=a[4]||1;function c(t,n,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(n-t)*e:e<.5?n:e<2/3?t+(n-t)*(2/3-e)*6:t}if(0==i)n=e=r=u;else{var l=u<.5?u*(1+i):u+i-u*i,d=2*u-l;n=c(d,l,o+1/3),e=c(d,l,o),r=c(d,l,o-1/3)}return"rgba("+255*n+","+255*e+","+255*r+","+s+")"}(t):void 0;var n,e}(t);if(/\s/g.test(t))return t;var e=N(t),r=e?t.substr(0,t.length-e.length):t;return n?r+n:r}function _(t,n){return Math.sqrt(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2))}function J(t){for(var n,e=t.points,r=0,a=0;a<e.numberOfItems;a++){var o=e.getItem(a);a>0&&(r+=_(n,o)),n=o}return r}function K(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return function(t){return 2*Math.PI*Z(t,"r")}(t);case"rect":return function(t){return 2*Z(t,"width")+2*Z(t,"height")}(t);case"line":return function(t){return _({x:Z(t,"x1"),y:Z(t,"y1")},{x:Z(t,"x2"),y:Z(t,"y2")})}(t);case"polyline":return J(t);case"polygon":return function(t){var n=t.points;return J(t)+_(n.getItem(n.numberOfItems-1),n.getItem(0))}(t)}}function Q(t,n){var e=n||{},r=e.el||function(t){for(var n=t.parentNode;k.svg(n)&&k.svg(n.parentNode);)n=n.parentNode;return n}(t),a=r.getBoundingClientRect(),o=Z(r,"viewBox"),i=a.width,u=a.height,s=e.viewBox||(o?o.split(" "):[0,0,i,u]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:i,h:u,vW:s[2],vH:s[3]}}function U(t,n,e){function r(e){void 0===e&&(e=0);var r=n+e>=1?n+e:0;return t.el.getPointAtLength(r)}var a=Q(t.el,t.svg),o=r(),i=r(-1),u=r(1),s=e?1:a.w/a.vW,c=e?1:a.h/a.vH;switch(t.property){case"x":return(o.x-a.x)*s;case"y":return(o.y-a.y)*c;case"angle":return 180*Math.atan2(u.y-i.y,u.x-i.x)/Math.PI}}function tt(t,n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=X(k.pth(t)?t.totalLength:t,n)+"";return{original:r,numbers:r.match(e)?r.match(e).map(Number):[0],strings:k.str(t)||n?r.split(e):[]}}function nt(t){return I(t?L(k.arr(t)?t.map(D):D(t)):[],(function(t,n,e){return e.indexOf(t)===n}))}function et(t){var n=nt(t);return n.map((function(t,e){return{target:t,id:e,total:n.length,transforms:{list:W(t)}}}))}function rt(t,n){var e=z(n);if(/^spring/.test(e.easing)&&(e.duration=T(e.easing)),k.arr(t)){var r=t.length;2!==r||k.obj(t[0])?k.fnc(n.duration)||(e.duration=n.duration/r):t={value:t}}var a=k.arr(t)?t:[t];return a.map((function(t,e){var r=k.obj(t)&&!k.pth(t)?t:{value:t};return k.und(r.delay)&&(r.delay=e?0:n.delay),k.und(r.endDelay)&&(r.endDelay=e===a.length-1?n.endDelay:0),r})).map((function(t){return H(t,e)}))}var at={css:function(t,n,e){return t.style[n]=e},attribute:function(t,n,e){return t.setAttribute(n,e)},object:function(t,n,e){return t[n]=e},transform:function(t,n,e,r,a){if(r.list.set(n,e),n===r.last||a){var o="";r.list.forEach((function(t,n){o+=n+"("+t+") "})),t.style.transform=o}}};function ot(t,n){et(t).forEach((function(t){for(var e in n){var r=q(n[e],t),a=t.target,o=N(r),i=G(a,e,o,t),u=R(X(r,o||N(i)),i),s=V(a,e);at[s](a,e,u,t.transforms,!0)}}))}function it(t,n){return I(L(t.map((function(t){return n.map((function(n){return function(t,n){var e=V(t.target,n.name);if(e){var r=function(t,n){var e;return t.tweens.map((function(r){var a=function(t,n){var e={};for(var r in t){var a=q(t[r],n);k.arr(a)&&1===(a=a.map((function(t){return q(t,n)}))).length&&(a=a[0]),e[r]=a}return e.duration=parseFloat(e.duration),e.delay=parseFloat(e.delay),e}(r,n),o=a.value,i=k.arr(o)?o[1]:o,u=N(i),s=G(n.target,t.name,u,n),c=e?e.to.original:s,l=k.arr(o)?o[0]:c,d=N(l)||N(s),f=u||d;return k.und(i)&&(i=c),a.from=tt(l,f),a.to=tt(R(i,l),f),a.start=e?e.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=S(a.easing,a.duration),a.isPath=k.pth(o),a.isPathTargetInsideSVG=a.isPath&&k.svg(n.target),a.isColor=k.col(a.from.original),a.isColor&&(a.round=1),e=a,a}))}(n,t),a=r[r.length-1];return{type:e,property:n.name,animatable:t,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(t,n)}))}))),(function(t){return!k.und(t)}))}function ut(t,n){var e=t.length,r=function(t){return t.timelineOffset?t.timelineOffset:0},a={};return a.duration=e?Math.max.apply(Math,t.map((function(t){return r(t)+t.duration}))):n.duration,a.delay=e?Math.min.apply(Math,t.map((function(t){return r(t)+t.delay}))):n.delay,a.endDelay=e?a.duration-Math.max.apply(Math,t.map((function(t){return r(t)+t.duration-t.endDelay}))):n.endDelay,a}var st=0,ct=[],lt=function(){var t;function n(e){for(var r=ct.length,a=0;a<r;){var o=ct[a];o.paused?(ct.splice(a,1),r--):(o.tick(e),a++)}t=a>0?requestAnimationFrame(n):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){ft.suspendWhenDocumentHidden&&(dt()?t=cancelAnimationFrame(t):(ct.forEach((function(t){return t._onDocumentVisibility()})),lt()))})),function(){t||dt()&&ft.suspendWhenDocumentHidden||!(ct.length>0)||(t=requestAnimationFrame(n))}}();function dt(){return!!document&&document.hidden}function ft(t){void 0===t&&(t={});var n,e=0,r=0,a=0,o=0,i=null;function u(t){var n=window.Promise&&new Promise((function(t){return i=t}));return t.finished=n,n}var s=function(t){var n=F(m,t),e=F(g,t),r=function(t,n){var e=[],r=n.keyframes;for(var a in r&&(n=H(function(t){for(var n=I(L(t.map((function(t){return Object.keys(t)}))),(function(t){return k.key(t)})).reduce((function(t,n){return t.indexOf(n)<0&&t.push(n),t}),[]),e={},r=function(r){var a=n[r];e[a]=t.map((function(t){var n={};for(var e in t)k.key(e)?e==a&&(n.value=t[e]):n[e]=t[e];return n}))},a=0;a<n.length;a++)r(a);return e}(r),n)),n)k.key(a)&&e.push({name:a,tweens:rt(n[a],t)});return e}(e,t),a=et(t.targets),o=it(a,r),i=ut(o,e),u=st;return st++,H(n,{id:u,children:[],animatables:a,animations:o,duration:i.duration,delay:i.delay,endDelay:i.endDelay})}(t);function c(){var t=s.direction;"alternate"!==t&&(s.direction="normal"!==t?"normal":"reverse"),s.reversed=!s.reversed,n.forEach((function(t){return t.reversed=s.reversed}))}function l(t){return s.reversed?s.duration-t:t}function d(){e=0,r=l(s.currentTime)*(1/ft.speed)}function f(t,n){n&&n.seek(t-n.timelineOffset)}function p(t){for(var n=0,e=s.animations,r=e.length;n<r;){var a=e[n],o=a.animatable,i=a.tweens,u=i.length-1,c=i[u];u&&(c=I(i,(function(n){return t<n.end}))[0]||c);for(var l=b(t-c.start-c.delay,0,c.duration)/c.duration,d=isNaN(l)?1:c.easing(l),f=c.to.strings,p=c.round,h=[],m=c.to.numbers.length,g=void 0,v=0;v<m;v++){var y=void 0,w=c.to.numbers[v],x=c.from.numbers[v]||0;y=c.isPath?U(c.value,d*w,c.isPathTargetInsideSVG):x+d*(w-x),p&&(c.isColor&&v>2||(y=Math.round(y*p)/p)),h.push(y)}var k=f.length;if(k){g=f[0];for(var M=0;M<k;M++){f[M];var T=f[M+1],C=h[M];isNaN(C)||(g+=T?C+T:C+" ")}}else g=h[0];at[a.type](o.target,a.property,g,o.transforms),a.currentValue=g,n++}}function h(t){s[t]&&!s.passThrough&&s[t](s)}function v(t){var d=s.duration,m=s.delay,g=d-s.endDelay,v=l(t);s.progress=b(v/d*100,0,100),s.reversePlayback=v<s.currentTime,n&&function(t){if(s.reversePlayback)for(var e=o;e--;)f(t,n[e]);else for(var r=0;r<o;r++)f(t,n[r])}(v),!s.began&&s.currentTime>0&&(s.began=!0,h("begin")),!s.loopBegan&&s.currentTime>0&&(s.loopBegan=!0,h("loopBegin")),v<=m&&0!==s.currentTime&&p(0),(v>=g&&s.currentTime!==d||!d)&&p(d),v>m&&v<g?(s.changeBegan||(s.changeBegan=!0,s.changeCompleted=!1,h("changeBegin")),h("change"),p(v)):s.changeBegan&&(s.changeCompleted=!0,s.changeBegan=!1,h("changeComplete")),s.currentTime=b(v,0,d),s.began&&h("update"),t>=d&&(r=0,s.remaining&&!0!==s.remaining&&s.remaining--,s.remaining?(e=a,h("loopComplete"),s.loopBegan=!1,"alternate"===s.direction&&c()):(s.paused=!0,s.completed||(s.completed=!0,h("loopComplete"),h("complete"),!s.passThrough&&"Promise"in window&&(i(),u(s)))))}return u(s),s.reset=function(){var t=s.direction;s.passThrough=!1,s.currentTime=0,s.progress=0,s.paused=!0,s.began=!1,s.loopBegan=!1,s.changeBegan=!1,s.completed=!1,s.changeCompleted=!1,s.reversePlayback=!1,s.reversed="reverse"===t,s.remaining=s.loop,n=s.children;for(var e=o=n.length;e--;)s.children[e].reset();(s.reversed&&!0!==s.loop||"alternate"===t&&1===s.loop)&&s.remaining++,p(s.reversed?s.duration:0)},s._onDocumentVisibility=d,s.set=function(t,n){return ot(t,n),s},s.tick=function(t){a=t,e||(e=a),v((a+(r-e))*ft.speed)},s.seek=function(t){v(l(t))},s.pause=function(){s.paused=!0,d()},s.play=function(){s.paused&&(s.completed&&s.reset(),s.paused=!1,ct.push(s),d(),lt())},s.reverse=function(){c(),s.completed=!s.reversed,d()},s.restart=function(){s.reset(),s.play()},s.remove=function(t){ht(nt(t),s)},s.reset(),s.autoplay&&s.play(),s}function pt(t,n){for(var e=n.length;e--;)E(t,n[e].animatable.target)&&n.splice(e,1)}function ht(t,n){var e=n.animations,r=n.children;pt(t,e);for(var a=r.length;a--;){var o=r[a],i=o.animations;pt(t,i),i.length||o.children.length||r.splice(a,1)}e.length||r.length||n.pause()}ft.version="3.2.1",ft.speed=1,ft.suspendWhenDocumentHidden=!0,ft.running=ct,ft.remove=function(t){for(var n=nt(t),e=ct.length;e--;)ht(n,ct[e])},ft.get=G,ft.set=ot,ft.convertPx=Y,ft.path=function(t,n){var e=k.str(t)?A(t)[0]:t,r=n||100;return function(t){return{property:t,el:e,svg:Q(e),totalLength:K(e)*(r/100)}}},ft.setDashoffset=function(t){var n=K(t);return t.setAttribute("stroke-dasharray",n),n},ft.stagger=function(t,n){void 0===n&&(n={});var e=n.direction||"normal",r=n.easing?S(n.easing):null,a=n.grid,o=n.axis,i=n.from||0,u="first"===i,s="center"===i,c="last"===i,l=k.arr(t),d=l?parseFloat(t[0]):parseFloat(t),f=l?parseFloat(t[1]):0,p=N(l?t[1]:t)||0,h=n.start||0+(l?d:0),m=[],g=0;return function(t,n,v){if(u&&(i=0),s&&(i=(v-1)/2),c&&(i=v-1),!m.length){for(var y=0;y<v;y++){if(a){var b=s?(a[0]-1)/2:i%a[0],w=s?(a[1]-1)/2:Math.floor(i/a[0]),x=b-y%a[0],k=w-Math.floor(y/a[0]),M=Math.sqrt(x*x+k*k);"x"===o&&(M=-x),"y"===o&&(M=-k),m.push(M)}else m.push(Math.abs(i-y));g=Math.max.apply(Math,m)}r&&(m=m.map((function(t){return r(t/g)*g}))),"reverse"===e&&(m=m.map((function(t){return o?t<0?-1*t:-t:Math.abs(g-t)})))}return h+(l?(f-d)/g:d)*(Math.round(100*m[n])/100)+p}},ft.timeline=function(t){void 0===t&&(t={});var n=ft(t);return n.duration=0,n.add=function(e,r){var a=ct.indexOf(n),o=n.children;function i(t){t.passThrough=!0}a>-1&&ct.splice(a,1);for(var u=0;u<o.length;u++)i(o[u]);var s=H(e,F(g,t));s.targets=s.targets||t.targets;var c=n.duration;s.autoplay=!1,s.direction=n.direction,s.timelineOffset=k.und(r)?c:R(r,c),i(n),n.seek(s.timelineOffset);var l=ft(s);i(l),o.push(l);var d=ut(o,t);return n.delay=d.delay,n.endDelay=d.endDelay,n.duration=d.duration,n.seek(0),n.reset(),n.autoplay&&n.play(),n},n},ft.easing=S,ft.penner=B,ft.random=function(t,n){return Math.floor(Math.random()*(n-t+1))+t};const mt=ft,gt=JSON.parse('{"P":[{"id":"1","word":"Samolot","translation":"Airplane"},{"id":"2","word":"Autokar","translation":"Coach"},{"id":"3","word":"Prom","translation":"Ferry"},{"id":"4","word":"Helikopter","translation":"Helicopter"},{"id":"5","word":"Poduszkowiec","translation":"Hovercraft"},{"id":"6","word":"Tramwaj","translation":"Tram"},{"id":"7","word":"Metro","translation":"Underground"},{"id":"8","word":"Jacht","translation":"Yacht"},{"id":"9","word":"Lotnisko","translation":"Airport"},{"id":"10","word":"Przystanek autobusowy","translation":"Bus stop"},{"id":"11","word":"Dworzec autobusowy","translation":"Coach station"},{"id":"12","word":"Autostrada","translation":"Motorway"},{"id":"13","word":"Postój taksówek","translation":"Taxi rank"},{"id":"14","word":"Bramka biletowa","translation":"Ticket barrier"},{"id":"15","word":"Stacja kolejowa","translation":"Train station"},{"id":"16","word":"Poczekalnia","translation":"Waiting room"},{"id":"17","word":"Karta pokładowa","translation":"Boarding card"},{"id":"18","word":"Korek","translation":"Traffic jam"},{"id":"19","word":"Kolizja","translation":"Collide"},{"id":"20","word":"Ciężarówka","translation":"Truck"},{"id":"21","word":"Minimalizować opóźnienia","translation":"Minimalize any delays"},{"id":"22","word":"Motocykl","translation":"Motorbike"},{"id":"23","word":"Train","translation":"Pociąg"},{"id":"24","word":"Peron","translation":"Platform"},{"id":"25","word":"Transport publiczny","translation":"Public transport"},{"id":"26","word":"Droga","translation":"Road"},{"id":"27","word":"Rozkłady jazdy","translation":"Timetables"},{"id":"28","word":"Skuter","translation":"Scooter"},{"id":"29","word":"Transport morski","translation":"Sea transport"},{"id":"30","word":"Traktor","translation":"Tractor"}]}');mt({targets:".copy",translateY:-20}),new class{constructor(){this.title=document.querySelector(".flashcard"),this.container=document.querySelector(".content"),this.progressArray=[];let t=!1;const n=document.querySelector(".random"),e=gt.P.length,r=n.addEventListener("click",(()=>{30==this.progressArray.length&&(this.title.innerHTML="Opracowano wszystkie słówka. <br>Gratulacje!",this.changeBgColor("black"),this.title.classList.add("ended"),this.title.style.transition="all 0.3s ease-in-out",t=!0,removeEventListener(r));let n=Math.round(Math.random()*e)+1;for(let t of this.progressArray)t!=n||(n=Math.floor(Math.random()*e)+1);this.progressArray.push(n),console.log(this.progressArray);let a=gt.P[n-1].word,o=gt.P[n-1].translation;this.title.innerHTML=gt.P[n-1].word;let i=!1;this.changeBgColor("black"),this.title.addEventListener("click",(n=>{0==i?1==t?(this.changeBgColor("black"),this.title.innerHTML="Opracowano wszystkie słówka. <br>Gratulacje!"):(this.changeBgColor("#454561"),this.title.innerHTML=o,i=!0):1==t?(this.changeBgColor("black"),this.title.innerHTML="Opracowano wszystkie słówka. <br>Gratulacje!"):(this.changeBgColor("black"),this.title.innerHTML=a,i=!1)}))}))}changeBgColor(t){this.title.style.backgroundColor=t,this.title.style.transition="background-color 0.4s ease-in-out"}test(t){let n=0;for(let e of this.progressArray)e==t&&n++;alert(n)}}})()})();