import{r as s,h as t,H as e}from"./p-7523777f.js";const l=s=>(console.log("r",s),t("div",{class:"result"},t("div",null,t("a",{href:s.html_url,target:"_blank"},s.full_name),"🌟",t("strong",null,s.stargazers_count)),t("p",null,s.description))),r=class{constructor(t){s(this,t),this.q="stencil",this.results=[]}componentDidLoad(){fetch(`//api.github.com/search/repositories?q=${this.q}`).then(s=>s.json()).then(s=>{this.results=s&&s.items||[]})}render(){return t("div",null,t("div",{class:"list"},this.results.map(s=>t(l,{result:s}))))}},o=class{constructor(t){s(this,t)}render(){return t("div",{class:"text"},"Hello, my name is ",this.first," ",this.last)}static get style(){return".text.sc-scoped-example{color:red}"}},a=class{constructor(t){s(this,t)}render(){return t("div",{class:"text"},"Hello, my name is ",this.first," ",this.last)}static get style(){return".text{color:orange}"}},n=class{constructor(t){s(this,t)}render(){return t("div",null,t("div",null,"Above the slot"),t("slot",null),t("div",null,"Below the slot"))}},c=class{constructor(t){s(this,t)}render(){return t(e,null,t("div",{class:"text"},"Above the slot"),t("slot",null),t("div",{class:"text"},"Below the slot"))}static get style(){return".text.sc-slot-scoped-example{color:#6e6ead}"}},i=class{constructor(t){s(this,t)}render(){return t(e,null,t("div",{class:"text"},"Above the slot"),t("slot",null),t("div",{class:"text"},"Below the slot"))}static get style(){return".text{color:green}"}};export{r as fetch_example,o as scoped_example,a as shadow_example,n as slot_example,c as slot_scoped_example,i as slot_shadow_example};