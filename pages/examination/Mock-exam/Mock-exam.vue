<template>
	<view class="main_wrap">
		<image :src="userAvatar" class="user_photo" mode=""></image>
		<view class="user_name">
			{{userName}}
		</view>
		<view class="hits_text">
			模考5次95分及以上即可参加考试
		</view>
		<view class="list">
			<view class="item">
				<view class="info">
					全国通用
				</view>
				<view class="text">
					小车C1/C2/C3
				</view>
			</view>
			<view class="item">
				<view class="info">
					考题标准
				</view>
				<view class="text">
					100题
				</view>
			</view>
			<view class="item">
				<view class="info">
					考试时间
				</view>
				<view class="text">
					45分钟
				</view>
			</view>
			<view class="item">
				<view class="info">
					合格标准
				</view>
				<view class="text">
					90分及格（满分100分）
				</view>
			</view>
			<view class="item">
				<view class="info">
					出题规则
				</view>
				<view class="text">
					按公安部规定比例随机抽取
				</view>
			</view>
		</view>
		<view class="Warm_prompt">
			温馨提示：模拟考试不能修改答案，每错1题扣1分，错题累计超过10题，考试不通过，系统自动提醒交卷。
		</view>
		<navigator :url="'../exam/exam?subject='+subject" class="btn" hover-class="none">开始考试</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				subject: '',
				userAvatar:'http://iph.href.lu/140x140',
				userName:'用户名'
			}
		},
		onLoad(options) {
			this.subject = options.subject
			this.userAvatar = uni.getStorageSync('userData').avatar == null?'http://iph.href.lu/120x120?text=头像':uni.getStorageSync('userData').avatar 
			this.userName = uni.getStorageSync('userData').username
		},
		onNavigationBarButtonTap: function(e) {
			console.log(e)
			if (e.type == 'none') {
				uni.showToast({
					title: '你点了成绩单按钮',
					icon: 'none'
				});
			}
		},
		methods: {

		}
	}
</script>

<style>
	.main_wrap {
		padding-top: 68rpx;
	}

	.user_photo {
		display: block;
		width: 140rpx;
		height: 140rpx;
		border-radius: 50%;
		margin: 0 auto;
		background-color: #a3a3a3;
	}

	.user_name {
		color: #333333;
		font-size: 36rpx;
		text-align: center;
		line-height: 1;
		margin-top: 24rpx;
	}

	.hits_text {
		color: #959595;
		font-size: 28rpx;
		text-align: center;
		line-height: 1;
		margin-top: 32rpx;
	}

	.list {
		display: block;
		width: 100%;
		padding: 0 80rpx;
		box-sizing: border-box;
		margin-top: 64rpx;
	}

	.list .item {
		display: flex;
		font-size: 30rpx;
		color: #333333;
		width: 100%;
		height: 52rpx;
		align-items: center;
	}

	.list .item .text {
		flex: 1 1 auto;
		color: #959595;
		margin-left: 42rpx;
	}

	.Warm_prompt {
		display: block;
		width: 100%;
		padding: 0 80rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		line-height: 34rpx;
		letter-spacing: 0px;
		color: #b3b3b3;
		margin-top: 32rpx;
	}

	.btn {
		display: flex;
		width: 590rpx;
		height: 90rpx;
		background-color: #3860ff;
		border-radius: 45rpx;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		font-size: 34rpx;
		margin: 60rpx auto;
	}
</style>
