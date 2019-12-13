<template>
	<view class="main_container">
		<view class="form_box">
			<form @submit="formSubmit">
				<view class="form_item">
					<input class="uni_input" :value="userName" @input="tapUser" name="input" />
					<view class="input_clear" v-if="userIcon" @click="clearUserIcon"></view>
				</view>
				<view class="form_hit">
					请输入1-16个字符，支持中英文、数字。
				</view>
				<button form-type="submit" class="form_btn">确认</button>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: '',
				userIcon: false,
			}
		},
		onLoad: function(options) {
			this.userName = options.userName
			if (this.userName.length > 0) {
				this.userIcon = true;
			} else {
				this.userIcon = false;
			}
		},
		methods: {
			tapUser: function(e) {
				this.userName = e.target.value;
				if (e.target.value.length > 0) {
					this.userIcon = true;
				} else {
					this.userIcon = false;
				}
			},
			clearUserIcon: function() {
				this.userName = '';
				this.userIcon = false;
			},
			formSubmit: function(e) {
				if (this.userName.length < 1) {
					uni.showToast({
						icon: 'none',
						title: '请输入昵称！',
						duration: 1000
					});
				} else if (!(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/).test(this.userName)) {
					uni.showToast({
						icon: 'none',
						title: '请输入昵称有误！',
						duration: 1000
					});
				} else {
					uni.request({
						url: this.$Url + '/api/v1/change/user/name', //仅为示例，并非真实接口地址。
						method: 'POST',
						data: {
							token: uni.getStorageSync('token'),
							username: this.userName
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: (res) => {
							if (res.data.code == 200) {
								uni.showToast({
									title: res.data.msg,
									duration: 1000
								});
							} else {
								uni.showToast({
									icon: 'none',
									title: res.data.msg,
									duration: 1000
								});
							}
						},
					})
				}
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

	.form_box {
		display: block;
		width: 100%;
		padding: 32rpx 40rpx;
		box-sizing: border-box;
	}

	.form_item {
		display: flex;
		width: 100%;
		height: 100rpx;
		background: #ffffff;
		align-items: center;
	}

	.uni_input {
		flex: 1 1 auto;
		width: 100%;
		height: 100rpx;
		padding: 0 13rpx;
		box-sizing: border-box;
	}

	.input_clear {
		flex: 0 0 auto;
		width: 28rpx;
		height: 28rpx;
		background: url(../../../static/images/icon/clear.png) no-repeat center;
		background-size: 28rpx 28rpx;
		padding: 25rpx;
	}

	.form_hit {
		color: #b3b3b3;
		font-size: 24rpx;
		line-height: 1;
		margin: 24rpx 0 72rpx;
	}

	.form_btn {
		width: 100%;
		height: 90rpx;
		background-color: #3860ff;
		border-radius: 45rpx;
		color: #ffffff;
	}
</style>
