(function(e){function t(t){for(var r,l,u=t[0],a=t[1],c=t[2],p=0,d=[];p<u.length;p++)l=u[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);s&&s(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/timeline-vue/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("timeline",{attrs:{events:e.events}})],1)},i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"timeline-wrapper"},e._l(e.events,(function(t,r){return n("div",{key:r,class:e.step_class[r]},[n("div",{staticClass:"timeline-status"}),n("div",{staticClass:"timeline-p"},[n("h1",[e._v(e._s(t.name))]),n("span",[e._v(e._s(t.time))])])])})),0)},u=[],a=(n("d81d"),{name:"timeline",props:{events:{type:Array,default:function(){return[]}}},computed:{step_class:function(){return this.events.map((function(e){return"timeline-object ".concat((null===e||void 0===e?void 0:e.completed)?"complete":"")}))}}}),c=a,s=n("2877"),p=Object(s["a"])(c,l,u,!1,null,null,null),d=p.exports,f={name:"App",components:{Timeline:d},data:function(){return{events:[{name:"Order received",time:"05-06-2020 21:09:10",completed:!0},{name:"Order confirmed",time:"06-06-2020 12:31:07",completed:!0},{name:"Order on the go",time:"?"},{name:"Order delivered",time:"?"}]}}},m=f,v=Object(s["a"])(m,o,i,!1,null,null,null),b=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)}}).$mount("#app")}});
//# sourceMappingURL=app.e07c1e9f.js.map