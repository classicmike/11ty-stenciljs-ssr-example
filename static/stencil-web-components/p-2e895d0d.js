const t="stencil-web-components";let e,n,l,o=0,s=!1,c=!1,r=!1,i=!1;const a=window,f=document,u={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},$=(()=>!!f.documentElement.attachShadow)(),d=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),m=new WeakMap,p=t=>m.get(t),h=(t,e)=>m.set(e.o=t,e),w=(t,e)=>e in t,b=t=>console.error(t),y=new Map,_=new Map,g=[],j=[],S=[],k=(t,e)=>n=>{t.push(n),s||(s=!0,e&&4&u.t?U(M):u.raf(M))},v=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(o){b(o)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},M=()=>{o++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){b(e)}t.length=0})(g);const t=2==(6&u.t)?performance.now()+10*Math.ceil(o*(1/22)):1/0;v(j,t),v(S,t),j.length>0&&(S.push(...j),j.length=0),(s=g.length+j.length+S.length>0)?u.raf(M):o=0},U=t=>Promise.resolve().then(t),R=k(j,!0),L={},x=t=>"object"==(t=typeof t)||"function"===t,O=()=>a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_stencil_web_components("./p-d8631f0b.js").then(()=>{u.s=a.__stencil_cssshim}),P=async()=>{u.s=a.__stencil_cssshim;const e=new RegExp(`/${t}(\\.esm)?\\.js($|\\?|#)`),n=Array.from(f.querySelectorAll("script")).find(n=>e.test(n.src)||n.getAttribute("data-stencil-namespace")===t),l=n["data-opts"];{const t=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,a.location.href));return C(t.href),window.customElements||await __sc_import_stencil_web_components("./p-d0882b30.js"),Object.assign(Object.assign({},l),{resourcesUrl:t.href})}},C=e=>{const n=(t=>`__sc_import_${t.replace(/\s|-/g,"_")}`)(t);try{a[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const t=new Map;a[n]=l=>{const o=new URL(l,e).href;let s=t.get(o);if(!s){const e=f.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${n}.m = m;`],{type:"application/javascript"})),s=new Promise(t=>{e.onload=()=>{t(a[n].m),e.remove()}}),t.set(o,s),f.head.appendChild(e)}return s}}},E=new WeakMap,T=(t,e,n)=>{let l=_.get(t);d&&n?(l=l||new CSSStyleSheet).replace(e):l=e,_.set(t,l)},I=(t,e)=>{let n=W(e.i),l=_.get(n);if(t=11===t.nodeType?t:f,l)if("string"==typeof l){let e,o=E.get(t=t.head||t);o||E.set(t,o=new Set),o.has(n)||(t.host&&(e=t.firstElementChild)&&"STYLE"===e.tagName?e.innerHTML=l:((e=f.createElement("style")).innerHTML=l,t.insertBefore(e,t.querySelector("link"))),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n},W=t=>"sc-"+t,A=t=>t.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),D=(t,e,...n)=>{let l=null,o=null,s=!1,c=!1,r=[];const i=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!x(l))&&(l=String(l)),s&&c?r[r.length-1].u+=l:r.push(s?F(null,l):l),c=s)};if(i(n),e){e.name&&(o=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}const a=F(t,null);return a.$=e,r.length>0&&(a.p=r),a.h=o,a},F=(t,e)=>({t:0,_:t,u:e,g:null,p:null,$:null,h:null}),H={},N=(t,e,n,l,o,s)=>{if(n===l)return;let c=w(t,e),r=e.toLowerCase();if("class"===e){const e=t.classList,o=B(n),s=B(l);e.remove(...o.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!o.includes(t)))}else if(c||"o"!==e[0]||"n"!==e[1]){const r=x(l);if((c||r&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?c=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(i){}null==l||!1===l?t.removeAttribute(e):(!c||4&s||o)&&!r&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):w(a,r)?r.slice(2):r[2]+e.slice(3),n&&u.rel(t,e,n,!1),l&&u.ael(t,e,l,!1)},q=/\s/,B=t=>t?t.split(q):[],V=(t,e,n,l)=>{const o=11===e.g.nodeType&&e.g.host?e.g.host:e.g,s=t&&t.$||L,c=e.$||L;for(l in s)l in c||N(o,l,s[l],void 0,n,e.t);for(l in c)N(o,l,s[l],c[l],n,e.t)},Y=(t,o,s,r)=>{let a,u,$,d=o.p[s],m=0;if(c||(i=!0,"slot"===d._&&(e&&r.classList.add(e+"-s"),d.t|=d.p?2:1)),null!==d.u)a=d.g=f.createTextNode(d.u);else if(1&d.t)a=d.g=f.createTextNode("");else if(a=d.g=f.createElement(2&d.t?"slot-fb":d._),V(null,d,!1),(t=>null!=t)(e)&&a["s-si"]!==e&&a.classList.add(a["s-si"]=e),d.p)for(m=0;m<d.p.length;++m)(u=Y(t,d,m,a))&&a.appendChild(u);return a["s-hn"]=l,3&d.t&&(a["s-sr"]=!0,a["s-cr"]=n,a["s-sn"]=d.h||"",($=t&&t.p&&t.p[s])&&$._===d._&&t.g&&z(t.g,!1)),a},z=(t,e)=>{u.t|=1;const n=t.childNodes;for(let o=n.length-1;o>=0;o--){const t=n[o];t["s-hn"]!==l&&t["s-ol"]&&(X(t).insertBefore(t,Q(t)),t["s-ol"].remove(),t["s-ol"]=void 0,i=!0),e&&z(t,e)}u.t&=-2},G=(t,e,n,o,s,c)=>{let r,i=t["s-cr"]&&t["s-cr"].parentNode||t;for(i.shadowRoot&&i.tagName===l&&(i=i.shadowRoot);s<=c;++s)o[s]&&(r=Y(null,n,s,t))&&(o[s].g=r,i.insertBefore(r,Q(e)))},J=(t,e,n,l,o)=>{for(;e<=n;++e)(l=t[e])&&(r=!0,(o=l.g)["s-ol"]?o["s-ol"].remove():z(o,!0),o.remove())},K=(t,e)=>t._===e._&&("slot"!==t._||t.h===e.h),Q=t=>t&&t["s-ol"]||t,X=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,Z=(t,e)=>{const n=e.g=t.g,l=t.p,o=e.p;let s;null===e.u?("slot"===e._||V(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,c=0,r=e.length-1,i=e[0],a=e[r],f=l.length-1,u=l[0],$=l[f];for(;s<=r&&c<=f;)null==i?i=e[++s]:null==a?a=e[--r]:null==u?u=l[++c]:null==$?$=l[--f]:K(i,u)?(Z(i,u),i=e[++s],u=l[++c]):K(a,$)?(Z(a,$),a=e[--r],$=l[--f]):K(i,$)?("slot"!==i._&&"slot"!==$._||z(i.g.parentNode,!1),Z(i,$),t.insertBefore(i.g,a.g.nextSibling),i=e[++s],$=l[--f]):K(a,u)?("slot"!==i._&&"slot"!==$._||z(a.g.parentNode,!1),Z(a,u),t.insertBefore(a.g,i.g),a=e[--r],u=l[++c]):(o=Y(e&&e[c],n,c,t),u=l[++c],o&&X(i.g).insertBefore(o,Q(i.g)));s>r?G(t,null==l[f+1]?null:l[f+1].g,n,l,c,f):c>f&&J(e,s,r)})(n,l,e,o):null!==o?(null!==t.u&&(n.textContent=""),G(n,null,e,o,0,o.length-1)):null!==l&&J(l,0,l.length-1)):(s=n["s-cr"])?s.parentNode.textContent=e.u:t.u!==e.u&&(n.data=e.u)},tt=t=>{let e,n,l,o,s,c,r=t.childNodes;for(n=0,l=r.length;n<l;n++)if(1===(e=r[n]).nodeType){if(e["s-sr"])for(s=e["s-sn"],e.hidden=!1,o=0;o<l;o++)if(r[o]["s-hn"]!==e["s-hn"])if(c=r[o].nodeType,""!==s){if(1===c&&s===r[o].getAttribute("slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==r[o].textContent.trim()){e.hidden=!0;break}tt(e)}},et=[],nt=t=>{let e,n,l,o,s=t.childNodes,c=s.length,i=0,a=0,f=0;for(c=s.length;i<c;i++){if((e=s[i])["s-sr"]&&(n=e["s-cr"]))for(o=e["s-sn"],a=(l=n.parentNode.childNodes).length-1;a>=0;a--)(n=l[a])["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===o||1===f&&null===n.getAttribute("slot")&&""===o||1===f&&n.getAttribute("slot")===o)&&(et.some(t=>t.j===n)||(r=!0,n["s-sn"]=o,et.push({S:e,j:n})));1===e.nodeType&&nt(e)}},lt=(t,e)=>{e&&!t.k&&e["s-p"].push(new Promise(e=>t.k=e))},ot=(t,e,n,l)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const o=e.o,s=()=>st(t,e,n,o,l);let c;return lt(e,e.v),c=it(o,l?"componentWillLoad":"componentWillUpdate"),at(c,()=>R(s))},st=(t,o,s,a,d)=>{const m=t["s-rc"];d&&((t,e)=>{const n=I($&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e);10&e.t&&(t["s-sc"]=n,t.classList.add(n+"-h"),2&e.t&&t.classList.add(n+"-s"))})(t,s);try{((t,o,s,a)=>{l=t.tagName;const d=o.M||F(null,null),m=(t=>t&&t._===H)(a)?a:D(null,null,a);if(m._=null,m.t|=4,o.M=m,m.g=d.g=t.shadowRoot||t,e=t["s-sc"],n=t["s-cr"],c=$&&0!=(1&s.t),r=!1,Z(d,m),i){nt(m.g);for(let t=0;t<et.length;t++){const e=et[t];if(!e.j["s-ol"]){const t=f.createTextNode("");t["s-nr"]=e.j,e.j.parentNode.insertBefore(e.j["s-ol"]=t,e.j)}}u.t|=1;for(let t=0;t<et.length;t++){const e=et[t],n=e.S.parentNode;let l=e.S.nextSibling,o=e.j["s-ol"];for(;o=o.previousSibling;){let t=o["s-nr"];if(t&&t["s-sn"]===e.j["s-sn"]&&n===t.parentNode&&(!(t=t.nextSibling)||!t["s-nr"])){l=t;break}}(!l&&n!==e.j.parentNode||e.j.nextSibling!==l)&&e.j!==l&&n.insertBefore(e.j,l)}u.t&=-2}r&&tt(m.g),et.length=0})(t,o,s,a.render())}catch(p){b(p)}o.t&=-17,o.t|=2,m&&(m.forEach(t=>t()),t["s-rc"]=void 0);{const e=t["s-p"],n=()=>ct(t,o,s);0===e.length?n():(Promise.all(e).then(n),o.t|=4,e.length=0)}},ct=(t,e,n)=>{const l=e.o,o=e.v;64&e.t?it(l,"componentDidUpdate"):(e.t|=64,t.classList.add("hydrated"),it(l,"componentDidLoad"),e.U(t),o||rt()),e.k&&(e.k(),e.k=void 0),512&e.t&&U(()=>ot(t,e,n,!1)),e.t&=-517},rt=()=>{f.documentElement.classList.add("hydrated"),u.t|=2},it=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){b(l)}},at=(t,e)=>t&&t.then?t.then(e):e(),ft=(t,e,n)=>{if(e.R){const l=Object.entries(e.R),o=t.prototype;if(l.forEach(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>p(t).L.get(e))(this,t)},set(n){((t,e,n,l)=>{const o=p(this),s=o.O,c=o.L.get(e),r=o.t,i=o.o;(n=((t,e)=>null==t||x(t)?t:2&e?parseFloat(t):1&e?String(t):t)(n,l.R[e][0]))===c||8&r&&void 0!==c||(o.L.set(e,n),i&&2==(18&r)&&ot(s,o,l,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){u.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},ut=(t,e,n,l,o,s,c)=>{let r,i,a,u;if(1===s.nodeType){for((r=s.getAttribute("c-id"))&&((i=r.split("."))[0]!==c&&"0"!==i[0]||(a={t:0,P:i[0],C:i[1],T:i[2],I:i[3],_:s.tagName.toLowerCase(),g:s,$:null,p:null,W:null,h:null,u:null},e.push(a),s.removeAttribute("c-id"),t.p||(t.p=[]),t.p[a.I]=a,t=a,l&&"0"===a.T&&(l[a.I]=a.g))),u=s.childNodes.length-1;u>=0;u--)ut(t,e,n,l,o,s.childNodes[u],c);if(s.shadowRoot)for(u=s.shadowRoot.childNodes.length-1;u>=0;u--)ut(t,e,n,l,o,s.shadowRoot.childNodes[u],c)}else if(8===s.nodeType)(i=s.nodeValue.split("."))[1]!==c&&"0"!==i[1]||(a={t:0,P:i[1],C:i[2],T:i[3],I:i[4],g:s,$:null,p:null,W:null,h:null,_:null,u:null},"t"===(r=i[0])?(a.g=s.nextSibling,a.g&&3===a.g.nodeType&&(a.u=a.g.textContent,e.push(a),s.remove(),t.p||(t.p=[]),t.p[a.I]=a,l&&"0"===a.T&&(l[a.I]=a.g))):a.P===c&&("s"===r?(a._="slot",s["s-sn"]=i[5]?a.h=i[5]:"",s["s-sr"]=!0,l&&(a.g=f.createElement(a._),a.h&&a.g.setAttribute("name",a.h),s.parentNode.insertBefore(a.g,s),s.remove(),"0"===a.T&&(l[a.I]=a.g)),n.push(a),t.p||(t.p=[]),t.p[a.I]=a):"r"===r&&(l?s.remove():(o["s-cr"]=s,s["s-cn"]=!0))));else if(t&&"style"===t._){const e=F(null,s.textContent);e.g=s,e.I="0",t.p=[e]}},$t=(t,e)=>{if(1===t.nodeType){let n=0;for(;n<t.childNodes.length;n++)$t(t.childNodes[n],e);if(t.shadowRoot)for(n=0;n<t.shadowRoot.childNodes.length;n++)$t(t.shadowRoot.childNodes[n],e)}else if(8===t.nodeType){const n=t.nodeValue.split(".");"o"===n[0]&&(e.set(n[1]+"."+n[2],t),t.nodeValue="",t["s-sd"]=""===n[3])}},dt=t=>{const e=t["s-cr"]=f.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)},mt=(t,e={})=>{const n=[],l=e.exclude||[],o=f.head,s=a.customElements,c=o.querySelector("meta[charset]"),r=f.createElement("style"),i=[];let d,h=!0;Object.assign(u,e),u.l=new URL(e.resourcesUrl||"./",f.baseURI).href,e.syncQueue&&(u.t|=4),u.t|=2;{const t=f.querySelectorAll("style[s-id]");for(let e=0;e<t.length;e++){const n=t[e];T(n.getAttribute("s-id"),A(n.innerHTML),!0)}}t.forEach(t=>t[1].forEach(e=>{const o={t:e[0],i:e[1],R:e[2],A:e[3]};o.R=e[2],!$&&1&o.t&&(o.t|=8);const c=o.i,r=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,O:t,L:new Map};e.D=new Promise(t=>e.U=t),t["s-p"]=[],t["s-rc"]=[],m.set(t,e)})(t=this),1&o.t&&($?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){d&&(clearTimeout(d),d=null),h?i.push(this):u.jmp(()=>((t,e)=>{if(0==(1&u.t)){const n=()=>{},l=p(t);if(!(1&l.t)){let n;if(l.t|=1,n=t.getAttribute("s-id")){if($&&1&e.t){const n=I(t.shadowRoot,e);t.classList.remove(n+"-h",n+"-s")}((t,e,n,l)=>{const o=t.shadowRoot,s=[],c=o?[]:null,r=l.M=F(e,null);u.F||$t(f.body,u.F=new Map),t["s-id"]=n,t.removeAttribute("s-id"),ut(r,s,[],c,t,t,n),s.forEach(t=>{const n=t.P+"."+t.C,l=u.F.get(n),s=t.g;l&&(l["s-sd"]||"0"===t.P)&&l.parentNode.insertBefore(s,l.nextSibling),o||(s["s-hn"]=e,l&&(s["s-ol"]=l,s["s-ol"]["s-nr"]=s)),u.F.delete(n)}),o&&c.forEach(t=>{t&&o.appendChild(t)})})(t,e.i,n,l)}n||(4&e.t||8&e.t)&&dt(t);{let e=t;for(;e=e.parentNode||e.host;)if(1===e.nodeType&&e.hasAttribute("s-id")||e["s-p"]){lt(l,l.v=e);break}}e.R&&Object.entries(e.R).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),U(()=>(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=(t=>{const e=t.i.replace(/-/g,"_"),n=t.H,l=y.get(n);return l?l[e]:__sc_import_stencil_web_components(`./${n}.entry.js`).then(t=>(y.set(n,t),t[e]),b)})(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(ft(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(r){b(r)}e.t&=-9,t()}const t=W(n.i);if(!_.has(t)&&o.style){const e=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_stencil_web_components("./p-affe7c09.js").then(e=>e.scopeCss(l,t,!1))),T(t,l,!!(1&n.t)),e()}}const s=e.v,c=()=>ot(t,e,n,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(t,l,e))}n()}})(this,o))}disconnectedCallback(){u.jmp(()=>(()=>{0==(1&u.t)&&it(p(this).o,"componentDidUnload")})())}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=p(t);2==(18&n.t)&&ot(t,n,e,!1)}})(this,o)}componentOnReady(){return p(this).D}};o.H=t[0],l.includes(c)||s.get(c)||(n.push(c),s.define(c,ft(r,o,1)))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),o.insertBefore(r,c?c.nextSibling:o.firstChild),h=!1,i.length>0?i.forEach(t=>t.connectedCallback()):u.jmp(()=>d=setTimeout(rt,30,"timeout"))},pt=(t,e,n)=>{const l=ht(t);return{emit:t=>l.dispatchEvent(new CustomEvent(e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t}))}},ht=t=>p(t).O;export{H,O as a,mt as b,pt as c,D as h,P as p,h as r};