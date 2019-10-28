<template>
	<view>
		<view class="title">
			快捷注册
		</view>
		<view class="login_wrap">
			<form @submit="formSubmit">
				<view class="form_item">
					<input type="number" class="form_input" name='tel' :value="tel" placeholder="输入手机号" placeholder-class="pla_class" @input="tapTel" />
					<view class="input_clear" v-if="telIcon" @click="clearTelIcon"></view>
				</view>
				<view class="form_item">
					<input type="number" class="form_input" name='code' :value="code" placeholder="输入动态密码" placeholder-class="pla_class" @input="tapCode" />
					<view class="input_clear" v-if="codeIcon" @click="clearCodeIcon"></view>
					<button type="default" :disabled="disabled" class="input_code" :style="disabled?'':'color: #317ceb!important;'" @click="gainCode">{{btnData}}</button>
				</view>
				<view class="form_item">
					<input type="text" :password='password' name='password' class="form_input" :value="pass" placeholder="输入密码"
					 placeholder-class="pla_class" @input="tapPass" />
					<view class="input_clear" v-if="passIcon" @click="clearPassIcon"></view>
					<view class="input_see" :class="password?'':'see_on'" @click="tapSee"></view>
				</view>
				<view class="state">
					未注册将为您创建账号并视为同意<navigator url="../privacy-statement/privacy-statement" hover-class="none" class="link">网络服务协议</navigator>和<navigator url="../privacy-statement/privacy-statement" hover-class="none"
					 class="link">隐私政策</navigator>
				</view>
				<view class="btn_submit">
					<button type="primary" formType="submit">注册</button>
				</view>
			</form>
			<navigator url="../login/login" class="btn_link" hover-class="none">
				<view class="text">
					账号登录
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
				tel: '',
				telIcon: false,
				code: '',
				codeIcon: false,
				btnData: '获取验证码',
				disabled: true,
				pass: '',
				passIcon: false,
				password: true
			}
		},
		methods: {
			tapBack:function(e){
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
					this.countdown(60)
					this.disabled = true
					uni.showToast({
						title: '发送成功',
						duration: 1000
					});
					uni.request({
						url: this.$Url+'/api/user/register?mobile='+this.tel,
						method: 'GET',
						data: {},
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: (res) => {
							
						}
					});
				} else {
					uni.showToast({
						icon:'none',
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
			formSubmit: function(e) {
				if(this.tel.length < 1){
					uni.showToast({
						icon:'none',
						title: '请输入手机号码',
						duration: 1000
					});
				}else if(this.code.length < 1){
					uni.showToast({
						icon:'none',
						title: '请输入输入动态密码',
						duration: 1000
					});
				}else if (this.pass.length < 1) {
					uni.showToast({
						icon: 'none',
						title: '请输入密码',
						duration: 1000
					});
				}else{
					uni.request({
						url: 'https://m.baiche.com.cn/v1/check',
						method: 'POST',
						data: {
							mobile:this.tel,
							code:this.code
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: (res) => {
							if(res.data.status_code == 200){
								uni.request({
									url: 'https://m.baiche.com.cn/v1/register',
									method: 'POST',
									data: {
										mobile:this.tel,
										password:this.pass
									},
									header: {
										'content-type': 'application/x-www-form-urlencoded'
									},
									success: (res) => {
										if(res.data.status_code == 200){
											uni.showToast({
												title: res.data.msg,
												duration: 1000
											});
											uni.navigateBack() 
										}else{
											uni.showToast({
												icon: 'none',
												title: res.data.msg,
												duration: 1000
											});
										}
									}
								});
							
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
	.back{
		display: flex;
		width: 100%;
		height: 80rpx;
	}
	
	.back .btn{
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
		width: 40rpx;
		height: 40rpx;
		background: url(../../static/images/icon/clear.png) no-repeat center;
		background-size: 28rpx 28rpx;
		margin: 0 16rpx;
	}
	
	.input_see {
		flex: 0 0 auto;
		width: 40rpx;
		height: 40rpx;
		margin: 0 16rpx;
		background: url(../../static/images/icon/see-off.png) no-repeat center;
		background-size: 28rpx 21rpx;
	}
	
	.see_on {
		background: url(../../static/images/icon/see-on.png) no-repeat center;
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

	.state {
		display: flex;
		font-size: 24rpx;
		color: #949494;
		margin: 22rpx 0 74rpx;
	}

	.link {
		flex: 0 0 auto;
		color: #262626;
		text-decoration: underline;
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

	.textColor {
		color: #317ceb;
	}
	
</style>

