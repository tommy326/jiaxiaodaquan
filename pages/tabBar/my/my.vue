<template>
	<view>
		<!-- #ifdef APP-PLUS -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- #endif -->
		<view class="top_line"></view>
		<!-- 用户信息 -->
		<view class="user_box">
			<image :src="userAvatar" class="user_photo" @click="tapLogin" mode=""></image>
			<view class="user_info">
				<view class="user_name" @click="tapLogin">
					{{userName}}
				</view>
				<text class="user_tag">
					开通会员
				</text>
			</view>
		</view>
		<!-- 金刚区 -->
		<view class="column_list">
			<block v-for="(item,idx) in columnData" :key='idx'>
				<view class="item" @click="tapNav" :data-idx='idx'>
					<image :src="'../../../static/images/mine/'+item.src+'.png'" class="img" mode=""></image>
					<text class="text">{{item.title}}</text>
				</view>
			</block>
		</view>
		<view class="line"></view>
		<!-- 设置列表 -->
		<view class="setting_list set_one">
			<block v-for="(item,index) in setData" :key='index' v-if="index < 3">
				<view class="item" :data-idx='index' @click="tapJump">
					<view class="photo_wrap"></view>
					<view class="text">
						{{item}}
					</view>
				</view>
			</block>
		</view>
		<view class="line"></view>
		<view class="setting_list set_two">
			<block v-for="(item,index) in setData" :key='index' v-if="index > 2">
				<view class="item" :data-idx='index' @click="tapJump">
					<view class="photo_wrap"></view>
					<view class="text">
						{{item}}
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: '请登录',
				userAvatar: 'http://iph.href.lu/120x120?text=头像',
				columnData: [{
					src: 'wdct',
					title: '我的错题'
				}, {
					src: 'plfw',
					title: '陪练服务'
				}, {
					src: 'wdcj',
					title: '我的成绩'
				}, {
					src: 'qhtk',
					title: '切换题库'
				}, ],
				setData: ['我的发表', '我的订单', '题库设置', '收藏', '浏览记录', '设置']
			}
		},
		onLoad: function() {
			console.log('onLoad');
		},
		onShow: function() {
			if (uni.getStorageSync('logon_status') == 0) {
				this.userName = '请登录'
				this.userAvatar = 'http://iph.href.lu/120x120?text=头像'
			} else if (uni.getStorageSync('logon_status') == 1) {
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
							this.userAvatar = res.data.data.avatar == null?'http://iph.href.lu/120x120?text=头像':res.data.data.avatar
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
			tapLogin: function(e) {
				uni.navigateTo({
					url: '../../login/login?form=1'
				});
			},
			tapNav: function(e) {
				let idx = e.currentTarget.dataset.idx
				if (uni.getStorageSync('logon_status') == 1) {
					if (idx == 0) {
						uni.navigateTo({
							url: '../../my/My-mistake/My-mistake'
						});
					} else if (idx == 1) {
						uni.navigateTo({
							url: '../../signUp/Partner-service/Partner-service'
						});
					} else if (idx == 2) {
						uni.navigateTo({
							url: '../../my/My-grades/My-grades'
						});
					} else if (idx == 3) {
						uni.navigateTo({
							url: '../../my/Item-bank-selection/Item-bank-selection'
						});
					}
				} else {
					uni.navigateTo({
						url: '../../login/login?form=1'
					});
				}

			},
			tapJump: function(e) {
				let idx = e.currentTarget.dataset.idx
				if (uni.getStorageSync('logon_status') == 1) {
					if (idx == 5) {
						uni.setStorageSync('userData', '');
						uni.setStorageSync('logon_status', 0);
						uni.setStorageSync('token', 0);
						this.userName = '请登录'
						this.userAvatar = 'http://iph.href.lu/120x120?text=头像'
					}
				} else {
					uni.navigateTo({
						url: '../../login/login?form=1'
					});
				}

			}
		}
	}
</script>

<style>
	.top_line {
		display: block;
		width: 100%;
		height: 40rpx;
	}

	.user_box {
		display: flex;
		width: 100%;
		height: 120rpx;
		align-items: center;
		padding: 0 32rpx;
		box-sizing: border-box;
	}

	.user_box .user_photo {
		flex: 0 0 auto;
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		margin-right: 27rpx;
	}

	.user_box .user_info {
		flex: 1 1 auto;
	}

	.user_box .user_info .user_name {
		color: #333333;
		font-size: 32rpx;
		line-height: 1;
	}

	.user_box .user_info .user_tag {
		display: inline-block;
		width: auto;
		height: 40rpx;
		background-color: #f2f2f2;
		border-radius: 20rpx;
		text-align: center;
		line-height: 40rpx;
		color: #919191;
		font-size: 18rpx;
		padding: 0 20rpx;
		margin-top: 16rpx;
	}

	.column_list {
		display: flex;
		width: 100%;
		padding: 60rpx 30rpx 44rpx;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}

	.column_list .item {
		flex: 0 0 auto;
		width: 132rpx;
		height: 156rpx;
		position: relative;
		padding-top: 20rpx;
		box-sizing: border-box;
	}

	.column_list .item .img {
		display: block;
		width: 52rpx;
		height: 52rpx;
		margin: 0 auto;
	}

	.column_list .item:nth-child(1) .img {
		width: 46rpx;
		height: 50rpx;
	}

	.column_list .item .text {
		display: block;
		width: 100%;
		text-align: center;
		font-size: 28rpx;
		color: #666666;
		position: absolute;
		left: 0;
		bottom: 20rpx;
	}

	.line {
		display: block;
		width: 100%;
		height: 16rpx;
		background-color: #f8f8f8;
	}

	.setting_list {
		display: block;
		width: 100%;
		padding-bottom: 40rpx;
	}

	.setting_list .item {
		display: flex;
		width: 100%;
		height: 120rpx;
		background: url(../../../static/images/mine/icon-more-3.png) no-repeat right 40rpx center;
		background-size: 14rpx 24rpx;
		align-items: center;
		position: relative;
		padding-right: 32rpx;
		padding-left: 36rpx;
		box-sizing: border-box;
	}

	.setting_list .item .photo_wrap {
		flex: 0 0 auto;
		width: 74rpx;
		height: 120rpx;
	}

	.set_one .item:nth-child(1) .photo_wrap {
		background: url(../../../static/images/mine/wdfb.png) no-repeat left center;
		background-size: 32rpx 40rpx;
	}

	.set_one .item:nth-child(2) .photo_wrap {
		background: url(../../../static/images/mine/wddd.png) no-repeat left center;
		background-size: 32rpx 40rpx;
	}

	.set_one .item:nth-child(3) .photo_wrap {
		background: url(../../../static/images/mine/tksz.png) no-repeat left center;
		background-size: 32rpx 34rpx;
	}

	.set_two .item:nth-child(1) .photo_wrap {
		background: url(../../../static/images/mine/sc.png) no-repeat left center;
		background-size: 38rpx 36rpx;
	}

	.set_two .item:nth-child(2) .photo_wrap {
		background: url(../../../static/images/mine/lljl.png) no-repeat left center;
		background-size: 38rpx 40rpx;
	}

	.set_two .item:nth-child(3) .photo_wrap {
		background: url(../../../static/images/mine/sz.png) no-repeat left center;
		background-size: 36rpx 36rpx;
	}

	.setting_list .item .text {
		flex: 1 1 auto;
		height: 120rpx;
		line-height: 120rpx;
		color: #2b2b2b;
		font-size: 32rpx;
		border-bottom: 2rpx solid rgba(0, 0, 0, 0.08);
	}

	.set_two {
		padding-bottom: 10rpx;
	}
</style>
