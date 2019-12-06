<template>
	<view class="main_container">
		<view class="hits_text">
			关于{{subject == 0?'科一':'科四'}}考试的相关问题的一个问答... 的<text>{{listData.length}}</text>个问题
		</view>
		<view class="list">
			<block v-for="item in listData" :key='item'>
				<view class="item">
					<view class="key">
						{{item.content}}
					</view>
					<view class="val">
						{{item.community_ask_to_many_answer[0].replyContent}}
					</view>
					<view class="info_box">
						<view class="num">
							全部{{item.community_ask_to_many_answer.length}}个回答
						</view>
						<view class="time">
							{{item.community_ask_to_many_answer[0].created_at}}
						</view>
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
				subject: '',
				listData:[]
			}
		},
		onLoad: function(options) {
			console.log('科目:' + options.tabs);
			this.subject = options.tabs
			uni.setNavigationBarTitle({
				title: options.tabs == 0 ? '科一社区' : '科四社区'
			});
			uni.request({
				url: this.$Url + '/api/school/community', //仅为示例，并非真实接口地址。
				method: 'GET',
				data: {
					// token: uni.getStorageSync('token')
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log(res.data)
						var arr = []
						for (let i in res.data.msg) {
							arr.push(res.data.msg[i]); //属性
						}
						this.listData = arr
					} else {
						uni.showToast({
							icon: 'none',
							title: '网络不给力，请稍后重试',
							duration: 1000
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
	uni-page-body,
	uni-page-refresh {
		min-height: 100%;
		background: #f6f6f6;
	}

	.main_container {
		/* #ifdef APP-PLUS */
		min-height: 100vh;
		background: #f6f6f6;
		/* #endif */
	}

	.hits_text {
		display: block;
		width: 100%;
		height: 86rpx;
		text-align: center;
		line-height: 86rpx;
		color: #929292;
		font-size: 24rpx
	}

	.hits_text text {
		color: #3860ff;
	}

	.list {
		display: block;
		width: 100%;
		padding: 0 32rpx 1rpx;
		box-sizing: border-box;
	}

	.list .item {
		display: block;
		width: 100%;
		padding: 36rpx 22rpx;
		box-sizing: border-box;
		background-color: #ffffff;
		border-radius: 16rpx;
		margin-bottom: 24rpx;
	}

	.list .item .key {
		display: block;
		width: 100%;
		color: #333333;
		font-size: 30rpx;
		padding-left: 43rpx;
		background: url(../../../static/images/icon/31.png) no-repeat left top 8rpx;
		background-size: 32rpx 32rpx;
		line-height: 48rpx;
		box-sizing: border-box;
		font-weight: bold;
	}

	.list .item .val {
		display: block;
		width: 100%;
		color: #333333;
		font-size: 26rpx;
		padding-left: 43rpx;
		background: url(../../../static/images/icon/32.png) no-repeat left top 6rpx;
		background-size: 32rpx 32rpx;
		line-height: 44rpx;
		margin-top: 16rpx;
		box-sizing: border-box;
	}

	.list .item .info_box {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		color: #929292;
		font-size: 20rpx;
		margin-top: 20rpx;
	}
</style>
