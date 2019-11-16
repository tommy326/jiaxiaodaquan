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
		<view class="service_list">
			<block v-for="(item,idx) in listData" :key='item'>
				<view class="item">
					<image :src="item.avatar" lazy-load='true' mode="" class="photo" :data-id = 'idx' @error="imageError" @load='imageLoad'></image>
					<view class="info_box">
						<view class="user_info">
							<view class="user_name">
								{{item.name}}
							</view>
							<view class="user_tag">
								{{item.workingYears}}年驾龄
							</view>
						</view>
						<view class="comment_box">
							<view class="comment_stars">
								<block v-for="n in item.score" :key='n'>
									<image src="../../../static/images/icon/icon-stars-1.png" class="pic" mode=""></image>
								</block>
								<text class="fraction">{{item.score}}.0分</text>
							</view>
							<view class="price">
								{{item.price}}元/小时
							</view>
						</view>
						<view class="cost_box">
							<view class="school">
								{{item.school}}
							</view>
							<view class="cost_text">
								科二、科三、拿本上路陪练
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
				url: this.$Url + '/api/school/coach/list',
				method: 'GET',
				data: {
					accompany: '2'
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						var arr = []
						for (let i in res.data.msg) {
							res.data.msg[i].avatar = this.$Url + res.data.msg[i].avatar
							res.data.msg[i].price = res.data.msg[i].price == null ? '0' : res.data.msg[i].price
							res.data.msg[i].score = res.data.msg[i].score == null ? 5 : res.data.msg[i].score
							arr.push(res.data.msg[i]); //属性
						}
						this.listData = arr
						console.log(arr)
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
			imageError: function(e) {
				this.listData[e.currentTarget.dataset.id].avatar = 'http://iph.href.lu/100x100'
			},
			imageLoad:function(e) {
				console.log('image发生load事件，携带值为' + e.detail.height + e.detail.width)
			}
		}
	}
</script>

<style>
	uni-page-body {
		height: 100%;
	}

	.main_container {
		display: block;
		width: 100%;
		/* #ifdef H5 */
		min-height: 100%;
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
		height: 196rpx;
		background-color: #ffffff;
		border-radius: 16rpx;
		align-items: center;
		justify-content: space-between;
		padding: 0 32rpx;
		box-sizing: border-box;
		margin-bottom: 24rpx;
	}

	.service_list .item .photo {
		flex: 0 0 auto;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
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
		justify-content: space-between;
		margin-top: 20rpx;
		width: 100%;
		overflow: hidden;
	}

	.cost_box .school {
		flex: 1 1 auto;
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
</style>
