(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/signUp/Driving-test-guide/Driving-test-guide"],{"3ea2":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{listData:[]}},onLoad:function(){var e=this;t.request({url:this.$Url+"/api/school/compress",method:"GET",data:{},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){if(200==a.data.code){var n=[];for(var i in a.data.msg)a.data.msg[i].image=e.$Url+a.data.msg[i].image,a.data.msg[i].title=a.data.msg[i].title.length>24?a.data.msg[i].title.substring(0,24)+"...":a.data.msg[i].title,n.push(a.data.msg[i]);e.listData=n}else t.showToast({icon:"none",title:"网络不给力，请稍后重试",duration:2e3})}})},methods:{}};e.default=a}).call(this,a("6e42")["default"])},"54c5":function(t,e,a){"use strict";a.r(e);var n=a("3ea2"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=i.a},"77b1":function(t,e,a){"use strict";(function(t){a("6e2c"),a("921b");n(a("66fd"));var e=n(a("ccf1"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"7b48":function(t,e,a){},ccf1:function(t,e,a){"use strict";a.r(e);var n=a("f6df"),i=a("54c5");for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);a("d757");var r=a("2877"),o=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},d757:function(t,e,a){"use strict";var n=a("7b48"),i=a.n(n);i.a},f6df:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})}},[["77b1","common/runtime","common/vendor"]]]);