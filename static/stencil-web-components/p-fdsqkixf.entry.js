import{r as t,c as e,h as n}from"./p-f188bf4a.js";const o=class{constructor(n){t(this,n),this.count=0,this.counter=this.count||0,this.date=new Date,this.event=e(this,"event",7)}buttonHandler(){this.counter++,this.event.emit(this.counter)}tick(){console.log("update",this.date),this.date=new Date}getText(){return`${this.first}, ${this.middle}, ${this.last}`}componentWillLoad(){console.log("is about to be rendered"),this.timerID=setInterval(()=>this.tick(),1e3)}componentDidLoad(){console.log("has been rendered")}componentWillUpdate(){console.log("will update")}componentDidUpdate(){console.log("did update")}componentDidUnload(){console.log("has been removed from the DOM"),clearInterval(this.timerID)}render(){return n("div",{class:"message"},"Hello, World! I'm ",this.getText()," - Initial Count=",this.count," - Component Count=",this.counter,n("button",{onClick:()=>this.buttonHandler()},"+"),n("hr",null),n("div",null,"Date - ",this.date.toLocaleTimeString()),n("div",null,n("slot",null)))}static get style(){return".message.sc-my-component{color:var(--my-component-color,#00f)}"}};export{o as my_component};