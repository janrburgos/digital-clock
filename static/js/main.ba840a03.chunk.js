(this["webpackJsonpdigital-clock"]=this["webpackJsonpdigital-clock"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(1),o=n.n(s),a=n(3),c=n.n(a),i=(n(12),n(4)),r=n(5),l=n(7),u=n(6),h=(n(13),n(0)),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={time:new Date,hour:(new Date).getHours(),minute:(new Date).getMinutes(),second:(new Date).getSeconds(),timeFormat:12,font:"Xahn",fontColor:"black",bgColorRef:20},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.intervalID=setInterval((function(){return t.updateClock()}),1e3)}},{key:"updateClock",value:function(){this.setState({time:new Date,hour:(new Date).getHours(),minute:(new Date).getMinutes(),second:(new Date).getSeconds()}),this.changeBackground()}},{key:"changeBackground",value:function(){this.state.hour<12?this.setState({bgColorRef:14+6*this.state.hour}):this.setState({bgColorRef:86-6*(this.state.hour-12)})}},{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"DigitalClock",style:{color:this.state.fontColor,backgroundColor:"hsl(160, 180%, ".concat(this.state.bgColorRef,"%)"),fontFamily:"".concat(this.state.font,", monospace")},children:[Object(h.jsxs)("div",{className:"clock",children:[Object(h.jsxs)("p",{className:"time",children:[24===this.state.timeFormat&&this.state.hour<10&&"0",12===this.state.timeFormat&&0===this.state.hour?"12":12===this.state.timeFormat&&this.state.hour>12?this.state.hour-12:this.state.hour,":",this.state.minute<10?"0".concat(this.state.minute):this.state.minute,":",this.state.second<10?"0".concat(this.state.second):this.state.second," ",12===this.state.timeFormat&&this.state.hour<12?"AM":12===this.state.timeFormat&&this.state.hour>=12?"PM":null]}),Object(h.jsx)("p",{className:"time-zone",children:this.state.time.toTimeString().slice(8)})]}),Object(h.jsxs)("div",{className:"color-buttons",children:[Object(h.jsx)("div",{className:"button-title",children:"COLORS"}),Object(h.jsxs)("div",{className:"button-group",children:[Object(h.jsx)("button",{className:"black",onClick:function(){return t.setState({fontColor:"black"})},children:"Black"}),Object(h.jsx)("button",{className:"red",onClick:function(){return t.setState({fontColor:"red"})},children:"Red"}),Object(h.jsx)("button",{className:"green",onClick:function(){return t.setState({fontColor:"green"})},children:"Green"})]})]}),Object(h.jsxs)("div",{className:"font-buttons",children:[Object(h.jsx)("div",{className:"button-title",children:"FONTS"}),Object(h.jsxs)("div",{className:"button-group",children:[Object(h.jsx)("button",{className:"xahn",onClick:function(){return t.setState({font:"Xahn Mono, monospace"})},children:"Xahn"}),Object(h.jsx)("button",{className:"oxygen",onClick:function(){return t.setState({font:"Oxygen Mono, monospace"})},children:"Oxygen"}),Object(h.jsx)("button",{className:"major",onClick:function(){return t.setState({font:"Major Mono Display, monospace"})},children:"Major"})]})]}),Object(h.jsx)("div",{className:"format-button",children:Object(h.jsx)("button",{onClick:function(){12===t.state.timeFormat?t.setState({timeFormat:24}):t.setState({timeFormat:12})},children:"Change Hour Format"})})]})}}]),n}(o.a.Component);var d=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(m,{})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,s=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),s(t),o(t),a(t),c(t)}))};c.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.ba840a03.chunk.js.map