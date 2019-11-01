<template>
	<view>
		<view class="banner_box">

		</view>
		<view class="sub_title">
			官方榜单
		</view>
		<scroll-view scroll-x class="listData">
			<view class="list">
				<view class="item">
					<image src="../../../static/images/item/1.png" class="pic" mode=""></image>
				</view>
				<view class="item">
					<image src="../../../static/images/item/2.png" class="pic" mode=""></image>
				</view>
				<view class="item">
					<image src="../../../static/images/item/3.png" class="pic" mode=""></image>
				</view>
			</view>

		</scroll-view>
		<view class="sub_title">
			驾考咨询
		</view>
		<view class="news_list">
			<view class="item" v-for="n in 3" :key='n'>
				<view class="info_wrap">
					<view class="info_title">
						年后准备练车了，先看完这个再决定是否去蓝......
					</view>
					<view class="time">
						2019-05-16
					</view>
				</view>
				<view class="photo_wrap">
					<image src="https://iph.href.lu/240x160" class="pic" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.banner_box {
		display: block;
		width: 686rpx;
		height: 358rpx;
		background-color: #4c4c4c;
		border-radius: 20rpx;
		margin: 12rpx auto 0;
	}

	.sub_title {
		display: block;
		width: 100%;
		font-size: 40rpx;
		color: #202020;
		font-weight: bold;
		text-indent: 32rpx;
		margin-top: 80rpx;
		line-height: 1;
	}

	.listData {
		display: block;
		width: 100%;
		height: 208rpx;
		padding-top: 40rpx;
		box-sizing: border-box;
	}

	.listData .list {
		display: flex;
		width: auto;
		height: 168rpx;
		align-items: center;
		padding: 0 32rpx;
	}

	.listData .item {
		flex: 0 0 auto;
		width: 328rpx;
		height: 168rpx;
		margin-right: 24rpx;
	}

	.listData .item:nth-child(1) {}

	.listData .item .pic {
		display: block;
		width: 328rpx;
		height: 168rpx;
	}

	.news_list .item {
		display: flex;
		width: 100%;
		padding: 32rpx;
		box-sizing: border-box;
	}


	.news_list .item .photo_wrap {
		flex: 0 0 auto;
		width: 240rpx;
		height: 160rpx;
		background-color: #d1d1d1;
		border-radius: 16rpx;
		margin-left: 32rpx;
		overflow: hidden;
	}

	.news_list .item .photo_wrap .pic {
		display: block;
		width: 240rpx;
		height: 160rpx;
	}

	.news_list .item .info_wrap {
		flex: 1 1 auto;
		color: #333333;
		font-size: 32rpx;
		line-height: 48rpx;
		position: relative;
	}
	
	.news_list .item .info_wrap .time{
		display: block;
		color: #929292;
		font-size: 24rpx;
		position: absolute;
		bottom: 8rpx;
		left: 0;
		line-height: 1;
	}
</style>
