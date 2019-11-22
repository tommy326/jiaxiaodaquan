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
							<view class="score_box">
								<view class="score_wrap">
									<block v-for="n in item.score" :key='n'>
										<image src="../../../static/images/icon/icon-stars-1.png" class="pic" mode=""></image>
									</block>
									<text class="text">{{item.score}}分</text>
								</view>
								<view class="score_num">
									综合分{{item.num}}
								</view>
							</view>
							<view class="tag_box">
								<image src="../../../static/images/icon/33.png" class="tag_pic" mode=""></image>
								<text class="tag_item">和蔼可亲</text>
							</view>
						</view>
					</view>
					<view class="info_list">
						<view class="item">
							<view class="val">
								{{item.school}}
							</view>
							<view class="key">
								驾校
							</view>
						</view>
						<view class="item">
							<view class="val">
								20节课
							</view>
							<view class="key">
								可约课程
							</view>
						</view>
					</view>
				</view>
				<view class="mid_wrap">
					<view class="tabs_list">
						<view class="item active">
							班型
						</view>
						<view class="item">
							简介
						</view>
						<view class="item">
							评价
							<text class="num">2425</text>
						</view>
					</view>
					<view class="content_wrap">
						<!-- 班型 -->
						<view class="class_list" v-if="tabs == 0">
							<block v-for="n in 3" :key='n'>
								<view class="item">
									<view class="level c">
										C1
									</view>
									<view class="class_info">
										<view class="class_name">
											特价班
										</view>
										<view class="class_data">
											<view class="label">
												自行前往
											</view>
											<view class="label">
												多人一车
											</view>
											<view class="time">
												周一到周日训练
											</view>
										</view>
									</view>
									<view class="call_btn">
										<image src="../../../static/images/icon/icon-hotline-1.png" class="img" mode=""></image>
										<text class="text">免费咨询</text>
									</view>
								</view>
							</block>
						</view>
					</view>
				</view>
			</block>
		</scroll-view>
		<view class="footer_box">
			<view class="item_btn">
				约课
			</view>
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
				tabs: 0,
				listData: []
			}
		},
		onLoad(options) {
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
	}

	.footer_box .item_btn {
		flex: 0 0 auto;
		width: 300rpx;
		height: 88rpx;
		border-radius: 44rpx;
		margin: 0 20rpx;
		font-size: 34rpx;
		line-height: 88rpx;
		text-align: center;
	}

	.footer_box .item_btn:nth-child(1) {
		background: #ebefff;
		color: #3860ff;
	}

	.footer_box .item_btn:nth-child(2) {
		color: #ffffff;
		background: #3860ff;
	}

	.main_box .head_wrap {
		display: block;
		width: 100%;
		height: 464rpx;
		background: #375ffc;
	}

	.main_box .head_wrap .user_info {
		display: flex;
		width: 100%;
		padding: 32rpx;
		box-sizing: border-box;
		align-items: center;
	}

	.main_box .head_wrap .user_info .avatar_wrap {
		flex: 0 0 auto;
		width: 150rpx;
		height: 150rpx;
		background-color: #929292;
		border: solid 4rpx rgba(255, 255, 255, 0.56);
		box-sizing: border-box;
		border-radius: 50%;
	}

	.main_box .head_wrap .user_info .avatar_wrap .pic {
		display: block;
		width: 150rpx;
		height: 150rpx;
	}

	.main_box .head_wrap .user_info .info_wrap {
		flex: 1 1 auto;
		width: 100%;
		margin-left: 25rpx;
		box-sizing: border-box;
	}

	.main_box .head_wrap .info_wrap .name {
		display: block;
		color: #ffffff;
		font-size: 36rpx;
	}

	.main_box .head_wrap .user_info .score_box {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		margin: 10rpx 0;
	}

	.main_box .head_wrap .score_wrap {
		display: flex;
		align-items: center;
	}

	.main_box .head_wrap .score_wrap .pic {
		flex: 0 0 auto;
		width: 21rpx;
		height: 20rpx;
		margin-right: 10rpx;
	}

	.main_box .user_info .score_wrap .text {
		flex: 0 0 auto;
		color: #ffffff;
		opacity: 0.8;
		font-size: 22rpx;
	}

	.main_box .info_wrap .score_num {
		flex: 0 0 auto;
		color: #ffffff;
		opacity: 0.8;
		font-size: 28rpx;
	}

	.main_box .head_wrap .tag_box {
		display: flex;
		align-items: center;
	}

	.main_box .tag_box .tag_pic {
		flex: 0 0 auto;
		width: 106rpx;
		height: 32rpx;
		margin-right: 17rpx;
	}

	.main_box .tag_box .tag_item {
		flex: 0 0 auto;
		color: #ececec;
		font-size: 24rpx;
		line-height: 1;
		padding: 4rpx 8rpx 5rpx 9rpx;
		background: #5e7efd;
	}

	.head_wrap .info_list {
		display: flex;
		width: 100%;
		height: 150rpx;
		align-items: center;
		justify-content: center;
		margin-top: 10rpx;
	}

	.head_wrap .info_list .item {
		flex: 0 0 auto;
		width: 330rpx;
		height: 150rpx;
		margin: 0 10rpx;
		padding: 60rpx 0 0 32rpx;
		box-sizing: border-box;
	}

	.head_wrap .info_list .item:nth-child(1) {
		background: url(../../../static/images/icon/34.png) no-repeat;
		background-size: 100%;
	}

	.head_wrap .info_list .item:nth-child(2) {
		background: url(../../../static/images/icon/35.png) no-repeat;
		background-size: 100%;
	}

	.head_wrap .info_list .val {
		display: block;
		color: #030427;
		font-size: 28rpx;
		line-height: 1;
	}

	.head_wrap .info_list .key {
		display: block;
		color: #616982;
		font-size: 20rpx;
		line-height: 1;
		margin-top: 14rpx;
	}

	.mid_wrap {
		display: block;
		width: 100%;
		padding-top: 40rpx;
		border-radius: 40rpx 40rpx 0 0;
		margin-top: -40rpx;
		background: #ffffff;
	}

	.mid_wrap .tabs_list {
		display: flex;
		width: 100%;
		height: 64rpx;
		padding: 0 32rpx;
		box-sizing: border-box;
		align-items: center;
	}

	.mid_wrap .tabs_list .item {
		flex: 0 0 auto;
		min-width: 130rpx;
		color: #909090;
		font-size: 36rpx;
	}

	.mid_wrap .tabs_list .num {
		font-size: 18rpx;
	}

	.mid_wrap .tabs_list .active {
		position: relative;
		color: #3860ff;
		font-weight: bold;
	}

	.mid_wrap .tabs_list .active:after {
		content: '';
		display: block;
		position: absolute;
		width: 40rpx;
		height: 6rpx;
		background-color: #3860ff;
		border-radius: 3rpx;
		left: 14rpx;
		bottom: -10rpx;
	}

	.mid_wrap .tabs_list .item:last-child {
		display: flex;
		align-items: flex-end;
	}

	.mid_wrap .tabs_list .item:last-child text {
		flex: 0 0 auto;
		color: #929292;
		font-size: 18rpx;
		margin-left: 10rpx;
	}

	.mid_wrap .class_list {
		margin-top: 20rpx;
	}

	.mid_wrap .class_list .item {
		display: flex;
		width: 100%;
		height: 128rpx;
		padding: 0 32rpx;
		box-sizing: border-box;
		align-items: center;
	}

	.mid_wrap .class_list .item .level {
		flex: 0 0 auto;
		width: 80rpx;
		height: 80rpx;
		border-radius: 10rpx;
		background: #007AFF;
		color: #ffffff;
		font-size: 44rpx;
		line-height: 80rpx;
		text-align: center;
	}

	.mid_wrap .class_list .item .c {
		background-image: linear-gradient(-45deg,
			#fa5a5a 0%,
			#ff7676 100%),
			linear-gradient(#333334,
			#333334);
		background-blend-mode: normal,
			normal;
	}

	.mid_wrap .class_list .item .b {
		background-image: linear-gradient(-45deg,
			#4481eb 0%,
			#04befe 100%),
			linear-gradient(#333334,
			#333334);
		background-blend-mode: normal,
			normal;
	}

	.mid_wrap .class_list .item .a {
		background-image: linear-gradient(-45deg,
			#fa9155 0%,
			#ffda57 100%),
			linear-gradient(#333334,
			#333334);
		background-blend-mode: normal,
			normal;
	}

	.mid_wrap .class_list .item .class_info {
		flex: 1 1 auto;
		font-size: 36rpx;
		margin: 0 20rpx;
	}

	.mid_wrap .class_list .item .call_btn {
		flex: 0 0 auto;
		width: 96rpx;
	}

	.mid_wrap .class_list .item .call_btn .img {
		display: block;
		width: 34rpx;
		height: 34rpx;
		margin: 0 auto;
	}

	.mid_wrap .class_list .item .call_btn .text {
		display: block;
		font-size: 24rpx;
		color: #909090;
		margin-top: 14rpx;
	}

	.mid_wrap .class_list .item .class_info .class_name {
		color: #202020;
	}

	.mid_wrap .class_list .item .class_info .class_data {
		display: flex;
		font-size: 28rpx;
		align-items: center;
		color: #808080;
	}

	.mid_wrap .class_list .item .class_info .class_data .label {
		flex: 0 0 auto;
		font-size: 22rpx;
		padding: 4rpx 8rpx;
		border-radius: 4rpx;
		border: solid 2rpx #3860ff;
		line-height: 1;
		color: #3860ff;
		margin-right: 10rpx;
	}
</style>
