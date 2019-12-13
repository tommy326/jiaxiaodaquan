<template>
	<view class="main_container">
		<view class="form_box">
			<form @submit="formSubmit">
				<view class="form_item">
					<text class="oldTel">{{oldTel}}</text>
				</view>
				<view class="form_item">
					<input type="number" class="uni_input" :value="code" placeholder="输入动态密码" placeholder-class="pla_class" @input="tapCode" />
					<view class="input_clear" v-if="codeIcon" @click="clearCodeIcon"></view>
					<button type="default" :disabled="disabled" class="input_code" :style="disabled?'':'color: #317ceb!important;'"
					 @click="gainCode">{{btnData}}</button>
				</view>
				<view class="form_item">
					<input class="uni_input" :value="userTel" placeholder="请输入新手机号" placeholder-class="pla_class" @input="tapUser" />
					<view class="input_clear" v-if="TelIcon" @click="clearUserIcon"></view>
				</view>
				<button form-type="submit" class="form_btn" :disabled="formBtn">确认</button>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldTel: '',
				code: '',
				codeIcon: false,
				btnData: '获取验证码',
				disabled: false,
				userTel: '',
				TelIcon: false,
				formBtn: true,
				timer:''
			}
		},
		onLoad: function(options) {
			this.oldTel = options.userTel
		},
		methods: {
			gainCode: function() {
				uni.request({
					url: this.$Url + '/api/sms?mobile=' + uni.getStorageSync('userData').phone,
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
			},
			tapCode: function(e) {
				this.code = e.target.value;
				if (e.target.value.length > 0) {
					this.codeIcon = true;
				} else {
					this.codeIcon = false;
				}
				if (this.code.length == 6 && this.userTel.length == 11) {
					this.formBtn = false
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
					that.timer = setTimeout(function() {
						that.countdown(time)
					}, 1000)
				}
			},
			tapUser: function(e) {
				this.userTel = e.target.value;
				if (e.target.value.length > 0) {
					this.TelIcon = true;
				} else {
					this.TelIcon = false;
				}
				if (this.code.length == 6 && this.userTel.length == 11) {
					this.formBtn = false
				}
			},
			clearUserIcon: function() {
				this.userTel = '';
				this.TelIcon = false;
			},
			formSubmit: function(e) {
				if (this.code.length < 1) {
					uni.showToast({
						icon: 'none',
						title: '请输入昵称！',
						duration: 1000
					});
				} else if (this.userTel.length < 1) {
					uni.showToast({
						icon: 'none',
						title: '请输入新手机号！',
						duration: 1000
					});
				} else if (!(/^[1][3,4,5,7,8][0-9]{9}$/).test(this.userTel)) {
					uni.showToast({
						icon: 'none',
						title: '手机号格式不正确！',
						duration: 1000
					});
				} else {
					uni.request({
						url:  this.$Url+'/api/check',
						method: 'POST',
						data: {
							mobile:uni.getStorageSync('userData').phone,
							code:this.code
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: (res) => {
							if(res.data.status_code == 200){
								uni.request({
									url: this.$Url + '/api/v1/change/user/phone', //仅为示例，并非真实接口地址。
									method: 'POST',
									data: {
										token: uni.getStorageSync('token'),
										phone: this.userTel
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
											this.code = ''
											this.oldTel = this.userTel
											this.userTel = ''
											this.disabled = false
											this.btnData =  '获取验证码'
											clearTimeout(this.timer)
											this.timer = ''
											
										} else {
											uni.showToast({
												icon: 'none',
												title: res.data.msg,
												duration: 1000
											});
										}
									},
								})
							
							}else{
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
		height: 98rpx;
		align-items: center;
		border-bottom: 1px solid rgba(0, 0, 0, 0.06);
		margin-bottom: 32rpx;
		justify-content: space-between;
	}

	.uni_input,
	.oldTel {
		flex: 1 1 auto;
		width: 100%;
		height: 100rpx;
		padding: 0 13rpx;
		box-sizing: border-box;
		line-height: 100rpx;
		font-size: 34rpx;
	}

	.input_clear {
		flex: 0 0 auto;
		width: 28rpx;
		height: 28rpx;
		background: url(../../../static/images/icon/clear.png) no-repeat center;
		background-size: 28rpx 28rpx;
		padding: 25rpx;
	}

	.input_code {
		flex: 0 0 auto;
		width: 160rpx;
		height: 98rpx;
		padding: 0;
		margin: 0;
		line-height: 98rpx;
		text-align: center;
		font-size: 28rpx;
	}

	.input_code[disabled]:not([type]),
	.input_code[disabled][type=default] {
		color: #b2b2b2;
	}

	.form_btn {
		width: 100%;
		height: 90rpx;
		background-color: #3860ff;
		border-radius: 45rpx;
		color: #ffffff;
		font-size: 36rpx;
		margin-top: 104rpx;
	}

	.form_btn[disabled]:not([type]),
	.form_btn[disabled][type=default] {
		background-color: #ececec;
		color: #9f9f9f;
	}

	.form_btn:after,
	.input_code:after {
		display: none !important;
	}
</style>
