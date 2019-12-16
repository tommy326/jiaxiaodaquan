<template>
	<view>
		<view class="head_box">
			<image src="../../../static/logo.png" class="logo" mode=""></image>
			<view class="name">
				驾考大全
			</view>
			<view class="version">
				V{{version}}
			</view>
		</view>
		<view class="list">
			<navigator class="item" url="../../Privacy-policy/Privacy-policy">隐私政策</navigator>
			<navigator class="item" url="../../Network-user-protocol/Network-user-protocol">用户协议</navigator>
			<navigator class="item" url="../Business-license/Business-license">营业执照</navigator>
			<view class="item" @click="tapVersion">检查新版本</view>
		</view>
		<view class="footer_box">
			<text class="text">版权所有 武汉四维文化传播有限公司</text>
			<text class="text">CopyRight © 2019 BitAuto</text>
			<text class="text">All Rights Resrved</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version: '1.0.0'
			}
		},
		onLoad: function() {
			// #ifdef APP-PLUS
			this.version = plus.runtime.version
			// #endif
		},
		methods: {
			tapVersion:function(e){
				uni.showToast({
					icon:'none',
					mask:true,
				    title: '当前已是最新版本',
				    duration: 2000
				});
			}
		}
	}
</script>

<style>
	.head_box {
		display: flex;
		width: 100%;
		padding: 84rpx 0 0 0;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.head_box .logo {
		flex: 0 0 auto;
		width: 160rpx;
		height: 160rpx;
	}

	.head_box .name {
		flex: 0 0 auto;
		color: #333333;
		font-size: 34rpx;
		letter-spacing: 1px;
		line-height: 1;
		margin-top: 40rpx;
	}

	.head_box .version {
		flex: 0 0 auto;
		color: #666666;
		font-size: 28rpx;
		letter-spacing: 1px;
		line-height: 1;
		margin-top: 20rpx;
	}

	.list {
		display: block;
		width: 100%;
		padding: 68rpx 40rpx 0;
		box-sizing: border-box;
	}

	.list .item {
		display: flex;
		width: 100%;
		height: 108rpx;
		align-items: center;
		border-bottom: 1px solid #ededed;
		background: url(../../../static/images/icon/20.png) no-repeat right center;
		background-size: 10rpx 22rpx;
		color: #222222;
		font-size: 30rpx;
	}
	
	.footer_box{
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		color: #929292;
		line-height: 37rpx;
		font-size: 24rpx;
		position: fixed;
		left: 0;
		bottom: 98rpx;
	}
</style>
