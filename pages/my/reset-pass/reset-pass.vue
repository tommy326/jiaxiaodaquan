<template>
	<view>
		<view class="login_wrap">
			<form @submit="formSubmit">
				<view class="form_item">
					<input type="number" class="form_input" name='tel' :value="tel" placeholder="输入手机号" placeholder-class="pla_class"
					 @input="tapTel" />
					<view class="input_clear" v-if="telIcon" @click="clearTelIcon"></view>
				</view>
				<view class="form_item">
					<input type="number" class="form_input" name='code' :value="code" placeholder="输入验证码" placeholder-class="pla_class"
					 @input="tapCode" />
					<view class="input_clear" v-if="codeIcon" @click="clearCodeIcon"></view>
					<button type="default" :disabled="disabled" class="input_code" :style="disabled?'':'color: #317ceb!important;'"
					 @click="gainCode">{{btnData}}</button>
				</view>
				<view class="form_item">
					<input type="text" :password='password' name='password' class="form_input" :value="pass" placeholder="输入新密码"
					 placeholder-class="pla_class" @input="tapPass" />
					<view class="input_clear" v-if="passIcon" @click="clearPassIcon"></view>
					<view class="input_see" :class="password?'':'see_on'" @click="tapSee"></view>
				</view>
				<view class="form_item">
					<input type="text" :password='password1' name='password' class="form_input" :value="pass1" placeholder="确认新密码"
					 placeholder-class="pla_class" @input="tapPass1" />
					<view class="input_clear" v-if="passIcon1" @click="clearPassIcon1"></view>
					<view class="input_see" :class="password1?'':'see_on'" @click="tapSee1"></view>
				</view>
				<view class="btn_submit">
					<button type="primary" formType="submit">确认</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tel: '',
				telIcon: false,
				code: '',
				codeIcon: false,
				btnData: '获取验证码',
				disabled: true,
				pass: '',
				passIcon: false,
				password: true,
				pass1: '',
				passIcon1: false,
				password1: true
			}
		},
		methods: {
			tapBack: function(e) {
				uni.navigateBack()
			},
			tapTel: function(e) {
				this.tel = e.target.value;
				if (e.target.value.length > 0) {
					this.telIcon = true;
				} else {
					this.telIcon = false;
				}

				if (e.target.value.length == 11) {
					this.disabled = false
				} else {
					this.disabled = true
				}
			},
			clearTelIcon: function() {
				this.tel = '';
				this.telIcon = false;
				this.disabled = true
			},
			tapCode: function(e) {
				this.code = e.target.value;
				if (e.target.value.length > 0) {
					this.codeIcon = true;
				} else {
					this.codeIcon = false;
				}
			},
			clearCodeIcon: function() {
				this.code = '';
				this.codeIcon = false;
			},
			countdown: function(time) {
				let that = this;
				if (time == 0) {
					that.btnData = '获取验证码'
					that.disabled = false
				} else {
					time--
					that.btnData = time + 's后获取'
					that.disabled = true
					setTimeout(function() {
						that.countdown(time)
					}, 1000)
				}
			},
			gainCode: function() {
				if (/^(13[0-9]|14[5|6|7]|15[0|1|2|3|5|6|7|8|9]|166|17[0|1|3|5|6|7]|18[0-9]|19[8|9])\d{8}$/.test(this.tel)) {

					uni.request({
						url: this.$Url + '/api/sms?mobile=' + this.tel,
						method: 'GET',
						data: {},
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: (res) => {
							if (res.statusCode == 200) {
								this.countdown(60)
								this.disabled = true
								uni.showToast({
									title: '发送成功',
									duration: 1000
								});
							} else {
								uni.showToast({
									icon: 'none',
									title: '网络不给力，请稍后重试',
									duration: 1000
								});
							}
						}
					});
				} else {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号码',
						duration: 1000
					});
				}
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
			tapPass1: function(e) {
				this.pass1 = e.target.value;
				if (e.target.value.length > 0) {
					this.passIcon1 = true;
				} else {
					this.passIcon1 = false;
				}
			},
			clearPassIcon1: function() {
				this.pass1 = '';
				this.passIcon1 = false;
			},
			tapSee1: function(e) {
				this.password1 = !this.password1;
			},
			formSubmit: function(e) {
				if (this.tel.length < 1) {
					uni.showToast({
						icon: 'none',
						title: '请输入手机号码',
						duration: 1000
					});
				} else if (this.code.length < 1) {
					uni.showToast({
						icon: 'none',
						title: '请输入手机验证码',
						duration: 1000
					});
				} else if (this.pass.length < 1) {
					uni.showToast({
						icon: 'none',
						title: '请输入新密码',
						duration: 1000
					});
				} else if (this.pass1.length < 1) {
					uni.showToast({
						icon: 'none',
						title: '确认新密码',
						duration: 1000
					});
				} else if (this.pass != this.pass1) {
					uni.showToast({
						icon: 'none',
						title: '两次输入密码不一样',
						duration: 1000
					});
				} else {
					uni.request({
						url: this.$Url + '/api/check',
						method: 'POST',
						data: {
							mobile: this.tel,
							code: this.code
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: (res) => {
							if (res.data.status_code == 200) {
								uni.request({
									url: this.$Url + '/api/retrieve',
									method: 'POST',
									data: {
										phone: this.tel,
										password: this.pass1
									},
									header: {
										'content-type': 'application/x-www-form-urlencoded'
									},
									success: (res) => {
										if (res.data.code == 200) {
											uni.showToast({
												title: '密码重置成功！',
												duration: 1000
											});
											setTimeout(() => {
												uni.navigateTo({
													url: '../../login/login'
												});
											}, 1000)
										} else {
											uni.showToast({
												icon: 'none',
												title: '网络不给力，请稍后重试',
												duration: 1000
											});
										}
									}
								});

							} else {
								uni.showToast({
									icon: 'none',
									title: res.data.msg,
									duration: 1000
								});
							}
						}
					});

				}
			}
		}
	}
</script>

<style>
	.login_wrap {
		display: block;
		width: 100%;
		padding: 32rpx 60rpx;
		box-sizing: border-box;
	}

	.form_item {
		display: flex;
		width: 100%;
		height: 98rpx;
		border-bottom: 1px solid rgba(0, 0, 0, 0.06);
		align-items: center;
		margin-bottom: 32rpx;
	}

	.pla_class {
		color: #929292;
	}

	.form_input {
		flex: 1 1 auto;
		font-size: 30rpx;
		color: #262626;
	}

	.input_clear {
		flex: 0 0 auto;
		width: 40rpx;
		height: 40rpx;
		background: url(../../../static/images/icon/clear.png) no-repeat center;
		background-size: 28rpx 28rpx;
		margin: 0 16rpx;
	}

	.input_see {
		flex: 0 0 auto;
		width: 40rpx;
		height: 40rpx;
		margin: 0 16rpx;
		background: url(../../../static/images/icon/see-off.png) no-repeat center;
		background-size: 28rpx 21rpx;
	}

	.see_on {
		background: url(../../../static/images/icon/see-on.png) no-repeat center;
		background-size: 28rpx 21rpx;
	}

	.input_code {
		flex: 0 0 auto;
		width: 160rpx;
		text-align: center;
		font-size: 30rpx;
		color: #317ceb;
		margin: 0 16rpx;
		padding: 0;
		line-height: 0;
		border-radius: 0;
		overflow: inherit;
		background: #ffffff;
	}


	.input_code:after {
		display: none;
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
		margin-top: 80rpx;
	}
</style>
