(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/examination/community-list/community-list"],{"0d6b":function(t,e,n){"use strict";n.r(e);var a=n("2b82"),o=n("c21d");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("30a7");var i=n("2877"),c=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"2b82":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"30a7":function(t,e,n){"use strict";var a=n("c26a"),o=n.n(a);o.a},"3e22":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{subject:""}},onLoad:function(e){console.log(t("科目:"+e.tabs," at pages\\examination\\community-list\\community-list.vue:37")),this.subject=e.tabs,n.setNavigationBarTitle({title:0==e.tabs?"科一社区":"科四社区"}),n.request({url:this.$Url+"/api/v1/exam/community",method:"GET",data:{token:n.getStorageSync("token")},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){200==e.data.code?console.log(t(e.data," at pages\\examination\\community-list\\community-list.vue:53")):n.showToast({icon:"none",title:"网络不给力，请稍后重试",duration:1e3})}})},methods:{}};e.default=a}).call(this,n("0de9")["default"],n("6e42")["default"])},c21d:function(t,e,n){"use strict";n.r(e);var a=n("3e22"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},c26a:function(t,e,n){},fefc:function(t,e,n){"use strict";(function(t){n("6e2c"),n("921b");a(n("66fd"));var e=a(n("0d6b"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["fefc","common/runtime","common/vendor"]]]);