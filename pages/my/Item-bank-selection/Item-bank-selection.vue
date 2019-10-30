<template>
	<view>
		<view class="head_wrap">
			<view class="title">
				请选择您要考试的题库类型
			</view>
			<view class="sub_title">
				已更新至2019年新题库
			</view>
		</view>
		<view class="mid_wrap">
			<navigator url="" class="city_change">
				武汉市
			</navigator>
			<view class="sub_title">
				驾驶证
			</view>
			<view class="cars_list">
				<view class="item active">
					<image src="../../../static/images/icon/11.png" class="pic" mode=""></image>
					<view class="cars">
						小车
					</view>
					<view class="text">
						C1/C2/C3
					</view>
				</view>
				<view class="item">
					<image src="../../../static/images/icon/12.png" class="pic" mode=""></image>
					<view class="cars">
						货车
					</view>
					<view class="text">
						A2/B2
					</view>
				</view>
				<view class="item">
					<image src="../../../static/images/icon/13.png" class="pic" mode=""></image>
					<view class="cars">
						客车
					</view>
					<view class="text">
						A1/A3/B1
					</view>
				</view>
				<view class="item">
					<image src="../../../static/images/icon/14.png" class="pic" mode=""></image>
					<view class="cars">
						摩托车
					</view>
					<view class="text">
						D/E/F
					</view>
				</view>
			</view>
			<view class="sub_title">
				资格证
			</view>
			<view class="cer_list">
				<view class="item">
					<view class="text">
						教练员
					</view>
				</view>
				<view class="item">
					<view class="text">
						货运
					</view>
				</view>
				<view class="item">
					<view class="text">
						客运
					</view>
				</view>
				<view class="item">
					<view class="text">
						危险品
					</view>
				</view>
				<view class="item">
					<view class="text">
						出租车
					</view>
				</view>
				<view class="item">
					<view class="text">
						网约车
					</view>
				</view>
			</view>
			<view class="btn">
				确认
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
		height: 216rpx;
		background: url(../../../static/images/bg/2.png) no-repeat center;
		background-size: 100%;
		padding-top: 40rpx;
		box-sizing: border-box;
	}

	.head_wrap .title {
		display: block;
		width: 100%;
		color: #ffffff;
		font-size: 36rpx;
		text-align: center;
		line-height: 1;
	}

	.head_wrap .sub_title {
		color: #ffffff;
		opacity: 0.7;
		font-size: 28rpx;
		margin-top: 20rpx;
		text-align: center;
	}

	.mid_wrap {
		display: block;
		width: 100%;
		background-color: #ffffff;
		border-radius: 40rpx 40rpx 0 0;
		margin-top: -40rpx;
		padding: 40rpx 32rpx;
		box-sizing: border-box;
	}

	.mid_wrap .city_change {
		display: flex;
		width: 100%;
		height: 56rpx;
		background: url(../../../static/images/icon/20.png) no-repeat right center;
		background-size: 14rpx 28rpx;
		align-items: center;
		font-size: 32rpx;
	}

	.mid_wrap .sub_title {
		display: block;
		width: 100%;
		font-size: 32rpx;
		color: #333333;
		line-height: 1;
		margin-top: 60rpx;
	}

	.mid_wrap .cars_list {
		display: flex;
		width: 100%;
		height: 200rpx;
		align-items: center;
		justify-content: space-between;
		margin-top: 20rpx;
	}

	.mid_wrap .cars_list .item {
		flex: 0 0 auto;
		width: 170rpx;
		height: 200rpx;
		color: #999999;
		padding-top: 36rpx;
		box-sizing: border-box;
		border-radius: 30rpx;
		position: relative;
	}

	.mid_wrap .cars_list .item .pic {
		display: block;
		margin: 0 auto;
	}

	.mid_wrap .cars_list .item:nth-child(1) .pic {
		width: 80rpx;
		height: 39rpx;
	}

	.mid_wrap .cars_list .item:nth-child(2) .pic {
		width: 64rpx;
		height: 47rpx;
	}

	.mid_wrap .cars_list .item:nth-child(3) .pic {
		width: 70rpx;
		height: 41rpx;
	}

	.mid_wrap .cars_list .item:nth-child(4) .pic {
		width: 77rpx;
		height: 43rpx;
	}

	.mid_wrap .cars_list .item .cars {
		width: 100%;
		text-align: center;
		font-size: 28rpx;
		line-height: 1;
		position: absolute;
		left: 0;
		top: 106rpx;
	}

	.mid_wrap .cars_list .item .text {
		width: 100%;
		text-align: center;
		font-size: 24rpx;
		line-height: 1;
		position: absolute;
		left: 0;
		top: 144rpx;
	}

	.mid_wrap .cars_list .active {
		background: rgb(239, 243, 255);
		color: #3860ff;
	}

	.mid_wrap .cer_list {
		display: flex;
		width: 100%;
		align-items: center;
		margin-top: 20rpx;
		flex-wrap: wrap;
	}

	.mid_wrap .cer_list .item {
		flex: 0 0 auto;
		width: 170rpx;
		height: 170rpx;
		color: #999999;
		padding-top: 110rpx;
		box-sizing: border-box;
		border-radius: 30rpx;
		position: relative;
	}

	.mid_wrap .cer_list .item:nth-child(1) {
		background: url(../../../static/images/icon/15.png) no-repeat top 32rpx center;
		background-size: 56rpx 54rpx;
	}

	.mid_wrap .cer_list .item:nth-child(2) {
		background: url(../../../static/images/icon/16.png) no-repeat top 32rpx center;
		background-size: 48rpx 53rpx;
	}

	.mid_wrap .cer_list .item:nth-child(3) {
		background: url(../../../static/images/icon/21.png) no-repeat top 32rpx center;
		background-size: 42rpx 53rpx;
	}

	.mid_wrap .cer_list .item:nth-child(4) {
		background: url(../../../static/images/icon/17.png) no-repeat top 32rpx center;
		background-size: 69rpx 46rpx;
	}

	.mid_wrap .cer_list .item:nth-child(5) {
		background: url(../../../static/images/icon/18.png) no-repeat top 32rpx center;
		background-size: 52rpx 47rpx;
	}

	.mid_wrap .cer_list .item:nth-child(6) {
		background: url(../../../static/images/icon/19.png) no-repeat top 32rpx center;
		background-size: 58rpx 42rpx;
	}

	.mid_wrap .cer_list .item .text {
		text-align: center;
		font-size: 28rpx;
		line-height: 1;
	}

	.mid_wrap .btn {
		display: flex;
		width: 100%;
		height: 100rpx;
		background-color: #3860ff;
		border-radius: 50rpx;
		align-items: center;
		justify-content: center;
		font-size: 36rpx;
		color: #ffffff;
		margin-top: 36rpx;
	}
</style>
