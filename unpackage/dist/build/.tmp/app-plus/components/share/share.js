(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/share/share"],{1020:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];s.d(t,"a",function(){return r}),s.d(t,"b",function(){return a})},"11ea":function(e,t,s){},4109:function(e,t,s){"use strict";var r=s("11ea"),a=s.n(r);a.a},a0f9:function(e,t,s){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{shareList:[{type:1,icon:"../../../static/images/share/wechatfriend.png",text:"微信好友"},{type:2,icon:"../../../static/images/share/wechatmoments.png",text:"朋友圈"}],transform:"translateY(50vh)",timer:0,backgroundColor:"rgba(0,0,0,0)",show:!1,config:{}}},props:{contentHeight:{type:Number,default:0},hasTabbar:{type:Boolean,default:!1},shareHref:{type:String,default:"http://dev.baiche.com.cn/h5/"},shareTitle:{type:String,default:"百车网"},shareSummary:{type:String,default:"百车网_选车、导购、互动、新闻、测评，关注最专业的我们"},shareImageUrl:{type:String,default:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"}},created:function(){var t=e.upx2px(this.contentHeight)+"px";this.config={height:t,transform:"translateY(".concat(t,")"),backgroundColor:"rgba(0,0,0,.4)"},this.transform=this.config.transform},methods:{toggleMask:function(){var t=this;if(1!=this.timer){if(this.timer=1,setTimeout(function(){t.timer=0},500),this.show)return this.transform=this.config.transform,this.backgroundColor="rgba(0,0,0,0)",void setTimeout(function(){t.show=!1,t.hasTabbar&&e.showTabBar()},200);this.show=!0,this.hasTabbar?e.hideTabBar({success:function(){setTimeout(function(){t.backgroundColor=t.config.backgroundColor,t.transform="translateY(0px)"},10)}}):setTimeout(function(){t.backgroundColor=t.config.backgroundColor,t.transform="translateY(0px)"},10)}},stopPrevent:function(){},shareToFriend:function(t){"微信好友"==t?e.share({provider:"weixin",scene:"WXSceneSession",type:0,href:this.shareHref,title:this.shareTitle,summary:this.shareSummary,imageUrl:this.shareImageUrl,success:function(e){console.log(s("success:"+JSON.stringify(e)," at components\\share\\share.vue:134"))},fail:function(e){console.log(s("fail:"+JSON.stringify(e)," at components\\share\\share.vue:137"))}}):"朋友圈"==t?e.share({provider:"weixin",scene:"WXSenceTimeline",type:0,href:this.shareHref,title:this.shareTitle,summary:this.shareSummary,imageUrl:this.shareImageUrl,success:function(e){console.log(s("success:"+JSON.stringify(e)," at components\\share\\share.vue:150"))},fail:function(e){console.log(s("fail:"+JSON.stringify(e)," at components\\share\\share.vue:153"))}}):"QQ好友"==t?e.share({provider:"qq",type:3,href:this.shareHref,title:this.shareTitle,summary:this.shareSummary,imageUrl:this.shareImageUrl,success:function(e){console.log(s("success:"+JSON.stringify(e)," at components\\share\\share.vue:165"))},fail:function(e){console.log(s("fail:"+JSON.stringify(e)," at components\\share\\share.vue:168"))}}):"新浪微博"==t&&e.share({provider:"sinaweibo",type:0,href:this.shareHref,title:this.shareTitle,summary:this.shareSummary,imageUrl:this.shareImageUrl,success:function(e){console.log(s("success:"+JSON.stringify(e)," at components\\share\\share.vue:180"))},fail:function(e){console.log(s("fail:"+JSON.stringify(e)," at components\\share\\share.vue:183"))}}),this.toggleMask()}}};t.default=r}).call(this,s("6e42")["default"],s("0de9")["default"])},ee20:function(e,t,s){"use strict";s.r(t);var r=s("1020"),a=s("f321");for(var n in a)"default"!==n&&function(e){s.d(t,e,function(){return a[e]})}(n);s("4109");var i=s("2877"),o=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=o.exports},f321:function(e,t,s){"use strict";s.r(t);var r=s("a0f9"),a=s.n(r);for(var n in r)"default"!==n&&function(e){s.d(t,e,function(){return r[e]})}(n);t["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/share/share-create-component',
    {
        'components/share/share-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("ee20"))
        })
    },
    [['components/share/share-create-component']]
]);                