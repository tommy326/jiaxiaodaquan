(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/My-collection/My-collection"],{"13ac":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{listData:[]}},onLoad:function(){var e=this;t.request({url:this.$Url+"/api/v1/exam/collection/list",method:"GET",data:{token:t.getStorageSync("token")},header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){if(200==n.data.code){var a=[];for(var o in n.data.msg)n.data.msg[o].coverImg=e.$Url+n.data.msg[o].coverImg,a.push(n.data.msg[o]);e.listData=a}else t.showToast({icon:"none",title:"网络不给力，请稍后重试",duration:2e3})}})},methods:{}};e.default=n}).call(this,n("6e42")["default"])},"1ee9":function(t,e,n){"use strict";n.r(e);var a=n("13ac"),o=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=o.a},"76ee":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"82c2":function(t,e,n){"use strict";(function(t){n("6e2c"),n("921b");a(n("66fd"));var e=a(n("a2de"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"95ea":function(t,e,n){},a2de:function(t,e,n){"use strict";n.r(e);var a=n("76ee"),o=n("1ee9");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("bef3");var u=n("2877"),r=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},bef3:function(t,e,n){"use strict";var a=n("95ea"),o=n.n(a);o.a}},[["82c2","common/runtime","common/vendor"]]]);