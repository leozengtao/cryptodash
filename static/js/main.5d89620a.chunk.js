(this["webpackJsonpreact-cryptodash"]=this["webpackJsonpreact-cryptodash"]||[]).push([[0],{32:function(e,t,n){e.exports=n(49)},38:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),c=n.n(o),i=(n(37),n(38),n(3)),l=n(4),u=n(6),s=n(5),f=n(2),p=n(9),b=n(8),m=n.n(b),v=n(11),d=n(7),h=n(10),O=n.n(h),j=n(19),C=n.n(j);function y(e){return 0===Object.keys(e).length}function g(e){return Number(e.toString().slice(0,7))}var E=function(e){var t=Object(r.useState)(e||"dashboard"),n=Object(d.a)(t,2),a=n[0],o=n[1],c=Object(r.useState)(!1),i=Object(d.a)(c,2),l=i[0],u=i[1],s=Object(r.useState)([]),f=Object(d.a)(s,2),p=f[0],b=f[1],h=Object(r.useState)([]),j=Object(d.a)(h,2),g=j[0],E=j[1],x=Object(r.useState)("months"),k=Object(d.a)(x,2),S=k[0],F=k[1];function A(){return(A=Object(v.a)(m.a.mark((function e(t){var n,r,a,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=0;case 2:if(!(r<t.length)){e.next=16;break}return e.prev=3,e.next=6,O.a.priceFull(t[r],"USD");case 6:a=e.sent,n.push(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Fetch price error: ".concat(e.t0));case 13:r++,e.next=2;break;case 16:o=n.filter((function(e){return!y(e)})),b(o);case 18:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function w(e){return D.apply(this,arguments)}function D(){return(D=Object(v.a)(m.a.mark((function e(t){var n,r,a,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E([]),n=[],r=10;case 3:if(!(r>=1)){e.next=17;break}return e.prev=4,e.next=7,O.a.priceHistorical(t,"USD",C()().subtract(r,"months").toDate());case 7:a=e.sent,n.push(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.error("Fetch price error: ".concat(e.t0));case 14:r--,e.next=3;break;case 17:o=[{name:t,data:n.map((function(e,t){return[C()().subtract(10-t,"months").valueOf(),e.USD]}))}],E(o);case 19:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}function N(){u(!0),o("settings")}return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("cryptoDash"));e?l||"dashboard"!==a||(!function(e){A.apply(this,arguments)}(e.favorites),w(e.currentFavCoin)):N()}),[l,a]),{page:a,prices:p,historicalPrices:g,firstVisit:l,timeInterval:S,setPage:o,saveSettings:N,confirmFavorites:function(e){localStorage.setItem("cryptoDash",JSON.stringify({favorites:e,currentFavCoin:e[0]})),u(!1),o("dashboard")},fetchHistorical:w,handleChangeOnChartSelect:function(e){F(e.target.value)}}},x=a.a.createContext();function k(e){var t=E(),n=x.Provider;return a.a.createElement(n,{value:Object(p.a)({},t)},e.children)}var S=x.Consumer,F=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(S,null,(function(t){var n=t.page,r=e.props,o=r.name,c=r.children;return n===o?a.a.createElement("div",{className:"content"},c):null}))}}]),n}(r.Component),A=n(1);var w="background-color: ".concat("#061a44",";"),D="background-color: ".concat("#010e2c",";"),N=("background-color: ".concat("#42ff3a",";"),"box-shadow: 0px 0px 5px 1px ".concat("#121d5b",";")),B="box-shadow: 0px 0px 4px 2px #5fff17;";function H(){var e=Object(f.a)(["\n  pointer-events: none;\n  opacity: 0.4;\n"]);return H=function(){return e},e}function U(){var e=Object(f.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return U=function(){return e},e}function z(){var e=Object(f.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return z=function(){return e},e}function I(){var e=Object(f.a)(["\n  position: relative;\n  padding: 10px;\n  ","\n  ","\n  transition: all 0.2s;\n"]);return I=function(){return e},e}var L=A.default.div(I(),N,w),P=Object(A.default)(L)(z(),B),M=Object(A.default)(L)(U(),"box-shadow: 0px 0px 2px 2px #e41111;"),T=Object(A.default)(L)(H()),W=n(21),G=n(15),R=n.n(G);O.a.setApiKey("ab4c13e647046a6f66904bc40fc89e06f6309fbfae3299654fce359eaf895548");var V=function(){var e=Object(r.useState)(),t=Object(d.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(),c=Object(d.a)(o,2),i=c[0],l=c[1],u=Object(r.useState)(),s=Object(d.a)(u,2),f=s[0],b=s[1],h=Object(r.useState)(["BTC","ETH","XMR","DOGE"]),j=Object(d.a)(h,2),C=j[0],y=j[1],g=Object(r.useState)(C[0]),E=Object(d.a)(g,2),x=E[0],k=E[1];function S(){return(S=Object(v.a)(m.a.mark((function e(){var t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.coinList();case 3:t=e.sent,n=t.Data,r=t.BaseImageUrl,a(n),l(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Fetch coins error: ".concat(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){var e=JSON.parse(localStorage.getItem("cryptoDash"));e&&(y(e.favorites),k(e.currentFavCoin))}(),function(){S.apply(this,arguments)}()}),[]),{coins:n,coinBaseUrl:i,favoriteCoins:C,filteredCoins:f,currentFavCoin:x,addCoin:function(e){var t=Object(W.a)(C);C.length<10&&(t.push(e),y(t))},removeCoin:function(e){var t=Object(W.a)(C);y(R.a.pull(t,e))},setFilteredCoins:b,isInFavoriteCoins:function(e){return C.includes(e)},setCurrentFavorite:function(e){k(e);var t=JSON.parse(localStorage.getItem("cryptoDash"));localStorage.setItem("cryptoDash",JSON.stringify(Object(p.a)(Object(p.a)({},t),{},{currentFavCoin:e})))}}},J=a.a.createContext();function K(e){var t=V(),n=J.Provider;return a.a.createElement(n,{value:Object(p.a)({},t)},e.children)}function X(){var e=Object(f.a)([""]);return X=function(){return e},e}function $(){var e=Object(f.a)([""]);return $=function(){return e},e}function q(){var e=Object(f.a)(["\n  text-align: center;\n"]);return q=function(){return e},e}var Q=Object(A.default)(L)(q()),Y=A.default.h2($()),Z=A.default.img(X()),_=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(J.Consumer,null,(function(e){var t=e.coins,n=e.currentFavCoin,r=e.coinBaseUrl,o=t[n],c=o.ImageUrl,i=o.Symbol;return a.a.createElement(Q,null,a.a.createElement(Y,null,t[n].CoinName),a.a.createElement(Z,{src:"".concat(r).concat(c),alt:i}))}))}}]),n}(r.Component),ee=n(16),te=n.n(ee),ne=n(28),re=n.n(ne),ae=function(e){return{title:{text:"Data Visualization"},yAxis:{title:{text:"Prices"}},xAxis:{type:"datetime"},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:e,responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}},oe={colors:["#61d936"],chart:{backgroundColor:"#061a44",borderColor:"#000000",borderWidth:0,className:"dark-container",plotBackgroundColor:"#061a44",plotBorderColor:"#cccccc",plotBorderWidth:0},title:{style:{color:"#C0C0C0",font:'bold 16px "Trebuchet MS", Verdana, sans-serif'}},subtitle:{style:{color:"#666666",font:'bold 12px "Trebuchet MS", Verdana, sans-serif'}},xAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",tickColor:"#A0A0A0",title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},yAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",minorTickInterval:null,tickColor:"#A0A0A0",tickWidth:1,title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.75)",style:{color:"#F0F0F0"}},toolbar:{itemStyle:{color:"silver"}},plotOptions:{line:{dataLabels:{color:"#CCC"},marker:{lineColor:"#333"}},spline:{marker:{lineColor:"#333"}},scatter:{marker:{lineColor:"#333"}},candlestick:{lineColor:"white"}},legend:{backgroundColor:"rgba(0, 0, 0, 0.5)",itemStyle:{font:"9pt Trebuchet MS, Verdana, sans-serif",color:"#A0A0A0"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#444"},title:{style:{color:"#C0C0C0"}}},credits:{style:{color:"#666"}},labels:{style:{color:"#CCC"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#606060"],[.6,"#333333"]]},stroke:"#000000"}}},rangeSelector:{buttonTheme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},stroke:"#000000",style:{color:"#CCC",fontWeight:"bold"},states:{hover:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#BBB"],[.6,"#888"]]},stroke:"#000000",style:{color:"white"}},select:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.1,"#000"],[.3,"#333"]]},stroke:"#000000",style:{color:"yellow"}}}},inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(16, 16, 16, 0.5)",series:{color:"#7798BF",lineColor:"#A6C7ED"}},scrollbar:{barBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},barBorderColor:"#CCC",buttonArrowColor:"#CCC",buttonBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},buttonBorderColor:"#CCC",rifleColor:"#FFF",trackBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#000"],[1,"#333"]]},trackBorderColor:"#666"}};function ce(){var e=Object(f.a)(["\n  ","\n  ","\n  float: right;\n  margin: 5px;\n  color: #1163c9;\n  border: 1px solid;\n  cursor: pointer;\n"]);return ce=function(){return e},e}var ie=A.default.select(ce(),"font-size: 1.0em;",D);function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var se=a.a.createElement("path",{d:"M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",fillOpacity:.5},a.a.createElement("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1.4s",values:"0.5;1;0.5",calcMode:"linear",repeatCount:"indefinite"})),fe=a.a.createElement("path",{d:"M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",fillOpacity:.5},a.a.createElement("animate",{attributeName:"fill-opacity",begin:"0.7s",dur:"1.4s",values:"0.5;1;0.5",calcMode:"linear",repeatCount:"indefinite"})),pe=a.a.createElement("path",{d:"M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"}),be=function(e){var t=e.svgRef,n=e.title,r=ue(e,["svgRef","title"]);return a.a.createElement("svg",le({width:140,height:64,viewBox:"0 0 140 64",fill:"#fff",ref:t},r),n?a.a.createElement("title",null,n):null,se,fe,pe)},me=a.a.forwardRef((function(e,t){return a.a.createElement(be,le({svgRef:t},e))}));n.p;function ve(){var e=Object(f.a)(["\n  margin-top: 0;\n  margin-bottom: 30px;\n"]);return ve=function(){return e},e}function de(){var e=Object(f.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  text-align: center;\n"]);return de=function(){return e},e}te.a.setOptions(oe);var he=A.default.div(de()),Oe=A.default.p(ve()),je=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=x.Consumer;return a.a.createElement(e,null,(function(e){var t=e.timeInterval,n=e.historicalPrices,r=e.handleChangeOnChartSelect;return a.a.createElement(L,null,a.a.createElement(ie,{value:t,onChange:r},a.a.createElement("option",{value:"days"},"Days"),a.a.createElement("option",{value:"weeks"},"Weeks"),a.a.createElement("option",{value:"months"},"Months")),0===n.length?a.a.createElement(he,null,a.a.createElement(Oe,null,"Loading Historical Data..."),a.a.createElement(me,{style:{transform:"scale(1.6)",fill:"white"}})):a.a.createElement(re.a,{highcharts:te.a,options:ae(n)}))}))}}]),n}(r.Component),Ce=n(29);function ye(){var e=Object(f.a)(["\n  opacity: 0;\n  justify-self: right;\n  transition: all 0.2s;\n\n  ",":hover & {\n    opacity: 1;\n    color: red;\n  }\n"]);return ye=function(){return e},e}function ge(){var e=Object(f.a)(["\n  font-style: italic;\n"]);return ge=function(){return e},e}function Ee(){var e=Object(f.a)(["\n  justify-self: right;\n"]);return Ee=function(){return e},e}function xe(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n"]);return xe=function(){return e},e}var ke=A.default.div(xe()),Se=A.default.span(Ee()),Fe=A.default.span(ge()),Ae=A.default.div(ye(),M),we=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.coin,n=e.topSection;return a.a.createElement(ke,null,a.a.createElement(Fe,null,t.CoinName),n?a.a.createElement(Ae,null,a.a.createElement(Ce.a,{size:"16",title:"Delete coin"})):a.a.createElement(Se,null,t.Symbol))}}]),n}(r.Component);function De(){var e=Object(f.a)(["\n  ","\n"]);return De=function(){return e},e}function Ne(){var e=Object(f.a)(["\n      color: red;\n    "]);return Ne=function(){return e},e}function Be(){var e=Object(f.a)(["\n  color: green;\n\n  ","\n"]);return Be=function(){return e},e}function He(){var e=Object(f.a)(["\n  justify-self: left;\n"]);return He=function(){return e},e}function Ue(){var e=Object(f.a)(["\n      pointer-events: none;\n      ","\n    "]);return Ue=function(){return e},e}function ze(){var e=Object(f.a)(["\n      display: grid;\n      gap: 6px;\n      justify-items: right;\n      grid-template-columns: repeat(3, 1fr);\n      ","\n    "]);return ze=function(){return e},e}function Ie(){var e=Object(f.a)(["\n  ","\n\n  ","\n"]);return Ie=function(){return e},e}var Le=Object(A.default)(P)(Ie(),(function(e){return e.compact&&Object(A.css)(ze(),"font-size: .75em;")}),(function(e){return e.currentFavCoin&&Object(A.css)(Ue(),B)})),Pe=A.default.span(He()),Me=Object(A.default)(Se)(Be(),(function(e){return e.red&&Object(A.css)(Ne())})),Te=A.default.div(De(),"font-size: 2em;"),We=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.symbol,n=e.data,r=e.currentFavCoin,o=e.setCurrentFavorite,c=e.fetchHistorical;return a.a.createElement(Le,{currentFavCoin:r,onClick:function(){o(t),c(t)}},a.a.createElement(ke,null,a.a.createElement("span",null,t),a.a.createElement(Me,{red:n.CHANGEPCT24HOUR<0},g(n.CHANGEPCT24HOUR),"%")),a.a.createElement(Te,null,g(n.PRICE)))}}]),n}(r.Component),Ge=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.symbol,n=e.data,r=e.currentFavCoin,o=e.setCurrentFavorite,c=e.fetchHistorical;return a.a.createElement(Le,{compact:!0,currentFavCoin:r,onClick:function(){o(t),c(t)}},a.a.createElement(Pe,null,t),a.a.createElement(Me,{red:n.CHANGEPCT24HOUR<0},g(n.CHANGEPCT24HOUR),"%"),a.a.createElement("div",null,g(n.PRICE)))}}]),n}(r.Component),Re=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=x.Consumer,n=J.Consumer;return a.a.createElement(t,null,(function(t){var r=t.fetchHistorical;return a.a.createElement(n,null,(function(t){var n=t.currentFavCoin,o=t.setCurrentFavorite,c=e.props,i=c.price,l=c.index,u=Object.keys(i)[0],s=i[u].USD;return l>=5?a.a.createElement(Ge,{data:s,symbol:u,currentFavCoin:n===u,setCurrentFavorite:o,fetchHistorical:r}):a.a.createElement(We,{data:s,symbol:u,currentFavCoin:n===u,setCurrentFavorite:o,fetchHistorical:r})}))}))}}]),n}(r.Component);function Ve(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 16px;\n  margin-top: 40px;\n"]);return Ve=function(){return e},e}var Je=x.Consumer,Ke=A.default.div(Ve()),Xe=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(Je,null,(function(e){var t=e.prices;return a.a.createElement(Ke,null,t.map((function(e,t){return a.a.createElement(Re,{key:Object.keys(e)[0],price:e,index:t})})))}))}}]),n}(r.Component);function $e(){var e=Object(f.a)(["\n  display: grid;\n  gap: 16px;\n  grid-template-columns: 1fr 3fr;\n  margin-top: 30px;\n"]);return $e=function(){return e},e}var qe=A.default.div($e()),Qe=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(F,{name:"dashboard"},a.a.createElement(Xe,null),a.a.createElement(qe,null,a.a.createElement(_,null),a.a.createElement(je,null)))}}]),n}(r.Component);function Ye(){var e=Object(f.a)(["\n  height: 50px;\n"]);return Ye=function(){return e},e}var Ze=A.default.img(Ye()),_e=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=J.Consumer;return a.a.createElement(t,null,(function(t){var n=t.coinBaseUrl,r=e.props.coin,o=r.ImageUrl,c=r.Symbol;return a.a.createElement(Ze,{src:"".concat(n).concat(o),alt:c})}))}}]),n}(r.Component),et=J.Consumer,tt=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleClick=function(t,n){var r=e.props,a=r.coin;r.topSection?n(a.Name):t(a.Name)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(et,null,(function(t){var n,r=t.addCoin,o=t.removeCoin,c=t.isInFavoriteCoins,i=e.props,l=i.coin,u=i.topSection;return n=u?M:c(l.Name)?T:P,a.a.createElement(n,{onClick:function(){return e.handleClick(r,o)}},a.a.createElement(we,{coin:l,topSection:u}),a.a.createElement(_e,{coin:l}))}))}}]),n}(r.Component);function nt(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  grid-gap: 15px;\n  margin-top: 40px;\n"]);return nt=function(){return e},e}var rt=J.Consumer,at=A.default.div(nt()),ot=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"getLowerSectionCoins",value:function(e,t){return t&&Object.keys(t)?Object.keys(t):Object.keys(e).slice(0,300)}},{key:"render",value:function(){var e=this;return a.a.createElement(rt,null,(function(t){var n=t.coins,r=t.favoriteCoins,o=t.filteredCoins,c=e.props.topSection,i=c?r:e.getLowerSectionCoins(n,o);return a.a.createElement(at,null,i.map((function(e){return a.a.createElement(tt,{key:e,coin:n[e],topSection:c})})))}))}}]),n}(r.Component);function ct(){var e=Object(f.a)(["\n  margin: 20px;\n  border: none;\n  padding: 5px;\n  color: ",";\n  background-color: transparent;\n  cursor: pointer;\n  ","\n\n  &:hover {\n    ","\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);return ct=function(){return e},e}function it(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n"]);return it=function(){return e},e}var lt=A.default.div(it()),ut=A.default.button(ct(),"#42ff3a","font-size: 1.5em;",B),st=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=x.Consumer,t=J.Consumer;return a.a.createElement(e,null,(function(e){return a.a.createElement(t,null,(function(t){var n=t.favoriteCoins,r=e.confirmFavorites;return a.a.createElement(lt,null,a.a.createElement(ut,{onClick:function(){return r(n)}},"Confirm Favorites"))}))}))}}]),n}(r.Component),ft=n(31),pt=n.n(ft);function bt(){var e=Object(f.a)(["\n  ","\n  ","\n  color: #1163c9;\n  border: 1px solid;\n  height: 25px;\n  place-self: center left;\n"]);return bt=function(){return e},e}function mt(){var e=Object(f.a)(["\n  margin: 0;\n"]);return mt=function(){return e},e}function vt(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 200px 1fr;\n"]);return vt=function(){return e},e}var dt=J.Consumer,ht=A.default.div(vt()),Ot=A.default.h2(mt()),jt=A.default.input(bt(),D,"font-size: 1.0em;"),Ct=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleFilterCoins=R.a.debounce((function(e,t,n){var r=Object.keys(t),a=r.map((function(e){return t[e].CoinName})),o=r.concat(a),c=pt.a.filter(e,o,{}).map((function(e){return e.string})),i={};Object.entries(t).forEach((function(e){var t=e[0],n=e[1],r=n.CoinName;(c.includes(t)||c.includes(r))&&(i[t]=n)})),n(i)}),1e3),e}return Object(l.a)(n,[{key:"handleKeyUp",value:function(e,t,n){var r=e.target.value;if(!r)return n(null),!1;this.handleFilterCoins(r,t,n)}},{key:"render",value:function(){var e=this;return a.a.createElement(dt,null,(function(t){var n=t.coins,r=t.setFilteredCoins;return a.a.createElement(ht,null,a.a.createElement(Ot,null,"Search all coins"),a.a.createElement(jt,{onKeyUp:function(t){return e.handleKeyUp(t,n,r)}}))}))}}]),n}(r.Component);function yt(){var e=Object(f.a)(["\n  margin: 0;\n  font-weight: normal;\n  font-size: 16px;\n"]);return yt=function(){return e},e}var gt=A.default.h1(yt()),Et=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=x.Consumer;return a.a.createElement(e,null,(function(e){return e.firstVisit?a.a.createElement(gt,null,"Welcome to CryptoDash, please select your favorite coins to begin."):null}))}}]),n}(r.Component),xt=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(F,{name:"settings"},a.a.createElement(Et,null),a.a.createElement(ot,{topSection:!0}),a.a.createElement(st,null),a.a.createElement(Ct,null),a.a.createElement(ot,{topSection:!1}))}}]),n}(r.Component),kt=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(x.Consumer,null,(function(t){var n=t.prices,r=t.firstVisit;return a.a.createElement(J.Consumer,null,(function(t){return t.coins?r||0!==n.length?e.props.children:a.a.createElement("div",null,"Loading Prices..."):a.a.createElement("div",null,"Loading Coins...")}))}))}}]),n}(r.Component);function St(){var e=Object(f.a)(["\n  padding: 40px;\n"]);return St=function(){return e},e}var Ft=A.default.div(St());function At(){var e=Object(f.a)([""]);return At=function(){return e},e}function wt(){var e=Object(f.a)(["\n  cursor: pointer;\n  background-color: transparent;\n  color: white;\n  border: none;\n"]);return wt=function(){return e},e}function Dt(){var e=Object(f.a)(["\n      text-shadow: 0px 0px 20px #03ff03;\n    "]);return Dt=function(){return e},e}function Nt(){var e=Object(f.a)(["\n  cursor: pointer;\n  border: none;\n  padding: 0;\n  background-color: transparent;\n  color: white;\n\n  ","\n\n  &:focus {\n    outline: none;\n  }\n"]);return Nt=function(){return e},e}function Bt(){var e=Object(f.a)(["\n  margin: 0;\n  font-size: 1.5em;\n"]);return Bt=function(){return e},e}function Ht(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 180px auto 100px 100px 100px 100px;\n  margin-bottom: 40px;\n"]);return Ht=function(){return e},e}var Ut=A.default.header(Ht()),zt=A.default.h1(Bt()),It=A.default.button(Nt(),(function(e){return e.active&&Object(A.css)(Dt())})),Lt=A.default.select(wt()),Pt=Object(A.default)(Lt)(At()),Mt=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"capitalize",value:function(e){return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}},{key:"handleClick",value:function(e,t,n,r){"dashboard"===e&&r(n),t(e)}},{key:"render",value:function(){var e=this;return a.a.createElement(x.Consumer,null,(function(t){var n=t.page,r=t.setPage,o=t.confirmFavorites;return a.a.createElement(J.Consumer,null,(function(t){var c=t.favoriteCoins,i=e.props.name;return a.a.createElement(It,{active:n===i,onClick:function(){e.handleClick(i,r,c,o)}},e.capitalize(i))}))}))}}]),n}(r.Component),Tt=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(Ut,null,a.a.createElement(zt,null,"CryptoDash"),a.a.createElement("div",{className:"text-transparent"},"Space Remaining"),a.a.createElement(Mt,{name:"dashboard",active:!0}),a.a.createElement(Mt,{name:"settings"}),a.a.createElement(Lt,null,a.a.createElement("option",{value:"chinese"},"Chinese"),a.a.createElement("option",{value:"english"},"English")),a.a.createElement(Pt,null,a.a.createElement("option",{value:"dark"},"Dark"),a.a.createElement("option",{value:"light"},"Light")))}}]),n}(r.Component),Wt=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(Ft,null,a.a.createElement(k,null,a.a.createElement(K,null,a.a.createElement(Tt,null),a.a.createElement(kt,null,a.a.createElement(xt,null),a.a.createElement(Qe,null)))))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Wt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.5d89620a.chunk.js.map