(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/signUp/signUp"],{"1c76":function(t,e,a){"use strict";var n=a("9699"),s=a.n(n);s.a},"2ca6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},"5cbf":function(t,e,a){"use strict";(function(t){a("6e2c"),a("921b");n(a("66fd"));var e=n(a("fda7"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"917e":function(t,e,a){"use strict";a.r(e);var n=a("e826"),s=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=s.a},9699:function(t,e,a){},e826:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{city:"武汉",columnData:[{url:"../../signUp/jiaxiao-ranking/jiaxiao-ranking",src:"jkph",title:"驾校排行"},{url:"../../signUp/Coach-ranking/Coach-ranking",src:"jlph",title:"教练排行"},{url:"../../signUp/Partner-service/Partner-service",src:"plfw",title:"陪练服务"},{url:"../../signUp/Driving-test-guide/Driving-test-guide",src:"jkzn",title:"驾考指南"}],listData:[],adData:[]}},onLoad:function(e){var n=this;t.getLocation({type:"wgs84",geocode:!0,altitude:!0,success:function(e){console.log(a(e," at pages\\tabBar\\signUp\\signUp.vue:160"));var s=t.getStorageSync("address")||"0";"0"==s?(t.showToast({icon:"loading",title:"获取位置中..."}),t.setStorageSync("address",e),t.hideToast(),n.city=e.address.city):"0"!=s?s.address.city==e.address.city?(t.setStorageSync("address",e),n.city=e.address.city):s.address.city!=e.address.city&&t.showModal({title:"温馨提示",content:"当前位置是"+e.address.city+"是否切换",success:function(e){e.confirm?(console.log(a("用户点击确定"," at pages\\tabBar\\signUp\\signUp.vue:185")),t.setStorageSync("address",e),this.city=e.address.city):e.cancel&&console.log(a("用户点击取消"," at pages\\tabBar\\signUp\\signUp.vue:189"))}}):t.showToast({icon:"none",title:"获取位置失败，请开启手机设置定位权限！"})}}),t.request({url:this.$Url+"/api/school/home",method:"GET",data:{},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){if(200==e.data.code){var a=[];for(var s in e.data.msg)e.data.msg[s].coverImg=n.$Url+e.data.msg[s].coverImg,a.push(e.data.msg[s]);n.listData=a}else t.showToast({icon:"none",title:"网络不给力，请稍后重试",duration:2e3})}}),t.request({url:this.$Url+"/api/car/ad",method:"GET",data:{position:"home"},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){if(200==e.data.code){console.log(a(e.data," at pages\\tabBar\\signUp\\signUp.vue:242"));var s=[];for(var o in e.data.msg)e.data.msg[o].coverImg=n.$Url+e.data.msg[o].coverImg,s.push(e.data.msg[o]);n.adData=s}else t.showToast({icon:"none",title:"网络不给力，请稍后重试",duration:2e3})}})},onShow:function(){0==t.getStorageSync("statement")&&t.showModal({title:"驾考隐私声明",content:"驾考大全APP(以下简称驾考)为您提供登录、注册、浏览等功能。驾考非常重视用户的个人信息和隐私保护，鉴于网络的特性，驾考将无可避免地与您产生直接或间接的互动关系，故特此说明驾考对用户个人信息的收集、使用和保护政策",cancelText:"查看声明",confirmText:"同意并继续",success:function(e){e.confirm?(console.log(a("用户点击确定"," at pages\\tabBar\\signUp\\signUp.vue:269")),t.setStorageSync("statement",1)):e.cancel&&(console.log(a("用户点击取消"," at pages\\tabBar\\signUp\\signUp.vue:272")),t.navigateTo({url:"../../statement/statement"}))}})},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},methods:{openBrowser:function(t){plus.runtime.openURL(t.currentTarget.dataset.url)}}};e.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},fda7:function(t,e,a){"use strict";a.r(e);var n=a("2ca6"),s=a("917e");for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);a("1c76");var i=a("2877"),c=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports}},[["5cbf","common/runtime","common/vendor"]]]);