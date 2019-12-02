<template>
	<view class="main_container">
		<view class="list">
			<view class="item line">
				<view class="key">
					头像
				</view>
				<image :src="userAvatar" class="pic" mode=""></image>
			</view>
			<view class="item" @click="changeName">
				<view class="key">
					用户名
				</view>
				<view class="val">
					{{userName}}
				</view>
			</view>
		</view>
		<view class="list">
			<view class="item line" @click="changeTel">
				<view class="key">
					手机号
				</view>
				<view class="val">
					{{userTel}}
				</view>
			</view>
			<view class="item" @click="changePass">
				<view class="key">
					修改密码
				</view>
			</view>
		</view>
		<view class="Sign_out" @click="SignOut">退出登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: '用户名',
				userAvatar: '../../../static/picture/userAvatar.png',
				userTel: '188****2185'
			}
		},
		onShow: function() {
			if (uni.getStorageSync('logon_status') == 1) {
				console.log()
				uni.request({
					url: this.$Url + '/api/v1/get/user', //仅为示例，并非真实接口地址。
					method: 'POST',
					data: {
						token: uni.getStorageSync('token')
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						if (res.data.code == 200) {
							uni.setStorageSync('userData', res.data.data);
							this.userName = res.data.data.username
							this.userAvatar = res.data.data.avatar == null ? '../../../static/picture/userAvatar.png' : res.data.data.avatar
							this.userTel = res.data.data.phone.substr(0, 3) + '****' + res.data.data.phone.substr(7)
						} else {
							uni.showToast({
								icon: 'none',
								title: '网络不给力，请稍后重试',
								duration: 1000
							});
						}
					}
				});

			}
		},
		methods: {
			SignOut: function(e) {
				uni.showModal({
					title: '驾考大全',
					content: '确定退出当前账号？',
					showCancel: true,
					cancelColor: '#3860ff',
					confirmColor: '#929292',
					success: function(res) {
						if (res.confirm) {
							uni.setStorageSync('userData', '');
							uni.setStorageSync('logon_status', 0);
							uni.setStorageSync('token', 0);
							uni.redirectTo({
								url: '../../login/login?form=1'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});

			},
			changeName: function(e) {
				uni.navigateTo({
					url: '../changeName/changeName?userName=' + this.userName
				});
			},
			changeTel: function(e) {
				uni.navigateTo({
					url: '../changeTel/changeTel?userTel=' + this.userTel
				});
			},
			changePass: function(e) {
				uni.navigateTo({
					url: '../changePass/changePass'
				});
			}
		}
	}
</script>

<style>
	uni-page,
	uni-page-body {
		display: block;
		width: 100%;
		height: 100%;
		background: #f8f8f8;
	}

	.main_container {
		/* #ifdef APP-PLUS */
		min-height: 100vh;
		/* #endif */
		background: #f8f8f8;
	}

	.list {
		display: block;
		width: 100%;
		background: #ffffff;
		padding: 0 40rpx;
		box-sizing: border-box;
		margin-bottom: 24rpx;
	}

	.item {
		display: flex;
		width: 100%;
		height: 132rpx;
		align-items: center;
		justify-content: space-between;
		padding-right: 48rpx;
		box-sizing: border-box;
		background: url(../../../static/images/icon/26.png) no-repeat right center;
		background-size: 14rpx 26rpx;
	}

	.line {
		border-bottom: 1px solid #ededed;
	}

	.key {
		flex: 0 0 auto;
		color: #1f1f1f;
		font-size: 32rpx;
	}

	.val {
		flex: 0 0 auto;
		color: #5c5c5c;
		font-size: 28rpx;
	}

	.pic {
		flex: 0 0 auto;
		width: 96rpx;
		height: 96rpx;
		background-color: #e5e5e5;
		border-radius: 50%;
	}

	.Sign_out {
		display: flex;
		width: 100%;
		height: 132rpx;
		align-items: center;
		justify-content: center;
		color: #3860ff;
		font-size: 32rpx;
		background: #ffffff;
	}
</style>
