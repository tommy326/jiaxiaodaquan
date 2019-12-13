<template>
	<view class="main_container">
		<view class="tabs_box">
			<view class="item active">
				驾校
			</view>
			<!-- <view class="item">
				试题
			</view> -->
		</view>
		<!-- 驾校列表 -->
		<view class="service_list">
			<block v-for="(item,idx) in listData" :key='idx' v-if="item.schoolId != null">
				<navigator :url="'../../signUp/school-details/school-details?id='+item.collection_of_school.id" class="item">
					<view class="main_item">
						<image :src="'https://jkdq.521che.com'+item.collection_of_school.coverImg" mode="" class="photo"></image>
						<view class="right_box">
							<view class="user_info">
								{{item.collection_of_school.schoolName}}
							</view>
							<view class="comment_box">
								<view class="comment_stars">
									<block v-for="n in 5" :key='n'>
										<image src="../../../static/images/icon/icon-stars-1.png" class="pic" mode=""></image>
									</block>
									<text class="fraction">5.0分</text>
								</view>
								<view class="region">
									武昌区 300m
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
				</navigator>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listData: [],
			}
		},
		onLoad:function(){
			//驾校列表
			uni.request({
				url: this.$Url + '/api/v1/exam/collection/list',
				method: 'GET',
				data: {
					token:uni.getStorageSync('token')
				},
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
		methods: {

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
		box-sizing: border-box;
	}

	.tabs_box {
		display: flex;
		width: 100%;
		height: 88rpx;
		padding: 24rpx 32rpx 0;
		box-sizing: border-box;
		background: #ffffff;
		border-top: 1rpx solid #ededed;
	}

	.tabs_box .item {
		flex: 0 0 auto;
		width: 110rpx;
		height: 64rpx;
		text-align: center;
		line-height: 64rpx;
		color: #666666;
		font-size: 32rpx;
		margin-right: 36rpx;
	}

	.tabs_box .active {
		color: #3860ff;
		position: relative;
	}

	.tabs_box .active:after {
		content: '';
		display: block;
		width: 72rpx;
		height: 4rpx;
		background-color: #3860ff;
		position: absolute;
		left: 50%;
		bottom: 1rpx;
		margin-left: -36rpx;
	}
	
	.service_list {
		display: block;
		width: 100%;
		padding: 32rpx 32rpx 1rpx;
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
		justify-content: space-between;
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

</style>
