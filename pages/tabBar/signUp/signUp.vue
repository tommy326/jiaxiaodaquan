<template>
	<view class="uni_container">
		<!-- #ifdef APP-PLUS -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- #endif -->
		<!-- 搜索 -->
		<view class="search_module">
			<view class="search_warp">
				<navigator url="" class="location" hover-class="none">{{city}}</navigator>
				<navigator url="" class="search_input" hover-class="none">请输入关键字</navigator>
			</view>
		</view>

		<!-- 内容 -->
		<view class="main_wrap">
			<!-- 广告位 -->
			<view class="banner_box">
				<!-- banner -->
				<swiper class="swiper" indicator-dots="true" autoplay="true" indicator-active-color="#3860ff">
					<swiper-item>
						<image src="http://iph.href.lu/686x266" class="pic" mode=""></image>
					</swiper-item>
					<swiper-item>
						<image src="http://iph.href.lu/686x266" class="pic" mode=""></image>
					</swiper-item>
					<swiper-item>
						<image src="http://iph.href.lu/686x266" class="pic" mode=""></image>
					</swiper-item>
				</swiper>
			</view>

			<!-- 金刚区 -->
			<view class="column_list">
				<block v-for="(item,idx) in columnData" :key='idx'>
					<navigator :url="item.url" class="item" hover-class="none">
						<image :src="'../../../static/images/item/'+item.src+'.png'" class="pic" mode=""></image>
						<text class="text">{{item.title}}</text>
					</navigator>
				</block>
			</view>

			<!-- 筛选列表 -->
			<view class="screen_list">
				<view class="item_box">
					<view class="info_title">
						综合
					</view>
					<image src="../../../static/images/icon/7.png" class="pic" mode=""></image>
				</view>
				<view class="item">
					距离
				</view>
				<view class="item">
					价格
				</view>
				<view class="item">
					筛选
				</view>
			</view>

			<!-- 驾校列表 -->
			<view class="service_list">
				<block v-for="(item,idx) in listData" :key='idx'>
					<navigator :url="'../../signUp/school-details/school-details?id='+item.id" class="item">
						<view class="main_item">
							<image :src="item.coverImg" mode="" class="photo"></image>
							<view class="right_box">
								<view class="user_info">
									{{item.schoolName}}
								</view>
								<view class="comment_box">
									<view class="comment_stars">
										<block v-for="n in 5" :key='n'>
											<image src="../../../static/images/icon/icon-stars-1.png" class="pic" mode=""></image>
										</block>
										<text class="fraction">5.0分</text>
									</view>
									<view class="region">
										汉阳区
									</view>
								</view>
								<view class="cost_box">
									<view class="price">
										￥<text class="num">2620</text>
									</view>
									<view class="cost_text">
										C1 普通班
									</view>
								</view>
							</view>
						</view>
						<view class="bottom_item">
							<view class="tag_list">
								<view class="tag_item">
									规模大
								</view>
								<view class="tag_item">
									拿本快
								</view>
								<view class="tag_item">
									有接送
								</view>
								<view class="tag_item">
									约课方便
								</view>
							</view>
							<view class="activity_item" v-if="idx ==0">
								<text class="tag_info">免</text>
								<text class="tag_text">免费试学4小时</text>
							</view>
							<view class="activity_item" v-if="idx == 1">
								<text class="tag_info">减</text>
								<text class="tag_text">报名立减500</text>
							</view>
						</view>
					</navigator>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				city: '武汉市',
				columnData: [{
					url: '../../signUp/jiaxiao-ranking/jiaxiao-ranking',
					src: 'jkph',
					title: '驾校排行'
				}, {
					url: '../../signUp/Coach-ranking/Coach-ranking',
					src: 'jlph',
					title: '教练排行'
				}, {
					url: '../../signUp/Partner-service/Partner-service',
					src: 'plfw',
					title: '陪练服务'
				}, {
					url: '../../signUp/Driving-test-guide/Driving-test-guide',
					src: 'jkzn',
					title: '驾考指南'
				}, ],
				listData: []
			}
		},
		onLoad: function(options) {
			/* 获取定位 */
			// #ifdef APP-PLUS
			uni.getLocation({
				type: 'wgs84',
				geocode: true,
				altitude: true,
				success: (res) => {
					console.log(res);
					// 检测是否获取位置
					var address = uni.getStorageSync('address') || '0'
					/* 没有定位信息 */
					if (address == '0') {
						uni.showToast({
							icon: 'loading',
							title: '获取位置中...',
						});
						uni.setStorageSync('address', res)
						uni.hideToast();
						this.city = res.address.city
						/* 有定位信息 */
					} else if (address != '0') {
						/* 没有切换城市 */
						if (address.address.city == res.address.city) {
							uni.setStorageSync('address', res)
							this.city = res.address.city
							/* 切换城市 */
						} else if (address.address.city != res.address.city) {
							uni.showModal({
								title: '温馨提示',
								content: '当前位置是' + res.address.city + '是否切换',
								success: function(res) {
									if (res.confirm) {
										console.log('用户点击确定');
										uni.setStorageSync('address', res)
										this.city = res.address.city
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
						}
						/* 有定位信息 */
					} else {
						uni.showToast({
							icon: 'none',
							title: '获取位置失败，请开启手机设置定位权限！',
						});
					}

				}
			});
			// #endif
			//驾校列表
			uni.request({
				url: this.$Url + '/api/school/home',
				method: 'GET',
				data: {},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						var arr = []
						for (let i in res.data.msg) {
							res.data.msg[i].coverImg = this.$Url + res.data.msg[i].coverImg
							arr.push(res.data.msg[i]); //属性
						}
						this.listData = arr
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
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {

		}
	}
</script>

<style>
	.uni_container {
		background-color: #f6f6f6;
	}

	.search_module {
		display: block;
		width: 100%;
		height: 88rpx;
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		z-index: 9;
		background: #ffffff;
		padding: 8rpx 32rpx 8rpx;
		box-sizing: border-box;
	}

	.search_warp {
		display: flex;
		width: 686rpx;
		height: 72rpx;
		align-items: center;
		justify-content: space-between;
		background-color: #ffffff;
	}

	.search_warp .location {
		flex: 0 0 auto;
		height: 72rpx;
		max-width: 122rpx;
		font-size: 28rpx;
		line-height: 72rpx;
		color: #1d212d;
		background: url(../../../static/images/icon/icon-down.png) no-repeat right center;
		background-size: 24rpx 14rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
		margin-right: 10rpx;
	}

	.search_warp .search_input {
		flex: 0 0 auto;
		width: 554rpx;
		height: 72rpx;
		line-height: 72rpx;
		background: #f7f7f7 url(../../../static/images/icon/icon-search.png) no-repeat left 30rpx center;
		border-radius: 36rpx;
		background-size: 25rpx 28rpx;
		text-indent: 72rpx;
		font-size: 30rpx;
		color: #c1c1c1;
	}

	.main_wrap {
		display: block;
		width: 100%;
		height: auto;
		padding-top: 80rpx;
	}

	.banner_box {
		display: block;
		width: 100%;
		height: 350rpx;
		padding: 40rpx 32rpx;
		background: #ffffff;
		box-sizing: border-box;
	}

	.banner_box .swiper {
		width: 100%;
		height: 266rpx;
		border-radius: 16rpx;
		overflow: hidden;
		background: #c3c3c3;
	}

	.banner_box .pic {
		display: block;
		width: 100%;
		height: 266rpx;
	}

	.column_list {
		display: flex;
		width: 100%;
		height: 192rpx;
		background: #ffffff;
		border-radius: 0 0 70rpx 70rpx;
		justify-content: center;
		padding: 0 20rpx;
		box-sizing: border-box;
	}

	.column_list .item {
		flex: 0 0 auto;
		width: 25%;
		height: 160rpx;
		padding-top: 4rpx;
	}

	.column_list .item .pic {
		display: block;
		width: 92rpx;
		height: 92rpx;
		margin: 0 auto;
	}

	.column_list .item .text {
		display: block;
		font-size: 26rpx;
		color: #555555;
		line-height: 1;
		margin-top: 22rpx;
		text-align: center;
	}

	.screen_list {
		display: flex;
		width: 100%;
		height: 104rpx;
		padding: 20rpx 32rpx 0;
		align-items: center;
		box-sizing: border-box;
	}

	.screen_list .item_box {
		display: flex;
		align-items: center;
		width: 200rpx;
		height: 84rpx;
		line-height: 84rpx;
		text-indent: 30rpx;
		color: #3860ff;
		font-size: 30rpx;
	}

	.screen_list .item_box .pic {
		flex: 0 0 auto;
		width: 12rpx;
		height: 7rpx;
		margin-left: 6rpx;
	}

	.screen_list .item {
		flex: 0 0 auto;
		color: #999999;
		font-size: 30rpx;
		text-indent: 20rpx;
		height: 84rpx;
		line-height: 84rpx;
	}

	.screen_list .item:nth-child(2) {
		width: 180rpx;
	}

	.screen_list .item:nth-child(3) {
		width: 120rpx;
	}

	.screen_list .item:nth-child(4) {
		flex: 1 1 auto;
		width: auto;
		text-indent: 60rpx;
		position: relative;
	}

	.screen_list .item:nth-child(4):after {
		content: '';
		display: block;
		width: 2rpx;
		height: 28rpx;
		background-color: #999999;
		position: absolute;
		left: 0;
		top: 50%;
		margin-top: -14rpx;
	}

	.service_list {
		display: block;
		width: 100%;
		padding: 0 32rpx 1rpx;
		box-sizing: border-box;
	}

	.service_list .item {
		display: block;
		width: 100%;
		padding: 32rpx 0;
		margin-bottom: 24rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
	}


	.service_list .item .main_item {
		display: flex;
		width: 100%;
		height: 170rpx;
		border-radius: 16rpx;
		align-items: center;
		box-sizing: border-box;
	}

	.service_list .item .main_item .photo {
		flex: 0 0 auto;
		width: 170rpx;
		height: 170rpx;
		background-color: #5c5c5c;
		border-radius: 10rpx;
		margin-left: 20rpx;
	}

	.service_list .item .main_item .right_box {
		display: flex;
		width: 100%;
		height: 170rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
		align-items: flex-start;
		flex-direction: column;
		position: relative;
	}

	.service_list .item .main_item .user_info {
		display: block;
		font-size: 34rpx;
		line-height: 1;
		color: #202020;
		padding-top: 6rpx;
	}

	.service_list .item .main_item .comment_box {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		margin-top: 24rpx;
	}

	.service_list .item .main_item .comment_box .comment_stars {
		display: flex;
		align-items: center;
	}

	.service_list .item .main_item .comment_box .comment_stars .pic {
		flex: 0 0 auto;
		width: 21rpx;
		height: 20rpx;
		margin-right: 10rpx;
	}

	.service_list .item .main_item .comment_box .comment_stars .fraction {
		flex: 0 0 auto;
		color: #929292;
		font-size: 22rpx;
		margin-left: 15rpx;
		line-height: 1;
	}

	.service_list .item .main_item .comment_box .region {
		flex: 0 0 auto;
		color: #929292;
		font-size: 24rpx;
		line-height: 1;
	}

	.service_list .item .main_item .cost_box {
		display: flex;
		align-items: flex-end;
		margin-top: 20rpx;
		width: 100%;
		overflow: hidden;
		padding: 0 20rpx;
		box-sizing: border-box;
		position: absolute;
		bottom: 10rpx;
		left: 0rpx;
	}

	.service_list .item .main_item .cost_box .price {
		flex: 0 0 auto;
		color: #666666;
		font-size: 24rpx;
		line-height: 1;
		min-width: 120rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-right: 20rpx;
	}

	.service_list .item .main_item .cost_box .price .num {
		display: inline-block;
		font-size: 38rpx;
		color: #fe8c00;
	}

	.service_list .item .main_item .cost_box .cost_text {
		flex: 0 0 auto;
		color: #333333;
		font-size: 26rpx;
		line-height: 1;
	}

	.service_list .item .bottom_item {
		display: block;
		width: 100%;
		padding-left: 210rpx;
		box-sizing: border-box;
	}

	.service_list .item .bottom_item .tag_list {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}

	.service_list .item .bottom_item .tag_list .tag_item {
		flex: 0 0 auto;
		color: #929292;
		line-height: 1;
		padding: 4rpx 8rpx;
		background-color: #f6f6f6;
		border-radius: 4rpx;
		font-size: 24rpx;
		margin-right: 23rpx;
		margin: 14rpx 14rpx 0 0;
	}

	.service_list .item .bottom_item .activity_item {
		display: flex;
		align-items: center;
		width: 100%;
		margin-top: 12rpx;
		font-size: 22rpx;
	}

	.service_list .item .bottom_item .activity_item .tag_info {
		background: #3860ff;
		color: #ffffff;
		line-height: 1;
		padding: 5rpx;
		border: solid 1px #3860ff;
	}

	.service_list .item .bottom_item .activity_item .tag_text {
		color: #3860ff;
		line-height: 1;
		border: solid 1px #3860ff;
		padding: 5rpx 10rpx;
	}
</style>
