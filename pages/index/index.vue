<template>
	<view class="content">

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad: function(options) {
			console.log(options)
			setTimeout(function() {
				console.log('start pulldown');
			}, 1000);
			uni.startPullDownRefresh();
		},
		onShow: function() {
			console.log('onShow')
		},
		onReady: function() {
			console.log('onReady')
		},
		onHide: function() {
			console.log('onHide')
		},
		onUnload: function() {
			console.log('onUnload')
		},
		onResize: function(e) {
			console.log(e);
		},
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onReachBottom() {
			console.log('onReachBottom')
		},
		onTabItemTap: function(e) {
			console.log(e);
			// e的返回格式为json对象： {"index":0,"text":"首页","pagePath":"pages/index/index.html"}
		},
		onShareAppMessage() {
			console.log('onShareAppMessage')
		},
		onPageScroll: function(e) { //nvue暂不支持滚动监听，可用bindingx代替
			console.log("滚动距离为：" + e.scrollTop);
		},
		onNavigationBarButtonTap: function(e) {
			console.log(e);
			// e的返回格式为json对象：{"text":"测试","index":0}
		},
		onBackPress(options) {
			console.log('from:' + options.from)
		},
		onNavigationBarSearchInputChanged() {
			console.log('onNavigationBarSearchInputChanged')
		},
		onNavigationBarSearchInputConfirmed() {
			console.log('onNavigationBarSearchInputConfirmed')
		},
		onNavigationBarSearchInputClicked() {
			console.log('onNavigationBarSearchInputClicked')
		},
		methods: {
			
		}
	}
</script>

<style>
	
</style>
