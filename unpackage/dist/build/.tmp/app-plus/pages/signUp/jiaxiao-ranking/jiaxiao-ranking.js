(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/signUp/jiaxiao-ranking/jiaxiao-ranking"],{"178d":function(t,a,e){},"3e10":function(t,a,e){"use strict";var n=e("178d"),o=e.n(n);o.a},"565c":function(t,a,e){"use strict";e.r(a);var n=e("66e1"),o=e("d47d");for(var i in o)"default"!==i&&function(t){e.d(a,t,function(){return o[t]})}(i);e("3e10");var r=e("2877"),u=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a["default"]=u.exports},"66e1":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},o=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return o})},"69a4":function(t,a,e){"use strict";(function(t){e("6e2c"),e("921b");n(e("66fd"));var a=n(e("565c"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},"92b0":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{listData:[]}},onLoad:function(){var a=this;t.request({url:this.$Url+"/api/school/home",method:"GET",data:{},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){if(200==e.data.code){var n=[];for(var o in e.data.msg)e.data.msg[o].coverImg=a.$Url+e.data.msg[o].coverImg,e.data.msg[o].label=e.data.msg[o].label.split(","),e.data.msg[o].score=null==e.data.msg[o].score?5:e.data.msg[o].score,n.push(e.data.msg[o]);a.listData=n}else t.showToast({icon:"none",title:"网络不给力，请稍后重试",duration:2e3})}})},methods:{ToSchoolDetails:function(a){t.navigateTo({url:"../../signUp/school-details/school-details?id="+a.currentTarget.dataset.id})}}};a.default=e}).call(this,e("6e42")["default"])},d47d:function(t,a,e){"use strict";e.r(a);var n=e("92b0"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);a["default"]=o.a}},[["69a4","common/runtime","common/vendor"]]]);