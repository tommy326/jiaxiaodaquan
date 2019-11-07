<template>
	<view class="main_container">
		<view class="tabs_box">
			<view class="item active">
				<text class="text">综合</text>
				<image src="../../../static/images/icon/7.png" class="pic" mode=""></image>
			</view>
			<view class="item">
				<text class="text">价格</text>
			</view>
			<view class="item">
				<text class="text">筛选</text>
			</view>
		</view>
		<!-- 列表 -->
		<view class="service_list">
			<block v-for="(item,idx) in listData" :key='item'>
				<view class="item">
					<block v-if="idx < 3 || idx > 9">
						<view class="eq">
							{{idx+1}}
						</view>
					</block>
					<block v-if="idx > 3 && idx < 9">
						<view class="eq">
							{{'0'+(idx+1)}}
						</view>
					</block>
					<image src="http://iph.href.lu/100x100?text=100*100" mode="" class="photo"></image>
					<view class="info_box">
						<view class="user_info">
							<view class="user_name">
								周卫建
							</view>
						</view>
						<view class="comment_box">
							<view class="comment_stars">
								<block v-for="n in 5" :key='n'>
									<image src="../../../static/images/icon/icon-stars-1.png" class="pic" mode=""></image>
								</block>
								<text class="fraction">5.0分</text>
							</view>
							<view class="price">
								综合分405
							</view>
						</view>
						<view class="cost_box">
							<view class="school">
								￥2620
							</view>
							<view class="cost_text">
								蓝华驾校
							</view>
						</view>
						<view class="tag_list">
							<view class="tag_item">
								10年驾龄
							</view>
							<view class="tag_item">
								尽心尽责
							</view>
							<view class="tag_item">
								和蔼可亲
							</view>
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
				listData: []
			}
		},
		onLoad() {
			uni.request({
				url: this.$Url + '/api/exam/coach/list',
				method: 'GET',
				data: {},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log(res)
						this.listData = res.data.msg
					} else {
						uni.showToast({
							icon: 'none',
							title: '网络不给力，请稍后重试',
							duration: 2000
						});
					}

				}
			});
		},
		methods: {

		}
	}
</script>

<style>
	.main_container {
		display: block;
		width: 100%;
		height: auto;
		/* #ifdef H5 */
		min-height: calc(100vh - 44px);
		/* #endif */
		/* #ifdef APP-PLUS */
		min-height: 100vh;
		/* #endif */
		background: #f6f6f6;
		padding: 0 32rpx 24rpx;
		box-sizing: border-box;
	}

	.tabs_box {
		display: flex;
		width: 100%;
		height: 92rpx;
		align-items: center;
		justify-content: space-between;
	}

	.tabs_box .item {
		display: flex;
		width: 140rpx;
		height: 92rpx;
		align-items: center;
		justify-content: center;
		color: #999999;
	}

	.tabs_box .item .text {
		flex: 0 0 auto;
		font-size: 30rpx
	}

	.tabs_box .active {
		color: #3860ff;
	}

	.tabs_box .item .pic {
		flex: 0 0 auto;
		width: 12rpx;
		height: 7rpx;
		margin-left: 6rpx;
	}

	.service_list .item {
		display: flex;
		width: 100%;
		height: 240rpx;
		background-color: #ffffff;
		border-radius: 16rpx;
		justify-content: space-between;
		padding: 0 32rpx;
		box-sizing: border-box;
		margin-bottom: 24rpx;
		padding-top: 32rpx;
	}

	.service_list .item .eq {
		flex: 0 0 auto;
		font-size: 32rpx;
		width: 56rpx;
		color: #999999;
		line-height: 1;
		padding-top: 40rpx;
	}

	.service_list .item:nth-child(1) .eq,
	.service_list .item:nth-child(2) .eq,
	.service_list .item:nth-child(3) .eq {
		font-size: 72rpx;
		color: #3860ff;
		padding-top: 22rpx;
	}

	.service_list .item .photo {
		flex: 0 0 auto;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		margin-top: 6rpx;
	}

	.service_list .info_box {
		flex: 1 1 auto;
		margin-left: 30rpx;
	}

	.user_info {
		display: flex;
	}

	.user_info .user_name {
		flex: 0 0 auto;
		font-size: 34rpx;
		line-height: 1;
		color: #202020;
	}

	.user_info .user_tag {
		flex: 0 0 auto;
		color: #929292;
		font-size: 24rpx;
		line-height: 1;
		padding: 5rpx 8rpx;
		background-color: #f6f6f6;
		border-radius: 4rpx;
		margin-left: 20rpx;
	}


	.comment_box {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		margin-top: 19rpx;
	}

	.comment_box .comment_stars {
		display: flex;
		align-items: center;
	}

	.comment_box .comment_stars .pic {
		flex: 0 0 auto;
		width: 21rpx;
		height: 20rpx;
		margin-right: 5rpx;
	}

	.comment_box .comment_stars .fraction {
		flex: 0 0 auto;
		color: #929292;
		font-size: 22rpx;
		margin-left: 15rpx;
		line-height: 1;
	}

	.comment_box .price {
		flex: 0 0 auto;
		color: #3860ff;
		font-size: 24rpx;
		line-height: 1;
	}

	.cost_box {
		display: flex;
		align-items: center;
		margin-top: 20rpx;
		width: 100%;
		overflow: hidden;
	}

	.cost_box .school {
		flex: 0 0 auto;
		color: #666666;
		font-size: 24rpx;
		line-height: 1;
		min-width: 120rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-right: 20rpx;
	}

	.cost_box .cost_text {
		flex: 0 0 auto;
		color: #333333;
		font-size: 26rpx;
		line-height: 1;
	}

	.tag_list {
		display: flex;
		width: 100%;
		margin-top: 24rpx;
	}

	.tag_list .tag_item {
		flex: 0 0 auto;
		color: #929292;
		line-height: 1;
		padding: 4rpx 8rpx;
		background-color: #f6f6f6;
		border-radius: 4rpx;
		font-size: 24rpx;
		margin-right: 23rpx;
	}
</style>
