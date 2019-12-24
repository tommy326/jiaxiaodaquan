<template>
	<view class="main_container">
		<view class="tabs_box">
			<view class="item active">
				<text class="text">综合排行</text>
				<image src="../../../static/images/icon/7.png" class="pic" mode=""></image>
			</view>
			<view class="item">
				<text class="text">价格</text>
			</view>
			<view class="item">
				<text class="text">筛选</text>
			</view>
		</view>
		<!-- 列表 -->
		<view class="service_list">
			<block v-for="(item,idx) in listData" :key='idx'>
				<navigator :url="'../../signUp/school-details/school-details?id='+item.id" class="item">
					<view class="main_item">
						<view class="eq" :class="idx < 3?'eq_on':''">
							{{idx+1}}
						</view>
						<image :src="item.coverImg" mode="" class="photo"></image>
						<view class="right_box">
							<view class="user_info">
								{{item.schoolName}}
							</view>
							<view class="comment_box">
								<view class="comment_stars">
									<block v-for="n in item.score" :key='n'>
										<image src="../../../static/images/icon/icon-stars-1.png" class="pic" mode=""></image>
									</block>
									<text class="fraction">{{item.score}}.0分</text>
								</view>
								<view class="region">
									{{item.location}}
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
							<block v-for="items in item.label" :key='items'>
								<view class="tag_item">
									{{items}}
								</view>
							</block>
						</view>
						<view class="activity_item" v-if="item.freeLearn != null">
							<text class="tag_info">免</text>
							<text class="tag_text">{{item.freeLearn}}</text>
						</view>
						<view class="activity_item" v-if="item.reduction != null">
							<text class="tag_info">减</text>
							<text class="tag_text">{{item.reduction}}</text>
						</view>
					</view>
				</navigator>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listData: []
			}
		},
		onLoad() {
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
							res.data.msg[i].label = res.data.msg[i].label.split(",")
							res.data.msg[i].score = res.data.msg[i].score == null ? 5 : res.data.msg[i].score
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
		methods: {
			ToSchoolDetails: function(e) {
				uni.navigateTo({
					url: '../../signUp/school-details/school-details?id=' + e.currentTarget.dataset.id
				});
			}
		}
	}
</script>

<style>
	.main_container {
		display: block;
		width: 100%;
		height: auto;
		/* #ifdef H5 */
		min-height: calc(100vh - 44px);
		/* #endif */
		/* #ifdef APP-PLUS */
		min-height: 100vh;
		/* #endif */
		background: #f6f6f6;
		padding: 0 32rpx 24rpx;
		box-sizing: border-box;
	}

	.tabs_box {
		display: flex;
		width: 100%;
		height: 92rpx;
		align-items: center;
		justify-content: space-between;
	}

	.tabs_box .item {
		display: flex;
		width: auto;
		padding: 0 30rpx;
		height: 92rpx;
		align-items: center;
		justify-content: center;
		color: #999999;
	}

	.tabs_box .item .text {
		flex: 0 0 auto;
		font-size: 30rpx
	}

	.tabs_box .active {
		color: #3860ff;
	}

	.tabs_box .item .pic {
		flex: 0 0 auto;
		width: 12rpx;
		height: 7rpx;
		margin-left: 6rpx;
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

	.service_list .item .main_item .eq {
		flex: 0 0 auto;
		font-size: 36rpx;
		width: 60rpx;
		height: 170rpx;
		color: #999999;
		line-height: 1;
		line-height: 170rpx;
		text-align: center;
	}

	.service_list .item .main_item .eq_on {
		/* font-size: 72rpx; */
		color: #3860ff;
	}

	.service_list .item .main_item .photo {
		flex: 0 0 auto;
		width: 170rpx;
		height: 170rpx;
		background-color: #5c5c5c;
		border-radius: 10rpx;
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
		padding-left: 250rpx;
		box-sizing: border-box;
	}

	.service_list .item .bottom_item .tag_list {
		display: flex;
		width: 100%;
		height: 46rpx;
		flex-wrap: wrap;
		overflow-x: hidden;
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
