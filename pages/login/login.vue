<template>
	<view>
		<view class="title">
			账号密码登录
		</view>
		<view class="login_wrap">
			<form @submit="formSubmit">
				<view class="form_item">
					<input type="text" class="form_input" name='user' :value="user" placeholder="输入用户名/手机号" placeholder-class="pla_class"
					 @input="tapUser" />
					<view class="input_clear" v-if="userIcon" @click="clearUserIcon"></view>
				</view>
				<view class="form_item">
					<input type="text" :password='password' name='password' class="form_input" :value="pass" placeholder="输入密码"
					 placeholder-class="pla_class" @input="tapPass" />
					<view class="input_clear" v-if="passIcon" @click="clearPassIcon"></view>
					<view class="input_see" :class="password?'':'see_on'" @click="tapSee"></view>
				</view>
				<view class="forget">
					<navigator url="../forget-password/forget-password" hover-class="none" class="link">忘记密码？</navigator>
				</view>
				<view class="btn_submit">
					<button type="primary" formType="submit">登录</button>
				</view>
			</form>
			<navigator url="../register/register" class="btn_link" hover-class="none">
				<view class="text">
					快捷登录注册
				</view>
				<image src="../../static/images/icon/in.png" class="pic" mode=""></image>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:'',
				user: '',
				userIcon: false,
				pass: '',
				passIcon: false,
				password: true
			}
		},
		onLoad: function(option) {
			this.form = option.form
		},
		methods: {
			tapUser: function(e) {
				this.user = e.target.value;
				if (e.target.value.length > 0) {
					this.userIcon = true;
				} else {
					this.userIcon = false;
				}
			},
			clearUserIcon: function() {
				this.user = '';
				this.userIcon = false;
			},
			tapPass: function(e) {
				this.pass = e.target.value;
				if (e.target.value.length > 0) {
					this.passIcon = true;
				} else {
					this.passIcon = false;
				}
			},
			clearPassIcon: function() {
				this.pass = '';
				this.passIcon = false;
			},
			tapSee: function(e) {
				this.password = !this.password;
			},
			formSubmit: function(e) {
				if (this.user.length < 1) {
					uni.showToast({
						icon: 'none',
						title: '请输入用户名/手机号',
						duration: 1000
					});
				} else if (this.pass.length < 1) {
					uni.showToast({
						icon: 'none',
						title: '请输入密码',
						duration: 1000
					});
				}
				uni.request({
					url: this.$Url + '/api/login', //仅为示例，并非真实接口地址。
					method: 'POST',
					data: {
						phone: this.user,
						password: this.pass
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						if (res.data.code == 200) {
							uni.setStorageSync('logon_status', 1);
							uni.setStorageSync('token', res.data.token);
							uni.request({
								url: this.$Url + '/api/v1/get/user', //仅为示例，并非真实接口地址。
								method: 'POST',
								data: {
									token: res.data.token,
								},
								header: {
									'content-type': 'application/x-www-form-urlencoded'
								},
								success: (res) => {
									if (res.data.code == 200) {
										uni.setStorageSync('userData', res.data.data);
										uni.setStorageSync('cars_mold', res.data.data.style);
									} else {
										uni.showToast({
											icon: 'none',
											title: '网络不给力，请稍后重试',
											duration: 1000
										});
									}
								}
							});
							uni.showToast({
								title: '登录成功',
								duration: 500,
							});
							if(this.form == 0  || this.form == 1){
								uni.switchTab({
									url: '../tabBar/my/my'
								})
							}else if(this.form == 2){
								console.log(2)
								uni.switchTab({
									url: '../tabBar/examination/examination'
								})
							}
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
		}
	}
</script>

<style>
	.back {
		display: flex;
		width: 100%;
		height: 80rpx;
	}

	.back .btn {
		flex: 0 0auto;
		width: 80rpx;
		height: 80rpx;
		background: url(../../static/images/icon/back.png) no-repeat center;
		background-size: 31rpx 31rpx;
		margin-left: 20rpx;
	}

	.title {
		display: block;
		font-size: 64rpx;
		padding: 60rpx 60rpx 40rpx;
		letter-spacing: 2px;
		line-height: 1;
		color: #1f1f1f;
	}

	.login_wrap {
		display: block;
		width: 100%;
		padding: 0 60rpx;
		box-sizing: border-box;
	}

	.form_item {
		display: flex;
		width: 100%;
		height: 92rpx;
		border-bottom: 1px solid rgba(0, 0, 0, 0.06);
		align-items: center;
		margin-top: 28px;
	}

	.pla_class {
		color: #262626;
	}

	.form_input {
		flex: 1 1 auto;
		font-size: 30rpx;
		color: #262626;
	}

	.input_clear {
		flex: 0 0 auto;
		width: 30rpx;
		height: 40rpx;
		background: url(../../static/images/icon/clear.png) no-repeat center;
		background-size: 28rpx 28rpx;
		margin: 0 16rpx;
	}

	.input_see {
		flex: 0 0 auto;
		width: 30rpx;
		height: 40rpx;
		margin: 0 16rpx;
		background: url(../../static/images/icon/see-off.png) no-repeat center;
		background-size: 28rpx 21rpx;
	}

	.see_on {
		background: url(../../static/images/icon/see-on.png) no-repeat center;
		background-size: 28rpx 21rpx;
	}

	.forget {
		display: flex;
		font-size: 28rpx;
		color: #949494;
		margin: 22rpx 0 74rpx;
		justify-content: flex-end;
	}

	.link {
		flex: 0 0 auto;
		color: #acacac;
	}

	.btn_submit button {
		display: flex;
		height: 90rpx;
		background-color: #1c76ee;
		box-shadow: 0px 4rpx 16rpx 0px rgba(0, 0, 0, 0.12),
			inset 0px 1rpx 1rpx 0px rgba(255, 255, 255, 0.2);
		border-radius: 45rpx;
		align-items: center;
		justify-content: center;
		font-size: 36rpx;
	}

	.btn_link {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 55rpx;
	}

	.btn_link .text {
		flex: 0 0 auto;
		font-size: 32rpx;
		color: #262626;
		letter-spacing: 1px;
	}

	.pic {
		flex: 0 0 auto;
		width: 9rpx;
		height: 20rpx;
		margin-left: 12rpx;
	}
</style>
