<template>
	<view>
		<view class="head_wrap">
			<view class="info_box">
				<view class="num">
					1320
				</view>
				<view class="text">
					错题数
				</view>
			</view>
			<view class="list">
				<view class="item">
					<view class="num">
						8
					</view>
					<view class="text">
						今日错题
					</view>
				</view>
				<view class="item">
					<view class="num">
						22
					</view>
					<view class="text">
						全部错题
					</view>
				</view>
			</view>
		</view>
		<view class="mid_wrap">
			<view class="sub_title">
				错题详情
			</view>
			<view class="list">
				<view class="item">
					<view class="text">
						科目一错题数
					</view>
					<view class="num">
						0
					</view>
				</view>
			</view>
			<view class="list">
				<view class="item">
					<view class="text">
						科目四错题数
					</view>
					<view class="num">
						6
					</view>
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
		onLoad() {
			uni.request({
				url: this.$Url + '/api/v1/exam/error/list',
				method: 'GET',
				data: {
					token: uni.getStorageSync('token')
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log(res.data.msg)
						// this.Highest = res.data.msg.top.mark
						// this.error = res.data.msg.error
						// this.total = res.data.msg.total
						// this.right = res.data.msg.right
						// // this.listData = res.data.msg
						// var arr = []
						// for (let i in res.data.msg.list) {
						// 	res.data.msg.list[i].time = res.data.msg.list[i].time.substr(5, 2)+'月'+res.data.msg.list[i].time.substr(8, 2)+'日'
						// 	arr.push(res.data.msg.list[i]); //属性
						// }
						// this.listData = arr
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
	.head_wrap {
		display: block;
		width: 100%;
		height: 582rpx;
		background: url(../../../static/images/bg/1.png) no-repeat;
		background-size: 100%;
		padding-top: 22rpx;
		box-sizing: border-box;
	}

	.head_wrap .info_box {
		display: flex;
		width: 374rpx;
		height: 374rpx;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin: 0 auto;
	}

	.head_wrap .info_box .num {
		flex: 0 0 auto;
		color: #ffffff;
		font-size: 96rpx;
		line-height: 1;
		font-weight: bold;
	}

	.head_wrap .info_box .text {
		flex: 0 0 auto;
		color: #ffffff;
		opacity: 0.6;
		font-size: 28rpx;
		margin-top: 10rpx;
	}

	.head_wrap .list {
		display: flex;
		width: 100%;
		color: #ffffff;
		padding: 0 60rpx;
		box-sizing: border-box;
		align-items: center;
		justify-content: space-between;
	}

	.head_wrap .list .item {
		display: flex;
		width: 200rpx;
		height: 146rpx;
		color: #ffffff;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.head_wrap .list .item .num {
		flex: 0 0 auto;
		font-size: 56rpx;
		color: #ffffff;
		line-height: 1;
		font-weight: bold;
	}

	.head_wrap .list .item .text {
		flex: 0 0 auto;
		font-size: 28rpx;
		color: #ffffff;
		opacity: 0.7;
		line-height: 1;
		margin-top: 16rpx;
	}

	.mid_wrap {
		display: block;
		width: 100%;
		background-color: #ffffff;
		border-radius: 40rpx 40rpx 0 0;
		margin-top: -40rpx;
		padding: 56rpx 32rpx;
		box-sizing: border-box;
	}

	.mid_wrap .sub_title {
		color: #333333;
		font-size: 40rpx;
		line-height: 1;
	}

	.mid_wrap .list .item {
		display: flex;
		width: 100%;
		height: 108rpx;
		border-bottom: 1px solid rgba(0, 0, 0, 0.08);
		align-items: center;
		justify-content: space-between;
		background: url(../../../static/images/icon/icon-more.png) no-repeat right center;
		background-size: 11rpx 20rpx;
	}

	.mid_wrap .list .item .text {
		flex: 0 0 auto;
		color: #333333;
		font-size: 30rpx;
	}

	.mid_wrap .list .item .num {
		flex: 0 0 auto;
		color: #3860ff;
		font-size: 30rpx;
		margin-right: 27rpx;
	}
</style>
