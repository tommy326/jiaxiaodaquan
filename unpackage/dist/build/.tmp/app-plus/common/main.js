(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"28b9":function(e,t,n){"use strict";var o=n("b660"),r=n.n(o);r.a},"76a9":function(e,t,n){"use strict";n.r(t);var o=n("7e02");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("28b9");var a,u,c=n("2877"),l=Object(c["a"])(o["default"],a,u,!1,null,null,null);t["default"]=l.exports},"7e02":function(e,t,n){"use strict";n.r(t);var o=n("ace8"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},ace8:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={onLaunch:function(){console.log(e("App Launch"," at App.vue:4")),plus.screen.lockOrientation("portrait-primary"),console.log(e("版本号"+plus.runtime.version," at App.vue:8"));var t=n.getStorageSync("statement")||0,o=n.getStorageSync("logon_status")||0,r=n.getStorageSync("cars_mold")||"c1";n.setStorageSync("statement",t),n.setStorageSync("logon_status",o),n.setStorageSync("cars_mold",r),console.log(e(n.getStorageSync("statement")," at App.vue:52"))},onShow:function(){console.log(e("App Show"," at App.vue:55"))},onHide:function(){console.log(e("App Hide"," at App.vue:58"))},globalData:{}};t.default=o}).call(this,n("0de9")["default"],n("6e42")["default"])},ae25:function(e,t,n){"use strict";(function(e){n("6e2c"),n("921b");var t=r(n("66fd")),o=r(n("76a9"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.config.productionTip=!1,t.default.prototype.$Url="https://jkdq.521che.com",t.default.prototype.$time=Array.time||function(e){var t=new Date(1e3*e),n=t.getFullYear(),o=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,r=t.getDate()<10?"0"+t.getDate():t.getDate();t.getHours(),t.getHours(),t.getMinutes(),t.getMinutes(),t.getSeconds(),t.getSeconds();return n+"-"+o+"-"+r},t.default.prototype.$Price=Array.rep||function(e){return(parseInt(e)/1e4).toFixed(2)},o.default.mpType="app";var c=new t.default(a({},o.default));e(c).$mount()}).call(this,n("6e42")["createApp"])},b660:function(e,t,n){}},[["ae25","common/runtime","common/vendor"]]]);