<template>
	<view>
		<view class="head_wrap">
			<view class="info_box">
				<view class="num">
					99
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
						未做题
					</view>
				</view>
				<view class="item">
					<view class="num">
						12
					</view>
					<view class="text">
						答错题
					</view>
				</view>
				<view class="item">
					<view class="num">
						22
					</view>
					<view class="text">
						答对题
					</view>
				</view>
			</view>
		</view>
		<view class="mid_wrap">
			<view class="sub_title">
				错题详情
			</view>
			<view class="list">
				<view class="item off">
					<view class="num">
						5分
					</view>
					<view class="time">
						0分18秒
					</view>
					<view class="date">
						10月10日
					</view>
					<view class="grade">
						马路杀手
					</view>
				</view>
				<view class="item on">
					<view class="num">
						92分
					</view>
					<view class="time">
						30分18秒
					</view>
					<view class="date">
						10月10日
					</view>
					<view class="grade">
						高手
					</view>
				</view>
				<view class="item on">
					<view class="num">
						92分
					</view>
					<view class="time">
						30分18秒
					</view>
					<view class="date">
						10月10日
					</view>
					<view class="grade">
						高手
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
