(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/examination/community-list/community-list"],{"0d6b":function(t,n,e){"use strict";e.r(n);var a=e("fc8b"),i=e("c21d");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("30a7");var u=e("2877"),c=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},"30a7":function(t,n,e){"use strict";var a=e("c26a"),i=e.n(a);i.a},"3e22":function(t,n,e){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{subject:"",listData:[]}},onLoad:function(n){var a=this;console.log(t("科目:"+n.tabs," at pages\\examination\\community-list\\community-list.vue:38")),this.subject=n.tabs,e.setNavigationBarTitle({title:0==n.tabs?"科一社区":"科四社区"}),e.request({url:this.$Url+"/api/school/community",method:"GET",data:{},header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){if(200==n.data.code){console.log(t(n.data," at pages\\examination\\community-list\\community-list.vue:54"));var i=[];for(var o in n.data.msg)i.push(n.data.msg[o]);a.listData=i}else e.showToast({icon:"none",title:"网络不给力，请稍后重试",duration:1e3})}})},methods:{}};n.default=a}).call(this,e("0de9")["default"],e("6e42")["default"])},c21d:function(t,n,e){"use strict";e.r(n);var a=e("3e22"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a},c26a:function(t,n,e){},fc8b:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},fefc:function(t,n,e){"use strict";(function(t){e("6e2c"),e("921b");a(e("66fd"));var n=a(e("0d6b"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["fefc","common/runtime","common/vendor"]]]);