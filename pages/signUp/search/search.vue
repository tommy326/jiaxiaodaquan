<template>
	<view class="main_container">
		<!-- #ifdef APP-PLUS -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- #endif -->
		<view class="search_warp">
			<view class="search_box">
				<input type="text" :value="search" focus='true' confirm-type="search" @input="tapSearch" @confirm='formSubmit' />
				<view class="input_clear" v-if="SearchIcon" @click="clearSearch"></view>
			</view>
			<view class="return" @click="tapReturn">
				取消
			</view>
		</view>

		<!-- 驾校列表 -->
		<view class="service_list">
			<view class="hits_text" v-if="hits">
				暂没“{{search}}”相关内容
			</view>
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
</template>

<script>
	export default {
		data() {
			return {
				search: '',
				SearchIcon: false,
				listData: [],
				hits:false
			}
		},
		methods: {
			tapSearch: function(e) {
				this.search = e.target.value;
				if (e.target.value.length > 0) {
					this.SearchIcon = true;
				} else {
					this.SearchIcon = false;
				}
			},
			clearSearch: function() {
				this.search = '';
				this.SearchIcon = false;
				this.hits = false
			},
			tapReturn: function() {
				uni.navigateBack()
			},
			formSubmit: function(e) {
				uni.request({
					url: this.$Url + '/api/school/search', //仅为示例，并非真实接口地址。
					method: 'GET',
					data: {
						keyword: this.search
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						console.log(res.data)
						var arr = []
						for (let i in res.data.msg) {
							res.data.msg[i].coverImg = this.$Url + res.data.msg[i].coverImg
							arr.push(res.data.msg[i]); //属性
						}
						this.listData = arr
						if(arr.length > 0){
							this.hits = false
						}else{
							this.hits = true
						}
					}
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
		min-height: 100vh;
		background: #f6f6f6;
	}

	.search_warp {
		display: flex;
		width: 100%;
		height: 118rpx;
		background-color: #ffffff;
		padding: 0 40rpx;
		box-sizing: border-box;
		align-items: center;
	}

	.search_box {
		display: flex;
		width: 100%;
		height: 80rpx;
		border-radius: 40rpx;
		background: #f2f2f2 url(../../../static/images/icon/icon-search.png) no-repeat left 30rpx center;
		background-size: 25rpx 28rpx;
		padding: 0 30rpx 0 70rpx;
		align-items: center;
	}

	.search_box input {
		flex: 1 1 auto;
		width: 100%;
		height: 80rpx;
	}

	.search_box .input_clear {
		flex: 0 0 auto;
		width: 40rpx;
		height: 40rpx;
		background: url(../../../static/images/icon/clear.png) no-repeat center;
		background-size: 28rpx 28rpx;
	}

	.return {
		flex: 0 0 auto;
		width: 97rpx;
		height: 80rpx;
		color: #333333;
		font-size: 30rpx;
		text-align: right;
		line-height: 80rpx;
	}

	.service_list {
		display: block;
		width: 100%;
		height: calc(100vh - 80rpx);
		padding: 30rpx 32rpx;
		box-sizing: border-box;
		overflow-y: scroll;
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

	.hits_text {
		display: block;
		font-size: 24rpx;
		color: #929292;
		text-align: center;
	}
</style>
