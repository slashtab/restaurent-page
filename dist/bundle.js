(()=>{"use strict";var e={426:(e,n,r)=>{r.d(n,{Z:()=>p});var t=r(81),o=r.n(t),a=r(645),c=r.n(a),i=r(667),s=r.n(i),d=new URL(r(697),r.b),l=c()(o()),u=s()(d);l.push([e.id,"body{\r\n    margin: 0;\r\n}\r\n\r\n.content{\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.header{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    gap: 20px;\r\n    background-color: #5e9b59;\r\n    color: #C7E8CA;\r\n}\r\n\r\n.home:hover, .menu:hover, .contact:hover{\r\n    color: #DDF7E3;\r\n}\r\n\r\n.mainBody{\r\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url("+u+");\r\n    background-position: center;\r\n    margin: 0;\r\n    color: #F4F4F2;\r\n    padding-bottom: 10%;\r\n}\r\n\r\n.name{\r\n    margin:0;\r\n    font-size: clamp(2rem, 2rem + 1.5vw, 10rem);\r\n}\r\n\r\n.subName{\r\n    margin: 0;\r\n    font-size: 1rem;\r\n}\r\n\r\n.textMainBody{\r\n    display:flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-content: center;\r\n    text-align: center;\r\n    padding: 10% 10% 50px 10%;\r\n}\r\n\r\nimg{\r\n    max-inline-size: 100%;\r\n    block-size: auto;\r\n}\r\n\r\n.orderNow{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.orderFrom{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7%;\r\n}\r\n\r\n.textOrderNow{\r\n    color: #5e9b59; \r\n}\r\n.swiggy{\r\n    width: 10%;\r\n    height: auto;\r\n}\r\n\r\n.zoma{\r\n    width: 10%;\r\n    height: auto;\r\n}\r\n\r\n.footer{\r\n    background-color: #C7E8CA;\r\n    color: #5D9C59;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 1.5px;\r\n    margin: 0;\r\n}\r\n\r\n.footNote{\r\n    margin: 0;\r\n}\r\n\r\n.selected{\r\n    color: #DDF7E3;\r\n}",""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);t&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=t.base?s[0]+t.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=r(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,t);t.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=r(a[c]);n[i].references--}for(var s=t(e,o),d=0;d<a.length;d++){var l=r(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},697:(e,n,r)=>{e.exports=r.p+"9917415ab05191a45fef.png"}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,r),a.exports}r.m=e,r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!e;)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{const e=r.p+"48eb04b39cdfbf6752f2.svg",n=r.p+"8e07a59485947eab3ba6.png";var t=r(379),o=r.n(t),a=r(795),c=r.n(a),i=r(569),s=r.n(i),d=r(565),l=r.n(d),u=r(216),p=r.n(u),m=r(589),f=r.n(m),h=r(426),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=p(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals,function(){const r=document.createElement("div"),t=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),u=document.createElement("div"),p=document.createElement("div"),m=document.createElement("div"),f=document.getElementById("content");t.innerHTML="<h1>Menu</h1>",o.innerHTML="<h1>Home</h1>",a.innerHTML="<h1>Contact</h1>",t.classList.add("menu"),o.classList.add("home"),a.classList.add("contact"),r.classList.add("header"),i.classList.add("textMainBody"),r.appendChild(o),r.appendChild(t),r.appendChild(a),c.classList.add("mainBody"),i.innerHTML='<h1 class = "name">Meiloorun Cafe</h1><h5 class = "subName">A Salad Cloud Kitchen</h5>',c.appendChild(i),l.appendChild(u),l.appendChild(p),s.appendChild(d),s.appendChild(l),c.appendChild(s),l.classList.add("orderFrom"),s.classList.add("orderNow"),u.classList.add("swiggy"),p.classList.add("zoma"),d.innerHTML='<h2 class = "OrderNowText">Order Now On!</h2>';const h=new Image;h.src=e,u.appendChild(h);const v=new Image;v.src=n,p.appendChild(v),m.innerHTML='<h6 class="footNote">©Meiloorun</h6>',m.classList.add("footer"),f.appendChild(r),f.appendChild(c),f.appendChild(m)}();const g=document.querySelector(".home");document.querySelector(".menu"),document.querySelector(".contact"),g.addEventListener("click",(()=>{g.classList.add(selected)}))})()})();