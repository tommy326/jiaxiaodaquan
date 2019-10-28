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
				<image src="http://iph.href.lu/686x266?text=686*266&fg=666666&bg=cccccc" class="pic" mode=""></image>
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
					<!-- <view class="down_box">
						
					</view> -->
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
			<view class="data_list">
				<view class="item_wrap" v-for="(item,idx) in listData" :key="idx" @click="ToSchoolDetails" :data-id='item.id'>
					<view class="left_box">
						<image :src="$Url+item.businessLicense" class="pic" mode=""></image>
					</view>
					<view class="right_box">
						<view class="name">{{item.schoolName}}</view>
						<view class="comment_box">
							<view class="comment_stars">
								<image src="../../../static/images/icon/icon-stars-1.png" mode=""></image>
								<image src="../../../static/images/icon/icon-stars-2.png" mode=""></image>
								<image src="../../../static/images/icon/icon-stars-3.png" mode=""></image>
								<image src="../../../static/images/icon/icon-stars-4.png" mode=""></image>
								<image src="../../../static/images/icon/icon-stars-5.png" mode=""></image>
							</view>
							<view class="comment_num">
								5.0分
							</view>
							<view class="comment_hit">班车接送</view>
						</view>
						<view class="range_box">
							<view class="range_num">
								80km
							</view>
							<view class="range_seat">
								{{item.location}}
							</view>
						</view>
						<view class="cost_box">
							<view class="cost_num">
								￥<text>2011</text>
							</view>
							<view class="cost_text">
								C1 普通班
							</view>
						</view>
					</view>
					<navigator url="" class="consult_btn" hover-class="none">免费咨询</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				city: '武汉市',
				columnData:[{url:'',src:'jkph',title:'驾校排行'},{url:'../../signUp/Coach-ranking/Coach-ranking',src:'jlph',title:'教练排行'},{url:'../../signUp/Partner-service/Partner-service',src:'plfw',title:'陪练服务'},{url:'',src:'jkzn',title:'驾考指南'},],
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
							title: '获取位置失败，请检查手机定位权限设置！',
						});
					}

				}
			});
			// #endif
			//驾校列表
			uni.request({
				url: this.$Url+'/api/school/home',
				method: 'GET',
				data: {},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if(res.data.code == 200){
						this.listData = res.data.msg
					}else{
						uni.showToast({
							icon:'none',
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
			ToSchoolDetails:function(e){
				uni.navigateTo({
				    url: '../../signUp/school-details/school-details?id='+e.currentTarget.dataset.id
				});
			}
		}
	}
</script>

<style lang='scss'>
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

	.banner_box .pic {
		display: block;
		width: 100%;
		height: 266rpx;
		background-color: #656565;
		border-radius: 16rpx;
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
		flex: 0 0 auto;
		width: 200rpx;
		height: 84rpx;
		line-height: 84rpx;
		text-indent: 30rpx;
		color: #3860ff;
		font-size: 30rpx;
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

	.data_list {
		display: block;
		width: 100%;
		height: auto;
		padding: 0 32rpx 1rpx;
		box-sizing: border-box;
	}

	.item_wrap {
		display: flex;
		width: 100%;
		height: auto;
		min-height: 286rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		padding: 32rpx 20rpx 0;
		box-sizing: border-box;
		position: relative;
		margin-bottom: 24rpx;
	}

	.left_box {
		flex: 0 0 auto;
		width: 170rpx;
		margin-right: 20rpx;
	}

	.left_box .pic {
		display: block;
		width: 170rpx;
		height: 170rpx;
		background-color: #5c5c5c;
		border-radius: 10rpx;
	}

	.right_box {
		flex: 1 1 auto;
	}

	.right_box .name {
		color: #202020;
		font-size: 34rpx;
		font-weight: bold;
		line-height: 1;
		padding-top: 6rpx;
	}

	.right_box .comment_box {
		display: flex;
		width: 100%;
		align-items: center;
		margin-top: 20rpx;
	}

	.right_box .comment_box .comment_stars {
		display: flex;
	}

	.right_box .comment_box .comment_stars image {
		flex: 0 0 auto;
		width: 23rpx;
		height: 22rpx;
		margin: 8rpx;
	}

	.right_box .comment_box .comment_num {
		flex: 0 0 auto;
		color: #333333;
		font-size: 28rpx;
		margin-left: 12rpx;
		margin-right: 20rpx;
	}

	.right_box .comment_box .comment_hit {
		flex: 0 0 auto;
		color: #3860ff;
		font-size: 28rpx;
		padding-left: 20rpx;
		border-left: 2rpx solid #d9d9d9;
	}

	.right_box .range_box {
		display: flex;
		align-items: center;
		margin-top: 10rpx;
	}

	.right_box .range_box .range_num {
		flex: 0 0 auto;
		font-size: 28rpx;
		line-height: 1;
		color: #666666;
		border: solid 1px #3860ff;
		padding: 5rpx 8rpx;
		border-radius: 4rpx;
		margin-right: 11rpx;
	}

	.right_box .range_box .range_seat {
		flex: 0 0 auto;
		font-size: 28rpx;
		color: #666666;
	}

	.right_box .cost_box {
		display: flex;
		width: 100%;
		align-items: center;
		margin-top: 32rpx;
	}

	.right_box .cost_box .cost_num {
		flex: 0 0 auto;
		font-size: 28rpx;
		color: #666666;
		margin-right: 28rpx;
	}

	.right_box .cost_box .cost_num text {
		color: #fe8c00;
		font-size: 38rpx;
		line-height: 1;
	}

	.right_box .cost_box .cost_text {
		flex: 0 0 auto;
		color: #666666;
		font-size: 28rpx;
	}

	.consult_btn {
		position: absolute;
		display: block;
		width: 160rpx;
		height: 56rpx;
		background-color: #3860ff;
		border-radius: 6rpx 28rpx 28rpx 28rpx;
		line-height: 56rpx;
		text-align: center;
		font-size: 28rpx;
		color: #ffffff;
		bottom: 32rpx;
		right: 20rpx;
	}
</style>
