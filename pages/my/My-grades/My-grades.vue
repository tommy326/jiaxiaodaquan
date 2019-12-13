<template>
	<view>
		<view class="head_wrap">
			<view class="info_box">
				<view class="num">{{Highest}}</view>
				<view class="text">历史最高分</view>
			</view>
			<view class="list">
				<view class="item">
					<view class="num">{{total}}</view>
					<view class="text">未做题</view>
				</view>
				<view class="item">
					<view class="num">{{error}}</view>
					<view class="text">答错题</view>
				</view>
				<view class="item">
					<view class="num">{{right}}</view>
					<view class="text">答对题</view>
				</view>
			</view>
		</view>
		<view class="mid_wrap">
			<view class="sub_title">错题详情</view>
			<view class="list">
				<block v-for="(item,idx) in listData" :key='idx'>
					<view class="item" :class="item.mark >= 90?'on':'off'">
						<view class="num">{{item.mark}}</view>
						<view class="time">{{item.useTime}}分钟</view>
						<view class="date">{{item.time}}</view>
						<view class="grade">{{item.mark >= 90?'高手':'马路杀手'}}</view>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Highest: '0',
				error: '0',
				total: '0',
				right: '0',
				listData: []
			}
		},
		onLoad() {
			uni.request({
				url: this.$Url + '/api/v1/exam/report',
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
						this.Highest = res.data.msg.top.mark
						this.error = res.data.msg.error
						this.total = res.data.msg.total
						this.right = res.data.msg.right
						// this.listData = res.data.msg
						var arr = []
						for (let i in res.data.msg.list) {
							res.data.msg.list[i].time = res.data.msg.list[i].time.substr(5, 2)+'月'+res.data.msg.list[i].time.substr(8, 2)+'日'
							arr.push(res.data.msg.list[i]); //属性
						}
						this.listData = arr
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
		align-items: center;
		justify-content: space-between;
	}

	.head_wrap .list .item {
		display: flex;
		width: 228rpx;
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

	.mid_wrap .list {
		margin-top: 40rpx;
	}

	.mid_wrap .list .item {
		display: flex;
		width: 100%;
		height: 88rpx;
		border-left: 6rpx solid #ffffff;
		background: #ffffff;
		margin-bottom: 24rpx;
		align-items: center;
		border-radius: 10rpx;
	}

	.mid_wrap .list .on {
		background: rgb(243, 246, 255);
		color: #3860ff;
		border-color: #3860ff;
	}

	.mid_wrap .list .off {
		background: rgb(254, 245, 245);
		color: #f55750;
		border-color: #f55750;
	}

	.mid_wrap .list .item .num {
		flex: 0 0 auto;
		width: 150rpx;
		text-align: center;
		font-size: 34rpx;
	}

	.mid_wrap .list .item .time,
	.mid_wrap .list .item .date {
		flex: 0 0 auto;
		color: #929292;
		width: 170rpx;
		font-size: 30rpx;
		text-align: center;
	}

	.mid_wrap .list .item .grade {
		flex: 1 1 auto;
		font-size: 30rpx;
		text-align: right;
		opacity: 0.8;
		margin-right: 20rpx;
	}
</style>
