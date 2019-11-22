<template>
	<view v-if="show" class="mask" @click="toggleMask" @touchmove.stop.prevent="stopPrevent" :style="{backgroundColor: backgroundColor}">
		<view class="mask-content" @click.stop.prevent="stopPrevent" :style="[{
				height: config.height, 
				transform: transform
			}]">
			<scroll-view class="view-content" scroll-y>
				<view class="share-header">
					分享到
				</view>
				<view class="share-list">
					<view v-for="(item, index) in shareList" :key="index" class="share-item" @click="shareToFriend(item.text)">
						<image :src="item.icon" mode=""></image>
						<text>{{item.text}}</text>
					</view>
				</view>
			</scroll-view>
			<view class="bottom b-t" @click="toggleMask">取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shareList: [{
						type: 1,
						icon: '../../../static/images/share/wechatfriend.png',
						text: '微信好友'
					},
					{
						type: 2,
						icon: '../../../static/images/share/wechatmoments.png',
						text: '朋友圈'
					}
				],
				transform: 'translateY(50vh)',
				timer: 0,
				backgroundColor: 'rgba(0,0,0,0)',
				show: false,
				config: {},
			};
		},
		props: {
			contentHeight: {
				type: Number,
				default: 0
			},
			//是否是tabbar页面
			hasTabbar: {
				type: Boolean,
				default: false
			},
			shareHref: {
				type: String,
				default: 'http://dev.baiche.com.cn/h5/'
			},
			shareTitle: {
				type: String,
				default: '百车网'
			},
			shareSummary: {
				type: String,
				default: '百车网_选车、导购、互动、新闻、测评，关注最专业的我们'
			},
			shareImageUrl: {
				type: String,
				default: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png'
			}
		},
		created() {
			const height = uni.upx2px(this.contentHeight) + 'px';
			this.config = {
				height: height,
				transform: `translateY(${height})`,
				backgroundColor: 'rgba(0,0,0,.4)',
			}
			this.transform = this.config.transform;
		},
		methods: {
			toggleMask() {
				//防止高频点击
				if (this.timer == 1) {
					return;
				}
				this.timer = 1;
				setTimeout(() => {
					this.timer = 0;
				}, 500)

				if (this.show) {
					this.transform = this.config.transform;
					this.backgroundColor = 'rgba(0,0,0,0)';
					setTimeout(() => {
						this.show = false;
						this.hasTabbar && uni.showTabBar();
					}, 200)
					return;
				}

				this.show = true;
				//等待mask重绘完成执行
				if (this.hasTabbar) {
					uni.hideTabBar({
						success: () => {
							setTimeout(() => {
								this.backgroundColor = this.config.backgroundColor;
								this.transform = 'translateY(0px)';
							}, 10)
						}
					});
				} else {
					setTimeout(() => {
						this.backgroundColor = this.config.backgroundColor;
						this.transform = 'translateY(0px)';
					}, 10)
				}
			},
			//防止冒泡和滚动穿透
			stopPrevent() {},
			//分享操作
			shareToFriend: function(e) {
				if (e == '微信好友') {
					uni.share({
						provider: "weixin",
						scene: "WXSceneSession",
						type: 0,
						href: this.shareHref,
						title: this.shareTitle,
						summary: this.shareSummary,
						imageUrl: this.shareImageUrl,
						success: function(res) {
							console.log("success:" + JSON.stringify(res));
						},
						fail: function(err) {
							console.log("fail:" + JSON.stringify(err));
						}
					});
				} else if (e == '朋友圈') {
					uni.share({
						provider: "weixin",
						scene: "WXSenceTimeline",
						type: 0,
						href: this.shareHref,
						title: this.shareTitle,
						summary: this.shareSummary,
						imageUrl: this.shareImageUrl,
						success: function(res) {
							console.log("success:" + JSON.stringify(res));
						},
						fail: function(err) {
							console.log("fail:" + JSON.stringify(err));
						}
					});
				} else if (e == 'QQ好友') {
					uni.share({
						provider: "qq",
						type: 3,
						href: this.shareHref,
						title: this.shareTitle,
						summary: this.shareSummary,
						imageUrl: this.shareImageUrl,
						success: function(res) {
							console.log("success:" + JSON.stringify(res));
						},
						fail: function(err) {
							console.log("fail:" + JSON.stringify(err));
						}
					});
				} else if (e == '新浪微博') {
					uni.share({
						provider: "sinaweibo",
						type: 0,
						href: this.shareHref,
						title: this.shareTitle,
						summary: this.shareSummary,
						imageUrl: this.shareImageUrl,
						success: function(res) {
							console.log("success:" + JSON.stringify(res));
						},
						fail: function(err) {
							console.log("fail:" + JSON.stringify(err));
						}
					});
				}

				this.toggleMask();
			},
		}
	}
</script>

<style lang='scss'>
	.mask {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		z-index: 998;
		transition: .3s;

		.bottom {
			position: absolute;
			left: 0;
			bottom: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 112upx;
			background: #fff;
			z-index: 9;
			font-size: 36upx;
			color: #292929;
		}
	}

	.mask-content {
		width: 100%;
		height: 580upx;
		transition: .3s;
		background: #fff;

		&.has-bottom {
			padding-bottom: 90upx;
		}

		.view-content {
			height: 100%;
		}
	}

	.share-header {
		height: 110upx;
		font-size: 30rpx;
		color: font-color-dark;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 10upx;

		&:before,
		&:after {
			content: '';
			width: 240upx;
			heighg: 0;
			border-top: 1px solid #929292;
			transform: scaleY(.5);
			margin-right: 30upx;
		}

		&:after {
			margin-left: 32upx;
			letter-spacing: 1px;
			color: #090d16;
			margin-right: 0;
		}
	}

	.share-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0 40upx;
		box-sizing: border-box
	}

	.share-item {
		min-width: 25%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 180upx;

		image {
			width: 80upx;
			height: 80upx;
			margin-bottom: 16upx;
		}

		text {
			font-size: 30rpx;
			color: #929292;
		}
	}
</style>
