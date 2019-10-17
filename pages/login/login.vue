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
				user: '',
				userIcon: false,
				pass: '',
				passIcon: false,
				password: true
			}
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
					url: 'https://m.baiche.com.cn/v1/login', //仅为示例，并非真实接口地址。
					method: 'POST',
					data: {
						mobile: this.user,
						password: this.pass
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						if (res.data.status_code == 200) {
							uni.setStorageSync('userinfo', res.data.data.user_info)
							uni.setStorageSync('token', res.data.data.access_token)
							uni.setStorageSync('login_time', Math.round(new Date() / 1000) + 604800)
							uni.showToast({
								title: '登录成功',
								duration: 1000,
							});
							setTimeout(function(){
								uni.switchTab({
									url: '../my/my'
								})
							}, 1000)

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
</script>

<style>
	.back {
		display: flex;
		width: 100%;
		height: 80upx;
	}

	.back .btn {
		flex: 0 0auto;
		width: 80upx;
		height: 80upx;
		background: url(../../static/images/icon/back.png) no-repeat center;
		background-size: 31upx 31upx;
		margin-left: 20upx;
	}

	.title {
		display: block;
		font-size: 64upx;
		padding: 60upx 60upx 40upx;
		letter-spacing: 2px;
		line-height: 1;
		color: #1f1f1f;
	}

	.login_wrap {
		display: block;
		width: 100%;
		padding: 0 60upx;
		box-sizing: border-box;
	}

	.form_item {
		display: flex;
		width: 100%;
		height: 92upx;
		border-bottom: 1px solid rgba(0, 0, 0, 0.06);
		align-items: center;
		margin-top: 28px;
	}

	.pla_class {
		color: #262626;
	}

	.form_input {
		flex: 1 1 auto;
		font-size: 30upx;
		color: #262626;
	}

	.input_clear {
		flex: 0 0 auto;
		width: 30upx;
		height: 40upx;
		background: url(../../static/images/icon/clear.png) no-repeat center;
		background-size: 28upx 28upx;
		margin: 0 16upx;
	}

	.input_see {
		flex: 0 0 auto;
		width: 30upx;
		height: 40upx;
		margin: 0 16upx;
		background: url(../../static/images/icon/see-off.png) no-repeat center;
		background-size: 28upx 21upx;
	}

	.see_on {
		background: url(../../static/images/icon/see-on.png) no-repeat center;
		background-size: 28upx 21upx;
	}

	.forget {
		display: flex;
		font-size: 28upx;
		color: #949494;
		margin: 22upx 0 74upx;
		justify-content: flex-end;
	}

	.link {
		flex: 0 0 auto;
		color: #acacac;
	}

	.btn_submit button {
		display: flex;
		height: 90upx;
		background-color: #1c76ee;
		box-shadow: 0px 4upx 16upx 0px rgba(0, 0, 0, 0.12),
			inset 0px 1upx 1upx 0px rgba(255, 255, 255, 0.2);
		border-radius: 45upx;
		align-items: center;
		justify-content: center;
		font-size: 36upx;
	}

	.btn_link {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 55upx;
	}

	.btn_link .text {
		flex: 0 0 auto;
		font-size: 32upx;
		color: #262626;
		letter-spacing: 1px;
	}

	.pic {
		flex: 0 0 auto;
		width: 9upx;
		height: 20upx;
		margin-left: 12upx;
	}
</style>
