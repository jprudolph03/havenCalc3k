(this.webpackJsonphavencalc3k=this.webpackJsonphavencalc3k||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),c=n.n(r),o=n(4),u=n(5),i=n(6),h=n(1),m=n(8),s=n(7),E=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={pLength:"",lbLength:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(i.a)(n,[{key:"handleChange",value:function(e){e.preventDefault(),this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state.pLength,t=this.state.lbLength,n=parseInt(t/e),a=(t%e).toFixed(3),r=.125*n,c=(a-r).toFixed(3);return l.a.createElement("div",{class:"container"},l.a.createElement("form",{class:"six columns"},l.a.createElement("label",null,"Input Part Length: "),l.a.createElement("input",{onChange:this.handleChange,type:"number",name:"pLength",value:e}),l.a.createElement("label",null,"Input Longbar Length: "),l.a.createElement("input",{onChange:this.handleChange,type:"number",name:"lbLength",value:t})),l.a.createElement("h2",{class:"six columns"},"Haven Calc 3k"),l.a.createElement("ul",null,l.a.createElement("li",null,".125 (1/8th inch) is lost per cut from verticle blade."),l.a.createElement("li",null,"Aim for 2-3 inch left over. Less may destroy last piece."),l.a.createElement("li",null,"Arrow UP or DOWN and watch magic happen.")),l.a.createElement("table",{class:"u-full-width"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Part Length"),l.a.createElement("th",null,"Longbar Length"),l.a.createElement("th",null,"Whole Parts"),l.a.createElement("th",null,"Math Offall"),l.a.createElement("th",null,"Lost from Cut"),l.a.createElement("th",null,"Remaining Offall"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,e),l.a.createElement("td",null,t),l.a.createElement("td",null,n),l.a.createElement("td",null,a),l.a.createElement("td",null,r),c<2||c>4?l.a.createElement("td",{class:"red"},c):l.a.createElement("td",{class:"green"},c)))))}}]),n}(a.Component);n(14),n(15),n(16);var d=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.6b5ea529.chunk.js.map