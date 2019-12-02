<template>
	<view>
		<view class="login_wrap">
			<form @submit="formSubmit">
				<view class="form_item">
					<input type="text" :password='password' name='password' class="form_input" :value="pass" placeholder="输入旧密码" placeholder-class="pla_class" @input="tapPass" />
					<view class="input_clear" v-if="passIcon" @click="clearPassIcon"></view>
					<view class="input_see" :class="password?'':'see_on'" @click="tapSee"></view>
				</view>
				<view class="form_item">
					<input type="text" :password='password1' name='password' class="form_input" :value="pass1" placeholder="输入新密码" placeholder-class="pla_class" @input="tapPass1" />
					<view class="input_clear" v-if="passIcon1" @click="clearPassIcon1"></view>
					<view class="input_see" :class="password1?'':'see_on'" @click="tapSee1"></view>
				</view>
				<view class="form_item">
					<input type="text" :password='password2' name='password' class="form_input" :value="pass2" placeholder="请确认密码" placeholder-class="pla_class" @input="tapPass2" />
					<view class="input_clear" v-if="passIcon2" @click="clearPassIcon2"></view>
					<view class="input_see" :class="password2?'':'see_on'" @click="tapSee2"></view>
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
				pass: '',
				passIcon: false,
				password: true,
				pass1: '',
				passIcon1: false,
				password1: true,
				pass2: '',
				passIcon2: false,
				password2: true
			}
		},
		methods: {
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
			tapPass2: function(e) {
				this.pass2 = e.target.value;
				if (e.target.value.length > 0) {
					this.passIcon2 = true;
				} else {
					this.passIcon2 = false;
				}
			},
			clearPassIcon2: function() {
				this.pass2 = '';
				this.passIcon2 = false;
			},
			tapSee2: function(e) {
				this.password2 = !this.password2;
			},
			formSubmit: function(e) {
				if(this.pass.length < 1){
					uni.showToast({
						icon:'none',
						title: '请输入旧密码',
						duration: 1000
					});
				}else if(this.pass1.length < 1){
					uni.showToast({
						icon:'none',
						title: '请输入新密码',
						duration: 1000
					});
				}else if (this.pass2.length < 1) {
					uni.showToast({
						icon: 'none',
						title: '请确认密码',
						duration: 1000
					});
				}else if (this.pass1 != this.pass2) {
					uni.showToast({
						icon: 'none',
						title: '两次新密码不一样',
						duration: 1000
					});
				}else{
					
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
		margin-top: 70rpx;
	}

</style>
