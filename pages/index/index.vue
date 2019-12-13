<template>
	<view class="main_container">
		<view class="mask" v-if="Privacy">
			<view class="mid_box">
				<view class="title">
					隐私政策与用户协议
				</view>
				<view class="text">
					<view>感谢您信任并使用驾考大全APP及相关服务。</view>
					<view>我们非常重视您的个人信息和隐私保护，为了更好地保障您的个人权益，根据有关的法律法规、政策要求及业务实际情况，您可以通过《隐私政策》与《网络用户协议》详细了解我们如何收集、使用、保护您的个人信息。</view>
					<view>在您继续使用驾考大全APP及相关服务之前，请务必谨慎阅读《网络用户协议》与《隐私政策》各项条款。</view>
					<view>您“同意并继续”的行为即表示您已经阅读完毕并同意以上协议的全部内容。如您同意以上协议内容，请点击“同意”，开始使用我们的产品和服务。</view>
				</view>
				<view class="link_list">
					您可以查看完整版 <navigator url="../Network-user-protocol/Network-user-protocol" class="link">网络用户协议</navigator>和<navigator url="../Privacy-policy/Privacy-policy" class="link">隐私政策</navigator>
				</view>
				<view class="btn_list">
					<view class="btn" hover-class="btn_hover" @click="tapOut">
						不同意
					</view>
					<view class="btn btn_on" hover-class="btn_hover" @click="tapIn">
						同意并继续
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
				Privacy:false
			}
		},
		onLoad: function() {
			if(uni.getStorageSync('Privacy_policy') == 0){
				this.Privacy = true
			}else if(uni.getStorageSync('Privacy_policy') == 1){
				uni.switchTab({
				    url: '../tabBar/signUp/signUp'
				});
			}
		},
		methods: {
			tapIn: function(e) {
				uni.setStorageSync('Privacy_policy', 1)
				uni.switchTab({
					url: '../tabBar/signUp/signUp'
				});
			},
			tapOut: function(e) {
				// #ifdef APP-PLUS
				switch (uni.getSystemInfoSync().platform) {
					case 'android':
						plus.runtime.quit();
						break;
					case 'ios':
						const exitIosAPP = uni.requireNativePlugin('CGF-ExitIosApp');
						exitIosAPP.exitIosApp();
						break;
					default:
						console.log('运行在开发者工具上')
						break;
				}
				// #endif
			}
		}
	}
</script>

<style>
	.main_container {
		display: block;
		width: 100%;
		height: auto;
		min-height: 100vh;
		background: url(../../static/picture/logo.png) no-repeat bottom 64rpx center;
		background-size: 356rpx 83rpx;
	}

	.mask {
		display: block;
		width: 100%;
		min-height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		position: relative;
	}

	.mid_box {
		display: block;
		width: 590rpx;
		height: 1002rpx;
		background-color: #ffffff;
		border-radius: 30rpx;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		padding-top: 40rpx;
		box-sizing: border-box;
	}

	.title {
		color: #202020;
		font-size: 36rpx;
		text-align: center;
		line-height: 1;
	}

	.text {
		color: #202020;
		font-size: 28rpx;
		line-height: 40rpx;
		padding: 32rpx 54rpx;
		box-sizing: border-box;
	}

	.link_list {
		display: flex;
		color: #646464;
		line-height: 39rpx;
		font-size: 28rpx;
		padding: 30rpx 54rpx;
		box-sizing: border-box;
		flex-wrap: wrap;
		letter-spacing: 2rpx;
	}

	.link {
		flex: 0 0 auto;
		text-decoration: underline;
		color: #3860ff;
	}

	.btn_list {
		display: flex;
		width: 100%;
		padding: 0 40rpx;
		box-sizing: border-box;
		align-items: center;
		justify-content: space-between;
	}

	.btn {
		flex: 0 0 auto;
		width: 240rpx;
		height: 88rpx;
		border-radius: 44rpx;
		border: solid 2rpx #eeeeee;
		color: #202020;
		font-size: 32rpx;
		text-align: center;
		line-height: 88rpx;
	}

	.btn_on {
		background-color: #3860ff;
		border: solid 2rpx #3860ff;
		color: #ffffff;
	}

	.btn_hover {
		opacity: 0.8;
	}
</style>
