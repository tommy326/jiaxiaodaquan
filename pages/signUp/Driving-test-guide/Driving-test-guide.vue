<template>
	<view>
		<view class="banner_box">

		</view>
		<view class="sub_title">
			官方榜单
		</view>
		<scroll-view scroll-x class="listData">
			<view class="list">
				<view class="item">
					<image src="../../../static/images/item/1.png" class="pic" mode=""></image>
				</view>
				<view class="item">
					<image src="../../../static/images/item/2.png" class="pic" mode=""></image>
				</view>
				<view class="item">
					<image src="../../../static/images/item/3.png" class="pic" mode=""></image>
				</view>
			</view>

		</scroll-view>
		<view class="sub_title">
			驾考咨询
		</view>
		<view class="news_list">
			<block v-for="item in listData" :key='item.title'>
				<view class="item">
					<view class="info_wrap">
						<view class="info_title">
							{{item.title}}
						</view>
						<view class="time">
							{{item.time}}
						</view>
					</view>
					<view class="photo_wrap">
						<image :src="item.image" class="pic" mode=""></image>
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
				listData: []
			}
		},
		onLoad() {
			uni.request({
				url: this.$Url + '/api/school/compress',
				method: 'GET',
				data: {},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log(res)
						var arr = []
						for (let i in res.data.msg) {
							res.data.msg[i].image = this.$Url + res.data.msg[i].image
							res.data.msg[i].title = res.data.msg[i].title.length > 24?res.data.msg[i].title.substring(0,24)+'...':res.data.msg[i].title
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
	.banner_box {
		display: block;
		width: 686rpx;
		height: 358rpx;
		background-color: #4c4c4c;
		border-radius: 20rpx;
		margin: 12rpx auto 0;
	}

	.sub_title {
		display: block;
		width: 100%;
		font-size: 40rpx;
		color: #202020;
		font-weight: bold;
		text-indent: 32rpx;
		margin-top: 80rpx;
		line-height: 1;
	}

	.listData {
		display: block;
		width: 100%;
		height: 208rpx;
		padding-top: 40rpx;
		box-sizing: border-box;
	}

	.listData .list {
		display: flex;
		width: auto;
		height: 168rpx;
		align-items: center;
		padding: 0 32rpx;
	}

	.listData .item {
		flex: 0 0 auto;
		width: 328rpx;
		height: 168rpx;
		margin-right: 24rpx;
	}

	.listData .item:nth-child(1) {}

	.listData .item .pic {
		display: block;
		width: 328rpx;
		height: 168rpx;
	}

	.news_list .item {
		display: flex;
		width: 100%;
		padding: 32rpx;
		box-sizing: border-box;
	}


	.news_list .item .photo_wrap {
		flex: 0 0 auto;
		width: 240rpx;
		height: 160rpx;
		background-color: #d1d1d1;
		border-radius: 16rpx;
		margin-left: 32rpx;
		overflow: hidden;
	}

	.news_list .item .photo_wrap .pic {
		display: block;
		width: 240rpx;
		height: 160rpx;
	}

	.news_list .item .info_wrap {
		flex: 1 1 auto;
		color: #333333;
		font-size: 32rpx;
		line-height: 48rpx;
		position: relative;
	}

	.news_list .item .info_wrap .time {
		display: block;
		color: #929292;
		font-size: 24rpx;
		position: absolute;
		bottom: 8rpx;
		left: 0;
		line-height: 1;
	}
</style>
