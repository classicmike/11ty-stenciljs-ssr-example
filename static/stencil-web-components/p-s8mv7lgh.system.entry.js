System.register(["./p-71d5aa56.system.js"],(function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.r;n=t.h;r=t.H}],execute:function(){var o="//api.github.com/search/repositories";var s=function(t){var e=t.result;console.log("r",e);return n("div",{class:"result"},n("div",null,n("a",{href:e.html_url,target:"_blank"},e.full_name),"🌟",n("strong",null,e.stargazers_count)),n("p",null,e.description))};var l=t("fetch_example",function(){function t(t){e(this,t);this.q="stencil";this.results=[]}t.prototype.componentDidLoad=function(){var t=this;fetch(o+"?q="+this.q).then((function(t){return t.json()})).then((function(e){t.results=e&&e.items||[]}))};t.prototype.render=function(){return n("div",null,n("div",{class:"list"},this.results.map((function(t){return n(s,{result:t})}))))};return t}());var u=t("scoped_example",function(){function t(t){e(this,t)}t.prototype.render=function(){return n("div",{class:"text"},"Hello, my name is ",this.first," ",this.last)};Object.defineProperty(t,"style",{get:function(){return".text.sc-scoped-example{color:red}"},enumerable:true,configurable:true});return t}());var i=t("shadow_example",function(){function t(t){e(this,t)}t.prototype.render=function(){return n("div",{class:"text"},"Hello, my name is ",this.first," ",this.last)};Object.defineProperty(t,"style",{get:function(){return".text{color:orange}"},enumerable:true,configurable:true});return t}());var c=t("slot_example",function(){function t(t){e(this,t)}t.prototype.render=function(){return n("div",null,n("div",null,"Above the slot"),n("slot",null),n("div",null,"Below the slot"))};return t}());var a=t("slot_scoped_example",function(){function t(t){e(this,t)}t.prototype.render=function(){return n(r,null,n("div",{class:"text"},"Above the slot"),n("slot",null),n("div",{class:"text"},"Below the slot"))};Object.defineProperty(t,"style",{get:function(){return".text.sc-slot-scoped-example{color:#6e6ead}"},enumerable:true,configurable:true});return t}());var f=t("slot_shadow_example",function(){function t(t){e(this,t)}t.prototype.render=function(){return n(r,null,n("div",{class:"text"},"Above the slot"),n("slot",null),n("div",{class:"text"},"Below the slot"))};Object.defineProperty(t,"style",{get:function(){return".text{color:green}"},enumerable:true,configurable:true});return t}())}}}));