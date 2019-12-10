var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function o(e){try{l(n.next(e))}catch(t){i(t)}}function s(e){try{l(n["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):a(e.value).then(o,s)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(s){o=[6,s];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],o=0,s=i.length;o<s;o++,a++)n[a]=i[o];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n="stencil-web-components";var a=0;var i=false;var o;var s;var l;var $=false;var f=false;var u=false;var c=false;var v=window;var d=document;var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var m=function(){return!!d.documentElement.attachShadow}();var p=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var g=new WeakMap;var y=function(e){return g.get(e)};var b=e("r",(function(e,t){return g.set(t.$lazyInstance$=e,t)}));var w=function(e){var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return g.set(e,t)};var R=function(e,t){return t in e};var N=function(e){return console.error(e)};var S=new Map;var x=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var o=S.get(i);if(o){return o[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{S.set(i,e)}return e[a]}),N)};var _=new Map;var T=[];var C=[];var E=[];var L=function(e,t){return function(r){e.push(r);if(!i){i=true;if(t&&h.$flags$&4){U(k)}else{h.raf(k)}}}};var A=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){N(r)}}e.length=0};var j=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){N(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var k=function(){a++;A(T);var e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;j(C,e);j(E,e);if(C.length>0){E.push.apply(E,C);C.length=0}if(i=T.length+C.length+E.length>0){h.raf(k)}else{a=0}};var U=function(e){return Promise.resolve().then(e)};var I=L(C,true);var O={};var B=function(e){return e!=null};var M=function(e){e=typeof e;return e==="object"||e==="function"};var P=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var H=e("a",(function(){if(!(v.CSS&&v.CSS.supports&&v.CSS.supports("color","var(--c)"))){return t.import("./p-a614138e.system.js").then((function(){h.$cssShim$=v.__stencil_cssshim;if(h.$cssShim$){return h.$cssShim$.initShim()}}))}return Promise.resolve()}));var z=e("p",(function(){return __awaiter(r,void 0,void 0,(function(){var e,r,a,i,o;return __generator(this,(function(s){switch(s.label){case 0:{h.$cssShim$=v.__stencil_cssshim}e=t.meta.url;r=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(d.querySelectorAll("script")).find((function(e){return r.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:o=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,v.location.href));V(o.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-5b416380.system.js")];case 2:s.sent();s.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:o.href})]}}))}))}));var V=function(e){var t=P(n);try{v[t]=new Function("w","return import(w);//"+Math.random())}catch(a){var r=new Map;v[t]=function(n){var a=new URL(n,e).href;var i=r.get(a);if(!i){var o=d.createElement("script");o.type="module";o.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){o.onload=function(){e(v[t].m);o.remove()}}));r.set(a,i);d.head.appendChild(o)}return i}}};var q=function(e,t){if(e!=null&&!M(e)){if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var W="r";var D="o";var F="s";var G="t";var Q="hydrated";var Y="s-id";var J="c-id";var K=function(e,t){if(t===void 0){t=""}{return function(){return}}};var X=function(e,t){{return function(){return}}};var Z=new WeakMap;var ee=function(e,t,r){var n=_.get(e);if(p&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}_.set(e,n)};var te=function(e,t,r,n){var a=ne(t.$tagName$);var i=_.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var o=Z.get(e);var s=void 0;if(!o){Z.set(e,o=new Set)}if(!o.has(a)){if(e.host&&(s=e.firstElementChild)&&s.tagName==="STYLE"){s.innerHTML=i}else{if(h.$cssShim$){s=h.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var l=s["s-sc"];if(l){a=l;o=null}}else{s=d.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var re=function(e,t,r){var n=K("attachStyles",t.$tagName$);var a=te(m&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h");if(t.$flags$&2){e.classList.add(a+"-s")}}n()};var ne=function(e,t){return"sc-"+e};var ae=function(e){return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{")};var ie=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=null;var o=false;var s=false;var l=[];var $=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!M(a)){a=String(a)}if(o&&s){l[l.length-1].$text$+=a}else{l.push(o?oe(null,a):a)}s=o}}};$(r);if(t){if(t.name){i=t.name}{var f=t.className||t.class;if(f){t.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}if(typeof e==="function"){return e(t,l,$e)}var u=oe(e,null);u.$attrs$=t;if(l.length>0){u.$children$=l}{u.$name$=i}return u}));var oe=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$name$=null}return r};var se=e("H",{});var le=function(e){return e&&e.$tag$===se};var $e={forEach:function(e,t){return e.map(fe).forEach(t)},map:function(e,t){return e.map(fe).map(t).map(ue)}};var fe=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var ue=function(e){var t=oe(e.vtag,e.vtext);t.$attrs$=e.vattrs;t.$children$=e.vchildren;t.$key$=e.vkey;t.$name$=e.vname;return t};var ce=function(e,t,r,n,a,i){if(r===n){return}var o=R(e,t);var s=t.toLowerCase();if(t==="class"){var l=e.classList;var $=de(r);var f=de(n);l.remove.apply(l,$.filter((function(e){return e&&!f.includes(e)})));l.add.apply(l,f.filter((function(e){return e&&!$.includes(e)})))}else if(!o&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(R(v,s)){t=s.slice(2)}else{t=s[2]+t.slice(3)}if(r){h.rel(e,t,r,false)}if(n){h.ael(e,t,n,false)}}else{var u=M(n);if((o||u&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var c=n==null?"":n;if(t==="list"){o=false}else if(r==null||e[t]!=c){e[t]=c}}else{e[t]=n}}catch(d){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!o||i&4||a)&&!u){n=n===true?"":n;{e.setAttribute(t,n)}}}};var ve=/\s/;var de=function(e){return!e?[]:e.split(ve)};var he=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||O;var o=t.$attrs$||O;{for(n in i){if(!(n in o)){ce(a,n,i[n],undefined,r,t.$flags$)}}}for(n in o){ce(a,n,i[n],o[n],r,t.$flags$)}};var me=function(e,t,r,n){var a=t.$children$[r];var i=0;var f;var v;var h;if(!$){u=true;if(a.$tag$==="slot"){if(o){n.classList.add(o+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){f=a.$elm$=d.createTextNode(a.$text$)}else if(a.$flags$&1){f=a.$elm$=d.createTextNode("")}else{f=a.$elm$=d.createElement(a.$flags$&2?"slot-fb":a.$tag$);{he(null,a,c)}if(B(o)&&f["s-si"]!==o){f.classList.add(f["s-si"]=o)}if(a.$children$){for(i=0;i<a.$children$.length;++i){v=me(e,a,i,f);if(v){f.appendChild(v)}}}}{f["s-hn"]=l;if(a.$flags$&(2|1)){f["s-sr"]=true;f["s-cr"]=s;f["s-sn"]=a.$name$||"";h=e&&e.$children$&&e.$children$[r];if(h&&h.$tag$===a.$tag$&&e.$elm$){pe(e.$elm$,false)}}}return f};var pe=function(e,t){h.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==l&&a["s-ol"]){Ne(a).insertBefore(a,Re(a));a["s-ol"].remove();a["s-ol"]=undefined;u=true}if(t){pe(a,t)}}h.$flags$&=~1};var ge=function(e,t,r,n,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var s;if(o.shadowRoot&&o.tagName===l){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){s=me(null,r,a,e);if(s){n[a].$elm$=s;o.insertBefore(s,Re(t))}}}};var ye=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;{f=true;if(a["s-ol"]){a["s-ol"].remove()}else{pe(a,true)}}a.remove()}}};var be=function(e,t,r,n){var a=0;var i=0;var o=t.length-1;var s=t[0];var l=t[o];var $=n.length-1;var f=n[0];var u=n[$];var c;while(a<=o&&i<=$){if(s==null){s=t[++a]}else if(l==null){l=t[--o]}else if(f==null){f=n[++i]}else if(u==null){u=n[--$]}else if(we(s,f)){Se(s,f);s=t[++a];f=n[++i]}else if(we(l,u)){Se(l,u);l=t[--o];u=n[--$]}else if(we(s,u)){if(s.$tag$==="slot"||u.$tag$==="slot"){pe(s.$elm$.parentNode,false)}Se(s,u);e.insertBefore(s.$elm$,l.$elm$.nextSibling);s=t[++a];u=n[--$]}else if(we(l,f)){if(s.$tag$==="slot"||u.$tag$==="slot"){pe(l.$elm$.parentNode,false)}Se(l,f);e.insertBefore(l.$elm$,s.$elm$);l=t[--o];f=n[++i]}else{{c=me(t&&t[i],r,i,e);f=n[++i]}if(c){{Ne(s.$elm$).insertBefore(c,Re(s.$elm$))}}}}if(a>o){ge(e,n[$+1]==null?null:n[$+1].$elm$,r,n,i,$)}else if(i>$){ye(t,a,o)}};var we=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}return true}return false};var Re=function(e){return e&&e["s-ol"]||e};var Ne=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var Se=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i;if(t.$text$===null){{if(t.$tag$==="slot");else{he(e,t,c)}}if(n!==null&&a!==null){be(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}ge(r,null,t,a,0,a.length-1)}else if(n!==null){ye(n,0,n.length-1)}}else if(i=r["s-cr"]){i.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.data=t.$text$}};var xe=function(e){var t=e.childNodes;var r;var n;var a;var i;var o;var s;for(n=0,a=t.length;n<a;n++){r=t[n];if(r.nodeType===1){if(r["s-sr"]){o=r["s-sn"];r.hidden=false;for(i=0;i<a;i++){if(t[i]["s-hn"]!==r["s-hn"]){s=t[i].nodeType;if(o!==""){if(s===1&&o===t[i].getAttribute("slot")){r.hidden=true;break}}else{if(s===1||s===3&&t[i].textContent.trim()!==""){r.hidden=true;break}}}}}xe(r)}}};var _e=[];var Te=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var o;var s;var l;var $;for(r=t.length;n<r;n++){o=t[n];if(o["s-sr"]&&(s=o["s-cr"])){l=s.parentNode.childNodes;$=o["s-sn"];for(a=l.length-1;a>=0;a--){s=l[a];if(!s["s-cn"]&&!s["s-nr"]&&s["s-hn"]!==o["s-hn"]){i=s.nodeType;if((i===3||i===8)&&$===""||i===1&&s.getAttribute("slot")===null&&$===""||i===1&&s.getAttribute("slot")===$){if(!_e.some((function(e){return e.$nodeToRelocate$===s}))){f=true;s["s-sn"]=$;_e.push({$slotRefNode$:o,$nodeToRelocate$:s})}}}}}if(o.nodeType===1){Te(o)}}};var Ce=function(e,t,r,n){l=e.tagName;var a=t.$vnode$||oe(null,null);var i=le(n)?n:ie(null,null,n);i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{o=e["s-sc"]}{s=e["s-cr"];$=m&&(r.$flags$&1)!==0;f=false}Se(a,i);{if(u){Te(i.$elm$);for(var c=0;c<_e.length;c++){var v=_e[c];if(!v.$nodeToRelocate$["s-ol"]){var p=d.createTextNode("");p["s-nr"]=v.$nodeToRelocate$;v.$nodeToRelocate$.parentNode.insertBefore(v.$nodeToRelocate$["s-ol"]=p,v.$nodeToRelocate$)}}h.$flags$|=1;for(var c=0;c<_e.length;c++){var v=_e[c];var g=v.$slotRefNode$.parentNode;var y=v.$slotRefNode$.nextSibling;var p=v.$nodeToRelocate$["s-ol"];while(p=p.previousSibling){var b=p["s-nr"];if(b&&b["s-sn"]===v.$nodeToRelocate$["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.$nodeToRelocate$.parentNode||v.$nodeToRelocate$.nextSibling!==y){if(v.$nodeToRelocate$!==y){g.insertBefore(v.$nodeToRelocate$,y)}}}h.$flags$&=~1}if(f){xe(i.$elm$)}_e.length=0}};var Ee=function(e,t){if(t&&!e.$onRenderResolve$){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var Le=function(e,t,r,n){{t.$flags$|=16}if(t.$flags$&4){t.$flags$|=512;return}var a=K("scheduleUpdate",r.$tagName$);var i=t.$ancestorComponent$;var o=t.$lazyInstance$;var s=function(){return Ae(e,t,r,o,n)};Ee(t,i);var l;if(n){{l=Ie(o,"componentWillLoad")}}else{{l=Ie(o,"componentWillUpdate")}}a();return Oe(l,(function(){return I(s)}))};var Ae=function(e,t,r,n,a){var i=K("update",r.$tagName$);var o=e["s-rc"];if(a){re(e,r,t.$modeName$)}var s=K("render",r.$tagName$);{{try{Ce(e,t,r,n.render())}catch(f){N(f)}}}if(h.$cssShim$){h.$cssShim$.updateHost(e)}{t.$flags$&=~16}{t.$flags$|=2}if(o){o.forEach((function(e){return e()}));e["s-rc"]=undefined}s();i();{var l=e["s-p"];var $=function(){return je(e,t,r)};if(l.length===0){$()}else{Promise.all(l).then($);t.$flags$|=4;l.length=0}}};var je=function(e,t,r){var n=K("postUpdate",r.$tagName$);var a=t.$lazyInstance$;var i=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(Q)}{Ie(a,"componentDidLoad")}n();{t.$onReadyResolve$(e);if(!i){Ue()}}}else{{Ie(a,"componentDidUpdate")}n()}{if(t.$onRenderResolve$){t.$onRenderResolve$();t.$onRenderResolve$=undefined}if(t.$flags$&512){U((function(){return Le(e,t,r,false)}))}t.$flags$&=~(4|512)}};var ke=function(e,t){{var r=y(e);if((r.$flags$&(2|16))===2){Le(e,r,t,false)}}};var Ue=function(e){{d.documentElement.classList.add(Q)}{h.$flags$|=2}};var Ie=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){N(n)}}return undefined};var Oe=function(e,t){return e&&e.then?e.then(t):t()};var Be=function(e,t){return y(e).$instanceValues$.get(t)};var Me=function(e,t,r,n){var a=y(e);var i=a.$hostElement$;var o=a.$instanceValues$.get(t);var s=a.$flags$;var l=a.$lazyInstance$;r=q(r,n.$members$[t][0]);if(r!==o&&(!(s&8)||o===undefined)){a.$instanceValues$.set(t,r);if(l){if((s&(2|16))===2){Le(i,a,n,false)}}}};var Pe=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Be(this,n)},set:function(e){Me(this,n,e,t)},configurable:true,enumerable:true})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;h.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var t=e[0],r=e[1];var n=r[1]||t;i.set(n,t);return n}))}}return e};var He=function(e,t,r,n){var a=K("hydrateClient",t);var i=e.shadowRoot;var o=[];var s=[];var l=i?[]:null;var $=n.$vnode$=oe(t,null);if(!h.$orgLocNodes$){Ve(d.body,h.$orgLocNodes$=new Map)}e[Y]=r;e.removeAttribute(Y);ze($,o,s,l,e,e,r);o.forEach((function(e){var r=e.$hostId$+"."+e.$nodeId$;var n=h.$orgLocNodes$.get(r);var a=e.$elm$;if(n&&(n["s-sd"]||e.$hostId$==="0")){n.parentNode.insertBefore(a,n.nextSibling)}if(!i){a["s-hn"]=t;if(n){a["s-ol"]=n;a["s-ol"]["s-nr"]=a}}h.$orgLocNodes$.delete(r)}));if(i){l.forEach((function(e){if(e){i.appendChild(e)}}))}a()};var ze=function(e,t,r,n,a,i,o){var s;var l;var $;var f;if(i.nodeType===1){s=i.getAttribute(J);if(s){l=s.split(".");if(l[0]===o||l[0]==="0"){$={$flags$:0,$hostId$:l[0],$nodeId$:l[1],$depth$:l[2],$index$:l[3],$tag$:i.tagName.toLowerCase(),$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null};t.push($);i.removeAttribute(J);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;e=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}for(f=i.childNodes.length-1;f>=0;f--){ze(e,t,r,n,a,i.childNodes[f],o)}if(i.shadowRoot){for(f=i.shadowRoot.childNodes.length-1;f>=0;f--){ze(e,t,r,n,a,i.shadowRoot.childNodes[f],o)}}}else if(i.nodeType===8){l=i.nodeValue.split(".");if(l[1]===o||l[1]==="0"){s=l[0];$={$flags$:0,$hostId$:l[1],$nodeId$:l[2],$depth$:l[3],$index$:l[4],$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null};if(s===G){$.$elm$=i.nextSibling;if($.$elm$&&$.$elm$.nodeType===3){$.$text$=$.$elm$.textContent;t.push($);i.remove();if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}else if($.$hostId$===o){if(s===F){$.$tag$="slot";if(l[5]){i["s-sn"]=$.$name$=l[5]}else{i["s-sn"]=""}i["s-sr"]=true;if(n){$.$elm$=d.createElement($.$tag$);if($.$name$){$.$elm$.setAttribute("name",$.$name$)}i.parentNode.insertBefore($.$elm$,i);i.remove();if($.$depth$==="0"){n[$.$index$]=$.$elm$}}r.push($);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$}else if(s===W){if(n){i.remove()}else{a["s-cr"]=i;i["s-cn"]=true}}}}}else if(e&&e.$tag$==="style"){var u=oe(null,i.textContent);u.$elm$=i;u.$index$="0";e.$children$=[u]}};var Ve=function(e,t){if(e.nodeType===1){var r=0;for(;r<e.childNodes.length;r++){Ve(e.childNodes[r],t)}if(e.shadowRoot){for(r=0;r<e.shadowRoot.childNodes.length;r++){Ve(e.shadowRoot.childNodes[r],t)}}}else if(e.nodeType===8){var n=e.nodeValue.split(".");if(n[0]===D){t.set(n[1]+"."+n[2],e);e.nodeValue="";e["s-sd"]=n[3]===""}}};var qe=function(e,n,a,i,o){return __awaiter(r,void 0,void 0,(function(){var r,i,s,l,$,f,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;o=x(a);if(!o.then)return[3,2];r=X();return[4,o];case 1:o=c.sent();r();c.label=2;case 2:if(!o.isProxied){Pe(o,a,2);o.isProxied=true}i=K("createInstance",a.$tagName$);{n.$flags$|=8}try{new o(n)}catch(v){N(v)}{n.$flags$&=~8}i();s=ne(a.$tagName$);if(!(!_.has(s)&&o.style))return[3,5];l=K("registerStyles",a.$tagName$);$=o.style;if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-ed968002.system.js").then((function(e){return e.scopeCss($,s,false)}))];case 3:$=c.sent();c.label=4;case 4:ee(s,$,!!(a.$flags$&1));l();c.label=5;case 5:f=n.$ancestorComponent$;u=function(){return Le(e,n,a,true)};if(f&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}}))}))};var We=function(e,t){if((h.$flags$&1)===0){var r=K("connectedCallback",t.$tagName$);var n=y(e);if(!(n.$flags$&1)){n.$flags$|=1;var a=void 0;{a=e.getAttribute(Y);if(a){if(m&&t.$flags$&1){var i=te(e.shadowRoot,t);e.classList.remove(i+"-h",i+"-s")}He(e,t.$tagName$,a,n)}}if(!a){if(t.$flags$&4||t.$flags$&8){De(e)}}{var o=e;while(o=o.parentNode||o.host){if(o.nodeType===1&&o.hasAttribute("s-id")||o["s-p"]){Ee(n,n.$ancestorComponent$=o);break}}}if(t.$members$){Object.entries(t.$members$).forEach((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{U((function(){return qe(e,n,t)}))}}r()}};var De=function(e){var t="";var r=e["s-cr"]=d.createComment(t);r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var Fe=function(e){if((h.$flags$&1)===0){var t=y(e);var r=t.$lazyInstance$;if(h.$cssShim$){h.$cssShim$.removeHost(e)}{Ie(r,"componentDidUnload")}}};var Ge=e("b",(function(e,t){if(t===void 0){t={}}var r=K();var n=[];var a=t.exclude||[];var i=d.head;var o=v.customElements;var s=i.querySelector("meta[charset]");var l=d.createElement("style");var $=[];var f;var u=true;Object.assign(h,t);h.$resourcesUrl$=new URL(t.resourcesUrl||"./",d.baseURI).href;if(t.syncQueue){h.$flags$|=4}{h.$flags$|=2}{var c=d.querySelectorAll("style[s-id]");for(var p=0;p<c.length;p++){var g=c[p];ee(g.getAttribute(Y),ae(g.innerHTML),true)}}e.forEach((function(e){return e[1].forEach((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}if(!m&&r.$flags$&1){r.$flags$|=8}var i=r.$tagName$;var s=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;w(t);if(r.$flags$&1){if(m){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return n}t.prototype.connectedCallback=function(){var e=this;if(f){clearTimeout(f);f=null}if(u){$.push(this)}else{h.jmp((function(){return We(e,r)}))}};t.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return Fe(e)}))};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){ke(this,r)};t.prototype.componentOnReady=function(){return y(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleIds$=e[0];if(!a.includes(i)&&!o.get(i)){n.push(i);o.define(i,Pe(s,r,1))}}))}));l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";l.setAttribute("data-styles","");i.insertBefore(l,s?s.nextSibling:i.firstChild);u=false;if($.length>0){$.forEach((function(e){return e.connectedCallback()}))}else{h.jmp((function(){return f=setTimeout(Ue,30,"timeout")}))}r()}));var Qe=e("c",(function(e,t,r){var n=Ye(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e}))}}}));var Ye=function(e){return y(e).$hostElement$}}}}));