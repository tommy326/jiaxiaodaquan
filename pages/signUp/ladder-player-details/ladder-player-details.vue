<template>
	<view>
		<scroll-view scroll-y="true" class="main_box">
			<block v-for="(item,idx) in listData" :key='idx'>
				<view class="head_wrap">
					<view class="user_info">
						<view class="avatar_wrap">
							<image :src="item.avatar" class="pic" mode=""></image>
						</view>
						<view class="info_wrap">
							<view class="name">
								{{item.name}}
							</view>
							<view class="score_wrap">
								<block v-for="n in item.score" :key='n'>
									<image src="../../../static/images/icon/icon-stars-1.png" class="pic" mode=""></image>
								</block>
								<text class="score_num">{{item.score}}.0分</text>
							</view>
						</view>
					</view>
					<view class="info_list">
						<view class="item">
							<view class="key">
								{{item.school}}
							</view>
							<view class="val">
								蓝华驾校
							</view>
						</view>
						<view class="item">
							<view class="key">
								市排名
							</view>
							<view class="val">
								12
							</view>
						</view>
						<view class="item">
							<view class="key">
								学员数
							</view>
							<view class="val">
								{{item.num}}
							</view>
						</view>
					</view>
				</view>
				<view class="sub_title">
					陪练详情
				</view>
				<view class="details_list">
					<view class="item">
						<view class="key">
							陪练类型
						</view>
						<view class="val">
							科三拿本上路陪练
						</view>
					</view>
					<view class="item">
						<view class="key">
							陪练价格
						</view>
						<view class="val">
							{{item.price}}元/小时
						</view>
					</view>
					<view class="item">
						<view class="key">
							起约时间
						</view>
						<view class="val">
							2小时
						</view>
					</view>
					<view class="item">
						<view class="key">
							陪练车辆
						</view>
						<view class="val">
							大众迈腾/手动挡
						</view>
					</view>
				</view>
				<view class="sub_title">
					描述
				</view>
				<view class="describe">
					本人是有多年驾驶培训经练，驾驶技术清湛，教学态度端正。
				</view>
			</block>
		</scroll-view>
		<view class="footer_box">
			<view class="item_btn">
				免费咨询
			</view>
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
		onLoad: function(options) {
			console.log('教练id:' + options.id);
			uni.request({
				url: this.$Url + '/api/school/coach',
				method: 'GET',
				data: {
					id: options.id
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						var arr = []
						for (let i in res.data.msg) {
							res.data.msg[i].avatar = this.$Url + res.data.msg[i].avatar
							res.data.msg[i].score = res.data.msg[i].score == null ? 5 : res.data.msg[i].score
							res.data.msg[i].price = res.data.msg[i].price == null ? 200 : res.data.msg[i].price
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
	.main_box {
		display: block;
		width: 100%;
		padding-bottom: 120rpx;
	}

	.footer_box {
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		width: 100%;
		height: 120rpx;
		background-color: #ffffff;
		box-shadow: 0px -1px 1px 0px rgba(0, 0, 0, 0.08);
		justify-content: center;
		align-items: center;
		padding: 0 32rpx;
		box-sizing: border-box;
	}

	.footer_box .item_btn {
		flex: 0 0 auto;
		width: 100%;
		height: 88rpx;
		border-radius: 44rpx;
		font-size: 34rpx;
		line-height: 88rpx;
		text-align: center;
		color: #ffffff;
		background: #3860ff;
	}

	.head_wrap {
		display: block;
		width: 100%;
		height: 376rpx;
		background-color: #3860ff;
		border-radius: 0 0 72rpx 72rpx;
	}

	.head_wrap .user_info {
		display: flex;
		width: 100%;
		padding: 30rpx 36rpx;
		box-sizing: border-box;
		align-items: center;
	}

	.head_wrap .user_info .avatar_wrap {
		flex: 0 0 auto;
		width: 120rpx;
		height: 120rpx;
		background-color: #3860ff;
		border: solid 3rpx rgba(255, 255, 255, 0.56);
		border-radius: 50%;
	}

	.head_wrap .user_info .avatar_wrap .pic {
		display: block;
		width: 120rpx;
		height: 120rpx;
	}

	.head_wrap .user_info .info_wrap {
		flex: 1 1 auto;
		margin: 0 40rpx;
	}

	.head_wrap .user_info .info_wrap .name {
		color: #ffffff;
		font-size: 48rpx;
		font-weight: bold;
		line-height: 1;
	}

	.head_wrap .user_info .info_wrap .score_wrap {
		display: flex;
		width: 100%;
		align-items: center;
		margin-top: 18rpx;
	}

	.head_wrap .user_info .info_wrap .score_wrap .pic {
		flex: 0 0 auto;
		width: 23rpx;
		height: 22rpx;
		margin-right: 10rpx;
	}

	.head_wrap .user_info .info_wrap .score_wrap {
		flex: 0 0 auto;
		color: #eaeaea;
		font-size: 28rpx;
	}

	.head_wrap .info_list {
		display: flex;
		width: 100%;
		height: 100rpx;
		margin-top: 28rpx;
	}

	.head_wrap .info_list .item {
		flex: 0 0 auto;
		width: 33.3%;
		height: 100rpx;
		text-align: center;
		color: #e0e0e0;
		font-size: 28rpx;
	}

	.head_wrap .info_list .item:nth-child(2),
	.head_wrap .info_list .item:nth-child(3) {
		border-left: 1px solid rgba(255, 255, 255, .2);
		box-sizing: border-box;
	}

	.head_wrap .info_list .item .key {
		display: block;
		width: 100%;
		padding-top: 2rpx;
		line-height: 1;
	}

	.head_wrap .info_list .item .val {
		display: block;
		width: 100%;
		color: #fafafa;
		font-size: 40rpx;
		line-height: 1.2;
		padding: 10rpx;
		box-sizing: border-box;
	}

	.sub_title {
		display: block;
		width: 100%;
		font-size: 40rpx;
		color: #202020;
		font-weight: bold;
		padding: 72rpx 32rpx 31rpx;
		box-sizing: border-box;
		line-height: 1;
	}

	.details_list {
		display: flex;
		width: 100%;
		padding: 0 32rpx;
		box-sizing: border-box;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.details_list .item {
		flex: 0 0 auto;
		width: 330rpx;
		height: 250rpx;
		border-radius: 16rpx;
		padding: 126rpx 20rpx 0 38rpx;
		box-sizing: border-box;
	}

	.details_list .item:nth-child(1) {
		background: #f3f6ff url(../../../static/images/icon/27.png) no-repeat top 37rpx left 40rpx;
		background-size: 56rpx 56rpx;
		margin-bottom: 26rpx;
	}

	.details_list .item:nth-child(2) {
		background: #f3f6ff url(../../../static/images/icon/28.png) no-repeat top 36rpx left 39rpx;
		background-size: 58rpx 58rpx;
		margin-bottom: 26rpx;
	}

	.details_list .item:nth-child(3) {
		background: #f3f6ff url(../../../static/images/icon/29.png) no-repeat top 36rpx left 39rpx;
		background-size: 58rpx 58rpx;
	}

	.details_list .item:nth-child(4) {
		background: #f3f6ff url(../../../static/images/icon/30.png) no-repeat top 39rpx left 37rpx;
		background-size: 62rpx 51rpx;
	}

	.details_list .item .key {
		display: block;
		color: #666666;
		width: 100%;
		font-size: 28rpx;
		line-height: 1;
	}

	.details_list .item .val {
		display: block;
		width: 100%;
		color: #333333;
		font-size: 32rpx;
		line-height: 1.2;
		padding-top: 10rpx;
	}

	.describe {
		display: block;
		color: #666666;
		font-size: 28rpx;
		padding: 0 33rpx 30rpx;
		box-sizing: border-box;
		line-height: 48rpx;
	}
</style>
