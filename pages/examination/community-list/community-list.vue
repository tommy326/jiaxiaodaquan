<template>
	<view class="main_container">
		<view class="hits_text">
			关于{{subject == 0?'科一':'科四'}}考试的相关问题的一个问答... 的<text>7</text>个问题
		</view>
		<view class="list">
			<block v-for="n in 7" :key='n'>
				<view class="item">
					<view class="key">
						为什么科目二那么难约？
					</view>
					<view class="val">
						您好！关于科二预约问题，我您好！关于科二预约问题我
					</view>
					<view class="info_box">
						<view class="num">
							全部1个回答
						</view>
						<view class="time">
							更新于 2019-09-18
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				subject: ''
			}
		},
		onLoad: function(options) {
			console.log('科目:' + options.tabs);
			this.subject = options.tabs
			uni.setNavigationBarTitle({
				title: options.tabs == 0 ? '科一社区' : '科四社区'
			});
		},
		methods: {

		}
	}
</script>

<style>
	uni-page-body,
	uni-page-refresh {
		min-height: 100%;
		background: #f6f6f6;
	}

	.main_container {
		/* #ifdef APP-PLUS */
		min-height: 100vh;
		background: #f6f6f6;
		/* #endif */
	}

	.hits_text {
		display: block;
		width: 100%;
		height: 86rpx;
		text-align: center;
		line-height: 86rpx;
		color: #929292;
		font-size: 24rpx
	}

	.hits_text text {
		color: #3860ff;
	}

	.list {
		display: block;
		width: 100%;
		padding: 0 32rpx 1rpx;
		box-sizing: border-box;
	}

	.list .item {
		display: block;
		width: 100%;
		padding: 36rpx 22rpx;
		box-sizing: border-box;
		background-color: #ffffff;
		border-radius: 16rpx;
		margin-bottom: 24rpx;
	}

	.list .item .key {
		display: block;
		width: 100%;
		color: #333333;
		font-size: 30rpx;
		padding-left: 43rpx;
		background: url(../../../static/images/icon/31.png) no-repeat left top 8rpx;
		background-size: 32rpx 32rpx;
		line-height: 48rpx;
		box-sizing: border-box;
		font-weight: bold;
	}

	.list .item .val {
		display: block;
		width: 100%;
		color: #333333;
		font-size: 26rpx;
		padding-left: 43rpx;
		background: url(../../../static/images/icon/32.png) no-repeat left top 6rpx;
		background-size: 32rpx 32rpx;
		line-height: 44rpx;
		margin-top: 16rpx;
		box-sizing: border-box;
	}

	.list .item .info_box {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		color: #929292;
		font-size: 20rpx;
		margin-top: 20rpx;
	}
</style>
