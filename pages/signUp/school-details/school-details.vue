<template>
	<view>
		<view class="content_box">
			<view class="photo_box">
				<image src="http://iph.href.lu/750x404?text=750x404&fg=666666&bg=cccccc" mode="" class="school_photo"></image>
				<view class="photo_num">1/80</view>
			</view>
			<view class="school_box">
				<view class="school_name">
					五星五号驾校
				</view>
				<view class="label_list">
					<view class="item">
						拿本快
					</view>
					<view class="item">
						有接送
					</view>
					<view class="item">
						自由考场
					</view>
				</view>
				<view class="introduce">
					<image src="../../../static/images/icon/icon-stars-1.png" class="stars" mode=""></image>
					<image src="../../../static/images/icon/icon-stars-1.png" class="stars" mode=""></image>
					<image src="../../../static/images/icon/icon-stars-1.png" class="stars" mode=""></image>
					<image src="../../../static/images/icon/icon-stars-1.png" class="stars" mode=""></image>
					<image src="../../../static/images/icon/icon-stars-1.png" class="stars" mode=""></image>
					<view class="score">5.0分 <text class="b">(1023人评）</text></view>
					<view class="price">￥2100</view>
					<view class="class">C1班</view>
				</view>
				<navigator url="" class="address" hover-class="none">武昌区武汉大道东湖国贸中心内距您步...</navigator>
			</view>
			<view class="tabs_box">
				<view class="item">
					班型
				</view>
				<view class="item">
					教练
				</view>
				<view class="item">
					场地
				</view>
				<view class="item">
					评价
					<text>2425</text>
				</view>
			</view>
			<view class="tabs_content">

			</view>
		</view>
		<view class="footer_box">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad: function(options) {
			console.log(options.id);
			//驾校信息
			uni.request({
				url: this.$Url + '/api/school/details?id=' + options.id,
				method: 'GET',
				data: {},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log(res.data)
					} else {
						uni.showToast({
							icon: 'none',
							title: '网络不给力，请稍后重试',
							duration: 2000
						});
					}
				}
			});
		},
		onNavigationBarButtonTap: function(e) {
			if (e.type == 'menu') {
				uni.showActionSheet({
					title: '',
					itemList: ['纠错', '转照片', '评价', '绑定驾校', '浏览记录', '分享'],
					success: (e) => {
						uni.showToast({
							title: "点击了第" + e.tapIndex + "个选项",
							icon: "none"
						})
					}
				})
			}
		},
		methods: {

		}
	}
</script>

<style>
	.photo_box {
		display: block;
		width: 100%;
		height: 404upx;
		position: relative;
		overflow: hidden;
	}

	.photo_box .school_photo {
		display: block;
		width: 100%;
	}

	.photo_box .photo_num {
		position: absolute;
		right: 50upx;
		top: 300upx;
		z-index: 9;
		color: #ffffff;
		font-size: 30upx
	}

	.school_box {
		display: block;
		width: 100%;
		background-color: #ffffff;
		border-radius: 40upx 40upx 0 0;
		position: relative;
		margin-top: -40upx;
		padding: 40upx 30upx;
		box-sizing: border-box;
		border-bottom: 2upx solid rgba(0,0,0,0.08);
	}

	.school_box .school_name {
		color: #3860ff;
		font-size: 40upx;
		font-weight: bold;
	}

	.school_box .label_list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 20upx;
	}

	.school_box .label_list .item {
		flex: 0 0 auto;
		height: 40upx;
		background-color: #e8f1fd;
		border-radius: 2upx;
		padding: 0 12upx;
		line-height: 40upx;
		color: #3860ff;
		font-size: 26upx;
		margin-right: 16upx;
	}

	.school_box .introduce {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 28upx;
		font-size: 26upx;
		line-height: 1;
	}

	.school_box .introduce .stars {
		flex: 0 0 auto;
		width: 23upx;
		height: 22upx;
		margin-right: 10upx;
	}

	.school_box .introduce .score {
		color: #333333;
		margin-left: 12upx;
	}

	.school_box .introduce .score b {
		color: #666666;
	}

	.school_box .introduce .price {
		color: #666666;
		margin-left: 72upx;
	}

	.school_box .introduce .class {
		color: #666666;
		margin-left: 18upx;
	}

	.school_box .address {
		display: block;
		width: 542upx;
		font-size: 28upx;
		color: #333333;
		padding-right: 30upx;
		background: url(../../../static/images/icon/icon-more.png) no-repeat right center;
		background-size: 11upx;
		margin-top: 28upx;
		line-height: 1;
	}
</style>
